import React from 'react';
import { siteContent } from '../content/siteContent';

export const MoreThanAYearSection: React.FC = () => {
  return (
    <section
      id="section-beginning"
      className="relative min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-[#96B4FF]/10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 -right-40 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#101B39]/50 blur-[140px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Editorial Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#96B4FF]/15">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#65A9FF]">
            {siteContent.introduction.leftTag}
          </span>
          <span className="text-xs font-mono tracking-widest uppercase text-[#A8B6D8]/60">
            A TIMELINE OF APPRECIATION • {siteContent.relationshipDuration.toUpperCase()}
          </span>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-8">
            <h2 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-[#F4F6FF] uppercase whitespace-pre-line">
              {siteContent.introduction.leftHeading}
            </h2>

            <div className="space-y-6 pt-4 text-base sm:text-lg text-[#A8B6D8] font-light leading-relaxed">
              {siteContent.introduction.leftParagraphs.map((para, idx) => (
                <p key={idx} className={idx === 2 ? 'text-[#F4F6FF] font-normal text-lg sm:text-xl border-l-2 border-[#65A9FF] pl-4 italic font-serif-italic' : ''}>
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 space-y-8 lg:pt-16">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0D1733]/60 backdrop-blur-md border border-[#96B4FF]/15 shadow-2xl relative overflow-hidden group hover:border-[#65A9FF]/30 transition-all duration-500">
              
              {/* Subtle top corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#65A9FF]/5 rounded-bl-full pointer-events-none" />

              <span className="inline-block text-xs font-mono tracking-[0.25em] uppercase text-[#B7D5FF] mb-6">
                {siteContent.introduction.rightTag}
              </span>

              <h3 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[0.95] text-[#F4F6FF] uppercase whitespace-pre-line mb-8">
                {siteContent.introduction.rightHeading}
              </h3>

              <div className="space-y-6 text-base sm:text-lg text-[#A8B6D8] font-light leading-relaxed">
                {siteContent.introduction.rightParagraphs.map((para, idx) => (
                  <p key={idx} className={idx === 1 ? 'text-[#B7D5FF] font-medium' : ''}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Decorative coordinate stamp */}
              <div className="mt-10 pt-6 border-t border-[#96B4FF]/10 flex items-center justify-between text-[11px] font-mono text-[#A8B6D8]/60">
                <span>MEM-01 // CONNECTION</span>
                <span className="text-[#65A9FF]">FOREVER GRATEFUL</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
