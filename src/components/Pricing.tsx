import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "$999",
    period: "/month",
    description: "Perfect for growing creators needing consistent content.",
    features: [
      "15 Short-form Clips per month",
      "Basic motion graphics & captions",
      "48-hour turnaround",
      "Dedicated account manager",
      "Website audit & consultation"
    ],
    missing: [
      "Custom Website Build",
      "Advanced 3D/VFX"
    ],
    popular: false,
    cta: "Start Starter"
  },
  {
    name: "Growth",
    price: "$2,499",
    period: "/month",
    description: "The complete package. Content + Web presence.",
    features: [
      "30 Short-form Clips per month",
      "Premium motion graphics & VFX",
      "24-hour turnaround",
      "Custom Landing Page Design & Build",
      "SEO Optimization",
      "Weekly strategy calls"
    ],
    missing: [],
    popular: true,
    cta: "Start Growth"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For established brands scaling aggressively.",
    features: [
      "Unlimited Clips",
      "Full Custom Web App Development",
      "Dedicated editing team",
      "Content Strategy & Scripting",
      "Priority 12-hour turnaround"
    ],
    missing: [],
    popular: false,
    cta: "Contact Us"
  }
];

export function Pricing() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Invest in your growth. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              key={idx}
              className={`relative bg-card border rounded-3xl p-8 shadow-xl flex flex-col ${
                tier.popular ? 'border-primary ring-1 ring-primary/20 scale-105 z-10' : 'border-card-border'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold font-heading text-foreground mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm h-10">{tier.description}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground font-medium">{tier.period}</span>
                </div>
              </div>

              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-sm text-foreground/90">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                  {tier.missing.map((feat, mIdx) => (
                    <li key={`m-${mIdx}`} className="flex items-start gap-3 text-sm text-muted-foreground/50">
                      <X className="w-5 h-5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                variant={tier.popular ? "default" : "outline"} 
                className="w-full h-12 text-base font-semibold mt-auto"
                onClick={() => scrollTo("cta")}
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}