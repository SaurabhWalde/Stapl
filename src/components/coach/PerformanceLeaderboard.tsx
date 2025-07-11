
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, Medal, Award, TrendingUp, TrendingDown } from 'lucide-react';

const metrics = ["Overall Score", "Speed", "Strength", "Endurance", "Recovery"];

const mockLeaderboard = [
  { name: "Alex Johnson", score: 95, trend: "up", position: 1 },
  { name: "Sarah Williams", score: 92, trend: "up", position: 2 },
  { name: "Mike Brown", score: 88, trend: "stable", position: 3 },
  { name: "Maria Garcia", score: 85, trend: "down", position: 4 },
  { name: "David Chen", score: 72, trend: "up", position: 5 },
];

export function PerformanceLeaderboard() {
  const [selectedMetric, setSelectedMetric] = useState("Overall Score");

  const getPositionIcon = (position: number) => {
    switch (position) {
      case 1: return <Trophy className="w-4 h-4 text-yellow-500" />;
      case 2: return <Medal className="w-4 h-4 text-gray-400" />;
      case 3: return <Award className="w-4 h-4 text-orange-600" />;
      default: return <span className="w-4 h-4 flex items-center justify-center text-xs font-medium">{position}</span>;
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="w-3 h-3 text-green-500" />;
      case "down": return <TrendingDown className="w-3 h-3 text-red-500" />;
      default: return <div className="w-3 h-3 rounded-full bg-gray-300" />;
    }
  };

  return (
    <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span>Performance Leaderboard</span>
          </CardTitle>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {metrics.map((metric) => (
            <Button
              key={metric}
              variant={selectedMetric === metric ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedMetric(metric)}
            >
              {metric}
            </Button>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {mockLeaderboard.map((athlete, index) => (
          <div key={athlete.name} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/30 transition-colors">
            <div className="flex items-center justify-center w-8">
              {getPositionIcon(athlete.position)}
            </div>
            
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{athlete.name}</span>
                <div className="flex items-center space-x-2">
                  {getTrendIcon(athlete.trend)}
                  <Badge variant="secondary">{athlete.score}</Badge>
                </div>
              </div>
              <Progress value={athlete.score} className="h-1" />
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t">
          <Button variant="outline" size="sm" className="w-full">
            View Full Rankings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
