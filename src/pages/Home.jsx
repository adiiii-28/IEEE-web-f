import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ── tiny counter helper ── */
const animateCounter = (el, target) => {
  const obj = { val: 0 };
  gsap.to(obj, {
    val: target,
    duration: 2,
    ease: 'power1.out',
    scrollTrigger: { trigger: el, start: 'top 90%' },
    onUpdate: () => { el.textContent = Math.ceil(obj.val) + '+'; },
  });
};

const Home = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ───── 1. HERO — split-text stagger ───── */
      const heroTitle = heroRef.current?.querySelector('.hero-title');
      if (heroTitle) {
        // Wrap each word in a span
        heroTitle.innerHTML = heroTitle.textContent.replace(/\S+/g, '<span class="hero-word inline-block">$&</span>');
        gsap.fromTo('.hero-word',
          { y: 80, opacity: 0, rotateX: -90 },
          { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.08, ease: 'power4.out', delay: 0.3 }
        );
      }
      // Hero gradient text
      gsap.fromTo('.hero-gradient',
        { y: 60, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'expo.out', delay: 0.7 }
      );
      // Hero badge
      gsap.fromTo('.hero-badge',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.15 }
      );
      // Hero paragraph
      gsap.fromTo('.hero-desc',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 1 }
      );
      // Hero buttons
      gsap.fromTo('.hero-btns > *',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out', delay: 1.2 }
      );

      /* ───── 2. FLOATING glass cards ───── */
      gsap.fromTo('.float-card-1',
        { y: 60, opacity: 0, rotate: -6 },
        { y: 0, opacity: 1, rotate: -3, duration: 1.2, ease: 'elastic.out(1, 0.6)', delay: 1.4 }
      );
      gsap.fromTo('.float-card-2',
        { y: 80, opacity: 0, rotate: 10 },
        { y: 0, opacity: 1, rotate: 6, duration: 1.2, ease: 'elastic.out(1, 0.6)', delay: 1.7 }
      );
      // Continuous floating
      gsap.to('.float-card-1', { y: -12, duration: 3, yoyo: true, repeat: -1, ease: 'sine.inOut' });
      gsap.to('.float-card-2', { y: 14, duration: 3.5, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 0.5 });
      // Hero ring parallax
      gsap.to('.hero-ring', {
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
        y: 120, scale: 1.15, rotate: 60,
      });

      /* ───── 3. SCROLL-REVEAL sections ───── */
      document.querySelectorAll('.scroll-reveal').forEach(el => {
        gsap.fromTo(el,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' }
          }
        );
      });

      /* ───── 4. STAGGER — vision/mission cards ───── */
      gsap.fromTo('.vm-card',
        { y: 80, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.2, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.vm-section', start: 'top 80%' }
        }
      );

      /* ───── 5. PARALLAX — about image ───── */
      gsap.to('.about-img', {
        scrollTrigger: { trigger: '.about-section', start: 'top bottom', end: 'bottom top', scrub: 1.5 },
        y: -50, scale: 1.06,
      });

      /* ───── 6. COUNTER animation — stats ───── */
      if (statsRef.current) {
        statsRef.current.querySelectorAll('.counter-val').forEach(el => {
          animateCounter(el, parseInt(el.dataset.target, 10));
        });
      }
      // Stat items stagger
      gsap.fromTo('.stat-box',
        { y: 50, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, stagger: 0.12, duration: 0.8, ease: 'back.out(1.7)',
          scrollTrigger: { trigger: statsRef.current, start: 'top 85%' }
        }
      );

      /* ───── 7. EVENT CARDS — slide in + stagger ───── */
      gsap.fromTo('.event-card',
        { opacity: 0, x: 80, rotateY: -8 },
        { opacity: 1, x: 0, rotateY: 0, stagger: 0.2, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.events-scroll', start: 'top 85%' }
        }
      );

      /* ───── 8. GALLERY — scale pop stagger ───── */
      gsap.fromTo('.gallery-item',
        { opacity: 0, scale: 0.8, y: 40 },
        { opacity: 1, scale: 1, y: 0, stagger: 0.12, duration: 1, ease: 'elastic.out(1, 0.75)',
          scrollTrigger: { trigger: '.gallery-grid', start: 'top 80%' }
        }
      );

      /* ───── 9. COUNSELLOR section ───── */
      gsap.fromTo('.counsellor-text > *',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.counsellor-section', start: 'top 75%' }
        }
      );
      gsap.fromTo('.counsellor-img',
        { x: 60, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: '.counsellor-section', start: 'top 75%' }
        }
      );

      /* ───── 10. CTA section ───── */
      gsap.fromTo('.cta-content > *',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.cta-section', start: 'top 80%' }
        }
      );

      /* ───── 11. SECTION TITLES scroll reveal ───── */
      document.querySelectorAll('.section-heading').forEach(el => {
        gsap.fromTo(el,
          { y: 30, opacity: 0, clipPath: 'inset(0 100% 0 0)' },
          { y: 0, opacity: 1, clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 90%' }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-background text-on-surface font-body selection:bg-tertiary selection:text-on-tertiary overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract Background Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-125 h-125 bg-[radial-gradient(circle_at_50%_50%,var(--color-secondary-container-val)_0%,transparent_70%)] opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-150 h-150 bg-[radial-gradient(circle_at_50%_50%,var(--color-tertiary-container-val)_0%,transparent_70%)] opacity-20 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          <div className="lg:col-span-7">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/15 mb-6 opacity-0">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              <span className="text-[10px] font-medium tracking-[0.2em] text-on-surface-variant uppercase">Innovate. Educate. Empower.</span>
            </div>
            
            <h1 className="text-[2.5rem] md:text-7xl font-bold font-headline tracking-tighter leading-[1.1] mb-2 text-primary perspective-midrange">
              <span className="hero-title block">IEEE Student Branch</span>
              <span className="hero-gradient block bg-clip-text text-transparent bg-linear-to-r from-primary via-secondary to-tertiary opacity-0">BIT Patna</span>
            </h1>
            
            <p className="hero-desc text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed font-light opacity-0 mt-6">
              A canvas under which bright young minds, with diverse interests, get a common dream to take on the world with their technical skills, is how we would define the BIT PATNA IEEE Student Branch. The IEEE, Inc., USA operates through student branches spread all across the world. IEEE Student Chapter, BIT Patna was formed on 23 November 2008 with active cooperation from students and the effective guidance of faculty advisors. The chapter provides a local forum for members to meet and exchange views on technical, educational and professional interests.
            </p>
            
            <div className="hero-btns flex flex-wrap gap-4">
              <a href="https://www.ieee.org/membership/join" target="_blank" rel="noopener noreferrer" className="opacity-0 bg-linear-to-r from-primary to-secondary text-on-primary px-10 py-4 rounded-xl font-bold tracking-tight hover:shadow-[0_0_30px_rgba(148,204,255,0.3)] hover:scale-105 active:scale-95 transition-all">
                Explore Membership
              </a>
              <Link to="/events" className="opacity-0 px-10 py-4 rounded-xl border border-outline-variant/20 font-bold tracking-tight text-on-surface hover:bg-surface-container-low hover:scale-105 active:scale-95 transition-all">
                View Events
              </Link>
            </div>
          </div>
          
          {/* Floating Glass Cards */}
          <div className="lg:col-span-5 relative h-125 hidden lg:block">
            <div className="float-card-1 absolute top-10 right-0 glass-panel p-6 rounded-lg border border-outline-variant/10 w-64 translate-x-4 opacity-0 hover:rotate-0 transition-transform duration-500 shadow-2xl cursor-pointer hover:scale-105 hover:shadow-[0_0_30px_rgba(60,215,255,0.15)]">
              <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary">event</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-tertiary font-bold uppercase tracking-widest">Next Event</p>
                    <p className="text-sm font-bold">Tech-Nexus 2024</p>
                  </div>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed font-light">The flagship technical symposium of IEEE BIT Patna.</p>
              </div>
            </div>
            
            <div className="float-card-2 absolute bottom-20 left-0 glass-panel p-6 rounded-lg border border-outline-variant/10 w-72 -translate-x-12 opacity-0 hover:rotate-0 transition-transform duration-500 shadow-2xl cursor-pointer hover:scale-105 hover:shadow-[0_0_30px_rgba(148,204,255,0.15)]">
              <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">workspace_premium</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">Recent Win</p>
                    <p className="text-sm font-bold">Best Student Branch</p>
                  </div>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed font-light">Recognized as the most active branch in Bihar region for 2023.</p>
              </div>
            </div>
            
            {/* Abstract Visual — parallax ring */}
            <div className="hero-ring absolute inset-0 flex items-center justify-center -z-10 opacity-30">
              <div className="w-80 h-80 rounded-full border-32 border-primary-container"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Vision & Mission Section */}
      <section className="py-24 bg-surface vm-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="vm-card group relative overflow-hidden glass-panel p-12 rounded-lg border border-outline-variant/10 hover:border-tertiary/30 hover:-translate-y-2 transition-all duration-500">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-tertiary/5 rounded-full blur-3xl group-hover:bg-tertiary/10 transition-all"></div>
              <div className="w-16 h-16 rounded-2xl bg-tertiary-container flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-tertiary">visibility</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 font-headline tracking-tight uppercase">VISION</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed font-light">
                To promote global prosperity by stimulating technology innovation, enabling members' careers, and promoting the global community. IEEE is, and remains, firmly committed to diversity, equity, and inclusion.
              </p>
            </div>
            {/* Mission */}
            <div className="vm-card group relative overflow-hidden glass-panel p-12 rounded-lg border border-outline-variant/10 hover:border-secondary/30 hover:-translate-y-2 transition-all duration-500">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-all"></div>
              <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-secondary">rocket_launch</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 font-headline tracking-tight uppercase">MISSION</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed font-light">
                The IEEE encourages the engineering process of producing, developing, integrating, sharing, and using knowledge in electro and information technologies and sciences for the benefit of humanity and the profession.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. About IEEE Section */}
      <section className="about-section py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="scroll-reveal">
            <h3 className="section-heading text-4xl md:text-5xl font-bold font-headline tracking-tight mb-8 uppercase">ABOUT IEEE</h3>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-6 font-light">
              IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed font-light">
              IEEE and its members inspire a global community to innovate for a better tomorrow through its more than 4,23,000 members in over 160 countries, and its highly cited publications, conferences, technology standards, and professional and educational activities. IEEE is the trusted "voice" for engineering, computing, and technology information around the globe.
            </p>
          </div>
          <div className="relative group scroll-reveal">
            <div className="absolute -inset-1 bg-linear-to-r from-tertiary to-secondary rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="about-img relative aspect-video rounded-lg overflow-hidden bg-surface-container-low">
              <img className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Tech" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPOIob7pMW6U0iwkLu6EXnmYqNdme4d6s1rO9f83pmSxWiKVdYZwdnQ9tFDnD2Y9MdaX2Xf4rXzF_ecqPRq6EjuzhNdMeRd4T0nrnKouG8bcwDwhnkLQS9sjZS7ur2LM1wfXIddGCI2UJbLrK5fpt6yRBkoqfmuCtP_3AEcUfnBsOqagb8EFR5lFOSS4QebyRIcw8ThgMeVxVziv_Q_OoG87k2Zud0qs4M75xUDO0Fmp7Pcg83bJQgssFqEm3gnyARjcgNqSoNUSEA"/>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Stats Section — counter animation */}
      <section ref={statsRef} className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="stat-box group hover:-translate-y-1 transition-transform cursor-default">
              <p className="counter-val text-5xl font-bold font-headline text-on-surface mb-2" data-target="150">0+</p>
              <p className="text-xs font-bold tracking-[0.2em] text-on-surface-variant uppercase group-hover:text-tertiary transition-colors">Active Members</p>
            </div>
            <div className="stat-box group hover:-translate-y-1 transition-transform cursor-default">
              <p className="counter-val text-5xl font-bold font-headline text-tertiary mb-2" data-target="45">0+</p>
              <p className="text-xs font-bold tracking-[0.2em] text-on-surface-variant uppercase group-hover:text-tertiary transition-colors">Events Yearly</p>
            </div>
            <div className="stat-box group hover:-translate-y-1 transition-transform cursor-default">
              <p className="counter-val text-5xl font-bold font-headline text-on-surface mb-2" data-target="12">0+</p>
              <p className="text-xs font-bold tracking-[0.2em] text-on-surface-variant uppercase group-hover:text-secondary transition-colors">Projects Completed</p>
            </div>
            <div className="stat-box group hover:-translate-y-1 transition-transform cursor-default">
              <p className="counter-val text-5xl font-bold font-headline text-secondary mb-2" data-target="20">0+</p>
              <p className="text-xs font-bold tracking-[0.2em] text-on-surface-variant uppercase group-hover:text-secondary transition-colors">Global Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Events Preview */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end">
          <div>
            <h2 className="section-heading text-[10px] font-bold tracking-[0.3em] text-secondary uppercase mb-4">Latest Happenings</h2>
            <h3 className="section-heading text-4xl font-bold font-headline tracking-tight text-on-surface">Upcoming Events</h3>
          </div>
          <Link to="/events" className="text-secondary font-bold text-sm flex items-center gap-2 hover:gap-4 transition-all">
            View All Events <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
        <div className="events-scroll flex overflow-x-auto gap-8 px-6 pb-12 no-scrollbar scroll-smooth">
          {/* Event Card 1 */}
          <div className="event-card min-w-87.5 md:min-w-100 bg-surface-container-low rounded-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_10px_40px_-10px_rgba(60,215,255,0.2)]">
            <div className="h-56 relative overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="robo soccer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsQm5TPTvvU6upcT6a9lk_4IpJWp7d_H9r6R5l2WZeEH5wvwHuBMuhcr71pWgYi2Fqnrdk0cMIaLA2fBTMnRabmENqzPM-yG6rffCmbPe1m4gtmpHZeQts_sdQDQLoh3YJU8Qtd3XRE-nfq-fh_FqMbFIIWN4bO-jdorTjYxCjoL11AdpdGAt5iG5sdasZbtd_38qYLpLHzK7OK9YIYruaL_Xp4JVCME6sUG0G4Jye82_JZ8H6DVQ1EL9c8j9sXZlvf5bdtQaDqAW3"/>
              <div className="absolute top-4 left-4 bg-secondary text-on-secondary px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">Competition</div>
            </div>
            <div className="p-8">
              <div className="flex gap-4 mb-4 text-xs text-on-surface-variant font-medium">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">calendar_today</span> March 2026</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Sports Ground</span>
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-secondary transition-colors text-on-surface">Robo Soccer</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Autonomous soccer robots equipped with advanced AI competing in thrilling matches. A showcase of robotics and machine learning.</p>
              <button className="text-sm font-bold border-b border-outline-variant/30 pb-1 hover:border-secondary transition-all text-on-surface">Learn More</button>
            </div>
          </div>
          
          {/* Event Card 2 */}
          <div className="event-card min-w-87.5 md:min-w-100 bg-surface-container-low rounded-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_10px_40px_-10px_rgba(148,204,255,0.2)]">
            <div className="h-56 relative overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="pcb workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpbQZjY9ZPaJPn4Um5rwXuBhUcPqxyWgFLHxTQze6XoieUEceGIPF8AwLDbqmMH2tp-k-26crekFY2giXfWxr_RT6JiJlyFlpGd6ucdu72Dn-tZzoOSCTn750_dCzpilSZxNnCYyYiU-Q-t88h65GLXUlRG_184rx1tYw1mIG-mU8d-URGeQ-CrGmtLx5SjjdYZK_X6k_XJlKPOj8e6qQJnNI4FCNsGps5IWCAwA9rBYF4gHeLHWPUXrTkaF63sm5pfIjlBE2B6K84"/>
              <div className="absolute top-4 left-4 bg-tertiary text-on-tertiary px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">Workshop</div>
            </div>
            <div className="p-8">
              <div className="flex gap-4 mb-4 text-xs text-on-surface-variant font-medium">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">calendar_today</span> March 2026</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Electronics Lab</span>
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-tertiary transition-colors text-on-surface">PCB Workshop</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Learn PCB design fundamentals from industry experts. Hands-on training in circuit design, prototyping, and manufacturing.</p>
              <button className="text-sm font-bold border-b border-outline-variant/30 pb-1 hover:border-tertiary transition-all text-on-surface">Learn More</button>
            </div>
          </div>
          
          {/* Event Card 3 */}
          <div className="event-card min-w-87.5 md:min-w-100 bg-surface-container-low rounded-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_10px_40px_-10px_rgba(60,215,255,0.2)]">
            <div className="h-56 relative overflow-hidden">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="linux workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK4CSVyyLluwUHDR-Yw0hshdQ4jE65TFQYPqoDJsPDA1UvmKlu5Jl7zVvdS7aTkG5Ox24HnCLfzZMw-JkB3LVw9x8k-AESzQo4NxW7ggF9zKnXkF5zsrIzLVZI9nW_Wszjfqf7GoDC_HIZINuTNrdT7eq5FkpyiTldApXmWvyoY2IthCJIz1NQaGZ6XNr3XriJrdcFW7CtS0haniVIgwN_5gzxBojfeCXjOMR3fF567pbBEVApUYpC2X2jP-ACtY9p6LWY8fLmEhB5"/>
              <div className="absolute top-4 left-4 bg-tertiary text-on-tertiary px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest">Workshop</div>
            </div>
            <div className="p-8">
              <div className="flex gap-4 mb-4 text-xs text-on-surface-variant font-medium">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">calendar_today</span> March 2026</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">location_on</span> Computer Lab</span>
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-tertiary transition-colors text-on-surface">Linux Workshop with ML</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Master Linux fundamentals and dive into Machine Learning applications. Perfect for aspiring data scientists and engineers.</p>
              <button className="text-sm font-bold border-b border-outline-variant/30 pb-1 hover:border-tertiary transition-all text-on-surface">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Gallery Preview (Bento Grid) */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="section-heading text-[10px] font-bold tracking-[0.3em] text-tertiary uppercase mb-4">Visual Journey</h2>
          <h3 className="section-heading text-4xl font-bold font-headline tracking-tight text-on-surface">Life at IEEE BITP</h3>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:auto-rows-[250px] gallery-grid">
          <div className="gallery-item col-span-2 md:row-span-2 rounded-lg overflow-hidden relative group cursor-pointer">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="gallery 1" src="https://i.ibb.co/m5dgppGY/poster.jpg"/>
            <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <p className="text-sm font-bold tracking-wider text-on-surface">Annual Technical Summit</p>
            </div>
          </div>
          <div className="gallery-item col-span-1 rounded-lg overflow-hidden relative group cursor-pointer">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="gallery 2" src="https://i.ibb.co/7JsGrDDw/home2.jpg"/>
          </div>
          <div className="gallery-item col-span-1 rounded-lg overflow-hidden relative group cursor-pointer">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="gallery 3" src="https://i.ibb.co/cSp8nJK8/home1.jpg"/>
          </div>
          <div className="gallery-item col-span-2 rounded-lg overflow-hidden relative group cursor-pointer">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="gallery 4" src="https://i.ibb.co/HZWG6m9/home3.jpg"/>
            <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <p className="text-sm font-bold tracking-wider text-on-surface">Student Membership Drive</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Message from Counsellor */}
      <section className="counsellor-section py-32 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="section-heading text-4xl font-bold font-headline tracking-tight mb-12 uppercase text-center">MESSAGE FROM COUNSELLOR</h3>
          <div className="glass-panel p-10 md:p-16 rounded-lg border border-outline-variant/10 relative">
            <span className="material-symbols-outlined text-8xl text-tertiary/10 absolute top-10 left-8 hidden md:block">format_quote</span>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 relative z-10">
              
              {/* Text Content (Left side) */}
              <div className="counsellor-text md:col-span-7 lg:col-span-8 space-y-6 md:pl-20">
                <p className="text-lg md:text-xl font-light italic leading-relaxed text-on-surface-variant mt-1.5">
                  As the branch counsellor of IEEE Student Branch BIT PATNA, I welcome you to IEEE family. IEEE is the world's largest technical community dedicated to advancing technology for the benefit of mankind.
                </p>
                <p className="text-lg md:text-xl font-light italic leading-relaxed text-on-surface-variant">
                  IEEE Student Branch promise to promote its preeminence among students in associated fields and ensure a smooth transition into an able and qualified engineer of tomorrow.
                </p>
                <p className="text-lg md:text-xl font-light italic leading-relaxed text-on-surface-variant">
                  The student branch of BIT PATNA aims to organize various events that helps to enhance the overall growth and development of our students and we shall continue to work for the same. I wish all the IEEE members great success for their future endeavors.
                </p>
              </div>

              {/* Image & Title (Right side) */}
              <div className="counsellor-img md:col-span-5 lg:col-span-4 flex flex-col pt-8 md:pt-0 xl:pr-8">
                <div className="w-full aspect-4/5 overflow-hidden bg-surface-container-highest relative group shadow-lg border border-outline-variant/10 hover:shadow-[0_0_30px_rgba(60,215,255,0.15)] transition-shadow duration-500">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Dr. Mayank Singh" src="/mayank-sir.jpeg"/>
                  <div className="absolute inset-0 bg-linear-to-tr from-tertiary/10 to-transparent group-hover:from-tertiary/20 transition-colors duration-500 z-10"></div>
                </div>
                <div className="mt-6">
                  <h5 className="text-2xl font-bold text-on-surface">Dr. Mayank Singh</h5>
                  <p className="text-tertiary text-sm font-bold uppercase tracking-widest mt-2 leading-relaxed">Assistant Professor <br/> IEEE SB Counsellor</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="cta-section py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary-container/30"></div>
        <div className="cta-content max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter mb-8 uppercase text-on-surface">Ready to engineer the future?</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-12">
            Join IEEE today and gain access to unparalleled resources, global networking, and opportunities to lead.
          </p>
          <a href="https://www.ieee.org/membership/join" target="_blank" rel="noopener noreferrer" className="inline-block bg-linear-to-r from-primary to-secondary text-on-primary px-12 py-5 rounded-xl font-bold text-lg hover:shadow-[0_0_50px_rgba(148,204,255,0.4)] hover:scale-105 active:scale-95 transition-all">
            Become a Member Now
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;
