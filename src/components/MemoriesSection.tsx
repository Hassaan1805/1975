import React, { useState } from 'react';
import { Sparkles, Calendar, ArrowUpRight } from 'lucide-react';
import { MemoryModal } from './MemoryModal';
import { siteContent, type MemoryItem } from '../content/siteContent';


export const MemoriesSection: React.FC = () => {
  const [selectedMemory, setSelectedMemory] = useState<MemoryItem | null>(null);

  return (
    <>
      <section
        id="section-memories"
        className="relative min-h-screen py-28 md:py-36 px-6 md:px-12 lg:px-20 border-t border-[#96B4FF]/10 overflow-hidden"
      >
        {/* Ambient glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#101B39]/50 blur-[160px] pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10 border-b border-[#96B4FF]/15">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#65A9FF] block">
                {siteContent.memoriesSection.tag}
              </span>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#F4F6FF] uppercase whitespace-pre-line leading-[0.95]">
                {siteContent.memoriesSection.heading}
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-[#A8B6D8] font-light leading-relaxed">
                {siteContent.memoriesSection.supportingParagraph}
              </p>
            </div>
          </div>

          {/* Interactive Memory Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {siteContent.memoriesSection.items.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedMemory(item)}
                className="group relative p-8 rounded-3xl bg-[#0D1733]/60 backdrop-blur-md border border-[#96B4FF]/15 hover:border-[#65A9FF]/40 hover:bg-[#101B39]/80 transition-all duration-400 cursor-pointer flex flex-col justify-between h-[360px] overflow-hidden shadow-xl hover:shadow-[0_10px_35px_-10px_rgba(101,169,255,0.2)]"
              >
                {/* Background light glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#65A9FF]/5 rounded-bl-full group-hover:bg-[#65A9FF]/15 transition-all duration-500 pointer-events-none" />

                {/* Top: Index & Date */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="text-xs font-mono text-[#65A9FF] tracking-wider px-2.5 py-0.5 rounded-full bg-[#65A9FF]/10 border border-[#65A9FF]/20">
                      0{index + 1}
                    </span>
                    {item.date && (
                      <span className="text-[11px] font-mono text-[#A8B6D8]/70 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#65A9FF]" />
                        {item.date}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#F4F6FF] uppercase tracking-tight group-hover:text-[#B7D5FF] transition-colors mb-4">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#A8B6D8] font-light line-clamp-3 leading-relaxed">
                    {item.body}
                  </p>
                </div>

                {/* Bottom: Action Trigger & Caption preview */}
                <div className="pt-4 border-t border-[#96B4FF]/10 flex items-center justify-between text-xs font-mono text-[#A8B6D8]/80 group-hover:text-[#F4F6FF]">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#65A9FF]" />
                    <span>READ MOMENT</span>
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#101B39] border border-[#96B4FF]/20 flex items-center justify-center group-hover:border-[#65A9FF] group-hover:bg-[#65A9FF]/20 transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#65A9FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Expanded Modal */}
      <MemoryModal
        memory={selectedMemory}
        onClose={() => setSelectedMemory(null)}
      />
    </>
  );
};
