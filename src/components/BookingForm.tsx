import React, { useState, useEffect } from 'react';
import { Send, MessageCircle, CheckCircle2, AlertCircle, Calendar, MapPin, User, Phone, Tv, Wifi, Check, Sparkles, X } from 'lucide-react';
import { LeafIcon, CornerLeaves, GrassBorder } from './GrassDecorations';

interface BookingFormProps {
  selectedServicePreset?: string;
  onClearPreset?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedServicePreset,
  onClearPreset,
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [selectedService, setSelectedService] = useState('HD Cable Connection');
  const [preferredDate, setPreferredDate] = useState('');
  const [additionalMessage, setAdditionalMessage] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Update service if preset changed from plan cards
  useEffect(() => {
    if (selectedServicePreset) {
      setSelectedService(selectedServicePreset);
    }
  }, [selectedServicePreset]);

  const serviceOptions = [
    {
      id: 'SD Cable Connection',
      labelBn: 'SD কেবল সংযোগ',
      labelEn: 'SD Cable Connection',
      price: '₹1,200',
      tag: '১ মাস ফ্রি রিচার্জ',
      icon: Tv,
    },
    {
      id: 'HD Cable Connection',
      labelBn: 'HD কেবল সংযোগ',
      labelEn: 'HD Cable Connection',
      price: '₹1,500',
      tag: '১ মাস ফ্রি রিচার্জ • HD Experience',
      icon: Tv,
    },
    {
      id: 'Meghbela Broadband',
      labelBn: 'Meghbela Broadband (40 Mbps)',
      labelEn: 'Meghbela Broadband',
      price: '₹3,499',
      tag: '৩ মাস ফ্রি রিচার্জ',
      icon: Wifi,
    },
    {
      id: 'Alliance Broadband',
      labelBn: 'Alliance Broadband (40 Mbps)',
      labelEn: 'Alliance Broadband',
      price: '₹3,499',
      tag: '৩ মাস ফ্রি রিচার্জ',
      icon: Wifi,
    },
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!fullName.trim()) {
      errs.fullName = 'অনুগ্রহ করে আপনার সম্পূর্ণ নাম লিখুন';
    }

    const cleanPhone = phoneNumber.replace(/\D/g, '');
    if (!cleanPhone) {
      errs.phoneNumber = 'মোবাইল নম্বর প্রদান করুন';
    } else if (cleanPhone.length !== 10 || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phoneNumber = 'সঠিক ১০ সংখ্যার ভারতীয় মোবাইল নম্বর দিন (যেমন: 9876543210)';
    }

    if (!address.trim()) {
      errs.address = 'ইনস্টলেশনের জন্য আপনার সম্পূর্ণ ঠিকানা প্রয়োজন';
    }

