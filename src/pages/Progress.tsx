import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { 
  Activity,
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  Calendar,
  Target,
  Award,
  Clock,
  Zap,
  Heart,
  BarChart3
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Progress = () => {
  const weeklyData = [
    { day: 'Mon', calories: 320, duration: 45, heartRate: 142 },
    { day: 'Tue', calories: 280, duration: 30, heartRate: 138 },
    { day: 'Wed', calories: 0, duration: 0, heartRate: 0 },
    { day: 'Thu', calories: 450, duration: 60, heartRate: 155 },
    { day: 'Fri', calories: 380, duration: 50, heartRate: 148 },
    { day: 'Sat', calories: 520, duration: 75, heartRate: 162 },
    { day: 'Sun', calories: 290, duration: 35, heartRate: 134 },
  ];

  const monthlyProgress = [
    { month: 'Jan', weight: 180, bodyFat: 18.5, muscle: 45.2 },
    { month: 'Feb', weight: 178, bodyFat: 17.8, muscle: 45.8 },
    { month: 'Mar', weight: 176, bodyFat: 17.2, muscle: 46.3 },
    { month: 'Apr', weight: 175, bodyFat: 16.9, muscle: 46.7 },
  ];

  const workoutDistribution = [
    { name: 'Strength', value: 45, color: '#3b82f6' },
    { name: 'Cardio', value: 30, color: '#10b981' },
    { name: 'Yoga', value: 15, color: '#f59e0b' },
    { name: 'HIIT', value: 10, color: '#ef4444' },
  ];

  const achievements = [
    { title: "7-Day Streak", description: "Completed workouts for 7 consecutive days", icon: Award, date: "2 days ago", color: "text-yellow-500" },
    { title: "Calorie Goal", description: "Burned 2000+ calories this week", icon: Zap, date: "1 week ago", color: "text-orange-500" },
    { title: "Personal Best", description: "New record: 75 minutes workout", icon: Clock, date: "2 weeks ago", color: "text-blue-500" },
    { title: "Heart Health", description: "Improved resting heart rate", icon: Heart, date: "3 weeks ago", color: "text-red-500" },
  ];

  const goals = [
    { title: "Weekly Workout Goal", current: 5, target: 6, unit: "workouts" },
    { title: "Monthly Weight Loss", current: 3.2, target: 5, unit: "lbs" },
    { title: "Daily Active Minutes", current: 45, target: 60, unit: "minutes" },
    { title: "Weekly Calories Burned", current: 2240, target: 2500, unit: "calories" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="outline" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground">Progress Tracking</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Week</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 text-green-500" />
                <span>+2 from last week</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Workouts completed</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Calories Burned</CardTitle>
              <Zap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,240</div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3 text-green-500" />
                <span>+15% this week</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Total this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weight Progress</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">-5 lbs</div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <TrendingDown className="h-3 w-3 text-green-500" />
                <span>In 3 months</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">From starting weight</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Heart Rate</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68 BPM</div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <TrendingDown className="h-3 w-3 text-green-500" />
                <span>-4 BPM improved</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Resting heart rate</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="weekly" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="goals">Goals</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="weekly" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Calories Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Daily Calories Burned</CardTitle>
                  <CardDescription>Your calorie burn throughout the week</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="calories" fill="hsl(var(--primary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Duration Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Workout Duration</CardTitle>
                  <CardDescription>Time spent exercising each day</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={weeklyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="duration" stroke="hsl(var(--accent))" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Workout Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Workout Type Distribution</CardTitle>
                <CardDescription>Breakdown of your workout types this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center">
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={workoutDistribution}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {workoutDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  {workoutDistribution.map((item) => (
                    <div key={item.name} className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm">{item.name}: {item.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monthly" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Weight Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Weight Progress</CardTitle>
                  <CardDescription>Your weight journey over the months</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyProgress}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="weight" stroke="hsl(var(--primary))" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Body Composition */}
              <Card>
                <CardHeader>
                  <CardTitle>Body Composition</CardTitle>
                  <CardDescription>Body fat and muscle mass trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyProgress}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="bodyFat" stroke="#ef4444" strokeWidth={2} name="Body Fat %" />
                      <Line type="monotone" dataKey="muscle" stroke="#10b981" strokeWidth={2} name="Muscle Mass %" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="goals" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {goals.map((goal, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{goal.title}</CardTitle>
                    <CardDescription>
                      {goal.current} / {goal.target} {goal.unit}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <ProgressBar value={(goal.current / goal.target) * 100} />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{((goal.current / goal.target) * 100).toFixed(1)}% Complete</span>
                        <span>{goal.target - goal.current} {goal.unit} remaining</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-full bg-accent flex items-center justify-center`}>
                        <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{achievement.title}</CardTitle>
                        <CardDescription>{achievement.date}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Progress;