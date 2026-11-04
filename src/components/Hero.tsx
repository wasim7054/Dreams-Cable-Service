import React from 'react';
import { Tv, Wifi, ArrowRight } from 'lucide-react';

interface HeroProps {
  onCableClick: () => void;
  onBroadbandClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCableClick, onBroadbandClick }) => {
  return (
    <section id="home" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden">
      {/* Container matching the flyer's top hero grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 text-left space-y-4 sm:space-y-5">
            
            {/* Main Bengali Heading with WiFi waves graphic */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#004D1A] tracking-tight leading-tight">
                  আপনার বিশ্ব,
                </h1>
                {/* 3 Green glowing curved WiFi waves */}
                <div className="flex items-center text-[#087A24]">
                  <Wifi className="w-8 h-8 sm:w-10 sm:h-10 stroke-[3]" />
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#004D1A] tracking-tight leading-tight">
                আরো ভালোভাবে
              </h2>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#004D1A] tracking-tight leading-tight">
                সংযুক্ত হোক!
              </h2>
            </div>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-slate-800 font-semibold leading-relaxed max-w-md">
              <strong className="text-[#087A24]">Dream's Cable and Broadband Service</strong> এর সাথে উপভোগ করুন Crystal Clear Cable TV এবং High-Speed Internet !
            </p>

            {/* Two Pill Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Button 1: Solid Green Pill */}
              <button
                onClick={onCableClick}
                className="bg-[#087A24] hover:bg-[#004D1A] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer btn-glow-green"
              >
                <Tv className="w-4 h-4" />
                <span>কেবল সংযোগ নিন</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* Button 2: White Pill with Green Border */}
              <button
                onClick={onBroadbandClick}
                className="bg-white hover:bg-[#F0FFE9] text-[#087A24] border-2 border-[#087A24] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer"
              >
                <Wifi className="w-4 h-4" />
                <span>ব্রডব্যান্ড জানুন</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Visual Block: Bengali Family, Smart TV, High-Speed Router & Digital Globe */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl border-2 border-white/60">
              <img
                src="/extracted/hero_family_clean.png"
                alt="Happy Indian Bengali Family enjoying Cable TV and High-Speed Broadband Internet"
                className="w-full h-auto object-cover rounded-2xl shadow-inner transform hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
