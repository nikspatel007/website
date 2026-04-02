import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Industries from '@/components/sections/Industries';
import CaseStudies from '@/components/sections/CaseStudies';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <CaseStudies />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
