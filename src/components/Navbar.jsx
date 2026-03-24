import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = () => {
  const location = useLocation();
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark') || true);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Animate menu open/close
  useEffect(() => {
    if (!menuRef.current) return;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(menuRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo('.mobile-link',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.07, duration: 0.5, ease: 'power3.out', delay: 0.15 }
      );
      gsap.fromTo('.mobile-cta',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.5 }
      );
      gsap.fromTo('.mobile-footer',
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power2.out', delay: 0.6 }
      );
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const links = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'Members', path: '/members', icon: 'groups' },
    { name: 'Events', path: '/events', icon: 'event' },
    { name: 'Gallery', path: '/gallery', icon: 'photo_library' },
    { name: 'Contact', path: '/contact', icon: 'mail' },
  ];

  useEffect(() => {
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <>
      <nav ref={navRef} className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-surface-variant/50 shadow-sm selection:bg-tertiary selection:text-on-tertiary">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <Link to="/" className="text-xl font-bold tracking-tighter text-primary-fixed-dim">
            IEEE BITP
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={
                    isActive
                      ? "text-tertiary relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-tertiary font-medium text-sm tracking-wider"
                      : "text-on-surface/70 hover:text-on-surface transition-colors font-medium text-sm tracking-wider"
                  }
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full border border-outline-variant/20 text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">{isDark ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <a href="https://www.ieee.org/membership/join" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-primary to-secondary text-on-primary px-8 py-2.5 rounded-xl font-semibold text-sm hover:scale-95 transition-all duration-300">
              Join Us
            </a>
          </div>

          {/* Mobile Menu Button Group */}
          <div className="md:hidden flex items-center justify-center gap-2">
            <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full border border-outline-variant/20 text-on-surface flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">{isDark ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <button 
              className="text-on-surface p-2 focus:outline-none flex items-center justify-center z-[60]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="material-symbols-outlined text-3xl">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Page Mobile Menu Overlay */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col opacity-0"
        >
          {/* Decorative glow */}
          <div className="absolute top-[-20%] right-[-20%] w-[400px] h-[400px] bg-[radial-gradient(circle,_var(--color-tertiary-container-val)_0%,_transparent_70%)] opacity-20 pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-[radial-gradient(circle,_var(--color-secondary-container-val)_0%,_transparent_70%)] opacity-15 pointer-events-none"></div>

          {/* Nav links — top-left aligned */}
          <div className="flex-1 flex flex-col items-start justify-start gap-5 px-8 pt-24">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`mobile-link flex items-center gap-4 text-3xl font-bold tracking-tight transition-all duration-300 ${
                    isActive
                      ? 'text-tertiary scale-105'
                      : 'text-on-surface hover:text-tertiary hover:translate-x-2'
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl opacity-50">{link.icon}</span>
                  {link.name}
                </Link>
              );
            })}

            <a
              href="https://www.ieee.org/membership/join"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-cta mt-6 bg-gradient-to-r from-primary to-secondary text-on-primary px-12 py-4 rounded-xl font-bold text-lg text-center hover:scale-105 active:scale-95 transition-all"
            >
              Join IEEE
            </a>
          </div>

          {/* Footer credit */}
          <div className="mobile-footer pb-8 pt-4 text-center border-t border-outline-variant/10 mx-8">
            <p className="text-on-surface-variant/50 text-sm">
              built & designed by{' '}
              <a
                href="https://www.linkedin.com/in/aayusharyaiam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-tertiary hover:underline font-medium"
              >
                Aayush Arya
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
