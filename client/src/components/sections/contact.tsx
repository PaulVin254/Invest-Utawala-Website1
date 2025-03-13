import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().min(5, "Message is required")
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      interest: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      // In a real app, you would send the data to the server
      // await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-16 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="text-white">
            <h2 className="text-3xl font-display font-bold mb-6">Contact Our Team</h2>
            <p className="mb-8 text-white/80">Have questions about a property or need guidance? Our experts are here to help you every step of the way.</p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-[#C75146] text-xl mt-1 mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Main Office</h3>
                  <p className="text-white/80">123 Utawala Road, Suite 400<br/>Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#C75146] text-xl mt-1 mr-4">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Phone</h3>
                  <p className="text-white/80">(+254) 722-123-456</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#C75146] text-xl mt-1 mr-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Email</h3>
                  <p className="text-white/80">info@investutawala.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-[#C75146] text-xl mt-1 mr-4">
                  <i className="far fa-clock"></i>
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Hours</h3>
                  <p className="text-white/80">Monday - Friday: 9am - 6pm<br/>Saturday: 10am - 4pm<br/>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-display font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#C75146]"><i className="fab fa-facebook-f text-xl"></i></a>
                <a href="#" className="text-white hover:text-[#C75146]"><i className="fab fa-instagram text-xl"></i></a>
                <a href="#" className="text-white hover:text-[#C75146]"><i className="fab fa-twitter text-xl"></i></a>
                <a href="#" className="text-white hover:text-[#C75146]"><i className="fab fa-linkedin-in text-xl"></i></a>
                <a href="#" className="text-white hover:text-[#C75146]"><i className="fab fa-pinterest text-xl"></i></a>
              </div>
            </div>
          </div>
          
          <Card className="bg-white rounded-xl shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-semibold text-primary mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="firstName" className="block text-[#4A4A4A] text-sm font-medium mb-2">
                      First Name*
                    </Label>
                    <Input
                      id="firstName"
                      className={`w-full bg-[#F8F5F0] rounded-md border-0 py-2.5 px-4 text-[#4A4A4A] focus:ring-2 focus:ring-primary ${errors.firstName ? 'ring-2 ring-red-500' : ''}`}
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName" className="block text-[#4A4A4A] text-sm font-medium mb-2">
                      Last Name*
                    </Label>
                    <Input
                      id="lastName"
                      className={`w-full bg-[#F8F5F0] rounded-md border-0 py-2.5 px-4 text-[#4A4A4A] focus:ring-2 focus:ring-primary ${errors.lastName ? 'ring-2 ring-red-500' : ''}`}
                      {...register("lastName")}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="email" className="block text-[#4A4A4A] text-sm font-medium mb-2">
                    Email Address*
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className={`w-full bg-[#F8F5F0] rounded-md border-0 py-2.5 px-4 text-[#4A4A4A] focus:ring-2 focus:ring-primary ${errors.email ? 'ring-2 ring-red-500' : ''}`}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="phone" className="block text-[#4A4A4A] text-sm font-medium mb-2">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    className="w-full bg-[#F8F5F0] rounded-md border-0 py-2.5 px-4 text-[#4A4A4A] focus:ring-2 focus:ring-primary"
                    {...register("phone")}
                  />
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="interest" className="block text-[#4A4A4A] text-sm font-medium mb-2">
                    Interested In
                  </Label>
                  <select
                    id="interest"
                    className="w-full bg-[#F8F5F0] rounded-md border-0 py-2.5 px-4 text-[#4A4A4A] focus:ring-2 focus:ring-primary"
                    {...register("interest")}
                  >
                    <option value="">Select an option</option>
                    <option value="finding">Finding a Property</option>
                    <option value="selling">Selling a Property</option>
                    <option value="investment">Investment Opportunities</option>
                    <option value="joining">Joining as Agent</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="message" className="block text-[#4A4A4A] text-sm font-medium mb-2">
                    Message*
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    className={`w-full bg-[#F8F5F0] rounded-md border-0 py-2.5 px-4 text-[#4A4A4A] focus:ring-2 focus:ring-primary ${errors.message ? 'ring-2 ring-red-500' : ''}`}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                
                <Button type="submit" variant="accent" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
