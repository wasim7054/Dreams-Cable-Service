import React from 'react';
import { Phone, MessageCircle, Clock, MapPin, User, ShieldCheck, Mail, Send } from 'lucide-react';
import { LeafIcon, CornerLeaves, GrassBorder } from './GrassDecorations';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Corner leaves */}
      <CornerLeaves position="top-right" className="opacity-30" />
      <CornerLeaves position="bottom-left" className="opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0FFE9] text-[#087A24] border border-[#42C83D]/40 text-xs font-bold uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#004D1A] tracking-tight">
            যোগাযোগ করুন
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            নতুন কেবল টিভি বা ব্রডব্যান্ড কানেকশন, রিচার্জ তথ্য অথবা যেকোনো কারিগরি সহায়তার জন্য সরাসরি যোগাযোগ করুন।
          </p>
        </div>

        {/* Contact Info Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#F0FFE9] to-white rounded-3xl border-2 border-[#42C83D]/40 p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          {/* Top Decorative Grass Element */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20 pointer-events-none">
            <LeafIcon size={120} color="#087A24" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Left Contact Details */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#087A24]">
                  ব্যবসা প্রতিষ্ঠান / Business
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#004D1A] mt-1">
                  Dream's Cable and Broadband Service
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">
                  Meghbela Cable • Meghbela Broadband • Alliance Broadband
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-[#42C83D]/25 shadow-2xs">
                  <div className="w-10 h-10 rounded-lg bg-[#087A24] text-white flex items-center justify-center shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">অপারেটর / Operator</div>
                    <div className="text-base font-extrabold text-[#004D1A]">
                      WASIM AKRAM MONDAL
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-[#42C83D]/25 shadow-2xs">
                  <div className="w-10 h-10 rounded-lg bg-[#087A24] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">সরাসরি ফোন নম্বর / Helpline</div>
                    <div className="text-base font-bold text-slate-900 font-mono">
                      9593127054
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-[#42C83D]/25 shadow-2xs">
                  <div className="w-10 h-10 rounded-lg bg-[#087A24] text-white flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-semibold">পরিষেবা সময়সূচী</div>
                    <div className="text-sm font-bold text-slate-800">
                      সকাল ৮:০০টা - রাত ১০:০০টা (প্রতিদিন খোলা)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Action Callouts */}
            <div className="bg-white rounded-2xl border border-[#42C83D]/30 p-6 sm:p-8 shadow-sm flex flex-col justify-center space-y-4 text-center">
              <div className="w-14 h-14 rounded-full bg-[#F0FFE9] text-[#087A24] border border-[#42C83D]/40 flex items-center justify-center mx-auto mb-1">
                <ShieldCheck className="w-7 h-7" />
              </div>

              <h4 className="text-xl font-bold text-[#004D1A]">
                আমরা দ্রুত উত্তর দিতে প্রস্তুত
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed">
                আপনার এলাকার সংযোগ যোগ্যতা যাচাই করতে এবং ইনস্টলেশন কনফার্ম করতে এখনই কল করুন অথবা WhatsApp করুন।
              </p>

              {/* Exact Required Buttons & Links */}
              <div className="space-y-3 pt-2">
                <a
                  href="tel:+919593127054"
                  className="w-full py-3 px-4 rounded-xl bg-[#087A24] hover:bg-[#004D1A] text-white font-bold text-sm tracking-wide transition-all btn-glow-green flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>এখনই কল করুন</span>
                </a>

                <a
                  href="https://wa.me/919593127054"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp-এ মেসেজ করুন</span>
                </a>
              </div>

              <div className="pt-2 text-[11px] text-slate-500">
                হোয়াটসঅ্যাপ নম্বর: <strong className="font-mono text-slate-800">+91 9593127054</strong>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
