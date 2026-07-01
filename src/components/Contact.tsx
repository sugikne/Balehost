import React, { useState } from 'react';
import { Mail, MessageSquare, MapPin, Clock, Send, CheckCircle, Smartphone, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: 'Villa / Resort',
    serviceNeeded: 'Website Development',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const businessOptions = [
    { value: 'Villa / Resort', label: t('Vila / Resort', 'Villa / Resort') },
    { value: 'Hotel / Homestay', label: t('Hotel / Penginapan', 'Hotel / Homestay') },
    { value: 'Restaurant / Café', label: t('Restoran / Kafe', 'Restaurant / Café') },
    { value: 'Dive Center / Snorkeling', label: t('Pusat Selam / Snorkeling', 'Dive Center / Snorkeling') },
    { value: 'Motorbike / Car Rental', label: t('Sewa Motor / Mobil', 'Motorbike / Car Rental') },
    { value: 'Tour & Travel Operator', label: t('Operator Tur & Perjalanan', 'Tour & Travel Operator') },
    { value: 'Local UMKM / Retail', label: t('UMKM Lokal / Ritel', 'Local UMKM / Retail') },
    { value: 'Other Business', label: t('Bisnis Lainnya', 'Other Business') }
  ];

  const serviceOptions = [
    { value: 'Website Development', label: t('Pembuatan Website', 'Website Development') },
    { value: 'Landing Page Design', label: t('Desain Landing Page', 'Landing Page Design') },
    { value: 'UI/UX Design', label: t('Desain UI/UX', 'UI/UX Design') },
    { value: 'Premium Web Hosting', label: t('Hosting Web Premium', 'Premium Web Hosting') },
    { value: 'SEO Optimization Pack', label: t('Paket Optimasi SEO', 'SEO Optimization Pack') },
    { value: 'Domain & Workspace Setup', label: t('Pengaturan Domain & Workspace', 'Domain & Workspace Setup') }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getWhatsAppSubmitLink = () => {
    const text = `Halo BaleHost! Saya ingin mengajukan pertanyaan / pendaftaran proyek.

Detail Kontak:
- Nama: ${formData.name}
- Email: ${formData.email}
- WhatsApp: ${formData.phone}
- Kategori Bisnis: ${formData.businessType}
- Layanan yang Dibutuhkan: ${formData.serviceNeeded}
- Pesan: ${formData.message}`;

    return `https://wa.me/6282144558833?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert(t('Mohon lengkapi Nama dan No WhatsApp Anda.', 'Please complete your Name and WhatsApp Number.'));
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-neutral-50 grid-bg">
      {/* Background blurs */}
      <div className="absolute top-1/4 right-10 w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[250px] h-[250px] rounded-full bg-brand-soft/10 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-blue font-mono">
            {t('// Hubungi Kami', '// Start Conversation')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark">
            {t('Mari Bangun Rumah Digital Anda Hari Ini', "Let's Build Your Digital Home Today")}
          </h2>
          <p className="text-base text-brand-dark/70 font-sans text-justify sm:text-center">
            {t(
              'Siap untuk mengembangkan bisnis Anda secara digital dan mengamankan penjualan bebas komisi? Kirimkan pertanyaan kepada kami di bawah ini atau ketuk koneksi WhatsApp langsung kami.',
              'Ready to scale your business digitally and secure commission-free sales? Send us an inquiry below or tap our direct WhatsApp connection.'
            )}
          </p>
        </div>

        {/* Content columns split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch text-left">
          
          {/* Direct Contact node metrics - Left column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Context cards */}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold text-brand-blue uppercase tracking-widest bg-brand-blue/10 px-2 py-0.5 rounded-md">
                  {t('Saluran Kontak Langsung', 'Immediate Contact Channels')}
                </span>
                <h3 className="text-xl font-extrabold text-brand-dark tracking-tight mt-2">
                  {t('Saluran Integrasi Langsung', 'Direct Integration Channels')}
                </h3>
              </div>

              {/* Direct Nodes */}
              <div className="space-y-4 text-sm font-sans text-brand-dark/85">
                
                {/* WhatsApp */}
                <a
                  href="https://wa.me/6282144558833"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-brand-dark/10 hover:border-brand-blue/30 hover:bg-brand-blue/[0.01] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold text-brand-dark/40 leading-none uppercase">{t('Dukungan WhatsApp (Tercepat)', 'WhatsApp Support (Fastest)')}</div>
                    <div className="font-bold text-brand-dark mt-1">+62 821-4455-8833</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@balehost.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-brand-dark/10 hover:border-brand-blue/30 hover:bg-brand-blue/[0.01] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-brand-blue flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold text-brand-dark/40 leading-none uppercase">{t('Saluran Email', 'Email Channel')}</div>
                    <div className="font-bold text-brand-dark mt-1">hello@balehost.com</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-brand-dark/10">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold text-brand-dark/40 leading-none uppercase">{t('Lokasi Koordinat Kantor Pusat', 'HQ Coordinate Location')}</div>
                    <div className="font-bold text-brand-dark mt-1">{t('Ped, Nusa Penida, Bali', 'Ped, Nusa Penida, Bali')}</div>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-brand-dark/10">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
                    <Clock className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold text-brand-dark/40 leading-none uppercase">{t('Jam Operasional Bisnis', 'Operational Business Hours')}</div>
                    <div className="font-bold text-brand-dark mt-1">{t('Senin - Sabtu (09:00 - 18:00)', 'Monday - Sat (09:00 - 18:00)')}</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Social media connections info */}
            <div className="pt-6 border-t border-brand-dark/5 space-y-2 font-sans">
              <div className="text-[10px] font-mono font-bold text-brand-dark/55 uppercase tracking-widest">
                {t('Ikuti Karya Kreatif Kami:', 'Follow Our Creative Work:')}
              </div>
              <div className="flex gap-2 text-xs">
                <a href="https://instagram.com/balehost" target="_blank" rel="noreferrer" className="px-3.5 py-2 bg-white hover:bg-pink-50 border border-brand-dark/10 hover:border-pink-300 rounded-xl font-bold text-brand-dark transition-colors">
                  Instagram
                </a>
                <a href="https://facebook.com/balehost" target="_blank" rel="noreferrer" className="px-3.5 py-2 bg-white hover:bg-blue-50 border border-brand-dark/10 hover:border-blue-300 rounded-xl font-bold text-brand-dark transition-colors">
                  Facebook
                </a>
                <a href="https://tiktok.com/@balehost" target="_blank" rel="noreferrer" className="px-3.5 py-2 bg-white hover:bg-neutral-100 border border-brand-dark/10 hover:border-brand-dark/30 rounded-xl font-bold text-brand-dark transition-colors">
                  TikTok
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Contact Form - Right column */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-brand-dark/10 p-6 sm:p-10 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[120px] h-[120px] rounded-full bg-brand-blue/5 blur-xl pointer-events-none" />
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center gap-1.5 border-b border-brand-dark/5 pb-3">
                    <Sparkles className="w-4 h-4 text-brand-blue animate-spin-slow" />
                    <h4 className="text-lg font-extrabold text-brand-dark tracking-tight">
                      {t('Formulir Konsultasi Gratis', 'Free Consultation Form')}
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name input */}
                    <div className="space-y-1.5 text-xs">
                      <label htmlFor="input-name" className="font-bold text-brand-dark/70 font-sans">{t('Nama Lengkap *', 'Full Name *')}</label>
                      <input
                        id="input-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Wayan Sudiarta"
                        className="w-full px-4 py-3 rounded-xl border border-brand-dark/10 bg-neutral-50/50 text-xs font-sans text-brand-dark focus:outline-none focus:border-brand-blue focus:bg-white transition-all"
                      />
                    </div>

                    {/* Phone input */}
                    <div className="space-y-1.5 text-xs">
                      <label htmlFor="input-phone" className="font-bold text-brand-dark/70 font-sans">{t('Nomor WhatsApp *', 'WhatsApp Number *')}</label>
                      <input
                        id="input-phone"
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0821XXXXXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-brand-dark/10 bg-neutral-50/50 text-xs font-sans text-brand-dark focus:outline-none focus:border-brand-blue focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email input */}
                    <div className="space-y-1.5 text-xs">
                      <label htmlFor="input-email" className="font-bold text-brand-dark/70 font-sans">{t('Alamat Email (Opsional)', 'Email Address (Optional)')}</label>
                      <input
                        id="input-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="hello@yourvilla.com"
                        className="w-full px-4 py-3 rounded-xl border border-brand-dark/10 bg-neutral-50/50 text-xs font-sans text-brand-dark focus:outline-none focus:border-brand-blue focus:bg-white transition-all"
                      />
                    </div>

                    {/* Business Type drop down */}
                    <div className="space-y-1.5 text-xs">
                      <label htmlFor="select-business" className="font-bold text-brand-dark/70 font-sans">{t('Kategori Bisnis Anda', 'Your Business Category')}</label>
                      <select
                        id="select-business"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-brand-dark/10 bg-neutral-50/50 text-xs font-sans text-brand-dark focus:outline-none focus:border-brand-blue focus:bg-white transition-all cursor-pointer"
                      >
                        {businessOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Required service selector */}
                  <div className="space-y-1.5 text-xs">
                    <label htmlFor="select-service" className="font-bold text-brand-dark/70 font-sans">{t('Layanan Digital yang Dibutuhkan', 'Required Digital Service')}</label>
                    <select
                      id="select-service"
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-brand-dark/10 bg-neutral-50/50 text-xs font-sans text-brand-dark focus:outline-none focus:border-brand-blue focus:bg-white transition-all cursor-pointer"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message box */}
                  <div className="space-y-1.5 text-xs">
                    <label htmlFor="input-message" className="font-bold text-brand-dark/70 font-sans">{t('Ceritakan tentang proyek Anda', 'Tell us about your project')}</label>
                    <textarea
                      id="input-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('Saya butuh website villa dengan integrasi WhatsApp langsung untuk booking tamu dari Australia...', 'I need a villa website with direct WhatsApp integration to book guests from Australia...')}
                      className="w-full px-4 py-3 rounded-xl border border-brand-dark/10 bg-neutral-50/50 text-xs font-sans text-brand-dark focus:outline-none focus:border-brand-blue focus:bg-white transition-all"
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl text-center text-sm font-extrabold bg-[#0C1446] hover:bg-brand-blue text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      {t('Kirim & Siapkan Link Proposal', 'Submit & Prepare Proposal Link')}
                    </button>
                    <p className="text-[10px] text-brand-dark/55 text-center mt-2 font-mono">
                      🔒 {t('Data Anda sepenuhnya aman. Kami tidak pernah membagikan kontak.', 'Your data is fully secure. We never share contacts.')}
                    </p>
                  </div>
                </form>
              ) : (
                <div className="py-8 text-center space-y-6 animate-fade-in font-sans">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-2xl font-black text-brand-dark tracking-tight">
                      {t(`Terima Kasih, ${formData.name}!`, `Thank You, ${formData.name}!`)}
                    </h4>
                    <p className="text-sm text-brand-dark/80 max-w-md mx-auto leading-relaxed">
                      {t(
                        'Pertanyaan bisnis Anda telah berhasil dikompilasi. Untuk menerima tanggapan instan dan menjadwalkan panggilan Anda, silakan ketuk tombol proposal langsung di bawah.',
                        'Your business inquiry has been compiled successfully. To receive an instant response and schedule your call, please tap the direct proposal button below.'
                      )}
                    </p>
                  </div>

                  {/* Dynamic Whatsapp Redirect link */}
                  <div className="pt-4">
                    <a
                      href={getWhatsAppSubmitLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-teal-600 hover:to-emerald-500 text-white font-extrabold text-sm shadow-lg shadow-emerald-500/25 transition-transform hover:-translate-y-0.5"
                    >
                      <Smartphone className="w-5 h-5" />
                      {t('Kirim ke WhatsApp (Tanggapan langsung)', 'Send to WhatsApp (Direct response)')}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        businessType: 'Villa / Resort',
                        serviceNeeded: 'Website Development',
                        message: ''
                      });
                    }}
                    className="text-xs font-mono font-bold text-brand-dark/50 hover:text-brand-blue transition-colors uppercase tracking-widest"
                  >
                    ← {t('Kirim Pertanyaan Lain', 'Submit Another Inquiry')}
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
