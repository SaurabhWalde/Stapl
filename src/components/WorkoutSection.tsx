
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  Clock, 
  Flame, 
  Target,
  TrendingUp,
  Dumbbell,
  MapPin,
  Timer
} from 'lucide-react';

const WorkoutSection = () => {
  const quickWorkouts = [
    {
      name: "HIIT Cardio",
      duration: "20 min",
      calories: "280-350",
      difficulty: "High",
      type: "Cardio",
      icon: "🔥"
    },
    {
      name: "Strength Training",
      duration: "45 min",
      calories: "200-280",
      difficulty: "Medium",
      type: "Strength",
      icon: "💪"
    },
    {
      name: "Yoga Flow",
      duration: "30 min",
      calories: "120-180",
      difficulty: "Low",
      type: "Flexibility",
      icon: "🧘"
    },
    {
      name: "Running",
      duration: "35 min",
      calories: "350-450",
      difficulty: "Medium",
      type: "Cardio",
      icon: "🏃"
    }
  ];

  const recentWorkouts = [
    {
      name: "Morning HIIT",
      date: "Today, 7:30 AM",
      duration: "25 min",
      calories: 320,
      avgHR: 145,
      maxHR: 178,
      zones: { zone1: 5, zone2: 8, zone3: 12 }
    },
    {
      name: "Evening Run",
      date: "Yesterday, 6:00 PM",
      duration: "42 min",
      calories: 415,
      avgHR: 138,
      maxHR: 165,
      zones: { zone1: 15, zone2: 20, zone3: 7 }
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'High': return 'bg-red-100 text-red-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      case 'Low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Quick Start Workouts */}
      <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Play className="w-5 h-5 text-blue-600" />
            <span>Quick Start</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickWorkouts.map((workout, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{workout.icon}</span>
                    <div>
                      <h4 className="font-semibold">{workout.name}</h4>
                      <p className="text-sm text-gray-600">{workout.type}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className={getDifficultyColor(workout.difficulty)}>
                    {workout.difficulty}
                  </Badge>
                </div>
                <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{workout.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Flame className="w-4 h-4" />
                    <span>{workout.calories} cal</span>
                  </div>
                </div>
                <Button className="w-full group-hover:scale-105 transition-transform duration-300">
                  Start Workout
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Workout History */}
      <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <span>Recent Workouts</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentWorkouts.map((workout, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-semibold">{workout.name}</h4>
                  <p className="text-sm text-gray-600">{workout.date}</p>
                </div>
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Timer className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="font-medium">{workout.duration}</p>
                  <p className="text-gray-600">Duration</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Flame className="w-4 h-4 text-orange-600" />
                  </div>
                  <p className="font-medium">{workout.calories}</p>
                  <p className="text-gray-600">Calories</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Heart className="w-4 h-4 text-red-600" />
                  </div>
                  <p className="font-medium">{workout.avgHR}</p>
                  <p className="text-gray-600">Avg HR</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-1">
                    <Target className="w-4 h-4 text-green-600" />
                  </div>
                  <p className="font-medium">{workout.maxHR}</p>
                  <p className="text-gray-600">Max HR</p>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-xs text-gray-600 mb-2">Heart Rate Zones</p>
                <div className="flex space-x-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="bg-green-400" 
                    style={{ width: `${(workout.zones.zone1 / 45) * 100}%` }}
                  ></div>
                  <div 
                    className="bg-yellow-400" 
                    style={{ width: `${(workout.zones.zone2 / 45) * 100}%` }}
                  ></div>
                  <div 
                    className="bg-red-400" 
                    style={{ width: `${(workout.zones.zone3 / 45) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkoutSection;
