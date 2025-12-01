'use client';

import { motion } from 'framer-motion';
import { Github, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const projects = [
    {
        title: 'AutoML Pipeline',
        description: 'Production-ready end-to-end AutoML pipeline with data validation, model selection using Optuna, MLflow tracking, champion-challenger registry, drift detection, and FastAPI deployment.',
        tags: ['Python', 'MLflow', 'Prefect', 'Optuna', 'FastAPI', 'DVC'],
        github: 'https://github.com/Sanmay266/AutoML_Pipeline',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&q=80',
        status: 'completed',
    },
    {
        title: 'MCP Builder',
        description: 'A tool for building and managing Model Context Protocol (MCP) servers. Simplifies the creation of AI-powered tools and integrations with a visual builder interface.',
        tags: ['Python', 'TypeScript', 'MCP', 'AI Tools'],
        github: 'https://github.com/Sanmay266/MCP_Builder',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        status: 'in-progress',
    },
    {
        title: 'RAG Chatbot',
        description: 'Retrieval-Augmented Generation chatbot built with OpenAI and FastAPI. Enables intelligent document Q&A with vector embeddings and semantic search.',
        tags: ['Python', 'OpenAI', 'FastAPI', 'RAG', 'LangChain'],
        github: 'https://github.com/Sanmay266/Rag_chatbot_fastAPI',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
        status: 'completed',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen py-20 bg-secondary/5">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Here are some of the projects I've worked on. Each one was built to solve a specific problem or explore new technologies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors group">
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle>{project.title}</CardTitle>
                                        {project.status === 'in-progress' && (
                                            <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-500/20 text-yellow-500 border border-yellow-500/30">
                                                In Progress
                                            </span>
                                        )}
                                    </div>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground border border-border/50"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between gap-4 pt-4 border-t border-border/50">
                                    <Link href={project.github} target="_blank" className="w-full">
                                        <Button variant="outline" size="sm" className="w-full gap-2">
                                            <Github size={16} /> Code
                                        </Button>
                                    </Link>
                                    <Button
                                        size="sm"
                                        className="w-full gap-2 cursor-not-allowed opacity-60"
                                        disabled
                                        title="Coming Soon"
                                    >
                                        <Clock size={16} /> Coming Soon
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <Link
                        href="https://github.com/Sanmay266"
                        target="_blank"
                        className="inline-flex items-center gap-2 text-lg font-medium text-muted-foreground hover:text-primary transition-colors group"
                    >
                        Other Projects
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
