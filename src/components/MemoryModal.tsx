import React, { useEffect } from 'react';
import { X, Calendar, Sparkles } from 'lucide-react';
import type { MemoryItem } from '../content/siteContent';


interface MemoryModalProps {
  memory: MemoryItem | null;
  onClose: () => void;
}

export const MemoryModal: React.FC<MemoryModalProps> = ({ memory, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (memory) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [memory, onClose]);

  if (!memory) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#080F26]/85 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="memory-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#0D1733] border border-[#65A9FF]/30 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/80 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#65A9FF]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#101B39] border border-[#96B4FF]/20 flex items-center justify-center text-[#A8B6D8] hover:text-[#F4F6FF] hover:border-[#65A9FF] transition-all cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#65A9FF]"
          aria-label="Close memory modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Memory Metadata */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#65A9FF]/15 border border-[#65A9FF]/30 text-xs font-mono text-[#B7D5FF]">
            <Sparkles className="w-3 h-3 text-[#65A9FF]" />
            MEMORY ARCHIVE
          </span>
          {memory.date && (
            <span className="inline-flex items-center gap-1 text-xs font-mono text-[#A8B6D8]/80">
              <Calendar className="w-3.5 h-3.5 text-[#65A9FF]" />
              {memory.date}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 
          id="memory-modal-title"
          className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#F4F6FF] uppercase tracking-tight mb-6"
        >
          {memory.title}
        </h3>

        {/* Generative Visual Header / Abstract Celestial Artwork if no custom image */}
        <div className="w-full h-44 sm:h-52 rounded-2xl bg-gradient-to-br from-[#101B39] via-[#0B1430] to-[#080F26] border border-[#96B4FF]/20 relative overflow-hidden flex items-center justify-center mb-6">
          {memory.image ? (
            <img
              src={memory.image}
              alt={memory.title}
              className="w-full h-full object-cover rounded-2xl"
            />
          ) : (
            <div className="relative flex flex-col items-center justify-center">
              {/* Ethereal Glowing Orb artwork placeholder */}
              <div className="w-20 h-20 rounded-full bg-[#65A9FF]/20 border border-[#65A9FF]/40 blur-xs animate-pulse" />
              <div className="absolute w-32 h-32 rounded-full border border-[#96B4FF]/20 rotate-45" />
              <div className="absolute w-40 h-40 rounded-full border border-[#65A9FF]/15 -rotate-12" />
              <span className="absolute bottom-[-18px] text-[10px] font-mono tracking-widest uppercase text-[#B7D5FF]/70">
                A MOMENT IN TIME
              </span>
            </div>
          )}
        </div>

        {/* Body Text */}
        <p className="text-base sm:text-lg text-[#F4F6FF]/90 font-light leading-relaxed mb-6">
          {memory.body}
        </p>

        {/* Caption */}
        {memory.caption && (
          <p className="text-sm font-serif-italic italic text-[#65A9FF] border-l-2 border-[#65A9FF] pl-4 py-1 mb-6">
            "{memory.caption}"
          </p>
        )}

        {/* Tags */}
        {memory.tags && memory.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-[#96B4FF]/15">
            {memory.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-[#101B39] text-[#A8B6D8] border border-[#96B4FF]/10"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
