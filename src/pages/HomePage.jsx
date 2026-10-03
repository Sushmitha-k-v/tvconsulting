import React from 'react';
import { SITE_CONTENT } from '../data/siteContent';
import { Icon } from '../components/Icons';
import { CompanyHeroSlider } from '../components/CompanyHeroSlider';

export function HomePage({ onNavigate }) {
  const handleLink = (e, href) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-glow-blob hero-glow-1"></div>
        <div className="hero-glow-blob hero-glow-2"></div>
        <div className="hero-shell">
          {/* Left Column: Mission, Headline & Action Buttons */}
          <div className="hero-content">
            <span className="badge badge-emerald">
              <span className="pulse-dot"></span> India's Premier Carbon & Decarbonisation Advisory
            </span>
            <h1 className="hero-title">
              <span className="highlight">{SITE_CONTENT.tagline}</span>
            </h1>
            <p className="hero-subtitle">{SITE_CONTENT.subTagline}</p>
            <div className="hero-actions">
              <a
                href="/contact"
                className="btn btn-primary"
                onClick={(e) => handleLink(e, '/contact')}
              >
                Get in touch <Icon name="ArrowRight" size={16} />
              </a>
              <a
                href="/what-we-do"
                className="btn btn-secondary"
                onClick={(e) => handleLink(e, '/what-we-do')}
              >
                What we do
              </a>
            </div>
          </div>

          {/* Right Column: Company Showcase Scrolling Slides */}
          <div className="hero-slider-wrap">
            <CompanyHeroSlider onNavigate={onNavigate} />
          </div>
        </div>
      </section>

      {/* Who We Are Intro */}
      <section className="section" id="who-we-are">
        <div className="container">
          <div className="section-header">
            <span className="section-kicker">section / who-we-are</span>
            <h2 className="section-title">Who we are</h2>
            <p className="section-desc">{SITE_CONTENT.mission}</p>
            <div style={{ marginTop: '1.5rem' }}>
              <a
                href="/who-we-are"
                className="btn btn-outline"
                onClick={(e) => handleLink(e, '/who-we-are')}
              >
                Learn more about us <Icon name="ArrowRight" size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="section section-alternate" id="offerings">
        <div className="container">
          <div className="section-header">
            <span className="section-kicker">section / our-offerings</span>
            <h2 className="section-title">Our service offerings</h2>
            <p className="section-desc">
              Seven areas of practice, drawn on individually or combined into an end-to-end carbon solution.
            </p>
          </div>
          <div className="grid-3">
            {SITE_CONTENT.services.map((s, idx) => (
              <div className="card" key={s.slug} id={`card-${s.slug}`}>
                <div className="service-icon-box">
                  <Icon name={s.icon} size={22} />
                </div>
                <span className="card-kicker">service / 0{idx + 1}</span>
                <h3 className="card-title">{s.title}</h3>
                <p className="card-text">{s.description}</p>
                <a
                  href={`/what-we-do#${s.slug}`}
                  className="card-link"
                  onClick={(e) => handleLink(e, `/what-we-do#${s.slug}`)}
                >
                  Know more <Icon name="ArrowRight" size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Statistics */}
      <section className="section" id="stats">
        <div className="container">
          <div className="section-header">
            <span className="section-kicker">section / company-statistics</span>
            <h2 className="section-title">Company statistics</h2>
          </div>
          <div className="grid-4">
            {SITE_CONTENT.stats.map((st, i) => (
              <div className="stat-card" key={i}>
                <div className="stat-number">{st.number}</div>
                <div className="stat-label">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="section section-alternate" id="insights">
        <div className="container">
          <div className="section-header">
            <span className="section-kicker">section / latest-insights</span>
            <h2 className="section-title">Latest insights</h2>
          </div>
          <div className="grid-3">
            {SITE_CONTENT.engageArticles.map((a, i) => (
              <div className="card" key={i}>
                <span className="badge badge-amber" style={{ marginBottom: '0.85rem' }}>
                  {a.category}
                </span>
                <h3 className="card-title" style={{ fontSize: '1.15rem' }}>
                  {a.title}
                </h3>
                <p className="card-text">{a.summary}</p>
                <a
                  href="/engage"
                  className="card-link"
                  onClick={(e) => handleLink(e, '/engage')}
                >
                  Read article <Icon name="ArrowRight" size={16} />
                </a>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <a
              href="/engage"
              className="btn btn-secondary"
              onClick={(e) => handleLink(e, '/engage')}
            >
              See all insights <Icon name="ArrowRight" size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
