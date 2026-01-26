import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import './Header.css';

const Header = ({ language, setLanguage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: { ko: '홈', en: 'Home', ja: 'ホーム' } },
    { path: '/privacy', label: { ko: '개인정보처리방침', en: 'Privacy', ja: 'プライバシー' } },
    { path: '/contact', label: { ko: '문의', en: 'Contact', ja: 'お問い合わせ' } },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <Logo size={36} />
        </Link>

        <nav className={`header-nav ${mobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`nav-link ${isActive(path) ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {label[language]}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <div className="lang-switcher">
            <button
              className={`lang-btn ${language === 'ko' ? 'active' : ''}`}
              onClick={() => setLanguage('ko')}
            >
              KO
            </button>
            <button
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <button
              className={`lang-btn ${language === 'ja' ? 'active' : ''}`}
              onClick={() => setLanguage('ja')}
            >
              JA
            </button>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

