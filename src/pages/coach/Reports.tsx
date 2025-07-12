
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { CoachSidebar } from '@/components/coach/CoachSidebar';
import { CoachHeader } from '@/components/coach/CoachHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Download, Calendar, Filter, PieChart, BarChart, TrendingUp } from 'lucide-react';

const Reports = () => {
  const [reportType, setReportType] = useState("");
  const [dateRange, setDateRange] = useState("");

  const recentReports = [
    { id: 1, name: "Weekly Performance Summary", type: "Performance", date: "Dec 10, 2024", status: "Ready" },
    { id: 2, name: "Risk Assessment Report", type: "Risk Analysis", date: "Dec 9, 2024", status: "Ready" },
    { id: 3, name: "Client Progress Overview", type: "Progress", date: "Dec 8, 2024", status: "Processing" },
    { id: 4, name: "Monthly Team Analytics", type: "Analytics", date: "Dec 1, 2024", status: "Ready" },
  ];

  const reportTemplates = [
    { name: "Performance Analytics", description: "Comprehensive performance metrics and trends", icon: BarChart },
    { name: "Risk Assessment", description: "Health and injury risk analysis", icon: TrendingUp },
    { name: "Progress Summary", description: "Individual and team progress tracking", icon: PieChart },
    { name: "Custom Report", description: "Build your own custom report", icon: FileText },
  ];

  const quickStats = [
    { label: "Reports Generated", value: "47", color: "from-teal-500 to-green-500" },
    { label: "This Month", value: "12", color: "from-blue-500 to-cyan-500" },
    { label: "Pending", value: "3", color: "from-orange-500 to-red-500" },
    { label: "Templates", value: "8", color: "from-purple-500 to-pink-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-green-50">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <CoachSidebar />
          
          <div className="flex-1 flex flex-col">
            <CoachHeader />
            
            <main className="flex-1 p-6 space-y-6 overflow-auto">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
                  <p className="text-gray-600">Generate comprehensive reports and insights</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Button variant="outline">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Report
                  </Button>
                  <Button>
                    <FileText className="w-4 h-4 mr-2" />
                    New Report
                  </Button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {quickStats.map((stat, index) => (
                  <Card key={index} className={`bg-gradient-to-r ${stat.color} text-white`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white/80">{stat.label}</p>
                          <p className="text-3xl font-bold">{stat.value}</p>
                        </div>
                        <FileText className="w-8 h-8 text-white/70" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Report Builder */}
                <div className="lg:col-span-2 space-y-6">
                  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <FileText className="w-5 h-5 text-teal-500" />
                        <span>Quick Report Builder</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-2 block">Report Type</label>
                          <Select value={reportType} onValueChange={setReportType}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select report type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="performance">Performance Report</SelectItem>
                              <SelectItem value="risk">Risk Assessment</SelectItem>
                              <SelectItem value="progress">Progress Summary</SelectItem>
                              <SelectItem value="custom">Custom Report</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-2 block">Date Range</label>
                          <Select value={dateRange} onValueChange={setDateRange}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select date range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="week">Last Week</SelectItem>
                              <SelectItem value="month">Last Month</SelectItem>
                              <SelectItem value="quarter">Last Quarter</SelectItem>
                              <SelectItem value="custom">Custom Range</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="flex space-x-3">
                        <Button className="flex-1">
                          <FileText className="w-4 h-4 mr-2" />
                          Generate Report
                        </Button>
                        <Button variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Export
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Report Templates */}
                  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>Report Templates</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {reportTemplates.map((template, index) => (
                          <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                            <div className="flex items-start space-x-3">
                              <div className="p-2 bg-teal-100 rounded-lg">
                                <template.icon className="w-5 h-5 text-teal-600" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium">{template.name}</h4>
                                <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Reports */}
                <div>
                  <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Recent Reports</span>
                        <Badge variant="secondary">{recentReports.length}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentReports.map((report) => (
                          <div key={report.id} className="p-3 border rounded-lg">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-medium text-sm">{report.name}</h4>
                                <p className="text-xs text-gray-600 mt-1">{report.type}</p>
                                <p className="text-xs text-gray-500 mt-1">{report.date}</p>
                              </div>
                              <div className="flex flex-col items-end space-y-2">
                                <Badge variant={report.status === "Ready" ? "default" : "secondary"}>
                                  {report.status}
                                </Badge>
                                {report.status === "Ready" && (
                                  <Button size="sm" variant="ghost">
                                    <Download className="w-3 h-3" />
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Report Analytics */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Report Usage Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-teal-50 rounded-lg">
                      <h4 className="font-semibold text-teal-900">Most Used Template</h4>
                      <p className="text-teal-700 mt-2">Performance Analytics</p>
                      <p className="text-sm text-teal-600">Used 18 times this month</p>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900">Average Generation Time</h4>
                      <p className="text-blue-700 mt-2">2.3 minutes</p>
                      <p className="text-sm text-blue-600">15% faster than last month</p>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900">Success Rate</h4>
                      <p className="text-green-700 mt-2">98.2%</p>
                      <p className="text-sm text-green-600">All reports generated successfully</p>
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

export default Reports;
