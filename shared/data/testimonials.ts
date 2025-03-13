export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah J.",
    location: "New York, NY",
    text: "Invest Utawala made finding my dream home effortless. Their exclusive listings gave me options I wouldn't have found elsewhere, and my agent was incredibly knowledgeable.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Michael R.",
    location: "Los Angeles, CA",
    text: "The property valuation tool was incredibly accurate, which helped us make an informed offer. We closed on our beautiful new home in record time thanks to the Invest Utawala team.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 4.5
  },
  {
    id: 3,
    name: "Jennifer L.",
    location: "Seattle, WA",
    text: "As first-time homebuyers, we were nervous about the process. Invest Utawala's agents walked us through every step and found us a property that exceeded our expectations while staying in budget.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: 4,
    name: "David W.",
    location: "Miami, FL",
    text: "The interactive map feature helped us explore neighborhoods we hadn't considered before. We found a gem in an up-and-coming area that's perfect for our family and investment goals.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    rating: 5
  }
];
