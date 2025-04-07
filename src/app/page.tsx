import Image from "next/image";
import { HeroSection } from "@/components/hero/hero";
import WhyChoose from "@/components/why-choose/why-choose";
import { TextRevealSection } from "@/components/text-reveal-scroll/text-reveal-scroll-section";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { GlowingBento } from "@/components/why-choose/bentoFeatures";

export default function Home() {
  return (
    <div className="items-center bg-black justify-items-center min-h-screen min-w-screen font-[family-name:var(--font-ibm-plex-mono)]">
      <main className="flex flex-col items-center justify-center w-full">
        <HeroSection />
        {/* <TextHoverEffect text="BLUME" /> */}
        <TextRevealSection />
        <GlowingBento />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
