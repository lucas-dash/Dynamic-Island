import About from '@/components/About';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mt-[calc(16px+56px)] h-[calc(100vh-72px)]">
        <Hero />
        <About />
        <Skills />
        <Footer />
      </main>
    </>
  );
}
