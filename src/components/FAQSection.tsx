import React, { useState } from 'react';
import { ChevronDown, HelpCircle, CheckCircle2 } from 'lucide-react';
import { LeafIcon, CornerLeaves } from './GrassDecorations';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'নতুন কানেকশন বুকিং করার পর কত সময়ের মধ্যে ইনস্টলেশন হয়?',
      a: 'সাধারণত বুকিং সম্পন্ন হওয়ার ১২ থেকে ২৪ ঘণ্টার মধ্যে আমাদের অভিজ্ঞ টেকনিশিয়ান আপনার বাড়িতে পৌঁছে সম্পূর্ণ লাইন ওয়্যারিং, সেট-টপ বক্স অথবা ওয়াইফাই রাউটার সংযোগ সম্পন্ন করবেন।',
    },
    {
      q: 'ব্রডব্যান্ডের ₹৩,৪৯৯ প্ল্যানে ৩ মাসের ফ্রি রিচার্জ কীভাবে কাজ করে?',
      a: '₹৩,৪৯৯ হলো সম্পূর্ণ প্রাথমিক কানেকশন চার্জ (অপটিক্যাল ফাইবার ড্রপ, রাউটার ইন্সটলেশন ও কনফিগারেশন)। এর সাথে প্রথম ৯০ দিন (৩ মাস) আপনি 40 Mbps হাই-স্পিড ইন্টারনেট সম্পূর্ণ বিনামূল্যে উপভোগ করবেন। প্রথম ৩ মাস কোনো রিচার্জ পেমেন্ট করতে হবে না।',
    },
    {
      q: 'কেবল টিভি সংযোগের সাথে কি সেট-টপ বক্স এবং রিমোট পাওয়া যাবে?',
      a: 'হ্যাঁ! SD সংযোগে ₹১,২০০ এবং HD সংযোগে ₹১,৫০০ এককালীন চার্জে আপনি পাবেন ডিজিটাল সেট-টপ বক্স, অরিজিনাল রিমোট কন্ট্রোল, প্রয়োজনীয় ক্যাবল এবং সাথে ১ মাসের ফ্রি রিচার্জ।',
    },
    {
      q: 'নতুন সংযোগ নেওয়ার জন্য গ্রাহকের কি কি ডকুমেন্টস প্রয়োজন?',
      a: 'কেবলমাত্র গ্রাহকের যেকোনো একটি বৈধ সরকারি পরিচয়পত্র (যেমন: আধার কার্ড বা ভোটার কার্ড) এবং সক্রিয় মোবাইল নম্বর প্রয়োজন হয়।',
    },
    {
      q: 'খারাপ আবহাওয়া বা ঝড়ে কি সংযোগ বিচ্ছিন্ন হওয়ার ভয় থাকে?',
      a: 'আমাদের ব্যবহৃত Meghbela ও Alliance নেটওয়ার্ক আধুনিক আন্ডারগ্রাউন্ড ও শক্তসমর্থ অপটিক্যাল ফাইবার টেকনোলজির ওপর তৈরি। তাই সাধারণ বৃষ্টির দিনেও সিগন্যাল ক্রিস্টাল ক্লিয়ার এবং নিরবচ্ছিন্ন থাকে।',
    },
    {
      q: 'যেকোনো কারিগরি সমস্যা বা রিচার্জ সংক্রান্ত সহায়তায় কার সাথে কথা বলব?',
      a: 'আপনি সরাসরি আমাদের অপারেটর ওয়াসিম আকরাম মণ্ডল (WASIM AKRAM MONDAL)-এর সাথে ৯৫৯৩১-২৭০৫৪ (9593127054) নম্বরে কল করতে পারেন অথবা WhatsApp-এ মেসেজ পাঠাতে পারেন। আমাদের লোকাল টিম দ্রুত সেবা প্রদানে প্রতিশ্রুতিবদ্ধ।',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#F0FFE9]/40 relative overflow-hidden">
      <CornerLeaves position="top-left" className="opacity-30" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#087A24] border border-[#42C83D]/40 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>সচরাচর জিজ্ঞাসিত প্রশ্নাবলী / FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004D1A] tracking-tight">
            সাধারণ প্রশ্ন ও উত্তর
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            আপনার সুবিধা ও পরিষ্কার ধারণার জন্য কিছু সাধারণ তথ্যের উত্তর নিচে দেওয়া হলো।
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#42C83D]/30 overflow-hidden shadow-2xs transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#087A24] transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#087A24] shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#087A24] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-700 text-sm border-t border-slate-100 bg-[#F0FFE9]/20 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
