/**
 * TerraVerde Consulting - Modern Client Application & SPA Router
 * Preserves 100% of the content while providing a modern, interactive experience.
 */

(function () {
  'use strict';

  // --- 1. VERBATIM CONTENT DATA ---
  const SITE_CONTENT = {
    tagline: "A new-generation carbon advisory firm helping industries understand, manage, and act on their carbon responsibilities.",
    subTagline: "From Carbon Compliance to Decarbonisation — We Help Businesses Navigate the Carbon Economy.",
    mission: "TerraVerde Consulting helps industries navigate the evolving carbon landscape through carbon compliance, decarbonisation advisory, carbon project development, and carbon credit brokerage. Our goal is simple: make carbon compliance and decarbonisation clear, measurable, and actionable for every industry.",
    
    navigation: [
      { href: "/", label: "Home" },
      { href: "/what-we-do", label: "What We Do" },
      { href: "/who-we-are", label: "Who We Are" },
      { href: "/career", label: "Career" },
      { href: "/engage", label: "Engage" },
      { href: "/investor-relations", label: "Investor Relations" },
      { href: "/contact", label: "Contact Us" }
    ],

    services: [
      {
        slug: "carbon-compliance-advisory",
        title: "Carbon Compliance Advisory",
        description: "Helping industries understand and prepare for evolving carbon regulations and compliance requirements, including India's Carbon Credit Trading Scheme (CCTS).",
        icon: "shield"
      },
      {
        slug: "decarbonisation-advisory",
        title: "Decarbonisation Advisory",
        description: "Supporting businesses in identifying practical opportunities to reduce emissions, improve efficiency, and build a long-term decarbonisation roadmap.",
        icon: "trending-down"
      },
      {
        slug: "carbon-accounting-mrv",
        title: "Carbon Accounting & MRV",
        description: "Helping organisations understand their emissions footprint and establish reliable carbon accounting, measurement, reporting, and verification processes.",
        icon: "bar-chart"
      },
      {
        slug: "carbon-project-development",
        title: "Carbon Project Development",
        description: "Supporting organisations in identifying, developing, and structuring carbon projects with the potential to generate high-quality carbon credits.",
        icon: "layers"
      },
      {
        slug: "carbon-credit-sourcing-brokerage",
        title: "Carbon Credit Sourcing & Brokerage",
        description: "Connecting buyers with suitable carbon credit projects and helping them evaluate quality, relevance, and requirements.",
        icon: "repeat"
      },
      {
        slug: "compliance-carbon-credits",
        title: "Compliance Carbon Credits",
        description: "Helping obligated entities understand their carbon credit requirements and navigate the process of sourcing credits for compliance.",
        icon: "check-circle"
      },
      {
        slug: "end-to-end-carbon-solutions",
        title: "End-to-End Carbon Solutions",
        description: "Bringing compliance, accounting, decarbonisation, project development, and carbon credit procurement together under one advisory platform.",
        icon: "globe"
      }
    ],

    knowledgeGaps: [
      "How many carbon credits are required to meet their compliance obligations.",
      "Which companies and projects generate credible carbon credits.",
      "The importance of carbon accounting, measurement, reporting, and verification (MRV).",
      "How CCTS compliance works and what it means for their business.",
      "How to identify and implement practical decarbonisation opportunities while managing carbon-related costs and risks."
    ],

    ccts: {
      title: "Understanding CCTS",
      body: "CCTS stands for the Carbon Credit Trading Scheme — India's regulatory framework for carbon credits, introduced by the Government of India under the Ministry of Power and implemented through the Bureau of Energy Efficiency (BEE). Most industries are yet to clearly understand whether CCTS applies to them, what their obligations are, how carbon performance is measured, and how carbon credits fit into their compliance strategy. TerraVerde helps businesses assess their obligations, plan compliance strategies, and identify appropriate carbon-credit solutions with confidence.",
      targetAreas: [
        "Domestic ETS (Emissions Trading Systems)",
        "Carbon asset management in mergers & acquisitions",
        "Validation of Emission Reduction Purchase Agreements (ERPA)"
      ]
    },

    stats: [
      { number: "00+", label: "Years of operation" },
      { number: "00+", label: "Projects delivered" },
      { number: "00+", label: "Employees" },
      { number: "00+", label: "Countries served" }
    ],

    founder: {
      name: "Bipin Sateesh Kumar",
      role: "Founder & CEO",
      bio: "Bipin brings over two decades of IT experience to TerraVerde Consulting, with a strong focus on sales strategy and business growth. His career includes key roles at global industry leaders such as SAP, as well as several years in the U.S. market early on, which gave him a broad international perspective. A consistent top performer, Bipin thrives on tackling new challenges. As a founding member of the firm, he oversees all operational, strategic, and sales initiatives, driving the organisation forward with a hands-on leadership approach. Beyond the office, Bipin is an avid book reader and a natural mentor — always approachable and ready to help others succeed.",
      linkedin: "#",
      email: "sales@terraverdeconsulting.com"
    },

    milestones: [
      { year: "Pending", title: "Company milestones not yet supplied by client." }
    ],

    corporateIdentity: [
      { id: "subsidiaries", kicker: "our-subsidiaries", title: "Our Subsidiaries", body: "Not applicable / not yet supplied by client." },
      { id: "values", kicker: "our-values", title: "Our Values", body: "Placeholder — values content not yet supplied by client." },
      { id: "philosophy", kicker: "our-philosophy", title: "Our Philosophy", body: "Placeholder — philosophy content not yet supplied by client." },
      { id: "vision", kicker: "vision", title: "Vision", body: "Placeholder — vision statement not yet supplied by client." },
      { id: "manifesto", kicker: "manifesto", title: "Manifesto", body: "Placeholder — manifesto not yet supplied by client." }
    ],

    engageCategories: [
      { id: "blogs", kicker: "Blog", title: "Blogs" },
      { id: "publications", kicker: "Publication", title: "Publications" },
      { id: "press", kicker: "Press", title: "Press Releases" },
      { id: "media", kicker: "Coverage", title: "Media Coverage" },
      { id: "podcast", kicker: "Episode", title: "Podcast" },
      { id: "case-studies", kicker: "Case study", title: "Case Studies" }
    ],

    engageArticles: [
      { title: "Placeholder blog title one", category: "Blog", summary: "Placeholder summary — Engage content not yet supplied by client." },
      { title: "Placeholder blog title two", category: "Blog", summary: "Placeholder summary — Engage content not yet supplied by client." },
      { title: "Placeholder blog title three", category: "Blog", summary: "Placeholder summary — Engage content not yet supplied by client." }
    ],

    investorCategories: [
      "Financial Information",
      "Annual Reports",
      "Financial Results",
      "Investor Presentations",
      "Corporate Governance",
      "Policies",
      "General Meetings",
      "Notices",
      "Compliance",
      "Subsidiary Information"
    ],

    jobs: [],

    contactInfo: {
      corporate: "TerraVerde Consulting, Mezzanine Floor, 290 (41/2), 11th Cross Road, Wilson Garden, Bangalore - 560027",
      coordinates: { lat: 12.9483335, lng: 77.5981857 },
      other: "No additional offices supplied yet.",
      media: "sales@terraverdeconsulting.com"
    },

    legalSections: [
      {
        id: "privacy",
        kicker: "privacy-policy",
        title: "Privacy Policy",
        body: "Placeholder privacy policy text describing how information submitted through this site would be collected, used, and stored."
      },
      {
        id: "disclaimer",
        kicker: "disclaimer",
        title: "Disclaimer",
        body: "Placeholder disclaimer text clarifying that all content on this prototype is illustrative and not final company information."
      },
      {
        id: "grievance",
        kicker: "grievance",
        title: "Grievance",
        body: "Placeholder grievance redressal process and contact point, to be finalised with legal input."
      }
    ]
  };

  // --- 2. VECTOR ICONS HELPER ---
  function getIcon(name) {
    const icons = {
      shield: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      "trending-down": `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>`,
      "bar-chart": `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`,
      layers: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
      repeat: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
      "check-circle": `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
      globe: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
      arrowRight: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
      check: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
      download: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
      search: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
      leaf: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`
    };
    return icons[name] || icons.shield;
  }

  // --- 3. PAGE VIEW RENDERERS ---

  // Header Component
  function renderHeader(currentPath) {
    const navItems = SITE_CONTENT.navigation.map(item => {
      const isActive = currentPath === item.href || (item.href !== "/" && currentPath.startsWith(item.href));
      return `
        <li>
          <a href="${item.href}" class="nav-link ${isActive ? 'active' : ''}" data-link>${item.label}</a>
        </li>
      `;
    }).join('');

    const mobileNavItems = SITE_CONTENT.navigation.map(item => {
      const isActive = currentPath === item.href || (item.href !== "/" && currentPath.startsWith(item.href));
      return `
        <a href="${item.href}" class="mobile-nav-link ${isActive ? 'active' : ''}" data-link>
          <span>${item.label}</span>
          ${getIcon('arrowRight')}
        </a>
      `;
    }).join('');

    return `
      <header class="site-header" id="site-header">
        <div class="container nav-shell">
          <a href="/" class="brand-logo" data-link aria-label="TerraVerde Consulting">
            <img src="./assets/logo-horizontal-dark.png" alt="TerraVerde Consulting" class="brand-logo-img brand-logo-dark" />
            <img src="./assets/logo-horizontal.png" alt="TerraVerde Consulting" class="brand-logo-img brand-logo-light" />
          </a>

          <nav class="desktop-nav" aria-label="Primary Navigation">
            <ul style="list-style: none; display: flex; align-items: center; margin: 0; padding: 0;">
              ${navItems}
            </ul>
          </nav>

          <div class="header-cta">
            <a href="/contact" class="btn btn-primary" data-link style="padding: 0.55rem 1.25rem; font-size: 0.85rem;">
              Get in Touch
            </a>
          </div>

          <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle navigation menu">
            <svg id="menu-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="mobile-drawer" id="mobile-drawer">
          <div style="padding-bottom: 1rem; margin-bottom: 0.75rem; border-bottom: 1px solid var(--border-subtle);">
            <img src="./assets/logo-horizontal-dark.png" alt="TerraVerde Consulting" class="brand-logo-img brand-logo-dark" style="height: 36px;" />
            <img src="./assets/logo-horizontal.png" alt="TerraVerde Consulting" class="brand-logo-img brand-logo-light" style="height: 36px;" />
          </div>
          ${mobileNavItems}
          <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);">
            <a href="/contact" class="btn btn-primary" data-link style="width: 100%;">
              Get in Touch
            </a>
          </div>
        </div>
      </header>
    `;
  }

  // Footer Component
  function renderFooter() {
    const currentYear = new Date().getFullYear();
    return `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <a href="/" class="brand-logo" data-link aria-label="TerraVerde Consulting">
                <img src="./assets/logo-horizontal-dark.png" alt="TerraVerde Consulting" class="brand-logo-img brand-logo-dark" style="height: 46px;" />
                <img src="./assets/logo-horizontal.png" alt="TerraVerde Consulting" class="brand-logo-img brand-logo-light" style="height: 46px;" />
              </a>
              <p>A carbon advisory firm helping industries navigate compliance and decarbonisation.</p>
              <div style="margin-top: 1.25rem;">
                <span class="badge badge-emerald">
                  <span class="pulse-dot"></span> Climate Advisory
                </span>
              </div>
            </div>

            <div class="footer-col">
              <h4>What We Do</h4>
              <ul class="footer-links">
                ${SITE_CONTENT.services.slice(0, 3).map(s => `
                  <li><a href="/what-we-do#${s.slug}" class="footer-link" data-link>${s.title}</a></li>
                `).join('')}
              </ul>
            </div>

            <div class="footer-col">
              <h4>Who We Are</h4>
              <ul class="footer-links">
                <li><a href="/who-we-are#about" class="footer-link" data-link>About Us</a></li>
                <li><a href="/who-we-are#leadership" class="footer-link" data-link>Our Leadership</a></li>
                <li><a href="/career" class="footer-link" data-link>Career</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Engage</h4>
              <ul class="footer-links">
                <li><a href="/engage#blogs" class="footer-link" data-link>Blogs</a></li>
                <li><a href="/investor-relations" class="footer-link" data-link>Investor Relations</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Legal</h4>
              <ul class="footer-links">
                <li><a href="/legal#privacy" class="footer-link" data-link>Privacy Policy</a></li>
                <li><a href="/legal#disclaimer" class="footer-link" data-link>Disclaimer</a></li>
                <li><a href="/contact" class="footer-link" data-link>Contact Us</a></li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <span>© ${currentYear} TerraVerde Consulting. Corporate Website.</span>
            <button class="back-to-top" id="back-to-top">
              <span>Back to top</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>
            </button>
          </div>
        </div>
      </footer>
    `;
  }

  // Home Page View
  function renderHome() {
    const serviceCards = SITE_CONTENT.services.map((s, idx) => `
      <div class="card" id="card-${s.slug}">
        <div class="service-icon-box">
          ${getIcon(s.icon)}
        </div>
        <span class="card-kicker">service / 0${idx + 1}</span>
        <h3 class="card-title">${s.title}</h3>
        <p class="card-text">${s.description}</p>
        <a href="/what-we-do#${s.slug}" class="card-link" data-link>
          Know more ${getIcon('arrowRight')}
        </a>
      </div>
    `).join('');

    const statCards = SITE_CONTENT.stats.map(st => `
      <div class="stat-card">
        <div class="stat-number">${st.number}</div>
        <div class="stat-label">${st.label}</div>
      </div>
    `).join('');

    const insightCards = SITE_CONTENT.engageArticles.map(a => `
      <div class="card">
        <span class="badge badge-amber" style="margin-bottom: 0.85rem;">${a.category}</span>
        <h3 class="card-title" style="font-size: 1.15rem;">${a.title}</h3>
        <p class="card-text">${a.summary}</p>
        <a href="/engage" class="card-link" data-link>
          Read article ${getIcon('arrowRight')}
        </a>
      </div>
    `).join('');

    return `
      <div class="animate-fade-in">
        <!-- Hero Section -->
        <section class="hero-section">
          <div class="hero-glow-blob hero-glow-1"></div>
          <div class="hero-glow-blob hero-glow-2"></div>
          <div class="container hero-content">
            <span class="badge badge-emerald">
              <span class="pulse-dot"></span> India's Premier Carbon & Decarbonisation Advisory
            </span>
            <h1 class="hero-title">
              <span class="highlight">${SITE_CONTENT.tagline}</span>
            </h1>
            <p class="hero-subtitle">
              ${SITE_CONTENT.subTagline}
            </p>
            <div class="hero-actions">
              <a href="/contact" class="btn btn-primary" data-link>
                Get in touch ${getIcon('arrowRight')}
              </a>
              <a href="/what-we-do" class="btn btn-secondary" data-link>
                What we do
              </a>
            </div>
          </div>
        </section>

        <!-- Who We Are Intro -->
        <section class="section" id="who-we-are">
          <div class="container">
            <div class="section-header">
              <span class="section-kicker">section / who-we-are</span>
              <h2 class="section-title">Who we are</h2>
              <p class="section-desc">${SITE_CONTENT.mission}</p>
              <div style="margin-top: 1.5rem;">
                <a href="/who-we-are" class="btn btn-outline" data-link>
                  Learn more about us ${getIcon('arrowRight')}
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Service Offerings -->
        <section class="section" id="offerings" style="background: rgba(10, 24, 17, 0.4); border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
          <div class="container">
            <div class="section-header">
              <span class="section-kicker">section / our-offerings</span>
              <h2 class="section-title">Our service offerings</h2>
              <p class="section-desc">Seven areas of practice, drawn on individually or combined into an end-to-end carbon solution.</p>
            </div>
            <div class="grid-3">
              ${serviceCards}
            </div>
          </div>
        </section>

        <!-- Company Statistics -->
        <section class="section" id="stats">
          <div class="container">
            <div class="section-header">
              <span class="section-kicker">section / company-statistics</span>
              <h2 class="section-title">Company statistics</h2>
            </div>
            <div class="grid-4">
              ${statCards}
            </div>
          </div>
        </section>

        <!-- Latest Insights -->
        <section class="section" id="insights" style="background: rgba(10, 24, 17, 0.4); border-top: 1px solid var(--border-subtle);">
          <div class="container">
            <div class="section-header">
              <span class="section-kicker">section / latest-insights</span>
              <h2 class="section-title">Latest insights</h2>
            </div>
            <div class="grid-3">
              ${insightCards}
            </div>
            <div style="margin-top: 2.5rem; text-align: center;">
              <a href="/engage" class="btn btn-secondary" data-link>
                See all insights ${getIcon('arrowRight')}
              </a>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  // What We Do Page View
  function renderWhatWeDo() {
    const servicesList = SITE_CONTENT.services.map((s, idx) => `
      <div id="${s.slug}" class="card" style="margin-bottom: 2rem; border-left: 4px solid var(--accent-mint);">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem;">
          <span class="card-kicker">service / 0${idx + 1}</span>
          <span class="badge badge-emerald">${s.slug}</span>
        </div>
        <h2 style="font-size: 1.65rem; color: #ffffff; margin-bottom: 0.85rem;">${s.title}</h2>
        <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.75; max-width: 75ch;">${s.description}</p>
        <div style="margin-top: 1.5rem;">
          <a href="/contact" class="btn btn-primary" data-link style="padding: 0.55rem 1.25rem; font-size: 0.85rem;">
            Consult on this practice ${getIcon('arrowRight')}
          </a>
        </div>
      </div>
    `).join('');

    const knowledgeGapList = SITE_CONTENT.knowledgeGaps.map(item => `
      <li class="checklist-item">
        ${getIcon('check')}
        <span>${item}</span>
      </li>
    `).join('');

    const targetAreas = SITE_CONTENT.ccts.targetAreas.map(t => `
      <div class="target-area-chip">
        ${getIcon('check')}
        <span>${t}</span>
      </div>
    `).join('');

    return `
      <div class="animate-fade-in">
        <header class="page-header">
          <div class="container">
            <span class="badge badge-emerald">what we do</span>
            <h1>Our services</h1>
            <p>End-to-end carbon advisory — from compliance and accounting through to decarbonisation, project development, and credit sourcing.</p>
          </div>
        </header>

        <section class="section">
          <div class="container">
            <!-- The Knowledge Gap -->
            <div class="section-header" style="max-width: 800px;">
              <span class="section-kicker">the knowledge gap</span>
              <h2 class="section-title">What most industries are still unclear about</h2>
              <ul class="checklist">
                ${knowledgeGapList}
              </ul>
            </div>

            <!-- Detailed Services List -->
            <div style="margin-top: 4rem;">
              ${servicesList}
            </div>

            <!-- CCTS Explainer -->
            <div id="ccts" class="ccts-hero-box">
              <span class="badge badge-amber" style="margin-bottom: 1rem;">ccts-explainer</span>
              <h2 style="font-size: 1.85rem; color: #ffffff; margin-bottom: 1rem;">${SITE_CONTENT.ccts.title}</h2>
              <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.8; max-width: 80ch;">
                ${SITE_CONTENT.ccts.body}
              </p>
              
              <h3 style="font-size: 1.2rem; color: #ffffff; margin-top: 2rem; margin-bottom: 0.5rem;">
                Target compliance areas
              </h3>
              <div class="target-areas-grid">
                ${targetAreas}
              </div>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  // Who We Are Page View
  function renderWhoWeAre() {
    const corporateBlocks = SITE_CONTENT.corporateIdentity.map(item => `
      <div id="${item.id}" class="card" style="margin-bottom: 1.5rem;">
        <span class="card-kicker">${item.kicker}</span>
        <h2 class="card-title" style="font-size: 1.35rem;">${item.title}</h2>
        <p class="card-text">${item.body}</p>
      </div>
    `).join('');

    return `
      <div class="animate-fade-in">
        <header class="page-header">
          <div class="container">
            <span class="badge badge-emerald">who we are</span>
            <h1>About TerraVerde Consulting</h1>
            <p>Mission, leadership, and the path ahead.</p>
          </div>
        </header>

        <section class="section">
          <div class="container">
            <!-- About Us & Mission -->
            <div class="grid-2" style="margin-bottom: 3.5rem;">
              <div id="about" class="card">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.25rem;">
                  <img src="./assets/logo-emblem.png" alt="TerraVerde Logo Emblem" style="width: 44px; height: 44px; object-fit: contain; filter: drop-shadow(0 4px 12px rgba(16, 185, 129, 0.35));" />
                  <div>
                    <span class="card-kicker" style="margin-bottom: 0.15rem; display: block;">about-us</span>
                    <h2 class="card-title" style="font-size: 1.5rem; margin-bottom: 0;">About Us</h2>
                  </div>
                </div>
                <p class="card-text">${SITE_CONTENT.mission}</p>
              </div>

              <div id="mission" class="card">
                <span class="card-kicker">mission</span>
                <h2 class="card-title" style="font-size: 1.5rem;">Mission</h2>
                <p class="card-text">${SITE_CONTENT.mission}</p>
              </div>
            </div>

            <!-- Leadership Profile -->
            <div id="leadership" style="margin-bottom: 4rem;">
              <div class="section-header">
                <span class="section-kicker">our-leadership</span>
                <h2 class="section-title">Our Leadership</h2>
              </div>

              <div class="leader-card">
                <div class="leader-avatar-wrap">
                  <div class="leader-avatar">
                    BK
                  </div>
                  <span class="leader-badge">Executive Leadership</span>
                </div>

                <div class="leader-info">
                  <h3>${SITE_CONTENT.founder.name}</h3>
                  <div class="leader-role">${SITE_CONTENT.founder.role}</div>
                  <p class="leader-bio">${SITE_CONTENT.founder.bio}</p>
                  
                  <div class="leader-actions">
                    <a href="${SITE_CONTENT.founder.linkedin}" class="btn btn-secondary" style="padding: 0.55rem 1.25rem; font-size: 0.85rem;">
                      LinkedIn Profile ${getIcon('arrowRight')}
                    </a>
                    <a href="mailto:${SITE_CONTENT.founder.email}" class="btn btn-outline" style="padding: 0.55rem 1.25rem; font-size: 0.85rem;">
                      ${SITE_CONTENT.founder.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Milestones -->
            <div id="milestones" class="card" style="margin-bottom: 3.5rem;">
              <span class="card-kicker">our-milestones</span>
              <h2 class="card-title" style="font-size: 1.5rem;">Our Milestones</h2>
              <ul style="list-style: none; padding: 0; margin-top: 1rem;">
                ${SITE_CONTENT.milestones.map(m => `
                  <li style="display: flex; align-items: center; gap: 0.75rem; color: var(--text-secondary); font-size: 0.95rem;">
                    <span class="badge badge-amber">${m.year}</span>
                    <span>${m.title}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <!-- Corporate Identity Blocks -->
            <div class="section-header">
              <span class="section-kicker">corporate identity</span>
              <h2 class="section-title">Organization & Structure</h2>
            </div>
            <div class="grid-2">
              ${corporateBlocks}
            </div>
          </div>
        </section>
      </div>
    `;
  }

  // Career Page View
  function renderCareer() {
    return `
      <div class="animate-fade-in">
        <header class="page-header">
          <div class="container">
            <span class="badge badge-emerald">career</span>
            <h1>Join the team</h1>
            <p>Culture, values, and open roles.</p>
          </div>
        </header>

        <section class="section">
          <div class="container">
            <div id="life-at-terraverde" class="card" style="margin-bottom: 2.5rem; padding: 2.5rem;">
              <span class="card-kicker">life-at-terraverde</span>
              <h2 class="card-title" style="font-size: 1.65rem;">Life At TerraVerde</h2>
              <p class="card-text" style="font-size: 1.05rem;">Placeholder section — culture and workplace content not yet supplied by the client.</p>
            </div>

            <div id="jobs" class="card" style="padding: 2.5rem;">
              <span class="card-kicker">jobs</span>
              <h2 class="card-title" style="font-size: 1.65rem;">Jobs</h2>
              <div style="background: rgba(16, 38, 28, 0.4); border: 1px dashed var(--border-medium); border-radius: var(--radius-md); padding: 2.5rem; text-align: center; margin-top: 1.5rem;">
                <p style="color: var(--text-secondary); font-size: 1.05rem; margin-bottom: 1.5rem;">
                  No open roles listed yet. Check back soon, or reach out directly.
                </p>
                <a href="/contact" class="btn btn-primary" data-link>
                  Submit General Application ${getIcon('arrowRight')}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  // Engage Page View
  function renderEngage() {
    const engageSections = SITE_CONTENT.engageCategories.map(cat => `
      <div id="${cat.id}" class="card" style="margin-bottom: 2rem;">
        <span class="card-kicker">${cat.id}</span>
        <h2 class="card-title" style="font-size: 1.5rem;">${cat.title}</h2>
        <div class="grid-3" style="margin-top: 1.5rem;">
          ${SITE_CONTENT.engageArticles.map(art => `
            <div style="background: rgba(6, 18, 12, 0.7); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 1.25rem;">
              <div style="font-size: 0.75rem; color: var(--accent-amber); margin-bottom: 0.5rem; font-family: var(--font-mono);">
                ${cat.kicker} · placeholder
              </div>
              <h3 style="font-size: 1.05rem; color: #ffffff; margin-bottom: 0.5rem;">${art.title}</h3>
              <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.6;">${art.summary}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');

    return `
      <div class="animate-fade-in">
        <header class="page-header">
          <div class="container">
            <span class="badge badge-emerald">engage</span>
            <h1>Insights & updates</h1>
            <p>Blogs, publications, and media.</p>
          </div>
        </header>

        <section class="section">
          <div class="container">
            ${engageSections}
          </div>
        </section>
      </div>
    `;
  }

  // Investor Relations Page View
  function renderInvestorRelations() {
    return `
      <div class="animate-fade-in">
        <header class="page-header">
          <div class="container">
            <span class="badge badge-emerald">investor relations</span>
            <h1>Investor Relations</h1>
            <p>Financial and governance information.</p>
          </div>
        </header>

        <section class="section">
          <div class="container">
            <div class="table-toolbar">
              <div class="search-box">
                ${getIcon('search')}
                <input type="text" id="ir-search-input" placeholder="Search disclosures & documents..." />
              </div>
              <span class="badge badge-amber" style="text-transform: none;">
                Total Filings: ${SITE_CONTENT.investorCategories.length} Categories
              </span>
            </div>

            <div class="modern-table-container">
              <table class="modern-table" id="ir-table">
                <thead>
                  <tr>
                    <th>Document category</th>
                    <th>Latest update</th>
                    <th style="text-align: right;">Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${SITE_CONTENT.investorCategories.map(name => `
                    <tr data-name="${name.toLowerCase()}">
                      <td style="font-weight: 500; color: #ffffff;">${name}</td>
                      <td>
                        <span class="badge badge-amber" style="padding: 0.2rem 0.6rem; font-size: 0.7rem;">Pending</span>
                      </td>
                      <td style="text-align: right;">
                        <a href="#" class="btn btn-outline" style="padding: 0.35rem 0.85rem; font-size: 0.75rem; border-radius: var(--radius-pill);" onclick="alert('Document pending release by compliance department.'); return false;">
                          Download ${getIcon('download')}
                        </a>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  // Contact Us Page View
  function renderContact() {
    return `
      <div class="animate-fade-in">
        <header class="page-header">
          <div class="container">
            <span class="badge badge-emerald">contact us</span>
            <h1>Get in touch</h1>
            <p>Send an enquiry or find an office near you.</p>
          </div>
        </header>

        <section class="section">
          <div class="container">
            <div class="grid-2" style="align-items: start; gap: 2.5rem;">
              <!-- Enquiry Form -->
              <div class="contact-form-shell">
                <h2 style="font-size: 1.5rem; color: #ffffff; margin-bottom: 1.5rem;">Contact / Enquiry</h2>
                <form id="contact-form">
                  <div class="form-group">
                    <label for="contact-name" class="form-label">Full name</label>
                    <input type="text" id="contact-name" class="form-input" placeholder="Your full name" required />
                  </div>
                  <div class="form-group">
                    <label for="contact-email" class="form-label">Email</label>
                    <input type="email" id="contact-email" class="form-input" placeholder="name@company.com" required />
                  </div>
                  <div class="form-group">
                    <label for="contact-message" class="form-label">Message</label>
                    <textarea id="contact-message" class="form-input form-textarea" placeholder="How can our carbon advisory team assist you?" required></textarea>
                  </div>
                  <button type="submit" id="contact-submit-btn" class="btn btn-primary" style="width: 100%;">
                    Send enquiry ${getIcon('arrowRight')}
                  </button>
                  <div id="contact-status" style="margin-top: 1rem; display: none;"></div>
                </form>
              </div>

              <!-- Location & Media Cards -->
              <div class="map-card">
                <div>
                  <span class="card-kicker">corporate-office</span>
                  <h3 style="font-size: 1.25rem; color: #ffffff; margin-bottom: 0.5rem;">Corporate Office</h3>
                  <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6;">
                    ${SITE_CONTENT.contactInfo.corporate}
                  </p>
                  
                  <div class="map-frame-wrap" style="margin-top: 1.25rem;">
                    <iframe
                      title="TerraVerde Consulting office location"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps?q=${SITE_CONTENT.contactInfo.coordinates.lat},${SITE_CONTENT.contactInfo.coordinates.lng}&z=16&output=embed"
                    ></iframe>
                  </div>
                </div>

                <div class="contact-detail-card">
                  <span class="card-kicker">other-offices</span>
                  <h4 style="font-size: 1rem; color: #ffffff; margin-bottom: 0.35rem;">Other Offices</h4>
                  <p style="color: var(--text-muted); font-size: 0.9rem;">${SITE_CONTENT.contactInfo.other}</p>
                </div>

                <div class="contact-detail-card">
                  <span class="card-kicker">media-contact</span>
                  <h4 style="font-size: 1rem; color: #ffffff; margin-bottom: 0.35rem;">Media Contact</h4>
                  <p style="color: var(--text-muted); font-size: 0.9rem;">
                    <a href="mailto:${SITE_CONTENT.contactInfo.media}" style="color: var(--accent-mint); font-weight: 500;">
                      ${SITE_CONTENT.contactInfo.media}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  // Legal Page View
  function renderLegal() {
    const legalItems = SITE_CONTENT.legalSections.map(item => `
      <div id="${item.id}" class="card" style="margin-bottom: 2rem; border-left: 4px solid var(--accent-mint);">
        <span class="card-kicker">${item.kicker}</span>
        <h2 class="card-title" style="font-size: 1.5rem;">${item.title}</h2>
        <p class="card-text" style="font-size: 1rem; line-height: 1.8;">${item.body}</p>
      </div>
    `).join('');

    return `
      <div class="animate-fade-in">
        <header class="page-header">
          <div class="container">
            <span class="badge badge-emerald">legal</span>
            <h1>Legal</h1>
            <p>Privacy, disclaimer, and grievance information.</p>
          </div>
        </header>

        <section class="section">
          <div class="container">
            ${legalItems}
          </div>
        </section>
      </div>
    `;
  }

  // --- 4. ROUTER & CONTROLLER ---
  const routes = {
    "/": renderHome,
    "/what-we-do": renderWhatWeDo,
    "/who-we-are": renderWhoWeAre,
    "/career": renderCareer,
    "/engage": renderEngage,
    "/investor-relations": renderInvestorRelations,
    "/contact": renderContact,
    "/legal": renderLegal
  };

  function normalizePath(pathname) {
    if (!pathname || pathname === "") return "/";
    // Strip trailing slash except for root
    const clean = pathname.replace(/\/$/, "");
    return clean === "" ? "/" : clean;
  }

  function renderApp() {
    const path = normalizePath(window.location.pathname);
    const viewRenderer = routes[path] || routes["/"];

    const root = document.getElementById("root");
    if (!root) return;

    root.innerHTML = `
      ${renderHeader(path)}
      <main id="main-content">
        ${viewRenderer()}
      </main>
      ${renderFooter()}
    `;

    setupEventListeners();
    handleHashScroll();
  }

  function handleHashScroll() {
    if (window.location.hash) {
      setTimeout(() => {
        const targetId = window.location.hash.substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }

  function navigateTo(url) {
    window.history.pushState(null, null, url);
    renderApp();
  }

  function setupEventListeners() {
    // Scroll header morphing
    const header = document.getElementById("site-header");
    window.removeEventListener("scroll", onWindowScroll);
    window.addEventListener("scroll", onWindowScroll, { passive: true });
    onWindowScroll();

    // Mobile Drawer Toggle
    const toggleBtn = document.getElementById("mobile-toggle");
    const drawer = document.getElementById("mobile-drawer");
    if (toggleBtn && drawer) {
      toggleBtn.addEventListener("click", () => {
        const isOpen = drawer.classList.toggle("open");
        toggleBtn.innerHTML = isOpen ? `
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ` : `
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        `;
      });
    }

    // Back to top
    const backToTopBtn = document.getElementById("back-to-top");
    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Search filter for Investor Relations
    const irSearch = document.getElementById("ir-search-input");
    if (irSearch) {
      irSearch.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        const rows = document.querySelectorAll("#ir-table tbody tr");
        rows.forEach(row => {
          const text = row.getAttribute("data-name") || "";
          row.style.display = text.includes(query) ? "" : "none";
        });
      });
    }

    // Contact Form submission
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById("contact-submit-btn");
        const statusBox = document.getElementById("contact-status");
        
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending enquiry...</span>`;
        statusBox.style.display = "none";

        const payload = {
          name: document.getElementById("contact-name").value,
          email: document.getElementById("contact-email").value,
          message: document.getElementById("contact-message").value
        };

        try {
          // Attempt backend delivery
          const res = await fetch("http://localhost:8000/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
          });
          if (!res.ok) throw new Error("Backend offline");
          
          statusBox.innerHTML = `
            <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid var(--accent-mint); padding: 0.85rem 1rem; border-radius: var(--radius-sm); color: var(--accent-mint); font-size: 0.9rem;">
              Thanks — we'll be in touch.
            </div>
          `;
          statusBox.style.display = "block";
          contactForm.reset();
        } catch (err) {
          // Graceful client prototype handling
          statusBox.innerHTML = `
            <div style="background: rgba(245, 158, 11, 0.15); border: 1px solid var(--accent-amber); padding: 0.85rem 1rem; border-radius: var(--radius-sm); color: var(--accent-amber); font-size: 0.9rem;">
              Enquiry registered locally in prototype mode. (Backend server at port 8000 pending connection per roadmap).
            </div>
          `;
          statusBox.style.display = "block";
        } finally {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      });
    }
  }

  function onWindowScroll() {
    const header = document.getElementById("site-header");
    if (header) {
      if (window.scrollY > 30) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  }

  // Intercept navigation links for client-side SPA routing
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a[data-link]");
    if (link) {
      const href = link.getAttribute("href");
      if (href && href.startsWith("/")) {
        e.preventDefault();
        const drawer = document.getElementById("mobile-drawer");
        if (drawer && drawer.classList.contains("open")) {
          drawer.classList.remove("open");
          const toggleBtn = document.getElementById("mobile-toggle");
          if (toggleBtn) {
            toggleBtn.innerHTML = `
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            `;
          }
        }
        navigateTo(href);
      }
    }
  });

  // Handle popstate for browser forward/back buttons
  window.addEventListener("popstate", () => {
    renderApp();
  });

  // --- THEME SWITCHER LOGIC ---
  function initThemeSwitcher() {
    const savedTheme = localStorage.getItem("tvc_theme") || "emerald";
    document.documentElement.setAttribute("data-theme", savedTheme);

    if (document.getElementById("theme-switcher-widget")) return;

    const widget = document.createElement("div");
    widget.id = "theme-switcher-widget";
    widget.innerHTML = `
      <div class="theme-switcher-pill">
        <button class="theme-switcher-toggle" id="theme-toggle-btn" title="Click to preview different color palettes">
          <span>🎨</span>
          <span>Theme Preview</span>
        </button>
        <div class="theme-palette-options" id="theme-options-panel">
          <div class="theme-options-header">
            <strong>Palette Showcase</strong>
            <small>Live Preview</small>
          </div>
          <button class="theme-opt-btn ${savedTheme === "emerald" ? "active" : ""}" data-set-theme="emerald">
            <span class="theme-swatch" style="background: linear-gradient(135deg, #10b981, #f59e0b);"></span>
            <span>1. Emerald Obsidian (Current)</span>
          </button>
          <button class="theme-opt-btn ${savedTheme === "azure" ? "active" : ""}" data-set-theme="azure">
            <span class="theme-swatch" style="background: linear-gradient(135deg, #0ea5e9, #f97316);"></span>
            <span>2. Oceanic Azure & Cyan</span>
          </button>
          <button class="theme-opt-btn ${savedTheme === "carbon" ? "active" : ""}" data-set-theme="carbon">
            <span class="theme-swatch" style="background: linear-gradient(135deg, #22c55e, #a3e635);"></span>
            <span>3. Cyber Carbon & Lime</span>
          </button>
          <button class="theme-opt-btn ${savedTheme === "light" ? "active" : ""}" data-set-theme="light">
            <span class="theme-swatch" style="background: linear-gradient(135deg, #ffffff, #047857); border: 1px solid #cbd5e1;"></span>
            <span>4. Executive Alabaster Light</span>
          </button>
          <button class="theme-opt-btn ${savedTheme === "indigo" ? "active" : ""}" data-set-theme="indigo">
            <span class="theme-swatch" style="background: linear-gradient(135deg, #6366f1, #eab308);"></span>
            <span>5. Royal Indigo & Gold</span>
          </button>
          <a href="./theme-samples.html" style="font-size: 0.75rem; color: var(--accent-mint); text-align: center; margin-top: 6px; padding: 4px; text-decoration: underline; border-top: 1px solid var(--border-subtle);">
            View Full Side-by-Side Showcase ↗
          </a>
        </div>
      </div>
    `;
    document.body.appendChild(widget);

    const toggle = document.getElementById("theme-toggle-btn");
    const panel = document.getElementById("theme-options-panel");

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      panel.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (!widget.contains(e.target)) {
        panel.classList.remove("open");
      }
    });

    widget.querySelectorAll("[data-set-theme]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const theme = btn.getAttribute("data-set-theme");
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("tvc_theme", theme);
        widget.querySelectorAll("[data-set-theme]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  }

  // Initialize App on DOMContentLoaded or immediate
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      renderApp();
      initThemeSwitcher();
    });
  } else {
    renderApp();
    initThemeSwitcher();
  }
})();
