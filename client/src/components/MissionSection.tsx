import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Award } from "lucide-react";
import missionImage from "@assets/stock_images/people_running_toget_5cb169d8.jpg";

export default function MissionSection() {
  const stats = [
    { icon: Users, label: "Participants", value: "1M+", description: "Annual runners worldwide" },
    { icon: Heart, label: "Raised", value: "$850M", description: "For cancer research" },
    { icon: Award, label: "Research", value: "200+", description: "Projects funded" }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Honoring Terry Fox's incredible journey by funding groundbreaking cancer research
            and inspiring hope for millions around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="rounded-lg overflow-hidden">
            <img 
              src={missionImage} 
              alt="Community running together"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-foreground">
              In 1980, Terry Fox began his Marathon of Hope, a cross-country run to raise money
              and awareness for cancer research. Though his journey was cut short, his legacy lives on.
            </p>
            <p className="text-foreground">
              Every t-shirt and piece of merchandise you purchase directly funds cancer research projects.
              100% of profits go toward finding a cure and supporting patients worldwide.
            </p>
            <p className="text-foreground font-semibold">
              Together, we're making Terry's dream a reality—one step at a time.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <Card key={idx} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <p className="text-3xl font-bold mb-1" data-testid={`stat-value-${idx}`}>{stat.value}</p>
                <p className="font-semibold mb-2">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
