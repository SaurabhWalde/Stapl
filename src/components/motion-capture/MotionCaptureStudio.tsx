import React, { useState, useEffect } from 'react';
import { CameraView } from './CameraView';
import { RecordButton } from './RecordButton';
import { FPSDisplay } from './FPSDisplay';
import { FeedbackPanel } from './FeedbackPanel';
import WorkoutTemplates from './WorkoutTemplates';
import ProgressComparison from './ProgressComparison';
import { motionCaptureService, PostureAnalysis } from '@/services/motionCapture';
import { Button } from '@/components/ui/button';
import { Camera, Target, TrendingUp } from 'lucide-react';

type TabType = 'capture' | 'templates' | 'progress';

export function MotionCaptureStudio() {
  const [activeTab, setActiveTab] = useState<TabType>('capture');
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
    motionCaptureService.initializePose();
  }, []);

  const handleFrameUpdate = (video: HTMLVideoElement, canvas: HTMLCanvasElement) => {
    try {
      const { landmarks, confidence: frameConfidence } = motionCaptureService.detectPose(video, canvas);
      setFps(motionCaptureService.getFPS());
      setConfidence(frameConfidence);
      const postureAnalysis = motionCaptureService.analyzePosture(landmarks);
      setFeedback(postureAnalysis);
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
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
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

  if (activeTab === 'capture') {
    return (
      <div className="relative w-full h-screen bg-black overflow-hidden">
        <CameraView onFrameUpdate={handleFrameUpdate} isRecording={isRecording} />
        <FPSDisplay fps={fps} confidence={confidence} />
        <RecordButton
          isRecording={isRecording}
          isProcessing={isProcessing}
          onStartRecording={handleStartRecording}
          onStopRecording={handleStopRecording}
        />
        <FeedbackPanel feedback={feedback} />
        <div className="absolute top-4 left-4 z-50">
          <div className="flex bg-black/80 rounded-lg p-1 backdrop-blur-sm">
            <Button size="sm" variant="default" onClick={() => setActiveTab('capture')} className="text-white">
              <Camera className="h-4 w-4 mr-2" />Capture
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setActiveTab('templates')} className="text-white">
              <Target className="h-4 w-4 mr-2" />Templates
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setActiveTab('progress')} className="text-white">
              <TrendingUp className="h-4 w-4 mr-2" />Progress
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Motion Capture Studio</h1>
            <p className="text-muted-foreground">AI-powered form analysis and workout guidance</p>
          </div>
          <div className="flex bg-muted rounded-lg p-1">
            <Button size="sm" variant="ghost" onClick={() => setActiveTab('capture')}>
              <Camera className="h-4 w-4 mr-2" />Capture
            </Button>
            <Button size="sm" variant={activeTab === 'templates' ? 'default' : 'ghost'} onClick={() => setActiveTab('templates')}>
              <Target className="h-4 w-4 mr-2" />Templates
            </Button>
            <Button size="sm" variant={activeTab === 'progress' ? 'default' : 'ghost'} onClick={() => setActiveTab('progress')}>
              <TrendingUp className="h-4 w-4 mr-2" />Progress
            </Button>
          </div>
        </div>
        {activeTab === 'templates' && <WorkoutTemplates />}
        {activeTab === 'progress' && <ProgressComparison />}
      </div>
    </div>
  );
}