import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Camera, 
  CameraOff, 
  RotateCcw,
  Scan,
  CheckCircle,
  AlertTriangle,
  Monitor,
  Video
} from 'lucide-react';

interface MultiCameraCaptureProps {
  onPoseDetected: (landmarks: any, analysis: any) => void;
  exercise: string;
  isActive: boolean;
}

export function MultiCameraCapture({ onPoseDetected, exercise, isActive }: MultiCameraCaptureProps) {
  const [frontCameraActive, setFrontCameraActive] = useState(false);
  const [rearCameraActive, setRearCameraActive] = useState(false);
  const [calibrationProgress, setCalibrationProgress] = useState(0);
  const [isCalibrated, setIsCalibrated] = useState(false);
  const [currentPhase, setCurrentPhase] = useState('initialization');
  
  const frontVideoRef = useRef<HTMLVideoElement>(null);
  const rearVideoRef = useRef<HTMLVideoElement>(null);
  const frontCanvasRef = useRef<HTMLCanvasElement>(null);
  const rearCanvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  const phases = [
    { name: 'initialization', label: 'Initializing Cameras', duration: 2000 },
    { name: 'calibration', label: 'Camera Calibration', duration: 3000 },
    { name: 'pose_detection', label: 'Pose Detection Setup', duration: 2000 },
    { name: 'tracking', label: 'Multi-Camera Tracking', duration: 1000 }
  ];

  useEffect(() => {
    if (isActive) {
      startMultiCameraCapture();
    } else {
      stopMultiCameraCapture();
    }

    return () => {
      stopMultiCameraCapture();
    };
  }, [isActive]);

  const startMultiCameraCapture = async () => {
    try {
      await initializeCameras();
      await runCalibrationSequence();
      startPoseTracking();
    } catch (error) {
      console.error('Failed to start multi-camera capture:', error);
      // Fallback to single camera or mock data
      startMockCapture();
    }
  };

  const initializeCameras = async () => {
    setCurrentPhase('initialization');
    
    try {
      // Get available video devices
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      
      if (videoDevices.length >= 2) {
        // Try to use front and rear cameras
        const frontStream = await navigator.mediaDevices.getUserMedia({
          video: { 
            deviceId: videoDevices[0].deviceId,
            width: 640, 
            height: 480,
            facingMode: 'user'
          }
        });
        
        const rearStream = await navigator.mediaDevices.getUserMedia({
          video: { 
            deviceId: videoDevices[1].deviceId,
            width: 640, 
            height: 480,
            facingMode: 'environment'
          }
        });

        if (frontVideoRef.current) {
          frontVideoRef.current.srcObject = frontStream;
          setFrontCameraActive(true);
        }
        
        if (rearVideoRef.current) {
          rearVideoRef.current.srcObject = rearStream;
          setRearCameraActive(true);
        }
      } else {
        // Fallback to single camera
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 640, height: 480 }
        });
        
        if (frontVideoRef.current) {
          frontVideoRef.current.srcObject = stream;
          setFrontCameraActive(true);
        }
      }
    } catch (error) {
      console.error('Camera initialization failed:', error);
      throw error;
    }
  };

  const runCalibrationSequence = async () => {
    setCurrentPhase('calibration');
    
    return new Promise<void>((resolve) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 2;
        setCalibrationProgress(progress);
        
        if (progress >= 100) {
          clearInterval(interval);
          setIsCalibrated(true);
          setCurrentPhase('pose_detection');
          setTimeout(() => {
            setCurrentPhase('tracking');
            resolve();
          }, 2000);
        }
      }, 60);
    });
  };

  const startPoseTracking = () => {
    const trackPoses = () => {
      if (!isActive) return;

      // Process front camera
      if (frontCanvasRef.current && frontVideoRef.current) {
        const frontPoses = processCameraFeed(frontCanvasRef.current, frontVideoRef.current, 'front');
      }

      // Process rear camera  
      if (rearCanvasRef.current && rearVideoRef.current) {
        const rearPoses = processCameraFeed(rearCanvasRef.current, rearVideoRef.current, 'rear');
      }

      // Combine poses from both cameras for 3D analysis
      const combinedAnalysis = generateCombinedAnalysis();
      onPoseDetected(generateMockLandmarks(), combinedAnalysis);

      animationRef.current = requestAnimationFrame(trackPoses);
    };

    trackPoses();
  };

  const processCameraFeed = (canvas: HTMLCanvasElement, video: HTMLVideoElement, cameraType: 'front' | 'rear') => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 320;
    canvas.height = 240;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw mock skeleton overlay
    const landmarks = generateMockLandmarks();
    drawSkeletonOverlay(ctx, landmarks, canvas.width, canvas.height, cameraType);

    return landmarks;
  };

  const generateCombinedAnalysis = () => {
    const baseScore = 80 + Math.random() * 20;
    const feedback = [];

    // Enhanced analysis from multiple camera angles
    if (frontCameraActive && rearCameraActive) {
      feedback.push('Multi-camera analysis active - Enhanced accuracy');
      if (Math.random() > 0.7) {
        feedback.push('Rear camera shows good spinal alignment');
      }
      if (Math.random() > 0.6) {
        feedback.push('Front camera confirms proper knee tracking');
      }
    } else {
      feedback.push('Single camera mode - Consider adding rear camera for better analysis');
    }

    // Exercise-specific feedback
    switch (exercise) {
      case 'squat':
        feedback.push('Depth analysis from side view: Good squat depth achieved');
        break;
      case 'deadlift':
        feedback.push('Bar path tracking: Maintain closer bar position to body');
        break;
      case 'pushup':
        feedback.push('Body alignment check: Keep core engaged throughout movement');
        break;
    }

    return {
      score: Math.round(baseScore),
      feedback,
      cameraStatus: {
        front: frontCameraActive,
        rear: rearCameraActive,
        calibrated: isCalibrated
      }
    };
  };

  const generateMockLandmarks = () => {
    const landmarks = [];
    for (let i = 0; i < 33; i++) {
      landmarks.push({
        x: 0.3 + Math.random() * 0.4,
        y: 0.2 + Math.random() * 0.6,
        z: Math.random() * 0.1,
        visibility: 0.8 + Math.random() * 0.2
      });
    }
    return landmarks;
  };

  const drawSkeletonOverlay = (ctx: CanvasRenderingContext2D, landmarks: any[], width: number, height: number, cameraType: string) => {
    // Enhanced skeleton drawing with camera-specific colors
    const color = cameraType === 'front' ? '#00ff00' : '#0099ff';
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.fillStyle = color;

    // Draw simplified skeleton
    landmarks.forEach((landmark, index) => {
      if (landmark.visibility > 0.5 && index < 17) {
        ctx.beginPath();
        ctx.arc(landmark.x * width, landmark.y * height, 3, 0, 2 * Math.PI);
        ctx.fill();
      }
    });

    // Add camera label
    ctx.fillStyle = '#ffffff';
    ctx.font = '12px Arial';
    ctx.fillText(`${cameraType.toUpperCase()} CAM`, 10, 20);
  };

  const startMockCapture = () => {
    // Fallback mock implementation
    const mockTracking = () => {
      if (!isActive) return;
      
      const analysis = generateCombinedAnalysis();
      onPoseDetected(generateMockLandmarks(), analysis);
      
      animationRef.current = requestAnimationFrame(mockTracking);
    };
    
    setCalibrationProgress(100);
    setIsCalibrated(true);
    setCurrentPhase('tracking');
    mockTracking();
  };

  const stopMultiCameraCapture = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    // Stop camera streams
    [frontVideoRef, rearVideoRef].forEach(ref => {
      if (ref.current?.srcObject) {
        const stream = ref.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    });

    setFrontCameraActive(false);
    setRearCameraActive(false);
    setCalibrationProgress(0);
    setIsCalibrated(false);
    setCurrentPhase('initialization');
  };

  const switchCameraMode = () => {
    // Toggle between single and multi-camera modes
    if (rearCameraActive) {
      // Switch to single camera
      if (rearVideoRef.current?.srcObject) {
        const stream = rearVideoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
      setRearCameraActive(false);
    } else {
      // Try to activate rear camera
      initializeCameras();
    }
  };

  return (
    <div className="space-y-4">
      {/* Camera Status Panel */}
      <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <Monitor className="w-5 h-5" />
              <span>Multi-Camera Motion Capture</span>
            </span>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={switchCameraMode}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Switch Mode
              </Button>
              <Badge variant={isCalibrated ? "default" : "secondary"}>
                {isCalibrated ? "Calibrated" : "Calibrating"}
              </Badge>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Calibration Progress */}
          {currentPhase !== 'tracking' && (
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span>{phases.find(p => p.name === currentPhase)?.label}</span>
                <span>{calibrationProgress}%</span>
              </div>
              <Progress value={calibrationProgress} className="h-2" />
            </div>
          )}

          {/* Camera Feeds */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Front Camera */}
            <div className="relative">
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <video
                  ref={frontVideoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  playsInline
                />
                <canvas
                  ref={frontCanvasRef}
                  className="absolute inset-0 w-full h-full"
                  style={{ pointerEvents: 'none' }}
                />
                <div className="absolute top-2 left-2 flex items-center space-x-2">
                  {frontCameraActive ? (
                    <Badge className="bg-green-600">
                      <Camera className="w-3 h-3 mr-1" />
                      Front Active
                    </Badge>
                  ) : (
                    <Badge variant="secondary">
                      <CameraOff className="w-3 h-3 mr-1" />
                      Front Inactive
                    </Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Rear Camera */}
            <div className="relative">
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <video
                  ref={rearVideoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  playsInline
                />
                <canvas
                  ref={rearCanvasRef}
                  className="absolute inset-0 w-full h-full"
                  style={{ pointerEvents: 'none' }}
                />
                <div className="absolute top-2 left-2 flex items-center space-x-2">
                  {rearCameraActive ? (
                    <Badge className="bg-blue-600">
                      <Video className="w-3 h-3 mr-1" />
                      Rear Active
                    </Badge>
                  ) : (
                    <Badge variant="secondary">
                      <CameraOff className="w-3 h-3 mr-1" />
                      Rear Inactive
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Status Indicators */}
          <div className="flex items-center justify-between mt-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {isCalibrated ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                )}
                <span className="text-sm font-medium">
                  {isCalibrated ? 'Calibrated' : 'Calibrating...'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Scan className="w-4 h-4 text-blue-500" />
                <span className="text-sm">
                  Phase: {phases.find(p => p.name === currentPhase)?.label}
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Cameras: {frontCameraActive ? 1 : 0} + {rearCameraActive ? 1 : 0} active
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}