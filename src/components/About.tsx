'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
    return (
        <section id="about" className="min-h-screen py-20 flex items-center justify-center bg-secondary/5 relative overflow-hidden">
            {/* Decorative Background - Enhanced */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="container px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-8"
                    >
                        <h3 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                            I am an <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-gradient-x">AI & ML Engineer</span>
                        </h3>
                        <p className="text-xl md:text-2xl text-muted-foreground font-light">
                            Diving deep into <span className="text-foreground font-medium">Full Stack Systems</span> & <span className="text-foreground font-medium">DevOps (AWS)</span>
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mb-12"
                    >
                        <Card className="bg-background/50 backdrop-blur-sm border-primary/10 shadow-xl">
                            <CardContent className="p-8">
                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                    Currently a <span className="font-semibold text-primary">Fourth Year CSE B.Tech Student</span> at <span className="font-semibold text-foreground">College of Engineering Trikaripur</span>.
                                    I bridge the gap between complex AI algorithms and robust, scalable web infrastructure.
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <div className="flex flex-wrap justify-center gap-3">
                            {['Artificial Intelligence', 'Machine Learning', 'Full Stack Development', 'DevOps', 'AWS', 'Python', 'React', 'Next.js', 'Docker', 'Kubernetes'].map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
