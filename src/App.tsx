import React, { useMemo, useState } from 'react'
import {
  House, Tv, Wifi, Info, Headphones, Phone, MessageCircle, ArrowRight,
  CheckCircle2, ShieldCheck, Zap, IndianRupee, Leaf, Menu, X, CalendarDays,
  Send, Router, SatelliteDish, MonitorPlay, Signal, Sparkles, CreditCard,
  QrCode, Copy, Check, ExternalLink, AlertCircle
} from 'lucide-react'

const PHONE = '9593127054'
const WHATSAPP = '919593127054'
const UPI_ID = '9593127054@ybl'

type Service = 'SD Cable TV' | 'HD Cable TV' | 'Meghbela Broadband' | 'Alliance Broadband'

const planDetails: Record<Service, { price: string; numPrice: number; speed?: string; offer: string }> = {
  'SD Cable TV': { price: '₹1,200', numPrice: 1200, offer: '১ মাসের Recharge FREE' },
  'HD Cable TV': { price: '₹1,500', numPrice: 1500, offer: '১ মাসের Recharge FREE' },
  'Meghbela Broadband': { price: '₹3,499', numPrice: 3499, speed: '40 Mbps', offer: '৩ মাসের Recharge FREE' },
  'Alliance Broadband': { price: '₹3,499', numPrice: 3499, speed: '40 Mbps', offer: '৩ মাসের Recharge FREE' },
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [service, setService] = useState<Service>('SD Cable TV')
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [address, setAddress] = useState('')
  const [date, setDate] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [mobileError, setMobileError] = useState('')
  const [copiedUpi, setCopiedUpi] = useState(false)
  const [customPayAmount, setCustomPayAmount] = useState<number>(1200)

  const selectedPlan = useMemo(() => planDetails[service], [service])

  // Generate pre-filled WhatsApp message
  const bookingMessage = () => {
    const text = [
      'নমস্কার, আমি Dream’s Cable and Broadband Service-এ নতুন কানেকশন নিতে চাই।',
      `নাম: ${name || 'গ্রাহক'}`,
      `মোবাইল: ${mobile}`,
      `ঠিকানা: ${address}`,
      `কানেকশন: ${service}`,
      `প্রাথমিক কানেকশন চার্জ: ${selectedPlan.price}`,
      `অফার: ${selectedPlan.offer}`,
      `পছন্দের তারিখ: ${date || 'যত দ্রুত সম্ভব'}`,
      `অতিরিক্ত বার্তা: ${message || 'নেই'}`,
      '--------------------------',
      'দয়া করে সংযোগটি নিশ্চিত করুন।'
    ].join('\n')
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`
  }

  // Handle form submit with zero alert() calls (iframe safe)
  const submitBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const cleanPhone = mobile.replace(/\D/g, '')
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setMobileError('অনুগ্রহ করে সঠিক ১০ সংখ্যার ভারতীয় মোবাইল নম্বর দিন (যেমন: 9876543210)')
      const phoneInput = document.getElementById('cust-phone')
      if (phoneInput) phoneInput.focus()
      return
    }
    setMobileError('')
    setSubmitted(true)
    
    // Set payment amount to selected plan price
    setCustomPayAmount(selectedPlan.numPrice)

    // Open WhatsApp
    const waUrl = bookingMessage()
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer')
    } catch {
      // In case browser blocks popup, direct link is visible in the UI
    }
  }

  const closeMenu = () => setMenuOpen(false)

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    closeMenu()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Preselect plan and scroll to booking form
  const scrollToBooking = (selectedService?: Service) => {
    if (selectedService) {
      setService(selectedService)
      setCustomPayAmount(planDetails[selectedService].numPrice)
    }
    setSubmitted(false)
    setMobileError('')
    closeMenu()
    const bookingEl = document.getElementById('booking')
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' })
      setTimeout(() => {
        const input = document.getElementById('cust-name')
        if (input) input.focus()
      }, 400)
    }
  }

  // Copy UPI ID to clipboard
  const handleCopyUpi = () => {
    navigator.clipboard.writeText(UPI_ID)
    setCopiedUpi(true)
    setTimeout(() => setCopiedUpi(false), 2500)
  }

  // UPI deep links for PhonePe, GPay, Paytm
  const upiIntentUrl = (appPrefix: string = 'upi') => {
    const note = encodeURIComponent(`Payment for ${service}`)
    return `${appPrefix}://pay?pa=${UPI_ID}&pn=Dreams%20Cable%20and%20Broadband&am=${customPayAmount}&cu=INR&tn=${note}`
  }

  return (
    <div className="site-shell">
      <div className="leaf leaf-one" /><div className="leaf leaf-two" /><div className="leaf leaf-three" />
      
      {/* Header */}
      <header className="header">
        <div className="topbar wrap">
          <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            <span className="brand-mark">
              <img
                src="/extracted/logo_emblem.png"
                alt="Dream's Logo"
                style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
              />
              <House size={34} style={{ display: 'none' }} />
              <Wifi className="brand-wifi" size={20} style={{ display: 'none' }} />
            </span>
            <span>
              <strong>Dream’s</strong>
              <b>Cable and Broadband Service</b>
              <small>Your Trusted Cable TV & Broadband Partner</small>
            </span>
          </a>

          <div className="operator">
            <span>অপারেটর :</span>
            <strong>WASIM AKRAM MONDAL</strong>
          </div>

          <a className="head-contact" href={`tel:+91${PHONE}`}>
            <Phone size={19}/>
            <span><b>{PHONE}</b><small>(Call Us)</small></span>
          </a>

          <a className="head-whatsapp" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
            <MessageCircle size={20}/>
            <span>WhatsApp<br/>Chat</span>
          </a>

          {/* Header CTA Button with active click handler */}
          <button
            type="button"
            className="pill-button header-cta cursor-pointer"
            onClick={() => scrollToBooking()}
          >
            নতুন কানেকশন বুক করুন <ArrowRight size={16}/>
          </button>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="মেনু খুলুন">
            {menuOpen ? <X/> : <Menu/>}
          </button>
        </div>

        {/* Glossy Green Navigation Bar */}
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <div className="wrap nav-inner">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}><House size={17}/> হোম</a>
            <a href="#cable" onClick={(e) => { e.preventDefault(); scrollToSection('cable'); }}><Tv size={17}/> কেবল টিভি</a>
            <a href="#broadband" onClick={(e) => { e.preventDefault(); scrollToSection('broadband'); }}><Wifi size={18}/> ব্রডব্যান্ড</a>
            <a href="#payment" onClick={(e) => { e.preventDefault(); scrollToSection('payment'); }}><CreditCard size={17}/> পেমেন্ট (UPI)</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}><Info size={17}/> আমাদের সম্পর্কে</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}><Headphones size={17}/> যোগাযোগ</a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <span className="eyebrow"><Leaf size={15}/> আপনার এলাকার বিশ্বস্ত পরিষেবা</span>
            <h1>আপনার বিশ্ব,<br/><em>আরও ভালোভাবে</em><br/>সংযুক্ত হোক!</h1>
            <p><b>Dream's Cable and Broadband Service</b>-এর সাথে উপভোগ করুন Crystal Clear Cable TV এবং High-Speed Internet!</p>
            <div className="hero-actions">
              <button
                type="button"
                className="pill-button cursor-pointer"
                onClick={() => scrollToSection('cable')}
              >
                <Tv size={18}/> কেবল সংযোগ নিন <ArrowRight size={17}/>
              </button>
              <button
                type="button"
                className="pill-button outline cursor-pointer"
                onClick={() => scrollToSection('broadband')}
              >
                <Wifi size={18}/> ব্রডব্যান্ড জানুন <ArrowRight size={17}/>
              </button>
            </div>
            <div className="hero-note"><ShieldCheck size={17}/> নির্ভরযোগ্য কানেকশন • সহজ বুকিং • বন্ধুত্বপূর্ণ সাপোর্ট</div>
          </div>

          {/* Hero Art */}
          <div className="hero-art">
            <div className="sun-glow"/><div className="hill hill-back"/><div className="hill hill-front"/>
            <div className="family-photo">
              <img
                src="/extracted/hero_family_clean.png"
                alt="Family Entertainment"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
                onError={(e) => {
                  (e.currentTarget as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="tv-card">
              <MonitorPlay size={30}/>
              <b>Live TV</b>
              <span>Sports • Movies • More</span>
              <div className="tv-screen">▶ HD ENTERTAINMENT</div>
            </div>
            <div className="router-card">
              <Router size={38}/>
              <span>High-speed<br/>WiFi</span>
              <i/><i/><i/>
            </div>
            <div className="wifi-orbit"><Wifi size={54}/></div>
            <div className="hero-leaf l-a">✦</div><div className="hero-leaf l-b">❧</div>
          </div>
        </section>

        {/* Cable TV Connection Plans */}
        <section className="plans-wrap wrap" id="cable">
          <div className="section-title">
            <span className="title-icon"><Tv/></span>
            <h2>কেবল টিভি সংযোগের প্ল্যান</h2>
            <span className="title-line"/>
          </div>

          <div className="plan-grid cable-grid">
            {/* SD Card */}
            <article className="plan-card">
              <div className="plan-ribbon">SD কেবল সংযোগ</div>
              <div className="plan-main">
                <div>
                  <div className="price">₹1,200</div>
                  <span className="price-caption">প্রাথমিক কানেকশন চার্জ</span>
                </div>
                <div className="device-icon">
                  <img
                    src="/extracted/stb_sd.png"
                    alt="SD Set Top Box"
                    style={{ height: '56px', maxWidth: '100px', objectFit: 'contain' }}
                    onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
                  />
                </div>
              </div>
              <ul>
                <li><CheckCircle2/> SD Set Top Box সংযোগ</li>
                <li><CheckCircle2/> ১ মাসের Recharge FREE</li>
                <li><CheckCircle2/> সাশ্রয়ী কেবল টিভি বিনোদন</li>
                <li><CheckCircle2/> উপলব্ধ SD Channel দেখুন</li>
              </ul>
              <button
                type="button"
                className="card-button cursor-pointer"
                onClick={() => scrollToBooking('SD Cable TV')}
              >
                SD কানেকশন নিন <ArrowRight size={17}/>
              </button>
            </article>

            {/* HD Card */}
            <article className="plan-card featured">
              <span className="hot-label">HD EXPERIENCE</span>
              <div className="plan-ribbon">HD কেবল সংযোগ</div>
              <div className="plan-main">
                <div>
                  <div className="price">₹1,500</div>
                  <span className="price-caption">প্রাথমিক কানেকশন চার্জ</span>
                </div>
                <div className="device-icon hd">
                  <img
                    src="/extracted/stb_hd.png"
                    alt="HD Set Top Box"
                    style={{ height: '56px', maxWidth: '100px', objectFit: 'contain' }}
                    onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
                  />
                </div>
              </div>
              <ul>
                <li><CheckCircle2/> HD Set Top Box Included</li>
                <li><CheckCircle2/> ১ মাসের Recharge FREE</li>
                <li><CheckCircle2/> Crystal Clear HD Picture</li>
                <li><CheckCircle2/> HD Channel উপভোগ করুন</li>
              </ul>
              <button
                type="button"
                className="card-button cursor-pointer"
                onClick={() => scrollToBooking('HD Cable TV')}
              >
                HD কানেকশন নিন <ArrowRight size={17}/>
              </button>
            </article>
          </div>
        </section>

        {/* Broadband Internet Plans */}
        <section className="plans-wrap broadband-section wrap" id="broadband">
          <div className="section-title">
            <span className="title-icon"><Wifi/></span>
            <h2>ব্রডব্যান্ড ইন্টারনেট প্ল্যান</h2>
            <span className="title-line"/>
          </div>

          <div className="plan-grid">
            {/* Meghbela Card */}
            <article className="plan-card internet-card">
              <div className="plan-ribbon">Meghbela Broadband</div>
              <div className="internet-speed">40 <small>Mbps</small></div>
              <div className="price">₹3,499</div>
              <span className="price-caption">প্রাথমিক কানেকশন চার্জ</span>
              <ul>
                <li><CheckCircle2/> 40 Mbps Internet Speed</li>
                <li><CheckCircle2/> ৩ মাসের Recharge FREE</li>
                <li><CheckCircle2/> নির্ভরযোগ্য সংযোগ</li>
                <li><CheckCircle2/> প্রতিদিনের কাজে উপযোগী</li>
              </ul>
              <div className="provider-wordmark meghbela">
                <img
                  src="/extracted/card_meghbela_logo.png"
                  alt="Meghbela"
                  style={{ height: '24px', objectFit: 'contain', display: 'inline-block' }}
                  onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
                />
              </div>
              <button
                type="button"
                className="card-button cursor-pointer"
                onClick={() => scrollToBooking('Meghbela Broadband')}
              >
                Meghbela নিন <ArrowRight size={17}/>
              </button>
            </article>

            {/* Alliance Card */}
            <article className="plan-card internet-card">
              <div className="plan-ribbon">Alliance Broadband</div>
              <div className="internet-speed">40 <small>Mbps</small></div>
              <div className="price">₹3,499</div>
              <span className="price-caption">প্রাথমিক কানেকশন চার্জ</span>
              <ul>
                <li><CheckCircle2/> 40 Mbps Internet Speed</li>
                <li><CheckCircle2/> ৩ মাসের Recharge FREE</li>
                <li><CheckCircle2/> নির্ভরযোগ্য সংযোগ</li>
                <li><CheckCircle2/> প্রতিদিনের কাজে উপযোগী</li>
              </ul>
              <div className="provider-wordmark alliance">
                <img
                  src="/extracted/card_alliance_logo.png"
                  alt="Alliance"
                  style={{ height: '24px', objectFit: 'contain', display: 'inline-block' }}
                  onError={(e) => { (e.currentTarget as HTMLElement).style.display = 'none'; }}
                />
              </div>
              <button
                type="button"
                className="card-button cursor-pointer"
                onClick={() => scrollToBooking('Alliance Broadband')}
              >
                Alliance নিন <ArrowRight size={17}/>
              </button>
            </article>
          </div>
          <p className="price-note">* উপরে দেওয়া মূল্য প্রাথমিক কানেকশন চার্জ। প্রথম ৩ মাসের রিচার্জ সম্পূর্ণ ফ্রি!</p>
        </section>

        {/* Why Choose Us */}
        <section className="why wrap">
          <div className="floating-heading"><span>কেন আমাদের বেছে নেবেন?</span></div>
          <div className="why-grid">
            <div className="why-item"><ShieldCheck/><b>বিশ্বস্ত পরিষেবা</b><small>(Reliable Service)</small></div>
            <div className="why-item"><Zap/><b>দ্রুতগতির ইন্টারনেট</b><small>(High-Speed Internet)</small></div>
            <div className="why-item"><IndianRupee/><b>সাশ্রয়ী অফার</b><small>(Affordable Price)</small></div>
            <div className="why-item"><Headphones/><b>বন্ধুত্বপূর্ণ সাপোর্ট</b><small>(Friendly Support)</small></div>
          </div>
        </section>

        {/* Lower Grid: Partners & About */}
        <section className="lower-grid wrap">
          <div className="partners">
            <div className="small-section-title">আমাদের পার্টনার নেটওয়ার্ক</div>
            <div className="partner-list">
              <div className="partner-logo">
                <img
                  src="/extracted/partner_meghbela_cable.png"
                  alt="Meghbela Cable"
                  style={{ maxHeight: '46px', maxWidth: '85%', objectFit: 'contain' }}
                />
              </div>
              <div className="partner-logo">
                <img
                  src="/extracted/partner_meghbela_broadband.png"
                  alt="Meghbela Broadband"
                  style={{ maxHeight: '46px', maxWidth: '85%', objectFit: 'contain' }}
                />
              </div>
              <div className="partner-logo alliance-logo">
                <img
                  src="/extracted/partner_alliance.png"
                  alt="Alliance Broadband"
                  style={{ maxHeight: '46px', maxWidth: '85%', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>

          <div className="about" id="about">
            <div className="small-section-title">আমাদের সম্পর্কে</div>
            <h3>আপনার ঘরেই নিয়ে আসছি মানসম্মত Cable TV ও Broadband Internet!</h3>
            <p>Dream's Cable and Broadband Service আপনাদের ঘরে নিয়ে আসছে মানসম্মত Cable TV ও Broadband Internet পরিষেবা। আমরা Meghbela এবং Alliance Broadband-এর মাধ্যমে সংযোগ পরিষেবা প্রদান করি। আমাদের লক্ষ্য হলো গ্রাহকদের সহজ, সাশ্রয়ী এবং ভালো পরিষেবা দেওয়া।</p>
            <strong className="operator-tag"><Leaf size={16}/> অপারেটর: WASIM AKRAM MONDAL</strong>
          </div>
        </section>

        {/* Booking Form & WhatsApp Panel */}
        <section className="booking-wrap wrap" id="booking">
          <div className="booking-form-panel">
            <div className="small-section-title"><CalendarDays size={19}/> নতুন কানেকশন বুকিং করুন</div>
            
            {/* Inline Error Notice if phone invalid */}
            {mobileError && (
              <div className="booking-field-error">
                <AlertCircle size={16} />
                <span>{mobileError}</span>
              </div>
            )}

            {/* Submission confirmation view */}
            {submitted && (
              <div style={{ background: '#eafbe3', border: '1.5px solid #43c83d', borderRadius: '14px', padding: '16px', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#07551f', fontWeight: 800, fontSize: '15px' }}>
                  <CheckCircle2 size={20} color="#087b25" />
                  <span>ধন্যবাদ {name || 'গ্রাহক'}! আপনার বুকিং বিবরণ প্রস্তুত।</span>
                </div>
                <p style={{ margin: '8px 0 12px', fontSize: '13px', color: '#274b30' }}>
                  নির্বাচিত সার্ভিস: <strong>{service} ({selectedPlan.price})</strong>
                  <br />
                  মোবাইল নম্বর: <strong>{mobile}</strong>
                </p>
                
                {/* Direct Action Buttons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  <a
                    className="wa-send-btn"
                    href={bookingMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp-এ এখনই পাঠান</span>
                  </a>

                  <button
                    type="button"
                    className="pill-button outline cursor-pointer"
                    onClick={() => scrollToSection('payment')}
                    style={{ padding: '8px 16px', fontSize: '13px' }}
                  >
                    <CreditCard size={16} />
                    <span>পেমেন্ট করুন (PhonePe/GPay/Paytm)</span>
                  </button>

                  <button
                    type="button"
                    style={{ background: 'transparent', border: '0', color: '#55735b', fontSize: '12px', cursor: 'pointer', textDecoration: 'underline' }}
                    onClick={() => setSubmitted(false)}
                  >
                    নতুন তথ্য লিখুন
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={submitBooking}>
              <div className="form-grid">
                <label>
                  আপনার নাম *
                  <input
                    id="cust-name"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="আপনার পুরো নাম"
                  />
                </label>
                <label>
                  মোবাইল নম্বর *
                  <input
                    id="cust-phone"
                    required
                    inputMode="numeric"
                    maxLength={10}
                    value={mobile}
                    onChange={e => {
                      setMobile(e.target.value.replace(/\D/g, ''))
                      if (mobileError) setMobileError('')
                    }}
                    placeholder="১০ সংখ্যার নম্বর (যেমন: 9876543210)"
                  />
                </label>
                <label className="full">
                  ঠিকানা লিখুন *
                  <input
                    required
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    placeholder="বাড়ি / রাস্তা / এলাকা / ল্যান্ডমার্ক"
                  />
                </label>
                <label>
                  Service নির্বাচন করুন *
                  <select
                    value={service}
                    onChange={e => {
                      const newSvc = e.target.value as Service
                      setService(newSvc)
                      setCustomPayAmount(planDetails[newSvc].numPrice)
                      setSubmitted(false)
                    }}
                  >
                    <option value="SD Cable TV">SD Cable TV (₹১,২০০)</option>
                    <option value="HD Cable TV">HD Cable TV (₹১,৫০০)</option>
                    <option value="Meghbela Broadband">Meghbela Broadband (₹৩,৪৯৯)</option>
                    <option value="Alliance Broadband">Alliance Broadband (₹৩,৪৯৯)</option>
                  </select>
                </label>
                <label>
                  Selected Plan
                  <div className="selected-plan">
                    {service} — {selectedPlan.price} {selectedPlan.speed ? `(${selectedPlan.speed})` : ''} • {selectedPlan.offer}
                  </div>
                </label>
                <label>
                  পছন্দের তারিখ
                  <input
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                  />
                </label>
                <label className="full">
                  অতিরিক্ত বার্তা
                  <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="কিছু জানাতে চাইলে লিখুন (ঐচ্ছিক)"
                    rows={2}
                  />
                </label>
              </div>
              <button className="card-button submit-button cursor-pointer" type="submit">
                <Send size={17}/> জমা দিন / Submit
              </button>
            </form>
          </div>

          <aside className="whatsapp-panel">
            <MessageCircle size={45}/>
            <h3>অথবা WhatsApp-এ মেসেজ করুন</h3>
            <p>নতুন কানেকশন বা যেকোনো তথ্যের জন্য সরাসরি আমাদের WhatsApp করুন।</p>
            <a
              className="wa-button"
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('নমস্কার, Dream’s Cable and Broadband Service-এর কানেকশন সম্পর্কে জানতে চাই।')}`}
              target="_blank"
              rel="noreferrer"
            >
              Chat Now <ArrowRight size={16}/>
            </a>
            <div className="wa-number">{PHONE}</div>
          </aside>
        </section>

        {/* ================= PHONEPE, GOOGLE PAY, PAYTM ONLINE PAYMENT SECTION ================= */}
        <section className="wrap" id="payment">
          <div className="payment-section">
            <div className="payment-header">
              <h3>
                <CreditCard size={22} color="#087b25" />
                <span>অনলাইন পেমেন্ট অপশন (PhonePe, Google Pay & Paytm)</span>
              </h3>
              <span className="payment-badge">তাত্ক্ষণিক UPI পেমেন্ট</span>
            </div>

            <p style={{ margin: '0 0 16px', fontSize: '14px', color: '#314e36', lineHeight: '1.6' }}>
              নতুন কানেকশন বুকিং চার্জ অথবা মাসিক রিচার্জের জন্য সরাসরি আপনার পছন্দের UPI অ্যাপ দিয়ে নিরাপদ পেমেন্ট করুন:
            </p>

            <div className="payment-grid">
              
              {/* Left Column: Direct App Payment Buttons */}
              <div className="pay-methods">
                
                {/* PhonePe Option */}
                <a
                  className="pay-btn-brand pay-phonepe"
                  href={upiIntentUrl('phonepe')}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="pay-brand-name">
                    <span className="pay-brand-icon phonepe-icon">पे</span>
                    <div>
                      <div style={{ fontSize: '15px' }}>PhonePe (ফোনপে)</div>
                      <small style={{ opacity: 0.85, fontSize: '11px' }}>Pay via PhonePe UPI App</small>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '15px', fontWeight: 800 }}>₹{customPayAmount}</span>
                    <ExternalLink size={16} />
                  </div>
                </a>

                {/* Google Pay Option */}
                <a
                  className="pay-btn-brand pay-gpay"
                  href={upiIntentUrl('gpay')}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="pay-brand-name">
                    <span className="pay-brand-icon gpay-icon">G</span>
                    <div>
                      <div style={{ fontSize: '15px' }}>Google Pay (গুগল পে)</div>
                      <small style={{ opacity: 0.85, fontSize: '11px' }}>Pay via Google Pay UPI App</small>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '15px', fontWeight: 800 }}>₹{customPayAmount}</span>
                    <ExternalLink size={16} />
                  </div>
                </a>

                {/* Paytm Option */}
                <a
                  className="pay-btn-brand pay-paytm"
                  href={upiIntentUrl('paytmmp')}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="pay-brand-name">
                    <span className="pay-brand-icon paytm-icon">P</span>
                    <div>
                      <div style={{ fontSize: '15px' }}>Paytm (পেটিএম)</div>
                      <small style={{ opacity: 0.85, fontSize: '11px' }}>Pay via Paytm UPI App</small>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '15px', fontWeight: 800 }}>₹{customPayAmount}</span>
                    <ExternalLink size={16} />
                  </div>
                </a>

                {/* Quick Amount Selector */}
                <div style={{ marginTop: '8px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#07551f', marginBottom: '6px' }}>
                    প্ল্যান অনুযায়ী অ্যামাউন্ট নির্বাচন করুন:
                  </div>
                  <div className="payment-amount-tags" style={{ justifyContent: 'flex-start' }}>
                    <button
                      type="button"
                      className={`amt-tag ${customPayAmount === 1200 ? 'active' : ''}`}
                      onClick={() => setCustomPayAmount(1200)}
                    >
                      SD কেবল: ₹1,200
                    </button>
                    <button
                      type="button"
                      className={`amt-tag ${customPayAmount === 1500 ? 'active' : ''}`}
                      onClick={() => setCustomPayAmount(1500)}
                    >
                      HD কেবল: ₹1,500
                    </button>
                    <button
                      type="button"
                      className={`amt-tag ${customPayAmount === 3499 ? 'active' : ''}`}
                      onClick={() => setCustomPayAmount(3499)}
                    >
                      ব্রডব্যান্ড: ₹3,499
                    </button>
                  </div>
                </div>

              </div>

              {/* Right Column: QR Code & UPI ID Card */}
              <div className="qr-card">
                <div className="qr-image-wrap">
                  {/* High quality clean SVG UPI QR representation */}
                  <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="150" height="150" fill="white"/>
                    {/* Top-Left Finder */}
                    <rect x="12" y="12" width="40" height="40" rx="6" stroke="#07551f" strokeWidth="6" fill="none"/>
                    <rect x="22" y="22" width="20" height="20" rx="3" fill="#07551f"/>
                    {/* Top-Right Finder */}
                    <rect x="98" y="12" width="40" height="40" rx="6" stroke="#07551f" strokeWidth="6" fill="none"/>
                    <rect x="108" y="22" width="20" height="20" rx="3" fill="#07551f"/>
                    {/* Bottom-Left Finder */}
                    <rect x="12" y="98" width="40" height="40" rx="6" stroke="#07551f" strokeWidth="6" fill="none"/>
                    <rect x="22" y="108" width="20" height="20" rx="3" fill="#07551f"/>
                    {/* Data dots */}
                    <rect x="62" y="18" width="8" height="8" fill="#13832a"/>
                    <rect x="78" y="18" width="8" height="8" fill="#13832a"/>
                    <rect x="62" y="34" width="8" height="8" fill="#13832a"/>
                    <rect x="78" y="34" width="8" height="8" fill="#13832a"/>
                    <rect x="18" y="62" width="8" height="8" fill="#13832a"/>
                    <rect x="34" y="62" width="8" height="8" fill="#13832a"/>
                    <rect x="18" y="78" width="8" height="8" fill="#13832a"/>
                    <rect x="34" y="78" width="8" height="8" fill="#13832a"/>
                    <rect x="62" y="62" width="24" height="24" rx="4" fill="#087b25"/>
                    <path d="M74 68L68 74H72V80H76V74H80L74 68Z" fill="white"/>
                    <rect x="98" y="62" width="8" height="8" fill="#13832a"/>
                    <rect x="114" y="62" width="8" height="8" fill="#13832a"/>
                    <rect x="130" y="62" width="8" height="8" fill="#13832a"/>
                    <rect x="98" y="78" width="8" height="8" fill="#13832a"/>
                    <rect x="122" y="78" width="8" height="8" fill="#13832a"/>
                    <rect x="62" y="98" width="8" height="8" fill="#13832a"/>
                    <rect x="78" y="98" width="8" height="8" fill="#13832a"/>
                    <rect x="62" y="114" width="8" height="8" fill="#13832a"/>
                    <rect x="78" y="114" width="8" height="8" fill="#13832a"/>
                    <rect x="62" y="130" width="8" height="8" fill="#13832a"/>
                    <rect x="78" y="130" width="8" height="8" fill="#13832a"/>
                    <rect x="98" y="98" width="8" height="8" fill="#13832a"/>
                    <rect x="114" y="114" width="8" height="8" fill="#13832a"/>
                    <rect x="130" y="130" width="8" height="8" fill="#13832a"/>
                  </svg>
                </div>

                <div className="upi-info">
                  <strong>যেকোনো UPI অ্যাপ দিয়ে স্ক্যান করুন</strong>
                  <div>PhonePe • Google Pay • Paytm • BHIM</div>
                </div>

                {/* Click to Copy UPI ID */}
                <button
                  type="button"
                  className="upi-id-badge"
                  onClick={handleCopyUpi}
                  title="কপি করতে ক্লিক করুন"
                >
                  <span>{UPI_ID}</span>
                  {copiedUpi ? <Check size={16} color="#087b25" /> : <Copy size={16} />}
                </button>

                <div className="copy-tooltip">
                  {copiedUpi ? '✓ UPI ID সফলভাবে কপি হয়েছে!' : 'ক্লিক করে UPI ID কপি করুন'}
                </div>

                <div style={{ marginTop: '10px', fontSize: '11px', color: '#55735b', maxWidth: '280px', lineHeight: '1.4' }}>
                  *পেমেন্ট সম্পন্ন করার পর স্ক্রিনশট বা UTR রেফারেন্স নম্বর <strong>9593127054</strong>-এ WhatsApp করে দিন।
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-grass"/>
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <House/>
              <Wifi/>
            </div>
            <strong>Dream’s</strong>
            <b>Cable and Broadband Service</b>
            <small>Your Trusted Cable TV & Broadband Partner.</small>
          </div>

          <div>
            <h4>যোগাযোগ করুন</h4>
            <a href={`tel:+91${PHONE}`}><Phone size={17}/> {PHONE}</a>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
              <MessageCircle size={17}/> WhatsApp-এ মেসেজ করুন
            </a>
            <p>অপারেটর: WASIM AKRAM MONDAL</p>
          </div>

          <div>
            <h4>কুইক লিংকস</h4>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>⌂ হোম</a>
            <a href="#cable" onClick={(e) => { e.preventDefault(); scrollToSection('cable'); }}>▣ কেবল টিভি</a>
            <a href="#broadband" onClick={(e) => { e.preventDefault(); scrollToSection('broadband'); }}>◉ ব্রডব্যান্ড</a>
            <a href="#payment" onClick={(e) => { e.preventDefault(); scrollToSection('payment'); }}>💳 পেমেন্ট অপশন</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>ⓘ আমাদের সম্পর্কে</a>
            <a href="#booking" onClick={(e) => { e.preventDefault(); scrollToBooking(); }}>✎ নতুন বুকিং</a>
          </div>

          <div className="copyright">
            © 2026 Dream's Cable and Broadband Service.<br/>
            All Rights Reserved.
          </div>

          {/* ================= POWERED BY SAMIM MANDAL ================= */}
          <div className="powered-by-wrap">
            Powered by <strong>SAMIM MANDAL</strong>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action Button */}
      <a
        className="floating-wa"
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('নমস্কার, Dream’s Cable and Broadband Service-এর কানেকশন সম্পর্কে জানতে চাই।')}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp-এ যোগাযোগ করুন"
      >
        <MessageCircle/>
      </a>
    </div>
  )
}

export default App
