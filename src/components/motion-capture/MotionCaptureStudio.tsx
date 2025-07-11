
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Camera, 
  CameraOff, 
  Play, 
  Pause, 
  Square, 
  RotateCcw,
  Zap,
  CheckCircle,
  AlertTriangle,
  Users,
  Video
} from 'lucide-react';
import { PoseDetector } from './PoseDetector';
import { FormAnalyzer } from './FormAnalyzer';
import { VirtualCoachOverlay } from './VirtualCoachOverlay';

export function MotionCaptureStudio() {
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState('squat');
  const [selectedCoach, setSelectedCoach] = useState('alex');
  const [formScore, setFormScore] = useState(0);
  const [feedback, setFeedback] = useState<string[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const exercises = [
    { id: 'squat', name: 'Squats', difficulty: 'Beginner' },
    { id: 'pushup', name: 'Push-ups', difficulty: 'Beginner' },
    { id: 'deadlift', name: 'Deadlifts', difficulty: 'Intermediate' },
    { id: 'lunges', name: 'Lunges', difficulty: 'Beginner' },
    { id: 'plank', name: 'Plank Hold', difficulty: 'Beginner' }
  ];

  const coaches = [
    { id: 'alex', name: 'Coach Alex', specialty: 'Strength Training', avatar: '👨‍💼' },
    { id: 'sarah', name: 'Coach Sarah', specialty: 'Yoga & Flexibility', avatar: '👩‍💼' },
    { id: 'mike', name: 'Coach Mike', specialty: 'Cardio & HIIT', avatar: '👨‍🏫' },
    { id: 'emma', name: 'Coach Emma', specialty: 'Functional Movement', avatar: '👩‍🏫' }
  ];

  const handleStartSession = () => {
    setIsRecording(true);
    setIsAnalyzing(true);
    setFormScore(0);
    setFeedback([]);
  };

  const handleStopSession = () => {
    setIsRecording(false);
    setIsAnalyzing(false);
  };

  const handlePoseDetected = (landmarks: any, analysis: any) => {
    if (analysis) {
      setFormScore(analysis.score || 0);
      setFeedback(analysis.feedback || []);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Motion Capture Studio</h1>
            <p className="text-gray-600">AI-powered form correction and virtual coaching</p>
          </div>
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            <Video className="w-4 h-4 mr-2" />
            Motion Tracking Active
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Video Feed */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Live Motion Capture</span>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={isRecording ? "destructive" : "default"}
                      size="sm"
                      onClick={isRecording ? handleStopSession : handleStartSession}
                    >
                      {isRecording ? (
                        <>
                          <Square className="w-4 h-4 mr-2" />
                          Stop
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Start
                        </>
                      )}
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative bg-gray-900 rounded-lg overflow-hidden aspect-video">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                  />
                  <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full"
                    style={{ pointerEvents: 'none' }}
                  />
                  
                  {/* Virtual Coach Overlay */}
                  {isRecording && (
                    <VirtualCoachOverlay 
                      coach={coaches.find(c => c.id === selectedCoach)} 
                      feedback={feedback}
                      formScore={formScore}
                    />
                  )}
                  
                  {/* Recording Indicator */}
                  {isRecording && (
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-medium">RECORDING</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Real-time Feedback */}
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm mt-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span>Real-time Form Analysis</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Form Score</span>
                      <span className="text-sm font-bold">{formScore}%</span>
                    </div>
                    <Progress value={formScore} className="h-3" />
                  </div>
                  
                  <div className="space-y-2">
                    {feedback.map((item, index) => (
                      <div key={index} className="flex items-start space-x-2 p-2 bg-yellow-50 rounded-lg">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                    {feedback.length === 0 && !isAnalyzing && (
                      <p className="text-gray-500 text-sm">Start a session to see real-time feedback</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Controls Panel */}
          <div className="space-y-6">
            {/* Exercise Selection */}
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Select Exercise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {exercises.map((exercise) => (
                    <Button
                      key={exercise.id}
                      variant={selectedExercise === exercise.id ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setSelectedExercise(exercise.id)}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span>{exercise.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {exercise.difficulty}
                        </Badge>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Virtual Coach Selection */}
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>Virtual Coach</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {coaches.map((coach) => (
                    <Button
                      key={coach.id}
                      variant={selectedCoach === coach.id ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCoach(coach.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{coach.avatar}</span>
                        <div className="text-left">
                          <div className="font-medium">{coach.name}</div>
                          <div className="text-xs text-gray-500">{coach.specialty}</div>
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Session Stats */}
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Session Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Duration</span>
                    <span className="font-medium">00:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Reps Completed</span>
                    <span className="font-medium">0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Average Form</span>
                    <span className="font-medium">{formScore}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Corrections Made</span>
                    <span className="font-medium">{feedback.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pose Detector Component */}
        {isAnalyzing && (
          <PoseDetector
            videoRef={videoRef}
            canvasRef={canvasRef}
            exercise={selectedExercise}
            onPoseDetected={handlePoseDetected}
          />
        )}

        {/* Form Analyzer Component */}
        {isAnalyzing && (
          <FormAnalyzer
            exercise={selectedExercise}
            onAnalysisUpdate={(analysis) => {
              setFormScore(analysis.score);
              setFeedback(analysis.feedback);
            }}
          />
        )}
      </div>
    </div>
  );
}
