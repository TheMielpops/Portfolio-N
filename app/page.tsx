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

      <footer className="py-12 mt-10 text-center font-mono text-[10px] text-gray-600 uppercase tracking-widest border-t border-[var(--color-border)] px-6">
        Noah Dauge // Cybersecurity Engineer // 2026
      </footer>
    </main>
  );
}