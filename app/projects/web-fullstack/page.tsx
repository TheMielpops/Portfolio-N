'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Database, SearchCode, Webhook, Code2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function WebFullstackProject() {
  const { t, lang, toggleLang } = useLanguage();
  const proj = t.projectDetails.webFullstack;

  return (
    <main className="min-h-screen bg-[#0b0b0b] text-gray-300 font-sans selection:bg-accent selection:text-white pt-24 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 flex items-center justify-between">
          <Link href="/#projets" className="inline-flex items-center gap-3 text-gray-500 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> {t.projectDetails.back}
          </Link>
          <button onClick={toggleLang} className="font-mono text-[10px] text-gray-400 hover:text-white border border-white/10 px-3 py-1 rounded transition-colors uppercase tracking-widest">
            {lang === 'en' ? 'FR' : 'EN'}
          </button>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-20">
          <span className="font-mono text-accent text-sm mb-4 block font-bold tracking-[0.2em] uppercase">{proj.subtitle}</span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-8 leading-tight text-white">{proj.title}</h1>
          <div className="flex flex-wrap gap-3">
            {proj.techs.map((tech: string, i: number) => (
              <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded font-mono text-[10px] uppercase tracking-widest text-gray-300">{tech}</span>
            ))}
          </div>
        </motion.div>

        <div className="space-y-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="border-t border-white/10 pt-8 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4"><h2 className="font-mono text-xs uppercase tracking-widest text-gray-500 flex items-center gap-3"><SearchCode size={16} className="text-accent" /> {proj.context}</h2></div>
            <div className="md:col-span-8"><p className="text-lg leading-relaxed text-gray-300 font-light">{proj.contextText}</p></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="border-t border-white/10 pt-8 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4"><h2 className="font-mono text-xs uppercase tracking-widest text-gray-500 flex items-center gap-3"><Code2 size={16} className="text-accent" /> {proj.architecture}</h2></div>
            <div className="md:col-span-8"><p className="text-lg leading-relaxed text-gray-300 font-light">{proj.architectureText}</p></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="border-t border-white/10 pt-8 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4"><h2 className="font-mono text-xs uppercase tracking-widest text-gray-500 flex items-center gap-3"><Database size={16} className="text-accent" /> {proj.systems}</h2></div>
            <div className="md:col-span-8"><p className="text-lg leading-relaxed text-gray-300 font-light">{proj.systemsText}</p></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="border-t border-white/10 pt-8 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4"><h2 className="font-mono text-xs uppercase tracking-widest text-gray-500 flex items-center gap-3"><Webhook size={16} className="text-accent" /> {proj.web}</h2></div>
            <div className="md:col-span-8"><p className="text-lg leading-relaxed text-gray-300 font-light">{proj.webText}</p></div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}