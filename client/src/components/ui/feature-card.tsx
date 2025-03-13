import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-white rounded-lg shadow-md">
      <CardContent className="p-6 text-center">
        <div className="text-primary text-4xl mb-4">
          <i className={icon}></i>
        </div>
        <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
        <p className="text-[#4A4A4A]">{description}</p>
      </CardContent>
    </Card>
  );
}
