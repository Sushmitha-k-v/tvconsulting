import React from 'react';
import { SITE_CONTENT } from '../data/siteContent';

export function EngagePage() {
  return (
    <div className="animate-fade-in">
      <header className="page-header">
        <div className="container">
          <span className="badge badge-emerald">engage</span>
          <h1>Insights & updates</h1>
          <p>Blogs, publications, and media.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          {SITE_CONTENT.engageCategories.map((cat) => (
            <div id={cat.id} className="card" key={cat.id} style={{ marginBottom: '2rem' }}>
              <span className="card-kicker">{cat.id}</span>
              <h2 className="card-title" style={{ fontSize: '1.5rem' }}>
                {cat.title}
              </h2>
              <div className="grid-3" style={{ marginTop: '1.5rem' }}>
                {SITE_CONTENT.engageArticles.map((art, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '1.25rem'
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--accent-amber)',
                        marginBottom: '0.5rem',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      {cat.kicker} · insight
                    </div>
                    <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                      {art.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                      {art.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
