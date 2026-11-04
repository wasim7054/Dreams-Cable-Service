import React, { useMemo, useState, useEffect } from 'react'
import QRCode from 'qrcode'
import {
  House, Tv, Wifi, Info, Headphones, Phone, MessageCircle, ArrowRight,
  CheckCircle2, ShieldCheck, Zap, IndianRupee, Leaf, Menu, X, CalendarDays,
  Send, Router, SatelliteDish, MonitorPlay, Signal, Sparkles, CreditCard,
  QrCode, Copy, Check, ExternalLink, AlertCircle
} from 'lucide-react'

const PHONE = '9593127054'
const WHATSAPP = '919593127054'
// User's specific UPI ID:
const UPI_ID = 's2957158003@slc'

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

  // Payment Modal State
  const [payModalOpen, setPayModalOpen] = useState(false)
  const [selectedPayApp, setSelectedPayApp] = useState<'PhonePe' | 'Google Pay' | 'Paytm' | 'Any UPI'>('Any UPI')
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('')

  const selectedPlan = useMemo(() => planDetails[service], [service])

  // Generate UPI payment intent string
  const upiUrl = useMemo(() => {
    const note = encodeURIComponent(`Payment for ${service}`)
    return `upi://pay?pa=${UPI_ID}&pn=Dreams%20Cable%20and%20Broadband&am=${customPayAmount}&cu=INR&tn=${note}`
  }, [service, customPayAmount])

  // Generate real dynamic QR code whenever amount changes
  useEffect(() => {
    QRCode.toDataURL(upiUrl, {
      width: 200,
      margin: 1,
      color: {
        dark: '#07551f',
        light: '#ffffff',
      },
    })
      .then((url) => setQrCodeDataUrl(url))
      .catch((err) => console.error('QR Code error:', err))
  }, [upiUrl])

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
      'দয়া করে সংযোগটি নিশ্চিত করুন।'
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

  // Copy UPI ID to clipboard with visual feedback
  const handleCopyUpi = () => {
    navigator.clipboard.writeText(UPI_ID)
    setCopiedUpi(true)
    setTimeout(() => setCopiedUpi(false), 2500)
  }

  // Open Payment for specific App (PhonePe, GPay, Paytm)
  const handlePayAppClick = (appName: 'PhonePe' | 'Google Pay' | 'Paytm') => {
    setSelectedPayApp(appName)
    setPayModalOpen(true)
    handleCopyUpi()

    // Specific mobile app deep link schemes
    let appScheme = upiUrl
    if (appName === 'PhonePe') {
      appScheme = `phonepe://pay?pa=${UPI_ID}&pn=Dreams%20Cable%20and%20Broadband&am=${customPayAmount}&cu=INR`
    } else if (appName === 'Google Pay') {
      appScheme = `tez://upi/pay?pa=${UPI_ID}&pn=Dreams%20Cable%20and%20Broadband&am=${customPayAmount}&cu=INR`
    } else if (appName === 'Paytm') {
      appScheme = `paytmmp://pay?pa=${UPI_ID}&pn=Dreams%20Cable%20and%20Broadband&am=${customPayAmount}&cu=INR`
    }

    // Try opening native app if on mobile device
    try {
      if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location.href = appScheme
      }
    } catch {
      // Modal provides QR code and copy button fallback
    }
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
                    onClick={() => {
                      setPayModalOpen(true)
                      setSelectedPayApp('Any UPI')
                    }}
                    style={{ padding: '8px 16px', fontSize: '13px' }}
                  >
                    <CreditCard size={16} />
                    <span>UPI পেমেন্ট করুন (₹{selectedPlan.price})</span>
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
              নতুন কানেকশন চার্জ বা রিচার্জ পেমেন্টের জন্য নিচের <strong>PhonePe</strong>, <strong>Google Pay</strong>, বা <strong>Paytm</strong> বাটনে ক্লিক করুন অথবা কিউআর কোড স্ক্যান করুন:
            </p>

            <div className="payment-grid">
              
              {/* Left Column: Direct App Payment Buttons */}
              <div className="pay-methods">
                
                {/* PhonePe Option */}
                <button
                  type="button"
                  className="pay-btn-brand pay-phonepe"
                  onClick={() => handlePayAppClick('PhonePe')}
                >
                  <div className="pay-brand-name">
                    <span className="pay-brand-icon phonepe-icon">पे</span>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '15px' }}>PhonePe (ফোনপে)</div>
                      <small style={{ opacity: 0.85, fontSize: '11px' }}>Pay via PhonePe App / UPI</small>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '15px', fontWeight: 800 }}>₹{customPayAmount}</span>
                    <ArrowRight size={16} />
                  </div>
                </button>

                {/* Google Pay Option */}
                <button
                  type="button"
                  className="pay-btn-brand pay-gpay"
                  onClick={() => handlePayAppClick('Google Pay')}
                >
                  <div className="pay-brand-name">
                    <span className="pay-brand-icon gpay-icon">G</span>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '15px' }}>Google Pay (গুগল পে)</div>
                      <small style={{ opacity: 0.85, fontSize: '11px' }}>Pay via Google Pay App / UPI</small>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '15px', fontWeight: 800 }}>₹{customPayAmount}</span>
                    <ArrowRight size={16} />
                  </div>
                </button>

                {/* Paytm Option */}
                <button
                  type="button"
                  className="pay-btn-brand pay-paytm"
                  onClick={() => handlePayAppClick('Paytm')}
                >
                  <div className="pay-brand-name">
                    <span className="pay-brand-icon paytm-icon">P</span>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '15px' }}>Paytm (পেটিএম)</div>
                      <small style={{ opacity: 0.85, fontSize: '11px' }}>Pay via Paytm App / UPI</small>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '15px', fontWeight: 800 }}>₹{customPayAmount}</span>
                    <ArrowRight size={16} />
                  </div>
                </button>

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

              {/* Right Column: Real Scannable QR Code & UPI ID Card */}
              <div className="qr-card">
                <div className="qr-image-wrap">
                  {qrCodeDataUrl ? (
                    <img
                      src={qrCodeDataUrl}
                      alt="UPI QR Code for s2957158003@slc"
                      style={{ width: '160px', height: '160px', display: 'block' }}
                    />
                  ) : (
                    <div style={{ width: '160px', height: '160px', display: 'grid', placeItems: 'center', color: '#07551f' }}>
                      <QrCode size={60} />
                    </div>
                  )}
                </div>

                <div className="upi-info">
                  <strong>যেকোনো UPI অ্যাপ দিয়ে স্ক্যান করুন</strong>
                  <div style={{ fontSize: '11px', color: '#4a6b52' }}>PhonePe • Google Pay • Paytm • BHIM</div>
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
                  {copiedUpi ? '✓ UPI ID সফলভাবে কপি হয়েছে!' : 'ক্লিক করে UPI ID কপি করুন'}
                </div>

                <div style={{ marginTop: '10px', fontSize: '11px', color: '#55735b', maxWidth: '280px', lineHeight: '1.4' }}>
                  *পেমেন্ট সম্পন্ন করার পর স্ক্রিনশট বা UTR রেফারেন্স নম্বর <strong>9593127054</strong>-এ WhatsApp করে দিন।
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* ================= INTERACTIVE PAYMENT MODAL ================= */}
      {payModalOpen && (
        <div className="pay-modal-overlay" onClick={() => setPayModalOpen(false)}>
          <div className="pay-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="pay-modal-close"
              onClick={() => setPayModalOpen(false)}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#eafbe3', color: '#087b25', padding: '4px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 800, marginBottom: '6px' }}>
                <CheckCircle2 size={14} />
                <span>{selectedPayApp} UPI Payment</span>
              </div>
              <h3 style={{ margin: '4px 0', fontSize: '20px', color: '#07551f' }}>
                পেমেন্ট সম্পন্ন করুন: ₹{customPayAmount}
              </h3>
              <p style={{ margin: 0, fontSize: '12px', color: '#4d6954' }}>
                UPI ID: <strong>{UPI_ID}</strong>
              </p>
            </div>

            {/* QR Code Container */}
            <div style={{ background: '#f5fcf3', border: '1.5px dashed #40c93b', borderRadius: '16px', padding: '14px', display: 'inline-block', margin: '0 auto 14px' }}>
              {qrCodeDataUrl ? (
                <img
                  src={qrCodeDataUrl}
                  alt="QR Code"
                  style={{ width: '160px', height: '160px', display: 'block', margin: '0 auto' }}
                />
              ) : (
                <QrCode size={120} color="#087b25" />
              )}
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#087b25', marginTop: '6px' }}>
                {selectedPayApp} দিয়ে স্ক্যান করুন
              </div>
            </div>

            {/* UPI ID Copy Field */}
            <div style={{ marginBottom: '16px' }}>
              <button
                type="button"
                className="upi-id-badge"
                onClick={handleCopyUpi}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>{UPI_ID}</span>
                {copiedUpi ? <Check size={16} color="#087b25" /> : <Copy size={16} />}
              </button>
              <div style={{ fontSize: '11px', color: copiedUpi ? '#087b25' : '#5c705f', fontWeight: 600 }}>
                {copiedUpi ? '✓ UPI ID ক্লিপবোর্ডে কপি হয়েছে!' : 'UPI ID কপি করে অ্যাপে সরাসরি পে করতে পারেন'}
              </div>
            </div>

            {/* Direct Mobile Launch Button */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a
                className="pill-button"
                href={upiUrl}
                style={{ width: '100%', padding: '10px 16px', fontSize: '13px' }}
              >
                <CreditCard size={16} />
                <span>সরাসরি UPI অ্যাপে পে করুন (₹{customPayAmount})</span>
              </a>

              <a
                className="wa-send-btn"
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`নমস্কার, আমি Dream's Cable and Broadband Service-এ ₹${customPayAmount} পেমেন্ট করেছি (UPI ID: ${UPI_ID})। দয়া করে ভেরিফাই করুন।`)}`}
                target="_blank"
                rel="noreferrer"
                style={{ padding: '10px 16px', fontSize: '13px' }}
              >
                <MessageCircle size={16} />
                <span>পেমেন্ট স্ক্রিনশট WhatsApp-এ পাঠান</span>
              </a>
            </div>
          </div>
        </div>
      )}

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
