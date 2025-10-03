import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-black-900">OUR MISSION</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Our Mission Honoring Terry Fox's incredible journey by funding
            groundbreaking cancer research and inspiring hope for millions
            around the world. Community running together In 1980, Terry Fox
            began his Marathon of Hope, a cross-country run to raise money and
            awareness for cancer research. Though his journey was cut short, his
            legacy lives on. Every piece of merchandise you purchase directly
            funds cancer research projects. 100% of profits go toward finding a
            cure and supporting patients worldwide. Together, we're making
            Terry's dream a reality—one step at a time.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
