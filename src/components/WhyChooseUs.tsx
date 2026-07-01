import { Zap, Palette, Smartphone, TrendingUp, Lock, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const features = [
    {
      id: 'why-performance',
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: t('Performa Sangat Cepat', 'Fast Performance'),
      description: t(
        'Skor kecepatan Lighthouse 95+. Pembuatan situs statis dan Edge caching menjamin waktu pemuatan di bawah 0,5 detik.',
        'Lighthouse speed scores of 95+. Static site generation and Edge caching guarantee loading times of under 0.5 seconds.'
      )
    },
    {
      id: 'why-design',
      icon: <Palette className="w-6 h-6 text-purple-500" />,
      title: t('Desain Modern', 'Modern Design'),
      description: t(
        'Arsitektur visual futuristik mirip dengan Apple, Stripe, dan Vercel. Kami membuat tata letak merek kustom di Figma dari awal.',
        'Futuristic visual architecture similar to Apple, Stripe, and Vercel. We create custom brand layouts in Figma from scratch.'
      )
    },
    {
      id: 'why-responsive',
      icon: <Smartphone className="w-6 h-6 text-emerald-500" />,
      title: t('100% Responsif', '100% Responsive'),
      description: t(
        'Dirancang untuk navigasi mulus di semua lebar perangkat. Lebih dari 85% turis di Bali memesan tur menggunakan ponsel.',
        'Engineered for smooth navigation on all device widths. Over 85% of travel tourists in Bali book tours using mobile phones.'
      )
    },
    {
      id: 'why-seo',
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      title: t('Siap SEO', 'SEO Ready'),
      description: t(
        'Markup HTML semantik dengan skema JSON-LD terstruktur. Kami mengindeks pin peta Anda untuk menghasilkan pemesanan Google langsung.',
        'Semantic HTML markup with schema structured JSON-LD embedded. We index your maps pin to drive direct Google bookings.'
      )
    },
    {
      id: 'why-secure',
      icon: <Lock className="w-6 h-6 text-rose-500 animate-pulse" />,
      title: t('Hosting Aman', 'Secure Hosting'),
      description: t(
        'Penerapan didukung oleh sertifikat SSL kelas Enterprise, pencadangan harian, dan firewall Cloudflare yang melindungi dari DDoS.',
        'Deployments backed by Enterprise-grade SSL certificates, daily backups, and Cloudflare firewalls protecting from DDoS.'
      )
    },
    {
      id: 'why-support',
      icon: <HeartHandshake className="w-6 h-6 text-pink-500" />,
      title: t('Dukungan Lokal', 'Local Support'),
      description: t(
        'Kami adalah tim lokal berdedikasi yang berbasis di Nusa Penida. Hubungi kami dengan mudah via WhatsApp atau pertemuan tatap muka kapan saja.',
        'We are a dedicated local team based in Nusa Penida. Easily reach us via WhatsApp or face-to-face meetings anytime.'
      )
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 relative overflow-hidden bg-[#0C1446] text-white">
      {/* Background Starry Grid or lights */}
      <div className="absolute inset-0 grid-bg-dark opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-blue/25 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-soft/20 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-soft font-mono">
            {t('// Proposisi Nilai', '// Value Proposition')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t('Mengapa Bisnis Bali yang Sukses Memilih BaleHost', 'Why Successful Bali Businesses Choose BaleHost')}
          </h2>
          <p className="text-base text-brand-soft/85 font-sans text-justify sm:text-center">
            {t(
              'Kami tidak hanya menginstal templat generik murah. Kami membangun aset perusahaan kustom yang dirancang untuk menarik prospek, mengamankan pemesanan, dan mengoptimalkan kecepatan operasional.',
              'We do not just install cheap generic templates. We build custom corporate assets designed to drive leads, secure bookings, and optimize operational speed.'
            )}
          </p>
        </div>

        {/* Mobile Swipe Cue */}
        <div className="flex md:hidden items-center justify-center gap-1.5 mb-5 text-[11px] font-bold tracking-wider uppercase text-brand-soft/75 font-mono animate-pulse">
          <span>{t('← Geser untuk kelebihan kami →', '← Swipe for our benefits →')}</span>
        </div>

        {/* Features Card Matrix */}
        <div className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 no-scrollbar">
          {features.map((feat) => (
            <div
              key={feat.id}
              className="flex-shrink-0 w-[85vw] sm:w-[380px] md:w-auto snap-center relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-soft/30 hover:bg-white/[0.08] transition-all duration-300 group hover:-translate-y-1.5 shadow-lg text-left"
            >
              {/* Icon Frame */}
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                {feat.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white tracking-tight">
                {feat.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-brand-soft/80 mt-3 font-sans leading-relaxed text-justify">
                {feat.description}
              </p>

              {/* Decorative Subtle Glowing corner overlay */}
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-brand-soft opacity-20 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Visual Achievement Counter Footer row */}
        <div className="mt-20 pt-12 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-extrabold text-white">0.4s</div>
            <div className="text-xs text-brand-soft font-mono mt-1 uppercase tracking-wider">{t('Rata-rata Waktu Respons', 'Avg Response Time')}</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">100%</div>
            <div className="text-xs text-brand-soft font-mono mt-1 uppercase tracking-wider">{t('Peringkat Ergonomis Seluler', 'Mobile Ergonomic Rank')}</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">Rp0</div>
            <div className="text-xs text-brand-soft font-mono mt-1 uppercase tracking-wider">{t('Komisi OTA yang Dibayar', 'OTA Commissions Paid')}</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">100+</div>
            <div className="text-xs text-brand-soft font-mono mt-1 uppercase tracking-wider">{t('Kata Kunci Teroptimasi', 'Optimized Keywords')}</div>
          </div>
        </div>

      </div>
    </section>
  );
}
