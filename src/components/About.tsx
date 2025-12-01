'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-20">
            <div className="container px-6 mx-auto">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-20">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-5xl font-bold sticky top-24">About</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-5 text-lg text-muted-foreground leading-relaxed"
                    >
                        <p>
                            Final year CSE student at College of Engineering Trikaripur with a focus on AI/ML and building production-ready systems.
                        </p>
                        <p>
                            Most of my work revolves around machine learning pipelines, NLP systems, and backend APIs. Currently exploring MLOps practices — experiment tracking, model registries, drift detection, and deployment automation.
                        </p>
                        <p>
                            When not training models, I build full-stack applications and tinker with developer tools. Comfortable working across the stack from data preprocessing to API deployment.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
