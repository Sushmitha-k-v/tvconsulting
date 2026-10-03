import React from 'react';
import { SITE_CONTENT } from '../data/siteContent';
import { Icon } from '../components/Icons';

export function WhatWeDoPage({ onNavigate }) {
  const handleLink = (e, href) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <div className="animate-fade-in">
      <header className="page-header">
        <div className="container">
          <span className="badge badge-emerald">what we do</span>
          <h1>Our services</h1>
          <p>
            End-to-end carbon advisory — from compliance and accounting through to decarbonisation, project development, and credit sourcing.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          {/* The Knowledge Gap */}
          <div className="section-header" style={{ maxWidth: '800px' }}>
            <span className="section-kicker">the knowledge gap</span>
            <h2 className="section-title">What most industries are still unclear about</h2>
            <ul className="checklist">
              {SITE_CONTENT.knowledgeGaps.map((item, idx) => (
                <li className="checklist-item" key={idx}>
                  <Icon name="Check" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Detailed Services List */}
          <div style={{ marginTop: '4rem' }}>
            {SITE_CONTENT.services.map((s, idx) => (
              <div
                id={s.slug}
                className="card"
                key={s.slug}
                style={{ marginBottom: '2rem', borderLeft: '4px solid var(--accent-mint)' }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginBottom: '1rem'
                  }}
                >
                  <span className="card-kicker">service / 0{idx + 1}</span>
                  <span className="badge badge-emerald">{s.slug}</span>
                </div>
                <h2 style={{ fontSize: '1.65rem', color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
                  {s.title}
                </h2>
                <p
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.75',
                    maxWidth: '75ch'
                  }}
                >
                  {s.description}
                </p>
                <div style={{ marginTop: '1.5rem' }}>
                  <a
                    href="/contact"
                    className="btn btn-primary"
                    onClick={(e) => handleLink(e, '/contact')}
                    style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
                  >
                    Consult on this practice <Icon name="ArrowRight" size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CCTS Explainer */}
          <div id="ccts" className="ccts-hero-box">
            <span className="badge badge-amber" style={{ marginBottom: '1rem' }}>
              ccts-explainer
            </span>
            <h2 style={{ fontSize: '1.85rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
              {SITE_CONTENT.ccts.title}
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.8',
                maxWidth: '80ch'
              }}
            >
              {SITE_CONTENT.ccts.body}
            </p>

            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginTop: '2rem', marginBottom: '0.5rem' }}>
              Target compliance areas
            </h3>
            <div className="target-areas-grid">
              {SITE_CONTENT.ccts.targetAreas.map((t, idx) => (
                <div className="target-area-chip" key={idx}>
                  <Icon name="Check" size={16} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
