import { 
  type User, 
  type InsertUser, 
  type Property,
  type InsertProperty,
  type Testimonial,
  type InsertTestimonial,
  type Agent,
  type InsertAgent,
  type Waitlist,
  type InsertWaitlist,
  type ContactMessage,
  type InsertContactMessage
} from "@shared/schema";

import { properties as initialProperties } from "@shared/data/properties";
import { testimonials as initialTestimonials } from "@shared/data/testimonials";
import { agents as initialAgents } from "@shared/data/agents";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Property methods
  getProperties(): Promise<Property[]>;
  getProperty(id: number): Promise<Property | undefined>;
  getPropertiesByType(type: string): Promise<Property[]>;
  
  // Testimonial methods
  getTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  
  // Agent methods
  getAgents(): Promise<Agent[]>;
  getAgent(id: number): Promise<Agent | undefined>;
  
  // Waitlist methods
  addToWaitlist(entry: InsertWaitlist): Promise<Waitlist>;
  getWaitlistEntries(): Promise<Waitlist[]>;
  
  // Contact form methods
  saveContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private properties: Map<number, Property>;
  private testimonials: Map<number, Testimonial>;
  private agents: Map<number, Agent>;
  private waitlist: Map<number, Waitlist>;
  private contactMessages: Map<number, ContactMessage>;
  
  private userIdCounter: number;
  private waitlistIdCounter: number;
  private contactMessageIdCounter: number;

  constructor() {
    this.users = new Map();
    this.properties = new Map();
    this.testimonials = new Map();
    this.agents = new Map();
    this.waitlist = new Map();
    this.contactMessages = new Map();
    
    this.userIdCounter = 1;
    this.waitlistIdCounter = 1;
    this.contactMessageIdCounter = 1;
    
    // Initialize with sample data
    this.initializeProperties();
    this.initializeTestimonials();
    this.initializeAgents();
  }

  private initializeProperties(): void {
    initialProperties.forEach(property => {
      this.properties.set(property.id, property);
    });
  }

  private initializeTestimonials(): void {
    initialTestimonials.forEach(testimonial => {
      this.testimonials.set(testimonial.id, testimonial);
    });
  }

  private initializeAgents(): void {
    initialAgents.forEach(agent => {
      this.agents.set(agent.id, agent);
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Property methods
  async getProperties(): Promise<Property[]> {
    return Array.from(this.properties.values());
  }
  
  async getProperty(id: number): Promise<Property | undefined> {
    return this.properties.get(id);
  }
  
  async getPropertiesByType(type: string): Promise<Property[]> {
    return Array.from(this.properties.values()).filter(
      (property) => property.type === type,
    );
  }
  
  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
  
  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    return this.testimonials.get(id);
  }
  
  // Agent methods
  async getAgents(): Promise<Agent[]> {
    return Array.from(this.agents.values());
  }
  
  async getAgent(id: number): Promise<Agent | undefined> {
    return this.agents.get(id);
  }
  
  // Waitlist methods
  async addToWaitlist(entry: InsertWaitlist): Promise<Waitlist> {
    const id = this.waitlistIdCounter++;
    const waitlistEntry: Waitlist = { ...entry, id };
    this.waitlist.set(id, waitlistEntry);
    return waitlistEntry;
  }
  
  async getWaitlistEntries(): Promise<Waitlist[]> {
    return Array.from(this.waitlist.values());
  }
  
  // Contact form methods
  async saveContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactMessageIdCounter++;
    const contactMessage: ContactMessage = { ...message, id };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }
  
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
}

export const storage = new MemStorage();
