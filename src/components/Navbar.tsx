import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Services", id: "services" },
    { name: "How It Works", id: "how-it-works" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Pricing", id: "pricing" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
        {/* <img src="/public/images/clivaro_icon.png" alt="Clivaro Icon" className="w-8 h-8"/> */}
        <img src="/public/images/clivaro_logo.png" alt="Clivaro Media" className="h-14 w-auto"/>
        </a>
        {/* <a href="/" className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold font-heading text-xl">C</span>
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-foreground">Clivaro Media</span>
        </a> */}

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <Button onClick={() => scrollTo("cta")} className="font-semibold shadow-lg shadow-primary/20">
            Get Started
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border">
              <div className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.id)}
                    className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
                <Button onClick={() => scrollTo("cta")} className="mt-4">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}