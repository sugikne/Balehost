import { useState } from 'react';
import { FAQS_DATA } from '../data';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function FAQ() {
  const { language, t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-white">
      {/* Background blurs */}
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-brand-soft/10 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-blue font-mono">
            {t('// Pertanyaan Umum', '// General Questions')}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark">
            {t('Pertanyaan yang Sering Diajukan', 'Frequently Asked Questions')}
          </h2>
          <p className="text-base text-brand-dark/70 font-sans text-justify sm:text-center">
            {t(
              'Memiliki pertanyaan tentang kerja sama dengan BaleHost? Baca tanggapan mendalam kami mengenai harga, revisi, SEO, dan prosedur peluncuran.',
              'Have questions about working with BaleHost? Read our detailed responses regarding pricing, revisions, SEO, and launch procedures.'
            )}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto text-left">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            const displayQuestion = language === 'id' && faq.questionId ? faq.questionId : faq.question;
            const displayAnswer = language === 'id' && faq.answerId ? faq.answerId : faq.answer;
            
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-neutral-50 border-brand-blue/30 shadow-xs'
                    : 'bg-white border-brand-dark/10 hover:border-brand-blue/20'
                }`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer group"
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${
                      isOpen ? 'text-brand-blue' : 'text-brand-dark/40 group-hover:text-brand-blue/70'
                    }`} />
                    <span className="text-sm sm:text-base font-bold text-brand-dark leading-snug">
                      {displayQuestion}
                    </span>
                  </div>
                  
                  {/* Plus/Minus Indicator */}
                  <div className={`p-1.5 rounded-lg border flex items-center justify-center transition-colors ${
                    isOpen
                      ? 'bg-brand-blue/10 border-brand-blue/20 text-brand-blue'
                      : 'bg-neutral-100 border-brand-dark/5 text-brand-dark/50'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Answer container */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-[300px] border-t border-brand-dark/5' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 py-5">
                    <p className="text-xs sm:text-sm text-brand-dark/80 font-sans leading-relaxed text-justify">
                      {displayAnswer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
