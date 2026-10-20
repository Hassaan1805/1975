import React from 'react';
import { siteContent } from '../content/siteContent';

export const CareSection: React.FC = () => {
  return (
    <section
      id="section-care"
      className="relative min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-[#96B4FF]/10 overflow-hidden"
    >
      {/* Background soft glow */}
      <div 
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#65A9FF]/8 blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Tag */}
        <div className="flex items-center justify-between pb-6 border-b border-[#96B4FF]/15">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#65A9FF]">
            {siteContent.careSection.tag}
          </span>
          <span className="text-xs font-mono tracking-widest uppercase text-[#A8B6D8]/60">
            EMPATHY & PRESENCE
          </span>
        </div>

        {/* Editorial Content: Heading & Reflection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-[#F4F6FF] uppercase whitespace-pre-line">
              {siteContent.careSection.heading}
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-6 text-base sm:text-lg text-[#A8B6D8] font-light leading-relaxed">
            {siteContent.careSection.paragraphs.map((para, idx) => (
              <p 
                key={idx}
                className={
                  idx === siteContent.careSection.paragraphs.length - 1
                    ? 'text-[#F4F6FF] font-medium text-lg sm:text-xl border-l-2 border-[#65A9FF] pl-4 pt-1'
                    : ''
                }
              >
                {para}
              </p>
            ))}
          </div>

        </div>

        {/* Three Enormous Typography Statements */}
        <div className="pt-12 space-y-6">
          <div className="text-xs font-mono tracking-[0.25em] uppercase text-[#A8B6D8]/60 pb-4">
            CORE ESSENCE
          </div>

          <div className="space-y-4">
            {siteContent.careSection.coreStatements.map((item, index) => (
              <div
                key={index}
                className="group relative p-6 sm:p-8 rounded-2xl bg-[#0D1733]/40 border border-[#96B4FF]/10 hover:border-[#65A9FF]/40 hover:bg-[#101B39]/70 transition-all duration-500 overflow-hidden"
              >
                {/* Electric blue glow bar on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#65A9FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                  <h3 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none text-[#F4F6FF] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#F4F6FF] group-hover:to-[#65A9FF] transition-all">
                    <span className="text-[#A8B6D8]/70 mr-3">{item.prefix}</span>
                    <span className="text-[#65A9FF] group-hover:text-[#B7D5FF]">{item.word}</span>
                  </h3>
                  
                  <span className="text-xs font-mono text-[#A8B6D8]/50 tracking-widest group-hover:text-[#65A9FF] transition-colors">
                    0{index + 1} // THREE PILLARS
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
