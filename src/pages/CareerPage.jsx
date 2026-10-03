import React from 'react';
import { Icon } from '../components/Icons';

export function CareerPage({ onNavigate }) {
  const handleLink = (e, href) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <div className="animate-fade-in">
      <header className="page-header">
        <div className="container">
          <span className="badge badge-emerald">career</span>
          <h1>Join the team</h1>
          <p>Culture, values, and open roles.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div id="life-at-terraverde" className="card" style={{ marginBottom: '2.5rem', padding: '2.5rem' }}>
            <span className="card-kicker">life-at-terraverde</span>
            <h2 className="card-title" style={{ fontSize: '1.65rem' }}>
              Life At TerraVerde
            </h2>
            <p className="card-text" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              At TerraVerde Consulting, we bring together climate specialists, energy analysts, and carbon market advisors to solve some of the most critical decarbonisation challenges facing Indian and global industries.
            </p>
          </div>

          <div id="jobs" className="card" style={{ padding: '2.5rem' }}>
            <span className="card-kicker">jobs</span>
            <h2 className="card-title" style={{ fontSize: '1.65rem' }}>
              Open Positions
            </h2>
            <div
              style={{
                background: 'rgba(16, 38, 28, 0.4)',
                border: '1px dashed var(--border-medium)',
                borderRadius: 'var(--radius-md)',
                padding: '2.5rem',
                textAlign: 'center',
                marginTop: '1.5rem'
              }}
            >
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                No open roles listed yet. Check back soon, or submit your profile for future consideration.
              </p>
              <a
                href="/contact"
                className="btn btn-primary"
                onClick={(e) => handleLink(e, '/contact')}
              >
                Submit General Application <Icon name="ArrowRight" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
