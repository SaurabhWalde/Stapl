
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Ruler } from 'lucide-react';

interface BodyMetricsData {
  height: string;
  armSpan: string;
  shoulderWidth: string;
  torsoLength: string;
  legLength: string;
  flexibility: number;
}

interface BodyMetricsProps {
  data: BodyMetricsData;
}

export function BodyMetrics({ data }: BodyMetricsProps) {
  return (
    <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Ruler className="w-5 h-5 text-purple-500" />
          <span>Body Metrics</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Height', value: data.height },
              { label: 'Arm Span', value: data.armSpan },
              { label: 'Shoulder Width', value: data.shoulderWidth },
              { label: 'Torso Length', value: data.torsoLength },
              { label: 'Leg Length', value: data.legLength }
            ].map((item) => (
              <div key={item.label} className="text-sm">
                <div className="text-gray-600">{item.label}</div>
                <div className="font-semibold">{item.value}</div>
              </div>
            ))}
          </div>
          
          <div className="pt-3 border-t">
            <div className="flex justify-between text-sm mb-2">
              <span>Flexibility Score</span>
              <span className="font-medium text-blue-600">{data.flexibility}%</span>
            </div>
            <Progress value={data.flexibility} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
