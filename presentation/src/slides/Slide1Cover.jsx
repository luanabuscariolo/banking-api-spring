const GOLD = '#C9A84C';

const techStack = [
  { label: 'Java 21',           color: '#E76F00', svg: <svg width="28" height="28" viewBox="0 0 48 48"><path d="M20.2 30.6s-1.8 1 1.3 1.4c3.8.4 5.7.3 9.8-.4 0 0 1.1.7 2.6 1.2-9.2 3.9-20.8-.2-13.7-2.2z" fill="#E76F00"/><path d="M19 27.6s-2 1.5 2.1 1.8c2.8.2 5.6.3 9.9-.4 0 0 .8.8 2 1.2-8.8 2.6-18.6.2-14-2.6z" fill="#E76F00"/><path d="M25.6 18.4c1.8 2-4.7 3.8-4.7 3.8s7.6-1.4 4.7-3.8z" fill="#E76F00"/><path d="M28.6 24.2c4.3-2.3 2.3-4.5 1-4.2-.3.1-.5.2-.5.2s.1-.2.4-.3c2.8-1 5 3-1 4.6 0 0 .1-.1.1-.3z" fill="#E76F00"/><path d="M22.5 35.1s1.4 1.1-1.5 2c-5.3 1.6-22.1.5-16.8-1.9 2.1-1 4.2-1.3 4.2-1.3s-4.8 1.1-6.8 2.3c-1.8 2.7 21 3.4 20.9-.1z" fill="#E76F00"/><path d="M17 13.2s-5.5 1.3-2 1.7c1.5.2 4.5.1 7.3-.1 2.3-.2 4.6-.6 4.6-.6s-.8.3-1.4.7c-5.6 1.5-16.4.8-13.3-.7C14.6 13 17 13.2 17 13.2z" fill="#E76F00"/><path d="M31.7 31.8c5.7-3 3.1-5.8 1.2-5.4-.4.1-.6.2-.6.2s.2-.3.6-.4c4.1-1.5 7.3 4.3-1.2 6.6 0 0 .1-.1 0-.3z" fill="#E76F00"/></svg> },
  { label: 'Spring Boot 4',     color: '#6DB33F', svg: <svg width="28" height="28" viewBox="0 0 48 48"><ellipse cx="24" cy="24" rx="22" ry="22" fill="#6DB33F" fillOpacity="0.15"/><path d="M36 12c-2 5-8 8-14 7 6-1 11-5 14-7zm-26 4c1 4 5 7 9 7-4-1-7-4-9-7z" fill="#6DB33F"/><circle cx="24" cy="24" r="10" fill="#6DB33F" fillOpacity="0.3" stroke="#6DB33F" strokeWidth="1.5"/><circle cx="24" cy="24" r="5" fill="#6DB33F"/></svg> },
  { label: 'Spring Security',   color: '#6DB33F', svg: <svg width="28" height="28" viewBox="0 0 48 48"><path d="M24 4 L40 10 L40 26 C40 35 32 42 24 44 C16 42 8 35 8 26 L8 10 Z" fill="#6DB33F" fillOpacity="0.2" stroke="#6DB33F" strokeWidth="1.5"/><path d="M17 24 L22 29 L31 19" stroke="#6DB33F" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { label: 'Spring Data JPA',   color: '#4A90D9', svg: <svg width="28" height="28" viewBox="0 0 48 48"><rect x="8" y="8" width="32" height="32" rx="4" fill="#4A90D9" fillOpacity="0.15" stroke="#4A90D9" strokeWidth="1.5"/><path d="M16 18h16M16 24h12M16 30h8" stroke="#4A90D9" strokeWidth="2" strokeLinecap="round"/></svg> },
  { label: 'PostgreSQL',        color: '#336791', svg: <svg width="28" height="28" viewBox="0 0 48 48"><ellipse cx="24" cy="14" rx="12" ry="6" fill="#336791" fillOpacity="0.4" stroke="#336791" strokeWidth="1.5"/><path d="M12 14v12c0 3.3 5.4 6 12 6s12-2.7 12-6V14" stroke="#336791" strokeWidth="1.5" fill="none"/><ellipse cx="24" cy="26" rx="12" ry="6" fill="#336791" fillOpacity="0.25" stroke="#336791" strokeWidth="1.5"/></svg> },
  { label: 'Flyway',            color: '#CC0200', svg: <svg width="28" height="28" viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#CC0200" fillOpacity="0.2" stroke="#CC0200" strokeWidth="1.5"/><path d="M16 24 L32 24 M24 16 L24 32" stroke="#CC0200" strokeWidth="2" strokeLinecap="round"/></svg> },
  { label: 'Lombok',            color: '#8B2FC9', svg: <svg width="28" height="28" viewBox="0 0 48 48"><path d="M10 38 Q24 8 38 38" stroke="#8B2FC9" strokeWidth="2.5" fill="none" strokeLinecap="round"/><path d="M15 32 Q24 14 33 32" stroke="#8B2FC9" strokeWidth="2" fill="#8B2FC9" fillOpacity="0.2" strokeLinecap="round"/><circle cx="24" cy="10" r="3" fill="#8B2FC9"/></svg> },
  { label: 'OpenAPI 3',         color: '#49CC90', svg: <svg width="28" height="28" viewBox="0 0 48 48"><circle cx="24" cy="24" r="14" stroke="#49CC90" strokeWidth="1.5" fill="none"/><path d="M10 24 Q17 16 24 24 Q31 32 38 24" stroke="#49CC90" strokeWidth="2" fill="none" strokeLinecap="round"/><circle cx="24" cy="24" r="3" fill="#49CC90"/></svg> },
];

export default function Slide1Cover() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '52px 68px 68px 68px' }}>

      {/* TOP BAR */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 44 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.4)',
          borderRadius: 30, padding: '10px 26px',
        }}>
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: GOLD, display: 'inline-block' }} />
          <span style={{ color: GOLD, fontSize: 16, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>Portfolio Project · 2026</span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          {['#Java', '#SpringBoot', '#BackendDev'].map(t => (
            <span key={t} style={{ color: '#4A6080', fontSize: 15, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 16, padding: '5px 16px' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* TITLE */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h1 style={{ color: '#E8F0FF', fontSize: 100, fontWeight: 800, lineHeight: 0.95, marginBottom: 16, letterSpacing: -4 }}>
          Banking<br />
          <span style={{ color: GOLD }}>REST API</span>
        </h1>
        <div style={{ width: 80, height: 6, background: `linear-gradient(90deg, ${GOLD}, transparent)`, borderRadius: 3, marginBottom: 28 }} />
        <p style={{ color: '#7A96BA', fontSize: 22, lineHeight: 1.7, maxWidth: 820 }}>
          A production-style banking backend built with{' '}
          <strong style={{ color: '#C5D5EE' }}>Spring Boot 4</strong> &{' '}
          <strong style={{ color: '#C5D5EE' }}>PostgreSQL</strong>.
          Designed to strengthen Java &amp; backend engineering skills —
          clean layered architecture, OOP inheritance, database migrations,
          and full REST API documentation.
        </p>

        {/* STATS */}
        <div style={{ display: 'flex', marginTop: 36, borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '18px 0' }}>
          {[
            { val: '4',    label: 'Controllers' },
            { val: '5',    label: 'DB Tables'   },
            { val: '12+',  label: 'Endpoints'   },
            { val: 'OAS3', label: 'Swagger Docs' },
          ].map((s, i) => (
            <div key={s.label} style={{ textAlign: 'center', flex: 1, borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
              <div style={{ color: GOLD, fontSize: 42, fontWeight: 800 }}>{s.val}</div>
              <div style={{ color: '#4A6080', fontSize: 16, marginTop: 4, letterSpacing: 0.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TECH STACK */}
      <div style={{ marginTop: 24 }}>
        <p style={{ color: '#3A5070', fontSize: 13, fontWeight: 700, letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 14 }}>Tech Stack</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {techStack.map(t => (
            <div key={t.label} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 12, padding: '10px 18px',
            }}>
              {t.svg}
              <span style={{ color: '#B0C8E8', fontSize: 16, fontWeight: 500 }}>{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
