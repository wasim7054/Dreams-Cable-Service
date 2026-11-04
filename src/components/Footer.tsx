import React from 'react';
import { Phone, MessageCircle, Home, Tv, Wifi, Info, Headphones } from 'lucide-react';
import { GrassBorder } from './GrassDecorations';

interface FooterProps {
  onNavigate: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="contact" className="bg-[#003811] text-white relative pt-8 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-6 items-start">
          
          {/* 1. Left Brand Info */}
          <div className="lg:col-span-4 space-y-2">
            <div className="flex items-center gap-2.5">
              <img
                src="/extracted/logo_emblem.png"
                alt="Dream's Logo"
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Dream's
                </div>
                <div className="text-xs sm:text-sm font-bold text-white tracking-tight">
                  Cable and Broadband Service
                </div>
              </div>
            </div>

            <div className="text-xs sm:text-sm font-serif italic font-semibold text-amber-400 pt-1">
              Your Trusted Cable TV & Broadband Connection Partner.
            </div>
          </div>

          {/* 2. Middle-Left: যোগাযোগ করুন */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-sm font-bold text-white tracking-wide">
              যোগাযোগ করুন
            </h4>

            {/* Direct Phone */}
            <a
              href="tel:+919593127054"
              className="flex items-center gap-2.5 text-white hover:text-[#A8E65A] transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-[#087A24] flex items-center justify-center text-white shrink-0 group-hover:bg-[#42C83D] transition-colors">
                <Phone className="w-4 h-4 fill-white" />
              </div>
              <span className="text-base sm:text-lg font-black font-mono tracking-tight">
                9593127054
              </span>
            </a>

            {/* WhatsApp Pill Button */}
            <div className="pt-1">
              <a
                href="https://wa.me/919593127054"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp-এ মেসেজ করুন</span>
              </a>
            </div>
          </div>

          {/* 3. Middle-Right: দ্রুত লিংক */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="text-sm font-bold text-white tracking-wide">
              দ্রুত লিংক
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-100 font-medium">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#A8E65A] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>হোম</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('cable-tv')}
                  className="hover:text-[#A8E65A] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Tv className="w-3.5 h-3.5" />
                  <span>কেবল টিভি</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('broadband')}
                  className="hover:text-[#A8E65A] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Wifi className="w-3.5 h-3.5" />
                  <span>ব্রডব্যান্ড</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#A8E65A] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>আমাদের সম্পর্কে</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#A8E65A] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Headphones className="w-3.5 h-3.5" />
                  <span>যোগাযোগ</span>
                </button>
              </li>
            </ul>
          </div>

          {/* 4. Right: Copyright */}
          <div className="lg:col-span-3 space-y-2 text-xs sm:text-sm text-emerald-200 lg:text-right">
            <p className="leading-relaxed">
              © 2026 Dream's Cable and Broadband Service.
              <br />
              All Rights Reserved.
            </p>
            <p className="text-[11px] text-emerald-300/80 pt-1">
              অপারেটর: <strong>WASIM AKRAM MONDAL</strong>
            </p>
          </div>

        </div>

      </div>

      {/* Lush Green Grass Blades at the very bottom border */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <GrassBorder position="bottom" fillColor="#087A24" accentColor="#42C83D" />
      </div>
    </footer>
  );
};
