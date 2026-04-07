'use client';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Formateur Architecture Réseau",
    company: "IPSSI Nice",
    contract: "Alternance",
    date: "2023 - Present",
    details: [
      "Conception et maintenance d'infrastructures réseau complexes.",
      "Mise en place de solutions de routage et commutation avancées.",
      "Formateur référent sur les technologies Cisco (VLANs, routage inter-VLAN).",
      "Virtualisation Proxmox et gestion de clusters haute disponibilité."
    ],
  },
  {
    role: "Administrateur Système et Réseau",
    company: "IPSSI Nice",
    contract: "Alternance",
    date: "2022 - 2023",
    details: [
      "Gestion d'un parc informatique d'une centaine de postes.",
      "Administration Windows Server (Active Directory, GPOs).",
      "Déploiement d'une infrastructure web haute disponibilité avec Nginx Load Balancer."
    ],
  },
  {
    role: "Stagiaire SysAdmin / Cybersécurité",
    company: "Confidential - Defense Industry",
    contract: "Stage",
    date: "2022",
    details: [
      "Hardening de serveurs Linux (WAF, VPN, pare-feu).",
      "Tests de pénétration et audit de sécurité des infrastructures."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
      <div>
        <span className="section-number">02 / Professional</span>
        <h2 className="section-title">Experience</h2>
      </div>
      
      <div className="space-y-12 relative">
        <div className="absolute left-0 top-0 h-full w-0.5 bg-accent/30 -translate-x-1/2 hidden md:block"></div>

        {experiences.map((exp, i) => (
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