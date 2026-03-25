import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MemberCard = ({ name, role, index, image, linkedin, email }) => {
  const cardRef = useRef(null);
  const hasSocialLinks = Boolean(linkedin || email);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(cardRef.current,
        { y: 60, opacity: 0, scale: 0.9, rotateY: -8 },
        {
          y: 0, opacity: 1, scale: 1, rotateY: 0,
          duration: 0.8, ease: 'power3.out', delay: index * 0.1,
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 90%',
          }
        }
      );
    });
    return () => ctx.revert();
  }, [index]);

  return (
    <div ref={cardRef} className="group member-card relative overflow-hidden rounded-lg bg-surface-container-low hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(60,215,255,0.2)] transition-all duration-500 perspective-[600px]">
      <div className="aspect-4/5 overflow-hidden relative bg-surface-container-highest flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={`${name} profile`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <span className="text-6xl text-on-surface-variant/20 font-bold group-hover:text-tertiary/50 group-hover:scale-125 transition-all duration-500 uppercase">
            {name.charAt(0)}
          </span>
        )}
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-surface-container-lowest/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        {hasSocialLinks && (
          <div className="social-overlay hidden md:flex absolute inset-0 bg-primary-container/60 backdrop-blur-sm items-center justify-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${name} LinkedIn profile`}
                className="w-12 h-12 rounded-full bg-surface/60 flex items-center justify-center text-on-surface hover:bg-tertiary hover:text-on-tertiary hover:scale-110 transition-all"
              >
                <span className="material-symbols-outlined">link</span>
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                aria-label={`Email ${name}`}
                className="w-12 h-12 rounded-full bg-surface/60 flex items-center justify-center text-on-surface hover:bg-tertiary hover:text-on-tertiary hover:scale-110 transition-all"
              >
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
            )}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-on-surface mb-1 group-hover:text-tertiary transition-colors">{name}</h3>
        <p className="text-tertiary text-sm font-medium tracking-wider uppercase">{role}</p>
        {hasSocialLinks && (
          <div className="mt-4 flex md:hidden items-center gap-3">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${name} LinkedIn profile`}
                className="h-9 px-3 rounded-full bg-surface-container-high text-on-surface text-sm font-medium flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-base">link</span>
                LinkedIn
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                aria-label={`Email ${name}`}
                className="h-9 px-3 rounded-full bg-surface-container-high text-on-surface text-sm font-medium flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-base">alternate_email</span>
                Email
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
