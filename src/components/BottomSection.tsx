import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Calendar, Pencil, X } from 'lucide-react';

interface BottomSectionProps {
  selectedServicePreset?: string;
  onClearPreset?: () => void;
}

export const BottomSection: React.FC<BottomSectionProps> = ({
  selectedServicePreset,
  onClearPreset,
}) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [additionalMessage, setAdditionalMessage] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Handle plan preselection from above cards
  useEffect(() => {
    if (selectedServicePreset) {
      if (selectedServicePreset.includes('Cable')) {
        setSelectedService('কেবল টিভি');
        setSelectedPlan(selectedServicePreset);
      } else {
        setSelectedService('ব্রডব্যান্ড');
        setSelectedPlan(selectedServicePreset);
      }
    }
  }, [selectedServicePreset]);

  // When service changes, update available plans
  const handleServiceChange = (service: string) => {
    setSelectedService(service);
    if (service === 'কেবল টিভি') {
      setSelectedPlan('HD কেবল সংযোগ');
    } else if (service === 'ব্রডব্যান্ড') {
      setSelectedPlan('Meghbela Broadband');
    } else {
      setSelectedPlan('');
    }
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!fullName.trim()) {
      errs.fullName = 'আপনার নাম প্রয়োজন';
    }

    const cleanPhone = phoneNumber.replace(/\D/g, '');
    if (!cleanPhone) {
      errs.phoneNumber = 'মোবাইল নম্বর প্রয়োজন';
    } else if (cleanPhone.length !== 10 || !/^[6-9]\d{9}$/.test(cleanPhone)) {
      errs.phoneNumber = 'সঠিক ১০ সংখ্যার ভারতীয় নম্বর দিন';
    }

    if (!address.trim()) {
      errs.address = 'ঠিকানা প্রয়োজন';
    }

    if (!selectedService) {
      errs.selectedService = 'সার্ভিস নির্বাচন করুন';
    }

    if (!selectedPlan) {
      errs.selectedPlan = 'প্ল্যান নির্বাচন করুন';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateWhatsAppMessage = (ref: string) => {
    const message = 
`*নতুন কানেকশন বুকিং - Dream's Cable & Broadband*
----------------------------------------
*বুকিং আইডি:* #${ref}
*গ্রাহকের নাম:* ${fullName.trim()}
*মোবাইল নম্বর:* ${phoneNumber.trim()}
*ঠিকানা:* ${address.trim()}
*সার্ভিস:* ${selectedService}
*নির্বাচিত প্ল্যান:* ${selectedPlan}
*পছন্দের তারিখ:* ${preferredDate || 'যত দ্রুত সম্ভব'}
${additionalMessage.trim() ? `*অতিরিক্ত বার্তা:* ${additionalMessage.trim()}\n` : ''}----------------------------------------
*অপারেটর ওয়াসিম আকরাম মণ্ডল মহাশয়,*
অনুগ্রহ করে আমার নতুন কানেকশন যাচাই করুন। ধন্যবাদ!`;

    return encodeURIComponent(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const ref = 'DCB-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setIsSubmitted(true);

    const waMsg = generateWhatsAppMessage(ref);
    const whatsappUrl = `https://wa.me/919593127054?text=${waMsg}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setPhoneNumber('');
    setAddress('');
    setSelectedService('');
    setSelectedPlan('');
    setPreferredDate('');
    setAdditionalMessage('');
    setErrors({});
    if (onClearPreset) onClearPreset();
  };

  return (
    <section id="bottom-strip" className="py-6 sm:py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        
        {/* 3 Columns in a row just like the reference picture! */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* ================= COLUMN 1: আমাদের পার্টনার নেটওয়ার্ক ================= */}
          <div className="lg:col-span-3 flex flex-col">
            {/* Header Pill */}
            <div className="flex justify-center mb-3">
              <div className="bg-[#087A24] text-white text-xs sm:text-sm font-bold px-5 py-1.5 rounded-full shadow-md border border-white whitespace-nowrap">
                আমাদের পার্টনার নেটওয়ার্ক
              </div>
            </div>

            {/* White Container with 3 Partner Logo Boxes */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-white shadow-xl flex-1 flex flex-col justify-around gap-3">
              {/* Partner 1: Meghbela Cable */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-[#F0FFE9] transition-colors h-20">
                <img
                  src="/extracted/partner_meghbela_cable.png"
                  alt="Meghbela Cable"
                  className="max-h-14 max-w-full object-contain"
                />
              </div>

              {/* Partner 2: Meghbela Broadband */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-[#F0FFE9] transition-colors h-20">
                <img
                  src="/extracted/partner_meghbela_broadband.png"
                  alt="Meghbela Broadband"
                  className="max-h-14 max-w-full object-contain"
                />
              </div>

              {/* Partner 3: Alliance Broadband */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-[#F0FFE9] transition-colors h-20">
                <img
                  src="/extracted/partner_alliance.png"
                  alt="Alliance Broadband"
                  className="max-h-14 max-w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* ================= COLUMN 2: আমাদের সম্পর্কে ================= */}
          <div id="about" className="lg:col-span-4 flex flex-col">
            {/* Header Pill */}
            <div className="flex justify-center mb-3">
              <div className="bg-[#087A24] text-white text-xs sm:text-sm font-bold px-5 py-1.5 rounded-full shadow-md border border-white whitespace-nowrap">
                আমাদের সম্পর্কে
              </div>
            </div>

            {/* White Container with scenic house & meadow background illustration */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-white shadow-xl flex-1 flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10 space-y-3">
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  <strong>Dream's Cable and Broadband Service</strong> আপনাদের ঘরে নিয়ে আসছে মানসম্মত Cable TV ও Broadband Internet। আমরা Meghbela এবং Alliance Broadband-এর সাথে যুক্ত থেকে দিচ্ছি সেরা পরিষেবা।
                </p>

                <div className="text-xs sm:text-sm font-black text-slate-900 pt-2 tracking-wide">
                  — WASIM AKRAM MONDAL
                </div>
              </div>

              {/* Suburban house illustration in bottom right */}
              <div className="flex justify-end pt-2">
                <img
                  src="/extracted/about_house.png"
                  alt="Modern suburban house and green lawn"
                  className="w-36 sm:w-44 h-auto object-contain drop-shadow"
                />
              </div>
            </div>
          </div>

          {/* ================= COLUMN 3: নতুন কানেকশন বুকিং করুন ================= */}
          <div id="booking" className="lg:col-span-5 flex flex-col">
            {/* Header Pill */}
            <div className="flex justify-center mb-3">
              <div className="bg-[#087A24] text-white text-xs sm:text-sm font-bold px-5 py-1.5 rounded-full shadow-md border border-white flex items-center gap-1.5 whitespace-nowrap">
                <Pencil className="w-3.5 h-3.5" />
                <span>নতুন কানেকশন বুকিং করুন</span>
              </div>
            </div>

            {/* White Container with 2-Column Compact Booking Form */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-white shadow-xl flex-1 flex flex-col justify-center">
              
              {isSubmitted ? (
                <div className="py-4 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#F0FFE9] text-[#087A24] border-2 border-[#42C83D] flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#004D1A]">
                    বুকিং প্রস্তুত! (#{bookingRef})
                  </h4>
                  <p className="text-xs text-slate-600">
                    বিবরণ WhatsApp-এ পাঠানো হচ্ছে। অপারেটর <strong>ওয়াসিম আকরাম মণ্ডল</strong> যোগাযোগ করবেন।
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-2 text-xs font-bold text-[#087A24] hover:underline cursor-pointer"
                  >
                    নতুন আরেকটি ফর্ম পূরণ করুন
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="আপনার নাম *"
                        className={`w-full px-3 py-1.5 rounded-lg border text-xs focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-red-500 bg-red-50/40'
                            : 'border-slate-300 focus:border-[#087A24]'
                        }`}
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        maxLength={10}
                        value={phoneNumber}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          setPhoneNumber(val);
                          if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                        }}
                        placeholder="মোবাইল নম্বর *"
                        className={`w-full px-3 py-1.5 rounded-lg border text-xs font-mono focus:outline-none transition-colors ${
                          errors.phoneNumber
                            ? 'border-red-500 bg-red-50/40'
                            : 'border-slate-300 focus:border-[#087A24]'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Row 2: Address & Service */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                          if (errors.address) setErrors({ ...errors, address: '' });
                        }}
                        placeholder="ঠিকানা লিখুন *"
                        className={`w-full px-3 py-1.5 rounded-lg border text-xs focus:outline-none transition-colors ${
                          errors.address
                            ? 'border-red-500 bg-red-50/40'
                            : 'border-slate-300 focus:border-[#087A24]'
                        }`}
                      />
                    </div>
                    <div>
                      <select
                        value={selectedService}
                        onChange={(e) => {
                          handleServiceChange(e.target.value);
                          if (errors.selectedService) setErrors({ ...errors, selectedService: '' });
                        }}
                        className={`w-full px-2.5 py-1.5 rounded-lg border text-xs focus:outline-none transition-colors ${
                          errors.selectedService
                            ? 'border-red-500 bg-red-50/40'
                            : 'border-slate-300 focus:border-[#087A24]'
                        }`}
                      >
                        <option value="">সার্ভিস নির্বাচন করুন *</option>
                        <option value="কেবল টিভি">কেবল টিভি (Cable TV)</option>
                        <option value="ব্রডব্যান্ড">ব্রডব্যান্ড (Broadband)</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Plan & Preferred Date */}
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <select
                        value={selectedPlan}
                        onChange={(e) => {
                          setSelectedPlan(e.target.value);
                          if (errors.selectedPlan) setErrors({ ...errors, selectedPlan: '' });
                        }}
                        className={`w-full px-2.5 py-1.5 rounded-lg border text-xs focus:outline-none transition-colors ${
                          errors.selectedPlan
                            ? 'border-red-500 bg-red-50/40'
                            : 'border-slate-300 focus:border-[#087A24]'
                        }`}
                      >
                        <option value="">প্ল্যান নির্বাচন করুন *</option>
                        {selectedService === 'কেবল টিভি' ? (
                          <>
                            <option value="SD কেবল সংযোগ">SD কেবল সংযোগ (₹১,২০০)</option>
                            <option value="HD কেবল সংযোগ">HD কেবল সংযোগ (₹১,৫০০)</option>
                          </>
                        ) : selectedService === 'ব্রডব্যান্ড' ? (
                          <>
                            <option value="Meghbela Broadband">Meghbela 40 Mbps (₹৩,৪৯৯)</option>
                            <option value="Alliance Broadband">Alliance 40 Mbps (₹৩,৪৯৯)</option>
                          </>
                        ) : (
                          <>
                            <option value="SD কেবল সংযোগ">SD কেবল সংযোগ</option>
                            <option value="HD কেবল সংযোগ">HD কেবল সংযোগ</option>
                            <option value="Meghbela Broadband">Meghbela Broadband</option>
                            <option value="Alliance Broadband">Alliance Broadband</option>
                          </>
                        )}
                      </select>
                    </div>
                    <div className="relative">
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#087A24]"
                      />
                    </div>
                  </div>

                  {/* Row 4: Additional Notes */}
                  <div>
                    <input
                      type="text"
                      value={additionalMessage}
                      onChange={(e) => setAdditionalMessage(e.target.value)}
                      placeholder="অতিরিক্ত বার্তা (ঐচ্ছিক)"
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#087A24]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full bg-[#087A24] hover:bg-[#004D1A] text-white font-bold py-2 px-4 rounded-full text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer btn-glow-green"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>জমা দিন / Submit</span>
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
