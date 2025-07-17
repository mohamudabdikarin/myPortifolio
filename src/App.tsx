import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LoadingProvider } from './contexts/LoadingContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          
          <Navigation />
          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </div>
      </LoadingProvider>
    </ThemeProvider>
  );
}

export default App;