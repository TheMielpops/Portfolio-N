'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Terminal } from 'lucide-react';

export default function CTFRecord() {
  const { t } = useLanguage();

  return (
    <section id="ctf" className="py-24 px-6 max-w-7xl mx-auto">
      <div>
        <span className="section-number">{t.ctf.number}</span>
        <h2 className="section-title">{t.ctf.title}</h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative group overflow-hidden rounded-xl border border-white/5 bg-white/2 p-12 flex flex-col items-center text-center"
      >
        {/* Effet de lueur rouge en arrière-plan du bloc */}
        <div className="absolute -inset-y-24 -inset-x-24 bg-accent/5 blur-[100px] rounded-full group-hover:bg-accent/10 transition-colors"></div>

        <div className="relative z-10">
          <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto animate-pulse">
            <Terminal className="text-accent" size={32} />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">
            {t.ctf.comingSoonTitle}
          </h3>
          
          <p className="max-w-md text-gray-500 text-sm leading-relaxed mb-8 font-light">
            {t.ctf.comingSoonDesc}
          </p>

          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
            <span className="w-2 h-2 bg-accent rounded-full animate-ping"></span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">
              {t.ctf.status}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}