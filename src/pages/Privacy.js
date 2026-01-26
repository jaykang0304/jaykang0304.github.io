import React from 'react';
import { motion } from 'framer-motion';
import { translations } from '../i18n/translations';
import './Privacy.css';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Privacy = ({ language }) => {
  const t = translations[language].privacy;

  return (
    <div className="privacy-page">
      <section className="privacy-hero">
        <div className="container container-narrow">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="privacy-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h1>{t.title}</h1>
          </motion.div>
        </div>
      </section>

      <section className="privacy-content section">
        <div className="container container-narrow">
          <motion.article 
            className="privacy-article"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            <motion.div className="privacy-section" variants={fadeIn}>
              <p>{t.intro1}</p>
              <p>{t.intro2}</p>
            </motion.div>

            <motion.div className="privacy-section" variants={fadeIn}>
              <h2>{t.dataCollection}</h2>
              <p>{t.dataIntro}</p>
              <ul className="privacy-list highlight">
                <li><strong>Firebase Crashlytics</strong>: {t.crashlytics}</li>
                <li><strong>Firebase Analytics</strong>: {t.analytics}</li>
              </ul>
              
              <div className="privacy-box warning">
                <h4>{t.notCollected}</h4>
                <ul className="privacy-list">
                  <li>{t.noPersonalInfo}</li>
                  <li>{t.noLocation}</li>
                  <li>{t.noContacts}</li>
                  <li>{t.noMedia}</li>
                </ul>
              </div>
              
              <p>{t.usagePurpose}</p>
              <ul className="privacy-list">
                <li>{t.stability}</li>
                <li>{t.improvement}</li>
                <li>{t.quality}</li>
              </ul>
            </motion.div>

            <motion.div className="privacy-section" variants={fadeIn}>
              <h2>{t.childrenPrivacy}</h2>
              <p>{t.childrenText}</p>
            </motion.div>

            <motion.div className="privacy-section" variants={fadeIn}>
              <h2>{t.dataStorage}</h2>
              <p>{t.storageText1}</p>
              <p>{t.storageText2}</p>
            </motion.div>

            <motion.div className="privacy-section" variants={fadeIn}>
              <h2>{t.policyChanges}</h2>
              <p>{t.changesText1}</p>
              <p>{t.changesText2}</p>
              <p>{t.changesText3}</p>
            </motion.div>

            <motion.div className="privacy-section contact-section" variants={fadeIn}>
              <h2>{t.contact}</h2>
              <p>{t.contactText}</p>
              <div className="contact-box">
                <span className="contact-label">{t.email}</span>
                <a href="mailto:jaykang0304@gmail.com" className="contact-email">
                  jaykang0304@gmail.com
                </a>
              </div>
            </motion.div>
          </motion.article>
        </div>
      </section>
    </div>
  );
};

export default Privacy;

