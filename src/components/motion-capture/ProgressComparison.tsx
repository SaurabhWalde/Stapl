import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  Target, 
  Award,
  Activity,
  Download
} from 'lucide-react';

interface WorkoutSession {
  id: string;
  date: string;
  exercise: string;
  duration: number;
  formScore: number;
  reps: number;
  sets: number;
  improvements: string[];
  issues: string[];
}

interface FormMetrics {
  exercise: string;
  alignment: number;
  stability: number;
  rangeOfMotion: number;
  timing: number;
  overall: number;
}

const ProgressComparison = () => {
  const [selectedExercise, setSelectedExercise] = useState('squat');
  const [comparisonPeriod, setComparisonPeriod] = useState('30');

  const workoutHistory: WorkoutSession[] = [
    {
      id: '1',
      date: '2024-01-15',
      exercise: 'squat',
      duration: 1200,
      formScore: 85,
      reps: 12,
      sets: 3,
      improvements: ['Better knee tracking', 'Improved depth'],
      issues: ['Slight forward lean']
    },
    {
      id: '2',
      date: '2024-01-10',
      exercise: 'squat',
      duration: 1100,
      formScore: 78,
      reps: 10,
      sets: 3,
      improvements: ['Good weight distribution'],
      issues: ['Inconsistent depth', 'Knee valgus']
    },
    {
      id: '3',
      date: '2024-01-05',
      exercise: 'squat',
      duration: 1050,
      formScore: 72,
      reps: 8,
      sets: 3,
      improvements: [],
      issues: ['Poor ankle mobility', 'Forward lean', 'Limited depth']
    }
  ];

  const progressData = [
    { date: 'Jan 5', formScore: 72, reps: 24, weight: 135 },
    { date: 'Jan 10', formScore: 78, reps: 30, weight: 145 },
    { date: 'Jan 15', formScore: 85, reps: 36, weight: 155 },
    { date: 'Jan 20', formScore: 82, reps: 36, weight: 155 },
    { date: 'Jan 25', formScore: 88, reps: 40, weight: 165 },
    { date: 'Jan 30', formScore: 91, reps: 42, weight: 175 }
  ];

  const formMetricsData: FormMetrics[] = [
    {
      exercise: 'Current Session',
      alignment: 88,
      stability: 85,
      rangeOfMotion: 92,
      timing: 87,
      overall: 88
    },
    {
      exercise: 'Previous Session',
      alignment: 82,
      stability: 78,
      rangeOfMotion: 85,
      timing: 83,
      overall: 82
    }
  ];

  const comparisonData = [
    { metric: 'Form Score', current: 88, previous: 82, improvement: 6 },
    { metric: 'Consistency', current: 91, previous: 76, improvement: 15 },
    { metric: 'Range of Motion', current: 92, previous: 85, improvement: 7 },
    { metric: 'Stability', current: 85, previous: 78, improvement: 7 }
  ];

  const getImprovementIcon = (improvement: number) => {
    if (improvement > 0) {
      return <TrendingUp className="h-4 w-4 text-green-500" />;
    } else if (improvement < 0) {
      return <TrendingDown className="h-4 w-4 text-red-500" />;
    }
    return <Activity className="h-4 w-4 text-muted-foreground" />;
  };

  const getImprovementColor = (improvement: number) => {
    if (improvement > 0) return 'text-green-500';
    if (improvement < 0) return 'text-red-500';
    return 'text-muted-foreground';
  };

  const exportProgress = () => {
    // Mock export functionality
    const data = {
      exercise: selectedExercise,
      period: comparisonPeriod,
      sessions: workoutHistory.length,
      averageScore: Math.round(workoutHistory.reduce((sum, session) => sum + session.formScore, 0) / workoutHistory.length),
      improvement: '+13 points'
    };
    
    console.log('Exporting progress data:', data);
    // In a real app, this would generate and download a PDF/CSV
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Progress Analysis</h2>
          <p className="text-muted-foreground">Track your form improvements over time</p>
        </div>
        <Button onClick={exportProgress} variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <Select value={selectedExercise} onValueChange={setSelectedExercise}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Select exercise" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="squat">Squats</SelectItem>
            <SelectItem value="deadlift">Deadlifts</SelectItem>
            <SelectItem value="pushup">Push-ups</SelectItem>
            <SelectItem value="lunges">Lunges</SelectItem>
          </SelectContent>
        </Select>

        <Select value={comparisonPeriod} onValueChange={setComparisonPeriod}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Time period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7">Last 7 days</SelectItem>
            <SelectItem value="30">Last 30 days</SelectItem>
            <SelectItem value="90">Last 3 months</SelectItem>
            <SelectItem value="365">Last year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="progress" className="space-y-6">
        <TabsList>
          <TabsTrigger value="progress">Progress Chart</TabsTrigger>
          <TabsTrigger value="comparison">Session Comparison</TabsTrigger>
          <TabsTrigger value="metrics">Form Metrics</TabsTrigger>
          <TabsTrigger value="sessions">Session History</TabsTrigger>
        </TabsList>

        <TabsContent value="progress" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Form Score Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[60, 100]} />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="formScore" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Current Average</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">88</div>
                <p className="text-sm text-muted-foreground">Form Score</p>
                <div className="flex items-center gap-2 mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-green-500 text-sm">+13 from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Best Session</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">91</div>
                <p className="text-sm text-muted-foreground">Jan 30, 2024</p>
                <Badge variant="secondary" className="mt-2">Personal Best</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Consistency</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">85%</div>
                <p className="text-sm text-muted-foreground">Session Reliability</p>
                <Progress value={85} className="mt-2" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="comparison" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparisonData.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {item.metric}
                    {getImprovementIcon(item.improvement)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Current</span>
                      <span className="font-semibold">{item.current}%</span>
                    </div>
                    <Progress value={item.current} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Previous</span>
                      <span className="font-semibold">{item.previous}%</span>
                    </div>
                    <Progress value={item.previous} className="h-2 opacity-50" />
                    
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="text-sm font-medium">Improvement</span>
                      <span className={`font-bold ${getImprovementColor(item.improvement)}`}>
                        {item.improvement > 0 ? '+' : ''}{item.improvement}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="metrics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Form Analysis Radar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={formMetricsData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="exercise" />
                    <PolarRadiusAxis domain={[0, 100]} />
                    <Radar
                      name="Current"
                      dataKey="overall"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.1}
                      strokeWidth={2}
                    />
                    <Radar
                      name="Previous"
                      dataKey="previous"
                      stroke="hsl(var(--muted-foreground))"
                      fill="hsl(var(--muted-foreground))"
                      fillOpacity={0.05}
                      strokeWidth={2}
                      strokeDasharray="5 5"
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sessions" className="space-y-6">
          <div className="space-y-4">
            {workoutHistory.map((session) => (
              <Card key={session.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="font-semibold">{session.date}</span>
                        <Badge variant="outline">{session.exercise}</Badge>
                      </div>
                      
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <span>{Math.floor(session.duration / 60)} min</span>
                        <span>{session.reps} reps × {session.sets} sets</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-2xl font-bold text-foreground">{session.formScore}</div>
                      <p className="text-sm text-muted-foreground">Form Score</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-3">
                    {session.improvements.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">Improvements</h4>
                        <ul className="space-y-1">
                          {session.improvements.map((improvement, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0" />
                              {improvement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {session.issues.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-yellow-600 mb-2">Areas to Focus</h4>
                        <ul className="space-y-1">
                          {session.issues.map((issue, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
                              {issue}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProgressComparison;