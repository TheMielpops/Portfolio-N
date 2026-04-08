import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Platforms from '@/components/Platforms';
import CTFRecord from '@/components/CTFRecord';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="relative pt-20">
      <Navbar />

      <Hero />
      <Platforms />
      <CTFRecord />
      <Experience />
      <Projects />
      <Education />
      <Contact />

      {/* Footer ultra-discret (fantôme) */}
      <footer className="py-8 pb-12 text-center font-mono text-[9px] text-white/10 uppercase tracking-[0.3em] px-6 select-none cursor-default">
        0xNoah // Cybersécurity and Pentester student // 2026
      </footer>
    </main>
  );
}