import React from 'react';
import { Tv, Wifi, Check, ArrowRight, Sparkles } from 'lucide-react';

interface PlansSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="plans" className="py-6 sm:py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        
        {/* Main White Rounded Container with Soft Green Border */}
        <div className="bg-white/95 rounded-3xl border-4 border-white shadow-2xl p-4 sm:p-6 lg:p-8 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            
            {/* ================= LEFT COLUMN: CABLE TV PLANS ================= */}
            <div id="cable-tv" className="relative pt-6">
              {/* Header Pill */}
              <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-[#087A24] via-[#0B8729] to-[#087A24] text-white text-sm sm:text-base font-extrabold px-6 py-2 rounded-full shadow-md flex items-center gap-2 whitespace-nowrap border-2 border-white">
                  <Tv className="w-5 h-5 text-white" />
                  <span>কেবল টিভি সংযোগের প্ল্যান</span>
                </div>
              </div>

              {/* 2 Side-by-Side Cards inside Cable TV Container */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-3 h-full items-stretch">
                
                {/* 1. SD CABLE CONNECTION CARD */}
                <div className="rounded-2xl border-2 border-[#42C83D]/40 bg-gradient-to-b from-white to-[#F0FFE9]/30 p-4 sm:p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all hover:border-[#087A24] relative">
                  <div>
                    {/* Green Title Banner */}
                    <div className="bg-[#087A24] text-white text-center py-1.5 px-3 rounded-full text-xs sm:text-sm font-bold tracking-tight shadow-2xs mb-3">
                      SD কেবল সংযোগ
                    </div>

                    {/* Price and STB Image Row */}
                    <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
                      <div>
                        <div className="text-3xl sm:text-4xl font-black text-[#004D1A] font-mono tracking-tight">
                          ₹1,200
                        </div>
                        <div className="text-[11px] font-bold text-[#087A24] mt-0.5">
                          (প্রাথমিক কানেকশন চার্জ)
                        </div>
                      </div>

                      {/* SD Set Top Box Image */}
                      <div className="w-24 h-18 shrink-0 flex items-center justify-center">
                        <img
                          src="/extracted/stb_sd.png"
                          alt="SD Set Top Box with Remote"
                          className="max-h-full max-w-full object-contain drop-shadow-md"
                        />
                      </div>
                    </div>

                    {/* Bullet Points with Green Checkmarks */}
                    <div className="space-y-2 text-xs sm:text-sm text-slate-800 pt-3">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="font-semibold">SD Set Top Box সংযোগ</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="font-semibold">১ মাসের রিচার্জ ফ্রি</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="font-semibold">সাশ্রয়ী কেবল টিভি বিনোদন</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="font-semibold">যেকোনো SD চ্যানেল দেখুন</span>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-4">
                    <button
                      onClick={() => onSelectPlan('SD Cable Connection')}
                      className="w-full bg-[#087A24] hover:bg-[#004D1A] text-white font-bold py-2.5 px-4 rounded-full text-xs sm:text-sm shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>SD কানেকশন নিন</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>

                {/* 2. HD CABLE CONNECTION CARD */}
                <div className="rounded-2xl border-2 border-[#087A24] bg-gradient-to-b from-white to-[#F0FFE9]/50 p-4 sm:p-5 flex flex-col justify-between shadow-md hover:shadow-lg transition-all relative overflow-hidden">
                  
                  {/* Red HD EXPERIENCE Ribbon Tag in top right corner */}
                  <div className="absolute top-0 right-0 bg-[#E11D48] text-white text-[10px] font-black px-3 py-1 rounded-bl-xl tracking-wider uppercase shadow-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>HD EXPERIENCE</span>
                  </div>

                  <div>
                    {/* Green Title Banner */}
                    <div className="bg-[#087A24] text-white text-center py-1.5 px-3 rounded-full text-xs sm:text-sm font-bold tracking-tight shadow-2xs mb-3 pr-20 sm:pr-24">
                      HD কেবল সংযোগ
                    </div>

                    {/* Price and HD STB Image Row */}
                    <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
                      <div>
                        <div className="text-3xl sm:text-4xl font-black text-[#004D1A] font-mono tracking-tight">
                          ₹1,500
                        </div>
                        <div className="text-[11px] font-bold text-[#087A24] mt-0.5">
                          (প্রাথমিক কানেকশন চার্জ)
                        </div>
                      </div>

                      {/* HD Set Top Box Image */}
                      <div className="w-24 h-18 shrink-0 flex items-center justify-center">
                        <img
                          src="/extracted/stb_hd.png"
                          alt="HD Set Top Box with Remote"
                          className="max-h-full max-w-full object-contain drop-shadow-md"
                        />
                      </div>
                    </div>

                    {/* Bullet Points with Green Checkmarks */}
                    <div className="space-y-2 text-xs sm:text-sm text-slate-800 pt-3">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="font-semibold">HD Set Top Box সহ</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="font-bold text-[#004D1A]">১ মাসের রিচার্জ ফ্রি</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="font-semibold">Crystal Clear HD Picture</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="font-semibold">HD চ্যানেল উপভোগ করুন</span>
                      </div>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-4">
                    <button
                      onClick={() => onSelectPlan('HD Cable Connection')}
                      className="w-full bg-[#087A24] hover:bg-[#004D1A] text-white font-bold py-2.5 px-4 rounded-full text-xs sm:text-sm shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer btn-glow-green"
                    >
                      <span>HD কানেকশন নিন</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* ================= RIGHT COLUMN: BROADBAND PLANS ================= */}
            <div id="broadband" className="relative pt-6">
              {/* Header Pill */}
              <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-[#087A24] via-[#0B8729] to-[#087A24] text-white text-sm sm:text-base font-extrabold px-6 py-2 rounded-full shadow-md flex items-center gap-2 whitespace-nowrap border-2 border-white">
                  <Wifi className="w-5 h-5 text-white" />
                  <span>ব্রডব্যান্ড ইন্টারনেট প্ল্যান</span>
                </div>
              </div>

              {/* 2 Side-by-Side Cards inside Broadband Container */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-3 h-full items-stretch">
                
                {/* 1. MEGHBELA BROADBAND CARD */}
                <div className="rounded-2xl border-2 border-[#42C83D]/40 bg-gradient-to-b from-white to-[#F0FFE9]/30 p-4 sm:p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all hover:border-[#087A24] relative">
                  <div>
                    {/* Green Title Banner */}
                    <div className="bg-[#087A24] text-white text-center py-1.5 px-3 rounded-full text-xs sm:text-sm font-bold tracking-tight shadow-2xs mb-3">
                      Meghbela Broadband
                    </div>

                    {/* Speed & Price Block */}
                    <div className="pb-3 border-b border-slate-100">
                      <div className="text-2xl sm:text-3xl font-black text-[#087A24] font-mono leading-none">
                        40 Mbps
                      </div>
                      <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono tracking-tight mt-1">
                        ₹3,499
                      </div>
                      <div className="text-[11px] font-bold text-[#087A24] mt-0.5">
                        (প্রাথমিক কানেকশন চার্জ)
                      </div>
                    </div>

                    {/* Bullet Points with Green Checkmarks */}
                    <div className="space-y-2 text-xs sm:text-sm text-slate-800 pt-3">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="font-semibold">40 Mbps ইন্টারনেট স্পিড</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="font-bold text-[#004D1A]">৩ মাসের রিচার্জ ফ্রি</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="font-semibold">নির্ভরযোগ্য সংযোগ</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="font-semibold">প্রতিদিনের কাজে উপযোগী</span>
                      </div>
                    </div>

                    {/* Partner Logo */}
                    <div className="pt-3 pb-1 flex justify-center">
                      <img
                        src="/extracted/card_meghbela_logo.png"
                        alt="Meghbela Broadband"
                        className="h-8 object-contain"
                      />
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-3">
                    <button
                      onClick={() => onSelectPlan('Meghbela Broadband')}
                      className="w-full bg-[#087A24] hover:bg-[#004D1A] text-white font-bold py-2.5 px-4 rounded-full text-xs sm:text-sm shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Meghbela নিন</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>

                {/* 2. ALLIANCE BROADBAND CARD */}
                <div className="rounded-2xl border-2 border-[#42C83D]/40 bg-gradient-to-b from-white to-[#F0FFE9]/30 p-4 sm:p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all hover:border-[#087A24] relative">
                  <div>
                    {/* Green Title Banner */}
                    <div className="bg-[#087A24] text-white text-center py-1.5 px-3 rounded-full text-xs sm:text-sm font-bold tracking-tight shadow-2xs mb-3">
                      Alliance Broadband
                    </div>

                    {/* Speed & Price Block */}
                    <div className="pb-3 border-b border-slate-100">
                      <div className="text-2xl sm:text-3xl font-black text-[#087A24] font-mono leading-none">
                        40 Mbps
                      </div>
                      <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono tracking-tight mt-1">
                        ₹3,499
                      </div>
                      <div className="text-[11px] font-bold text-[#087A24] mt-0.5">
                        (প্রাথমিক কানেকশন চার্জ)
                      </div>
                    </div>

                    {/* Bullet Points with Green Checkmarks */}
                    <div className="space-y-2 text-xs sm:text-sm text-slate-800 pt-3">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="font-semibold">40 Mbps ইন্টারনেট স্পিড</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="font-bold text-[#004D1A]">৩ মাসের রিচার্জ ফ্রি</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="font-semibold">নির্ভরযোগ্য সংযোগ</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="font-semibold">প্রতিদিনের কাজে উপযোগী</span>
                      </div>
                    </div>

                    {/* Partner Logo */}
                    <div className="pt-3 pb-1 flex justify-center">
                      <img
                        src="/extracted/card_alliance_logo.png"
                        alt="Alliance Broadband"
                        className="h-8 object-contain"
                      />
                    </div>
                  </div>

                  {/* Button */}
                  <div className="pt-3">
                    <button
                      onClick={() => onSelectPlan('Alliance Broadband')}
                      className="w-full bg-[#087A24] hover:bg-[#004D1A] text-white font-bold py-2.5 px-4 rounded-full text-xs sm:text-sm shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Alliance নিন</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
