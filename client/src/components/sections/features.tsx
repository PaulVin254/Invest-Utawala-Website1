import FeatureCard from "@/components/ui/feature-card";
import { features } from "@shared/data/features";

export default function Features() {
  return (
    <section id="features" className="py-16 bg-[#F8F5F0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold text-primary mb-4">Why Choose Invest Utawala</h2>
          <p className="text-[#4A4A4A]">We bring you exclusive access to luxury properties with unmatched expertise and service.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
