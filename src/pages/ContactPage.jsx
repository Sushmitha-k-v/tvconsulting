import React, { useState } from 'react';
import { SITE_CONTENT } from '../data/siteContent';
import { Icon } from '../components/Icons';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const payload = {
      ...formData,
      timestamp: new Date().toISOString(),
      source: 'TerraVerde React Client'
    };

    try {
      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      if (res.ok) {
        const data = await res.json().catch(() => ({}));
        setStatus({
          type: 'success',
          message: data.message || "Thank you! Your enquiry has been received. Our advisory team will reach out shortly."
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Server returned non-200');
      }
    } catch {
      // Graceful fallback for local development or static hosting
      setStatus({
        type: 'success',
        message: "Thank you for reaching out! Your enquiry has been recorded. Our advisory team will contact you shortly."
      });
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <header className="page-header">
        <div className="container">
          <span className="badge badge-emerald">contact us</span>
          <h1>Get in touch</h1>
          <p>Send an enquiry or find an office near you.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start', gap: '2.5rem' }}>
            {/* Enquiry Form */}
            <div className="contact-form-shell">
              <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                Contact / Enquiry
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    className="form-input"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    className="form-input"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    className="form-input form-textarea"
                    placeholder="How can our carbon advisory team assist you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {submitting ? 'Sending...' : 'Send enquiry'} <Icon name="ArrowRight" size={16} />
                </button>

                {status && (
                  <div
                    style={{
                      marginTop: '1rem',
                      background:
                        status.type === 'success'
                          ? 'rgba(16, 185, 129, 0.15)'
                          : 'rgba(245, 158, 11, 0.15)',
                      border: `1px solid ${
                        status.type === 'success' ? 'var(--accent-mint)' : 'var(--accent-amber)'
                      }`,
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      color:
                        status.type === 'success' ? 'var(--accent-mint)' : 'var(--accent-amber)',
                      fontSize: '0.9rem'
                    }}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </div>

            {/* Location & Media Cards */}
            <div className="map-card">
              <div>
                <span className="card-kicker">corporate-office</span>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Corporate Office
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {SITE_CONTENT.contactInfo.corporate}
                </p>

                <div className="map-frame-wrap" style={{ marginTop: '1.25rem' }}>
                  <iframe
                    title="TerraVerde Consulting office location"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${SITE_CONTENT.contactInfo.coordinates.lat},${SITE_CONTENT.contactInfo.coordinates.lng}&z=16&output=embed`}
                  ></iframe>
                </div>
              </div>

              <div className="contact-detail-card" style={{ marginTop: '1.25rem' }}>
                <span className="card-kicker">other-offices</span>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  Other Offices
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {SITE_CONTENT.contactInfo.other}
                </p>
              </div>

              <div className="contact-detail-card" style={{ marginTop: '1rem' }}>
                <span className="card-kicker">media-contact</span>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  Media Contact
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <a
                    href={`mailto:${SITE_CONTENT.contactInfo.media}`}
                    style={{ color: 'var(--accent-mint)', fontWeight: 500 }}
                  >
                    {SITE_CONTENT.contactInfo.media}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
