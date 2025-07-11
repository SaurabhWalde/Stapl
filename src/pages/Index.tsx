
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Heart, 
  Activity, 
  Moon, 
  Target, 
  TrendingUp,
  Zap,
  Thermometer,
  Droplets,
  Clock,
  Award,
  Play,
  ChevronRight,
  Users
} from 'lucide-react';
import HealthMetricsGrid from '@/components/HealthMetricsGrid';
import WorkoutSection from '@/components/WorkoutSection';
import RecoveryInsights from '@/components/RecoveryInsights';
import AICoachCard from '@/components/AICoachCard';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  SmartFit
                </h1>
                <p className="text-sm text-gray-600">Your AI Health Coach</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/coach">
                <Button variant="outline" size="sm" className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Coach Dashboard</span>
                </Button>
              </Link>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Connected
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Good morning, Alex!</h2>
          <p className="text-gray-600">Here's your health overview for today</p>
        </div>

        {/* AI Coach Recommendation */}
        <AICoachCard />

        {/* Main Content Tabs */}
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-96">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="workouts">Workouts</TabsTrigger>
            <TabsTrigger value="recovery">Recovery</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            {/* Health Metrics Grid */}
            <HealthMetricsGrid />

            {/* Today's Activity */}
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  <span>Today's Goals</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Steps</span>
                    <span>8,247 / 10,000</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Active Minutes</span>
                    <span>45 / 60</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Calories</span>
                    <span>1,847 / 2,200</span>
                  </div>
                  <Progress value={84} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Recent Workouts */}
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Workouts</CardTitle>
                <Button variant="ghost" size="sm">
                  View All <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { type: "HIIT Training", duration: "35 min", calories: 420, date: "Today" },
                    { type: "Morning Run", duration: "28 min", calories: 315, date: "Yesterday" },
                    { type: "Strength Training", duration: "45 min", calories: 280, date: "2 days ago" }
                  ].map((workout, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                          <Zap className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">{workout.type}</p>
                          <p className="text-sm text-gray-600">{workout.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{workout.duration}</p>
                        <p className="text-sm text-gray-600">{workout.calories} cal</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="workouts">
            <WorkoutSection />
          </TabsContent>

          <TabsContent value="recovery">
            <RecoveryInsights />
          </TabsContent>

          <TabsContent value="trends">
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span>Performance Trends</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">7-Day Averages</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Resting Heart Rate</span>
                        <span className="font-medium text-green-600">58 bpm ↓</span>
                      </div>
                      <div className="flex justify-between">
                        <span>HRV Score</span>
                        <span className="font-medium text-green-600">45ms ↑</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sleep Quality</span>
                        <span className="font-medium text-blue-600">87% →</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Recovery Score</span>
                        <span className="font-medium text-green-600">82% ↑</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Monthly Progress</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>VO₂ Max</span>
                        <span className="font-medium text-green-600">48.2 ml/kg/min ↑</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Training Load</span>
                        <span className="font-medium text-yellow-600">245 ↑</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Active Days</span>
                        <span className="font-medium text-green-600">24/30 ↑</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Weight Goal</span>
                        <span className="font-medium text-green-600">-2.3 kg ↓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
