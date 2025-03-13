import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Properties from "@/components/sections/properties";
import Calculator from "@/components/sections/calculator";
import Testimonials from "@/components/sections/testimonials";
import Agents from "@/components/sections/agents";
import MapSection from "@/components/sections/map";
import Contact from "@/components/sections/contact";
import Waitlist from "@/components/sections/waitlist";

export default function Home() {
  return (
    <div className="min-h-screen font-sans antialiased bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <Properties />
      <Calculator />
      <Testimonials />
      <Agents />
      <MapSection />
      <Contact />
      <Waitlist />
      <Footer />
    </div>
  );
}
