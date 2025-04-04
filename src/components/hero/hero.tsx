"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Spotlight, GridBackground } from "@/components/blocks/spotlight-new";
import Model from "./model";
import { RainbowButton } from "../magicui/rainbow-button";

export function HeroSection() {
    return (
        <div className="h-[100vh]  w-full flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <GridBackground />
            <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-8">
                <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Velocidade  e Sofisticação
                </h1>

            </div>
            <div className="w-64 h-72 mt-8 relative">
                <Canvas
                    camera={{ position: [0, 0, 150], fov: 40 }}
                    gl={{
                        alpha: true,
                        antialias: true,
                        preserveDrawingBuffer: true,
                        premultipliedAlpha: false,
                    }}
                    style={{ background: 'transparent' }}
                    className="outline-none">

                    {/* Rest of the Canvas content */}
                    {/* Remove this line as it may interfere with transparency */}
                    {/* <color attach="background" args={["transparent"]} /> */}

                    {/* Enhanced lighting for metallic look */}
                    <ambientLight intensity={1.5} />
                    <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} intensity={2.5} />
                    <spotLight position={[-10, 5, 10]} angle={0.5} penumbra={1} intensity={2.0} />
                    <pointLight position={[0, 0, 10]} intensity={2.0} />

                    <Environment preset="studio" background={false} />

                    <Model url="/blumeLogo.gltf" />
                </Canvas>
            </div>
            <Spotlight />
            <div className="flex flex-col items-center justify-center mptt-8">
                <p className="mt-4  font-mono text-center text-lg text-neutral-400 max-w-2xl mx-auto">
                    A Blume constrói sites que vão além do design. <br />
                    Usamos as melhores tecnologias para garantir que o site da sua empresa seja rápido, seguro e otimizado para SEO. <br />
                </p>
                <div className="flex gap-6">
                    <RainbowButton className="mt-8">
                        Tenho interesse
                    </RainbowButton>
                    <RainbowButton darkbg className="mt-8">
                        Nossos clientes
                    </RainbowButton>
                </div>
            </div>
        </div>
    );
}