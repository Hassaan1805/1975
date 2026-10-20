import React, { useState, useEffect } from 'react';
import { AudioPlayer } from './AudioPlayer';
import { siteContent } from '../content/siteContent';

export const Navbar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Reading Progress Line */}
      <div 
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-[#65A9FF] via-[#B7D5FF] to-[#65A9FF] z-50 transition-all duration-150 ease-out shadow-[0_0_8px_rgba(101,169,255,0.8)]"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Main Header / Navigation */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#080F26]/85 backdrop-blur-md border-b border-[#96B4FF]/10 shadow-lg shadow-black/30'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Wordmark with luminous blue dot */}
          <div className="flex items-center gap-2.5 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#65A9FF] animate-pulse" />
              <span className="absolute w-4 h-4 rounded-full bg-[#65A9FF]/40 blur-xs" />
            </div>
            <span className="font-heading tracking-[0.2em] text-xs font-semibold text-[#F4F6FF] group-hover:text-[#65A9FF] transition-colors">
              {siteContent.hero.wordmark}
            </span>
          </div>

          {/* Quick Jump Anchor Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-[11px] font-medium tracking-widest uppercase text-[#A8B6D8]">
            <button
              onClick={() => scrollToSection('section-beginning')}
              className="hover:text-[#F4F6FF] transition-colors cursor-pointer"
            >
              Story
            </button>
            <button
              onClick={() => scrollToSection('section-care')}
              className="hover:text-[#F4F6FF] transition-colors cursor-pointer"
            >
              Care
            </button>
            <button
              onClick={() => scrollToSection('section-memories')}
              className="hover:text-[#F4F6FF] transition-colors cursor-pointer"
            >
              Memories
            </button>
            <button
              onClick={() => scrollToSection('section-letter')}
              className="hover:text-[#65A9FF] text-[#B7D5FF] transition-colors cursor-pointer"
            >
              The Letter
            </button>
          </nav>


          {/* Right Section: Tag + Music Pill */}
          <div className="flex items-center gap-4">
            <span className="hidden xl:inline-block text-[10px] tracking-widest uppercase font-mono text-[#A8B6D8]/70 border-r border-[#96B4FF]/20 pr-4">
              {siteContent.hero.topRightBadge}
            </span>
            <AudioPlayer />
          </div>

        </div>
      </header>
    </>
  );
};
