import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MemberCard from '../components/MemberCard';

gsap.registerPlugin(ScrollTrigger);

const Members = () => {
  const headerRef = useRef(null);
  const alumniHeaderRef = useRef(null);

  const members = [
    { name: "Pranjal Bhattacharya", role: "Chair Person" },
    { name: "Somanath Mahto", role: "Vice Chair Person" },
    { name: "Harishta Chaubey", role: "Secretary" },
    { name: "Rajdeep Das", role: "Co Secretary" },
    { name: "Md Mehran Ansari", role: "Webmaster" },
    { name: "Aayush Arya", role: "Co Webmaster" },
    { name: "Ronak Sharma", role: "Treasurer" },
    { name: "Sahil Gurg", role: "Co Treasurer" }
  ];

  const alumni = [
    { name: "Arnav Shivam", role: "Chair Person" },
    { name: "Sneha Sharma", role: "Vice Chair Person" },
    { name: "Asman Kumari", role: "Secretary" },
    { name: "Syed Fahad Ahmed", role: "Treasurer" },
    { name: "Pushkar Kumar", role: "Technical Coordinator" },
    { name: "Meenakshi Sinha", role: "Design & Editing Coordinator" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero split-text
      const h1 = headerRef.current?.querySelector('.members-title');
      if (h1) {
        const text = h1.textContent;
        h1.innerHTML = text.replace(/\S+/g, '<span class="mem-word inline-block">$&</span>');
        gsap.fromTo('.mem-word',
          { y: 50, opacity: 0, rotateX: -45 },
          { y: 0, opacity: 1, rotateX: 0, duration: 0.7, stagger: 0.06, ease: 'power4.out', delay: 0.15 }
        );
      }
      gsap.fromTo('.members-desc',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.5 }
      );

      // Alumni section header animation
      const alumniTitle = alumniHeaderRef.current?.querySelector('.alumni-title');
      if (alumniTitle) {
        gsap.fromTo(alumniTitle,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: alumniTitle, start: 'top 85%' }
          }
        );
      }
      gsap.fromTo('.alumni-desc',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.alumni-desc', start: 'top 85%' }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <main className="pt-24 md:pt-32 pb-24 px-4 md:px-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <header ref={headerRef} className="mb-12 md:mb-16">
        <h1 className="members-title text-4xl md:text-7xl font-bold tracking-[-0.02em] text-primary mb-6 uppercase leading-tight perspective-[800px]">
          EXECUTIVE COMMITTEE
        </h1>
        <p className="members-desc text-on-surface-variant text-base md:text-xl max-w-2xl font-light leading-relaxed opacity-0">
          Meet the dedicated team at IEEE Student Branch BIT Patna. Engineering solutions, fostering community, and leading the digital frontier.
        </p>
      </header>

      {/* Current Member Grid */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {members.map((member, index) => (
          <div key={index} className="w-[calc(50%-0.5rem)] md:w-[calc(25%-1.5rem)] min-w-[160px] max-w-xs flex-shrink-0">
            <MemberCard name={member.name} role={member.role} index={index} />
          </div>
        ))}
      </div>

      {/* Alumni Section */}
      <section className="mt-24 md:mt-32">
        <header ref={alumniHeaderRef} className="mb-12 md:mb-16">
          <h2 className="alumni-title text-3xl md:text-5xl font-bold tracking-[-0.02em] text-on-surface-variant/70 mb-4 uppercase leading-tight">
            Alumni
          </h2>
          <p className="alumni-desc text-on-surface-variant/50 text-base md:text-lg max-w-2xl font-light leading-relaxed opacity-0">
            Former executive committee members who laid the foundation of our student branch.
          </p>
        </header>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {alumni.map((member, index) => (
            <div key={index} className="w-[calc(50%-0.5rem)] md:w-[calc(25%-1.5rem)] min-w-[160px] max-w-xs flex-shrink-0 opacity-75 hover:opacity-100 transition-opacity">
              <MemberCard name={member.name} role={member.role} index={index} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Members;
