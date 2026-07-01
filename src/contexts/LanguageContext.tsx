import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (idText: string, enText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Load from localStorage if available, default to 'id' (Indonesian) since BaleHost is local Penida & Bali
    const saved = localStorage.getItem('balehost_locale');
    if (saved === 'id' || saved === 'en') {
      return saved;
    }
    return 'id';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('balehost_locale', lang);
  };

  // Translation helper function
  const t = (idText: string, enText: string): string => {
    return language === 'id' ? idText : enText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
