import AgentCard from "@/components/ui/agent-card";
import { agents } from "@shared/data/agents";

export default function Agents() {
  return (
    <section id="agents" className="py-16 bg-[#F8F5F0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-display font-bold text-primary mb-4">Meet Our Expert Agents</h2>
          <p className="text-[#4A4A4A]">Our team of experienced professionals is ready to help you find your perfect property.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <AgentCard key={index} agent={agent} />
          ))}
        </div>
      </div>
    </section>
  );
}
