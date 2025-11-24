import { Suspense, lazy } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy load components that are not immediately visible
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

// Loading fallback
const PageLoader = () => (
  <div style={{ 
    height: '50vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    color: 'var(--primary-purple)' 
  }}>
    Cargando...
  </div>
);

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<PageLoader />}>
          <About />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
