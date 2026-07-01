import { MapPin, Clock, CalendarDays, Navigation, Heart, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function GoogleBusiness() {
  const { t } = useLanguage();

  const servingAreas = [
    { name: 'Nusa Penida', desc: t('Kantor pusat utama pulau. Rapat tatap muka dan operasional harian.', 'Primary island headquarters. Daily on-site meetings and operations.'), coords: '8.7278° S, 115.5444° E' },
    { name: 'Klungkung', desc: t('Cakupan distrik administratif. Mendukung solusi agensi regional.', 'Administrative district cover. Supporting regional agency solutions.'), coords: '8.5361° S, 115.4032° E' },
    { name: 'Denpasar', desc: t('Menghubungkan integrasi digital, sinkronisasi API, dan klien utama.', 'Connecting digital integrations, API syncs, and client nodes.'), coords: '8.6705° S, 115.2126° E' },
    { name: 'Sanur', desc: t('Koneksi transit kapal cepat dan tempat pertemuan klien daratan.', 'Fast boat transit connections and mainland client meetpoints.'), coords: '8.6806° S, 115.2631° E' },
    { name: 'Bali', desc: t('Cakupan jarak jauh di seluruh provinsi dan konsultasi digital premium.', 'Province-wide remote coverage and premium digital consulting.'), coords: '8.4095° S, 115.1889° E' }
  ];

  return (
    <section id="local-seo" className="py-24 relative overflow-hidden bg-white">
      {/* Background blurs */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-blue font-mono">
            {t('// Melayani Bali & Nusa Penida', '// Serving Bali & Nusa Penida')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark">
            {t('Zona Layanan Lokal & Koordinat Kami', 'Our Local Service Zones & Coordinates')}
          </h2>
          <p className="text-base text-brand-dark/70 font-sans text-justify sm:text-center">
            {t(
              'Kami secara fisik berbasis di Nusa Penida dan melayani klien baik secara langsung di seluruh provinsi Bali maupun secara jarak jauh untuk pemilik bisnis internasional yang memiliki operasional lokal.',
              'We are physically based in Nusa Penida and serve clients both on-site across Bali province and remotely for international stakeholders who own local operations.'
            )}
          </p>
        </div>

        {/* Content Layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
          
          {/* Serving areas list with coordinate tags */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-brand-blue bg-brand-blue/10 px-2.5 py-1 rounded-full uppercase">
                {t('Peta Cakupan Aktif', 'Active Coverage Map')}
              </span>
              <h3 className="text-2xl font-extrabold text-brand-dark mt-2 tracking-tight">
                {t('Jejak Fisik & Operasional Kami', 'Our Physical & Operational Footprint')}
              </h3>
            </div>

            {/* Mobile Swipe Cue */}
            <div className="flex sm:hidden items-center justify-center gap-1.5 mb-2 text-[10px] font-bold tracking-wider uppercase text-brand-blue/80 font-mono animate-pulse">
              <span>{t('← Geser untuk lokasi →', '← Swipe for locations →')}</span>
            </div>

            <div className="flex overflow-x-auto pb-4 gap-4 snap-x snap-mandatory sm:grid sm:grid-cols-2 no-scrollbar">
              {servingAreas.map((area) => (
                <div
                  key={area.name}
                  className="flex-shrink-0 w-[80vw] sm:w-auto snap-center p-5 rounded-2xl border border-brand-dark/10 bg-neutral-50 hover:bg-brand-blue/5 hover:border-brand-blue/30 transition-all duration-300 group shadow-2xs"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-brand-blue animate-bounce" />
                      <h4 className="font-extrabold text-brand-dark text-sm sm:text-base">
                        {area.name}
                      </h4>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-brand-dark/40 uppercase">
                      {t('AKTIF', 'ACTIVE')}
                    </span>
                  </div>
                  <p className="text-xs text-brand-dark/75 mt-2 font-sans leading-relaxed text-justify">
                    {area.desc}
                  </p>
                  <div className="mt-3.5 pt-3.5 border-t border-brand-dark/5 flex items-center justify-between text-[9px] font-mono text-brand-dark/50">
                    <span className="flex items-center gap-1">
                      <Navigation className="w-3 h-3 text-brand-blue" />
                      {area.coords}
                    </span>
                    <span className="text-emerald-600 font-bold">{t('100% TERCOVER', '100% COVERED')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Operational Hours & Google Business Info block - Right */}
          <div className="lg:col-span-5">
            <div className="glass-card-premium rounded-3xl border border-brand-dark/15 p-6 sm:p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[120px] h-[120px] rounded-full bg-brand-blue/10 blur-xl pointer-events-none" />
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-extrabold text-brand-dark">
                    BaleHost Nusa Penida
                  </h4>
                  <p className="text-xs text-brand-dark/50 font-mono">
                    {t('Solusi Digital Profesional', 'Professional Digital Solutions')}
                  </p>
                </div>
                {/* Simulated Google Star Rating badge */}
                <div className="bg-white border border-brand-dark/5 p-2 rounded-xl text-center shadow-xs">
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-black text-brand-dark">5.0</span>
                  </div>
                  <div className="text-[8px] font-mono text-brand-dark/40 mt-0.5 leading-none font-bold">
                    {t('100+ Ulasan', '100+ Reviews')}
                  </div>
                </div>
              </div>

              {/* Business operating timings table */}
              <div className="space-y-3.5 pt-4 border-t border-brand-dark/5 text-xs font-sans">
                <div className="flex items-center justify-between py-1 border-b border-brand-dark/5">
                  <span className="flex items-center gap-2 text-brand-dark/70 font-semibold">
                    <CalendarDays className="w-4 h-4 text-brand-blue" />
                    <span>{t('Senin - Jumat', 'Monday - Friday')}</span>
                  </span>
                  <span className="font-mono font-bold text-brand-dark">09:00 AM - 06:00 PM</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-brand-dark/5">
                  <span className="flex items-center gap-2 text-brand-dark/70 font-semibold">
                    <CalendarDays className="w-4 h-4 text-brand-blue" />
                    <span>{t('Sabtu', 'Saturday')}</span>
                  </span>
                  <span className="font-mono font-bold text-brand-dark">09:00 AM - 02:00 PM</span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-brand-dark/5">
                  <span className="flex items-center gap-2 text-brand-dark/70 font-semibold">
                    <Clock className="w-4 h-4 text-rose-500 animate-pulse" />
                    <span>{t('Dukungan Darurat Klien', 'Emergency Client Support')}</span>
                  </span>
                  <span className="font-mono font-extrabold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-md">{t('24/7 AKTIF', '24/7 ACTIVE')}</span>
                </div>
              </div>

              {/* Localized Gmaps Address representation */}
              <div className="bg-[#0C1446]/5 border border-[#0C1446]/10 rounded-2xl p-4 text-xs font-sans text-brand-dark/85 flex gap-3">
                <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0" />
                <div className="space-y-1">
                  <div className="font-bold">{t('Alamat Kantor Utama:', 'Main Office Address:')}</div>
                  <div className="leading-relaxed">
                    Ped, Nusa Penida, Klungkung Regency, Bali 80771, Indonesia
                  </div>
                </div>
              </div>

              {/* Heart local engagement statement */}
              <div className="pt-2 text-center text-[10px] text-brand-dark/60 font-mono flex items-center justify-center gap-1.5">
                <span>{t('Dibuat secara lokal dengan', 'Made locally with')}</span>
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                <span>{t('untuk Nusa Penida & Bali', 'for Nusa Penida & Bali')}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
