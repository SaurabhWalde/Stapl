
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { CoachSidebar } from '@/components/coach/CoachSidebar';
import { CoachHeader } from '@/components/coach/CoachHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, Trophy, Target, Users, Calendar } from 'lucide-react';

const Performance = () => {
  const performanceMetrics = [
    { label: "Team Average", value: "85.2%", change: "+2.3%", color: "from-indigo-500 to-blue-500", icon: Users },
    { label: "Top Performer", value: "94.8%", change: "+1.2%", color: "from-purple-500 to-pink-500", icon: Trophy },
    { label: "Goals Met", value: "78%", change: "+5.1%", color: "from-green-500 to-emerald-500", icon: Target },
    { label: "Sessions This Week", value: "142", change: "+12", color: "from-orange-500 to-red-500", icon: Calendar },
  ];

  const topPerformers = [
    { name: "Alex Johnson", sport: "Basketball", score: 94.8, improvement: "+3.2%" },
    { name: "Maria Garcia", sport: "Soccer", score: 92.1, improvement: "+2.8%" },
    { name: "Sarah Williams", sport: "Tennis", score: 89.5, improvement: "+1.9%" },
    { name: "Mike Brown", sport: "Running", score: 87.3, improvement: "+4.1%" },
  ];

  const recentAchievements = [
    { athlete: "Alex Johnson", achievement: "Personal Best in Sprint Time", date: "Today" },
    { athlete: "Maria Garcia", achievement: "Consistency Milestone - 30 days", date: "Yesterday" },
    { athlete: "David Chen", achievement: "Form Improvement Award", date: "2 days ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <CoachSidebar />
          
          <div className="flex-1 flex flex-col">
            <CoachHeader />
            
            <main className="flex-1 p-6 space-y-6 overflow-auto">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Performance Analytics</h1>
                  <p className="text-gray-600">Track athlete progress and team performance metrics</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Export Report
                  </Button>
                  <Button>
                    <TrendingUp className="w-4 h-4 mr-2" />
                    View Trends
                  </Button>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {performanceMetrics.map((metric, index) => (
                  <Card key={index} className={`bg-gradient-to-r ${metric.color} text-white`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white/80">{metric.label}</p>
                          <p className="text-3xl font-bold">{metric.value}</p>
                          <p className="text-sm text-white/70 mt-1">{metric.change} from last week</p>
                        </div>
                        <metric.icon className="w-8 h-8 text-white/70" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Performance Chart Placeholder */}
                <div className="lg:col-span-2">
                  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-black">
                        <BarChart3 className="w-5 h-5 text-blue-500" />
                        <span>Performance Trends</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <BarChart3 className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                          <p className="text-gray-600">Performance analytics chart</p>
                          <p className="text-sm text-gray-500">Weekly progress visualization</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Top Performers */}
                <div className="space-y-6">
                  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-black">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Trophy className="w-5 h-5 text-yellow-500" />
                        <span>Top Performers</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {topPerformers.map((performer, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium">{performer.name}</p>
                              <p className="text-sm text-gray-600">{performer.sport}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-blue-600">{performer.score}%</p>
                              <p className="text-xs text-green-600">{performer.improvement}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-black">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Target className="w-5 h-5 text-green-500" />
                        <span>Recent Achievements</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {recentAchievements.map((achievement, index) => (
                          <div key={index} className="border-l-4 border-green-400 pl-4 py-2">
                            <p className="font-medium text-sm">{achievement.athlete}</p>
                            <p className="text-xs text-gray-600">{achievement.achievement}</p>
                            <p className="text-xs text-gray-500">{achievement.date}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Performance Goals */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-black">
                <CardHeader>
                  <CardTitle>Team Performance Goals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900">Weekly Target</h4>
                      <div className="mt-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>142/160 sessions</span>
                        </div>
                        <div className="w-full bg-blue-200 rounded-full h-2 mt-1">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '89%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900">Monthly Goal</h4>
                      <div className="mt-2">
                        <div className="flex justify-between text-sm">
                          <span>Team Average</span>
                          <span>85.2%/90%</span>
                        </div>
                        <div className="w-full bg-green-200 rounded-full h-2 mt-1">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-900">Quarterly Target</h4>
                      <div className="mt-2">
                        <div className="flex justify-between text-sm">
                          <span>Improvement</span>
                          <span>78%/85%</span>
                        </div>
                        <div className="w-full bg-purple-200 rounded-full h-2 mt-1">
                          <div className="bg-purple-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Performance;
