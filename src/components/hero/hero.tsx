"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Spotlight, GridBackground } from "@/components/blocks/spotlight-new";
import Model from "./model";

export function HeroSection() {
    return (
        <div className="h-[100vh] w-full flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <GridBackground />
            <div className="w-full h-72 mt-8 relative">
                // In the Canvas component:
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
            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Blume <br /> which is not overused.
                </h1>
                <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                    A subtle yet effective spotlight effect, because the previous version
                    is used a bit too much these days.
                </p>

                {/* 3D Model Canvas with transparent background */}

            </div>
        </div>
    );
}