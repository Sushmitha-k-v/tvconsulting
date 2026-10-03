import React, { useState, useEffect } from 'react';
import { SITE_CONTENT } from '../data/siteContent';
import { Icon } from './Icons';

export function Header({ currentPath, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(href);
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="site-header">
      <div className="container nav-shell">
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
          />
          <img
            src="/assets/logo-horizontal.png"
            alt="TerraVerde Consulting"
            className="brand-logo-img brand-logo-light"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>
            {SITE_CONTENT.navigation.map((item) => {
              const isActive =
                currentPath === item.href ||
                (item.href !== '/' && currentPath.startsWith(item.href));
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA */}
        <div className="header-cta">
          <a
            href="/contact"
            className="btn btn-primary"
            onClick={(e) => handleLinkClick(e, '/contact')}
            style={{ padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle"
          id="mobile-toggle"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} id="mobile-drawer">
        <div
          style={{
            paddingBottom: '1rem',
            marginBottom: '0.75rem',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          <img
            src="/assets/logo-horizontal-dark.png"
            alt="TerraVerde Consulting"
            className="brand-logo-img brand-logo-dark"
            style={{ height: '36px' }}
          />
          <img
            src="/assets/logo-horizontal.png"
            alt="TerraVerde Consulting"
            className="brand-logo-img brand-logo-light"
            style={{ height: '36px' }}
          />
        </div>

        {SITE_CONTENT.navigation.map((item) => {
          const isActive =
            currentPath === item.href ||
            (item.href !== '/' && currentPath.startsWith(item.href));
          return (
            <a
              key={item.href}
              href={item.href}
              className={`mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={(e) => handleLinkClick(e, item.href)}
            >
              <span>{item.label}</span>
              <Icon name="ArrowRight" size={16} />
            </a>
          );
        })}

        <div
          style={{
            marginTop: '1.5rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-subtle)'
          }}
        >
          <a
            href="/contact"
            className="btn btn-primary"
            onClick={(e) => handleLinkClick(e, '/contact')}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
