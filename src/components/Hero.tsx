'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ParticleSphere from '@/components/ParticleSphere';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradient Blob */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gray-400/10 rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gray-600/10 rounded-full blur-3xl opacity-20" />

            {/* Particle Sphere Animation */}
            <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none">
                <ParticleSphere count={150} radius={300} color="#ffffff" className="w-full h-full" />
            </div>

            <div className="container px-6 mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-secondary/50 border border-border/50 text-sm text-muted-foreground mb-6 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Open to opportunities
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 font-mono"
                >
                    From data to deploy, <br />
                    <span className="text-muted-foreground">
                        I make models work.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                >
                    Sanmay Vinod — AI/ML engineer who builds pipelines, trains models, and ships them to production.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="#projects">
                        <Button size="lg" className="h-12 px-8 text-lg rounded-full group">
                            View Projects
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                    <Link href="/Sanmay_Vinod.pdf" target="_blank">
                        <Button variant="outline" size="lg" className="h-12 px-8 text-lg rounded-full backdrop-blur-sm bg-background/50">
                            Download CV
                            <Download className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
