import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanmay Vinod | AI/ML Engineer & Full Stack Developer",
  description: "Portfolio of Sanmay Vinod, an AI/ML Engineer and Full Stack Developer specializing in modern web technologies, machine learning, and cloud infrastructure.",
  keywords: ["AI", "Machine Learning", "Full Stack Developer", "React", "Next.js", "Python", "AWS", "DevOps"],
  authors: [{ name: "Sanmay Vinod" }],
  openGraph: {
    title: "Sanmay Vinod | AI/ML Engineer & Full Stack Developer",
    description: "Portfolio of Sanmay Vinod, an AI/ML Engineer and Full Stack Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased bg-background text-foreground selection:bg-primary/30`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
