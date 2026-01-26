import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import './index.css';

// Page transition wrapper
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

// Animated Routes component
const AnimatedRoutes = ({ language }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageWrapper>
              <Landing language={language} />
            </PageWrapper>
          } 
        />
        <Route 
          path="/privacy" 
          element={
            <PageWrapper>
              <Privacy language={language} />
            </PageWrapper>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <PageWrapper>
              <Contact language={language} />
            </PageWrapper>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [language, setLanguage] = useState('ko');

  return (
    <Router>
      <div className="app-wrapper">
        <Header language={language} setLanguage={setLanguage} />
        <main className="main-content">
          <AnimatedRoutes language={language} />
        </main>
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;
