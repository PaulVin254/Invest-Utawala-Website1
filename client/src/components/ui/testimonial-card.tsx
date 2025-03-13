import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "@shared/data/testimonials";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export default function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fas fa-star"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half-star" className="fas fa-star-half-alt"></i>);
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-star-${i}`} className="far fa-star"></i>);
    }

    return stars;
  };

  return (
    <div className={cn("transition-all duration-300", className)}>
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name} 
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h4 className="font-display font-semibold text-primary">{testimonial.name}</h4>
              <p className="text-sm text-[#4A4A4A]">{testimonial.location}</p>
            </div>
            <div className="ml-auto text-[#C75146]">
              <i className="fas fa-quote-right text-2xl"></i>
            </div>
          </div>
          <p className="text-[#4A4A4A] mb-4">{testimonial.text}</p>
          <div className="text-[#C75146]">
            {renderStars(testimonial.rating)}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
