import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const clips = [
  { img: "/images/clip-1.png", title: "Hook Optimization" },
  { img: "/images/clip-2.png", title: "Educational Content" },
  { img: "/images/clip-3.png", title: "Product Reviews" },
  { img: "/images/clip-4.png", title: "Real Estate Tours" },
  { img: "/images/clip-5.png", title: "Podcast Snippets" },
];

const websites = [
  { img: "/images/web-1.png", title: "SaaS Dashboard UI" },
  { img: "/images/web-2.png", title: "Agency Portfolio" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-card/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-foreground">
            Our Work
          </h2>
          <p className="text-muted-foreground text-lg">
            High-converting websites and scroll-stopping short-form content.
          </p>
        </div>

        <Tabs defaultValue="clips" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-background border border-border">
              <TabsTrigger value="clips" className="px-8 font-medium">Short-Form Clips</TabsTrigger>
              <TabsTrigger value="websites" className="px-8 font-medium">Websites</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="clips" className="mt-0">
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
              {clips.map((clip, idx) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  key={idx}
                  className="snap-center shrink-0 w-[280px] sm:w-[320px] aspect-[9/16] relative rounded-2xl overflow-hidden group cursor-pointer border border-border shadow-xl"
                >
                  <img src={clip.img} alt={clip.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-6 h-6 ml-1" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h4 className="text-white font-bold font-heading text-lg">{clip.title}</h4>
                    <p className="text-white/70 text-sm mt-1">High-retention edit</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="websites" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8">
              {websites.map((web, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  key={idx}
                  className="rounded-2xl overflow-hidden border border-border bg-card group shadow-xl"
                >
                  <div className="aspect-[16/9] relative overflow-hidden bg-muted">
                    <img src={web.img} alt={web.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold font-heading text-foreground">{web.title}</h4>
                    <p className="text-muted-foreground mt-2">Custom tailored, responsive, and blazing fast.</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Custom CSS to hide scrollbar for the carousel */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}