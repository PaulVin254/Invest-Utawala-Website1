import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  name: text("name"),
});

// Property table
export const properties = pgTable("properties", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(),
  location: text("location").notNull(),
  type: text("type").notNull(), // house, apartment, villa, land
  beds: integer("beds"),
  baths: integer("baths"),
  size: integer("size").notNull(),
  image: text("image").notNull(),
  tag: text("tag"),
  featured: boolean("featured").default(false),
});

// Testimonial table
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  location: text("location").notNull(),
  text: text("text").notNull(),
  avatar: text("avatar").notNull(),
  rating: integer("rating").notNull(),
});

// Agent table
export const agents = pgTable("agents", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  bio: text("bio").notNull(),
  image: text("image").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
});

// Waitlist table
export const waitlist = pgTable("waitlist", {
  id: serial("id").primaryKey(),
  firstName: text("firstName").notNull(),
  lastName: text("lastName").notNull(),
  email: text("email").notNull().unique(),
  location: text("location"),
  lookingFor: jsonb("lookingFor"),
  createdAt: text("createdAt").notNull(),
});

// Contact message table
export const contactMessages = pgTable("contactMessages", {
  id: serial("id").primaryKey(),
  firstName: text("firstName").notNull(),
  lastName: text("lastName").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  interest: text("interest"),
  message: text("message").notNull(),
  createdAt: text("createdAt").notNull(),
});

// Insert Schemas
export const insertUserSchema = createInsertSchema(users);
export const insertPropertySchema = createInsertSchema(properties);
export const insertTestimonialSchema = createInsertSchema(testimonials);
export const insertAgentSchema = createInsertSchema(agents);
export const insertWaitlistSchema = createInsertSchema(waitlist);
export const insertContactMessageSchema = createInsertSchema(contactMessages);

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertProperty = z.infer<typeof insertPropertySchema>;
export type Property = typeof properties.$inferSelect;

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;

export type InsertAgent = z.infer<typeof insertAgentSchema>;
export type Agent = typeof agents.$inferSelect;

export type InsertWaitlist = z.infer<typeof insertWaitlistSchema>;
export type Waitlist = typeof waitlist.$inferSelect;

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;
