'use client';

import { Box, Ear, Sparkles } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function GlowingBentoTools() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="max-w-7xl mx-auto mb-32" ref={ref}>
      <motion.h3
        className="text-3xl font-semibold text-center pb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Você tem a visão. Nós, as ferramentas.
      </motion.h3>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GridItem
          icon={<Sparkles className="h-4 w-4" />}
          title="Landing pages"
          description="Feitas para converter. Seus leads onde você quiser: banco de dados, Google Sheets, Excel ou Power BI."
          delay={0}
          isInView={isInView}
        />
        <GridItem
          icon={<Ear className="h-4 w-4" />}
          title="Websites"
          description="Performance e experiência em primeiro lugar. Tudo é feito com o usuário no centro."
          delay={0.2}
          isInView={isInView}
        />
        <GridItem
          icon={<Box className="h-4 w-4" />}
          title="Ecommerces"
          description="Lojas que vendem. Sem distrações, sem obstáculos — só resultados."
          delay={0.4}
          isInView={isInView}
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  delay?: number;
  isInView: boolean;
}

const GridItem = ({ icon, title, description, delay = 0, isInView }: GridItemProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className="min-h-[14rem] list-none"
    >
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <motion.div
              className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: delay + 0.2, ease: 'easeOut' }}
            >
              {icon}
            </motion.div>
            <div className="space-y-3">
              <motion.h3
                className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ duration: 0.7, delay: delay + 0.3, ease: 'easeOut' }}
              >
                {title}
              </motion.h3>
              <motion.h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.7, delay: delay + 0.4, ease: 'easeOut' }}
              >
                {description}
              </motion.h2>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
};
