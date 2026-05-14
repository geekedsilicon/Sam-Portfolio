// lib/terminal/responses.ts
// Terminal command corpus for the /dossier terminal surface.
// Imported by the terminal dispatcher.

export const TERMINAL_BOOT_SEQUENCE = [
  '[ OK ] STATION 01 // initializing',
  '[ OK ] phosphor stream nominal',
  '[ OK ] grid backdrop locked',
  '[ OK ] comms uplink: samuel.c.kelley@proton.me',
  '[ OK ] audacia et veritas',
  '',
  'station-01 ready. type `help` for available commands.',
  '',
]

export const TERMINAL_HELP = [
  'AVAILABLE COMMANDS',
  '',
  '  help              this message',
  '  whoami            short bio',
  '  ls [path]         list station files',
  '  cat <file>        print file contents',
  '  cd <station>      navigate to a station',
  '  nmap -sV <host>   scan a host (simulated)',
  '  motto             cycle the Latin',
  '  god               proverbs 27:17',
  '  date              current UTC',
  '  uname -a          system info',
  '  history           previous commands (use ↑↓ to recall)',
  '  clear             clear terminal',
  '  exit              return to /',
  '',
  '  classified files are visible only to those who already know.',
  '',
]

export const TERMINAL_WHOAMI = [
  'samuel.c.kelley',
  '',
  'cloud security & infrastructure engineer.',
  'm.s. cybersecurity candidate, johns hopkins · apl track.',
  'us citizen · eligible for security clearance.',
  '',
  'previously: assistant vp, wells fargo. office of naval research.',
  'currently: building.',
  '',
]

export const TERMINAL_LS_ROOT = [
  'total 7',
  'drwxr-xr-x  manifesto.txt',
  'drwxr-xr-x  dossier/',
  'drwxr-xr-x  operations/',
  'drwxr-xr-x  arsenal/',
  'drwxr-xr-x  academy/',
  'drwxr-xr-x  transmissions/',
  '-rw-------  comms.sh',
  '',
]

export const TERMINAL_LS_ARSENAL = [
  'total 12',
  '-rw-r--r--  nat-with-p4.md                  [featured]',
  '-rw-r--r--  patching-10k-servers.md         [featured]',
  '-rw-r--r--  blockchain-secure-comms.md      [featured]',
  '-rw-r--r--  home-network-ubiquiti.md',
  '-rw-r--r--  home-lab-proxmox-r610.md',
  '-rw-r--r--  automotive-builds.md',
  '-rw-r--r--  soho-network-covid.md',
  '-rw-r--r--  custom-pc-series.md',
  '-rw-r--r--  fpv-drone-build.md',
  '-rw-r--r--  aws-foundations-lab.md',
  '-rw-r--r--  cloudmate-cofounder.md',
  '-rw-r--r--  gpt-bot-suite.md',
  '',
]

export const TERMINAL_CAT_MANIFESTO = [
  "I was twelve, trying to host a Minecraft server so my friends could join.",
  '',
  "The router didn't cooperate. I found Hamachi. Then port forwarding. Then",
  "the dangers of port forwarding. Then NAT. Then the public internet itself.",
  '',
  '  I want to make a thing work',
  '    → I learn how it actually works',
  '      → I learn why what I just did is risky',
  '',
  'That sequence is the entire shape of my career.',
  '',
  'today I build, secure, and operate infrastructure at enterprise scale.',
  'tomorrow I do the same thing at a higher one.',
  '',
  '  audacia et veritas.',
  '  per aspera ad astra.',
  '  non sibi sed patriae.',
  '',
  '(full manifesto: /dossier)',
  '',
]

export const TERMINAL_MOTTO_CYCLE: [string, string][] = [
  ['Audacia et Veritas.',   '— audacity and truth.'],
  ['Per Aspera Ad Astra.',  '— through hardship to the stars.'],
  ['Non Sibi Sed Patriae.', '— not for self, but for country.'],
]

export const TERMINAL_GOD = [
  '',
  '    "Iron sharpens iron,',
  '       and one man sharpens another."',
  '',
  '                                  — Proverbs 27:17',
  '',
]

export const TERMINAL_NMAP_TEMPLATE = (host: string): string[] => [
  `Starting Nmap 7.94 ( https://nmap.org ) at ${new Date().toISOString()}`,
  `Nmap scan report for ${host}`,
  `Host is up (0.0042s latency).`,
  ``,
  `PORT      STATE  SERVICE       VERSION`,
  `22/tcp    open   ssh           OpenSSH 9.6 (protocol 2.0)`,
  `443/tcp   open   https         nginx 1.27.0`,
  `1337/tcp  open   uplink-classified`,
  ``,
  `Service detection performed. station 01 nominal.`,
  ``,
]

export const TERMINAL_SUDO_SANDWICH = [
  'samuel is not in the sudoers file. this incident will be reported.',
  '',
]

export const TERMINAL_DATE = (): string[] => [
  new Date().toUTCString(),
  '',
]

export const TERMINAL_UNAME = [
  'STATION 01 5.15.0-station #1 SMP x86_64 GNU/Linux',
  '',
]

export const TERMINAL_NOT_FOUND = (cmd: string): string[] => [
  `command not found: ${cmd}`,
  `try \`help\` for available commands.`,
  '',
]

export const TERMINAL_EXIT_MESSAGE = [
  'returning to surface...',
  '',
]

export const TERMINAL_EASTER_EGGS: Record<string, string[]> = {
  'hello': ['hello.', ''],
  'hi': ['hi.', ''],
  'hey': ['hey.', ''],
  'fuck': ['language.', ''],
  'love': ['affection acknowledged. returning to mission.', ''],
  'gg': ['gg.', ''],
  ':q': ["this isn't vim. but I respect the instinct.", ''],
  ':wq': ["this isn't vim. but I respect the instinct.", ''],
  'rm -rf /': ['nice try.', ''],
  'cowsay': [
    ' ___________________',
    '< audacia et veritas >',
    ' -------------------',
    '        \\   ^__^',
    '         \\  (oo)\\_______',
    '            (__)\\       )\\/\\',
    '                ||----w |',
    '                ||     ||',
    '',
  ],
}
