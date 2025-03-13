import { useState } from "react";
import { Button } from "@/components/ui/button";
import PropertyCard from "@/components/ui/card-property";
import { properties } from "@shared/data/properties";

type PropertyType = "all" | "house" | "apartment" | "villa" | "land";

export default function Properties() {
  const [activeFilter, setActiveFilter] = useState<PropertyType>("all");

  const filteredProperties = activeFilter === "all" 
    ? properties 
    : properties.filter(property => property.type === activeFilter);

  return (
    <section id="properties" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold text-primary mb-4">Featured Properties</h2>
          <p className="text-[#4A4A4A]">Explore our selection of premium properties, each offering unique luxury and value.</p>
        </div>
        
        <div className="flex flex-wrap mb-8 justify-center gap-4">
          <Button 
            variant={activeFilter === "all" ? "default" : "neutral"} 
            onClick={() => setActiveFilter("all")}
          >
            All Properties
          </Button>
          <Button 
            variant={activeFilter === "house" ? "default" : "neutral"}
            onClick={() => setActiveFilter("house")}
          >
            Houses
          </Button>
          <Button 
            variant={activeFilter === "apartment" ? "default" : "neutral"}
            onClick={() => setActiveFilter("apartment")}
          >
            Apartments
          </Button>
          <Button 
            variant={activeFilter === "villa" ? "default" : "neutral"}
            onClick={() => setActiveFilter("villa")}
          >
            Villas
          </Button>
          <Button 
            variant={activeFilter === "land" ? "default" : "neutral"}
            onClick={() => setActiveFilter("land")}
          >
            Land
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="link"
            className="inline-flex items-center text-primary font-accent font-medium hover:text-[#C75146] transition-colors"
          >
            View All Properties
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
