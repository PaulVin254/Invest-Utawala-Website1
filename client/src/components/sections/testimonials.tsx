import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/ui/testimonial-card";
import { testimonials } from "@shared/data/testimonials";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  
  const updateSlideWidth = () => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.testimonial-card');
      if (cards.length > 0) {
        const cardWidth = cards[0].clientWidth;
        setSlideWidth(cardWidth);
      }
    }
  };

  useEffect(() => {
    updateSlideWidth();
    window.addEventListener('resize', updateSlideWidth);
    return () => window.removeEventListener('resize', updateSlideWidth);
  }, []);

  const showNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const showPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold text-primary mb-4">What Our Clients Say</h2>
          <p className="text-[#4A4A4A]">Hear from homeowners who found their dream properties through Invest Utawala.</p>
        </div>
        
        <div className="relative">
          <div 
            ref={containerRef}
            className="flex overflow-hidden" 
            style={{ 
              transform: `translateX(${-currentSlide * (slideWidth + 32)}px)`,
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                testimonial={testimonial}
                className="testimonial-card flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
              />
            ))}
          </div>
          
          <Button 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-primary hover:text-[#C75146]" 
            onClick={showPrevSlide}
            variant="ghost"
            size="icon"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </Button>
          
          <Button 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md text-primary hover:text-[#C75146]" 
            onClick={showNextSlide}
            variant="ghost"
            size="icon"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
