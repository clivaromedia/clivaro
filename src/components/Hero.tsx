import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Code } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none" />
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/30 rounded-full blur-[128px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50 pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 font-medium text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Creator-Focused Studio
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold font-heading tracking-tight mb-6 text-foreground leading-[1.1]">
            Turn Your Content Into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Powerful Online Presence</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
            We build your website and transform your videos into engaging short-form content — all in one place. Serious growth for serious creators.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => scrollTo("cta")} className="h-14 px-8 text-base font-semibold shadow-[0_0_40px_rgba(26,115,232,0.4)] hover:shadow-[0_0_60px_rgba(26,115,232,0.6)] transition-all">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("portfolio")} className="h-14 px-8 text-base font-semibold bg-background/50 backdrop-blur-sm border-border hover:bg-accent/10">
              <PlayCircle className="mr-2 w-5 h-5 text-primary" />
              View Sample Clips
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Main Hero Image */}
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3 scale-105 blur-sm opacity-50" />
            <img 
              src="/images/hero.png" 
              alt="Clivaro Media Services Mockups" 
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl border border-border/50"
            />
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-card border border-card-border p-4 rounded-2xl shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-500 font-bold">↑</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Engagement</p>
                  <p className="text-sm font-bold text-foreground">+340%</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-card border border-card-border p-4 rounded-2xl shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">New Website</p>
                  <p className="text-sm font-bold text-foreground">Live</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}