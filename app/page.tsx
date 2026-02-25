import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import Calculator from '@/components/Calculator';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Calculator />
      <Stats />
      <About />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
