const GOLD = '#C9A84C';

const METHOD_COLORS = {
  GET:    { bg: '#0d2b1e', text: '#49CC90', border: '#49CC9050' },
  POST:   { bg: '#0d1f2e', text: '#61AFEF', border: '#61AFEF50' },
  DELETE: { bg: '#2e0d0d', text: '#FF7B7B', border: '#FF7B7B50' },
};

const endpoints = [
  { group: 'Customers', icon: '👤', color: '#4A90D9', items: [
    { method: 'POST',   path: '/api/customers' },
    { method: 'GET',    path: '/api/customers' },
    { method: 'GET',    path: '/api/customers/{id}' },
    { method: 'DELETE', path: '/api/customers/{id}' },
  ]},
  { group: 'Accounts', icon: '🏦', color: GOLD, items: [
    { method: 'POST',   path: '/customers/{id}/accounts' },
    { method: 'GET',    path: '/customers/{id}/accounts' },
    { method: 'DELETE', path: '/customers/{id}/accounts/{a}' },
  ]},
  { group: 'Transactions', icon: '💸', color: '#6DB33F', items: [
    { method: 'POST', path: '/accounts/{id}/deposit' },
    { method: 'POST', path: '/accounts/{id}/withdraw' },
    { method: 'POST', path: '/accounts/{id}/transfer' },
    { method: 'GET',  path: '/accounts/{id}/statement' },
  ]},
  { group: 'Recipients', icon: '📬', color: '#8B2FC9', items: [
    { method: 'POST',   path: '/customers/{id}/recipients' },
    { method: 'GET',    path: '/customers/{id}/recipients' },
    { method: 'DELETE', path: '/customers/{id}/recipients/{r}' },
  ]},
];

const steps = [
  { n: '01', title: 'Start PostgreSQL',          code: 'createdb banking_api',      sub: 'user: user  ·  password: 1234  ·  port: 5432' },
  { n: '02', title: 'Configure application.yml', code: 'jdbc:postgresql://localhost:5432/banking_api', sub: 'Flyway auto-runs V1 → V3 migrations on startup' },
  { n: '03', title: 'Run the application',       code: './mvnw spring-boot:run',    sub: 'Server starts on port 8081' },
];

function Badge({ method }) {
  const c = METHOD_COLORS[method] || METHOD_COLORS.GET;
  return (
    <span style={{
      background: c.bg, color: c.text, border: `1px solid ${c.border}`,
      borderRadius: 6, padding: '4px 10px', fontSize: 12, fontWeight: 700,
      letterSpacing: 0.5, fontFamily: "'JetBrains Mono', monospace", whiteSpace: 'nowrap', flexShrink: 0,
    }}>{method}</span>
  );
}

function Label({ children, icon }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
      <div style={{ width: 5, height: 22, background: GOLD, borderRadius: 3 }} />
      {icon && <span style={{ fontSize: 20 }}>{icon}</span>}
      <span style={{ color: GOLD, fontSize: 15, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' }}>{children}</span>
    </div>
  );
}

export default function Slide3ApiRun() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '36px 40px 68px 40px' }}>

      {/* HEADER */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: 30, padding: '8px 24px', marginBottom: 14 }}>
          <span style={{ color: GOLD, fontSize: 15, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>API & How to Run</span>
        </div>
        <h2 style={{ color: '#E8F0FF', fontSize: 54, fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.1 }}>
          Endpoints &amp; <span style={{ color: GOLD }}>quick start</span>
        </h2>
      </div>

      <div style={{ display: 'flex', flex: 1, gap: 12, minHeight: 0 }}>

        {/* LEFT: Endpoints — fills height evenly */}
        <div style={{ flex: 0.95, display: 'flex', flexDirection: 'column' }}>
          <Label icon="📡">REST Endpoints</Label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, flex: 1 }}>
            {endpoints.map(g => (
              <div key={g.group} style={{
                background: 'rgba(255,255,255,0.03)', borderRadius: 12,
                border: `1px solid ${g.color}20`, borderTop: `4px solid ${g.color}`,
                padding: '12px 14px', display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ color: g.color, fontSize: 15, fontWeight: 700, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 16 }}>{g.icon}</span> {g.group}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1, justifyContent: 'space-evenly' }}>
                  {g.items.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <Badge method={item.method} />
                      <span style={{ color: '#4A6585', fontSize: 13, lineHeight: 1.35, fontFamily: "'JetBrains Mono', monospace", flex: 1, whiteSpace: 'normal', overflowWrap: 'anywhere', wordBreak: 'break-word' }}>
                        {item.path}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <div style={{ width: 1, background: 'rgba(201,168,76,0.15)', alignSelf: 'stretch' }} />

        {/* RIGHT: How to run — stretches to fill height */}
        <div style={{ flex: 1.05, display: 'flex', flexDirection: 'column' }}>
          <Label icon="🚀">How to Run</Label>

          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {steps.map(s => (
                <div key={s.n} style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderLeft: `5px solid ${GOLD}`,
                  borderRadius: 10, padding: '14px 18px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 9 }}>
                    <span style={{
                      width: 28, height: 28, borderRadius: '50%',
                      background: 'rgba(201,168,76,0.12)', border: `1px solid ${GOLD}50`,
                      color: GOLD, fontSize: 11, fontWeight: 800,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>{s.n}</span>
                    <span style={{ color: '#DDE8FF', fontSize: 16, fontWeight: 700 }}>{s.title}</span>
                  </div>
                  <code style={{
                    display: 'block', background: 'rgba(0,0,0,0.45)', borderRadius: 7,
                    padding: '9px 14px', color: '#A8D8A8',
                    fontSize: 13.5, fontFamily: "'JetBrains Mono', monospace",
                    marginBottom: 7, whiteSpace: 'pre',
                  }}>{s.code}</code>
                  <p style={{ color: '#4A6080', fontSize: 13, lineHeight: 1.5 }}>{s.sub}</p>
                </div>
              ))}
            </div>

            {/* Bottom info cards — pushed to fill remaining space */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 16 }}>
              {/* Swagger */}
              <div style={{ background: 'rgba(73,204,144,0.07)', border: '1px solid rgba(73,204,144,0.3)', borderRadius: 10, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="12" cy="12" r="10" stroke="#49CC90" strokeWidth="1.5"/>
                  <path d="M7 12h5l2 3 2-6 2 3h2" stroke="#49CC90" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <div style={{ color: '#49CC90', fontSize: 16, fontWeight: 700 }}>Swagger UI</div>
                  <code style={{ color: '#4A90D9', fontSize: 13.5, fontFamily: "'JetBrains Mono', monospace" }}>localhost:8081/swagger-ui.html</code>
                </div>
              </div>

              {/* Validation */}
              <div style={{ background: 'rgba(97,175,239,0.07)', border: '1px solid rgba(97,175,239,0.25)', borderRadius: 10, padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#61AFEF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <div style={{ color: '#61AFEF', fontSize: 16, fontWeight: 700 }}>Bean Validation</div>
                  <div style={{ color: '#4A6080', fontSize: 13 }}>@Valid on all request bodies · GlobalExceptionHandler</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
