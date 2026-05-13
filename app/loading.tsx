export default function Loading() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'JetBrains Mono',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <div
          style={{
            width: '32px',
            height: '32px',
            border: '2px solid var(--color-bone-faint)',
            borderTopColor: 'var(--color-phosphor)',
            borderRadius: '50%',
            animation: 'spin 800ms linear infinite',
          }}
        />
        <p
          className="font-mono"
          style={{ fontSize: 'var(--text-xs)', color: 'var(--color-bone-faint)', letterSpacing: '0.1em' }}
        >
          LOADING STATION...
        </p>
      </div>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
