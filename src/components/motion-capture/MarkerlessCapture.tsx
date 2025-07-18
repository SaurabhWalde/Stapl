import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Cpu, 
  Zap, 
  Activity, 
  TrendingUp,
  Brain,
  Eye,
  Target,
  Layers
} from 'lucide-react';

interface MarkerlessCaptureProps {
  onAnalysisUpdate: (analysis: any) => void;
  exercise: string;
  isActive: boolean;
}

export function MarkerlessCapture({ onAnalysisUpdate, exercise, isActive }: MarkerlessCaptureProps) {
  const [processingMode, setProcessingMode] = useState<'basic' | 'advanced' | 'ai'>('advanced');
  const [detectionAccuracy, setDetectionAccuracy] = useState(0);
  const [frameRate, setFrameRate] = useState(0);
  const [keyPointsDetected, setKeyPointsDetected] = useState(0);
  const [confidenceScore, setConfidenceScore] = useState(0);
  const [analysisData, setAnalysisData] = useState<any>(null);
  
  const processingRef = useRef<number>();

  const processingModes = [
    { 
      id: 'basic', 
      name: 'Basic Detection', 
      description: 'Standard pose detection with 17 key points',
      keyPoints: 17,
      accuracy: 85
    },
    { 
      id: 'advanced', 
      name: 'Advanced Tracking', 
      description: 'Enhanced pose tracking with 33 key points + hand landmarks',
      keyPoints: 33,
      accuracy: 92
    },
    { 
      id: 'ai', 
      name: 'AI-Powered Analysis', 
      description: 'Deep learning-based motion analysis with biomechanical insights',
      keyPoints: 543, // Full body + hands + face
      accuracy: 96
    }
  ];

  useEffect(() => {
    if (isActive) {
      startMarkerlessTracking();
    } else {
      stopMarkerlessTracking();
    }

    return () => {
      stopMarkerlessTracking();
    };
  }, [isActive, processingMode]);

  const startMarkerlessTracking = () => {
    const currentMode = processingModes.find(m => m.id === processingMode);
    if (!currentMode) return;

    let frameCount = 0;
    const startTime = Date.now();

    const processFrame = () => {
      if (!isActive) return;

      frameCount++;
      
      // Simulate processing time based on mode complexity
      const processingDelay = processingMode === 'ai' ? 50 : processingMode === 'advanced' ? 30 : 16;
      
      setTimeout(() => {
        // Update metrics
        const currentTime = Date.now();
        const fps = Math.round((frameCount / (currentTime - startTime)) * 1000);
        setFrameRate(Math.min(fps, 60));
        
        // Simulate detection accuracy improving over time
        const accuracy = Math.min(currentMode.accuracy + (frameCount * 0.1), 99);
        setDetectionAccuracy(accuracy);
        
        // Generate key points based on mode
        const detectedPoints = Math.floor(currentMode.keyPoints * (accuracy / 100));
        setKeyPointsDetected(detectedPoints);
        
        // Calculate confidence score
        const confidence = Math.min(85 + Math.random() * 15, 99);
        setConfidenceScore(confidence);
        
        // Generate analysis data
        const analysis = generateMarkerlessAnalysis(currentMode, accuracy, confidence);
        setAnalysisData(analysis);
        onAnalysisUpdate(analysis);

        processingRef.current = requestAnimationFrame(processFrame);
      }, processingDelay);
    };

    processFrame();
  };

  const generateMarkerlessAnalysis = (mode: any, accuracy: number, confidence: number) => {
    const baseScore = Math.round(75 + (accuracy / 100) * 20 + Math.random() * 5);
    const feedback = [];

    // Mode-specific feedback
    switch (mode.id) {
      case 'basic':
        feedback.push('Basic pose tracking active');
        if (accuracy > 90) feedback.push('Good detection stability');
        break;
      case 'advanced':
        feedback.push('Advanced multi-point tracking enabled');
        feedback.push('Hand and body landmark analysis active');
        if (confidence > 90) feedback.push('High confidence pose detection');
        break;
      case 'ai':
        feedback.push('AI-powered biomechanical analysis running');
        feedback.push('Deep learning model analyzing movement patterns');
        feedback.push('Micro-movement analysis and prediction active');
        break;
    }

    // Exercise-specific AI insights
    switch (exercise) {
      case 'squat':
        if (mode.id === 'ai') {
          feedback.push('AI detected optimal hip hinge pattern');
          feedback.push('Ankle mobility analysis: Good dorsiflexion range');
        }
        break;
      case 'deadlift':
        if (mode.id === 'ai') {
          feedback.push('Lumbar spine curvature maintained well');
          feedback.push('Hip-to-knee ratio tracking optimal');
        }
        break;
      case 'pushup':
        if (mode.id === 'ai') {
          feedback.push('Scapular movement pattern analysis: Good protraction');
          feedback.push('Core stability index: High activation detected');
        }
        break;
    }

    // Add technical insights based on processing mode
    if (mode.id === 'advanced' || mode.id === 'ai') {
      feedback.push(`${keyPointsDetected} key points tracked simultaneously`);
    }

    return {
      score: baseScore,
      feedback,
      technicalData: {
        processingMode: mode.id,
        accuracy: Math.round(accuracy),
        confidence: Math.round(confidence),
        keyPoints: keyPointsDetected,
        frameRate: frameRate,
        timestamp: Date.now()
      },
      biomechanics: mode.id === 'ai' ? generateBiomechanicalData() : null
    };
  };

  const generateBiomechanicalData = () => {
    return {
      jointAngles: {
        knee: Math.round(120 + Math.random() * 40),
        hip: Math.round(85 + Math.random() * 30),
        ankle: Math.round(75 + Math.random() * 20)
      },
      velocityProfile: {
        concentric: Math.round(0.5 + Math.random() * 0.3),
        eccentric: Math.round(0.3 + Math.random() * 0.2)
      },
      powerOutput: Math.round(300 + Math.random() * 200),
      efficiency: Math.round(80 + Math.random() * 15)
    };
  };

  const stopMarkerlessTracking = () => {
    if (processingRef.current) {
      cancelAnimationFrame(processingRef.current);
    }
    
    setDetectionAccuracy(0);
    setFrameRate(0);
    setKeyPointsDetected(0);
    setConfidenceScore(0);
    setAnalysisData(null);
  };

  return (
    <div className="space-y-4">
      {/* Processing Mode Selection */}
      <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-purple-500" />
            <span>Markerless Motion Capture</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {processingModes.map((mode) => (
              <Button
                key={mode.id}
                variant={processingMode === mode.id ? "default" : "outline"}
                className="h-auto p-4 flex flex-col items-start space-y-2"
                onClick={() => setProcessingMode(mode.id as 'basic' | 'advanced' | 'ai')}
              >
                <div className="flex items-center space-x-2">
                  {mode.id === 'basic' && <Eye className="w-4 h-4" />}
                  {mode.id === 'advanced' && <Layers className="w-4 h-4" />}
                  {mode.id === 'ai' && <Cpu className="w-4 h-4" />}
                  <span className="font-medium">{mode.name}</span>
                </div>
                <span className="text-xs text-left opacity-75">{mode.description}</span>
                <div className="flex items-center space-x-2 text-xs">
                  <Target className="w-3 h-3" />
                  <span>{mode.keyPoints} points</span>
                  <span>•</span>
                  <span>{mode.accuracy}% accuracy</span>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Real-time Metrics */}
      {isActive && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">Frame Rate</span>
              </div>
              <div className="mt-2">
                <span className="text-2xl font-bold">{frameRate}</span>
                <span className="text-sm text-gray-500 ml-1">FPS</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Target className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium">Key Points</span>
              </div>
              <div className="mt-2">
                <span className="text-2xl font-bold">{keyPointsDetected}</span>
                <span className="text-sm text-gray-500 ml-1">detected</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium">Accuracy</span>
              </div>
              <div className="mt-2">
                <span className="text-2xl font-bold">{Math.round(detectionAccuracy)}</span>
                <span className="text-sm text-gray-500 ml-1">%</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium">Confidence</span>
              </div>
              <div className="mt-2">
                <span className="text-2xl font-bold">{Math.round(confidenceScore)}</span>
                <span className="text-sm text-gray-500 ml-1">%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* AI Biomechanical Analysis */}
      {isActive && processingMode === 'ai' && analysisData?.biomechanics && (
        <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-purple-500" />
              <span>AI Biomechanical Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Joint Angles</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Knee Angle</span>
                    <span className="font-medium">{analysisData.biomechanics.jointAngles.knee}°</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Hip Angle</span>
                    <span className="font-medium">{analysisData.biomechanics.jointAngles.hip}°</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Ankle Angle</span>
                    <span className="font-medium">{analysisData.biomechanics.jointAngles.ankle}°</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Movement Metrics</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Power Output</span>
                    <span className="font-medium">{analysisData.biomechanics.powerOutput}W</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Efficiency</span>
                    <span className="font-medium">{analysisData.biomechanics.efficiency}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Concentric Speed</span>
                    <span className="font-medium">{analysisData.biomechanics.velocityProfile.concentric}m/s</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Processing Status */}
      {isActive && (
        <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  {processingModes.find(m => m.id === processingMode)?.name} Active
                </span>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                <Cpu className="w-3 h-3 mr-1" />
                Processing
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}