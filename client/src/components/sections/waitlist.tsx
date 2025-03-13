import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { apiRequest } from "@/lib/queryClient";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const waitlistFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  location: z.string().optional(),
  lookingFor: z.object({
    residential: z.boolean().optional(),
    luxury: z.boolean().optional(),
    investment: z.boolean().optional(),
    land: z.boolean().optional()
  })
});

type WaitlistFormValues = z.infer<typeof waitlistFormSchema>;

export default function Waitlist() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      location: "",
      lookingFor: {
        residential: false,
        luxury: false,
        investment: false,
        land: false
      }
    }
  });

  const waitlistMutation = useMutation({
    mutationFn: (data: WaitlistFormValues) => {
      return apiRequest("POST", "/api/waitlist", data);
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll keep you updated on new properties and our launch.",
      });
      reset();
      queryClient.invalidateQueries({ queryKey: ['/api/waitlist'] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was a problem joining the waitlist. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = async (data: WaitlistFormValues) => {
    waitlistMutation.mutate(data);
  };

  return (
    <section id="waitlist" className="py-16 bg-[#E6DDD1]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-primary mb-4">Join Our Exclusive Waitlist</h2>
          <p className="text-[#4A4A4A] mb-8">Be the first to access our platform when we launch. Get early access to premium listings and special offers.</p>
          
          <Card className="bg-white rounded-xl shadow-xl">
            <CardContent className="p-8">
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
                  <Label htmlFor="location" className="block text-[#4A4A4A] text-sm font-medium mb-2">
                    Location of Interest
                  </Label>
                  <select
                    id="location"
                    className="w-full bg-[#F8F5F0] rounded-md border-0 py-2.5 px-4 text-[#4A4A4A] focus:ring-2 focus:ring-primary"
                    {...register("location")}
                  >
                    <option value="">Select a location</option>
                    <option value="nairobi">Nairobi</option>
                    <option value="utawala">Utawala</option>
                    <option value="kitengela">Kitengela</option>
                    <option value="thika">Thika</option>
                    <option value="mombasa">Mombasa</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <Label className="block text-[#4A4A4A] text-sm font-medium mb-2">
                    What are you looking for?
                  </Label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="residential"
                        {...register("lookingFor.residential")}
                      />
                      <Label htmlFor="residential" className="text-sm text-[#4A4A4A]">
                        Residential Home
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="luxury"
                        {...register("lookingFor.luxury")}
                      />
                      <Label htmlFor="luxury" className="text-sm text-[#4A4A4A]">
                        Luxury Apartment
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="investment"
                        {...register("lookingFor.investment")}
                      />
                      <Label htmlFor="investment" className="text-sm text-[#4A4A4A]">
                        Investment Property
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="land"
                        {...register("lookingFor.land")}
                      />
                      <Label htmlFor="land" className="text-sm text-[#4A4A4A]">
                        Land/Development
                      </Label>
                    </div>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  variant="accent" 
                  className="w-full"
                  disabled={waitlistMutation.isPending}
                >
                  {waitlistMutation.isPending ? "Processing..." : "Join Waitlist"}
                </Button>
                
                <p className="text-sm text-[#4A4A4A] mt-4">
                  By joining, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
