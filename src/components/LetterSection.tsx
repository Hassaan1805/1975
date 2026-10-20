import React, { useState, useEffect, useRef } from 'react';
import { Mail, Heart, ArrowUp } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export const LetterSection: React.FC = () => {
  const letterRef = useRef<HTMLDivElement | null>(null);
  const [letterReadProgress, setLetterReadProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = letterRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const total = rect.height - windowHeight * 0.5;
      const current = windowHeight - rect.top - windowHeight * 0.3;

      if (total > 0) {
        const progress = Math.min(100, Math.max(0, (current / total) * 100));
        setLetterReadProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="section-letter"
      ref={letterRef}
      className="relative min-h-screen py-32 md:py-44 px-6 md:px-12 lg:px-20 border-t border-[#96B4FF]/10 overflow-hidden bg-gradient-to-b from-[#080F26] via-[#0A132E] to-[#080F26] flex flex-col justify-between"
    >
      {/* Subtle Illuminated Moon in Background */}
      <div 
        className="absolute top-28 right-10 md:right-28 w-72 md:w-96 h-72 md:h-96 rounded-full bg-gradient-to-br from-[#65A9FF]/12 via-[#B7D5FF]/5 to-transparent blur-2xl pointer-events-none -z-10 animate-float-slow"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto space-y-16 w-full">
        
        {/* Section Header */}
        <div className="space-y-6 text-left">
          <div className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] uppercase text-[#65A9FF]">
            <Mail className="w-3.5 h-3.5" />
            <span>{siteContent.letterSection.tag}</span>
          </div>

          <h2 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F4F6FF] uppercase whitespace-pre-line leading-[0.92]">
            {siteContent.letterSection.heading}
          </h2>

          {/* Letter Reading Progress Line */}
          <div className="pt-2 flex items-center gap-4">
            <div className="w-full h-1 bg-[#101B39] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#65A9FF] to-[#B7D5FF] transition-all duration-150 rounded-full"
                style={{ width: `${letterReadProgress}%` }}
              />
            </div>
            <span className="text-[10px] font-mono text-[#A8B6D8] tracking-widest whitespace-nowrap">
              {Math.round(letterReadProgress)}% READ
            </span>
          </div>
        </div>

        {/* Editorial Letter Parchment / Container */}
        <div className="p-8 sm:p-14 md:p-20 rounded-3xl bg-[#0D1733]/70 backdrop-blur-2xl border border-[#96B4FF]/20 shadow-2xl space-y-8 relative text-left">
          
          {/* Subtle Watermark corner symbol */}
          <div className="absolute top-8 right-8 text-[#65A9FF]/20 pointer-events-none">
            <Heart className="w-8 h-8 fill-current" />
          </div>

          {/* Salutation */}
          <div className="font-serif-italic italic text-2xl sm:text-3xl text-[#65A9FF] font-medium border-b border-[#96B4FF]/15 pb-6">
            {siteContent.letterSection.salutation}
          </div>

          {/* Letter Body Paragraphs */}
          <div className="space-y-6 text-base sm:text-lg md:text-xl text-[#F4F6FF]/90 font-light leading-relaxed font-sans">
            {siteContent.letterSection.paragraphs.map((paragraph, index) => {
              // Highlight key emotional turning points
              const isHighlight = 
                index === 3 || 
                index === 4 || 
                index === 9 || 
                index === siteContent.letterSection.paragraphs.length - 2;

              return (
                <p
                  key={index}
                  className={`transition-all duration-300 ${
                    isHighlight
                      ? 'text-[#B7D5FF] font-normal border-l border-[#65A9FF]/50 pl-4 py-1'
                      : ''
                  }`}
                >
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Valediction & Signature */}
          <div className="pt-10 border-t border-[#96B4FF]/15 space-y-2">
            <p className="font-serif-italic italic text-lg sm:text-xl text-[#A8B6D8]">
              {siteContent.letterSection.valediction}
            </p>
            <p className="font-heading font-bold text-2xl sm:text-3xl text-[#65A9FF] tracking-wide">
              {siteContent.letterSection.signature}
            </p>
          </div>

        </div>

      </div>

      {/* Graceful Closing Footer & Return to Top */}
      <div className="max-w-4xl mx-auto w-full pt-20 mt-16 border-t border-[#96B4FF]/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-[#A8B6D8]/60">
        <div className="flex items-center gap-2">
          <Heart className="w-3.5 h-3.5 text-[#65A9FF]" />
          <span>MADE WITH APPRECIATION, JUST FOR YOU • AFTER MIDNIGHT</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-[#65A9FF] transition-colors cursor-pointer group"
        >
          <span>RETURN TO THE BEGINNING</span>
          <div className="w-6 h-6 rounded-full bg-[#101B39] border border-[#96B4FF]/20 flex items-center justify-center group-hover:border-[#65A9FF] transition-all">
            <ArrowUp className="w-3 h-3 text-[#65A9FF] group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </section>
  );
};
