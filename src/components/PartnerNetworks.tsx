import React from 'react';
import { Tv, Wifi, CheckCircle2, ShieldCheck, Network, ExternalLink } from 'lucide-react';
import { LeafIcon, CornerLeaves } from './GrassDecorations';

export const PartnerNetworks: React.FC<{ onBookService: (service: string) => void }> = ({
  onBookService,
}) => {
  const partners = [
    {
      name: 'Meghbela Cable',
      categoryBn: 'ডিজিটাল কেবল টিভি নেটওয়ার্ক',
      categoryEn: 'Digital Cable TV Partner',
      badge: 'পূর্ব ভারতের অগ্রণী কেবল টিভি',
      features: [
        '৩৫০+ জাতীয় ও আঞ্চলিক চ্যানেল',
        'উচ্চমানের ক্রিস্টাল ক্লিয়ার অডিও-ভিডিও',
        'বাংলা সিরিয়াল ও বিনোদনের সেরা চ্যানেলসমূহ',
        'স্থানীয় সেট-টপ বক্স রক্ষণাবেক্ষণ',
      ],
      icon: Tv,
      color: 'from-[#087A24] to-[#004D1A]',
      serviceSelection: 'HD Cable Connection',
    },
    {
      name: 'Meghbela Broadband',
      categoryBn: 'হাই-স্পিড অপটিক্যাল ফাইবার নেটওয়ার্ক',
      categoryEn: 'High-Speed FTTH Fiber Partner',
      badge: 'হাই-স্পিড ইন্টারনেট ব্যাকবোন',
      features: [
        'উচ্চগতির নিরবচ্ছিন্ন 40 Mbps ব্যান্ডউইথ',
        'আল্ট্রা-লো লেটেন্সি গেমিং ও মিটিং ফ্রেন্ডলি',
        '৩ মাসের প্রাক-অর্থপ্রদত্ত ফ্রি রিচার্জ',
        'দ্রুত ও নিরবচ্ছিন্ন গ্রাহক সহায়তা',
      ],
      icon: Wifi,
      color: 'from-[#004D1A] to-[#087A24]',
      serviceSelection: 'Meghbela Broadband',
    },
    {
      name: 'Alliance Broadband',
      categoryBn: 'প্রিমিয়াম গিগাবিট ব্রডব্যান্ড',
      categoryEn: 'High-Performance Broadband Partner',
      badge: 'পশ্চিমবঙ্গের অত্যন্ত জনপ্রিয় ফাইবার',
      features: [
        'দৃঢ় ও নির্ভরযোগ্য অপটিক্যাল ফাইবার লাইন',
        'স্মুথ 4K ভিডিও এবং ওটিটি (OTT) স্ট্রিমিং',
        '৩ মাসের ফ্রি রিচার্জের সুবর্ণ সুযোগ',
        'শক্তিশালী নেটওয়ার্ক ইনফ্রাস্ট্রাকচার',
      ],
      icon: Network,
      color: 'from-[#087A24] to-[#42C83D]',
      serviceSelection: 'Alliance Broadband',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F0FFE9]/50 relative overflow-hidden">
      {/* Nature Accents */}
      <CornerLeaves position="top-left" className="opacity-40" />
      <CornerLeaves position="bottom-right" className="opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#087A24] border border-[#42C83D]/40 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Authorized Network Partners</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#004D1A] tracking-tight">
            আমাদের পার্টনার নেটওয়ার্ক
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            আমরা পূর্ব ভারতের শীর্ষস্থানীয় ও সর্বাধিক নির্ভরযোগ্য ব্রডব্যান্ড এবং কেবল নেটওয়ার্কের সরাসরি অনুমোদিত অংশীদার।
          </p>
        </div>

        {/* 3 Partner Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border-2 border-[#42C83D]/40 p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-[#087A24] group"
              >
                <div>
                  {/* Top Branding Block */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#087A24] to-[#004D1A] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-[#A8E65A]" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#F0FFE9] text-[#004D1A] border border-[#42C83D]/30">
                      {partner.badge}
                    </span>
                  </div>

                  {/* Partner Name in Bold Typography */}
                  <h3 className="text-2xl font-black text-[#004D1A] tracking-tight">
                    {partner.name}
                  </h3>

                  <div className="text-xs font-bold text-[#087A24] mt-0.5">
                    {partner.categoryBn}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                    {partner.categoryEn}
                  </div>

                  <div className="h-px bg-slate-100 my-5" />

                  {/* Partner Features */}
                  <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                    {partner.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#087A24] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onBookService(partner.serviceSelection)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-[#087A24] text-[#004D1A] hover:text-white border border-[#42C83D]/40 font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:bg-[#087A24] group-hover:text-white"
                  >
                    <span>কানেকশন চেক ও বুক করুন</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
