import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface PropertySearchProps {
  className?: string;
}

export default function PropertySearch({ className }: PropertySearchProps) {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const { toast } = useToast();

  const handleSearch = () => {
    toast({
      title: "Search Initiated",
      description: `Searching for ${propertyType || "Any Type"} in ${location || "Any Location"} (${priceRange || "Any Price Range"})`,
    });
  };

  return (
    <Card className={cn("w-full max-w-4xl", className)}>
      <CardContent className="pt-6">
        <h2 className="text-2xl font-display font-semibold text-primary mb-4 text-center">Find Your Perfect Property</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="location">Location</Label>
            <select 
              id="location"
              className="rounded-md bg-neutral-light border-0 py-2.5 px-4 text-neutral-dark focus:ring-2 focus:ring-primary"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Any Location</option>
              <option value="nairobi">Nairobi</option>
              <option value="utawala">Utawala</option>
              <option value="kitengela">Kitengela</option>
              <option value="thika">Thika</option>
              <option value="kiambu">Kiambu</option>
            </select>
          </div>
          
          <div className="flex flex-col space-y-2">
            <Label htmlFor="property-type">Property Type</Label>
            <select 
              id="property-type"
              className="rounded-md bg-neutral-light border-0 py-2.5 px-4 text-neutral-dark focus:ring-2 focus:ring-primary"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="">Any Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="land">Land</option>
            </select>
          </div>
          
          <div className="flex flex-col space-y-2">
            <Label htmlFor="price-range">Price Range</Label>
            <select 
              id="price-range"
              className="rounded-md bg-neutral-light border-0 py-2.5 px-4 text-neutral-dark focus:ring-2 focus:ring-primary"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="">Any Range</option>
              <option value="100k-500k">$100k - $500k</option>
              <option value="500k-1M">$500k - $1M</option>
              <option value="1M-5M">$1M - $5M</option>
              <option value="5M+">$5M+</option>
            </select>
          </div>
        </div>
        
        <div className="mt-4 flex justify-center">
          <Button 
            variant="default"
            onClick={handleSearch}
          >
            Search Properties
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
