import React, { useState } from 'react';
import { Phone, MessageCircle, Home, Tv, Wifi, Info, Headphones, ArrowRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  onBookClick: () => void;
  onNavigate: (id: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick, onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'হোম', icon: Home },
    { id: 'cable-tv', label: 'কেবল টিভি', icon: Tv },
    { id: 'broadband', label: 'ব্রডব্যান্ড', icon: Wifi },
    { id: 'about', label: 'আমাদের সম্পর্কে', icon: Info },
    { id: 'contact', label: 'যোগাযোগ', icon: Headphones },
  ];

  return (
    <header className="w-full bg-white relative z-50 shadow-sm border-b border-slate-100">
      {/* Top White Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3 sm:gap-6">
        
        {/* Left: Brand Logo & Taglines */}
        <div className="flex items-center gap-3">
          <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate('home'); }} className="flex items-center gap-2.5 group">
            <img
              src="/extracted/logo_emblem.png"
              alt="Dream's Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0 group-hover:scale-105 transition-transform"
              onError={(e) => {
                // Fallback SVG if image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col text-left">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-black text-[#087A24] tracking-tight font-sans">
                  Dream's
                </span>
              </div>
              <span className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight -mt-0.5">
                Cable and Broadband Service
              </span>
              <span className="text-[10px] sm:text-[11px] font-serif italic font-semibold text-amber-600 tracking-tight leading-tight">
                Your Trusted Cable TV & Broadband Connection Partner.
              </span>
            </div>
          </a>
        </div>

        {/* Middle: Operator Divider & Name (Hidden on small screens) */}
        <div className="hidden xl:flex items-center gap-3 pl-2 border-l-2 border-slate-300 py-1">
          <div className="text-left leading-tight">
            <div className="text-[11px] text-slate-700 font-semibold">অপারেটর :</div>
            <div className="text-xs font-black text-slate-900 tracking-wider">
              WASIM AKRAM MONDAL
            </div>
          </div>
        </div>

        {/* Right Contacts & Booking CTA */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          
          {/* Call Us Button */}
          <a
            href="tel:+919593127054"
            className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full hover:bg-slate-50 transition-colors group"
            title="কল করুন 9593127054"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#087A24] flex items-center justify-center text-white shadow-sm group-hover:bg-[#004D1A] transition-colors">
              <Phone className="w-4 h-4 fill-white" />
            </div>
            <div className="hidden md:block text-left leading-tight">
              <div className="text-xs sm:text-sm font-black text-slate-900 font-mono tracking-tight">
                9593127054
              </div>
              <div className="text-[10px] text-slate-500 font-bold">(Call Us)</div>
            </div>
          </a>

          {/* WhatsApp Chat Button */}
          <a
            href="https://wa.me/919593127054"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full hover:bg-slate-50 transition-colors group"
            title="হোয়াটসঅ্যাপে চ্যাট করুন"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm group-hover:bg-[#128C7E] transition-colors">
              <MessageCircle className="w-4 h-4 fill-white" />
            </div>
            <div className="hidden md:block text-left leading-tight">
              <div className="text-xs sm:text-sm font-black text-slate-900">
                WhatsApp
              </div>
              <div className="text-[10px] text-slate-500 font-bold">Chat</div>
            </div>
          </a>

          {/* Primary Pill Booking CTA */}
          <button
            onClick={onBookClick}
            className="bg-[#087A24] hover:bg-[#004D1A] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap btn-glow-green"
          >
            <span>নতুন কানেকশন বুক করুন</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Glossy Green Navigation Bar (Exact pill style like the reference image) */}
      <div className="max-w-6xl mx-auto px-4 pb-2 pt-1 hidden lg:block">
        <nav className="w-full bg-gradient-to-r from-[#087A24] via-[#0B8729] to-[#087A24] text-white rounded-full py-1.5 px-6 shadow-md border border-[#42C83D]/40 flex items-center justify-between">
          <div className="flex items-center justify-center w-full space-x-4 xl:space-x-8 text-sm font-bold">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <React.Fragment key={item.id}>
                  {index > 0 && <span className="text-white/40 font-light select-none">|</span>}
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white text-[#004D1A] shadow-sm font-extrabold'
                        : 'text-white hover:text-[#A8E65A] hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                </React.Fragment>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#004D1A] text-white px-4 py-4 space-y-2 border-t border-[#087A24] animate-in slide-in-from-top-2">
          <div className="text-xs text-emerald-300 pb-2 border-b border-[#087A24] flex items-center justify-between">
            <span>অপারেটর: <strong>WASIM AKRAM MONDAL</strong></span>
            <a href="tel:+919593127054" className="text-white font-mono font-bold">9593127054</a>
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate(item.id);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-2.5 ${
                  activeSection === item.id
                    ? 'bg-[#087A24] text-white'
                    : 'text-emerald-100 hover:bg-[#087A24]/50'
                }`}
              >
                <Icon className="w-4 h-4 text-[#A8E65A]" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
