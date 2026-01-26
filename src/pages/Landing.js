import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DogIcon } from '../components/Logo';
import { translations } from '../i18n/translations';
import './Landing.css';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

const Landing = ({ language }) => {
  const t = translations[language].landing;

  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          className="hero-content container"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="hero-title"
            variants={fadeInUp}
          >
            {t.heroTitle}
            <motion.span 
              className="hero-highlight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {' '}{t.heroTitleHighlight}
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            variants={fadeInUp}
          >
            {t.heroSubtitle}
          </motion.p>
          
          <motion.div 
            className="hero-cta"
            variants={fadeInUp}
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                {t.ctaContact}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link to="/privacy" className="btn btn-secondary btn-lg">
                {t.ctaPrivacy}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <div className="hero-bg">
          <motion.div 
            className="hero-gradient"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          />
          <div className="hero-pattern"></div>
          
          {/* Watermark Logo */}
          <motion.div 
            className="hero-watermark"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <img 
              src={process.env.PUBLIC_URL + '/boglelogo.png'} 
              alt="" 
              className="watermark-image"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2>{t.featuresTitle}</h2>
            <p>{t.featuresSubtitle}</p>
          </motion.div>
          
          <motion.div 
            className="features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                ),
                title: t.feature1Title,
                desc: t.feature1Desc
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                ),
                title: t.feature2Title,
                desc: t.feature2Desc
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                ),
                title: t.feature3Title,
                desc: t.feature3Desc
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card card"
                variants={scaleIn}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 40px rgba(139, 90, 43, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="feature-icon"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mascot Section */}
      <section className="mascot section">
        <div className="container">
          <motion.div 
            className="mascot-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="mascot-image"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <DogIcon size={200} />
            </motion.div>
            <motion.div 
              className="mascot-text"
              variants={fadeInUp}
            >
              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {language === 'ko' && '안녕하세요, 저는 보글이예요!'}
                {language === 'en' && "Hi, I'm Bogle!"}
                {language === 'ja' && 'こんにちは、ボグルです！'}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {language === 'ko' && '저는 Bogle Studio의 마스코트 갈색 강아지예요. 여러분과 함께 더 좋은 앱을 만들어 가고 싶어요. 앞으로 많은 관심 부탁드려요! 🐕'}
                {language === 'en' && "I'm the brown puppy mascot of Bogle Studio. I want to create better apps together with you. Please support us! 🐕"}
                {language === 'ja' && '私はBogle Studioのマスコット、茶色の子犬です。皆さんと一緒により良いアプリを作っていきたいです。これからもよろしくお願いします！🐕'}
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
