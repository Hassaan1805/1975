import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';
import { siteContent } from '../content/siteContent';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.65);
  const [showVolumeSlider, setShowVolumeSlider] = useState<boolean>(false);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.loop = true;

    // Check if user previously interacted or if audio is playing
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [volume]);

  const togglePlay = async () => {
    setHasInteracted(true);
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn('Audio playback was prevented by browser policy until user interaction:', err);
      }
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isMuted) {
      audio.muted = false;
      setIsMuted(false);
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
      if (newVol > 0 && isMuted) {
        audioRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={siteContent.audioTrack.src}
        preload="metadata"
      />

      {/* Floating Audio Player Control Pill */}
      <div className="flex items-center gap-2">
        <div 
          className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#101B39]/80 backdrop-blur-md border border-[#96B4FF]/20 hover:border-[#65A9FF]/40 transition-all duration-300 shadow-lg shadow-black/20 group"
          role="region"
          aria-label="Background audio player"
        >
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="w-7 h-7 rounded-full bg-[#65A9FF]/20 hover:bg-[#65A9FF]/30 text-[#65A9FF] flex items-center justify-center transition-colors focus:outline-none focus:ring-1 focus:ring-[#65A9FF]"
            aria-label={isPlaying ? 'Pause music' : 'Play music'}
            title={isPlaying ? 'Pause "About You"' : 'Play "About You"'}
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5 fill-current" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
            )}
          </button>

          {/* Equalizer Visualizer Bars */}
          <div className="flex items-center gap-[3px] h-3 px-1" aria-hidden="true">
            {[40, 90, 60, 100, 50].map((h, i) => (
              <span
                key={i}
                className={`w-[2.5px] rounded-full bg-[#65A9FF] transition-all duration-200 ${
                  isPlaying ? 'animate-pulse' : 'h-[3px] opacity-40'
                }`}
                style={{
                  height: isPlaying ? `${Math.max(4, (h / 100) * 14)}px` : '3px',
                  animationDelay: `${i * 140}ms`,
                  animationDuration: '700ms',
                }}
              />
            ))}
          </div>

          {/* Song Info */}
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-[11px] font-medium text-[#F4F6FF] leading-tight flex items-center gap-1">
              <span className="truncate max-w-[120px]">{siteContent.audioTrack.title}</span>
            </span>
            <span className="text-[9px] text-[#A8B6D8] leading-none uppercase tracking-wider">
              {siteContent.audioTrack.artist}
            </span>
          </div>

          {/* Volume Control Button */}
          <div className="relative flex items-center">
            <button
              onClick={toggleMute}
              onMouseEnter={() => setShowVolumeSlider(true)}
              className="text-[#A8B6D8] hover:text-[#F4F6FF] transition-colors p-1 rounded-full focus:outline-none"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-3.5 h-3.5 text-red-400/80" />
              ) : (
                <Volume2 className="w-3.5 h-3.5" />
              )}
            </button>

            {/* Expandable Mini Volume Slider on hover/interaction */}
            {showVolumeSlider && (
              <div 
                className="absolute right-0 top-full mt-2 p-2 bg-[#101B39] border border-[#96B4FF]/20 rounded-lg shadow-xl flex items-center gap-2 z-50 backdrop-blur-xl animate-fade-in"
                onMouseLeave={() => setShowVolumeSlider(false)}
              >
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 h-1 accent-[#65A9FF] bg-[#080F26] rounded cursor-pointer"
                  aria-label="Volume slider"
                />
              </div>
            )}
          </div>
        </div>

        {/* Ambient music recommendation badge on first load */}
        {!hasInteracted && !isPlaying && (
          <button
            onClick={togglePlay}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#65A9FF]/10 border border-[#65A9FF]/30 text-[#B7D5FF] text-[11px] hover:bg-[#65A9FF]/20 transition-all cursor-pointer animate-pulse"
          >
            <Music className="w-3 h-3 text-[#65A9FF]" />
            <span>Play song</span>
          </button>
        )}
      </div>
    </>
  );
};
