'use client';

import { motion } from 'framer-motion';

const skillRows = [
    // Row 1 - Languages & Core
    [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'Rust', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    ],
    // Row 2 - ML/AI & MLOps
    [
        { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
        { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
        { name: 'Keras', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg' },
        { name: 'Hugging Face', icon: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
        { name: 'MLflow', icon: 'https://www.mlflow.org/docs/latest/_static/MLflow-logo-final-black.png' },
        { name: 'LangChain', icon: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4' },
        { name: 'Optuna', icon: 'https://optuna.org/assets/img/optuna-logo.png' },
        { name: 'Prefect', icon: 'https://avatars.githubusercontent.com/u/39270919?s=200&v=4' },
        { name: 'DVC', icon: 'https://avatars.githubusercontent.com/u/33164907?s=200&v=4' },
    ],
    // Row 3 - DevOps, Databases & Tools
    [
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        { name: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
        { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
        { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
        { name: 'Render', icon: 'https://avatars.githubusercontent.com/u/36424661?s=200&v=4' },
    ],
];

function SkillCard({ name, icon }: { name: string; icon: string }) {
    return (
        <div className="flex flex-col items-center justify-center gap-3 px-6 py-4 min-w-[120px]">
            <div className="w-16 h-16 rounded-xl bg-card/80 border border-border/50 flex items-center justify-center p-3 hover:border-primary/50 hover:scale-110 transition-all duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={icon} alt={name} className="w-full h-full object-contain" />
            </div>
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{name}</span>
        </div>
    );
}

function ScrollingRow({ skills, direction = 'left', duration = 30 }: { skills: typeof skillRows[0]; direction?: 'left' | 'right'; duration?: number }) {
    const duplicatedSkills = [...skills, ...skills, ...skills];

    return (
        <div className="relative overflow-hidden py-4">
            <motion.div
                className="flex"
                animate={{
                    x: direction === 'left' ? ['0%', '-33.33%'] : ['-33.33%', '0%'],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration,
                        ease: 'linear',
                    },
                }}
            >
                {duplicatedSkills.map((skill, index) => (
                    <SkillCard key={`${skill.name}-${index}`} name={skill.name} icon={skill.icon} />
                ))}
            </motion.div>
        </div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Technologies I work with to build intelligent systems and scalable applications.
                    </p>
                </motion.div>
            </div>

            <div className="space-y-2">
                <ScrollingRow skills={skillRows[0]} direction="left" duration={35} />
                <ScrollingRow skills={skillRows[1]} direction="right" duration={40} />
                <ScrollingRow skills={skillRows[2]} direction="left" duration={35} />
            </div>
        </section>
    );
}
