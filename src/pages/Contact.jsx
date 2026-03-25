import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const pageRef = useRef(null);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero split-text
      const h1 = pageRef.current?.querySelector('.contact-title');
      if (h1) {
        h1.innerHTML = h1.textContent.replace(/\S+/g, '<span class="ct-word inline-block">$&</span>');
        gsap.fromTo('.ct-word',
          { y: 50, opacity: 0, rotateX: -45 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.7, stagger: 0.05, ease: 'power4.out', delay: 0.15 }
        );
      }
      gsap.fromTo('.contact-desc',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.5 }
      );

      // Form container
      gsap.fromTo('.contact-form',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
      );

      // Right column stagger
      gsap.fromTo('.contact-right > *',
        { y: 40, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.12, duration: 0.8, ease: 'power3.out', delay: 0.4 }
      );

      // Info cards stagger
      gsap.fromTo('.info-card',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: 'power3.out',
          scrollTrigger: { trigger: '.info-grid', start: 'top 85%' }
        }
      );

      // Map parallax
      gsap.to('.map-img', {
        scrollTrigger: { trigger: '.map-container', start: 'top bottom', end: 'bottom top', scrub: 2 },
        y: -30, scale: 1.08,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
    <main ref={pageRef} className="relative min-h-screen pt-24 pb-24 overflow-hidden" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(60, 215, 255, 0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      {/* Hero Section / Title */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="contact-title text-5xl md:text-7xl font-bold tracking-tighter text-primary mb-4 uppercase perspective-[800px]">GET IN TOUCH</h1>
        <p className="contact-desc text-on-surface-variant max-w-2xl text-lg opacity-0">
          Have questions about IEEE BIT Patna? Whether you are a student, professional, or researcher, we are here to bridge the gap between innovation and community.
        </p>
      </div>

      {/* Split 50/50 Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Form */}
        <div className="contact-form flex flex-col space-y-8 opacity-0">
          <div className="bg-surface-container-low p-8 md:p-12 rounded-lg border border-outline-variant/10 shadow-xl relative mt-4 hover:shadow-[0_0_40px_rgba(60,215,255,0.08)] transition-shadow duration-500">
            <form className="space-y-10 group/form">
              <div className="relative pt-6">
                <input required id="name" type="text" placeholder=" " className="w-full bg-surface-container-highest border-0 border-b-2 border-outline-variant focus:border-tertiary focus:ring-0 text-on-surface px-4 py-3 transition-all rounded-t-md peer outline-none" />
                <label htmlFor="name" className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-tertiary peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-tertiary uppercase tracking-widest font-medium pointer-events-none">Full Name</label>
              </div>
              <div className="relative pt-6">
                <input required id="email" type="email" placeholder=" " className="w-full bg-surface-container-highest border-0 border-b-2 border-outline-variant focus:border-tertiary focus:ring-0 text-on-surface px-4 py-3 transition-all rounded-t-md peer outline-none" />
                <label htmlFor="email" className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-tertiary peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-tertiary uppercase tracking-widest font-medium pointer-events-none">Email Address</label>
              </div>
              <div className="relative pt-6">
                <textarea required id="message" rows="4" placeholder=" " className="w-full bg-surface-container-highest border-0 border-b-2 border-outline-variant focus:border-tertiary focus:ring-0 text-on-surface px-4 py-3 transition-all rounded-t-md peer outline-none resize-none"></textarea>
                <label htmlFor="message" className="absolute left-4 top-10 -translate-y-1/2 text-on-surface-variant transition-all peer-focus:-top-0 peer-focus:text-xs peer-focus:text-tertiary peer-[&:not(:placeholder-shown)]:-top-0 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-tertiary uppercase tracking-widest font-medium pointer-events-none">Your Message</label>
              </div>
              <button type="submit" className="w-full group relative overflow-hidden bg-gradient-to-r from-primary-container to-secondary-container py-4 rounded-xl font-bold text-on-surface tracking-tight hover:shadow-[0_0_20px_rgba(60,215,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all mt-4">
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Map & Details */}
        <div className="contact-right flex flex-col space-y-8 mt-4">
          
          {/* Map Placeholder */}
          <a href="https://maps.app.goo.gl/GxnZsdpVK1A74P126" target="_blank" rel="noopener noreferrer" className="map-container relative w-full h-[280px] rounded-lg overflow-hidden group block cursor-pointer">
            <div className="absolute inset-0 bg-surface-container-highest animate-pulse"></div>
            <img alt="Location Map" className="map-img w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwORt6eRH4HKk1bX6G_-BZS7kGFA5GaU1Sda8yRU2qgy4gZirOdG4dPLc5sU66CnEDcu31ToAtzjgW1jByJnIrAXkmPlKKbKXf_rXYJqHOKIE5lLSIFFYfpux1HW8WMk28uGfQffhsSOc2HiwWbt6oLAvmJwUTkIDfHNjyyqWYAkXYbMJ_6nvUSsR1KLC2CZLDCsyXdQaz-LfcyCmXYAjEV2_qBoNXtLbnoaP1dmgkKdo1__xxEY8JeM0SXhDSlzSlbeGBh0PW4q22"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 glass-panel p-4 rounded-lg border border-white/10 flex items-center space-x-4">
              <div className="bg-tertiary/20 p-2 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
              <div>
                <p className="text-xs uppercase font-label tracking-widest font-medium text-tertiary">Our Campus</p>
                <p className="font-semibold text-sm">BIT Patna, Bihar, IN</p>
              </div>
            </div>
          </a>

          <div className="info-grid grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="mailto:ieeebitp@gmail.com" className="info-card glass-panel p-6 rounded-lg border border-white/5 hover:border-tertiary/30 hover:-translate-y-1 transition-all duration-300 group block">
              <span className="material-symbols-outlined text-tertiary mb-3 block group-hover:scale-110 transition-transform">mail</span>
              <h4 className="font-label text-xs uppercase tracking-widest font-medium text-on-surface-variant mb-1">Email Us</h4>
              <p className="text-on-surface font-medium text-sm">ieeebitp@gmail.com</p>
            </a>
            
            <a href="tel:+916122273615" className="info-card glass-panel p-6 rounded-lg border border-white/5 hover:border-tertiary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center group block">
              <span className="material-symbols-outlined text-tertiary mb-3 block group-hover:scale-110 transition-transform">phone</span>
              <h4 className="font-label text-xs uppercase tracking-widest font-medium text-on-surface-variant mb-1">Call Us</h4>
              <p className="text-on-surface font-medium text-sm">+91 612 2273615</p>
            </a>

            <div className="info-card md:col-span-2 glass-panel p-6 rounded-lg border border-white/5 hover:border-tertiary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center group">
              <h4 className="font-label text-xs uppercase tracking-widest font-medium text-on-surface-variant mb-2">Address</h4>
              <p className="text-on-surface text-sm font-medium leading-relaxed">
                BIT Patna Campus,<br/>
                Near Patna Airport,<br/>
                Patna, Bihar 800014
              </p>
            </div>
            
            <div className="info-card md:col-span-2 glass-panel p-6 rounded-lg border border-white/5 hover:border-tertiary/30 hover:-translate-y-1 transition-all duration-300 flex justify-between items-center group">
              <div>
                <h4 className="font-label text-xs uppercase tracking-widest font-medium text-on-surface-variant mb-1">Follow the Innovation</h4>
                <div className="flex space-x-4 mt-2">
                  <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-tertiary hover:scale-125 transition-all">
                    <span className="material-symbols-outlined">public</span>
                  </a>
                  <a href="https://www.linkedin.com/company/ieee-student-branch-bit-patna/" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-tertiary hover:scale-125 transition-all">
                    <span className="material-symbols-outlined">groups</span>
                  </a>
                  <a href="https://www.instagram.com/ieee_bitpatna/" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-tertiary hover:scale-125 transition-all">
                    <span className="material-symbols-outlined">share</span>
                  </a>
                </div>
              </div>
              <button type="button" onClick={(e) => { e.stopPropagation(); setShowQR(true); }} className="relative z-10 bg-surface-container-highest p-4 rounded-xl hover:scale-110 transition-transform cursor-pointer">
                <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>qr_code_2</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>

      {/* Linktree QR Popup */}
      {showQR && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowQR(false)}>
          <div className="relative max-w-sm w-full bg-surface-container-low rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/20 animate-[scaleIn_0.3s_ease-out]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-3 right-3 z-10 bg-surface/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-error hover:text-on-error transition-all hover:scale-110"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <img src="/linktree.jpeg" alt="Linktree QR Code" className="w-full h-auto" />
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
