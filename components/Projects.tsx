'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState(t.projects.categories.all);

  const technicalData = [
    { tech: ['Proxmox VE', 'LXC', 'AWS VPN', 'Nginx HA'], cat: t.projects.categories.infra },
    { tech: ['Pentest', 'Hardening', 'Secure Coding', 'Firewall'], cat: t.projects.categories.cyber },
    { tech: ['Active Directory', 'Windows Server', 'Reverse Proxy', 'PKI'], cat: t.projects.categories.infra },
    { tech: ['Linux Hardening', 'OTP Auth', 'Suricata / IDS', 'Chiffrement Disque'], cat: t.projects.categories.cyber },
    { tech: ['React/Vue', 'Node.js/PHP', 'MySQL', 'Tests Unitaires'], cat: t.projects.categories.dev }, // Web Fullstack
    { tech: ['C#', 'Unity 3D', 'Mécaniques FPS', 'HUD Dynamique'], cat: t.projects.categories.dev }, // FPS Survival
    { tech: ['C#', 'Unity Engine', 'Physics System', 'Game Loop'], cat: t.projects.categories.dev } // Unity 2D Lexus
  ];

  const categories = [
    t.projects.categories.all, 
    t.projects.categories.infra, 
    t.projects.categories.cyber, 
    t.projects.categories.dev
  ];

  const projects = t.projects.items.map((item, i) => ({
    ...item,
    ...technicalData[i]
  }));

  const filteredProjects = activeFilter === t.projects.categories.all 
    ? projects 
    : projects.filter(p => p.cat === activeFilter);

  return (
    <section id="projets" className="py-24 px-6 max-w-7xl mx-auto">
      <div>
        <span className="section-number">{t.projects.number}</span>
        <h2 className="section-title">{t.projects.title}</h2>
      </div>

      <div className="flex flex-wrap gap-6 mb-12 font-mono text-xs uppercase tracking-widest border-b border-white/5 pb-6">
        {categories.map(c => (
          <button 
            key={c} 
            onClick={() => setActiveFilter(c)} 
            className={`${activeFilter === c ? 'text-accent font-bold' : 'text-gray-500 hover:text-white'} transition-all`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.title} 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }} 
              transition={{ duration: 0.3 }}
              className="bg-white/[0.02] border border-white/5 rounded-xl p-8 group flex flex-col justify-between h-full relative hover:border-gray-600 hover:bg-white/[0.04] transition-all"
            >
              <a href={(project as any).link || "#"} className="absolute inset-0 z-10"></a>
              <div className="absolute top-6 right-6 text-gray-600 group-hover:text-accent transition-colors">
                <ArrowUpRight size={24} />
              </div>
              <div>
                <span className="text-gray-500 font-mono text-[10px] font-bold tracking-wider uppercase mb-2 block">{project.cat}</span>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tighter group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 font-light leading-relaxed">{project.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-mono px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/5 uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}