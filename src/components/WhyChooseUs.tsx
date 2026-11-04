import React from 'react';
import { ShieldCheck, Zap, CircleDollarSign, Headphones } from 'lucide-react';
import { LeafIcon } from './GrassDecorations';

export const WhyChooseUs: React.FC = () => {
  const cards = [
    {
      titleBn: 'বিশ্বস্ত পরিষেবা',
      titleEn: '( Reliable Service )',
      icon: ShieldCheck,
    },
    {
      titleBn: 'দ্রুতগতির ইন্টারনেট',
      titleEn: '( High-Speed Internet )',
      icon: Zap,
    },
    {
      titleBn: 'সাশ্রয়ী অফার',
      titleEn: '( Affordable Price )',
      icon: CircleDollarSign,
    },
    {
      titleBn: 'বন্ধুত্বপূর্ণ সাপোর্ট',
      titleEn: '( Friendly Support )',
      icon: Headphones,
    },
  ];

  return (
    <section className="py-6 sm:py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Center Pill Header with Green Leaves flanking left & right */}
        <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
          <div className="transform -scale-x-100 hidden sm:block">
            <LeafIcon size={28} color="#087A24" />
          </div>

          <div className="bg-[#087A24] text-white px-6 sm:px-8 py-2 rounded-full font-black text-sm sm:text-base shadow-md border-2 border-white">
            কেন আমাদের বেছে নেবেন?
          </div>

          <div className="hidden sm:block">
            <LeafIcon size={28} color="#087A24" />
          </div>
        </div>

        {/* 4 White Rounded Cards in a single row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-white shadow-md hover:shadow-lg transition-all flex items-center gap-3.5 hover:border-[#42C83D]"
              >
                {/* Green Circle Icon */}
                <div className="w-11 h-11 rounded-full bg-[#087A24] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </div>

                {/* Text Block */}
                <div className="text-left">
                  <div className="text-base sm:text-lg font-black text-[#004D1A] leading-tight">
                    {card.titleBn}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
                    {card.titleEn}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
