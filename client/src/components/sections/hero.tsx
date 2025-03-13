import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";
import PropertySearch from "@/components/ui/property-search";

export default function Hero() {
  const handleNavClick = (id: string) => {
    scrollToElement(id);
  };

  return (
    <section id="hero" className="relative pt-16 lg:pt-24 pb-20 lg:pb-32">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`, 
          filter: 'brightness(0.7)' 
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
            Find Your Dream Property with Confidence
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Access exclusive luxury listings before they hit the market. Your perfect home is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="accent" 
              size="lg" 
              onClick={() => handleNavClick('waitlist')}
            >
              Join Our Waitlist
            </Button>
            <Button 
              variant="white" 
              size="lg" 
              onClick={() => handleNavClick('properties')}
            >
              Explore Properties
            </Button>
          </div>
        </div>
        
        <PropertySearch className="mt-16" />
      </div>
    </section>
  );
}
