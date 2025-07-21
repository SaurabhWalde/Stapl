import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Timer, 
  Target, 
  TrendingUp, 
  Users,
  Star,
  Clock,
  Zap
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface WorkoutTemplate {
  id: string;
  name: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  exercises: Exercise[];
  rating: number;
  completions: number;
  description: string;
}

interface Exercise {
  name: string;
  reps?: number;
  sets?: number;
  duration?: string;
  restTime: string;
  targetMuscles: string[];
  formCues: string[];
}

const WorkoutTemplates = () => {
  const { toast } = useToast();
  const [selectedTemplate, setSelectedTemplate] = useState<WorkoutTemplate | null>(null);
  const [isWorkoutActive, setIsWorkoutActive] = useState(false);
  const [currentExercise, setCurrentExercise] = useState(0);
  const [exerciseTimer, setExerciseTimer] = useState(0);

  const templates: WorkoutTemplate[] = [
    {
      id: '1',
      name: 'Upper Body Strength',
      category: 'Strength',
      difficulty: 'Intermediate',
      duration: '45 min',
      rating: 4.8,
      completions: 1247,
      description: 'Build upper body strength with compound movements',
      exercises: [
        {
          name: 'Push-ups',
          reps: 12,
          sets: 3,
          restTime: '60s',
          targetMuscles: ['Chest', 'Triceps', 'Shoulders'],
          formCues: ['Keep core tight', 'Full range of motion', 'Control the descent']
        },
        {
          name: 'Pull-ups',
          reps: 8,
          sets: 3,
          restTime: '90s',
          targetMuscles: ['Lats', 'Biceps', 'Rhomboids'],
          formCues: ['Dead hang start', 'Pull chest to bar', 'Controlled negative']
        },
        {
          name: 'Overhead Press',
          reps: 10,
          sets: 3,
          restTime: '90s',
          targetMuscles: ['Shoulders', 'Triceps', 'Core'],
          formCues: ['Tight core', 'Press straight up', 'Lock out overhead']
        }
      ]
    },
    {
      id: '2',
      name: 'HIIT Cardio Blast',
      category: 'Cardio',
      difficulty: 'Advanced',
      duration: '20 min',
      rating: 4.6,
      completions: 892,
      description: 'High-intensity interval training for maximum calorie burn',
      exercises: [
        {
          name: 'Burpees',
          duration: '30s',
          restTime: '30s',
          targetMuscles: ['Full Body'],
          formCues: ['Jump fully extended', 'Chest to ground', 'Explosive movement']
        },
        {
          name: 'Mountain Climbers',
          duration: '30s',
          restTime: '30s',
          targetMuscles: ['Core', 'Shoulders', 'Legs'],
          formCues: ['High plank position', 'Drive knees to chest', 'Maintain rhythm']
        },
        {
          name: 'Jump Squats',
          duration: '30s',
          restTime: '30s',
          targetMuscles: ['Quads', 'Glutes', 'Calves'],
          formCues: ['Land softly', 'Full squat depth', 'Explosive jump']
        }
      ]
    },
    {
      id: '3',
      name: 'Core Stability',
      category: 'Core',
      difficulty: 'Beginner',
      duration: '25 min',
      rating: 4.7,
      completions: 2156,
      description: 'Build a strong foundation with core-focused exercises',
      exercises: [
        {
          name: 'Plank',
          duration: '45s',
          restTime: '15s',
          targetMuscles: ['Core', 'Shoulders'],
          formCues: ['Straight line', 'Engage glutes', 'Breathe normally']
        },
        {
          name: 'Russian Twists',
          reps: 20,
          sets: 3,
          restTime: '45s',
          targetMuscles: ['Obliques', 'Core'],
          formCues: ['Lean back slightly', 'Rotate from core', 'Control the movement']
        },
        {
          name: 'Dead Bug',
          reps: 10,
          sets: 3,
          restTime: '30s',
          targetMuscles: ['Deep Core', 'Hip Flexors'],
          formCues: ['Press lower back down', 'Slow controlled movement', 'Opposite arm/leg']
        }
      ]
    }
  ];

  const startWorkout = (template: WorkoutTemplate) => {
    setSelectedTemplate(template);
    setIsWorkoutActive(true);
    setCurrentExercise(0);
    setExerciseTimer(0);
    toast({
      title: "Workout Started!",
      description: `Starting ${template.name}`,
    });
  };

  const pauseWorkout = () => {
    setIsWorkoutActive(false);
    toast({
      title: "Workout Paused",
      description: "Take your time and resume when ready",
    });
  };

  const nextExercise = () => {
    if (selectedTemplate && currentExercise < selectedTemplate.exercises.length - 1) {
      setCurrentExercise(prev => prev + 1);
      setExerciseTimer(0);
    } else {
      // Workout complete
      setIsWorkoutActive(false);
      toast({
        title: "Workout Complete!",
        description: "Great job! Your form analysis has been saved.",
      });
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-red-500';
      default: return 'bg-muted';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Strength': return <Target className="h-4 w-4" />;
      case 'Cardio': return <Zap className="h-4 w-4" />;
      case 'Core': return <RotateCcw className="h-4 w-4" />;
      default: return <Timer className="h-4 w-4" />;
    }
  };

  if (isWorkoutActive && selectedTemplate) {
    const currentEx = selectedTemplate.exercises[currentExercise];
    const progress = ((currentExercise + 1) / selectedTemplate.exercises.length) * 100;

    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-4xl mx-auto">
          {/* Workout Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-foreground">{selectedTemplate.name}</h1>
              <Button variant="outline" onClick={pauseWorkout}>
                <Pause className="h-4 w-4 mr-2" />
                Pause
              </Button>
            </div>
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2">
              Exercise {currentExercise + 1} of {selectedTemplate.exercises.length}
            </p>
          </div>

          {/* Current Exercise */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-center text-3xl">{currentEx.name}</CardTitle>
              <div className="text-center">
                {currentEx.reps && currentEx.sets && (
                  <p className="text-xl text-muted-foreground">
                    {currentEx.reps} reps × {currentEx.sets} sets
                  </p>
                )}
                {currentEx.duration && (
                  <p className="text-xl text-muted-foreground">{currentEx.duration}</p>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Target Muscles */}
              <div>
                <h3 className="font-semibold mb-2">Target Muscles</h3>
                <div className="flex flex-wrap gap-2">
                  {currentEx.targetMuscles.map((muscle, index) => (
                    <Badge key={index} variant="secondary">{muscle}</Badge>
                  ))}
                </div>
              </div>

              {/* Form Cues */}
              <div>
                <h3 className="font-semibold mb-2">Form Cues</h3>
                <ul className="space-y-1">
                  {currentEx.formCues.map((cue, index) => (
                    <li key={index} className="text-muted-foreground flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      {cue}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timer Display */}
              <div className="text-center p-6 bg-muted rounded-lg">
                <div className="text-4xl font-mono font-bold text-foreground mb-2">
                  {Math.floor(exerciseTimer / 60)}:{(exerciseTimer % 60).toString().padStart(2, '0')}
                </div>
                <p className="text-muted-foreground">Rest: {currentEx.restTime}</p>
              </div>

              {/* Controls */}
              <div className="flex justify-center gap-4">
                <Button onClick={nextExercise} size="lg">
                  {currentExercise < selectedTemplate.exercises.length - 1 ? 'Next Exercise' : 'Finish Workout'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Workout Templates</h2>
          <p className="text-muted-foreground">AI-guided workouts with real-time form analysis</p>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Templates</TabsTrigger>
          <TabsTrigger value="strength">Strength</TabsTrigger>
          <TabsTrigger value="cardio">Cardio</TabsTrigger>
          <TabsTrigger value="core">Core</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <Card key={template.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      {getCategoryIcon(template.category)}
                      <Badge variant="outline">{template.category}</Badge>
                    </div>
                    <Badge className={`${getDifficultyColor(template.difficulty)} text-white`}>
                      {template.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{template.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {template.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      {template.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {template.completions.toLocaleString()}
                    </div>
                  </div>

                  {/* Exercise Preview */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Exercises ({template.exercises.length})</h4>
                    <div className="space-y-1">
                      {template.exercises.slice(0, 3).map((exercise, index) => (
                        <div key={index} className="text-xs text-muted-foreground flex justify-between">
                          <span>{exercise.name}</span>
                          <span>
                            {exercise.reps && exercise.sets && `${exercise.reps}×${exercise.sets}`}
                            {exercise.duration && exercise.duration}
                          </span>
                        </div>
                      ))}
                      {template.exercises.length > 3 && (
                        <div className="text-xs text-muted-foreground">
                          +{template.exercises.length - 3} more exercises
                        </div>
                      )}
                    </div>
                  </div>

                  <Button 
                    onClick={() => startWorkout(template)} 
                    className="w-full"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Start Workout
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Category-specific tabs would filter the templates */}
        <TabsContent value="strength">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.filter(t => t.category === 'Strength').map((template) => (
              <Card key={template.id} className="hover:shadow-lg transition-shadow">
                {/* Same card content as above */}
                <CardContent className="p-4">
                  <Button onClick={() => startWorkout(template)} className="w-full">
                    <Play className="h-4 w-4 mr-2" />
                    Start Workout
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WorkoutTemplates;