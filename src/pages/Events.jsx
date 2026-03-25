import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import EventCard from '../components/EventCard';

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const heroRef = useRef(null);

  const eventsList = [
    {
      title: "ABHIVYAKTI 2026",
      description: "The flagship annual techno-cultural fest of BIT Patna returns bigger than ever! Three days of innovation, competitions, workshops, cultural performances, and networking — powered by IEEE Student Branch BIT Patna.",
      date: "March 26–28, 2026",
      status: "live",
      link: "/abhivyakti"
    },
    {
      title: "SMART INDIA HACKATHON 2025",
      description: "IEEE BIT Patna Student Branch actively participated in SIH 2025, with multiple teams tackling real-world problem statements from government ministries and industry partners. A 36-hour sprint of innovation and teamwork.",
      date: "2025",
      status: "past"
    },
    {
      title: "ABHIVYAKTI 2025",
      description: "The annual techno-cultural fest brought together students from across the region for competitions, tech talks, hackathons, and cultural showcases — a celebration of creativity meeting technology.",
      date: "2025",
      status: "past",
      link: "/abhivyakti"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroH1 = heroRef.current?.querySelector('.events-hero-title');
      if (heroH1) {
        heroH1.innerHTML = heroH1.textContent.replace(/\S+/g, '<span class="ev-word inline-block">$&</span>');
        gsap.fromTo('.ev-word',
          { y: 60, opacity: 0, rotateX: -60 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.8, stagger: 0.06, ease: 'power4.out', delay: 0.2 }
        );
      }
      gsap.fromTo('.events-hero-desc',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.6 }
      );

      gsap.fromTo('.timeline-line', { scaleY: 0 }, {
        scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: '.timeline-section', start: 'top 80%', end: 'bottom 20%', scrub: 1 }
      });

      gsap.fromTo('.newsletter-section > div > *',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.newsletter-section', start: 'top 80%' }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="pt-24 pb-20">
      {/* Hero Section */}
      <section ref={heroRef} className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_50%_0%,_var(--color-secondary-container-val)_0%,_transparent_70%)] opacity-30 -z-10 pointer-events-none"></div>
        <h1 className="events-hero-title text-[3.5rem] leading-[1.1] md:text-7xl font-bold tracking-tighter text-primary mb-6 uppercase perspective-[800px]">EVENTS</h1>
        <p className="events-hero-desc text-on-surface-variant max-w-2xl mx-auto text-lg mb-12 opacity-0">Witness the convergence of technology and creativity. From high-stakes hackathons to insightful workshops, explore our legacy of engineering excellence.</p>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section max-w-7xl mx-auto px-6 py-12 relative">
        <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-tertiary via-secondary/20 to-transparent hidden md:block origin-top" style={{ transformOrigin: 'top center' }}></div>
        
        <div className="space-y-24">
          {eventsList.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              index={index}
              date={event.date}
              status={event.status}
              link={event.link}
            />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section mt-32 bg-surface-container-low py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-6">Stay Ahead of the Curve</h2>
          <p className="text-on-surface-variant mb-10 text-lg">Get notified about upcoming hackathons, tech talks, and exclusive student opportunities directly in your inbox.</p>
          <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input className="flex-grow bg-surface-container-highest border-0 rounded-xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-tertiary transition-all outline-none" placeholder="Your institutional email" type="email"/>
            <button className="bg-primary text-on-primary font-bold px-8 py-4 rounded-xl hover:scale-105 active:scale-95 transition-all">Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;
