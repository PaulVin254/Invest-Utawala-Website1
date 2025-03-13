import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { properties } from "@shared/data/properties";
import { useToast } from "@/hooks/use-toast";

declare global {
  interface Window {
    L: any;
  }
}

export default function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [selectedType, setSelectedType] = useState("all");
  const [mapLoaded, setMapLoaded] = useState(false);
  const { toast } = useToast();

  // Initialize the map when the component mounts
  useEffect(() => {
    // Load Leaflet asynchronously since it needs window
    const initializeMap = async () => {
      try {
        // Wait for leaflet script to be loaded
        if (!window.L) {
          const leafletScript = document.createElement('script');
          leafletScript.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js';
          leafletScript.integrity = 'sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==';
          leafletScript.crossOrigin = '';
          document.body.appendChild(leafletScript);

          await new Promise<void>((resolve) => {
            leafletScript.onload = () => resolve();
          });
        }

        if (mapRef.current && !mapInstanceRef.current) {
          // Setup the map
          const map = window.L.map(mapRef.current).setView([-1.2921, 36.8219], 12); // Nairobi coordinates
          
          // Add tile layer (OpenStreetMap)
          window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);

          // Custom marker icons
          const propertyIcons = {
            house: window.L.divIcon({
              html: '<div class="w-4 h-4 rounded-full bg-primary"></div>',
              className: 'custom-icon',
            }),
            apartment: window.L.divIcon({
              html: '<div class="w-4 h-4 rounded-full bg-[#C75146]"></div>',
              className: 'custom-icon',
            }),
            land: window.L.divIcon({
              html: '<div class="w-4 h-4 rounded-full bg-[#E6DDD1]"></div>',
              className: 'custom-icon',
            }),
            villa: window.L.divIcon({
              html: '<div class="w-4 h-4 rounded-full bg-[#4A4A4A]"></div>',
              className: 'custom-icon',
            })
          };

          // Add markers for all properties
          properties.forEach(property => {
            // Generate random coordinates near Nairobi for demo
            const lat = -1.2921 + (Math.random() - 0.5) * 0.1;
            const lng = 36.8219 + (Math.random() - 0.5) * 0.1;
            
            const icon = propertyIcons[property.type as keyof typeof propertyIcons];
            
            const marker = window.L.marker([lat, lng], { icon }).addTo(map);
            marker.bindPopup(`
              <div class="text-center">
                <strong class="text-primary">${property.title}</strong><br>
                ${property.location}<br>
                <span class="text-[#C75146] font-bold">$${property.price.toLocaleString()}</span>
              </div>
            `);
            
            // Store property type in marker for filtering
            (marker as any).propertyType = property.type;
          });

          mapInstanceRef.current = map;
          setMapLoaded(true);
        }
      } catch (error) {
        console.error("Error initializing map:", error);
        toast({
          title: "Map Error",
          description: "Failed to load the map. Please try again later.",
          variant: "destructive",
        });
      }
    };

    initializeMap();

    return () => {
      // Clean up map when component unmounts
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [toast]);

  // Filter markers based on selected type
  useEffect(() => {
    if (mapInstanceRef.current && mapLoaded) {
      const map = mapInstanceRef.current;
      
      // Get all markers
      map.eachLayer((layer: any) => {
        if (layer.propertyType) {
          if (selectedType === 'all' || layer.propertyType === selectedType) {
            layer.addTo(map);
          } else {
            map.removeLayer(layer);
          }
        }
      });
    }
  }, [selectedType, mapLoaded]);

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };

  return (
    <section id="map" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold text-primary mb-4">Explore Properties by Location</h2>
          <p className="text-[#4A4A4A]">Our interactive map helps you discover available properties in your desired locations.</p>
        </div>
        
        <Card className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="relative h-96 bg-[#F8F5F0]">
            {/* Map Controls */}
            <div className="absolute top-4 right-4 z-10 bg-white rounded-md shadow-md p-3">
              <select
                className="bg-[#F8F5F0] rounded border-0 py-1 px-2 text-sm text-[#4A4A4A] focus:ring-1 focus:ring-primary"
                value={selectedType}
                onChange={handleTypeChange}
              >
                <option value="all">All Properties</option>
                <option value="house">Luxury Homes</option>
                <option value="apartment">Apartments</option>
                <option value="villa">Villas</option>
                <option value="land">Land</option>
              </select>
            </div>
            
            {/* Map Container */}
            <div 
              ref={mapRef} 
              className="w-full h-full" 
              style={{ zIndex: 1 }}
            >
              {!mapLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-[#4A4A4A] text-center font-medium">Interactive Map Loading...</p>
                </div>
              )}
            </div>
          </div>
          
          <CardContent className="p-6 border-t border-neutral-200">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-primary inline-block mr-2"></span>
                <span className="text-sm text-[#4A4A4A]">Luxury Homes</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-[#C75146] inline-block mr-2"></span>
                <span className="text-sm text-[#4A4A4A]">Apartments</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-[#E6DDD1] inline-block mr-2"></span>
                <span className="text-sm text-[#4A4A4A]">Land</span>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-[#4A4A4A] inline-block mr-2"></span>
                <span className="text-sm text-[#4A4A4A]">Villas</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
