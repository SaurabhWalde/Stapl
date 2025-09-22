
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { CoachSidebar } from '@/components/coach/CoachSidebar';
import { CoachHeader } from '@/components/coach/CoachHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Clock, User, Activity, TrendingUp, Shield } from 'lucide-react';

const RiskAlerts = () => {
  const alerts = [
    {
      id: 1,
      type: "High Risk",
      client: "David Chen",
      issue: "Potential overtraining detected",
      severity: "high",
      time: "5 min ago",
      metrics: "HR elevated 15% above baseline"
    },
    {
      id: 2,
      type: "Medium Risk",
      client: "Sarah Williams",
      issue: "Form degradation in last 3 sessions",
      severity: "medium",
      time: "2 hours ago",
      metrics: "Technique score dropped 12%"
    },
    {
      id: 3,
      type: "Low Risk",
      client: "Mike Brown",
      issue: "Minor fatigue indicators",
      severity: "low",
      time: "1 day ago",
      metrics: "Recovery time increased 8%"
    }
  ];

  const riskMetrics = [
    { label: "Critical Alerts", value: 2, color: "from-red-500 to-red-600", icon: AlertTriangle },
    { label: "Medium Risk", value: 5, color: "from-orange-500 to-orange-600", icon: Clock },
    { label: "Under Monitoring", value: 12, color: "from-yellow-500 to-yellow-600", icon: Activity },
    { label: "Low Risk", value: 18, color: "from-green-500 to-green-600", icon: Shield },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-red-100 text-red-700 border-red-200";
      case "medium": return "bg-orange-100 text-orange-700 border-orange-200";
      case "low": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <CoachSidebar />
          
          <div className="flex-1 flex flex-col">
            <CoachHeader />
            
            <main className="flex-1 p-6 space-y-6 overflow-auto">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Risk Alert Dashboard</h1>
                  <p className="text-gray-600">Monitor athlete health and performance risks in real-time</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="destructive" className="px-3 py-1">
                    <AlertTriangle className="w-4 h-4 mr-1" />
                    2 Critical
                  </Badge>
                </div>
              </div>

              {/* Risk Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {riskMetrics.map((metric, index) => (
                  <Card key={index} className={`bg-gradient-to-r ${metric.color} text-white`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white/80">{metric.label}</p>
                          <p className="text-3xl font-bold">{metric.value}</p>
                        </div>
                        <metric.icon className="w-8 h-8 text-white/70" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Active Alerts */}
                <div className="lg:col-span-2">
                  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-black">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        <span>Active Risk Alerts</span>
                        <Badge variant="secondary">{alerts.length}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {alerts.map((alert) => (
                          <div key={alert.id} className={`p-4 rounded-lg border-2 ${getSeverityColor(alert.severity)}`}>
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <Badge variant="outline" className="text-xs text-black">
                                    {alert.type}
                                  </Badge>
                                  <span className="text-sm text-gray-500">{alert.time}</span>
                                </div>
                                <h3 className="font-semibold text-gray-900">{alert.client}</h3>
                                <p className="text-gray-700 mt-1">{alert.issue}</p>
                                <p className="text-sm text-gray-600 mt-2">{alert.metrics}</p>
                              </div>
                              <div className="flex space-x-2">
                                <Button size="sm" variant="outline" className="bg-white text-black">Review</Button>
                                <Button size="sm" variant="outline" className="bg-white text-black">Action</Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Risk Trends */}
                <div className="space-y-6">
                  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2 text-black">
                        <TrendingUp className="w-5 h-5 text-blue-500" />
                        <span>Risk Trends</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 text-black">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">This Week</span>
                          <Badge variant="destructive">+15%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Last 30 Days</span>
                          <Badge variant="secondary">-5%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Resolution Rate</span>
                          <Badge className="bg-green-100 text-green-700">92%</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-black">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <User className="w-5 h-5 text-purple-500" />
                        <span>High Risk Athletes</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">David Chen</span>
                          <Badge variant="destructive">Critical</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Lisa Park</span>
                          <Badge className="bg-orange-100 text-orange-700">High</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Tom Wilson</span>
                          <Badge className="bg-yellow-100 text-yellow-700">Medium</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default RiskAlerts;
