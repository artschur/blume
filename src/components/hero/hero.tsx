"use client";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Spotlight, GridBackground } from "@/components/blocks/spotlight-new";
import Model from "./model";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <div className="min-h-[90vh] w-full flex flex-col-reverse md:flex-row items-center justify-between bg-black/[0.96] antialiased overflow-hidden px-6 md:px-10 lg:px-20">
            {/* Fix for background pointer issue */}
            <style jsx global>{`
                .grid-background {
                    pointer-events: none !important;
                }
            `}</style>

            <GridBackground />

            {/* Left content area */}
            <div className="z-10 w-full max-w-3xl py-10 md:py-20">
                {/* Product badge */}
                <div className="inline-flex items-center rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-sm text-neutral-300 backdrop-blur-sm mb-8">
                    <span className="mr-2">Blume Web</span>
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                </div>

                {/* Main heading */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
                    Velocidade e<br />
                    Sofisticação
                </h1>

                {/* Updated subtitle */}
                <p className="text-xl text-neutral-400 max-w-xl mb-10">
                    A Blume é uma agência de software especializada em criar landing pages bonitas e de alta performance.
                    Transformamos sua visão em experiências digitais impactantes.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-4">
                    <Button className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-6 text-base font-medium">
                        Começar agora <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        className=" text-white bg-black hover:bg-neutral-900 rounded-full px-8 py-6 text-base font-medium"
                    >
                        Documentação <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* 3D model area - now visible on all screen sizes */}
            <div className="z-10 w-full md:w-[400px] lg:w-[400px] h-[200px] md:h-[400px] lg:h-[500px] mt-6 md:mt-0">
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
            </div>

            <Spotlight />
        </div>
    );
}

