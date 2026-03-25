import React, { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTop';
import Home from './pages/Home';
import Members from './pages/Members';
import Events from './pages/Events';
import GalleryPage from './pages/Gallery';
import Contact from './pages/Contact';
import Abhivyakti from './pages/Abhivyakti';

function PageTransition({ children }) {
  const { pathname } = useLocation();
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Scroll to top instantly on route change
    window.scrollTo(0, 0);
    
    // Animate page in
    gsap.fromTo(wrapperRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    );
  }, [pathname]);

  return <div ref={wrapperRef} className="w-full">{children}</div>;
}

function App() {
  return (
    <div className="bg-background min-h-screen text-on-surface overflow-x-hidden selection:bg-tertiary/30 selection:text-on-surface">
      <Navbar />
      <main className="w-full">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/abhivyakti" element={<Abhivyakti />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
