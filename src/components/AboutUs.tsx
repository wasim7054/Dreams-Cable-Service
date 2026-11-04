import React from 'react';
import { User, Phone, CheckCircle2, Shield, Radio, Wifi, Home, Award } from 'lucide-react';
import { LeafIcon, CornerLeaves, GrassBorder } from './GrassDecorations';

export const AboutUs: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Corner decorations */}
      <CornerLeaves position="top-right" className="opacity-30" />
      <CornerLeaves position="bottom-left" className="opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Visual: Connectivity & Local Operator Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-[#004D1A] via-[#087A24] to-[#004D1A] text-white p-6 sm:p-8 shadow-2xl overflow-hidden border-2 border-[#42C83D]/40">
              {/* Background circular decorative radio waves */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-white/10 pointer-events-none" />
              <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full border border-white/15 pointer-events-none" />
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full border border-white/20 pointer-events-none" />

              {/* Operator Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur border border-white/20 text-xs font-semibold mb-6">
                <User className="w-3.5 h-3.5 text-[#A8E65A]" />
                <span>স্থানীয় অপারেটর ও পরিচালক</span>
              </div>

              {/* Operator Name */}
              <div className="space-y-1 mb-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  WASIM AKRAM MONDAL
                </h3>
                <p className="text-xs sm:text-sm text-emerald-200 font-medium">
                  ওয়াসিম আকরাম মণ্ডল
                </p>
                <div className="text-xs text-[#A8E65A] font-semibold mt-1">
                  Dream's Cable and Broadband Service
                </div>
              </div>

              {/* Key Trust Highlights */}
              <div className="space-y-3.5 pt-4 border-t border-white/15 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center text-[#A8E65A] shrink-0">
                    <Radio className="w-4 h-4" />
                  </div>
                  <span>স্যাটেলাইট ও ফাইবার ব্যাকবোন কেবল ডিস্ট্রিবিউশন</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center text-[#A8E65A] shrink-0">
                    <Wifi className="w-4 h-4" />
                  </div>
                  <span>Meghbela ও Alliance হাই-স্পিড রাউটার সেটআপ</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center text-[#A8E65A] shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <span>১০০% গ্রাহক সন্তুষ্টি ও দ্রুত সমাধান অঙ্গীকার</span>
                </div>
              </div>

              {/* Direct Call Button on Operator Card */}
              <div className="mt-8 pt-4 border-t border-white/15">
                <a
                  href="tel:+919593127054"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-[#004D1A] font-bold text-xs tracking-wider shadow-md hover:bg-[#F0FFE9] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#087A24]" />
                  <span>সরাসরি কল করুন: 9593127054</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0FFE9] text-[#087A24] border border-[#42C83D]/40 text-xs font-bold uppercase tracking-wider">
              <LeafIcon size={16} color="#087A24" />
              <span>আমাদের সম্পর্কে / About Us</span>
            </div>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#004D1A] leading-tight">
              আপনার ঘরেই নিয়ে আসছি মনোরম Cable TV ও Broadband Internet!
            </h2>

            {/* Exact Bengali Description Requested */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Dream's Cable and Broadband Service আপনাদের ঘরে নিয়ে আসছে মানসম্মত Cable TV ও Broadband Internet পরিষেবা। আমরা Meghbela এবং Alliance Broadband-এর মাধ্যমে নির্ভরযোগ্য কানেকশন পরিষেবা প্রদান করি। আমাদের লক্ষ্য হলো গ্রাহকদের সহজ, সাশ্রয়ী এবং ভালো পরিষেবা প্রদান করা।
            </p>

            {/* Additional Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F0FFE9] border border-[#42C83D]/30">
                <div className="font-bold text-[#004D1A] text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#087A24]" />
                  <span>তাত্ক্ষণিক নতুন সংযোগ</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  বুকিং করার অল্প সময়ের মধ্যেই আমাদের টেকনিশিয়ান আপনার বাড়িতে পৌঁছে লাইন ইনস্টল করবেন।
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F0FFE9] border border-[#42C83D]/30">
                <div className="font-bold text-[#004D1A] text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#087A24]" />
                  <span>স্বচ্ছ মূল্য তালিকা</span>
                </div>
                <p className="text-xs text-slate-600 mt-1">
                  কেবল টিভিতে ১ মাস ও ব্রডব্যান্ডে ৩ মাস রিচার্জ ফ্রি। কোনো লুকানো চার্জ বা জটিলতা নেই।
                </p>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onContactClick}
                className="px-6 py-3 rounded-xl bg-[#087A24] hover:bg-[#004D1A] text-white font-bold text-xs tracking-wider transition-all btn-glow-green cursor-pointer"
              >
                যোগাযোগের তথ্য দেখুন
              </button>
              <div className="text-xs text-slate-500">
                অপারেটর: <strong className="text-[#004D1A]">WASIM AKRAM MONDAL</strong>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
