
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { AlertTriangle, Activity, Zap, TrendingUp } from 'lucide-react';

export function TeamOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* High Risk Athletes */}
      <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:shadow-xl transition-shadow cursor-pointer">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-red-500" />
              <span>High Risk Athletes</span>
            </div>
            <span className="text-2xl font-bold text-red-600">15%</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Progress value={15} className="h-2 bg-red-100" />
            <p className="text-sm text-muted-foreground">4 of 24 athletes need attention</p>
            <div className="flex justify-between text-xs">
              <span>Fatigue Risk: 3</span>
              <span>Injury Risk: 1</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Average Recovery Score */}
      <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:shadow-xl transition-shadow cursor-pointer">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-green-500" />
              <span>Avg Recovery Score</span>
            </div>
            <span className="text-2xl font-bold text-green-600">82%</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Progress value={82} className="h-2 bg-green-100" />
            <p className="text-sm text-muted-foreground">Team recovery trending up</p>
            <div className="flex justify-between text-xs">
              <span>Week: +5%</span>
              <span className="text-green-600 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                Improving
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Average Weekly Strain */}
      <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:shadow-xl transition-shadow cursor-pointer">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>Avg Weekly Strain</span>
            </div>
            <span className="text-2xl font-bold text-yellow-600">14.2</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Progress value={71} className="h-2 bg-yellow-100" />
            <p className="text-sm text-muted-foreground">Optimal training load range</p>
            <div className="flex justify-between text-xs">
              <span>Range: 12-16</span>
              <span>Target: ✓ Met</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
