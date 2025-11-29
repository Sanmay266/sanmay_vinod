'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        company: 'TechCorp',
        role: 'Senior Full Stack Developer',
        period: '2022 - Present',
        description: 'Leading a team of 5 developers to build scalable SaaS products. Implemented microservices architecture and improved system performance by 40%.',
        skills: ['React', 'Node.js', 'AWS', 'Docker'],
    },
    {
        company: 'Creative Agency',
        role: 'Frontend Developer',
        period: '2020 - 2022',
        description: 'Developed award-winning websites for high-profile clients. Focused on creating immersive user experiences with WebGL and GSAP.',
        skills: ['Vue.js', 'Three.js', 'GSAP', 'Sass'],
    },
    {
        company: 'StartUp Inc',
        role: 'Junior Developer',
        period: '2018 - 2020',
        description: 'Collaborated with the product team to launch the MVP. Built responsive UI components and integrated RESTful APIs.',
        skills: ['React', 'Redux', 'Firebase'],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="min-h-screen py-20 flex items-center justify-center relative">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My professional journey and the companies I've had the privilege to work with.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-primary/50" />
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                        <CardTitle className="text-xl font-bold flex items-center gap-2">
                                            <Briefcase className="w-5 h-5 text-primary" />
                                            {exp.role}
                                        </CardTitle>
                                        <div className="flex items-center text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {exp.period}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground/80">{exp.company}</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
