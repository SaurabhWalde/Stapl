
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Activity } from 'lucide-react';

interface PostureData {
  overallScore: number;
  headAlignment: number;
  shoulderLevel: number;
  spinalCurvature: number;
  hipAlignment: number;
  kneeTracking: number;
}

interface PostureAnalysisProps {
  data: PostureData;
}

export function PostureAnalysis({ data }: PostureAnalysisProps) {
  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-blue-500" />
          <span>Posture Analysis</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Overall Posture Score</span>
            <span className={`text-2xl font-bold ${getScoreColor(data.overallScore)}`}>
              {data.overallScore}%
            </span>
          </div>
          
          <div className="space-y-3">
            {[
              { label: 'Head Alignment', value: data.headAlignment },
              { label: 'Shoulder Level', value: data.shoulderLevel },
              { label: 'Spinal Curvature', value: data.spinalCurvature },
              { label: 'Hip Alignment', value: data.hipAlignment },
              { label: 'Knee Tracking', value: data.kneeTracking }
            ].map((item) => (
              <div key={item.label} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{item.label}</span>
                  <span className={`font-medium ${getScoreColor(item.value)}`}>
                    {item.value}%
                  </span>
                </div>
                <Progress value={item.value} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
