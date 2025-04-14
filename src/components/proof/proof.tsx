"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
    {
        name: "Costao do Santinho",
        logo: "/costao-logo.png",
        link: "https://www.blume.com.br",
        hasText: true,
    },
    {
        name: "Costão Estaleirinho",
        logo: "/cosest-logo.png",
        link: "https://costaoestaleirinho.com.br/lp/",
        hasText: true,
    },
    {
        name: "Classifik",
        logo: "/classifik-logo.png",
        link: "https://www.blume.com.br",
        hasText: true,
    },
    {
        name: "Onesugar",
        logo: "/sugar-logo.svg",
        link: "https://www.onesugar.com",
        hasText: true,
    },
    {
        name: "RevisaCard",
        logo: "/revisacard-logo.png",
        link: "https://www.revisacard.com",
        hasText: true,
    },
];

// Duplicate the array to create a seamless loop
const duplicatedClients = [...clients, ...clients, ...clients];

export default function ProofMarquee() {

    return (
        <section className="py-16 bg-black/90 overflow-hidden">
            <div className="max-w-screen">
                <motion.h3
                    className="text-xl mb-12 text-center text-neutral-400 font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Empresas de todos os tamanhos confiam na Blume <br />
                    para cuidar de seus websites
                </motion.h3>

                {/* First marquee - moving left */}
                <div
                    className="relative w-full overflow-hidden mb-10 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-black/90 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-black/90 after:to-transparent"

                >
                    <div className={`flex gap-16 marquee-left`}>
                        {duplicatedClients.map((client, index) => (
                            <motion.a
                                key={`left-${index}`}
                                href={client.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center group min-w-[160px]"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <div className="h-20 flex items-center justify-center mb-3">
                                    <Image
                                        src={client.logo || "/placeholder.svg"}
                                        alt={`${client.name} logo`}
                                        width={client.hasText ? 140 : 100}
                                        height={client.hasText ? 60 : 100}
                                        className={`transition-all duration-300 filter grayscale hover:grayscale-0 ${client.hasText ? "h-auto max-h-16 w-auto" : "h-16 w-auto object-contain"
                                            }`}
                                    />
                                </div>
                                <motion.span
                                    className="text-sm text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 0, y: 10 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                >
                                    {client.name}
                                </motion.span>
                            </motion.a>
                        ))}
                    </div>

                </div>
            </div>

            {/* Add the animation styles */}
            <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        @keyframes marquee-right {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .marquee-left {
          animation: marquee-left 40s linear infinite;
        }


      `}</style>
        </section>
    );
}

