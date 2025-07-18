import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { RotateCcw, Camera } from 'lucide-react';

interface CameraViewProps {
  onFrameUpdate: (video: HTMLVideoElement, canvas: HTMLCanvasElement) => void;
  isRecording: boolean;
}

export function CameraView({ onFrameUpdate, isRecording }: CameraViewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentCamera, setCurrentCamera] = useState<'front' | 'back'>('front');
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [availableCameras, setAvailableCameras] = useState<MediaDeviceInfo[]>([]);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    initializeCamera();
    getAvailableCameras();
    
    return () => {
      stopCamera();
    };
  }, []);

  useEffect(() => {
    if (currentCamera) {
      switchCamera();
    }
  }, [currentCamera]);

  const getAvailableCameras = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      setAvailableCameras(videoDevices);
    } catch (error) {
      console.error('Error getting camera devices:', error);
    }
  };

  const initializeCamera = async () => {
    try {
      const constraints = {
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: currentCamera === 'front' ? 'user' : 'environment',
          frameRate: { ideal: 30 }
        },
        audio: false
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setCameraError(null);
        
        // Start the pose detection loop when video is ready
        videoRef.current.onloadedmetadata = () => {
          startPoseDetection();
        };
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      setCameraError('Unable to access camera. Please check permissions.');
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  };

  const switchCamera = async () => {
    stopCamera();
    await initializeCamera();
  };

  const toggleCamera = () => {
    if (availableCameras.length > 1) {
      setCurrentCamera(current => current === 'front' ? 'back' : 'front');
    }
  };

  const startPoseDetection = () => {
    const detectPose = () => {
      if (videoRef.current && canvasRef.current && !videoRef.current.paused && !videoRef.current.ended) {
        // Resize canvas to match video dimensions
        const video = videoRef.current;
        const canvas = canvasRef.current;
        
        canvas.width = video.videoWidth || video.clientWidth;
        canvas.height = video.videoHeight || video.clientHeight;
        
        // Call the pose detection callback
        onFrameUpdate(video, canvas);
      }
      
      requestAnimationFrame(detectPose);
    };
    
    detectPose();
  };

  if (cameraError) {
    return (
      <div className="relative w-full h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center text-white">
          <Camera className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-semibold mb-2">Camera Access Required</h3>
          <p className="text-gray-300 mb-4">{cameraError}</p>
          <Button onClick={initializeCamera} variant="outline">
            Retry Camera Access
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Video Element - Full Screen */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Canvas Overlay for Pose Detection */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 10 }}
      />
      
      {/* Camera Switch Button */}
      {availableCameras.length > 1 && (
        <Button
          onClick={toggleCamera}
          size="lg"
          className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 border-white/20"
          variant="outline"
        >
          <RotateCcw className="w-5 h-5" />
        </Button>
      )}
      
      {/* Recording Indicator */}
      {isRecording && (
        <div className="absolute top-4 left-4 z-20 flex items-center space-x-2 bg-red-600 px-3 py-2 rounded-full">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          <span className="text-white font-medium text-sm">RECORDING</span>
        </div>
      )}
    </div>
  );
}