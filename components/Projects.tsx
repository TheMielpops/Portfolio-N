'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = ['All', 'Infrastructure & Cloud', 'Cybersécurité', 'Développement'];

const projectsData = [
  {
    title: 'Infra Virtualisée Proxmox',
    category: 'Infrastructure & Cloud',
    tech: ['Proxmox VE', 'pfSense', 'Windows Server', 'AWS', 'Debian'],
    desc: 'Infrastructure complète virtualisée haute disponibilité, redondance et performance.',
    link: '#',
  },
  {
    title: 'Hardening Linux & Sécurité',
    category: 'Cybersécurité',
    tech: ['WAF', 'OpenVPN', 'WireGuard', 'Fail2Ban'],
    desc: 'Serveurs Linux renforcés intégrant plusieurs couches de sécurité et monitoring avancé.',
    link: '#',
  },
  {
    title: 'Site Web BDE IPSSI Nice',
    category: 'Développement',
    tech: ['PHP', 'MySQL', 'Web Security', 'Hachage'],
    desc: 'Site web sécurisé intégrant des fonctionnalités avancées et une sécurité renforcée.',
    link: '#',
  },
  {
    title: 'Jeu Vidéo Interactive C#',
    category: 'Développement',
    tech: ['C#', 'Unity Engine', 'Physics System', 'Collisions'],
    desc: 'Développement d\'un jeu avec des mécaniques interactives avancées en C#.',
    link: '#',
  },
  {
    title: 'Serveur Web Sécurisé Nginx',
    category: 'Cybersécurité',
    tech: ['Nginx', 'Fail2Ban', 'ModSecurity', 'SSL/TLS'],
    desc: 'Configuration d\'un serveur web hautement sécurisé avec détection d\'intrusion.',
    link: '#',
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <section id="projets" className="py-24 px-6 max-w-7xl mx-auto">
      <div>
        <span className="section-number">03 / Work</span>
        <h2 className="section-title">Projects</h2>
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
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="bg-white/[0.02] border border-white/5 rounded-xl p-8 group flex flex-col justify-between h-full relative hover:border-gray-600 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="absolute top-6 right-6 text-gray-600 group-hover:text-accent transition-colors">
                <ArrowUpRight size={24} />
              </div>

              <div>
                <span className="text-gray-500 font-mono text-[10px] font-bold tracking-wider uppercase mb-2 block">{project.category}</span>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.desc}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-mono px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/5 uppercase">
                    {t}
                  </span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0"></a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}