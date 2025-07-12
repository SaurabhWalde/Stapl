
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Camera, 
  Scan, 
  Activity, 
  CheckCircle, 
  AlertTriangle,
  Zap,
  Target
} from 'lucide-react';

interface RealtimeMotionCaptureProps {
  onScanComplete: (data: any) => void;
  isActive: boolean;
}

export function RealtimeMotionCapture({ onScanComplete, isActive }: RealtimeMotionCaptureProps) {
  const [scanProgress, setScanProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState('idle');
  const [detectedPoints, setDetectedPoints] = useState(0);
  const [calibrationComplete, setCalibrationComplete] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scanPhases = [
    { name: 'Initializing Camera', duration: 1000 },
    { name: 'Detecting Body Landmarks', duration: 2000 },
    { name: 'Calibrating Pose Points', duration: 1500 },
    { name: 'Mapping 3D Coordinates', duration: 2000 },
    { name: 'Analyzing Movement Patterns', duration: 1500 },
    { name: 'Generating Avatar Data', duration: 1000 }
  ];

  useEffect(() => {
    if (isActive) {
      startScanning();
    } else {
      resetScan();
    }
  }, [isActive]);

  const startScanning = async () => {
    setScanProgress(0);
    setCurrentPhase('initializing');
    
    // Simulate camera initialization
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.log('Camera access simulation');
    }

    // Progress through scan phases
    let totalProgress = 0;
    for (let i = 0; i < scanPhases.length; i++) {
      setCurrentPhase(scanPhases[i].name);
      
      const phaseProgress = 100 / scanPhases.length;
      const startProgress = totalProgress;
      
      // Animate progress for this phase
      const animatePhase = () => {
        const duration = scanPhases[i].duration;
        const startTime = Date.now();
        
        const updateProgress = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const currentProgress = startProgress + (phaseProgress * progress);
          
          setScanProgress(currentProgress);
          
          // Simulate point detection
          if (i === 1) {
            setDetectedPoints(Math.floor(progress * 33)); // 33 body landmarks
          }
          
          if (progress < 1) {
            requestAnimationFrame(updateProgress);
          } else {
            totalProgress += phaseProgress;
            if (i === scanPhases.length - 1) {
              completeScan();
            }
          }
        };
        
        updateProgress();
      };
      
      await new Promise(resolve => {
        animatePhase();
        setTimeout(resolve, scanPhases[i].duration);
      });
    }
  };

  const completeScan = () => {
    setCalibrationComplete(true);
    setScanProgress(100);
    setCurrentPhase('Complete');
    
    // Generate mock scan data
    const scanData = {
      landmarks: generateMockLandmarks(),
      confidence: 0.95,
      timestamp: Date.now(),
      quality: 'high'
    };
    
    setTimeout(() => {
      onScanComplete(scanData);
    }, 500);
  };

  const generateMockLandmarks = () => {
    // Generate 33 realistic body landmarks with confidence scores
    const landmarks = [];
    for (let i = 0; i < 33; i++) {
      landmarks.push({
        id: i,
        x: Math.random() * 640,
        y: Math.random() * 480,
        z: Math.random() * 100,
        confidence: 0.8 + Math.random() * 0.2
      });
    }
    return landmarks;
  };

  const resetScan = () => {
    setScanProgress(0);
    setCurrentPhase('idle');
    setDetectedPoints(0);
    setCalibrationComplete(false);
    
    // Stop camera stream
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }
  };

  return (
    <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-blue-500" />
            <span>Motion Capture Scanner</span>
          </span>
          <div className="flex items-center space-x-2">
            {isActive && (
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                <Zap className="w-3 h-3 mr-1 animate-pulse" />
                Scanning
              </Badge>
            )}
            {calibrationComplete && (
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                <CheckCircle className="w-3 h-3 mr-1" />
                Complete
              </Badge>
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Camera View */}
        <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
          />
          
          {/* Scanning Overlay */}
          {isActive && (
            <div className="absolute inset-0 bg-blue-500/10">
              <div className="absolute inset-4 border-2 border-blue-500 rounded-lg animate-pulse">
                <div className="absolute top-2 left-2">
                  <Target className="w-6 h-6 text-blue-500 animate-spin" />
                </div>
                <div className="absolute top-2 right-2">
                  <Scan className="w-6 h-6 text-blue-500" />
                </div>
                <div className="absolute bottom-2 left-2">
                  <Camera className="w-6 h-6 text-blue-500" />
                </div>
              </div>
              
              {/* Scanning Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
            </div>
          )}
          
          {!isActive && (
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center">
                <Camera className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-lg">Camera Ready</p>
                <p className="text-sm text-gray-400">Position yourself in frame for scanning</p>
              </div>
            </div>
          )}
        </div>

        {/* Progress Information */}
        {isActive && (
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{currentPhase}</span>
              <span className="text-sm text-gray-600">{Math.round(scanProgress)}%</span>
            </div>
            <Progress value={scanProgress} className="h-2" />
            
            <div className="flex justify-between text-xs text-gray-600">
              <span>Detected Points: {detectedPoints}/33</span>
              <span>Quality: {scanProgress > 80 ? 'High' : scanProgress > 50 ? 'Medium' : 'Low'}</span>
            </div>
          </div>
        )}

        {/* Status Indicators */}
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="flex items-center space-x-1">
            <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-green-500' : 'bg-gray-400'}`}></div>
            <span>Camera</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className={`w-2 h-2 rounded-full ${detectedPoints > 20 ? 'bg-green-500' : 'bg-gray-400'}`}></div>
            <span>Pose Detection</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className={`w-2 h-2 rounded-full ${calibrationComplete ? 'bg-green-500' : 'bg-gray-400'}`}></div>
            <span>Calibration</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
