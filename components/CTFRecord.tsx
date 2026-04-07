'use client';
import { motion } from 'framer-motion';

const rankingsData = [
  {
    year: "2025",
    competitions: [
      { place: "1st/145", name: "CyberNight 2025", org: "EFRÉI" },
      { place: "1st/40", name: "RhineTech CTF", org: "Mulhouse" },
      { place: "1st/14", name: "CTF AMSI", org: "Sorbonne Université" },
      { place: "2nd/40", name: "GreHack CTF", org: "Grenoble" },
      { place: "3rd/30", name: "MindBreak CTF", org: "ESGI" },
      { place: "4th/3000", name: "404CTF", org: "DGSE / Telecom SudParis" },
      { place: "10th/2046", name: "FCSC", org: "ANSSI" },
      { place: "5th/300", name: "Shutlock", org: "DGSE" },
      { place: "Finalist", name: "ECW 2025", org: "Pôle d'Excellence Cyber / MinArm" },
      { place: "Participant", name: "DefHack 2025", org: "COMCYBER / ESILV" },
    ]
  },
  {
    year: "2024",
    competitions: [
      { place: "1st/100", name: "CyberNight 2024", org: "EFRÉI" },
      { place: "1st/50", name: "Purple Pill", org: "RiskSummit" },
      { place: "2nd/20", name: "Oteria Cyber Cup", org: "Synacktiv / DGSE" },
    ]
  }
];

// Couleurs exactes tirées de ton code CSS source
const getBadgeStyle = (place: string) => {
  if (place.startsWith('1st')) return 'text-[#c9a84c] bg-[#c9a84c]/10 border-[#c9a84c]/20'; // Or
  if (place.startsWith('2nd')) return 'text-[#8e8ea0] bg-[#8e8ea0]/10 border-[#8e8ea0]/20'; // Argent
  if (place.startsWith('3rd')) return 'text-[#a07850] bg-[#a07850]/10 border-[#a07850]/20'; // Bronze
  return 'text-[#888888] bg-white/[0.02] border-transparent'; // Gris par défaut
};

export default function CTFRecord() {
  return (
    <section id="ctf" className="py-24 px-6 max-w-7xl mx-auto">
      <div>
        <span className="section-number">01 / Competition Record</span>
        <h2 className="section-title">CTF Rankings</h2>
      </div>

      <div className="space-y-12">
        {rankingsData.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-12">
            
            {/* L'équivalent de .ctf-year-label */}
            <h3 className="font-mono text-xs font-semibold text-gray-500 tracking-[0.15em] uppercase mb-4 pb-3 border-b border-white/10">
              Année {group.year}
            </h3>
            
            {/* L'équivalent de .ctf-grid : 
                Le background bg-white/10 crée les bordures grâce au gap-[1px] */}
            <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-[1px] bg-white/10 border border-white/10 rounded-lg overflow-hidden">
              
              {group.competitions.map((ctf, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  // L'équivalent de .ctf-item
                  className="flex items-center gap-4 p-4 lg:px-5 bg-[#0b0b0b] hover:bg-white/[0.03] transition-colors"
                >
                  {/* L'équivalent de .ctf-rank */}
                  <div className={`font-mono font-bold text-xs min-w-[72px] text-center py-1.5 px-2 rounded border ${getBadgeStyle(ctf.place)}`}>
                    {ctf.place}
                  </div>
                  
                  {/* L'équivalent de .ctf-info */}
                  <div className="flex-1 min-w-0">
                    {/* L'équivalent de .ctf-name */}
                    <p className="text-sm font-medium text-gray-200 truncate">{ctf.name}</p>
                    {/* L'équivalent de .ctf-org */}
                    <p className="text-xs text-gray-500 mt-0.5 truncate">{ctf.org}</p>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}