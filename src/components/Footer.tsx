export default function Footer() {
    return (
        <footer className="py-6 border-t border-border/50 bg-background/50 backdrop-blur-sm">
            <div className="container px-6 mx-auto text-center text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Sanmay Vinod. All rights reserved.</p>
                <p className="mt-2">Built with Next.js, Tailwind CSS & Framer Motion</p>
            </div>
        </footer>
    );
}
