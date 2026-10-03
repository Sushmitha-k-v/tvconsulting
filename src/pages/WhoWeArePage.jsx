import React from 'react';
import { SITE_CONTENT } from '../data/siteContent';
import { Icon } from '../components/Icons';

export function WhoWeArePage({ onNavigate }) {
  return (
    <div className="animate-fade-in">
      <header className="page-header">
        <div className="container">
          <span className="badge badge-emerald">who we are</span>
          <h1>About TerraVerde Consulting</h1>
          <p>Mission, leadership, and the path ahead.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          {/* About Us & Mission */}
          <div className="grid-2" style={{ marginBottom: '3.5rem' }}>
            <div id="about" className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <img
                  src="/assets/logo-emblem.png"
                  alt="TerraVerde Logo Emblem"
                  style={{
                    width: '44px',
                    height: '44px',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 4px 12px rgba(16, 185, 129, 0.35))'
                  }}
                />
                <div>
                  <span className="card-kicker" style={{ marginBottom: '0.15rem', display: 'block' }}>
                    about-us
                  </span>
                  <h2 className="card-title" style={{ fontSize: '1.5rem', marginBottom: 0 }}>
                    About Us
                  </h2>
                </div>
              </div>
              <p className="card-text">{SITE_CONTENT.mission}</p>
            </div>

            <div id="mission" className="card">
              <span className="card-kicker">mission</span>
              <h2 className="card-title" style={{ fontSize: '1.5rem' }}>
                Mission
              </h2>
              <p className="card-text">{SITE_CONTENT.mission}</p>
            </div>
          </div>

          {/* Leadership Profile */}
          <div id="leadership" style={{ marginBottom: '4rem' }}>
            <div className="section-header">
              <span className="section-kicker">our-leadership</span>
              <h2 className="section-title">Our Leadership</h2>
            </div>

            <div className="leader-card">
              <div className="leader-avatar-wrap">
                <div className="leader-avatar">BK</div>
                <span className="leader-badge">Executive Leadership</span>
              </div>

              <div className="leader-info">
                <h3>{SITE_CONTENT.founder.name}</h3>
                <div className="leader-role">{SITE_CONTENT.founder.role}</div>
                <p className="leader-bio">{SITE_CONTENT.founder.bio}</p>

                <div className="leader-actions">
                  <a
                    href={SITE_CONTENT.founder.linkedin}
                    className="btn btn-secondary"
                    style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile <Icon name="ArrowRight" size={16} />
                  </a>
                  <a
                    href={`mailto:${SITE_CONTENT.founder.email}`}
                    className="btn btn-outline"
                    style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
                  >
                    {SITE_CONTENT.founder.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Milestones */}
          <div id="milestones" className="card" style={{ marginBottom: '3.5rem' }}>
            <span className="card-kicker">our-milestones</span>
            <h2 className="card-title" style={{ fontSize: '1.5rem' }}>
              Our Milestones
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
              {SITE_CONTENT.milestones.map((m, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem'
                  }}
                >
                  <span className="badge badge-amber">{m.year}</span>
                  <span>{m.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Identity Blocks */}
          <div className="section-header">
            <span className="section-kicker">corporate identity</span>
            <h2 className="section-title">Organization & Structure</h2>
          </div>
          <div className="grid-2">
            {SITE_CONTENT.corporateIdentity.map((item) => (
              <div id={item.id} className="card" key={item.id} style={{ marginBottom: '1.5rem' }}>
                <span className="card-kicker">{item.kicker}</span>
                <h2 className="card-title" style={{ fontSize: '1.35rem' }}>
                  {item.title}
                </h2>
                <p className="card-text">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
