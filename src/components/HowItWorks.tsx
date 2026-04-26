import { motion } from "framer-motion";
import { UploadCloud, Scissors, TrendingUp } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Upload",
    description: "Send us your long-form videos, podcasts, or raw footage. Tell us your goals and vibe.",
    icon: <UploadCloud className="w-8 h-8 text-primary" />,
  },
  {
    num: "02",
    title: "We Build & Clip",
    description: "Our team extracts the most engaging moments, adds dynamic captions, and builds your custom site.",
    icon: <Scissors className="w-8 h-8 text-primary" />,
  },
  {
    num: "03",
    title: "You Grow",
    description: "Receive ready-to-post, high-retention clips and launch your premium web presence to convert viewers.",
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            A streamlined process designed so you can stay focused on what you do best: creating.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-border -translate-y-1/2 z-0" />

          {steps.map((step, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              key={idx}
              className="relative z-10 bg-card border border-card-border p-8 rounded-2xl shadow-lg flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-background border border-border flex items-center justify-center mb-6 shadow-inner relative">
                {step.icon}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground font-bold font-heading rounded-full flex items-center justify-center text-sm border-4 border-card">
                  {step.num}
                </div>
              </div>
              <h3 className="text-2xl font-bold font-heading mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}