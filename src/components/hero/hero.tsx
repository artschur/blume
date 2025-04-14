"use client";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Spotlight, GridBackground } from "@/components/blocks/spotlight-new";
import Model from "./model";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { GradientButton } from "../ui/gradient-button";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import ShinyBadge from "../shiny-badge";

export function HeroSection() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const buttonVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const canvasVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.6,
            },
        },
    };

    return (
        <div className="min-h-[100vh] pt-24 md:pt-0 w-full flex flex-col-reverse md:flex-row items-center justify-end md:justify-around bg-black/[0.96] antialiased overflow-hidden px-6 md:px-10 lg:px-20">
            {/* Fix for background pointer issue */}
            <style jsx global>{`
                .grid-background {
                    pointer-events: none !important;
                }
            `}</style>

            <GridBackground />

            {/* Left content area */}
            <motion.div
                className="z-10 w-full max-w-3xl py-10 md:py-20"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                {/* Product badge */}
                <motion.div>
                    <ShinyBadge />
                </motion.div>

                {/* Main heading */}
                <motion.h1
                    className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
                    variants={itemVariants}
                >
                    <motion.span className="block" variants={itemVariants}>
                        Velocidade e
                    </motion.span>
                    <motion.span className="block" variants={itemVariants}>
                        Sofisticação
                    </motion.span>
                </motion.h1>

                {/* Updated subtitle */}
                <motion.p className="text-xl text-neutral-400 max-w-xl mb-10" variants={itemVariants}>
                    A Blume é uma agência de software especializada em criar landing pages excepcionais e de alta performance.
                    Transformamos sua visão em experiências digitais impactantes.
                </motion.p>

                {/* CTA buttons */}
                <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
                    <motion.div variants={buttonVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                        <Button
                            className="text-black bg-white hover:bg-neutral-900 rounded-full px-8 py-6 text-base font-medium z-20"

                        >
                            Começar Hoje <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                    </motion.div>
                    <motion.div variants={buttonVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                        <Button
                            variant="outline"
                            className="text-white bg-black hover:bg-neutral-900 rounded-full px-8 py-6 text-base font-medium z-20"
                        >
                            Nossos cases
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* 3D model area - now with animation */}
            <motion.div
                className="z-10 w-full md:w-[400px] lg:w-[400px] h-[200px] md:h-[400px] lg:h-[500px] mt-6 md:mt-0"
                initial="hidden"
                animate="visible"
                variants={canvasVariants}
                whileInView={{
                    rotate: [0, 5, 0, -5, 0],
                    transition: {
                        duration: 10,
                        ease: "easeInOut",
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                    },
                }}
            >
                <Canvas
                    camera={{ position: [0, 0, 150], fov: 40 }}
                    gl={{
                        alpha: true,
                        antialias: true,
                        preserveDrawingBuffer: true,
                        premultipliedAlpha: false,
                    }}
                    style={{ background: "transparent" }}
                    className="outline-none"
                >
                    {/* Enhanced lighting for metallic look */}
                    <ambientLight intensity={0.8} />
                    <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={2} />
                    <spotLight position={[-10, 5, 10]} angle={0.5} penumbra={1} intensity={1.5} />
                    <pointLight position={[0, 0, 10]} intensity={1.5} />

                    <Environment preset="studio" background={false} />

                    <Model url="/blumeLogo.gltf" />
                </Canvas>
            </motion.div>

            <Spotlight />
        </div >
    );
}

