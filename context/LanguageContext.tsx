'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Language } from '@/i18n/translations';

type LanguageContextType = {
  lang: Language;
  toggleLang: () => void;
  t: typeof translations.en; // Cela permet à TypeScript d'auto-compléter tes textes !
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en'); // Anglais par défaut

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'fr' : 'en'));
  };

  // 't' contient toutes les phrases de la langue actuellement sélectionnée
  const t = translations[lang] as typeof translations.en;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}