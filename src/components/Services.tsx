import { Button } from "@/components/ui/button";
import { Play, Code, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Short-Form Clipping",
    description: "We turn your long podcasts and videos into engaging, high-retention clips for Reels, Shorts, and TikTok.",
    icon: <Play className="w-6 h-6 text-primary" />,
  },
  {
    title: "Website Development",
    description: "Clean, high-converting websites built specifically for creators, coaches, and growing businesses.",
    icon: <Code className="w-6 h-6 text-primary" />,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-card/30 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
            Everything you need to <span className="text-primary">grow</span>.
          </h2>
          <p className="text-muted-foreground text-lg">
            We handle the heavy lifting of content repurposing and web presence, so you can focus on creating.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              key={idx}
              className="p-8 rounded-2xl bg-card border border-card-border shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-3 mb-8">
                {idx === 0 ? (
                  <>
                    <li className="flex items-center gap-2 text-sm text-foreground/80"><CheckCircle2 className="w-4 h-4 text-primary" /> Captions & B-roll</li>
                    <li className="flex items-center gap-2 text-sm text-foreground/80"><CheckCircle2 className="w-4 h-4 text-primary" /> Hook optimization</li>
                    <li className="flex items-center gap-2 text-sm text-foreground/80"><CheckCircle2 className="w-4 h-4 text-primary" /> Quick turnaround</li>
                  </>
                ) : (
                  <>
                    <li className="flex items-center gap-2 text-sm text-foreground/80"><CheckCircle2 className="w-4 h-4 text-primary" /> Custom design</li>
                    <li className="flex items-center gap-2 text-sm text-foreground/80"><CheckCircle2 className="w-4 h-4 text-primary" /> Mobile-first & fast</li>
                    <li className="flex items-center gap-2 text-sm text-foreground/80"><CheckCircle2 className="w-4 h-4 text-primary" /> SEO optimized</li>
                  </>
                )}
              </ul>
              <Button variant="outline" className="w-full group">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}