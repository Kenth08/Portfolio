import { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import { useTheme } from './hooks/useTheme';

const LOADER_KEY = 'portfolio-visited';

// Show the loader only on the first visit of a browser session.
function shouldShowLoader() {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    return !sessionStorage.getItem(LOADER_KEY);
  } catch {
    return false;
  }
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(shouldShowLoader);

  useEffect(() => {
    if (!loading) return undefined;
    const timer = setTimeout(() => {
      setLoading(false);
      try {
        sessionStorage.setItem(LOADER_KEY, '1');
      } catch {
        // Ignore: the loader will simply show again next visit.
      }
    }, 1300);
    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <About />
        <Education />
      </main>
    </MotionConfig>
  );
}
