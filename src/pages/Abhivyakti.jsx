import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MemberCard from '../components/MemberCard';

gsap.registerPlugin(ScrollTrigger);

const Abhivyakti = () => {
  const headerRef = useRef(null);
  const tabContentRef = useRef(null);
  const [activeTab, setActiveTab] = useState('2026');

  // ─── Year-wise data ───
  const yearData = {
    '2026': {
      dates: 'March 26–28, 2026',
      status: 'live',
      tagline: 'Currently Live! 🔴',
      description: 'The flagship annual techno-cultural fest of BIT Patna returns bigger than ever! Three days of innovation, competitions, workshops, cultural performances, and networking — powered by IEEE Student Branch BIT Patna.',
      events: [
        { name: 'Hackathon 2026', desc: '36-hour coding marathon tackling real-world problem statements across AI, IoT, and Web3 domains.' },
        { name: 'RoboWars', desc: 'Head-to-head robot combat arena — design, build, and battle your bots.' },
        { name: 'Code Relay', desc: 'Team-based competitive coding relay combining speed, strategy, and algorithmic expertise.' },
        { name: 'UI/UX Design Challenge', desc: 'Redesign a real product interface within a time limit — judged on aesthetics, usability, and innovation.' },
        { name: 'Tech Talks & Panels', desc: 'Industry experts discuss emerging trends in AI, semiconductors, and startup ecosystems.' },
        { name: 'Cultural Night', desc: 'Live music performances, dance battles, and stand-up comedy to close the fest.' },
      ],
      team: [
        { name: "Pranjal Bhattacharya", role: "Chair", image: "", linkedin: "", email: "" },
        { name: "Somanath Mahto", role: "Vice Chair", image: "", linkedin: "", email: "" },
        { name: "Harishta Chaubey", role: "Secretary", image: "", linkedin: "", email: "" },
        { name: "Rajdeep Das", role: "Co Secretary", image: "", linkedin: "", email: "" },
        { name: "Aayush Arya", role: "Technical", image: "", linkedin: "", email: "" },
        { name: "Ronak Sharma", role: "Treasurer", image: "", linkedin: "", email: "" },
        { name: "Sahil Gurg", role: "Co Treasurer", image: "", linkedin: "", email: "" },
      ],
    },
    '2025': {
      dates: 'March 27–29, 2025',
      status: 'past',
      tagline: 'Successfully Concluded',
      description: 'Abhivyakti 2025 brought together students from across the region for a celebration of creativity meeting technology — featuring competitions, tech talks, hackathons, and cultural showcases.',
      events: [
        { name: 'Industry Conclave — AI Revolution in VLSI', desc: 'Featured talks by Western Digital, Intel, and ISRO professionals on AI applications in NAND memory, IC design, and surveillance.' },
        { name: 'Code Electro RUN', desc: 'A unique relay event — ECE teams competed in soldering relays while CSE teams tackled coding relays. 3-member teams emphasizing teamwork and speed.' },
        { name: 'Hunt and Hype', desc: 'Photo scavenger hunt challenging creativity, teamwork, and problem-solving abilities.' },
        { name: 'The Imitation Game (UI/UX)', desc: 'Competition testing UI/UX skills with design replication tasks.' },
        { name: 'Crack the Code to Career', desc: 'Webinar on DSA, problem-solving, and interview preparation.' },
        { name: 'LinkedIn Career Insights', desc: 'Session on internships, networking, and LinkedIn optimization.' },
      ],
      team: [
        { name: "Arnav Shivam", role: "Chair Person", image: "", linkedin: "", email: "" },
        { name: "Sneha Sharma", role: "Vice Chair Person", image: "", linkedin: "", email: "" },
        { name: "Asman Kumari", role: "Secretary", image: "", linkedin: "", email: "" },
        { name: "Syed Fahad Ahmed", role: "Treasurer", image: "", linkedin: "", email: "" },
        { name: "Pushkar Kumar", role: "Technical Coordinator", image: "", linkedin: "", email: "" },
        { name: "Meenakshi Sinha", role: "Design & Editing Coordinator", image: "", linkedin: "", email: "" },
      ],
    },
    '2024': {
      dates: '2024',
      status: 'past',
      tagline: 'Successfully Concluded',
      description: 'Abhivyakti 2024 featured a mix of technical workshops, expert talks, and hands-on competitions, reinforcing BIT Patna\'s commitment to practical learning.',
      events: [
        { name: 'Tech Talk — Revolutionising Storage', desc: 'Technical deep-dive on 3D NAND memory evolution and next-gen storage technologies.' },
        { name: 'Data Science Talk', desc: 'Comprehensive overview of data science roles, industry tools, and real-world applications.' },
        { name: 'ISRO Industrial Visit', desc: 'Visit to UR Rao Satellite Centre (URSC) Bangalore exploring satellite manufacturing and space technology.' },
        { name: 'Compiler Design Workshop', desc: 'Hands-on training building compilers using Lex and Yacc.' },
        { name: 'CAD Infrastructure Workshop', desc: '2-day workshop on CAD tools, OpenLane, and VLSI design flow.' },
        { name: 'Inauguration of Centre of Excellence (EDA)', desc: 'Launch of the Centre of Excellence in Electronics Design Automation at BIT Patna.' },
      ],
      team: [],
    },
    '2023': {
      dates: '2023',
      status: 'past',
      tagline: 'Successfully Concluded',
      description: 'Abhivyakti 2023 combined competitive events with community outreach, bringing a unique blend of technology and social responsibility.',
      events: [
        { name: 'Fun Fiesta 2023', desc: 'Techno-cultural extravaganza with multiple competition tracks and cultural performances.' },
        { name: 'Embedd-athon (TechLite 2.0)', desc: 'Embedded systems competition using Arduino — teams built working prototypes under time constraints.' },
        { name: 'Embedded System Workshop', desc: 'Hands-on Arduino training workshop covering sensors, actuators, and basic IoT.' },
        { name: 'IAAI Summit', desc: 'Industry-alumni interaction summit with live project showcase by student teams.' },
        { name: 'Workshop on Sensors & Applications', desc: '3-day hands-on workshop on sensors and embedded systems, co-organized with industry partners.' },
        { name: 'Among Us Real Life', desc: 'Gamified outdoor team event inspired by the popular game — blending strategy with campus exploration.' },
      ],
      team: [],
    },
    '2022': {
      dates: '2022',
      status: 'past',
      tagline: 'Successfully Concluded',
      description: 'Abhivyakti 2022 marked the revival of in-person events post-pandemic, focusing on IoT, embedded systems, and career development.',
      events: [
        { name: 'INNOVIA-22 (IoT Hackathon)', desc: 'IoT hackathon where teams built working prototypes solving real-world problems.' },
        { name: 'IEEE Day Celebration 2022', desc: 'Theme: "Leveraging Technology for a Better Tomorrow" — talks, workshops, and networking sessions.' },
        { name: 'Professional Development Training', desc: 'Session on communication skills, networking, and interview preparation.' },
        { name: 'VLSI Career Talk', desc: 'Industry talk on VLSI career pathways and opportunities in semiconductor design.' },
        { name: 'Cisco Industrial Visit', desc: 'Industry exposure at Cisco campus exploring networking and cloud infrastructure.' },
        { name: 'NGO Visit', desc: 'Social outreach and educational engagement with local communities.' },
      ],
      team: [],
    },
    '2017': {
      dates: 'November 3–5, 2017',
      status: 'past',
      tagline: 'Successfully Concluded',
      description: 'Abhivyakti \'17 was a landmark three-day technical fest organized by IEEE Student Branch BIT Mesra Patna Campus, featuring competitions in both technical and non-technical categories.',
      events: [
        { name: 'Pollution Awareness Challenge', desc: 'Participants created videos and photographs illustrating the causes and potential reductions of pollution.' },
        { name: 'Technical Paper Presentation', desc: 'Students presented research papers on "Internet of Things in Daily Lives" and other emerging technologies.' },
        { name: 'Robotics Competition', desc: 'Bot-building and obstacle-course challenge testing engineering fundamentals.' },
        { name: 'Coding Competition', desc: 'Algorithmic problem-solving contest across multiple rounds.' },
        { name: 'Quiz Competition', desc: 'Tech and general knowledge quiz testing breadth and depth of knowledge.' },
        { name: 'Cultural Events', desc: 'Talent shows including music, dance, and creative arts.' },
      ],
      team: [],
    },
  };

  const years = Object.keys(yearData);
  const currentData = yearData[activeTab];
  const isLive = currentData.status === 'live';

  useEffect(() => {
    const ctx = gsap.context(() => {
      const h1 = headerRef.current?.querySelector('.abhi-title');
      if (h1) {
        const text = h1.textContent;
        h1.innerHTML = text.replace(/\S+/g, '<span class="abhi-word inline-block">$&</span>');
        gsap.fromTo('.abhi-word',
          { y: 50, opacity: 0, rotateX: -45 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.7, stagger: 0.06, ease: 'power4.out', delay: 0.15 }
        );
      }
      gsap.fromTo('.abhi-desc',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.5 }
      );
    });
    return () => ctx.revert();
  }, []);

  // Animate tab content on switch
  useEffect(() => {
    if (tabContentRef.current) {
      gsap.fromTo(tabContentRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.06, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [activeTab]);

  const handleTabSwitch = (tab) => {
    if (tab === activeTab) return;
    if (tabContentRef.current) {
      gsap.to(tabContentRef.current, {
        opacity: 0, y: 10, duration: 0.2, ease: 'power2.in',
        onComplete: () => {
          setActiveTab(tab);
          gsap.to(tabContentRef.current, { opacity: 1, y: 0, duration: 0.1 });
        }
      });
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <main className="pt-24 md:pt-32 pb-24 px-4 md:px-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <header ref={headerRef} className="mb-12 md:mb-16">
        <h1 className="abhi-title text-4xl md:text-7xl font-bold tracking-[-0.02em] text-primary mb-6 uppercase leading-tight perspective-midrange">
          ABHIVYAKTI
        </h1>
        <p className="abhi-desc text-on-surface-variant text-base md:text-xl max-w-2xl font-light leading-relaxed opacity-0">
          The flagship annual techno-cultural fest of BIT Patna, powered by IEEE Student Branch — celebrating innovation, creativity, and community since 2014.
        </p>
      </header>

      {/* Tab Switcher — scrollable on mobile */}
      <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
        {years.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabSwitch(tab)}
            className={`relative px-6 py-2.5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 shrink-0 ${
              activeTab === tab
                ? 'bg-linear-to-r from-primary-container to-secondary-container text-on-surface shadow-[0_0_20px_rgba(60,215,255,0.15)]'
                : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-8 h-0.75 bg-tertiary rounded-full" />
            )}
            {yearData[tab].status === 'live' && tab !== activeTab && (
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div ref={tabContentRef}>
        {/* Year Info Banner */}
        <div className="mb-10 p-6 rounded-lg bg-surface-container-low/50 border border-outline-variant/10 flex items-center gap-4">
          <div className={`${isLive ? 'bg-red-500/20' : 'bg-tertiary/20'} p-3 rounded-xl flex items-center justify-center`}>
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1", color: isLive ? '#ef4444' : 'var(--color-tertiary-val)' }}>
              {isLive ? 'celebration' : 'history'}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-on-surface">
              Abhivyakti {activeTab}
            </h3>
            <p className="text-on-surface-variant text-sm">
              {currentData.dates} — {currentData.tagline}
            </p>
          </div>
          {isLive && (
            <div className="hidden md:flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-red-400 font-bold text-xs uppercase tracking-widest">Live Now</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-12 max-w-3xl">
          {currentData.description}
        </p>

        {/* Events Grid */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-2 uppercase tracking-tight">
            Events & Highlights
          </h2>
          <p className="text-on-surface-variant text-sm mb-8 font-light">
            Key events and activities from Abhivyakti {activeTab}.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentData.events.map((event, index) => (
              <div
                key={`${activeTab}-evt-${index}`}
                className="group p-6 rounded-lg bg-surface-container-low border border-outline-variant/10 hover:border-tertiary/30 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(60,215,255,0.15)] transition-all duration-500"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-tertiary/10 p-2 rounded-lg shrink-0 group-hover:bg-tertiary/20 transition-colors">
                    <span className="material-symbols-outlined text-tertiary text-lg">bolt</span>
                  </div>
                  <h4 className="text-on-surface font-semibold text-base leading-snug">{event.name}</h4>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Committee (if available) */}
        {currentData.team.length > 0 && (
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-2 uppercase tracking-tight">
              Organizing Committee
            </h2>
            <p className="text-on-surface-variant text-sm md:text-base mb-8 font-light">
              The team behind Abhivyakti {activeTab}.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {currentData.team.map((member, index) => (
                <div key={`${activeTab}-${index}`} className="w-[calc(50%-0.5rem)] md:w-[calc(25%-1.5rem)] min-w-40 max-w-xs shrink-0">
                  <MemberCard
                    name={member.name}
                    role={member.role}
                    image={member.image}
                    linkedin={member.linkedin}
                    email={member.email}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default Abhivyakti;
