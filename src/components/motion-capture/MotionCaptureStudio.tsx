
import React, { useState, useEffect } from 'react';
import { CameraView } from './CameraView';
import { RecordButton } from './RecordButton';
import { FPSDisplay } from './FPSDisplay';
import { FeedbackPanel } from './FeedbackPanel';
import { motionCaptureService, PostureAnalysis } from '@/services/motionCapture';

export function MotionCaptureStudio() {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [fps, setFps] = useState(0);
  const [confidence, setConfidence] = useState(0);
  const [feedback, setFeedback] = useState<PostureAnalysis>({
    overall: 'good',
    message: 'Stand naturally to begin analysis',
    joints: []
  });

  useEffect(() => {
    // Initialize MediaPipe Pose on component mount
    motionCaptureService.initializePose();
  }, []);

  const handleFrameUpdate = (video: HTMLVideoElement, canvas: HTMLCanvasElement) => {
    try {
      // Process frame for pose detection
      const { landmarks, confidence: frameConfidence } = motionCaptureService.detectPose(video, canvas);
      
      // Update metrics
      setFps(motionCaptureService.getFPS());
      setConfidence(frameConfidence);
      
      // Analyze posture
      const postureAnalysis = motionCaptureService.analyzePosture(landmarks);
      setFeedback(postureAnalysis);
      
      // If recording, save landmark data
      if (isRecording) {
        motionCaptureService.addLandmarks(landmarks);
      }
    } catch (error) {
      console.error('Frame processing error:', error);
    }
  };

  const handleStartRecording = async () => {
    setIsProcessing(true);
    try {
      // Get camera stream
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true, 
        audio: false 
      });
      
      // Start recording
      await motionCaptureService.startRecording(stream);
      setIsRecording(true);
    } catch (error) {
      console.error('Failed to start recording:', error);
      alert('Failed to start recording. Please check camera permissions.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleStopRecording = async () => {
    setIsProcessing(true);
    try {
      await motionCaptureService.stopRecording();
      setIsRecording(false);
    } catch (error) {
      console.error('Failed to stop recording:', error);
      alert('Failed to stop recording.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Full-Screen Camera View */}
      <CameraView 
        onFrameUpdate={handleFrameUpdate}
        isRecording={isRecording}
      />
      
      {/* Performance Metrics */}
      <FPSDisplay fps={fps} confidence={confidence} />
      
      {/* Recording Controls */}
      <RecordButton
        isRecording={isRecording}
        isProcessing={isProcessing}
        onStartRecording={handleStartRecording}
        onStopRecording={handleStopRecording}
      />
      
      {/* Posture Feedback */}
      <FeedbackPanel feedback={feedback} />
    </div>
  );
}
