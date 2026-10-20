import React from 'react';
import { siteContent } from '../content/siteContent';

export const StatementsSection: React.FC = () => {
  return (
    <section
      id="section-statements"
      className="relative min-h-screen py-28 md:py-36 px-6 md:px-12 lg:px-20 border-t border-[#96B4FF]/10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full bg-[#101B39]/40 blur-[150px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#96B4FF]/15">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#65A9FF] block mb-2">
              THOUGHTS FOR YOU
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#F4F6FF] uppercase">
              THINGS I HOPE YOU KNOW
            </h2>
          </div>
          <p className="text-xs font-mono tracking-widest uppercase text-[#A8B6D8]/60 max-w-xs">
            A quiet sequence of reminders to carry with you.
          </p>
        </div>

        {/* Dynamic Alternating Sequence of 6 Statements */}
        <div className="space-y-16 md:space-y-24">
          {siteContent.statements.map((statement, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={statement.id}
                className={`flex flex-col ${
                  isEven ? 'items-start text-left' : 'items-end text-right'
                }`}
              >
                <div 
                  className={`w-full max-w-4xl p-8 sm:p-12 md:p-14 rounded-3xl bg-[#0D1733]/50 backdrop-blur-md border border-[#96B4FF]/15 hover:border-[#65A9FF]/40 hover:bg-[#101B39]/70 transition-all duration-500 shadow-xl group ${
                    isEven ? 'self-start' : 'self-end'
                  }`}
                >
                  {/* Card Index & Badge */}
                  <div className={`flex items-center gap-3 mb-6 ${isEven ? 'justify-start' : 'justify-end'}`}>
                    <span className="text-xs font-mono text-[#65A9FF] tracking-widest px-2.5 py-1 rounded-full bg-[#65A9FF]/10 border border-[#65A9FF]/20">
                      0{statement.id} // REMINDER
                    </span>
                  </div>

                  {/* Monumental Statement */}
                  <h3 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#F4F6FF] leading-tight uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#F4F6FF] group-hover:via-[#B7D5FF] group-hover:to-[#65A9FF] transition-all">
                    {statement.text}
                  </h3>

                  {/* Supporting Subnote */}
                  {statement.subNote && (
                    <p className={`mt-6 text-sm sm:text-base text-[#A8B6D8] font-serif-italic italic font-normal max-w-lg ${isEven ? '' : 'ml-auto'}`}>
                      "{statement.subNote}"
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
