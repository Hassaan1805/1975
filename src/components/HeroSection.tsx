import React from 'react';
import { ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';
import { CelestialSphere } from './CelestialSphere';
import { siteContent } from '../content/siteContent';

export const HeroSection: React.FC = () => {
  const handleExplore = () => {
    const el = document.getElementById('section-beginning');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background radial glow */}
      <div 
        className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#65A9FF]/10 blur-[130px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Main Grid: Typography on Left, 3D Celestial Sphere on Right */}
      <div className="max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Monumental Editorial Text */}
        <div className="lg:col-span-7 flex flex-col items-start justify-center space-y-8">
          
          {/* Subtle Tag / Meta */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101B39]/70 border border-[#96B4FF]/20 text-xs tracking-widest uppercase font-mono text-[#B7D5FF]">
            <Sparkles className="w-3.5 h-3.5 text-[#65A9FF]" />
            <span>Dedicated to my best friend</span>
          </div>

          {/* Monumental Headline: "HEY, INSHUU." */}
          <div className="space-y-1">
            <h1 className="font-heading font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.92] text-[#F4F6FF]">
              <span className="block">{siteContent.hero.title[0]}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F4F6FF] via-[#B7D5FF] to-[#65A9FF]">
                {siteContent.hero.title[1]}
              </span>
            </h1>
          </div>

          {/* Subtitle Statement */}
          <p className="font-heading text-lg sm:text-xl md:text-2xl font-normal text-[#F4F6FF]/95 max-w-xl tracking-tight uppercase leading-snug">
            {siteContent.hero.subtitle}
          </p>

          {/* Emotional supporting text */}
          <p className="font-sans text-sm sm:text-base text-[#A8B6D8] max-w-lg leading-relaxed font-light">
            {siteContent.hero.supportingText}
          </p>

          {/* Primary CTA Button */}
          <div className="pt-2 flex items-center gap-4">
            <button
              onClick={handleExplore}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#101B39] to-[#0D1733] border border-[#65A9FF]/40 text-[#F4F6FF] text-xs sm:text-sm tracking-widest uppercase font-heading font-medium hover:border-[#65A9FF] hover:shadow-[0_0_35px_rgba(101,169,255,0.35)] transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10">{siteContent.hero.buttonText}</span>
              <ArrowUpRight className="w-4 h-4 text-[#65A9FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <div className="absolute inset-0 rounded-full bg-[#65A9FF]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

        </div>

        {/* Right Column: 3D Interactive Celestial Sphere */}
        <div className="lg:col-span-5 h-[340px] sm:h-[420px] md:h-[480px] lg:h-[520px] w-full flex items-center justify-center relative">
          <CelestialSphere />

          {/* Floating Minimal Spec Label inspired by reference image */}
          <div className="absolute bottom-4 right-4 hidden sm:flex flex-col items-end pointer-events-none">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#A8B6D8]/60">AFTER MIDNIGHT</span>
            <span className="text-[10px] font-mono text-[#65A9FF]">#080F26 • #65A9FF</span>
          </div>
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className="w-full flex justify-center items-center pt-8 z-10">
        <button
          onClick={handleExplore}
          className="flex flex-col items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-[#A8B6D8]/60 hover:text-[#65A9FF] transition-colors cursor-pointer group"
          aria-label="Scroll to explore"
        >
          <span>{siteContent.hero.scrollIndicator}</span>
          <ChevronDown className="w-4 h-4 text-[#65A9FF] animate-bounce" />
        </button>
      </div>

    </section>
  );
};
