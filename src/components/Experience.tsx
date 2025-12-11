'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        company: 'Codtech IT Solutions',
        role: 'AI Intern',
        period: 'Oct 2025 – Present',
        description: 'Building NLP pipelines, neural style transfer models, and API-first inference systems with Python, PyTorch, and OpenAI.',
    },
    {
        company: 'Alpha Innovations',
        role: 'ML Intern',
        period: 'Sep – Nov 2025',
        description: 'Developed supply-chain forecasting engine with time-series ML pipelines and automated workflow orchestration.',
    },
    {
        company: 'Vislona',
        role: 'ML Intern',
        period: 'Sep – Oct 2025',
        description: 'Built image quality analysis system and dual AI task routing with LightGBM + Gemini API (95% accuracy).',
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">Experience</h2>
                </motion.div>

                <div className="max-w-3xl mx-auto relative">
                    <div className="absolute left-[6px] top-3 bottom-3 w-px bg-border" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="relative pl-6 sm:pl-10 pb-10 last:pb-0"
                        >
                            <div className="absolute left-0 w-[13px] h-[13px] rounded-full bg-muted-foreground/40 mt-2" />

                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                                <h3 className="text-lg font-medium">{exp.role} <span className="text-muted-foreground font-normal">@ {exp.company}</span></h3>
                                <span className="text-muted-foreground/60">{exp.period}</span>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
