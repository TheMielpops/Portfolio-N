'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
      <div>
        <span className="section-number">{t.experience.number}</span>
        <h2 className="section-title">{t.experience.title}</h2>
      </div>
      
      <div className="space-y-12 relative">
        <div className="absolute left-0 top-0 h-full w-0.5 bg-accent/30 -translate-x-1/2 hidden md:block"></div>

        {t.experience.items.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 relative"
          >
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-[#0b0b0b] hidden md:block"></div>

            <div className="md:col-span-1 md:pl-8 text-gray-500 font-mono text-sm space-y-2 pt-2 md:pt-0">
              <p className="text-white font-bold">{exp.date}</p>
              <p className="text-accent uppercase tracking-wider text-xs">{exp.contract}</p>
            </div>

            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-8 hover:bg-white/[0.04] transition-colors md:col-span-3 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-white tracking-tighter uppercase">{exp.role}</h3>
                <p className="text-accent font-mono text-sm">{exp.company}</p>
              </div>
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-2 leading-relaxed">
                {exp.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}