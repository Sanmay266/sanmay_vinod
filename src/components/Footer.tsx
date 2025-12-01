'use client';

import Link from 'next/link';
import { Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react';

const socialLinks = [
    { icon: Github, href: 'https://github.com/Sanmay266', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sanmay-vinod-046285270', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/_sanmay_._._', label: 'Instagram' },
    { icon: Mail, href: 'mailto:sanmayvinod11@gmail.com', label: 'Email' },
];

export default function Footer() {
    return (
        <footer className="py-8 border-t border-border/50 bg-background/50 backdrop-blur-sm">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon size={20} />
                            </Link>
                        ))}
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                        <p className="flex items-center gap-1 justify-center">
                            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
                        </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Sanmay Vinod
                    </p>
                </div>
            </div>
        </footer>
    );
}
