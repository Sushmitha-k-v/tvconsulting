import React, { useState } from 'react';
import { SITE_CONTENT } from '../data/siteContent';
import { Icon } from '../components/Icons';

export function InvestorRelationsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = SITE_CONTENT.investorCategories.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <div className="animate-fade-in">
      <header className="page-header">
        <div className="container">
          <span className="badge badge-emerald">investor relations</span>
          <h1>Investor Relations</h1>
          <p>Financial and governance information.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="table-toolbar">
            <div className="search-box">
              <Icon name="Search" size={16} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search disclosures & documents..."
                aria-label="Search documents"
              />
            </div>
            <span className="badge badge-amber" style={{ textTransform: 'none' }}>
              Disclosures: {filteredCategories.length} / {SITE_CONTENT.investorCategories.length} Categories
            </span>
          </div>

          <div className="modern-table-container">
            <table className="modern-table">
              <thead>
                <tr>
                  <th>Document category</th>
                  <th>Latest update</th>
                  <th style={{ textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((name) => (
                    <tr key={name}>
                      <td style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{name}</td>
                      <td>
                        <span className="badge badge-amber" style={{ padding: '0.2rem 0.6rem', fontSize: '0.7rem' }}>
                          Pending Release
                        </span>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <button
                          type="button"
                          className="btn btn-outline"
                          style={{
                            padding: '0.35rem 0.85rem',
                            fontSize: '0.75rem',
                            borderRadius: 'var(--radius-pill)',
                            cursor: 'pointer'
                          }}
                          onClick={() => alert(`Document for "${name}" will be made available upon regulatory filing.`)}
                        >
                          Download <Icon name="Download" size={14} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted)' }}>
                      No matching filings found for "{searchTerm}".
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
