import React, { useState, useEffect, useRef } from 'react';
import { Icon } from './Icons';

const COMPANY_SLIDES = [
  {
    id: 'ccts',
    badge: 'Compliance & CCTS',
    title: "India's Carbon Market Advisory",
    description: "Guiding energy-intensive industries through the Bureau of Energy Efficiency (BEE) compliance and India's Carbon Credit Trading Scheme (CCTS).",
    image: '/assets/slides/slide-1.jpg',
    stat: '100% CCTS Ready',
    target: '/what-we-do#carbon-compliance-advisory'
  },
  {
    id: 'decarb',
    badge: 'Decarbonisation Strategy',
    title: 'Industrial Decarbonisation Roadmaps',
    description: 'Practical Scope 1, 2 & 3 emission reduction roadmaps, clean-tech integration, and actionable net-zero pathways for heavy industry.',
    image: '/assets/slides/slide-2.jpg',
    stat: '40%+ Abatement Potential',
    target: '/what-we-do#decarbonisation-advisory'
  },
  {
    id: 'projects',
    badge: 'Project Origination & MRV',
    title: 'Nature-Based Carbon Projects',
    description: 'Structuring high-integrity carbon project development across afforestation, renewable energy, and digital MRV verification.',
    image: '/assets/slides/slide-3.jpg',
    stat: 'High-Integrity Carbon Credits',
    target: '/what-we-do#carbon-project-development'
  },
  {
    id: 'brokerage',
    badge: 'Global Trading & Sourcing',
    title: 'Carbon Credit Sourcing & Brokerage',
    description: 'Connecting compliance and voluntary buyers with authenticated carbon credit registries worldwide for strategic portfolio fulfillment.',
    image: '/assets/slides/slide-4.jpg',
    stat: 'Global Registry Sourcing',
    target: '/what-we-do#carbon-credit-sourcing-brokerage'
  }
];

export function CompanyHeroSlider({ onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const totalSlides = COMPANY_SLIDES.length;

  const nextSlide = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (idx) => {
    setDirection(idx > currentIndex ? 'next' : 'prev');
    setCurrentIndex(idx);
  };

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused]);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    }
  };

  const currentSlide = COMPANY_SLIDES[currentIndex] || COMPANY_SLIDES[0];

  const handleSlideLink = (e, href) => {
    e.preventDefault();
    if (onNavigate) onNavigate(href);
  };

  return (
    <div
      className={`hero-slider-container dir-${direction}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label="TerraVerde Focus Areas and Capabilities"
    >
      {/* Visual Ambient Frame */}
      <div className="hero-slider-frame">
        {/* Top Progress Line */}
        <div className="hero-slider-progress-track">
          <div
            key={currentIndex}
            className={`hero-slider-progress-bar ${isPaused ? 'paused' : 'running'}`}
          />
        </div>
        {COMPANY_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`hero-slide-item ${isActive ? 'active' : ''}`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="hero-slide-image"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
              <div className="hero-slide-scrim"></div>
            </div>
          );
        })}

        {/* Top Floating Badge Bar */}
        <div className="hero-slider-topbar">
          <span className="badge badge-emerald">
            <span className="pulse-dot"></span> About TerraVerde
          </span>
          <span className="hero-slider-counter" aria-live="polite">
            0{currentIndex + 1} <span className="counter-divider">/</span> 0{totalSlides}
          </span>
        </div>

        {/* Interactive Bottom Glassmorphic Card */}
        <div className="hero-slider-overlay-card">
          <div key={currentSlide.id} className="hero-slide-content-anim">
            <div className="hero-slide-meta">
              <span className="hero-slide-kicker">{currentSlide.badge}</span>
              <span className="hero-slide-stat">{currentSlide.stat}</span>
            </div>

            <h3 className="hero-slide-title">{currentSlide.title}</h3>
            <p className="hero-slide-desc">{currentSlide.description}</p>
          </div>

          <div className="hero-slide-action-row">
            <a
              href={currentSlide.target}
              className="hero-slide-link"
              onClick={(e) => handleSlideLink(e, currentSlide.target)}
            >
              Explore this practice <Icon name="ArrowRight" size={15} />
            </a>

            {/* Slider Navigation Buttons */}
            <div className="hero-slider-controls">
              <button
                type="button"
                className="hero-slider-btn"
                onClick={prevSlide}
                aria-label="Previous slide"
              >
                <Icon name="ChevronLeft" size={18} />
              </button>
              <button
                type="button"
                className="hero-slider-btn"
                onClick={nextSlide}
                aria-label="Next slide"
              >
                <Icon name="ChevronRight" size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Slide Indicator Bar / Dots */}
        <div className="hero-slider-indicators">
          {COMPANY_SLIDES.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              className={`hero-slider-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanyHeroSlider;
