"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ClockFading, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample case studies data
const caseStudies = [
    {
        client: "Costão Estaleirinho",
        title: "Landing Page + Blog",
        description: "Criação do mais novo empreendimento do grupo costão. Incluí landing page, e um blog internacionalizado de facil uso do time de marketing.",
        completionTime: "6 dias",
        metrics: {
            performance: "100",
            accessibility: "96",
            bestPractices: "100",
            seo: "100",
            pageLoadTime: "0.5s",
            largestContentfulPaint: "0.7s",
            cumulativeLayoutShift: "0.01",
        },
        image: "/next-costao.png",
        link: "https://www.costao.com.br",
    },
    {
        client: "RevisaCard",
        title: "Landing Page",
        description: "Landing page otimizada para conversão de leads interessados em imóveis de luxo.",
        completionTime: "3 dias",
        metrics: {
            performance: "100",
            accessibility: "96",
            bestPractices: "100",
            seo: "100",
            pageLoadTime: "0.2s",
            largestContentfulPaint: "0.7s",
            cumulativeLayoutShift: "0.01",
        },
        image: "/revisacard-lp.png",
        link: "https://costaoestaleirinho.com.br/lp/",
    },
];

// Simplified metric display component
const MetricDisplay = ({ label, value }: { label: string; value: string; }) => {
    return (
        <div className="bg-neutral-800/50 rounded-lg p-3 transition-colors duration-200 hover:bg-neutral-800">
            <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-neutral-400">{label}</span>
            </div>
            <div className="flex items-baseline">
                <span className="text-lg font-medium text-white">{value}</span>
            </div>
        </div>
    );
};

export default function CaseStudies() {
    return (
        <section className="py-20 bg-black text-white overflow-hidden max-w-screen">
            <div className="flex flex-col px-4 md:px-0 max-w-6xl">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Entregamos resultados
                </motion.h2>

                <motion.p
                    className="text-lg text-neutral-400 max-w-3xl mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    Criamos websites que não apenas impressionam visualmente, mas também entregam resultados.
                </motion.p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            className="rounded-lg border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={study.image || "/placeholder.svg?height=400&width=800"}
                                    alt={`${study.client} website preview`}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                    <div>
                                        <span className="text-xs font-medium text-neutral-400">{study.client}</span>
                                        <h3 className="text-lg font-bold">{study.title}</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4">
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-sm text-neutral-400 h-10 line-clamp-2">{study.description}</p>
                                    <span className="text-xs flex flex-row gap-2 text-neutral-500 ml-2 whitespace-nowrap"><ClockFading className="h-4 w-4" /> {study.completionTime}</span>
                                </div>

                                {/* Simplified metrics display */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-medium mb-3 text-neutral-300">Métricas de performance</h4>

                                    <div className="grid grid-cols-4 gap-2 mb-4">
                                        <div className="text-center rounded-lg p-2 transition-colors duration-200 hover:bg-neutral-800">
                                            <div className="text-lg font-medium">{study.metrics.performance}</div>
                                            <div className="text-xs text-neutral-500">Perf.</div>
                                        </div>
                                        <div className="text-center rounded-lg p-2 transition-colors duration-200 hover:bg-neutral-800">
                                            <div className="text-lg font-medium">{study.metrics.accessibility}</div>
                                            <div className="text-xs text-neutral-500">Acess.</div>
                                        </div>
                                        <div className="text-center rounded-lg p-2 transition-colors duration-200 hover:bg-neutral-800">
                                            <div className="text-lg font-medium">{study.metrics.bestPractices}</div>
                                            <div className="text-xs text-neutral-500">Práticas</div>
                                        </div>
                                        <div className="text-center rounded-lg p-2 transition-colors duration-200 hover:bg-neutral-800">
                                            <div className="text-lg font-medium">{study.metrics.seo}</div>
                                            <div className="text-xs text-neutral-500">SEO</div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-2">
                                        <MetricDisplay label="Carregamento" value={study.metrics.pageLoadTime} />
                                        <MetricDisplay label="LCP" value={study.metrics.largestContentfulPaint} />
                                        <MetricDisplay label="CLS" value={study.metrics.cumulativeLayoutShift} />
                                    </div>
                                </div>

                                <Button
                                    variant="default"
                                    className="w-full text-white text-sm bg-neutral-900"
                                    onClick={() => window.open(study.link, "_blank")}
                                >
                                    Ver site <ArrowRight className="ml-2 h-3 w-3" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        className="flex gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <h3 className="text-lg font-medium mb-2">Performance Otimizada</h3>
                            <p className="text-sm text-neutral-400">
                                Nossos sites são construídos com foco em velocidade e desempenho, garantindo tempos de carregamento
                                rápidos e uma experiência fluida para seus usuários.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex gap-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <h3 className="text-lg font-medium mb-2">SEO Avançado</h3>
                            <p className="text-sm text-neutral-400">
                                Implementamos as melhores práticas de SEO para garantir que seu site seja facilmente encontrado pelos
                                motores de busca e alcance seu público-alvo.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}