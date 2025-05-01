import Image from 'next/image';
import { HeroSection } from '@/components/hero/hero';
import WhyChoose from '@/components/why-choose/why-choose';
import { TextRevealSection } from '@/components/text-reveal-scroll/text-reveal-scroll-section';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import { GlowingBento } from '@/components/why-choose/bentoFeatures';
import Proof from '@/components/proof/proof';
import CaseStudies from '@/components/cases/case-studies';
import { GlowingBentoTools } from '@/components/tools/tools';

export default function Home() {
  return (
    <div className="items-center bg-black justify-items-center min-h-screen min-w-screen font-[family-name:var(--font-ibm-plex-mono)] px-4 md:px-0">
      <main className="flex flex-col items-center justify-center w-full">
        <HeroSection />
        {/* <TextHoverEffect text="BLUME" /> */}
        <GlowingBentoTools />
        <Proof />
        <CaseStudies />
        <GlowingBento />
        {/* <TextRevealSection /> */}
      </main>
    </div>
  );
}
