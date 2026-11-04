import React, { useState } from 'react';
import { Wifi, Check, Zap, ArrowRight, ShieldCheck, Download, Upload, Laptop, Smartphone, Gamepad2, Info } from 'lucide-react';
import { LeafIcon, CornerLeaves } from './GrassDecorations';

interface BroadbandPlansProps {
  onSelectPlan: (planName: string) => void;
}

export const BroadbandPlans: React.FC<BroadbandPlansProps> = ({ onSelectPlan }) => {
  const [activeSpeedTab, setActiveSpeedTab] = useState<'streaming' | 'work' | 'gaming'>('streaming');

  return (
    <section id="broadband" className="py-16 md:py-24 bg-gradient-to-b from-[#F0FFE9]/40 via-white to-[#F0FFE9]/30 relative overflow-hidden">
      {/* Background Leaves */}
      <CornerLeaves position="top-left" className="opacity-40" />
      <CornerLeaves position="bottom-right" className="opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#087A24] border border-[#42C83D]/40 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Wifi className="w-3.5 h-3.5" />
            <span>High Speed Optical Fiber Broadband</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#004D1A] tracking-tight">
            ব্রডব্যান্ড ইন্টারনেট প্ল্যান
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Meghbela ও Alliance Broadband-এর উচ্চগতির ফাইবার সংযোগ। নির্বিঘ্ন ব্রাউজিং, ভিডিও স্ট্রিমিং ও দৈনন্দিন কাজের জন্য আদর্শ।
          </p>
        </div>

        {/* Highlight Banner on Free 3 Months */}
        <div className="max-w-3xl mx-auto mb-10 bg-white border-2 border-[#42C83D] rounded-2xl p-4 sm:p-5 shadow-sm flex items-start gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-[#087A24] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
            <Info className="w-5 h-5" />
          </div>
          <div className="text-sm">
            <strong className="text-[#004D1A] font-extrabold text-base block mb-0.5">
              গুরুত্বপূর্ণ অফার বিবরণ (Important Offer Details):
            </strong>
            <p className="text-slate-700 leading-relaxed">
              <span className="font-bold text-[#087A24]">₹৩,৪৯৯</span> হলো প্রাথমিক কানেকশন চার্জ (Initial Connection Charge)। 
              এই সংযোগের সাথে পাচ্ছেন <strong className="text-[#004D1A] bg-[#A8E65A]/40 px-2 py-0.5 rounded">প্রথম ৩ মাসের রিচার্জ সম্পূর্ণ FREE!</strong> অর্থাৎ প্রথম ৯০ দিন ইন্টারনেটের জন্য কোনো অতিরিক্ত রিচার্জ দিতে হবে না।
            </p>
          </div>
        </div>

        {/* 2 Main Broadband Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">

          {/* CARD ONE: MEGHBELA BROADBAND */}
          <div className="relative rounded-2xl bg-white border-2 border-[#42C83D]/50 p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-[#087A24] group">
            {/* Top leaf accent */}
            <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-75 transition-opacity">
              <LeafIcon size={30} color="#087A24" />
            </div>

            <div>
              {/* Network Provider Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F0FFE9] text-[#004D1A] border border-[#42C83D]/40 text-xs font-bold mb-4">
                <Wifi className="w-3.5 h-3.5 text-[#087A24]" />
                <span>Meghbela Broadband Network</span>
              </div>

              {/* Provider Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#004D1A] group-hover:text-[#087A24] transition-colors">
                Meghbela Broadband
              </h3>

              <div className="mt-2 flex items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 font-bold">
                  ফাইবার অপটিক
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  আনলিমিটেড ডাটা
                </span>
              </div>

              {/* Speed Metric */}
              <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-[#F0FFE9] to-white border border-[#42C83D]/30 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">স্পিড / Speed</div>
                  <div className="text-3xl font-black text-[#087A24] font-mono">40 Mbps</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-slate-700">সিমেট্রিক স্পিড</div>
                  <div className="text-[11px] text-slate-500">ডাউনলোড + আপলোড</div>
                </div>
              </div>

              {/* Price Block */}
              <div className="mt-6 mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#004D1A] font-mono tracking-tight">
                    ₹3,499
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ এককালীন</span>
                </div>
                <div className="mt-1.5 inline-block text-xs font-bold text-[#087A24] bg-[#F0FFE9] px-2.5 py-0.5 rounded border border-[#42C83D]/40">
                  প্রাথমিক কানেকশন চার্জ
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3.5 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-bold text-slate-900">40 Mbps Internet Speed</span>
                </div>

                <div className="flex items-start gap-3 bg-[#F0FFE9] p-2.5 rounded-lg border border-[#42C83D]/40">
                  <div className="w-5 h-5 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-extrabold text-[#004D1A]">৩ মাসের Recharge FREE</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-medium text-slate-800">নির্ভরযোগ্য সংযোগ (99.9% আপটাইম)</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>প্রতিদিনের কাজে উপযোগী (Work & Streaming)</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-600">ওয়াইফাই রাউটার সেটআপ ও ওয়্যারিং অন্তর্ভুক্ত</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-4">
              <button
                onClick={() => onSelectPlan('Meghbela Broadband')}
                className="w-full py-3.5 px-4 rounded-xl bg-[#087A24] hover:bg-[#004D1A] text-white font-bold text-sm tracking-wide btn-glow-green flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Meghbela নিন</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CARD TWO: ALLIANCE BROADBAND */}
          <div className="relative rounded-2xl bg-white border-2 border-[#42C83D]/50 p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-[#087A24] group">
            {/* Top leaf accent */}
            <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-75 transition-opacity">
              <LeafIcon size={30} color="#087A24" />
            </div>

            <div>
              {/* Network Provider Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F0FFE9] text-[#004D1A] border border-[#42C83D]/40 text-xs font-bold mb-4">
                <Wifi className="w-3.5 h-3.5 text-[#087A24]" />
                <span>Alliance Broadband Network</span>
              </div>

              {/* Provider Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#004D1A] group-hover:text-[#087A24] transition-colors">
                Alliance Broadband
              </h3>

              <div className="mt-2 flex items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 font-bold">
                  ফাইবার অপটিক
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  আনলিমিটেড ডাটা
                </span>
              </div>

              {/* Speed Metric */}
              <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-[#F0FFE9] to-white border border-[#42C83D]/30 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">স্পিড / Speed</div>
                  <div className="text-3xl font-black text-[#087A24] font-mono">40 Mbps</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-slate-700">সিমেট্রিক স্পিড</div>
                  <div className="text-[11px] text-slate-500">ডাউনলোড + আপলোড</div>
                </div>
              </div>

              {/* Price Block */}
              <div className="mt-6 mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#004D1A] font-mono tracking-tight">
                    ₹3,499
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ এককালীন</span>
                </div>
                <div className="mt-1.5 inline-block text-xs font-bold text-[#087A24] bg-[#F0FFE9] px-2.5 py-0.5 rounded border border-[#42C83D]/40">
                  প্রাথমিক কানেকশন চার্জ
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3.5 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-bold text-slate-900">40 Mbps Internet Speed</span>
                </div>

                <div className="flex items-start gap-3 bg-[#F0FFE9] p-2.5 rounded-lg border border-[#42C83D]/40">
                  <div className="w-5 h-5 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-extrabold text-[#004D1A]">৩ মাসের Recharge FREE</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-medium text-slate-800">নির্ভরযোগ্য সংযোগ (লো-পিং ও স্থিতিশীল)</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>প্রতিদিনের কাজে উপযোগী (Work & Entertainment)</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-600">অপটিক্যাল ফাইবার ড্রপ ও রাউটার সাপোর্ট</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-4">
              <button
                onClick={() => onSelectPlan('Alliance Broadband')}
                className="w-full py-3.5 px-4 rounded-xl bg-[#087A24] hover:bg-[#004D1A] text-white font-bold text-sm tracking-wide btn-glow-green flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Alliance নিন</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Speed Experience Explainer (What 40 Mbps enables) */}
        <div className="mt-14 max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h4 className="text-lg font-bold text-[#004D1A] mb-4 text-center sm:text-left">
            40 Mbps স্পিডে আপনি যা যা স্বাচ্ছন্দ্যে করতে পারবেন:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#F0FFE9] border border-[#42C83D]/30 flex flex-col items-center text-center">
              <Laptop className="w-8 h-8 text-[#087A24] mb-2" />
              <div className="font-bold text-sm text-slate-900">ওয়ার্ক ফ্রম হোম ও অনলাইন ক্লাস</div>
              <div className="text-xs text-slate-600 mt-1">
                Zoom, Google Meet এবং ফাইল ডাউনলোডে কোনো বাফারিং ছাড়া
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F0FFE9] border border-[#42C83D]/30 flex flex-col items-center text-center">
              <Smartphone className="w-8 h-8 text-[#087A24] mb-2" />
              <div className="font-bold text-sm text-slate-900">একসাথে ৫+ ডিভাইসে কানেকশন</div>
              <div className="text-xs text-slate-600 mt-1">
                মোবাইল, ল্যাপটপ, ট্যাবলেট ও স্মার্ট টিভিতে একই সাথে দ্রুতগতির নেট
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F0FFE9] border border-[#42C83D]/30 flex flex-col items-center text-center">
              <Gamepad2 className="w-8 h-8 text-[#087A24] mb-2" />
              <div className="font-bold text-sm text-slate-900">4K স্ট্রিমিং ও দ্রুত গেমিং</div>
              <div className="text-xs text-slate-600 mt-1">
                YouTube, OTT প্ল্যাটফর্ম এবং সোশ্যাল মিডিয়ায় নিরবচ্ছিন্ন আনন্দ
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
