import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema, insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist API
  app.post("/api/waitlist", async (req, res) => {
    try {
      // Validate request body against the schema
      const validatedData = insertWaitlistSchema
        .omit({ id: true })
        .extend({
          lookingFor: z.object({
            residential: z.boolean().optional(),
            luxury: z.boolean().optional(),
            investment: z.boolean().optional(),
            land: z.boolean().optional()
          }).optional()
        })
        .parse({
          ...req.body,
          createdAt: new Date().toISOString()
        });

      // Add to waitlist
      const waitlistEntry = await storage.addToWaitlist(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Successfully joined waitlist", 
        data: waitlistEntry 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Waitlist error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to join waitlist" 
        });
      }
    }
  });

  // Contact form API
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body against the schema
      const validatedData = insertContactMessageSchema
        .omit({ id: true })
        .parse({
          ...req.body,
          createdAt: new Date().toISOString()
        });

      // Save contact message
      const contactMessage = await storage.saveContactMessage(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Message sent successfully", 
        data: contactMessage 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message" 
        });
      }
    }
  });

  // Properties API
  app.get("/api/properties", async (req, res) => {
    try {
      const properties = await storage.getProperties();
      res.status(200).json(properties);
    } catch (error) {
      console.error("Error fetching properties:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch properties" 
      });
    }
  });

  // Testimonials API
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.status(200).json(testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch testimonials" 
      });
    }
  });

  // Agents API
  app.get("/api/agents", async (req, res) => {
    try {
      const agents = await storage.getAgents();
      res.status(200).json(agents);
    } catch (error) {
      console.error("Error fetching agents:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch agents" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
