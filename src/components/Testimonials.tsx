import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Tech YouTuber (500k+ Subs)",
    content: "Clivaro totally transformed my workflow. Their clips capture the exact essence of my long-form videos, and the new website they built me tripled my newsletter signups.",
    initials: "AR"
  },
  {
    name: "Sarah Chen",
    role: "Business Coach",
    content: "Finding a team that understands both high-converting web design and viral social content is rare. Clivaro is the secret weapon behind my recent launch.",
    initials: "SC"
  },
  {
    name: "Marcus Johnson",
    role: "Real Estate Agent",
    content: "The property tour Reels they produce are insane. Clean, professional, and they hook viewers instantly. Best ROI I've spent on marketing.",
    initials: "MJ"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-card/30 border-y border-border">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
            Loved by Creators
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what happens when you partner with Clivaro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              key={idx}
              className="bg-background border border-border p-8 rounded-2xl shadow-lg relative"
            >
              <div className="flex text-primary mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-foreground/90 text-lg mb-8 leading-relaxed italic">
                "{test.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary font-bold">{test.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-foreground font-heading">{test.name}</h4>
                  <p className="text-sm text-muted-foreground">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}