import React from 'react';
import { Link } from 'react-router-dom';
import { DogIcon } from './Logo';
import './Footer.css';

const Footer = ({ language }) => {
  const currentYear = new Date().getFullYear();

  const content = {
    ko: {
      tagline: '보글이와 함께하는 앱 스튜디오',
      links: '바로가기',
      home: '홈',
      privacy: '개인정보처리방침',
      contact: '문의하기',
      copyright: `© ${currentYear} Bogle Studio. All rights reserved.`,
    },
    en: {
      tagline: 'App Studio with Bogle',
      links: 'Links',
      home: 'Home',
      privacy: 'Privacy Policy',
      contact: 'Contact',
      copyright: `© ${currentYear} Bogle Studio. All rights reserved.`,
    },
    ja: {
      tagline: 'ボグルと一緒のアプリスタジオ',
      links: 'リンク',
      home: 'ホーム',
      privacy: 'プライバシーポリシー',
      contact: 'お問い合わせ',
      copyright: `© ${currentYear} Bogle Studio. All rights reserved.`,
    },
  };

  const t = content[language];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <DogIcon size={32} />
              <span className="footer-brand-name">Bogle Studio</span>
            </div>
            <p className="footer-tagline">{t.tagline}</p>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">{t.links}</h4>
            <nav className="footer-nav">
              <Link to="/">{t.home}</Link>
              <Link to="/privacy">{t.privacy}</Link>
              <Link to="/contact">{t.contact}</Link>
            </nav>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Contact</h4>
            <a href="mailto:jaykang0304@gmail.com" className="footer-email">
              jaykang0304@gmail.com
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

