import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Activity,
  ArrowLeft,
  Search,
  Clock,
  Zap,
  Target,
  Users,
  Play,
  Bookmark,
  Filter,
  Star
} from "lucide-react";

const WorkoutLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const workoutCategories = [
    { id: "strength", name: "Strength Training", count: 45 },
    { id: "cardio", name: "Cardio", count: 32 },
    { id: "yoga", name: "Yoga & Flexibility", count: 28 },
    { id: "hiit", name: "HIIT", count: 23 },
    { id: "recovery", name: "Recovery", count: 16 },
  ];

  const featuredWorkouts = [
    {
      id: 1,
      title: "Morning Power Flow",
      description: "Start your day with energy and focus",
      duration: "20 min",
      difficulty: "Intermediate",
      category: "Yoga",
      instructor: "Sarah Chen",
      rating: 4.8,
      thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      isBookmarked: true
    },
    {
      id: 2,
      title: "HIIT Strength Blast",
      description: "High-intensity interval training for maximum results",
      duration: "30 min",
      difficulty: "Advanced",
      category: "HIIT",
      instructor: "Mike Rodriguez",
      rating: 4.9,
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      isBookmarked: false
    },
    {
      id: 3,
      title: "Core Stability Series",
      description: "Build a strong foundation with targeted core work",
      duration: "25 min",
      difficulty: "Beginner",
      category: "Strength",
      instructor: "Emma Johnson",
      rating: 4.7,
      thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop",
      isBookmarked: false
    },
    {
      id: 4,
      title: "Cardio Dance Party",
      description: "Fun, energetic workout that doesn't feel like exercise",
      duration: "35 min",
      difficulty: "Intermediate",
      category: "Cardio",
      instructor: "Alex Martinez",
      rating: 4.6,
      thumbnail: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
      isBookmarked: true
    },
    {
      id: 5,
      title: "Recovery & Restore",
      description: "Gentle movements to help your body recover",
      duration: "15 min",
      difficulty: "Beginner",
      category: "Recovery",
      instructor: "Lisa Wang",
      rating: 4.8,
      thumbnail: "https://images.unsplash.com/photo-1506629905607-f31e4a660e3e?w=400&h=300&fit=crop",
      isBookmarked: false
    },
    {
      id: 6,
      title: "Upper Body Blast",
      description: "Strengthen and tone your arms, shoulders, and back",
      duration: "40 min",
      difficulty: "Advanced",
      category: "Strength",
      instructor: "David Park",
      rating: 4.9,
      thumbnail: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop",
      isBookmarked: false
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Advanced": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default: return "bg-muted text-muted-foreground";
    }
  };

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
                <Activity className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold text-foreground">Workout Library</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search workouts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </Button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {workoutCategories.map((category) => (
              <Badge key={category.id} variant="outline" className="cursor-pointer hover:bg-accent">
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Workouts</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredWorkouts.map((workout) => (
                <Card key={workout.id} className="group hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={workout.thumbnail} 
                      alt={workout.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-3 right-3">
                      <Button 
                        size="icon" 
                        variant={workout.isBookmarked ? "default" : "outline"}
                        className="w-8 h-8 bg-white/90 backdrop-blur-sm"
                      >
                        <Bookmark className={`w-4 h-4 ${workout.isBookmarked ? 'fill-current' : ''}`} />
                      </Button>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <Button size="icon" className="w-12 h-12 rounded-full">
                        <Play className="w-5 h-5 ml-0.5" />
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{workout.title}</CardTitle>
                        <CardDescription>{workout.description}</CardDescription>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{workout.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-current text-yellow-500" />
                        <span>{workout.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <Badge className={getDifficultyColor(workout.difficulty)}>
                          {workout.difficulty}
                        </Badge>
                        <p className="text-sm text-muted-foreground">by {workout.instructor}</p>
                      </div>
                      <Button size="sm">Start Workout</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="featured">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredWorkouts.slice(0, 3).map((workout) => (
                <Card key={workout.id} className="group hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={workout.thumbnail} 
                      alt={workout.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary">Featured</Badge>
                    <div className="absolute bottom-3 left-3">
                      <Button size="icon" className="w-12 h-12 rounded-full">
                        <Play className="w-5 h-5 ml-0.5" />
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{workout.title}</CardTitle>
                    <CardDescription>{workout.description}</CardDescription>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{workout.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-current text-yellow-500" />
                        <span>{workout.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <Badge className={getDifficultyColor(workout.difficulty)}>
                        {workout.difficulty}
                      </Badge>
                      <Button size="sm">Start Workout</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bookmarked">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredWorkouts.filter(w => w.isBookmarked).map((workout) => (
                <Card key={workout.id} className="group hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={workout.thumbnail} 
                      alt={workout.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute bottom-3 left-3">
                      <Button size="icon" className="w-12 h-12 rounded-full">
                        <Play className="w-5 h-5 ml-0.5" />
                      </Button>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{workout.title}</CardTitle>
                    <CardDescription>{workout.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <Badge className={getDifficultyColor(workout.difficulty)}>
                        {workout.difficulty}
                      </Badge>
                      <Button size="sm">Start Workout</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trending">
            <div className="text-center py-12">
              <Zap className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trending Workouts</h3>
              <p className="text-muted-foreground mb-6">
                Discover what's popular in the fitness community right now
              </p>
              <Button>Coming Soon</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default WorkoutLibrary;