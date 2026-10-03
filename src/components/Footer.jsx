import React from 'react';
import { SITE_CONTENT } from '../data/siteContent';
import { Icon } from './Icons';

export function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    onNavigate(href);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a
              href="/"
              className="brand-logo"
              onClick={(e) => handleLinkClick(e, '/')}
              aria-label="TerraVerde Consulting"
            >
              <img
                src="/assets/logo-horizontal-dark.png"
                alt="TerraVerde Consulting"
                className="brand-logo-img brand-logo-dark"
                style={{ height: '46px' }}
              />
              <img
                src="/assets/logo-horizontal.png"
                alt="TerraVerde Consulting"
                className="brand-logo-img brand-logo-light"
                style={{ height: '46px' }}
              />
            </a>
            <p>A carbon advisory firm helping industries navigate compliance and decarbonisation.</p>
            <div style={{ marginTop: '1.25rem' }}>
              <span className="badge badge-emerald">
                <span className="pulse-dot"></span> Climate Advisory
              </span>
            </div>
          </div>

          <div className="footer-col">
            <h4>What We Do</h4>
            <ul className="footer-links">
              {SITE_CONTENT.services.slice(0, 3).map((s) => (
                <li key={s.slug}>
                  <a
                    href={`/what-we-do#${s.slug}`}
                    className="footer-link"
                    onClick={(e) => handleLinkClick(e, `/what-we-do#${s.slug}`)}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Who We Are</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="/who-we-are#about"
                  className="footer-link"
                  onClick={(e) => handleLinkClick(e, '/who-we-are#about')}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/who-we-are#leadership"
                  className="footer-link"
                  onClick={(e) => handleLinkClick(e, '/who-we-are#leadership')}
                >
                  Our Leadership
                </a>
              </li>
              <li>
                <a
                  href="/career"
                  className="footer-link"
                  onClick={(e) => handleLinkClick(e, '/career')}
                >
                  Career
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Engage</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="/engage#blogs"
                  className="footer-link"
                  onClick={(e) => handleLinkClick(e, '/engage#blogs')}
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/investor-relations"
                  className="footer-link"
                  onClick={(e) => handleLinkClick(e, '/investor-relations')}
                >
                  Investor Relations
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="/legal#privacy"
                  className="footer-link"
                  onClick={(e) => handleLinkClick(e, '/legal#privacy')}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/legal#disclaimer"
                  className="footer-link"
                  onClick={(e) => handleLinkClick(e, '/legal#disclaimer')}
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="footer-link"
                  onClick={(e) => handleLinkClick(e, '/contact')}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} TerraVerde Consulting. Corporate Website (React Architecture).</span>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <span>Back to top</span>
            <Icon name="ChevronUp" size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
