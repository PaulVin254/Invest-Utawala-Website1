import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from "@/components/ui/button";
import { scrollToElement } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (id: string) => {
    scrollToElement(id);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-primary font-display font-bold text-2xl">Invest Utawala</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#properties" 
              onClick={(e) => { e.preventDefault(); handleNavClick('properties'); }}
              className="text-neutral-dark hover:text-primary font-accent text-sm font-medium transition-colors duration-200"
            >
              Properties
            </a>
            <a 
              href="#features" 
              onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
              className="text-neutral-dark hover:text-primary font-accent text-sm font-medium transition-colors duration-200"
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              onClick={(e) => { e.preventDefault(); handleNavClick('testimonials'); }}
              className="text-neutral-dark hover:text-primary font-accent text-sm font-medium transition-colors duration-200"
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
              className="text-neutral-dark hover:text-primary font-accent text-sm font-medium transition-colors duration-200"
            >
              Contact
            </a>
            <a 
              href="#waitlist" 
              onClick={(e) => { e.preventDefault(); handleNavClick('waitlist'); }}
            >
              <Button variant="accent">Join Waitlist</Button>
            </a>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              type="button" 
              onClick={toggleMobileMenu} 
              className="text-neutral-dark hover:text-primary"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden bg-white shadow-lg pb-4 px-4 transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}
      >
        <div className="flex flex-col space-y-3 pt-2">
          <a 
            href="#properties" 
            onClick={(e) => { e.preventDefault(); handleNavClick('properties'); }}
            className="text-neutral-dark hover:text-primary font-accent text-sm font-medium py-2 transition-colors duration-200"
          >
            Properties
          </a>
          <a 
            href="#features" 
            onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
            className="text-neutral-dark hover:text-primary font-accent text-sm font-medium py-2 transition-colors duration-200"
          >
            Features
          </a>
          <a 
            href="#testimonials" 
            onClick={(e) => { e.preventDefault(); handleNavClick('testimonials'); }}
            className="text-neutral-dark hover:text-primary font-accent text-sm font-medium py-2 transition-colors duration-200"
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            className="text-neutral-dark hover:text-primary font-accent text-sm font-medium py-2 transition-colors duration-200"
          >
            Contact
          </a>
          <a 
            href="#waitlist" 
            onClick={(e) => { e.preventDefault(); handleNavClick('waitlist'); }}
            className="inline-block text-center"
          >
            <Button variant="accent" className="w-full">Join Waitlist</Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
