import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Portfolio } from "@/components/Portfolio";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Services />
        <HowItWorks />
        {/* <Portfolio /> */}
        {/* <WhyChooseUs /> */}
        {/* <Testimonials /> */}
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}