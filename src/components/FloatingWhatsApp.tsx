import React, { useState } from 'react';
import { MessageCircle, X, Send, Phone } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultGreeting = encodeURIComponent(
    "নমস্কার Dream's Cable and Broadband Service, আমি একটি নতুন কানেকশন সম্পর্কে জানতে চাই।"
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="mb-2 bg-white rounded-2xl shadow-2xl border-2 border-[#42C83D] p-3.5 max-w-[240px] text-xs text-slate-800 animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-slate-400 hover:text-slate-700 p-0.5 rounded-full"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
            <span className="font-bold text-[#004D1A]">অনলাইন আছি • Wasim Akram</span>
          </div>

          <p className="text-[11px] text-slate-600 leading-tight">
            কেবল টিভি বা ফাইবার ইন্টারনেট কানেকশন সম্পর্কে সরাসরি কথা বলুন!
          </p>

          <a
            href={`https://wa.me/919593127054?text=${defaultGreeting}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-center py-1.5 px-3 rounded-lg bg-[#25D366] text-white font-bold text-[11px] hover:bg-[#128C7E] transition-colors"
          >
            মেসেজ করুন / Chat Now
          </a>
        </div>
      )}

      {/* Floating Action WhatsApp Button */}
      <a
        href={`https://wa.me/919593127054?text=${defaultGreeting}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
        aria-label="Chat on WhatsApp with Operator Wasim Akram Mondal"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold text-white">
          1
        </span>
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </div>
  );
};
