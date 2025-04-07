"use client";
import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { ThreeEvent } from "@react-three/fiber";

function Model({ url }: { url: string; }) {
    const { scene } = useGLTF(url);
    const modelRef = useRef<THREE.Group>(null);
    const [dragging, setDragging] = useState(false);
    const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);
    const [targetRotation, setTargetRotation] = useState<[number, number, number]>([0, 0, 0]);
    const [lastPosition, setLastPosition] = useState<[number, number]>([0, 0]);

    const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        setDragging(true);
        setLastPosition([e.clientX, e.clientY]);
    };

    const handlePointerUp = () => {
        setDragging(false);
    };

    const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
        if (dragging) {
            const dx = e.clientX - lastPosition[0];
            const dy = e.clientY - lastPosition[1];

            setTargetRotation([
                targetRotation[0] + dy * 0.05,
                targetRotation[1] + dx * 0.05,
                targetRotation[2]
            ]);

            setLastPosition([e.clientX, e.clientY]);
        }
    };

    useEffect(() => {
        if (scene) {
            scene.traverse((child) => {
                if ((child as THREE.Mesh).isMesh) {
                    const mesh = child as THREE.Mesh;
                    if (mesh.material) {
                        const material = mesh.material as THREE.MeshStandardMaterial;

                        // Lower roughness for even more reflective surface
                        material.roughness = 0.01;

                        // Maximum metalness
                        material.metalness = 1.0;

                        // Increased environment reflections
                        material.envMapIntensity = 5.0;

                        // Darker base color (almost black with slight blue tint)
                        material.color.set(new THREE.Color(0x090D14));

                        // Subtle emissive glow to add depth in dark areas
                        material.emissive = new THREE.Color(0x0A0A10);
                        material.emissiveIntensity = 0.05;

                        material.color.offsetHSL(0.02, 0.05, -0.2);

                        if (material.normalScale) {
                            material.normalScale.set(2.2, 2.2);
                        }

                        material.needsUpdate = true;
                    }
                }
            });

            return () => {
                document.body.style.cursor = 'auto';
            };
        }
    }, [scene]);

    useFrame(() => {
        if (modelRef.current) {
            // Smooth interpolation for rotation (lerp)
            modelRef.current.rotation.x += (targetRotation[0] - modelRef.current.rotation.x) * 0.1;
            modelRef.current.rotation.y += (targetRotation[1] - modelRef.current.rotation.y) * 0.1;

            // Faster continuous rotation when not dragging
            if (!dragging) {
                setTargetRotation([
                    targetRotation[0],
                    targetRotation[1] + 0.008,
                    targetRotation[2]
                ]);
            }
        }
    });

    return (
        <primitive
            ref={modelRef}
            object={scene}
            scale={0.8}
            position={[0, 0, 5]} // Position in front of the camera
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerUp}
        />
    );
}

export default Model;