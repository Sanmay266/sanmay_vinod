'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                    isScrolled ? 'glass py-4' : 'bg-transparent py-6'
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <motion.div
                            layoutId="profile-image"
                            className="relative w-10 h-10 rounded-full overflow-hidden cursor-pointer border-2 border-primary/20 hover:border-primary transition-colors"
                            onClick={() => setIsProfileOpen(true)}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/profile-pic.jpg"
                                alt="Sanmay Vinod"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            Sanmay Vinod
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 group-hover:w-full transition-all duration-300 ease-out"></span>
                            </Link>
                        ))}
                        <div className="flex items-center space-x-4 ml-4 border-l pl-4 border-border/50">
                            <Link href="https://github.com/Sanmay266" target="_blank" className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300">
                                <Github size={20} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/sanmay-vinod-046285270" target="_blank" className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="https://www.instagram.com/_sanmay_._._" target="_blank" className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300">
                                <Instagram size={20} />
                            </Link>
                            <Link href="/resume.pdf" target="_blank">
                                <Button variant="default" size="sm" className="bg-primary hover:bg-foreground text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    Resume
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 overflow-hidden shadow-2xl"
                        >
                            <div className="flex flex-col p-6 space-y-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="flex items-center space-x-6 pt-4 border-t border-border/50">
                                    <Link href="https://github.com/Sanmay266" target="_blank" className="text-muted-foreground hover:text-primary">
                                        <Github size={24} />
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/sanmay-vinod-046285270" target="_blank" className="text-muted-foreground hover:text-primary">
                                        <Linkedin size={24} />
                                    </Link>
                                    <Link href="https://www.instagram.com/_sanmay_._._" target="_blank" className="text-muted-foreground hover:text-primary">
                                        <Instagram size={24} />
                                    </Link>
                                    <Link href="mailto:sanmayvinod11@gmail.com" className="text-muted-foreground hover:text-primary">
                                        <Mail size={24} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Profile Picture Modal */}
            <AnimatePresence>
                {isProfileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                        onClick={() => setIsProfileOpen(false)}
                    >
                        <motion.div
                            layoutId="profile-image"
                            className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-primary"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/profile-pic.jpg"
                                alt="Sanmay Vinod"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
