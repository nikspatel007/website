import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import WhatWeBuild from '@/components/WhatWeBuild';
import TechStack from '@/components/TechStack';
import HowItWorks from '@/components/HowItWorks';
import Results from '@/components/Results';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Hero />
      <WhatWeBuild />
      <TechStack />
      <HowItWorks />
      <Results />
      <CTA />
      <Footer />
    </main>
  );
}
