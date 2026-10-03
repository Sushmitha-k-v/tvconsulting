import React, { useState, useEffect, useRef } from 'react';

const THEMES = [
  { id: 'emerald', name: '1. Emerald Obsidian', gradient: 'linear-gradient(135deg, #10b981, #f59e0b)' },
  { id: 'azure', name: '2. Oceanic Azure & Cyan', gradient: 'linear-gradient(135deg, #0ea5e9, #f97316)' },
  { id: 'carbon', name: '3. Cyber Carbon & Lime', gradient: 'linear-gradient(135deg, #22c55e, #a3e635)' },
  { id: 'light', name: '4. Executive Alabaster Light', gradient: 'linear-gradient(135deg, #ffffff, #047857)', border: '1px solid #cbd5e1' },
  { id: 'indigo', name: '5. Royal Indigo & Gold', gradient: 'linear-gradient(135deg, #6366f1, #eab308)' }
];

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('tvc_theme') || 'emerald';
  });
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('tvc_theme', currentTheme);
  }, [currentTheme]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (widgetRef.current && !widgetRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="theme-switcher-pill" ref={widgetRef} id="theme-switcher-widget">
      <button
        className="theme-switcher-toggle"
        onClick={() => setIsOpen(prev => !prev)}
        title="Click to preview different color palettes"
        aria-label="Toggle theme preview"
      >
        <span>🎨</span>
        <span>Theme Preview</span>
      </button>

      <div className={`theme-palette-options ${isOpen ? 'open' : ''}`}>
        <div className="theme-options-header">
          <strong>Palette Showcase</strong>
          <small>Live Preview</small>
        </div>

        {THEMES.map(t => (
          <button
            key={t.id}
            className={`theme-opt-btn ${currentTheme === t.id ? 'active' : ''}`}
            onClick={() => {
              setCurrentTheme(t.id);
              setIsOpen(false);
            }}
          >
            <span
              className="theme-swatch"
              style={{
                background: t.gradient,
                border: t.border || 'none'
              }}
            />
            <span>{t.name}</span>
          </button>
        ))}

        <div style={{ padding: '6px 8px 2px', borderTop: '1px solid var(--border-subtle)', textAlign: 'center' }}>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>React State Synchronized</span>
        </div>
      </div>
    </div>
  );
}
