'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import {
  TERMINAL_BOOT_SEQUENCE,
  TERMINAL_HELP,
  TERMINAL_WHOAMI,
  TERMINAL_LS_ROOT,
  TERMINAL_LS_ARSENAL,
  TERMINAL_CAT_MANIFESTO,
  TERMINAL_MOTTO_CYCLE,
  TERMINAL_GOD,
  TERMINAL_NMAP_TEMPLATE,
  TERMINAL_SUDO_SANDWICH,
  TERMINAL_DATE,
  TERMINAL_UNAME,
  TERMINAL_NOT_FOUND,
  TERMINAL_EXIT_MESSAGE,
  TERMINAL_EASTER_EGGS,
} from '@/lib/terminal/responses'

type Line = { kind: 'in' | 'out'; text: string }

const COMMANDS = [
  'help','whoami','ls','cat','cd','nmap','motto','god','date',
  'uname','history','clear','exit','sudo',
]
const FILES = [
  'manifesto.txt','dossier/','operations/','arsenal/','academy/',
  'transmissions/','comms.sh',
]

export default function TerminalPage() {
  const [lines, setLines] = useState<Line[]>([])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIdx, setHistoryIdx] = useState(-1)
  const [mottoIdx, setMottoIdx] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      if (i < TERMINAL_BOOT_SEQUENCE.length) {
        setLines((prev) => [...prev, { kind: 'out', text: TERMINAL_BOOT_SEQUENCE[i]! }])
        i++
      } else {
        clearInterval(id)
      }
    }, 220)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
  }, [lines])

  const focusInput = useCallback(() => inputRef.current?.focus(), [])

  const dispatch = useCallback((raw: string): string[] => {
    const trimmed = raw.trim()
    if (!trimmed) return []
    if (TERMINAL_EASTER_EGGS[trimmed]) return TERMINAL_EASTER_EGGS[trimmed]!
    const [cmd, ...args] = trimmed.split(/\s+/)
    switch (cmd) {
      case 'help':    return TERMINAL_HELP
      case 'whoami':  return TERMINAL_WHOAMI
      case 'date':    return TERMINAL_DATE()
      case 'god':     return TERMINAL_GOD
      case 'uname':   return TERMINAL_UNAME
      case 'history': return history.map((h, i) => `  ${String(i + 1).padStart(4)}  ${h}`)
      case 'motto': {
        const [latin, translation] = TERMINAL_MOTTO_CYCLE[mottoIdx % 3]!
        setMottoIdx((i) => i + 1)
        return [latin, translation, '']
      }
      case 'ls': {
        const p = args[0] ?? ''
        if (p === '' || p === '.' || p === '/') return TERMINAL_LS_ROOT
        if (p === 'arsenal/' || p === 'arsenal') return TERMINAL_LS_ARSENAL
        return [`ls: cannot access '${p}': no such station`]
      }
      case 'cat': {
        const f = args[0]
        if (!f) return ['cat: missing operand']
        if (f === 'manifesto.txt') return TERMINAL_CAT_MANIFESTO
        return [`cat: ${f}: no such file or station`]
      }
      case 'cd': {
        const target = args[0] ?? '/'
        const route = target.replace(/\/$/, '') || '/'
        const valid = ['/', 'dossier', 'operations', 'arsenal', 'academy', 'transmissions', 'comms']
        const key = route.replace(/^\//, '')
        if (route === '/' || valid.includes(key)) {
          router.push((route.startsWith('/') ? route : `/${route}`) as never)
          return [`changing station to ${route}...`]
        }
        return [`cd: no such station: ${route}`]
      }
      case 'nmap': {
        const target = args.find((a) => !a.startsWith('-')) ?? 'station-01'
        return TERMINAL_NMAP_TEMPLATE(target)
      }
      case 'sudo': {
        if (args.join(' ').toLowerCase().includes('sandwich')) return TERMINAL_SUDO_SANDWICH
        return ['sudo: a password is required.']
      }
      case 'clear': {
        setLines([])
        return []
      }
      case 'exit': {
        router.push('/')
        return TERMINAL_EXIT_MESSAGE
      }
      default:
        return TERMINAL_NOT_FOUND(cmd ?? '')
    }
  }, [history, mottoIdx, router])

  const submit = useCallback((raw: string) => {
    setLines((prev) => [...prev, { kind: 'in', text: `samuel@station:~$ ${raw}` }])
    const out = dispatch(raw)
    if (out.length) setLines((prev) => [...prev, ...out.map((t) => ({ kind: 'out' as const, text: t }))])
    if (raw.trim()) setHistory((h) => [...h, raw.trim()])
    setHistoryIdx(-1)
    setInput('')
  }, [dispatch])

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      submit(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length === 0) return
      const next = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1)
      setHistoryIdx(next)
      setInput(history[next] ?? '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIdx === -1) return
      const next = historyIdx + 1
      if (next >= history.length) {
        setHistoryIdx(-1)
        setInput('')
      } else {
        setHistoryIdx(next)
        setInput(history[next] ?? '')
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      const [cmd, ...args] = input.split(/\s+/)
      if (args.length === 0) {
        const match = COMMANDS.find((c) => c.startsWith(cmd ?? ''))
        if (match) setInput(match + ' ')
      } else {
        const last = args[args.length - 1] ?? ''
        const match = FILES.find((f) => f.startsWith(last))
        if (match) {
          const head = [cmd, ...args.slice(0, -1)].join(' ')
          setInput(`${head} ${match}`)
        }
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault()
      setLines([])
    } else if (e.key === 'c' && e.ctrlKey) {
      e.preventDefault()
      setLines((prev) => [...prev, { kind: 'in', text: `samuel@station:~$ ${input}^C` }])
      setInput('')
    }
  }

  return (
    <main
      id="main"
      onClick={focusInput}
      className="min-h-screen px-4 py-8 font-mono text-sm cursor-text bg-ink"
    >
      <div ref={scrollRef} className="max-w-4xl mx-auto h-[80vh] overflow-y-auto pb-32">
        {lines.map((line, i) => (
          <div
            key={i}
            className={line.kind === 'in' ? 'text-bone' : 'text-phosphor whitespace-pre'}
          >
            {line.text || ' '}
          </div>
        ))}
        <div className="flex">
          <span className="text-bone">samuel@station:~$&nbsp;</span>
          <input
            ref={inputRef}
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            className="flex-1 bg-transparent border-none outline-none text-bone caret-phosphor"
            aria-label="terminal input"
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
    </main>
  )
}
