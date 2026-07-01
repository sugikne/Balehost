import { useState, useEffect } from 'react';
import { PACKAGES_DATA, CALCULATOR_FEATURES } from '../data';
import { Check, X, Shield, Clock, HelpCircle, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Packages() {
  const { language, t } = useLanguage();
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'feat-base-lp', // default to base landing page
    'feat-cms',
    'feat-domain-com'
  ]);
  const [calcPrice, setCalcPrice] = useState(0);
  const [calcDuration, setCalcDuration] = useState(0);
  const [isStep2Open, setIsStep2Open] = useState(false);
  const [isStep3Open, setIsStep3Open] = useState(false);
  const [isStep1Open, setIsStep1Open] = useState(false);
  const [isScopeOpen, setIsScopeOpen] = useState(false);

  // Recalculate price and duration when selections change
  useEffect(() => {
    let priceSum = 0;
    let pageTypeSelected = false;

    selectedFeatures.forEach((featId) => {
      const feat = CALCULATOR_FEATURES.find((f) => f.id === featId);
      if (feat) {
        priceSum += feat.price;
        if (feat.category === 'pages') {
          pageTypeSelected = true;
        }
      }
    });

    // Enforce at least one base page type
    if (!pageTypeSelected) {
      // default back to landing page if none selected
      setSelectedFeatures((prev) => [...prev, 'feat-base-lp']);
      return;
    }

    setCalcPrice(priceSum);

    // Estimate working days
    // Base days: Landing=5 days, CoProf=12 days, App=25 days
    let baseDays = 5;
    if (selectedFeatures.includes('feat-base-app')) baseDays = 25;
    else if (selectedFeatures.includes('feat-base-cp')) baseDays = 12;

    // Additional days per feature
    let addDays = 0;
    if (selectedFeatures.includes('feat-cms')) addDays += 3;
    if (selectedFeatures.includes('feat-booking')) addDays += 6;
    if (selectedFeatures.includes('feat-payment')) addDays += 5;
    if (selectedFeatures.includes('feat-multilang')) addDays += 3;
    if (selectedFeatures.includes('feat-seo-adv')) addDays += 2;

    setCalcDuration(baseDays + addDays);
  }, [selectedFeatures]);

  const handleToggleFeature = (id: string, category: string) => {
    // If it's a page type, it is mutually exclusive (enforce single selection)
    if (category === 'pages') {
      const otherPageIds = CALCULATOR_FEATURES.filter((f) => f.category === 'pages').map((f) => f.id);
      setSelectedFeatures((prev) => {
        const filtered = prev.filter((item) => !otherPageIds.includes(item));
        return [...filtered, id];
      });
    } else {
      setSelectedFeatures((prev) => {
        if (prev.includes(id)) {
          return prev.filter((item) => item !== id);
        } else {
          return [...prev, id];
        }
      });
    }
  };

  const formatPrice = (value: number) => {
    if (value === 0) return 'Rp0';
    return 'Rp' + value.toLocaleString('id-ID');
  };

  const getWhatsAppLink = () => {
    const selectedNames = selectedFeatures
      .map((featId) => {
        const feat = CALCULATOR_FEATURES.find((f) => f.id === featId);
        return feat ? (language === 'id' && feat.nameId ? feat.nameId : feat.name) : '';
      })
      .filter(Boolean)
      .join(', ');

    const text = t(
      `Halo BaleHost! Saya tertarik dengan penawaran pembuatan website custom.\n\nEstimasi Kalkulator:\n- Fitur Pilihan: ${selectedNames}\n- Estimasi Harga: ${formatPrice(calcPrice)}\n- Estimasi Pengerjaan: ${calcDuration} Hari Kerja\n\nMohon konsultasi lebih lanjut untuk pengerjaan website bisnis saya. Terima kasih!`,
      `Hello BaleHost! I am interested in a custom website development proposal.\n\nCalculator Estimate:\n- Selected Features: ${selectedNames}\n- Estimated Price: ${formatPrice(calcPrice)}\n- Estimated Timeline: ${calcDuration} Working Days\n\nPlease contact me for further consultation. Thank you!`
    );

    return `https://wa.me/6282144558833?text=${encodeURIComponent(text)}`;
  };

  const selectedStep1Id = selectedFeatures.find((fId) => CALCULATOR_FEATURES.filter((f) => f.category === 'pages').map((f) => f.id).includes(fId)) || 'feat-base-lp';
  const selectedStep1Feature = CALCULATOR_FEATURES.find((f) => f.id === selectedStep1Id);
  
  const selectedStep1Name = selectedStep1Feature ? (language === 'id' && selectedStep1Feature.nameId ? selectedStep1Feature.nameId : selectedStep1Feature.name) : '';
  const selectedStep1Desc = selectedStep1Feature ? (language === 'id' && selectedStep1Feature.descriptionId ? selectedStep1Feature.descriptionId : selectedStep1Feature.description) : '';

  const selectedStep2Features = CALCULATOR_FEATURES.filter((f) => f.category === 'features' && selectedFeatures.includes(f.id));
  const selectedStep2Count = selectedStep2Features.length;
  const selectedStep2Price = selectedStep2Features.reduce((sum, f) => sum + f.price, 0);
  const selectedStep2Names = selectedStep2Features.map((f) => {
    const name = language === 'id' && f.nameId ? f.nameId : f.name;
    return name.split(' (')[0];
  }).join(', ');

  const selectedStep3Features = CALCULATOR_FEATURES.filter((f) => (f.category === 'hosting' || f.category === 'support') && selectedFeatures.includes(f.id));
  const selectedStep3Count = selectedStep3Features.length;
  const selectedStep3Price = selectedStep3Features.reduce((sum, f) => sum + f.price, 0);
  const selectedStep3Names = selectedStep3Features.map((f) => {
    const name = language === 'id' && f.nameId ? f.nameId : f.name;
    return name.split(' (')[0];
  }).join(', ');

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-white">
      {/* Dynamic Glow Artifacts */}
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] rounded-full bg-brand-blue/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[300px] h-[300px] rounded-full bg-brand-soft/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-blue font-mono">
            {t('// Paket Harga', '// Pricing Packages')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark">
            {t('Paket Website Simple & Transparan', 'Simple, Transparent Website Packages')}
          </h2>
          <p className="text-base text-brand-dark/70 font-sans text-justify sm:text-center">
            {t(
              'Pilih paket pengembangan yang sesuai dengan skala bisnis Anda saat ini, atau gunakan kalkulator kustom interaktif kami di bawah untuk menyusun matrik fitur personal.',
              'Choose a development package suited to your current scale, or use our interactive custom quote builder below to design a personalized feature matrix.'
            )}
          </p>
        </div>

        {/* Mobile Swipe Cue */}
        <div className="flex lg:hidden items-center justify-center gap-1.5 mb-5 text-[11px] font-bold tracking-wider uppercase text-brand-blue/80 font-mono animate-pulse">
          <span>{t('← Geser untuk melihat paket →', '← Swipe to view packages →')}</span>
        </div>

        {/* 3 Core Package Cards */}
        <div className="flex overflow-x-auto pb-6 gap-6 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:gap-8 items-stretch mb-20 no-scrollbar">
          {PACKAGES_DATA.map((pkg) => {
            const isPopular = pkg.isPopular;
            const displayPkgName = language === 'id' && pkg.nameId ? pkg.nameId : pkg.name;
            const displayPkgDesc = language === 'id' && pkg.descriptionId ? pkg.descriptionId : pkg.description;
            const displayPkgPeriod = language === 'id' && pkg.periodId ? pkg.periodId : pkg.period;
            const displayPkgFeatures = language === 'id' && pkg.featuresId ? pkg.featuresId : pkg.features;
            const displayPkgNotIncluded = language === 'id' && pkg.notIncludedId ? pkg.notIncludedId : pkg.notIncluded;
            const displayPkgBadge = language === 'id' && pkg.badgeId ? pkg.badgeId : pkg.badge;
            const displayPkgButtonText = language === 'id' && pkg.buttonTextId ? pkg.buttonTextId : pkg.buttonText;

            const packageWhatsAppMsg = t(
              `Halo BaleHost! Saya tertarik dengan paket ${displayPkgName} (${pkg.price}) untuk bisnis saya. Mohon informasi dan konsultasi lebih lanjut. Terima kasih!`,
              `Hello BaleHost! I am interested in the ${pkg.name} package (${pkg.price}) for my business. Please provide more information and consultation. Thank you!`
            );

            return (
              <div
                key={pkg.id}
                className={`flex-shrink-0 w-[85vw] sm:w-[380px] lg:w-auto snap-center rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-2 shadow-md ${
                  isPopular
                    ? 'bg-[#0C1446] text-white border border-[#2B5C92]/60 ring-2 ring-brand-blue shadow-brand-blue/15'
                    : 'bg-neutral-50 text-brand-dark border border-brand-dark/10'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <span className="absolute top-5 right-5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-brand-blue text-white tracking-widest shadow-xs">
                    {displayPkgBadge}
                  </span>
                )}

                <div className="space-y-6 text-left">
                  {/* Name */}
                  <div>
                    <h3 className="text-2xl font-extrabold tracking-tight">
                      {displayPkgName}
                    </h3>
                    <p className={`text-xs mt-1.5 ${isPopular ? 'text-white/70' : 'text-brand-dark/60'} font-sans text-justify`}>
                      {displayPkgDesc}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="border-y border-brand-dark/10 py-4.5 border-dashed">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                      {pkg.price}
                    </span>
                    {pkg.priceNumeric > 0 && (
                      <span className={`text-xs ml-1 font-mono font-bold ${isPopular ? 'text-white/60' : 'text-brand-dark/50'}`}>
                        / {displayPkgPeriod}
                      </span>
                    )}
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-3.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider font-mono opacity-60">
                      {t('Cakupan Fitur:', 'Features Scope:')}
                    </h4>
                    <ul className="space-y-2.5">
                      {displayPkgFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <Check className={`w-4 h-4 mr-2.5 flex-shrink-0 mt-0.5 ${isPopular ? 'text-cyan-400' : 'text-brand-blue'}`} />
                          <span className="font-sans leading-tight">{feat}</span>
                        </li>
                      ))}
                      {displayPkgNotIncluded?.map((feat, i) => (
                        <li key={i} className="flex items-start text-sm opacity-40">
                          <X className="w-4 h-4 mr-2.5 text-rose-500 flex-shrink-0 mt-0.5" />
                          <span className="font-sans line-through leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-8">
                  <a
                    href={`https://wa.me/6282144558833?text=${encodeURIComponent(packageWhatsAppMsg)}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`block w-full py-4.5 rounded-2xl text-center text-sm font-bold transition-all ${
                      isPopular
                        ? 'bg-gradient-to-r from-brand-blue to-cyan-500 hover:from-cyan-500 hover:to-brand-blue text-white shadow-lg'
                        : 'bg-brand-dark hover:bg-brand-blue text-white shadow-xs'
                    }`}
                  >
                    {displayPkgButtonText}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* INTERACTIVE COMPREHENSIVE PROPOSAL CALCULATOR */}
        <div className="glass-card-premium rounded-3xl border border-brand-dark/10 p-6 sm:p-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Calculator Options - Left */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-[10px] font-bold font-mono uppercase tracking-wider">
                  {t('Sandbox Interaktif', 'Interactive Sandbox')}
                </span>
                <h3 className="text-2xl font-extrabold text-brand-dark mt-2 tracking-tight">
                  {t('Kalkulasi Biaya Kustom', 'Custom Cost Calculator')}
                </h3>
                <p className="text-sm text-brand-dark/70 mt-1 font-sans">
                  {t(
                    'Dapatkan estimasi penawaran digital Anda secara instan.',
                    'Get an instant digital quote.'
                  )}
                </p>
              </div>

              {/* Categorized Options */}
              <div className="space-y-5">
                
                {/* 1. Base Structure (iOS Style Dropdown Single-select) */}
                <div className="space-y-2.5 relative">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark/60 font-mono flex items-center gap-1.5">
                    <span>{t('Step 1: Pilih Arsitektur', 'Step 1: Choose Architecture')}</span>
                    <HelpCircle className="w-3.5 h-3.5 text-brand-blue/50" />
                  </h4>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setIsStep1Open(!isStep1Open);
                        setIsStep2Open(false);
                        setIsStep3Open(false);
                      }}
                      className="w-full flex items-center justify-between p-3.5 rounded-xl border border-brand-dark/15 bg-white text-xs text-brand-dark hover:border-brand-blue/35 focus:ring-1 focus:ring-brand-blue outline-none transition-all cursor-pointer select-none"
                    >
                      <div className="text-left">
                        <span className="font-bold block text-xs">
                          {selectedStep1Name || t('Pilih Arsitektur', 'Select Architecture')}
                        </span>
                        {selectedStep1Feature && (
                          <span className="text-[10px] text-brand-dark/55 mt-0.5 block truncate max-w-[280px] sm:max-w-[450px] font-sans font-medium">
                            {selectedStep1Desc} ({formatPrice(selectedStep1Feature.price)})
                          </span>
                        )}
                      </div>
                      <ChevronDown className={`w-4 h-4 text-brand-dark/60 transition-transform duration-200 ${isStep1Open ? 'rotate-180' : ''}`} />
                    </button>

                    {isStep1Open && (
                      <>
                        <div className="fixed inset-0 z-20" onClick={() => setIsStep1Open(false)} />
                        <div className="absolute left-0 right-0 mt-1.5 bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-xl rounded-2xl z-30 overflow-hidden divide-y divide-neutral-100 max-h-[320px] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-150">
                          {CALCULATOR_FEATURES.filter((f) => f.category === 'pages').map((feat) => {
                            const isSelected = selectedFeatures.includes(feat.id);
                            const featName = language === 'id' && feat.nameId ? feat.nameId : feat.name;
                            const featDesc = language === 'id' && feat.descriptionId ? feat.descriptionId : feat.description;

                            return (
                              <div
                                key={feat.id}
                                onClick={() => {
                                  handleToggleFeature(feat.id, 'pages');
                                  setIsStep1Open(false);
                                }}
                                className="flex items-center justify-between p-3.5 hover:bg-neutral-50/80 cursor-pointer active:bg-neutral-100 transition-all select-none"
                              >
                                <div className="pr-4 text-left">
                                  <div className={`text-xs font-bold ${isSelected ? 'text-brand-blue' : 'text-brand-dark'}`}>
                                    {featName}
                                  </div>
                                  <div className="text-[9px] text-brand-dark/50 font-sans mt-0.5 leading-tight">
                                    {featDesc}
                                  </div>
                                </div>
                                <div className="flex items-center gap-3.5 flex-shrink-0">
                                  <span className="text-[10px] font-mono font-bold text-brand-blue">
                                    {formatPrice(feat.price)}
                                  </span>
                                  <div className={`w-10 h-6 rounded-full p-0.5 transition-all duration-200 ease-in-out ${isSelected ? 'bg-[#34C759]' : 'bg-neutral-200'}`}>
                                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-200 ease-in-out ${isSelected ? 'translate-x-4' : 'translate-x-0'}`} />
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* 2. Functional Modules (iOS Style Dropdown Multi-select) */}
                <div className="space-y-2.5 relative">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark/60 font-mono">
                    {t('Step 2: Modul Tambahan', 'Step 2: Add-ons')}
                  </h4>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setIsStep2Open(!isStep2Open);
                        setIsStep1Open(false);
                        setIsStep3Open(false);
                      }}
                      className="w-full flex items-center justify-between p-3.5 rounded-xl border border-brand-dark/15 bg-white text-xs text-brand-dark hover:border-brand-blue/35 focus:ring-1 focus:ring-brand-blue outline-none transition-all cursor-pointer select-none"
                    >
                      <div className="text-left">
                        <span className="font-bold block text-xs">
                          {selectedStep2Count === 0 
                            ? t('Pilih Modul Tambahan', 'Select Add-on Modules') 
                            : `${selectedStep2Count} ${t('Modul Terpilih', 'Modules Selected')}`
                          }
                        </span>
                        {selectedStep2Count > 0 && (
                          <span className="text-[10px] text-brand-dark/55 mt-0.5 block truncate max-w-[280px] sm:max-w-[450px] font-sans font-medium">
                            {selectedStep2Names} (+{formatPrice(selectedStep2Price)})
                          </span>
                        )}
                      </div>
                      <ChevronDown className={`w-4 h-4 text-brand-dark/60 transition-transform duration-200 ${isStep2Open ? 'rotate-180' : ''}`} />
                    </button>

                    {isStep2Open && (
                      <>
                        <div className="fixed inset-0 z-20" onClick={() => setIsStep2Open(false)} />
                        <div className="absolute left-0 right-0 mt-1.5 bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-xl rounded-2xl z-30 overflow-hidden divide-y divide-neutral-100 max-h-[320px] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-150">
                          {CALCULATOR_FEATURES.filter((f) => f.category === 'features').map((feat) => {
                            const isSelected = selectedFeatures.includes(feat.id);
                            const featName = language === 'id' && feat.nameId ? feat.nameId : feat.name;
                            const featDesc = language === 'id' && feat.descriptionId ? feat.descriptionId : feat.description;

                            return (
                              <div
                                key={feat.id}
                                onClick={() => handleToggleFeature(feat.id, 'features')}
                                className="flex items-center justify-between p-3.5 hover:bg-neutral-50/80 cursor-pointer active:bg-neutral-100 transition-all select-none"
                              >
                                <div className="pr-4 text-left">
                                  <div className={`text-xs font-bold ${isSelected ? 'text-brand-blue' : 'text-brand-dark'}`}>
                                    {featName}
                                  </div>
                                  <div className="text-[9px] text-brand-dark/50 font-sans mt-0.5 leading-tight">
                                    {featDesc}
                                  </div>
                                </div>
                                <div className="flex items-center gap-3.5 flex-shrink-0">
                                  <span className="text-[10px] font-mono font-bold text-brand-blue">
                                    +{formatPrice(feat.price)}
                                  </span>
                                  <div className={`w-10 h-6 rounded-full p-0.5 transition-all duration-200 ease-in-out ${isSelected ? 'bg-[#34C759]' : 'bg-neutral-200'}`}>
                                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-200 ease-in-out ${isSelected ? 'translate-x-4' : 'translate-x-0'}`} />
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* 3. Hosting & Domain Options (iOS Style Dropdown Multi-select) */}
                <div className="space-y-2.5 relative">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark/60 font-mono">
                    {t('Step 3: Infrastruktur Web', 'Step 3: Infrastructure')}
                  </h4>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        setIsStep3Open(!isStep3Open);
                        setIsStep1Open(false);
                        setIsStep2Open(false);
                      }}
                      className="w-full flex items-center justify-between p-3.5 rounded-xl border border-brand-dark/15 bg-white text-xs text-brand-dark hover:border-brand-blue/35 focus:ring-1 focus:ring-brand-blue outline-none transition-all cursor-pointer select-none"
                    >
                      <div className="text-left">
                        <span className="font-bold block text-xs">
                          {selectedStep3Count === 0 
                            ? t('Pilih Item Infrastruktur', 'Select Infrastructure Items') 
                            : `${selectedStep3Count} ${t('Item Terpilih', 'Items Selected')}`
                          }
                        </span>
                        {selectedStep3Count > 0 && (
                          <span className="text-[10px] text-brand-dark/55 mt-0.5 block truncate max-w-[280px] sm:max-w-[450px] font-sans font-medium">
                            {selectedStep3Names} (+{formatPrice(selectedStep3Price)})
                          </span>
                        )}
                      </div>
                      <ChevronDown className={`w-4 h-4 text-brand-dark/60 transition-transform duration-200 ${isStep3Open ? 'rotate-180' : ''}`} />
                    </button>

                    {isStep3Open && (
                      <>
                        <div className="fixed inset-0 z-20" onClick={() => setIsStep3Open(false)} />
                        <div className="absolute left-0 right-0 mt-1.5 bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-xl rounded-2xl z-30 overflow-hidden divide-y divide-neutral-100 max-h-[320px] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-150">
                          {CALCULATOR_FEATURES.filter((f) => f.category === 'hosting' || f.category === 'support').map((feat) => {
                            const isSelected = selectedFeatures.includes(feat.id);
                            const featName = language === 'id' && feat.nameId ? feat.nameId : feat.name;
                            const featDesc = language === 'id' && feat.descriptionId ? feat.descriptionId : feat.description;

                            return (
                              <div
                                key={feat.id}
                                onClick={() => handleToggleFeature(feat.id, feat.category)}
                                className="flex items-center justify-between p-3.5 hover:bg-neutral-50/80 cursor-pointer active:bg-neutral-100 transition-all select-none"
                              >
                                <div className="pr-4 text-left">
                                  <div className={`text-xs font-bold ${isSelected ? 'text-brand-blue' : 'text-brand-dark'}`}>
                                    {featName}
                                  </div>
                                  <div className="text-[9px] text-brand-dark/50 font-sans mt-0.5 leading-tight">
                                    {featDesc}
                                  </div>
                                </div>
                                <div className="flex items-center gap-3.5 flex-shrink-0">
                                  <span className="text-[10px] font-mono font-bold text-brand-blue">
                                    +{formatPrice(feat.price)}
                                  </span>
                                  <div className={`w-10 h-6 rounded-full p-0.5 transition-all duration-200 ease-in-out ${isSelected ? 'bg-[#34C759]' : 'bg-neutral-200'}`}>
                                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-200 ease-in-out ${isSelected ? 'translate-x-4' : 'translate-x-0'}`} />
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                </div>

              </div>
            </div>

            {/* Price Output Display Card - Right */}
            <div className="lg:col-span-5 bg-[#0C1446] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[150px] h-[150px] rounded-full bg-brand-blue/20 blur-2xl pointer-events-none" />
              
              <div className="space-y-6">
                <div className="border-b border-white/10 pb-4">
                  <div className="text-xs font-mono text-brand-soft uppercase tracking-wider font-bold">
                    {t('ESTIMASI INVESTASI', 'ESTIMATED INVESTMENT')}
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-white">
                    {formatPrice(calcPrice)}
                  </div>
                </div>

                {/* Deliverables Info */}
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                    <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <div>
                      <div className="text-[11px] font-mono text-white/50 leading-none">{t('WAKTU PENGERJAAN', 'LAUNCH TIME')}</div>
                      <div className="font-bold text-white mt-0.5">~ {calcDuration} {t('Hari Kerja', 'Working Days')}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                    <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <div>
                      <div className="text-[11px] font-mono text-white/50 leading-none">{t('GARANSI LAYANAN', 'SERVICE GUARANTEE')}</div>
                      <div className="font-bold text-white mt-0.5">{t('3 Bulan Garansi Kode', '3 Months Code Warranty')}</div>
                    </div>
                  </div>
                </div>

                {/* List of current selections */}
                <div className="space-y-2 pt-2 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setIsScopeOpen(!isScopeOpen)}
                    className="w-full flex items-center justify-between text-[10px] font-mono text-brand-soft font-bold uppercase tracking-widest cursor-pointer hover:text-white transition-colors"
                  >
                    <span>{t('Cakupan Termasuk', 'Included Scope')} ({selectedFeatures.length})</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-brand-soft transition-transform duration-200 ${isScopeOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${isScopeOpen ? 'max-h-[220px] mt-2' : 'max-h-0'}`}>
                    <div className="max-h-[140px] overflow-y-auto space-y-1.5 pr-2 no-scrollbar">
                      {selectedFeatures.map((featId) => {
                        const feat = CALCULATOR_FEATURES.find((f) => f.id === featId);
                        const name = feat ? (language === 'id' && feat.nameId ? feat.nameId : feat.name) : '';
                        return (
                          <div key={featId} className="flex justify-between items-center text-xs text-white/80">
                            <span className="truncate">✓ {name}</span>
                            <span className="font-mono text-[10px] text-brand-soft flex-shrink-0 ml-2">
                              {feat?.price === 0 ? t('Termasuk', 'Inc.') : formatPrice(feat?.price || 0)}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Proposal WhatsApp trigger */}
              <div className="pt-8">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 rounded-xl text-center text-sm font-extrabold bg-gradient-to-r from-brand-blue to-cyan-400 hover:from-cyan-400 hover:to-brand-blue text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Order Now
                </a>
                <p className="text-[9px] text-white/40 text-center mt-2.5 font-mono">
                  {t('Tanpa komitmen • Termasuk draf desain awal gratis', 'No commitment required • Free discovery layout drafts included')}
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
