import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EventCard = ({ title, description, index, date, status, link }) => {
  const isTargetEven = index % 2 === 0;
  const itemRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(itemRef.current,
        { x: isTargetEven ? -80 : 80, opacity: 0, scale: 0.95 },
        {
          x: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: itemRef.current,
            start: 'top 88%',
          }
        }
      );

      const dot = itemRef.current?.querySelector('.timeline-dot');
      if (dot) {
        gsap.fromTo(dot,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)',
            scrollTrigger: { trigger: dot, start: 'top 90%' }
          }
        );
      }
    });
    return () => ctx.revert();
  }, [isTargetEven]);

  const isLive = status === 'live';
  const badgeLabel = isLive ? 'LIVE' : status === 'upcoming' ? 'UPCOMING' : 'EVENT';
  const badgeBg = isLive
    ? 'bg-red-500 text-white'
    : status === 'upcoming'
      ? 'bg-amber-500 text-black'
      : isTargetEven
        ? 'bg-tertiary text-on-tertiary'
        : 'bg-surface-container-highest text-on-surface';

  return (
    <div ref={itemRef} className={`relative flex flex-col md:flex-row${!isTargetEven ? '-reverse' : ''} items-center gap-12 group`}>
      {/* Desktop text side */}
      <div className={`md:w-1/2 text-${isTargetEven ? 'right' : 'left'} hidden md:block ${isTargetEven ? 'pr-12' : 'pl-12'}`}>
        <span className="text-tertiary font-bold tracking-[0.2em] uppercase text-sm block mb-2">Event {index + 1}</span>
        {date && <span className="text-on-surface-variant text-xs font-medium tracking-wider uppercase block mb-2">{date}</span>}
        <h3 className="text-3xl font-bold text-on-surface">{title}</h3>
        <p className="text-on-surface-variant mt-4 leading-relaxed whitespace-pre-line">{description}</p>
      </div>
      
      {/* Timeline Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
        <div className={`timeline-dot w-12 h-12 rounded-full bg-surface shadow-[0_0_20px_rgba(60,215,255,0.4)] border-2 ${isLive ? 'border-red-500' : isTargetEven ? 'border-tertiary' : 'border-secondary'} flex items-center justify-center group-hover:scale-125 transition-transform`}>
          <span className={`material-symbols-outlined ${isLive ? 'text-red-500' : isTargetEven ? 'text-tertiary' : 'text-secondary'} text-xl`}>
            {isLive ? 'stream' : 'bolt'}
          </span>
        </div>
      </div>
      
      {/* Card */}
      <div className="md:w-1/2 w-full">
        <div className={`bg-surface-container-low rounded-lg overflow-hidden border ${isLive ? 'border-red-500/40 shadow-[0_0_40px_-10px_rgba(239,68,68,0.3)] hover:shadow-[0_0_50px_-5px_rgba(239,68,68,0.4)]' : isTargetEven ? 'border-tertiary/30 shadow-[0_0_40px_-10px_rgba(60,215,255,0.2)] hover:shadow-[0_0_50px_-5px_rgba(60,215,255,0.3)]' : 'border-secondary/30 hover:border-secondary/50'} hover:-translate-y-1 transition-all duration-500`}>
          
          {/* Card Image Area */}
          <div className="aspect-video relative overflow-hidden bg-surface-container-highest flex items-center justify-center">
            <span className="text-4xl text-on-surface-variant/20 font-bold group-hover:scale-110 transition-transform duration-700 uppercase opacity-30">
              IMG
            </span>
            {/* Badge */}
            <div className={`absolute top-4 left-4 px-3 py-1 ${badgeBg} font-bold text-xs rounded-full flex items-center gap-2`}>
              {isLive && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
              )}
              {badgeLabel}
            </div>
          </div>
          
          <div className="p-8">
            <div className="md:hidden">
              <span className="text-tertiary font-bold tracking-[0.2em] uppercase text-xs block mb-2">Event {index + 1}</span>
              {date && <span className="text-on-surface-variant text-xs font-medium tracking-wider uppercase block mb-2">{date}</span>}
              <h3 className="text-2xl font-bold text-on-surface mb-2">{title}</h3>
            </div>
            
            <p className="text-on-surface-variant leading-relaxed md:hidden mb-6 whitespace-pre-line">{description}</p>
            
            {link ? (
              <a href={link} className="w-full py-3 bg-surface-container-highest hover:bg-surface-bright hover:scale-[1.02] active:scale-[0.98] text-on-surface font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group/btn">
                View Details <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            ) : (
              <button className="w-full py-3 bg-surface-container-highest hover:bg-surface-bright hover:scale-[1.02] active:scale-[0.98] text-on-surface font-semibold rounded-xl transition-all flex items-center justify-center gap-2 group/btn">
                View Details <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default EventCard;
