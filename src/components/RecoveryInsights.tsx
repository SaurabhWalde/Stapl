
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Moon, 
  Heart, 
  Activity, 
  Brain,
  Thermometer,
  AlertTriangle,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

const RecoveryInsights = () => {
  const recoveryData = {
    overallScore: 82,
    sleepScore: 87,
    hrvScore: 78,
    restingHR: 58,
    bodyBattery: 85,
    stressLevel: 23,
    recommendation: "Good recovery - Ready for moderate to high intensity training"
  };

  const sleepData = {
    totalSleep: "7h 32min",
    deepSleep: "1h 45min",
    remSleep: "2h 15min",
    lightSleep: "3h 32min",
    sleepEfficiency: 91,
    bedtime: "10:45 PM",
    wakeTime: "6:17 AM"
  };

  const insights = [
    {
      icon: CheckCircle,
      title: "Good Sleep Quality",
      description: "Your sleep efficiency was excellent at 91%. Deep sleep phases were optimal for recovery.",
      type: "positive"
    },
    {
      icon: TrendingUp,
      title: "HRV Improving",
      description: "Your HRV has increased by 12% over the last week, indicating better recovery capacity.",
      type: "positive"
    },
    {
      icon: AlertTriangle,
      title: "Elevated Stress",
      description: "Stress levels are slightly elevated. Consider meditation or relaxation techniques.",
      type: "warning"
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBackground = (score: number) => {
    if (score >= 80) return "from-green-500 to-emerald-500";
    if (score >= 60) return "from-yellow-500 to-orange-500";
    return "from-red-500 to-pink-500";
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-blue-200 to-teal-200 text-white p-4 rounded-lg shadow-md">
      {/* Recovery Score */}
      <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-black">
            <Activity className="w-5 h-5 text-blue-600" />
            <span>Recovery Overview</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <div className={`w-24 h-24 mx-auto mb-4 bg-gradient-to-r ${getScoreBackground(recoveryData.overallScore)} rounded-full flex items-center justify-center`}>
              <span className="text-2xl font-bold text-white">{recoveryData.overallScore}%</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Recovery Score</h3>
            <p className="text-gray-600 max-w-md mx-auto">{recoveryData.recommendation}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-black">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <Heart className="w-6 h-6 mx-auto mb-2 text-red-500" />
              <p className="text-2xl font-bold">{recoveryData.restingHR}</p>
              <p className="text-sm text-gray-600">Resting HR</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <Activity className="w-6 h-6 mx-auto mb-2 text-blue-500" />
              <p className="text-2xl font-bold">{recoveryData.hrvScore}</p>
              <p className="text-sm text-gray-600">HRV Score</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <Brain className="w-6 h-6 mx-auto mb-2 text-purple-500" />
              <p className="text-2xl font-bold">{recoveryData.stressLevel}</p>
              <p className="text-sm text-gray-600">Stress Level</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <Thermometer className="w-6 h-6 mx-auto mb-2 text-orange-500" />
              <p className="text-2xl font-bold">{recoveryData.bodyBattery}%</p>
              <p className="text-sm text-gray-600">Body Battery</p>
            </div>
          </div>
        </CardContent>
      </Card>
      </div>

      {/* Sleep Analysis */}
      <div className="bg-gradient-to-br from-blue-200 to-teal-200 text-white p-4 rounded-lg shadow-md">
      <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-black">
            <Moon className="w-5 h-5 text-blue-600" />
            <span>Sleep Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-gray-900">{sleepData.totalSleep}</h4>
                <p className="text-gray-600">Total Sleep</p>
                <Badge variant="secondary" className="mt-2 bg-green-100 text-green-700">
                  Sleep Score: {recoveryData.sleepScore}%
                </Badge>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-black">Sleep Efficiency</span>
                  <span className="font-medium text-black">{sleepData.sleepEfficiency}%</span>
                </div>
                <Progress value={sleepData.sleepEfficiency} className="h-2 bg-black [&>div]:bg-green-400 [&>div]:rounded-full"/>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-black">Sleep Stages</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-black">Deep Sleep</span>
                  <span className="font-medium text-black">{sleepData.deepSleep}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-black">REM Sleep</span>
                  <span className="font-medium text-black">{sleepData.remSleep}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-black">Light Sleep</span>
                  <span className="font-medium text-black">{sleepData.lightSleep}</span>
                </div>
              </div>
              <div className="flex justify-between pt-3 border-t">
                <div>
                  <p className="text-sm text-gray-600">Bedtime</p>
                  <p className="font-medium text-black">{sleepData.bedtime}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Wake Time</p>
                  <p className="font-medium text-black">{sleepData.wakeTime}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      </div>

      {/* Recovery Insights */}
      <div className="bg-gradient-to-br from-blue-200 to-teal-200 text-white p-4 rounded-lg shadow-md">
      <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm text-black">
        <CardHeader>
          <CardTitle>Recovery Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight, index) => {
              const IconComponent = insight.icon;
              return (
                <div key={index} className={`p-4 rounded-lg border-l-4 ${
                  insight.type === 'positive' ? 'bg-green-50 border-green-400' :
                  insight.type === 'warning' ? 'bg-yellow-50 border-yellow-400' :
                  'bg-red-50 border-red-400'
                }`}>
                  <div className="flex items-start space-x-3">
                    <IconComponent className={`w-5 h-5 mt-0.5 ${
                      insight.type === 'positive' ? 'text-green-600' :
                      insight.type === 'warning' ? 'text-yellow-600' :
                      'text-red-600'
                    }`} />
                    <div>
                      <h4 className="font-semibold mb-1">{insight.title}</h4>
                      <p className="text-sm text-gray-600">{insight.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
      </div>
    </div>
  );
};

export default RecoveryInsights;
