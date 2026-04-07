'use client';
import { motion } from 'framer-motion';
import { Shield, Server, Code } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto relative pt-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-[150px] opacity-20 -z-10 animate-pulse"></div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        
        <p className="text-accent font-mono mb-4 tracking-widest uppercase text-sm">
          {t.hero.subtitle}
        </p>
        
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-tight">
          {t.hero.title1} <br/>
          {/* Retour du vrai gradient inline sans utiliser section-title */}
          <span className="bg-linear-to-r from-white to-accent text-transparent bg-clip-text">
            {t.hero.title2}
          </span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10 font-light leading-relaxed">
          {t.hero.desc}
        </p>

        <div className="flex flex-wrap gap-4 font-mono text-sm">
          <a href="#projets" className="px-8 py-4 bg-white text-darkbg font-bold rounded hover:bg-gray-200 transition-colors flex items-center gap-2 uppercase tracking-widest text-xs">
            {t.hero.btnWork}
          </a>
          <a href="#contact" className="px-8 py-4 border border-white/10 text-white hover:border-accent hover:text-accent transition-colors flex items-center gap-2 rounded uppercase tracking-widest text-xs">
            {t.hero.btnContact}
          </a>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 border-t border-white/10 pt-10">
        <div className="flex items-center gap-4 text-gray-400">
          <Shield className="text-accent" size={32} />
          <div><p className="text-white font-bold text-lg">{t.hero.stats.cyber}</p><p className="text-xs font-mono">Pentest, Hardening, CTF</p></div>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          <Server className="text-accent" size={32} />
          <div><p className="text-white font-bold text-lg">{t.hero.stats.infra}</p><p className="text-xs font-mono">Proxmox, Linux, Cisco</p></div>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          <Code className="text-accent" size={32} />
          <div><p className="text-white font-bold text-lg">{t.hero.stats.dev}</p><p className="text-xs font-mono">Python, C#, Node.js</p></div>
        </div>
      </motion.div>
    </section>
  );
}