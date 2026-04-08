'use client';
import { motion } from 'framer-motion';

const platforms = [
  { name: "HackTheBox", stat: "Pro Hacker", color: "text-[#9fef00]" },
  { name: "TryHackMe", stat: "Top 20%", color: "text-[#ffffff]" },
  { name: "Root-Me", stat: "Top 15%", color: "text-[#d18e1e]" },
  { name: "YesWeHack", stat: "Hunter", color: "text-[#0051ff]" }
];

export default function Platforms() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto border-b border-white/5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <span className="font-mono text-gray-500 text-xs uppercase tracking-[0.2em] shrink-0">
          Active on
        </span>
        
        <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-12 w-full">
          {platforms.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 group"
            >
              <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-accent transition-colors"></div>
              <div>
                <p className={`font-bold text-sm tracking-wide ${p.color}`}>{p.name}</p>
                <p className="font-mono text-[10px] text-gray-500 uppercase">{p.stat}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}