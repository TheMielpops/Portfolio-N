'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const { lang, toggleLang, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, id: 'hero' },
    { name: t.nav.rankings, id: 'ctf' },
    { name: t.nav.experience, id: 'experience' },
    { name: t.nav.projects, id: 'projets' },
    { name: t.nav.education, id: 'education' },
    { name: t.nav.contact, id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; 
      let current = 'hero';
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = link.id;
          }
        }
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 bg-darkbg/90 backdrop-blur-md border-b border-white/5 h-16 flex items-center justify-between px-6 md:px-12"
    >
      <a href="#hero" className="font-bold text-white tracking-tighter text-xl">
        N<span className="text-accent">D</span>.
      </a>

      <div className="flex items-center gap-8">
        <ul className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`}
                  className={`relative transition-all duration-300 ${
                    isActive 
                      ? 'text-accent drop-shadow-[0_0_8px_var(--color-accent-glow)] font-bold' 
                      : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {link.name}
                  {/* Le point lumineux de retour ! */}
                  {isActive && (
                    <motion.span 
                      layoutId="navIndicator"
                      className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-accent rounded-full shadow-[0_0_5px_#c0392b]"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <button 
          onClick={toggleLang}
          className="font-mono text-[10px] text-gray-400 hover:text-white border border-white/10 px-3 py-1 rounded transition-colors uppercase tracking-widest"
        >
          {lang === 'en' ? 'FR' : 'EN'}
        </button>
      </div>
    </motion.nav>
  );
}