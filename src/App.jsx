import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { WhatWeDoPage } from './pages/WhatWeDoPage';
import { WhoWeArePage } from './pages/WhoWeArePage';
import { CareerPage } from './pages/CareerPage';
import { EngagePage } from './pages/EngagePage';
import { InvestorRelationsPage } from './pages/InvestorRelationsPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

export function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname || '/';
  });

  // Trial: Light Mode theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    try {
      localStorage.setItem('tvc_theme', 'light');
    } catch {
      // ignore
    }
  }, []);

  const handleHashScroll = useCallback(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const navigateTo = useCallback((url) => {
    const [pathPart, hashPart] = url.split('#');
    const targetPath = pathPart || window.location.pathname || '/';

    if (targetPath !== window.location.pathname) {
      window.history.pushState(null, null, url);
      setCurrentPath(targetPath);
    } else if (hashPart) {
      window.history.pushState(null, null, url);
    }

    if (hashPart) {
      setTimeout(() => {
        const element = document.getElementById(hashPart);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname || '/');
      handleHashScroll();
    };

    window.addEventListener('popstate', onPopState);
    handleHashScroll();

    return () => window.removeEventListener('popstate', onPopState);
  }, [handleHashScroll]);

  // Clean pathname without trailing slash (except root)
  const normalizedPath = currentPath.length > 1 ? currentPath.replace(/\/$/, '') : currentPath;

  const renderPage = () => {
    switch (normalizedPath) {
      case '/':
        return <HomePage onNavigate={navigateTo} />;
      case '/what-we-do':
        return <WhatWeDoPage onNavigate={navigateTo} />;
      case '/who-we-are':
        return <WhoWeArePage onNavigate={navigateTo} />;
      case '/career':
        return <CareerPage onNavigate={navigateTo} />;
      case '/engage':
        return <EngagePage onNavigate={navigateTo} />;
      case '/investor-relations':
        return <InvestorRelationsPage onNavigate={navigateTo} />;
      case '/contact':
        return <ContactPage onNavigate={navigateTo} />;
      case '/legal':
        return <LegalPage onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="app-layout">
      <Header currentPath={normalizedPath} onNavigate={navigateTo} />
      <main id="main-content">
        <ErrorBoundary>
          {renderPage()}
        </ErrorBoundary>
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '4rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
          <h2 style={{ color: '#ef4444', marginBottom: '1rem' }}>Something went wrong loading this section.</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
            {this.state.error?.message || 'An unexpected error occurred.'}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.setState({ hasError: false });
              window.location.reload();
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default App;
