import React, { useState } from 'react';
import { Tv, Check, Sparkles, ShieldCheck, Film, Trophy, Newspaper, Music, Smile, ArrowRight } from 'lucide-react';
import { LeafIcon, CornerLeaves } from './GrassDecorations';

interface CableTVPlansProps {
  onSelectPlan: (planName: string) => void;
}

export const CableTVPlans: React.FC<CableTVPlansProps> = ({ onSelectPlan }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const channelCategories = [
    { id: 'all', label: 'সকল চ্যানেল', count: '৩৫০+' },
    { id: 'bengali', label: 'বাংলা সিরিয়াল ও বিনোদন', count: '৪৫+', icon: Film },
    { id: 'sports', label: 'খেলাধুলা (Sports HD)', count: '২০+', icon: Trophy },
    { id: 'news', label: 'সংবাদ (News)', count: '৩৫+', icon: Newspaper },
    { id: 'movies', label: 'সিনেমা ও বিনোদন', count: '৫০+', icon: Film },
    { id: 'kids', label: 'বাচ্চাদের বিনোদন (Kids)', count: '১৫+', icon: Smile },
  ];

  const popularBengaliChannels = [
    'Star Jalsha',
    'Zee Bangla',
    'Colors Bangla',
    'Sony AATH',
    'Jalsha Movies',
    'Zee Bangla Cinema',
    'Star Sports 1 Bangla',
    'ABP Ananda',
    '24 Ghanta',
    'News18 Bangla',
    'Cartoon Network',
    'Pogo',
    'Discovery Bangla',
    'National Geographic',
  ];

  return (
    <section id="cable-tv" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Leaves */}
      <CornerLeaves position="top-right" className="opacity-30" />
      <CornerLeaves position="bottom-left" className="opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FFE9] text-[#087A24] border border-[#42C83D]/40 text-xs font-bold uppercase tracking-wider">
            <Tv className="w-3.5 h-3.5" />
            <span>Cable TV Connection Packages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#004D1A] tracking-tight">
            কেবল টিভি সংযোগের প্ল্যান
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            বাছাই করুন আপনার পরিবারের পছন্দের সেট-টপ বক্স সংযোগ। প্রতিটি নতুন সংযোগের সাথে পাচ্ছেন <strong className="text-[#087A24] font-bold">১ মাসের রিচার্জ সম্পূর্ণ ফ্রি!</strong>
          </p>
        </div>

        {/* 2 Main Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* CARD ONE: SD CABLE CONNECTION */}
          <div className="relative rounded-2xl bg-white border-2 border-slate-200 p-6 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 hover:border-[#42C83D] group">
            {/* Corner leaf accent */}
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-60 transition-opacity">
              <LeafIcon size={28} color="#087A24" />
            </div>

            <div>
              {/* Type Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold mb-4">
                <Tv className="w-3.5 h-3.5" />
                <span>Standard Definition</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#004D1A] transition-colors">
                SD কেবল সংযোগ
              </h3>

              <p className="text-xs text-slate-500 mt-1">
                সাশ্রয়ী ও নির্ভরযোগ্য দৈনন্দিন কেবল টিভি বিনোদন
              </p>

              {/* Price Block */}
              <div className="mt-6 mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#004D1A] font-mono tracking-tight">
                    ₹1,200
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ এককালীন</span>
                </div>
                <div className="mt-1 inline-block text-xs font-bold text-[#087A24] bg-[#F0FFE9] px-2.5 py-0.5 rounded border border-[#42C83D]/30">
                  প্রাথমিক কানেকশন চার্জ
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3.5 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F0FFE9] text-[#087A24] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-semibold text-slate-900">SD Set Top Box সংযোগ</span>
                </div>

                <div className="flex items-start gap-3 bg-[#F0FFE9]/60 p-2 rounded-lg border border-[#42C83D]/30">
                  <div className="w-5 h-5 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-bold text-[#004D1A]">১ মাসের Recharge FREE</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F0FFE9] text-[#087A24] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>সাশ্রয়ী কেবল টিভি বিনোদন</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F0FFE9] text-[#087A24] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>উপলব্ধ সকল জনপ্রিয় SD Channel দেখুন</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#F0FFE9] text-[#087A24] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-600">রিমোট কন্ট্রোল ও ক্যাবলিং ইনক্লুডেড</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-4">
              <button
                onClick={() => onSelectPlan('SD Cable Connection')}
                className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-[#004D1A] text-white font-bold text-sm tracking-wide transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>SD কানেকশন নিন</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CARD TWO: HD CABLE CONNECTION (Premium Highlighted) */}
          <div className="relative rounded-2xl bg-gradient-to-b from-[#F0FFE9]/50 via-white to-white border-2 border-[#087A24] p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 ring-4 ring-[#42C83D]/15 group">
            {/* HD EXPERIENCE Premium Badge */}
            <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#087A24] via-[#42C83D] to-[#087A24] text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-[#A8E65A]" />
              <span>HD EXPERIENCE</span>
              <Sparkles className="w-3.5 h-3.5 text-[#A8E65A]" />
            </div>

            {/* Corner leaf accent */}
            <div className="absolute top-4 right-4 opacity-40 group-hover:opacity-80 transition-opacity">
              <LeafIcon size={32} color="#087A24" />
            </div>

            <div>
              {/* Type Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#087A24] text-white text-xs font-bold mb-4 shadow-xs">
                <Tv className="w-3.5 h-3.5 text-[#A8E65A]" />
                <span>High Definition 1080p</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#004D1A] flex items-center gap-2">
                <span>HD কেবল সংযোগ</span>
                <span className="text-xs px-2 py-0.5 rounded bg-[#A8E65A] text-[#004D1A] font-extrabold uppercase">
                  জনপ্রিয়
                </span>
              </h3>

              <p className="text-xs text-slate-600 mt-1">
                সেরা ছবির মান, ক্রিস্টাল ক্লিয়ার অডিও ও প্রিমিয়াম বিনোদন
              </p>

              {/* Price Block */}
              <div className="mt-6 mb-6 pb-6 border-b border-[#42C83D]/20">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#087A24] font-mono tracking-tight">
                    ₹1,500
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ এককালীন</span>
                </div>
                <div className="mt-1 inline-block text-xs font-bold text-[#004D1A] bg-[#A8E65A]/40 px-2.5 py-0.5 rounded border border-[#087A24]/30">
                  প্রাথমিক কানেকশন চার্জ
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3.5 text-sm text-slate-800">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-bold text-slate-900">HD Set Top Box Included</span>
                </div>

                <div className="flex items-start gap-3 bg-[#F0FFE9] p-2.5 rounded-lg border border-[#42C83D]/40">
                  <div className="w-5 h-5 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-extrabold text-[#004D1A]">১ মাসের Recharge FREE</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-semibold text-slate-900">Crystal Clear HD Picture</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-semibold text-slate-900">জনপ্রিয় HD Channel উপভোগ করুন</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-700">HDMI কেবল, স্মার্ট রিমোট ও ফ্রি ইনস্টলেশন</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-4">
              <button
                onClick={() => onSelectPlan('HD Cable Connection')}
                className="w-full py-3.5 px-4 rounded-xl bg-[#087A24] hover:bg-[#004D1A] text-white font-bold text-sm tracking-wide btn-glow-green flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#A8E65A]" />
                <span>HD কানেকশন নিন</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Available Popular Channels Showcase Strip */}
        <div className="mt-14 max-w-4xl mx-auto bg-[#F0FFE9]/60 rounded-2xl border border-[#42C83D]/30 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#42C83D]/25">
            <div>
              <h4 className="text-lg font-bold text-[#004D1A]">
                উপলব্ধ জনপ্রিয় টিভি চ্যানেল ও বিনোদন
              </h4>
              <p className="text-xs text-slate-600">
                বাংলা, হিন্দি এবং আন্তর্জাতিক সব চ্যানেল আপনার ঘরের টিভিতে
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#087A24]">
              <ShieldCheck className="w-4 h-4" />
              <span>নিরাপদ ও নির্ভরযোগ্য সিগন্যাল</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {popularBengaliChannels.map((channel, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#42C83D]/30 text-xs font-bold text-slate-800 shadow-2xs hover:border-[#087A24] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#087A24]" />
                {channel}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
