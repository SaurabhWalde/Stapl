import React, { useEffect, useRef } from 'react';

interface PoseDetectorProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  exercise: string;
  onPoseDetected: (landmarks: any, analysis: any) => void;
}

export function PoseDetector({ videoRef, canvasRef, exercise, onPoseDetected }: PoseDetectorProps) {
  const animationRef = useRef<number>();
  const mockLandmarksRef = useRef<any[]>([]);

  useEffect(() => {
    if (!videoRef.current || !canvasRef.current) return;

    // Initialize webcam
    const initCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { width: 640, height: 480 } 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.log('Camera access denied or not available');
        // Continue with mock data for demonstration
      }
    };

    // Generate mock pose landmarks for demonstration
    const generateMockLandmarks = () => {
      const landmarks = [];
      // Generate 33 key points (MediaPipe Pose has 33 landmarks)
      for (let i = 0; i < 33; i++) {
        landmarks.push({
          x: 0.3 + Math.random() * 0.4, // Random x between 0.3-0.7
          y: 0.2 + Math.random() * 0.6, // Random y between 0.2-0.8
          z: Math.random() * 0.1,       // Random depth
          visibility: 0.8 + Math.random() * 0.2 // High visibility
        });
      }
      return landmarks;
    };

    const animate = () => {
      if (!canvasRef.current || !videoRef.current) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = 640;
      canvas.height = 480;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Generate mock pose data
      const mockLandmarks = generateMockLandmarks();
      mockLandmarksRef.current = mockLandmarks;

      // Draw mock skeleton
      drawMockSkeleton(ctx, mockLandmarks, canvas.width, canvas.height);

      // Analyze form based on pose landmarks
      const analysis = analyzeForm(mockLandmarks, exercise);
      onPoseDetected(mockLandmarks, analysis);

      animationRef.current = requestAnimationFrame(animate);
    };

    initCamera();
    
    // Start animation loop after a short delay
    const timer = setTimeout(() => {
      animate();
    }, 1000);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearTimeout(timer);
      
      // Stop camera stream
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [videoRef, canvasRef, exercise, onPoseDetected]);

  return null;
}

function drawMockSkeleton(ctx: CanvasRenderingContext2D, landmarks: any[], width: number, height: number) {
  // Mock skeleton connections (simplified)
  const connections = [
    [11, 12], [11, 13], [13, 15], [12, 14], [14, 16], // Arms
    [11, 23], [12, 24], [23, 24], // Torso
    [23, 25], [25, 27], [24, 26], [26, 28], // Legs
  ];

  // Draw connections
  ctx.strokeStyle = '#00ff00';
  ctx.lineWidth = 2;

  connections.forEach(([start, end]) => {
    const startPoint = landmarks[start];
    const endPoint = landmarks[end];
    
    if (startPoint && endPoint && startPoint.visibility > 0.5 && endPoint.visibility > 0.5) {
      ctx.beginPath();
      ctx.moveTo(startPoint.x * width, startPoint.y * height);
      ctx.lineTo(endPoint.x * width, endPoint.y * height);
      ctx.stroke();
    }
  });

  // Draw landmark points
  ctx.fillStyle = '#ff0000';
  landmarks.forEach((landmark, index) => {
    if (landmark.visibility > 0.5 && index < 17) { // Only draw key points
      ctx.beginPath();
      ctx.arc(landmark.x * width, landmark.y * height, 4, 0, 2 * Math.PI);
      ctx.fill();
    }
  });

  // Add demo text
  ctx.fillStyle = '#ffffff';
  ctx.font = '16px Arial';
  ctx.fillText('DEMO MODE - Pose Detection Active', 10, 30);
}

function analyzeForm(landmarks: any[], exercise: string): { score: number; feedback: string[] } {
  const feedback: string[] = [];
  let score = 75 + Math.random() * 25; // Random score for demo

  switch (exercise) {
    case 'squat':
      return analyzeSquat(landmarks);
    case 'pushup':
      return analyzePushup(landmarks);
    case 'deadlift':
      return analyzeDeadlift(landmarks);
    case 'lunges':
      return analyzeLunges(landmarks);
    case 'plank':
      return analyzePlank(landmarks);
    default:
      return { score: Math.round(score), feedback: ['Demo mode active - Keep practicing!'] };
  }
}

function analyzeSquat(landmarks: any[]): { score: number; feedback: string[] } {
  const feedback: string[] = [];
  let score = 75 + Math.random() * 25;

  const tips = [
    'Lower your hips more for better depth',
    'Keep your chest up and core engaged', 
    'Ensure knees track over toes',
    'Great form! Keep it up!'
  ];

  feedback.push(tips[Math.floor(Math.random() * tips.length)]);
  return { score: Math.round(score), feedback };
}

function analyzePushup(landmarks: any[]): { score: number; feedback: string[] } {
  const feedback: string[] = [];
  let score = 75 + Math.random() * 25;

  const tips = [
    'Keep your core engaged throughout',
    'Lower your chest closer to the ground',
    'Maintain straight body line',
    'Perfect push-up technique!'
  ];

  feedback.push(tips[Math.floor(Math.random() * tips.length)]);
  return { score: Math.round(score), feedback };
}

function analyzeDeadlift(landmarks: any[]): { score: number; feedback: string[] } {
  const feedback: string[] = [];
  let score = 75 + Math.random() * 25;

  const tips = [
    'Keep the bar close to your body',
    'Engage your lats and keep shoulders back',
    'Drive through your heels',
    'Excellent deadlift form!'
  ];

  feedback.push(tips[Math.floor(Math.random() * tips.length)]);
  return { score: Math.round(score), feedback };
}

function analyzeLunges(landmarks: any[]): { score: number; feedback: string[] } {
  const feedback: string[] = [];
  let score = 75 + Math.random() * 25;

  const tips = [
    'Step out wider for better stability',
    'Keep your front knee over ankle',
    'Lower your back knee towards ground',
    'Great lunge technique!'
  ];

  feedback.push(tips[Math.floor(Math.random() * tips.length)]);
  return { score: Math.round(score), feedback };
}

function analyzePlank(landmarks: any[]): { score: number; feedback: string[] } {
  const feedback: string[] = [];
  let score = 75 + Math.random() * 25;

  const tips = [
    'Avoid sagging hips - engage core',
    'Keep your head in neutral position',
    'Maintain straight line from head to heels',
    'Perfect plank hold!'
  ];

  feedback.push(tips[Math.floor(Math.random() * tips.length)]);
  return { score: Math.round(score), feedback };
}
