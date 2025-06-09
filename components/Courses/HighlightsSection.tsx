import React from "react";
import { GraduationCap, Clock, BookOpen } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";

interface HighlightCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <Card className="bg-zinc-900 border border-yellow-400/20 hover:border-yellow-400 transition-colors duration-300">
    <CardContent className="p-6">
      <Icon className="w-12 h-12 text-yellow-400 mb-4" />
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </CardContent>
  </Card>
);

const HighlightsSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
    <HighlightCard
      icon={GraduationCap}
      title="Expert Faculty"
      description="Learn from industry professionals and experienced designers"
    />
    <HighlightCard
      icon={Clock}
      title="Flexible Schedule"
      description="Balance your studies with other commitments"
    />
    <HighlightCard
      icon={BookOpen}
      title="Hands-on Projects"
      description="Build a professional portfolio through real-world projects"
    />
  </div>
);

export default HighlightsSection;
