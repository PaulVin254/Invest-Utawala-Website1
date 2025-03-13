import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/lib/utils";

export default function Calculator() {
  const [propertyType, setPropertyType] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [squareFootage, setSquareFootage] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleCalculate = () => {
    // Simple validation to ensure at least some fields are filled
    if (!propertyType || !squareFootage) {
      return;
    }
    
    setShowResult(true);
  };

  // A simple calculation function that would normally be more complex
  const calculateEstimate = () => {
    // Base value
    const baseValue = 1000000;
    
    // Add modifiers based on inputs
    let modifier = 1.0;
    
    // Property type affects value
    if (propertyType === "Single Family Home") modifier *= 1.2;
    else if (propertyType === "Condominium") modifier *= 1.0;
    else if (propertyType === "Townhouse") modifier *= 1.1;
    else if (propertyType === "Multi-Family") modifier *= 1.5;
    else if (propertyType === "Vacant Land") modifier *= 0.7;
    
    // Square footage affects value
    const sqft = parseInt(squareFootage) || 2000;
    modifier *= (sqft / 2000);
    
    // Bedrooms affect value
    if (bedrooms === "3") modifier *= 1.0;
    else if (bedrooms === "4") modifier *= 1.1;
    else if (bedrooms === "5+") modifier *= 1.2;
    
    // Calculate final value
    const finalValue = baseValue * modifier;
    
    // Return estimated values
    return {
      low: finalValue * 0.9,
      median: finalValue,
      high: finalValue * 1.1
    };
  };

  const estimate = calculateEstimate();

  return (
    <section id="calculator" className="py-16 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Property Value Estimator</h2>
          <p className="text-white/80">Get an instant estimate of your property's value based on market data.</p>
        </div>
        
        <Card className="bg-white rounded-xl shadow-xl max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="property-type" className="block text-[#4A4A4A] text-sm font-medium mb-2">
                  Property Type
                </Label>
                <select 
                  id="property-type"
                  className="w-full bg-[#F8F5F0] rounded-md border-0 py-2.5 px-4 text-[#4A4A4A] focus:ring-2 focus:ring-primary"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  <option value="">Select Property Type</option>
                  <option value="Single Family Home">Single Family Home</option>
                  <option value="Condominium">Condominium</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Multi-Family">Multi-Family</option>
                  <option value="Vacant Land">Vacant Land</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="zip-code" className="block text-[#4A4A4A] text-sm font-medium mb-2">
                  Location (ZIP Code)
                </Label>
                <Input 
                  id="zip-code"
                  type="text" 
                  placeholder="e.g. 90210" 
                  className="w-full bg-[#F8F5F0] rounded-md border-0 py-2.5 px-4 text-[#4A4A4A] focus:ring-2 focus:ring-primary"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="square-footage" className="block text-[#4A4A4A] text-sm font-medium mb-2">
                  Square Footage
                </Label>
                <Input 
                  id="square-footage"
                  type="number" 
                  placeholder="e.g. 2000" 
                  className="w-full bg-[#F8F5F0] rounded-md border-0 py-2.5 px-4 text-[#4A4A4A] focus:ring-2 focus:ring-primary"
                  value={squareFootage}
                  onChange={(e) => setSquareFootage(e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="bedrooms" className="block text-[#4A4A4A] text-sm font-medium mb-2">
                  Bedrooms
                </Label>
                <select 
                  id="bedrooms"
                  className="w-full bg-[#F8F5F0] rounded-md border-0 py-2.5 px-4 text-[#4A4A4A] focus:ring-2 focus:ring-primary"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                >
                  <option value="">Select Bedrooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="bathrooms" className="block text-[#4A4A4A] text-sm font-medium mb-2">
                  Bathrooms
                </Label>
                <select 
                  id="bathrooms"
                  className="w-full bg-[#F8F5F0] rounded-md border-0 py-2.5 px-4 text-[#4A4A4A] focus:ring-2 focus:ring-primary"
                  value={bathrooms}
                  onChange={(e) => setBathrooms(e.target.value)}
                >
                  <option value="">Select Bathrooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5+">5+</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="year-built" className="block text-[#4A4A4A] text-sm font-medium mb-2">
                  Year Built
                </Label>
                <Input 
                  id="year-built"
                  type="number" 
                  placeholder="e.g. 1990" 
                  className="w-full bg-[#F8F5F0] rounded-md border-0 py-2.5 px-4 text-[#4A4A4A] focus:ring-2 focus:ring-primary"
                  value={yearBuilt}
                  onChange={(e) => setYearBuilt(e.target.value)}
                />
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button 
                variant="accent" 
                size="lg"
                onClick={handleCalculate}
              >
                Calculate Estimate
              </Button>
            </div>
            
            {showResult && (
              <div className="mt-8 p-6 bg-[#F8F5F0] rounded-lg">
                <h3 className="text-xl font-display font-semibold text-primary mb-4 text-center">Estimated Property Value</h3>
                <div className="text-center">
                  <span className="text-3xl font-bold text-[#C75146]">{formatCurrency(estimate.median)}</span>
                  <p className="text-sm text-[#4A4A4A] mt-2">Based on current market conditions and comparable properties</p>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-[#4A4A4A]">Low Estimate</p>
                    <p className="font-bold text-primary">{formatCurrency(estimate.low)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#4A4A4A]">Median Estimate</p>
                    <p className="font-bold text-[#C75146]">{formatCurrency(estimate.median)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#4A4A4A]">High Estimate</p>
                    <p className="font-bold text-primary">{formatCurrency(estimate.high)}</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
