import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Agent } from "@shared/data/agents";
import { useToast } from "@/hooks/use-toast";

interface AgentCardProps {
  agent: Agent;
}

export default function AgentCard({ agent }: AgentCardProps) {
  const { toast } = useToast();

  const handleViewProfile = () => {
    toast({
      title: "Agent Profile",
      description: `Viewing ${agent.name}'s profile.`,
    });
  };

  return (
    <Card className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative h-64">
        <img 
          src={agent.image} 
          alt={agent.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-display font-semibold text-primary mb-1">{agent.name}</h3>
        <p className="text-[#C75146] font-medium mb-3">{agent.title}</p>
        <p className="text-[#4A4A4A] text-sm mb-4">{agent.bio}</p>
        <div className="flex justify-between items-center">
          <Button 
            variant="link" 
            className="text-primary font-medium text-sm hover:underline p-0"
            onClick={handleViewProfile}
          >
            View Profile
          </Button>
          <div className="flex space-x-2">
            <a href="#" className="text-primary hover:text-[#C75146]"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-primary hover:text-[#C75146]"><i className="far fa-envelope"></i></a>
            <a href="#" className="text-primary hover:text-[#C75146]"><i className="fas fa-phone-alt"></i></a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
