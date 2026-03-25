import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Abhivyakti.css';

gsap.registerPlugin(ScrollTrigger);

const Abhivyakti = () => {
  const pageRef = useRef(null);
  const [activeTab, setActiveTab] = useState('2026');

  const yearData = {
    '2026': {
      dates: 'March 26-28, 2026',
      status: 'live',
      tagline: 'Currently Live',
      description:
        'The flagship annual techno-cultural fest of BIT Patna returns bigger than ever. Three days of innovation, competitions, workshops, cultural performances, and networking powered by IEEE Student Branch BIT Patna.',
      events: [
        { name: 'Robo Soccer', desc: 'Autonomous soccer robots equipped with advanced AI competing in thrilling matches.' },
        { name: 'PCB Workshop', desc: 'Learn PCB design fundamentals from industry experts. Hands-on training in circuit design and prototyping.' },
        { name: 'Technical Quiz', desc: 'Fast-paced quiz competition testing knowledge across electronics, programming, and emerging technologies.' },
        { name: 'Mechatronics Systems Workshop', desc: 'Hands-on integration of mechanical, electrical, and control systems in real-world applications.' },
        { name: 'Paper Presentation', desc: 'Present original research papers on innovative technical topics and emerging domains.' },
        { name: 'Linux Workshop with Machine Learning', desc: 'Master Linux fundamentals and dive into Machine Learning applications and data science.' },
        { name: 'Start Up Talk', desc: 'Entrepreneurs and startup founders share insights on building tech ventures and scaling products.' },
        { name: 'Basic Electronics Workshop', desc: 'Foundation workshop covering circuit fundamentals, component identification, and practical soldering.' },
        { name: 'E-Sports (BGMI)', desc: 'Competitive BGMI tournament with exciting prizes and intense team-based gameplay.' },
        { name: 'E-Sports (Among Us)', desc: 'Strategy-based multiplayer competition testing communication and deduction skills.' },
        { name: 'E-Sports (Pokémon Go)', desc: 'Location-based gaming competition combining outdoor adventure with gaming excitement.' },
      ],
      team: [
        { name: 'Pranjal Bhattacharya', role: 'Chair' },
        { name: 'Somanath Mahto', role: 'Vice Chair' },
        { name: 'Harishta Chaubey', role: 'Secretary' },
        { name: 'Rajdeep Das', role: 'Co Secretary' },
        { name: 'Aayush Arya', role: 'Technical' },
        { name: 'Ronak Sharma', role: 'Treasurer' },
        { name: 'Sahil Gurg', role: 'Co Treasurer' },
      ],
    },
    '2025': {
      dates: 'March 27-29, 2025',
      status: 'past',
      tagline: 'Successfully Concluded',
      description:
        'Abhivyakti 2025 brought together students from across the region for a celebration of creativity meeting technology featuring competitions, tech talks, hackathons, and cultural showcases.',
      events: [
        { name: 'Industry Conclave: AI Revolution in VLSI', desc: 'Talks by industry professionals on AI applications in NAND memory, IC design, and surveillance.' },
        { name: 'Code Electro RUN', desc: 'Relay event where ECE teams competed in soldering while CSE teams tackled coding relays.' },
        { name: 'Hunt and Hype', desc: 'Photo scavenger hunt challenging creativity, teamwork, and problem-solving.' },
        { name: 'The Imitation Game (UI/UX)', desc: 'Competition testing UI/UX skills with timed design replication tasks.' },
      ],
      team: [
        { name: 'Arnav Shivam', role: 'Chair Person' },
        { name: 'Sneha Sharma', role: 'Vice Chair Person' },
        { name: 'Asman Kumari', role: 'Secretary' },
        { name: 'Syed Fahad Ahmed', role: 'Treasurer' },
      ],
    },
    '2024': {
      dates: '2024',
      status: 'past',
      tagline: 'Successfully Concluded',
      description:
        'Abhivyakti 2024 featured technical workshops, expert talks, and hands-on competitions reinforcing practical learning.',
      events: [
        { name: 'Tech Talk: Revolutionising Storage', desc: 'Deep dive on 3D NAND memory evolution and next-gen storage technologies.' },
        { name: 'Data Science Talk', desc: 'Overview of data science roles, industry tools, and real-world applications.' },
        { name: 'ISRO Industrial Visit', desc: 'Visit to UR Rao Satellite Centre exploring satellite manufacturing and space technology.' },
      ],
      team: [],
    },
    '2023': {
      dates: '2023',
      status: 'past',
      tagline: 'Successfully Concluded',
      description:
        'Abhivyakti 2023 combined competitive events with community outreach, blending technology and social responsibility.',
      events: [
        { name: 'Fun Fiesta 2023', desc: 'Techno-cultural event with competitions and cultural performances.' },
        { name: 'Embedd-athon', desc: 'Embedded systems competition using Arduino where teams built prototypes under time constraints.' },
        { name: 'IAAI Summit', desc: 'Industry-alumni interaction summit with student project showcase.' },
      ],
      team: [],
    },
    '2022': {
      dates: '2022',
      status: 'past',
      tagline: 'Successfully Concluded',
      description:
        'Abhivyakti 2022 marked the revival of in-person events post-pandemic with focus on IoT and career growth.',
      events: [
        { name: 'INNOVIA-22 (IoT Hackathon)', desc: 'Teams built working IoT prototypes solving real-world problems.' },
        { name: 'IEEE Day Celebration', desc: 'Talks, workshops, and networking under technology-for-impact theme.' },
        { name: 'VLSI Career Talk', desc: 'Industry session on VLSI pathways and opportunities.' },
      ],
      team: [],
    },
    '2017': {
      dates: 'November 3-5, 2017',
      status: 'past',
      tagline: 'Successfully Concluded',
      description:
        'Abhivyakti 2017 was a landmark three-day technical fest featuring both technical and non-technical categories.',
      events: [
        { name: 'Technical Paper Presentation', desc: 'Students presented research papers on IoT and other emerging technologies.' },
        { name: 'Robotics Competition', desc: 'Bot-building and obstacle challenge testing engineering fundamentals.' },
        { name: 'Coding Competition', desc: 'Algorithmic problem-solving contest across multiple rounds.' },
      ],
      team: [],
    },
  };

  const years = Object.keys(yearData).sort((a, b) => parseInt(b) - parseInt(a));
  const currentData = yearData[activeTab];
  const isTronYear = activeTab === '2026';

  const eventTracks = [
    {
      name: 'ROBO SOCCER ARENA',
      desc: 'Autonomous robots competing in real-time soccer matches powered by neural networks.',
      code: 'TRK-01',
    },
    {
      name: 'CIRCUIT FORGE LAB',
      desc: 'PCB design and manufacturing workshop with guided soldering and prototyping sessions.',
      code: 'TRK-02',
    },
    {
      name: 'TECH TRIVIA NEXUS',
      desc: 'High-speed technical quiz testing core knowledge across electronics and programming.',
      code: 'TRK-03',
    },
    {
      name: 'MECHA-SYSTEMS CORE',
      desc: 'Hands-on mechatronics workshop integrating mechanical, electrical, and control logic.',
      code: 'TRK-04',
    },
    {
      name: 'RESEARCH TRANSMISSION',
      desc: 'Platform for presenting technical papers on emerging innovations and research breakthroughs.',
      code: 'TRK-05',
    },
    {
      name: 'NEURAL COMMAND STATION',
      desc: 'Linux training and ML masterclass exploring data science and artificial intelligence paradigms.',
      code: 'TRK-06',
    },
    {
      name: 'STARTUP COLLECTIVE',
      desc: 'Networking sessions with tech entrepreneurs, founders, and venture leaders.',
      code: 'TRK-07',
    },
    {
      name: 'ELECTRON WORKSHOP',
      desc: 'Foundational electronics training covering circuits, components, and hands-on projects.',
      code: 'TRK-08',
    },
    {
      name: 'DIGI-COMBAT ZONE',
      desc: 'Competitive gaming arena featuring BGMI tournaments with live streaming and prizes.',
      code: 'TRK-09',
    },
    {
      name: 'STRATEGY SPHERE',
      desc: 'Among Us competitive matches testing logic, deduction, and team communication.',
      code: 'TRK-10',
    },
    {
      name: 'REALITY QUEST',
      desc: 'Pokémon Go location-based gaming competition merging outdoor exploration with champions.',
      code: 'TRK-11',
    },
  ];

  const commandCrew = [
    { name: 'Pranjal Bhattacharya', role: 'Chair' },
    { name: 'Somanath Mahto', role: 'Vice Chair' },
    { name: 'Harishta Chaubey', role: 'Secretary' },
    { name: 'Rajdeep Das', role: 'Co Secretary' },
    { name: 'Aayush Arya', role: 'Technical' },
    { name: 'Ronak Sharma', role: 'Treasurer' },
    { name: 'Sahil Gurg', role: 'Co Treasurer' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.tron-reveal',
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, stagger: 0.1, ease: 'power3.out' }
      );

      gsap.to('.tron-pulse', {
        boxShadow: '0 0 45px rgba(0, 247, 255, 0.55)',
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });

    return () => ctx.revert();
  }, [isTronYear]);

  return (
    <main ref={pageRef} className={`${isTronYear ? 'tron-abhi' : 'bg-background'} pt-24 md:pt-32 pb-24 overflow-hidden relative`}>
      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 flex items-center gap-2 overflow-x-auto pb-2">
          {years.map((year) => (
            <button
              key={year}
              type="button"
              onClick={() => setActiveTab(year)}
              className={`abhi-tab ${activeTab === year ? (isTronYear ? 'abhi-tab-active-tron' : 'abhi-tab-active-normal') : 'abhi-tab-inactive'}`}
            >
              {year}
            </button>
          ))}
        </div>

        {isTronYear ? (
          <>
        <div className="tron-reveal inline-flex items-center gap-3 rounded-full border border-cyan-300/60 bg-cyan-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200">
          <span className="h-2 w-2 rounded-full bg-cyan-300 tron-pulse" />
          Live Transmission
        </div>

        <header className="mt-6 tron-reveal">
          <p className="text-cyan-100/80 text-sm tracking-[0.28em] uppercase">{currentData.dates} | BIT Patna</p>
          <h1 className="mt-3 text-5xl md:text-7xl font-black uppercase tracking-[0.06em] tron-title">
            Abhivyakti {activeTab}
          </h1>
          <p className="mt-6 max-w-3xl text-base md:text-lg text-cyan-50/80 leading-relaxed">
            Enter the TRON Ares circuit. {currentData.description}
          </p>
        </header>

        <div className="tron-reveal mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            ['03', 'DAYS'],
            ['11', 'EVENTS'],
            ['∞', 'INTENSITY'],
            ['1', 'FEST'],
          ].map(([value, label]) => (
            <div key={label} className="tron-stat">
              <p className="tron-stat-value">{value}</p>
              <p className="tron-stat-label">{label}</p>
            </div>
          ))}
        </div>

        <section className="mt-14 tron-reveal">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.16em] text-cyan-100">Event Tracks</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {eventTracks.map((event) => (
              <article key={event.code} className="tron-card">
                <p className="tron-card-code">{event.code}</p>
                <h3 className="tron-card-title">{event.name}</h3>
                <p className="tron-card-desc">{event.desc}</p>
              </article>
            ))}
          </div>
        </section>
      <section className="mx-auto max-w-6xl px-4 md:px-6 mt-16 md:mt-20 tron-reveal">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.14em] text-cyan-100">Command Crew</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {commandCrew.map((member) => (
            <article key={member.name} className="tron-crew-card">
              <p className="tron-crew-role">{member.role}</p>
              <h3 className="tron-crew-name">{member.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6 mt-14 tron-reveal">
        <div className="tron-ticket-panel">
          <p className="text-cyan-300 text-xs uppercase tracking-[0.28em]">Transmission Endpoints</p>
          <h2 className="mt-2 text-2xl md:text-4xl font-bold uppercase tracking-[0.12em] text-cyan-100">
            Register. Compete. Illuminate.
          </h2>
          <p className="mt-4 max-w-2xl text-cyan-50/75">
            Limited arena slots per track. Team registration closes when each bracket reaches capacity.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScZ9vqyVfSn0KqixIW3PFiECYP9bkn8a9Z9Q0KowMmhvak_EQ/viewform" target="_blank" rel="noopener noreferrer" className="tron-btn tron-btn-primary inline-block">Register Now</a>
            <a href="https://linktr.ee/Abhivyakti_2k26" target="_blank" rel="noopener noreferrer" className="tron-btn tron-btn-secondary inline-block">Download Rulebook</a>
          </div>
        </div>
      </section>
          </>
        ) : (
          <div className="pb-4">
            <header className="mb-8">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-primary uppercase">Abhivyakti {activeTab}</h1>
              <p className="mt-4 text-on-surface-variant max-w-3xl leading-relaxed">{currentData.dates} - {currentData.tagline}</p>
              <p className="mt-3 text-on-surface-variant max-w-3xl leading-relaxed">{currentData.description}</p>
            </header>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-on-surface mb-4 uppercase">Events and Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentData.events.map((event, idx) => (
                  <article key={`${activeTab}-${idx}`} className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/20">
                    <h3 className="font-semibold text-on-surface">{event.name}</h3>
                    <p className="mt-2 text-sm text-on-surface-variant leading-relaxed">{event.desc}</p>
                  </article>
                ))}
              </div>
            </section>

            {currentData.team.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-on-surface mb-4 uppercase">Organizing Committee</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentData.team.map((member) => (
                    <article key={member.name} className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/20">
                      <p className="text-xs uppercase tracking-[0.18em] text-on-surface-variant">{member.role}</p>
                      <h3 className="mt-2 text-on-surface font-semibold">{member.name}</h3>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </section>
    </main>
  );
};

export default Abhivyakti;
