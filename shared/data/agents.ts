export interface Agent {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
  email: string;
  phone: string;
}

export const agents: Agent[] = [
  {
    id: 1,
    name: "James Wilson",
    title: "Luxury Property Specialist",
    bio: "With over 15 years of experience in luxury real estate, James has an exceptional track record in high-end properties.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    email: "james.wilson@investutawala.com",
    phone: "+254-722-100-200"
  },
  {
    id: 2,
    name: "Rebecca Chen",
    title: "Investment Property Advisor",
    bio: "Rebecca specializes in finding properties with the best investment potential and return opportunities.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    email: "rebecca.chen@investutawala.com",
    phone: "+254-722-300-400"
  },
  {
    id: 3,
    name: "Michael Torres",
    title: "New Development Specialist",
    bio: "Michael has unparalleled access to new and pre-construction developments in the most sought-after locations.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    email: "michael.torres@investutawala.com",
    phone: "+254-722-500-600"
  }
];
