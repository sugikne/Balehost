import { DEVELOPMENT_STEPS } from '../data';
import { Sparkles, FileSearch, Code, Radio } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Timeline() {
  const { language, t } = useLanguage();

  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return <FileSearch className="w-6 h-6 text-brand-blue" />;
      case '02':
        return <Sparkles className="w-6 h-6 text-brand-blue animate-pulse" />;
      case '03':
        return <Code className="w-6 h-6 text-brand-blue" />;
      case '04':
        return <Radio className="w-6 h-6 text-brand-blue" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-blue" />;
    }
  };

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-neutral-50 grid-bg">
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-soft/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-blue font-mono">
            {t('// Cara Kerja Kami', '// How We Work')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark">
            {t('Proses Pengembangan yang Transparan', 'Our Transparent Development Process')}
          </h2>
          <p className="text-base text-brand-dark/70 font-sans text-justify sm:text-center">
            {t(
              'Kami mengikuti metodologi yang terstruktur dan modern untuk menyelesaikan website Anda tepat waktu, menjaga komunikasi yang erat dan milestone yang jelas dari konsep hingga peluncuran.',
              'We follow a structured, modern methodology to deliver your website on time, maintaining close communication and clear milestones from concept to launch.'
            )}
          </p>
        </div>

        {/* Timeline Roadmap */}
        <div className="relative mt-12">
          {/* Central Line Visual (desktop only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-dark/10 -translate-x-1/2 hidden lg:block border-dashed" />
          
          <div className="space-y-12 lg:space-y-20">
            {DEVELOPMENT_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const displayTitle = language === 'id' && step.titleId ? step.titleId : step.title;
              const displaySubtitle = language === 'id' && step.subtitleId ? step.subtitleId : step.subtitle;
              const displayDesc = language === 'id' && step.descriptionId ? step.descriptionId : step.description;
              
              return (
                <div
                  key={step.step}
                  className={`flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left/Right Card content */}
                  <div className="w-full lg:w-1/2 flex justify-center px-4">
                    <div className="w-full max-w-md glass-card rounded-2xl p-8 relative overflow-hidden text-left">
                      {/* Step Number Top Banner */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-5xl font-black font-sans text-brand-blue/15">
                           {step.step}
                        </span>
                        <div className="p-3 rounded-xl bg-brand-blue/10">
                          {getStepIcon(step.step)}
                        </div>
                      </div>

                      <h3 className="text-xl font-extrabold text-brand-dark tracking-tight">
                        {displayTitle}
                      </h3>
                      <h4 className="text-xs font-bold text-brand-blue font-mono uppercase tracking-wider mt-1">
                        {displaySubtitle}
                      </h4>
                      <p className="text-sm text-brand-dark/80 mt-3 font-sans leading-relaxed text-justify">
                        {displayDesc}
                      </p>

                      {/* Deliverable chips */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-brand-dark/5 mt-4">
                        <span className="text-[10px] font-semibold bg-brand-blue/10 text-brand-dark px-2 py-1 rounded-md">
                          {t('Milestone Selesai', 'Milestone Complete')}
                        </span>
                        <span className="text-[10px] font-semibold bg-brand-dark/5 text-brand-dark/70 px-2 py-1 rounded-md">
                          {t('Ulasan Klien', 'Client Review')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Node Anchor Center Indicator (desktop only) */}
                  <div className="relative z-20 w-12 h-12 rounded-full bg-white border-4 border-brand-blue shadow-lg items-center justify-center hidden lg:flex">
                    <span className="text-xs font-mono font-extrabold text-brand-dark">
                      {step.step}
                    </span>
                  </div>

                  {/* Empty Spacer Column for layout balancing (desktop only) */}
                  <div className="w-full lg:w-1/2 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
