import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (email) {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    } else {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };

  const handleNavClick = (id: string) => {
    scrollToElement(id);
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Invest Utawala</h3>
            <p className="text-white/80 mb-6">Your trusted partner in finding exceptional properties that match your lifestyle and investment goals.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#C75146]"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white hover:text-[#C75146]"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white hover:text-[#C75146]"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-[#C75146]"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#properties" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('properties'); }}
                  className="text-white/80 hover:text-[#C75146]"
                >
                  Properties
                </a>
              </li>
              <li>
                <a 
                  href="#features" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('features'); }}
                  className="text-white/80 hover:text-[#C75146]"
                >
                  Features
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('testimonials'); }}
                  className="text-white/80 hover:text-[#C75146]"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#agents" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('agents'); }}
                  className="text-white/80 hover:text-[#C75146]"
                >
                  Our Agents
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                  className="text-white/80 hover:text-[#C75146]"
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="#waitlist" 
                  onClick={(e) => { e.preventDefault(); handleNavClick('waitlist'); }}
                  className="text-white/80 hover:text-[#C75146]"
                >
                  Join Waitlist
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Property Types</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-[#C75146]">Luxury Homes</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#C75146]">Apartments & Condos</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#C75146]">Waterfront Properties</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#C75146]">Country Estates</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#C75146]">Investment Properties</a></li>
              <li><a href="#" className="text-white/80 hover:text-[#C75146]">Land & Development</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-display font-semibold mb-4">Newsletter</h4>
            <p className="text-white/80 mb-4">Subscribe to our newsletter for market updates and exclusive property alerts.</p>
            <form onSubmit={handleSubscribe} className="flex">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white rounded-l-md py-2 px-4 text-neutral-dark flex-grow"
              />
              <Button 
                type="submit" 
                variant="accent" 
                className="rounded-l-none"
              >
                <i className="fas fa-paper-plane"></i>
              </Button>
            </form>
          </div>
        </div>
        
        <hr className="my-8 border-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm">© {new Date().getFullYear()} Invest Utawala. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/80 hover:text-[#C75146] text-sm">Privacy Policy</a>
            <a href="#" className="text-white/80 hover:text-[#C75146] text-sm">Terms of Service</a>
            <a href="#" className="text-white/80 hover:text-[#C75146] text-sm">Cookie Policy</a>
            <a href="#" className="text-white/80 hover:text-[#C75146] text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