    if (!selectedService) {
      errs.selectedService = 'একটি সার্ভিস নির্বাচন করুন';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateWhatsAppMessage = (ref: string) => {
    const serviceObj = serviceOptions.find((s) => s.id === selectedService);
    const serviceLabel = serviceObj ? `${serviceObj.labelBn} (${serviceObj.price})` : selectedService;

    const message = 
`*নতুন কানেকশন বুকিং - Dream's Cable & Broadband*
----------------------------------------
*বুকিং আইডি:* #${ref}
*গ্রাহকের নাম:* ${fullName.trim()}
*মোবাইল নম্বর:* ${phoneNumber.trim()}
*ঠিকানা:* ${address.trim()}
*নির্বাচিত সার্ভিস:* ${serviceLabel}
*পছন্দের ইনস্টলেশন তারিখ:* ${preferredDate || 'যত দ্রুত সম্ভব (ASAP)'}
${additionalMessage.trim() ? `*অতিরিক্ত বার্তা:* ${additionalMessage.trim()}\n` : ''}----------------------------------------
*অপারেটর ওয়াসিম আকরাম মণ্ডল মহাশয়,*
অনুগ্রহ করে আমার নতুন কানেকশন ইনস্টলেশন যাচাই করুন। ধন্যবাদ!`;

    return encodeURIComponent(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const refCode = 'DCB-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(refCode);
    setIsSubmitted(true);

    const waMsg = generateWhatsAppMessage(refCode);
    const whatsappUrl = `https://wa.me/919593127054?text=${waMsg}`;

    // Open WhatsApp in a new tab/app
    window.open(whatsappUrl, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhoneNumber('');
    setAddress('');
    setPreferredDate('');
    setAdditionalMessage('');
    setErrors({});
    if (onClearPreset) onClearPreset();
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-gradient-to-b from-[#F0FFE9] via-white to-[#F0FFE9] relative overflow-hidden">
      {/* Top Grass Border */}
      <GrassBorder position="top" fillColor="#087A24" accentColor="#42C83D" className="mb-8" />

      {/* Decorative leaf elements */}
      <CornerLeaves position="top-left" className="opacity-40" />
      <CornerLeaves position="bottom-right" className="opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#087A24] border border-[#42C83D]/40 text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant Connection Request</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#004D1A] tracking-tight">
            নতুন কানেকশন বুকিং করুন
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            নিচের ফর্মটি পূরণ করুন অথবা সরাসরি WhatsApp-এ যোগাযোগ করুন। আমাদের টেকনিশিয়ান টিম শীঘ্রই আপনার বাড়িতে সংযোগ স্থাপন করবে।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          
          {/* Main Booking Form Card */}
          <div className="lg:col-span-8 bg-white rounded-2xl border-2 border-[#42C83D]/40 p-6 sm:p-8 shadow-xl glass-card-nature relative">
            
            {/* Success State Overlay/Card */}
            {isSubmitted ? (
              <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#F0FFE9] text-[#087A24] border-2 border-[#42C83D] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs px-3 py-1 rounded-full bg-[#F0FFE9] text-[#004D1A] font-mono font-bold">
                    বুকিং রেফারেন্স: #{bookingRef}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#004D1A] pt-2">
                    ধন্যবাদ {fullName}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    আপনার কানেকশন বিবরণ প্রস্তুত এবং WhatsApp-এ পাঠানো হচ্ছে। অপারেটর <strong>ওয়াসিম আকরাম মণ্ডল</strong> আপনার অনুরোধটি দ্রুত যাচাই করবেন।
                  </p>
                </div>

                {/* Summary Box */}
                <div className="bg-[#F0FFE9]/60 rounded-xl p-4 text-left text-xs sm:text-sm text-slate-700 border border-[#42C83D]/30 max-w-md mx-auto space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-500">সার্ভিস:</span>
                    <strong className="text-[#004D1A]">{selectedService}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">মোবাইল নম্বর:</span>
                    <strong className="font-mono">{phoneNumber}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">ঠিকানা:</span>
                    <span className="text-right truncate max-w-[200px]">{address}</span>
                  </div>
                  {preferredDate && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">পছন্দের তারিখ:</span>
                      <span>{preferredDate}</span>
                    </div>
                  )}
                </div>

                {/* Direct Action Buttons on Success */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={`https://wa.me/919593127054?text=${generateWhatsAppMessage(bookingRef)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-xs tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp-এ এখনই পাঠান</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs tracking-wider transition-colors cursor-pointer"
                  >
                    আরেকটি বুকিং করুন
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Notice on preset selection if applied */}
                {selectedServicePreset && (
                  <div className="p-3 rounded-xl bg-[#F0FFE9] border border-[#42C83D] flex items-center justify-between text-xs text-[#004D1A]">
                    <span className="flex items-center gap-2">
                      <LeafIcon size={16} color="#087A24" />
                      <span>প্ল্যান নির্বাচিত: <strong>{selectedServicePreset}</strong></span>
                    </span>
                    {onClearPreset && (
                      <button
                        type="button"
                        onClick={onClearPreset}
                        className="text-slate-500 hover:text-red-600 font-bold"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                )}

                {/* Grid for Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      আপনার নাম * (Your Full Name)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="উদাঃ রাহুল দাস"
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-red-500 bg-red-50/30'
                            : 'border-slate-200 focus:border-[#087A24] focus:ring-2 focus:ring-[#42C83D]/20'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      মোবাইল নম্বর * (10-Digit Mobile)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        maxLength={10}
                        value={phoneNumber}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          setPhoneNumber(val);
                          if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                        }}
                        placeholder="৯৮৭৬৫৪৩২১০"
                        className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm font-mono focus:outline-none transition-colors ${
                          errors.phoneNumber
                            ? 'border-red-500 bg-red-50/30'
                            : 'border-slate-200 focus:border-[#087A24] focus:ring-2 focus:ring-[#42C83D]/20'
                        }`}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Service নির্বাচন করুন * (Select Service Plan)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {serviceOptions.map((opt) => {
                      const isSelected = selectedService === opt.id;
                      const Icon = opt.icon;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => setSelectedService(opt.id)}
                          className={`p-3 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                            isSelected
                              ? 'border-[#087A24] bg-[#F0FFE9] shadow-xs'
                              : 'border-slate-200 hover:border-[#42C83D]/60 bg-white'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                                isSelected
                                  ? 'bg-[#087A24] text-white'
                                  : 'bg-slate-100 text-slate-600'
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-900 leading-tight">
                                {opt.labelBn}
                              </div>
                              <div className="text-[10px] text-[#087A24] font-semibold">
                                {opt.tag}
                              </div>
                            </div>
                          </div>

                          <div className="text-right pl-2">
                            <span className="font-mono text-xs font-black text-[#004D1A]">
                              {opt.price}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Full Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    সম্পূর্ণ ঠিকানা * (Installation Address with Landmark)
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none text-slate-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <textarea
                      rows={2}
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                        if (errors.address) setErrors({ ...errors, address: '' });
                      }}
                      placeholder="বাড়ি/ফ্ল্যাট নম্বর, রাস্তার নাম, কাছাকাছি ল্যান্ডমার্ক, এলাকা"
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm focus:outline-none transition-colors ${
                        errors.address
                          ? 'border-red-500 bg-red-50/30'
                          : 'border-slate-200 focus:border-[#087A24] focus:ring-2 focus:ring-[#42C83D]/20'
                      }`}
                    />
                  </div>
                  {errors.address && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.address}
                    </p>
                  )}
                </div>

                {/* Installation Date & Additional Notes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      পছন্দের Installation Date (ঐচ্ছিক)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#087A24] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5">
                      অতিরিক্ত বার্তা (Optional Note)
                    </label>
                    <input
                      type="text"
                      value={additionalMessage}
                      onChange={(e) => setAdditionalMessage(e.target.value)}
                      placeholder="যেকোনো বিশেষ নির্দেশনা..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#087A24] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#087A24] hover:bg-[#004D1A] text-white font-bold text-sm tracking-wide transition-all btn-glow-green flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>জমা দিন / Submit</span>
                  </button>
                  <p className="text-center text-[11px] text-slate-500 mt-2">
                    ফর্মটি জমা দিলে আপনার বিবরণ সরাসরি অপারেটর ওয়াসিম আকরাম মণ্ডলের WhatsApp-এ পৌঁছে যাবে।
                  </p>
                </div>

              </form>
            )}

          </div>

          {/* Right Separate WhatsApp Booking Card */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="rounded-2xl bg-gradient-to-br from-[#004D1A] to-[#087A24] text-white p-6 shadow-xl border-2 border-[#42C83D]/40 text-center relative overflow-hidden">
              {/* Corner leaf decoration */}
              <div className="absolute top-2 right-2 opacity-25">
                <LeafIcon size={36} color="#A8E65A" />
              </div>

              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center mx-auto mb-4 text-[#A8E65A]">
                <MessageCircle className="w-8 h-8 fill-[#A8E65A]/20" />
              </div>

              <h4 className="text-xl font-extrabold text-white">
                অথবা WhatsApp-এ মেসেজ করুন
              </h4>

              <p className="text-xs text-emerald-200 mt-2 leading-relaxed">
                ফর্ম পূরণ না করে সরাসরি WhatsApp-এ অপারেটর <strong>WASIM AKRAM MONDAL</strong>-এর সাথে কথা বলুন ও পছন্দের প্ল্যান বুক করুন।
              </p>

              <div className="mt-6">
                <a
                  href="https://wa.me/919593127054?text=%E0%A6%A8%E0%A6%AE%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A6%BE%E0%A6%B0%20Dream's%20Cable%20and%20Broadband%20Service,%20%E0%A6%86%E0%A6%AE%E0%A6%BF%20%E0%A6%A8%E0%A6%A4%E0%A7%81%E0%A6%A8%20%E0%A6%95%E0%A6%BE%E0%A6%A8%E0%A7%87%E0%A6%95%E0%A6%B6%E0%A6%A8%20%E0%A6%A8%E0%A6%BF%E0%A6%A4%E0%A7%87%20%E0%A6%86%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%B9%E0%A7%80%E0%A5%A4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm tracking-wide shadow-md flex items-center justify-center gap-2 transition-all block"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Now</span>
                </a>
              </div>

              <div className="mt-4 pt-3 border-t border-white/15 text-[11px] text-emerald-200">
                হোয়াটসঅ্যাপ নম্বর: <strong className="text-white font-mono">+91 9593127054</strong>
              </div>
            </div>

            {/* Quick Assurance Box */}
            <div className="rounded-xl bg-white border border-[#42C83D]/30 p-4 text-xs text-slate-700 space-y-2">
              <div className="font-bold text-[#004D1A] flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#087A24]" />
                <span>দ্রুত ইনস্টলেশন প্রক্রিয়া</span>
              </div>
              <p className="text-slate-600">
                বুকিং পাওয়ার পর টেকনিশিয়ান আপনার নির্ধারিত ঠিকানায় লাইন ফিজিবিলিটি ও সেট-টপ বক্স/রাউটার স্থাপন করবেন।
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
