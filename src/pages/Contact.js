import React from 'react';
import { motion } from 'framer-motion';
import { DogIcon } from '../components/Logo';
import { translations } from '../i18n/translations';
import './Contact.css';

const Contact = ({ language }) => {
  const t = translations[language].contact;

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="contact-mascot"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15,
                delay: 0.2 
              }}
            >
              <DogIcon size={80} />
            </motion.div>
            <h1>{t.title}</h1>
            <p>{t.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <motion.div 
            className="contact-grid"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="contact-card card"
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(139, 90, 43, 0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="contact-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h3>{t.emailTitle}</h3>
              <p>{t.emailDesc}</p>
              <motion.a 
                href="mailto:jaykang0304@gmail.com" 
                className="contact-link"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                jaykang0304@gmail.com
              </motion.a>
              <span className="response-time">{t.responseTime}</span>
            </motion.div>
          </motion.div>

          <motion.div 
            className="contact-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div 
              className="waving-dog"
              animate={{ 
                rotate: [0, 10, -10, 10, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatDelay: 3 
              }}
            >
              <DogIcon size={60} />
            </motion.div>
            <p>
              {language === 'ko' && '보글이가 여러분의 연락을 기다리고 있어요! 🐕'}
              {language === 'en' && "Bogle is waiting for your message! 🐕"}
              {language === 'ja' && 'ボグルがご連絡をお待ちしています！🐕'}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

