'use client';

import React, { useEffect, useRef } from 'react';

interface ParticleSphereProps {
    count?: number;
    radius?: number;
    color?: string;
    className?: string;
}

export default function ParticleSphere({
    count = 100,
    radius = 100,
    color = '#ffffff',
    className = '',
}: ParticleSphereProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = canvas.width;
        let height = canvas.height;

        // Particles
        const particles: { x: number; y: number; z: number }[] = [];

        // Initialize particles on a sphere
        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;

            particles.push({
                x: radius * Math.cos(theta) * Math.sin(phi),
                y: radius * Math.sin(theta) * Math.sin(phi),
                z: radius * Math.cos(phi),
            });
        }

        let rotationX = 0;
        let rotationY = 0;

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Center of the canvas
            const cx = width / 2;
            const cy = height / 2;

            // Rotate
            rotationX += 0.005;
            rotationY += 0.005;

            const rotatedParticles = particles.map((p) => {
                // Rotate around Y
                let x = p.x * Math.cos(rotationY) - p.z * Math.sin(rotationY);
                let z = p.x * Math.sin(rotationY) + p.z * Math.cos(rotationY);
                let y = p.y;

                // Rotate around X
                let yNew = y * Math.cos(rotationX) - z * Math.sin(rotationX);
                let zNew = y * Math.sin(rotationX) + z * Math.cos(rotationX);

                return { x, y: yNew, z: zNew };
            });

            // Draw connections
            ctx.strokeStyle = `${color}20`; // Low opacity for lines
            ctx.lineWidth = 1;

            // Simple distance check for connections (optimization: only check nearby indices?)
            // For 100 particles, N^2 is 10000, which is fine for modern JS.
            for (let i = 0; i < count; i++) {
                for (let j = i + 1; j < count; j++) {
                    const p1 = rotatedParticles[i];
                    const p2 = rotatedParticles[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dz = p1.z - p2.z;
                    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                    if (dist < radius * 0.5) { // Connection threshold
                        const opacity = 1 - dist / (radius * 0.5);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
                        ctx.beginPath();
                        ctx.moveTo(cx + p1.x, cy + p1.y);
                        ctx.lineTo(cx + p2.x, cy + p2.y);
                        ctx.stroke();
                    }
                }
            }

            // Draw particles
            ctx.fillStyle = color;
            rotatedParticles.forEach((p) => {
                // Perspective scale (optional, but adds depth)
                // const scale = 200 / (200 + p.z); 
                // For a simple sphere, flat projection is often enough, but let's do simple Z-sorting if needed.
                // Actually, just drawing them is fine for this aesthetic.

                const alpha = (p.z + radius) / (2 * radius); // Fade out back particles
                ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + alpha * 0.5})`;

                ctx.beginPath();
                ctx.arc(cx + p.x, cy + p.y, 2, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        const handleResize = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.clientWidth;
                canvas.height = canvas.parentElement.clientHeight;
                width = canvas.width;
                height = canvas.height;
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [count, radius, color]);

    return <canvas ref={canvasRef} className={className} />;
}
