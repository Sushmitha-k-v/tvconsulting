import React from 'react';
import { SITE_CONTENT } from '../data/siteContent';

export function LegalPage() {
  return (
    <div className="animate-fade-in">
      <header className="page-header">
        <div className="container">
          <span className="badge badge-emerald">legal</span>
          <h1>Legal</h1>
          <p>Privacy, disclaimer, and grievance information.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          {SITE_CONTENT.legalSections.map((item) => (
            <div
              id={item.id}
              className="card"
              key={item.id}
              style={{ marginBottom: '2rem', borderLeft: '4px solid var(--accent-mint)' }}
            >
              <span className="card-kicker">{item.kicker}</span>
              <h2 className="card-title" style={{ fontSize: '1.5rem' }}>
                {item.title}
              </h2>
              <p className="card-text" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
