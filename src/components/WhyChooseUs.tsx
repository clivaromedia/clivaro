import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, Heart } from "lucide-react";

const reasons = [
  {
    title: "One-Stop Solution",
    description: "Stop managing multiple freelancers. We handle both your web presence and your video clipping seamlessly.",
    icon: <Shield className="w-6 h-6 text-primary" />
  },
  {
    title: "Lightning Fast Delivery",
    description: "Content moves fast. We deliver your daily clips within 24-48 hours so you never miss a trend.",
    icon: <Zap className="w-6 h-6 text-primary" />
  },
  {
    title: "Creator-Focused",
    description: "We understand the algorithm. Our edits aren't just flashy—they are engineered to retain attention and convert.",
    icon: <Heart className="w-6 h-6 text-primary" />
  },
  {
    title: "Premium Quality, Transparent Pricing",
    description: "Agency-level quality without the massive agency overhead. Clear packages built for growing brands.",
    icon: <CheckCircle className="w-6 h-6 text-primary" />
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground">
              Why Top Creators Choose Clivaro Media
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We don't just edit videos or write code. We build growth engines. 
              Our deep understanding of content psychology paired with modern web development means your brand looks premium everywhere.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="shrink-0 mt-1 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-heading text-foreground mb-2">{reason.title}</h4>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-overlay z-10" />
               <img 
                 src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop" 
                 alt="Creative Studio workspace" 
                 className="w-full h-full object-cover opacity-80"
               />
               <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]" />
               
               <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center p-8">
                 <h3 className="text-4xl md:text-6xl font-bold font-heading text-white mb-4">10000+</h3>
                 <p className="text-xl text-white/90 font-medium">Views generated for our clients this year.</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}