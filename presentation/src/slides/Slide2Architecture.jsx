const GOLD = '#C9A84C';

function Label({ children, icon }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
      <div style={{ width: 5, height: 22, background: GOLD, borderRadius: 3 }} />
      {icon && <span style={{ fontSize: 22 }}>{icon}</span>}
      <span style={{ color: GOLD, fontSize: 15, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>{children}</span>
    </div>
  );
}

const layers = [
  { label: 'HTTP Request',     sub: 'REST Client · Swagger UI',          color: '#4A90D9', icon: '🌐' },
  { label: 'Controller Layer', sub: '@RestController · 4 controllers',    color: '#6DB33F', icon: '🎮' },
  { label: 'Service Layer',    sub: 'Business logic & transactions',      color: GOLD,      icon: '⚙️'  },
  { label: 'Repository Layer', sub: 'Spring Data JPA · @Repository',     color: '#8B2FC9', icon: '🗄️' },
  { label: 'PostgreSQL',       sub: 'Flyway V1→V3 · 5 tables',           color: '#336791', icon: '🐘' },
];

const entities = [
  { name: 'Customer',    color: '#4A90D9', fields: ['id · firstName · lastName', 'email · phone'] },
  { name: 'Account',     color: GOLD,      fields: ['id · balance', 'account_type (discriminator)'] },
  { name: 'Transaction', color: '#6DB33F', fields: ['id · type · amount', 'createdAt'] },
  { name: 'Recipient',   color: '#8B2FC9', fields: ['id · name · accountId', 'customerId'] },
];

export default function Slide2Architecture() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '48px 68px 68px 68px' }}>

      {/* HEADER */}
      <div style={{ marginBottom: 36 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 30, padding: '8px 24px', marginBottom: 14 }}>
          <span style={{ color: GOLD, fontSize: 15, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>Architecture & Design</span>
        </div>
        <h2 style={{ color: '#E8F0FF', fontSize: 54, fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.1 }}>
          How the system is <span style={{ color: GOLD }}>structured</span>
        </h2>
      </div>

      {/* COLUMNS */}
      <div style={{ display: 'flex', flex: 1, gap: 48 }}>

        {/* LEFT: Architecture layers */}
        <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 0, gap: 20 }}>
          <div>
            <Label icon="🏗️">Layered Architecture</Label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {layers.map((l, i) => (
                <div key={l.label}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid ${l.color}20`,
                    borderLeft: `5px solid ${l.color}`,
                    borderRadius: 10, padding: '14px 18px',
                  }}>
                    <span style={{ fontSize: 24 }}>{l.icon}</span>
                    <div>
                      <div style={{ color: '#DDE8FF', fontSize: 18, fontWeight: 700 }}>{l.label}</div>
                      <div style={{ color: '#4A6080', fontSize: 14, marginTop: 3 }}>{l.sub}</div>
                    </div>
                  </div>
                  {i < layers.length - 1 && (
                    <div style={{ display: 'flex', justifyContent: 'center', height: 14 }}>
                      <svg width="10" height="14" viewBox="0 0 10 14">
                        <path d="M5 0 L5 10 M1 6 L5 12 L9 6" stroke={`${GOLD}70`} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* OOP */}
          <div>
            <Label icon="🧬">OOP · Single-Table Inheritance</Label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
              <div style={{ background: 'rgba(201,168,76,0.1)', border: `1px solid ${GOLD}50`, borderRadius: 10, padding: '10px 22px', textAlign: 'center', flexShrink: 0 }}>
                <div style={{ color: GOLD, fontSize: 13, fontStyle: 'italic', fontWeight: 600 }}>abstract</div>
                <div style={{ color: '#E8F0FF', fontSize: 18, fontWeight: 700 }}>Account</div>
              </div>
              <svg width="60" height="40" viewBox="0 0 60 40" style={{ flexShrink: 0 }}>
                <path d="M0 20 L20 20" stroke={`${GOLD}50`} strokeWidth="1.5" fill="none"/>
                <path d="M20 20 L40 8 M20 20 L40 32" stroke={`${GOLD}50`} strokeWidth="1.5" fill="none"/>
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['CheckingAccount', 'SavingsAccount'].map(n => (
                  <div key={n} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: '7px 16px' }}>
                    <div style={{ color: '#C5D5EE', fontSize: 15, fontWeight: 600 }}>{n}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div style={{ width: 1, background: 'rgba(201,168,76,0.15)', alignSelf: 'stretch' }} />

        {/* RIGHT: Data model */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <Label icon="🗂️">Data Model</Label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {entities.map(e => (
                <div key={e.name} style={{
                  background: 'rgba(255,255,255,0.03)', borderRadius: 12,
                  border: `1px solid ${e.color}25`, borderTop: `4px solid ${e.color}`,
                  padding: '16px 18px',
                }}>
                  <div style={{ color: e.color, fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{e.name}</div>
                  {e.fields.map(f => (
                    <div key={f} style={{ color: '#4A6080', fontSize: 13, lineHeight: 2, fontFamily: "'JetBrains Mono', monospace" }}>{f}</div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div style={{ background: 'rgba(51,103,145,0.1)', border: '1px solid rgba(51,103,145,0.3)', borderRadius: 12, padding: '18px 20px' }}>
            <div style={{ color: '#4A90D9', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>📐 Single-Table Inheritance</div>
            <p style={{ color: '#5A7090', fontSize: 14, lineHeight: 1.75 }}>
              <code style={{ color: '#C5D5EE', fontFamily: 'monospace', fontSize: 14 }}>CheckingAccount</code> &{' '}
              <code style={{ color: '#C5D5EE', fontFamily: 'monospace', fontSize: 14 }}>SavingsAccount</code> share
              the <code style={{ color: '#C5D5EE', fontFamily: 'monospace', fontSize: 14 }}>accounts</code> table.
              An <code style={{ color: '#C5D5EE', fontFamily: 'monospace', fontSize: 14 }}>account_type</code> discriminator column
              identifies the concrete type at runtime.
            </p>
          </div>

          <div style={{ background: 'rgba(109,179,63,0.07)', border: '1px solid rgba(109,179,63,0.25)', borderRadius: 12, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
            <svg width="26" height="26" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
              <path d="M24 4 L40 10 L40 26 C40 35 32 42 24 44 C16 42 8 35 8 26 L8 10 Z" fill="#6DB33F" fillOpacity="0.2" stroke="#6DB33F" strokeWidth="1.5"/>
              <path d="M17 24 L22 29 L31 19" stroke="#6DB33F" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <div style={{ color: '#6DB33F', fontSize: 16, fontWeight: 700, marginBottom: 3 }}>Spring Security</div>
              <div style={{ color: '#4A6080', fontSize: 14 }}>CSRF disabled · extendable to JWT authentication</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
