'use client';
import { motion } from 'framer-motion';

const skills = [
  { cat: "Network", items: ["Architecture Cisco", "VLANs", "Routage inter-VLAN", "Load Balancing", "High Availability"] },
  { cat: "SysAdmin", items: ["Linux Administration", "Windows Server / AD", "GPOs", "Virtualisation Proxmox", "Backup / Redondance"] },
  { cat: "Security", items: ["Tests de Pénétration", "Audit", "Hardening", "WAF", "VPN (OpenVPN/WireGuard)", "fail2ban / ModSecurity"] }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto pb-40"> {/* pb-40 pour le Scroll-Spy */}
      <span className="section-label">04 / Expertise</span>
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {skills.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="text-white font-mono text-sm border-b border-gray-800 pb-2 mb-6 uppercase tracking-widest">{s.cat}</h3>
            <ul className="space-y-4">
              {s.items.map(item => (
                <li key={item} className="text-gray-400 text-sm flex items-center gap-3">
                  <span className="w-1 h-1 bg-accent rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}