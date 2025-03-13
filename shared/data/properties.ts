export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  location: string;
  type: string; // house, apartment, villa, land
  beds: number;
  baths: number;
  size: number;
  image: string;
  tag?: string;
  featured: boolean;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    description: "Stunning modern villa with panoramic views and premium finishings.",
    price: 2450000,
    location: "Beverly Hills, Los Angeles",
    type: "villa",
    beds: 5,
    baths: 4,
    size: 4500,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Featured",
    featured: true
  },
  {
    id: 2,
    title: "Oceanfront Estate",
    description: "Magnificent oceanfront property with private beach access and luxury amenities.",
    price: 4750000,
    location: "Malibu, California",
    type: "house",
    beds: 6,
    baths: 7,
    size: 6200,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Exclusive",
    featured: true
  },
  {
    id: 3,
    title: "Contemporary Mansion",
    description: "Architectural masterpiece featuring cutting-edge design and smart home technology.",
    price: 3950000,
    location: "Palm Beach, Florida",
    type: "house",
    beds: 7,
    baths: 8,
    size: 8300,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "New Listing",
    featured: true
  },
  {
    id: 4,
    title: "Modern Waterfront Home",
    description: "Elegant waterfront property with floor-to-ceiling windows and premium finishes.",
    price: 1850000,
    location: "Seattle, Washington",
    type: "house",
    beds: 4,
    baths: 3,
    size: 3800,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 5,
    title: "Luxury Country Estate",
    description: "Expansive country estate with guest house, stables, and mountain views.",
    price: 3250000,
    location: "Aspen, Colorado",
    type: "house",
    beds: 5,
    baths: 4,
    size: 5200,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 6,
    title: "Modern Architectural Home",
    description: "Award-winning architectural design with sustainable features and luxurious interior.",
    price: 2195000,
    location: "Austin, Texas",
    type: "house",
    beds: 4,
    baths: 5,
    size: 4100,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Reduced Price",
    featured: true
  },
  {
    id: 7,
    title: "Luxury Penthouse",
    description: "Stunning penthouse with panoramic city views and private rooftop terrace.",
    price: 3400000,
    location: "Downtown Manhattan, New York",
    type: "apartment",
    beds: 3,
    baths: 3.5,
    size: 3200,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 8,
    title: "Exclusive Beachfront Land",
    description: "Rare opportunity to own prime beachfront land for custom development.",
    price: 2800000,
    location: "Kauai, Hawaii",
    type: "land",
    beds: 0,
    baths: 0,
    size: 20000,
    image: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tag: "Exclusive",
    featured: true
  },
  {
    id: 9,
    title: "Historic Townhouse",
    description: "Beautifully renovated historic townhouse with modern amenities and original features.",
    price: 1950000,
    location: "Georgetown, Washington DC",
    type: "house",
    beds: 4,
    baths: 3.5,
    size: 3600,
    image: "https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    featured: false
  }
];
