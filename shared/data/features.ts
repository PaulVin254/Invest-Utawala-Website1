export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: 1,
    icon: "fas fa-gem",
    title: "Exclusive Listings",
    description: "Access properties before they hit the public market, giving you a competitive edge."
  },
  {
    id: 2,
    icon: "fas fa-calculator",
    title: "Price Estimator",
    description: "Our advanced algorithm provides accurate property valuations to inform your decisions."
  },
  {
    id: 3,
    icon: "fas fa-user-tie",
    title: "Expert Agents",
    description: "Work with top-rated real estate professionals who understand luxury markets."
  },
  {
    id: 4,
    icon: "fas fa-map-marked-alt",
    title: "Interactive Maps",
    description: "Explore neighborhoods and property locations with our integrated mapping tools."
  },
  {
    id: 5,
    icon: "fas fa-shield-alt",
    title: "Secure Transactions",
    description: "Enjoy peace of mind with our secure platform for all your real estate transactions."
  },
  {
    id: 6,
    icon: "fas fa-mobile-alt",
    title: "Mobile Access",
    description: "Browse properties, schedule viewings, and receive alerts from any device."
  }
];
