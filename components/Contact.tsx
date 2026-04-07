'use client';
import { motion } from 'framer-motion';

const LinkedinIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const GithubIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
const RootMeIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>;
const HTBIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>;
const THMIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>;
const YWHIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>;
const SendIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto pb-40">
      <div>
        <span className="section-number">05 / Get in Touch</span>
        <h2 className="section-title">Contact</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md">
            Interested in working together or have a question? Feel free to reach out through the form or find me on these platforms.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm font-mono text-gray-400">
            <a href="https://linkedin.com/in/noah-dauge" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors w-max">
              <LinkedinIcon /> LinkedIn
            </a>
            <a href="https://github.com/Noah-Dauge" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors w-max">
              <GithubIcon /> GitHub
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#9fef00] transition-colors w-max">
              <HTBIcon /> HackTheBox
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors w-max">
              <THMIcon /> TryHackMe
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#d18e1e] transition-colors w-max">
              <RootMeIcon /> Root-Me
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#0051ff] transition-colors w-max">
              <YWHIcon /> YesWeHack
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Name <span className="text-accent">*</span></label>
              <input type="text" placeholder="Your name" className="w-full bg-white/[0.02] border border-white/5 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-gray-500 transition-colors placeholder:text-gray-700" required />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Email (optional)</label>
              <input type="email" placeholder="you@example.com" className="w-full bg-white/[0.02] border border-white/5 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-gray-500 transition-colors placeholder:text-gray-700" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Subject <span className="text-accent">*</span></label>
              <input type="text" placeholder="What is this about?" className="w-full bg-white/[0.02] border border-white/5 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-gray-500 transition-colors placeholder:text-gray-700" required />
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <label className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Message <span className="text-accent">*</span></label>
              <textarea placeholder="Your message..." rows={5} className="w-full bg-white/[0.02] border border-white/5 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-gray-500 transition-colors placeholder:text-gray-700 resize-none" required></textarea>
            </div>

            <button type="submit" className="w-full bg-[#7aa2f7] hover:bg-[#6b8cd6] text-black font-bold text-xs tracking-widest uppercase py-4 rounded-lg flex items-center justify-center gap-3 transition-colors">
              <SendIcon /> Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}