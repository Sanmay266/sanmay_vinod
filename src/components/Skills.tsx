'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Database, Layout, Settings } from 'lucide-react';

const skillCategories = [
    {
        title: 'Frontend',
        icon: <Layout className="w-8 h-8 text-gray-400" />,
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
    },
    {
        title: 'Backend',
        icon: <Database className="w-8 h-8 text-gray-400" />,
        skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Prisma', 'GraphQL'],
    },
    {
        title: 'DevOps & Tools',
        icon: <Settings className="w-8 h-8 text-gray-400" />,
        skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Vercel', 'Jest'],
    },
    {
        title: 'Languages',
        icon: <Code2 className="w-8 h-8 text-gray-400" />,
        skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML5', 'CSS3'],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="min-h-screen py-20 flex items-center justify-center relative">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A look at the tools and technologies I use to build digital products.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
                                <CardHeader className="text-center">
                                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                                        {category.icon}
                                    </div>
                                    <CardTitle className="text-xl">{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground border border-border/50"
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
