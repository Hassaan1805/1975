import React from 'react';
import { BackgroundStars } from './components/BackgroundStars';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MoreThanAYearSection } from './components/MoreThanAYearSection';
import { CareSection } from './components/CareSection';
import { StatementsSection } from './components/StatementsSection';
import { MemoriesSection } from './components/MemoriesSection';
import { LetterSection } from './components/LetterSection';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#080F26] text-[#F4F6FF] selection:bg-[#65A9FF]/30 selection:text-[#F4F6FF] antialiased overflow-x-hidden">
      {/* Background Starfield Canvas */}
      <BackgroundStars />

      {/* Persistent Navigation & Audio Controls */}
      <Navbar />

      {/* Main Experience Stream */}
      <main className="relative z-10 flex flex-col w-full">
        <HeroSection />
        <MoreThanAYearSection />
        <CareSection />
        <StatementsSection />
        <MemoriesSection />
        <LetterSection />
      </main>
    </div>
  );
};

export default App;
