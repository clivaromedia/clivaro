// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Mail } from "lucide-react";
// import { useState } from "react";
// import { Input } from "@/components/ui/input";

// export function CTA() {
//   const [email, setEmail] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email) {
//       setSubmitted(true);
//       // In a real app, this would submit to an API
//       setTimeout(() => setSubmitted(false), 3000);
//       setEmail("");
//     }
//   };

//   return (
//     <section id="cta" className="py-24 relative overflow-hidden">
//       <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      
//       <div className="container px-4 mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="max-w-4xl mx-auto bg-card/50 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 md:p-16 text-center shadow-2xl"
//         >
//           <h2 className="text-4xl md:text-6xl font-extrabold font-heading mb-6 text-foreground">
//             Start Growing Today with <span className="text-primary">Clivaro Media</span>
//           </h2>
//           <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
//             Ready to elevate your content and web presence? Let's build something extraordinary together.
//           </p>
          
//           <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-6">
//             <Input 
//               type="email" 
//               placeholder="Enter your email address" 
//               className="h-14 bg-background/80 border-primary/30 focus-visible:ring-primary text-base"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <Button type="submit" size="lg" className="h-14 px-8 text-base font-bold shadow-lg shadow-primary/20 w-full sm:w-auto shrink-0">
//               {submitted ? "Message Sent!" : "Get Started"}
//               {!submitted && <ArrowRight className="ml-2 w-5 h-5" />}
//             </Button>
//           </form>
//           <p className="text-sm text-muted-foreground">
//             Or reach us directly at <a href="mailto:hello@clivaromedia.com" className="text-primary hover:underline">clivaromedia@gmail.com</a>
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

export function CTA() {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-card/50 backdrop-blur-xl border border-primary/20 rounded-3xl p-8 md:p-16 text-center shadow-2xl"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-extrabold font-heading mb-6 text-foreground">
            Start Growing Today with{" "}
            <span className="text-primary">Clivaro Media</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ready to elevate your content and web presence? Let's build something extraordinary together.
          </p>

          {/* 🔥 FORM (EMAIL TO YOU) */}
          <form
            action="https://formsubmit.co/clivaromedia@gmail.com"
            method="POST"
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-6"
          >
            {/* Hidden Config */}
            <input type="hidden" name="_subject" value="🚀 New Lead from Clivaro Media" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            {/* Email Input */}
            <Input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="h-14 bg-background/80 border-primary/30 text-base"
              required
            />

            {/* Button */}
            <Button
              type="submit"
              size="lg"
              className="h-14 px-8 text-base font-bold shadow-lg shadow-primary/20 w-full sm:w-auto"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>

          {/* Footer Text */}
          <p className="text-sm text-muted-foreground">
            Or reach us directly at{" "}
            <a
              href="mailto:clivaromedia@gmail.com"
              className="text-primary hover:underline"
            >
              clivaromedia@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}