'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { InfiniteSlider } from '../ui/infinite-slider';
import Link from 'next/link';

const clients = [
  {
    name: 'Costao do Santinho',
    logo: '/costao-logo.png',
    link: 'https://www.blume.com.br',
    hasText: true,
  },
  {
    name: 'Costão Estaleirinho',
    logo: '/cosest-logo.png',
    link: 'https://costaoestaleirinho.com.br/lp/',
    hasText: true,
  },
  {
    name: 'Classifik',
    logo: '/classifik-logo.png',
    link: 'https://www.blume.com.br',
    hasText: true,
  },
  {
    name: 'Onesugar',
    logo: '/sugar-logo.svg',
    link: 'https://www.onesugar.com',
    hasText: true,
  },
  {
    name: 'RevisaCard',
    logo: '/revisacard-logo.png',
    link: 'https://www.revisacard.com',
    hasText: true,
  },
];

// Duplicate the array to create a seamless loop
const duplicatedClients = [...clients, ...clients, ...clients];

export default function ProofMarquee() {
  return (
    <section className="py-16 bg-black/90 overflow-hidden">
      <div className="max-w-screen flex justify-center items-center flex-col gap-24">
        <motion.h3
          className="text-2xl text-center text-neutral-200 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          A Blume foi criada para destacar o que sua marca tem de único.
          <br />
        </motion.h3>
        <InfiniteSlider>
          {duplicatedClients.map((client, index) => (
            <Link
              href={client.link}
              key={index}
              className="flex items-center justify-center h-22 w-48"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={320}
                height={160}
                className="w-auto h-auto max-h-22 max-w-full grayscale hover:grayscale-0 transition-all object-contain"
              />
            </Link>
          ))}
        </InfiniteSlider>
        <motion.h3
          className="text-xl text-center text-neutral-200 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Empresas de diversos setores confiam na Blume <br />
          para construir sua identidade.
        </motion.h3>
      </div>
    </section>
  );
}
