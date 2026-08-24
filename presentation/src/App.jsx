import { useState, useEffect, useRef } from 'react';
import SlideFrame from './components/SlideFrame';
import Slide1Cover from './slides/Slide1Cover';
import Slide2Architecture from './slides/Slide2Architecture';
import Slide3ApiRun from './slides/Slide3ApiRun';

const GOLD = '#C9A84C';
const SLIDE_SIZE = 1080;
const slides = [Slide1Cover, Slide2Architecture, Slide3ApiRun];
const slideTitles = ['Cover', 'Architecture', 'API & Run'];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [scale, setScale] = useState(1);
  const containerRef = useRef(null);
  const SlideComponent = slides[current];

  useEffect(() => {
    function updateScale() {
      const padding = 48;
      const availW = window.innerWidth - padding;
      const availH = window.innerHeight - 180; // leave room for nav
      const s = Math.min(availW / SLIDE_SIZE, availH / SLIDE_SIZE, 1);
      setScale(Math.max(s, 0.3));
    }
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#060f1e',
      gap: 24,
      padding: 24,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: GOLD }} />
        <span style={{ color: '#5C7090', fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>
          Banking REST API · LinkedIn Presentation
        </span>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: GOLD }} />
      </div>

      {/* Scaled slide wrapper — scale keeps it pixel-perfect for screenshots */}
      <div ref={containerRef} style={{
        width: SLIDE_SIZE * scale,
        height: SLIDE_SIZE * scale,
        flexShrink: 0,
      }}>
        <div style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          boxShadow: '0 24px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(201,168,76,0.18)',
          borderRadius: 4,
        }}>
          <SlideFrame slideNumber={current + 1} total={slides.length}>
            <SlideComponent />
          </SlideFrame>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 20, fontFamily: 'Inter, sans-serif' }}>
        <NavButton onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0} label="← Prev" />
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: current === i ? 'rgba(201,168,76,0.15)' : 'transparent',
              border: current === i ? `1px solid ${GOLD}` : '1px solid rgba(255,255,255,0.1)',
              borderRadius: 20, padding: '5px 14px', cursor: 'pointer',
              color: current === i ? GOLD : '#4A6080', fontSize: 12, fontWeight: 600,
              transition: 'all 0.2s',
            }}>
              <span style={{
                width: 18, height: 18, borderRadius: '50%',
                background: current === i ? GOLD : 'rgba(255,255,255,0.08)',
                color: current === i ? '#0F1E35' : '#4A6080',
                fontSize: 10, fontWeight: 800,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{i + 1}</span>
              {slideTitles[i]}
            </button>
          ))}
        </div>
        <NavButton onClick={() => setCurrent(c => Math.min(slides.length - 1, c + 1))} disabled={current === slides.length - 1} label="Next →" />
      </div>

      <p style={{ color: '#2A3A50', fontSize: 11, fontFamily: 'Inter, sans-serif', letterSpacing: 0.5, textAlign: 'center' }}>
        Set browser zoom to 100% and screenshot only the slide above for best quality (1080×1080 px)
      </p>
    </div>
  );
}

function NavButton({ onClick, disabled, label }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{
      background: disabled ? 'rgba(255,255,255,0.03)' : 'rgba(201,168,76,0.1)',
      border: disabled ? '1px solid rgba(255,255,255,0.06)' : `1px solid ${GOLD}50`,
      color: disabled ? '#2A3A50' : GOLD,
      borderRadius: 8, padding: '8px 20px', cursor: disabled ? 'default' : 'pointer',
      fontSize: 13, fontWeight: 600, fontFamily: 'Inter, sans-serif',
      transition: 'all 0.2s',
    }}>{label}</button>
  );
}
