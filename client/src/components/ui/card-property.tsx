import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Property } from "@shared/data/properties";
import { formatCurrency } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { toast } = useToast();

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: !isFavorite ? "Added to favorites" : "Removed from favorites",
      description: `${property.title} has been ${!isFavorite ? "added to" : "removed from"} your favorites.`,
    });
  };

  const handleViewDetails = () => {
    toast({
      title: "Property Details",
      description: `Viewing details for ${property.title}.`,
    });
  };

  return (
    <Card className="property-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
      <div className="relative overflow-hidden h-64">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        {property.tag && (
          <div className="absolute top-4 left-4">
            <span className="bg-[#C75146] text-white text-xs font-bold px-3 py-1 rounded-full">
              {property.tag}
            </span>
          </div>
        )}
        <div className="absolute bottom-4 right-4">
          <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-md">
            {formatCurrency(property.price)}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-display font-semibold mb-2 text-primary">{property.title}</h3>
        <p className="text-[#4A4A4A] text-sm mb-3">
          <i className="fas fa-map-marker-alt mr-2 text-[#C75146]"></i>
          {property.location}
        </p>
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <i className="fas fa-bed text-primary mr-2"></i>
            <span className="text-[#4A4A4A] text-sm">{property.beds} Beds</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-bath text-primary mr-2"></i>
            <span className="text-[#4A4A4A] text-sm">{property.baths} Baths</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-ruler-combined text-primary mr-2"></i>
            <span className="text-[#4A4A4A] text-sm">{property.size.toLocaleString()} sq ft</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <Button 
            variant="link" 
            className="text-primary font-medium text-sm hover:underline p-0"
            onClick={handleViewDetails}
          >
            View Details
          </Button>
          <Button 
            variant="ghost" 
            className="text-[#C75146] p-0 h-auto"
            onClick={toggleFavorite}
          >
            <i className={isFavorite ? "fas fa-heart" : "far fa-heart"}></i>
          </Button>
        </div>
      </div>
    </Card>
  );
}
