import React, { useEffect, useRef } from 'react';
import { Pose } from '@mediapipe/pose';
import { Camera } from '@mediapipe/camera_utils';

interface PoseDetectorProps {
  videoRef: React.RefObject<HTMLVideoElement>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  exercise: string;
  onPoseDetected: (landmarks: any, analysis: any) => void;
}

export function PoseDetector({ videoRef, canvasRef, exercise, onPoseDetected }: PoseDetectorProps) {
  const poseRef = useRef<Pose | null>(null);
  const cameraRef = useRef<Camera | null>(null);

  useEffect(() => {
    if (!videoRef.current || !canvasRef.current) return;

    const pose = new Pose({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
      }
    });

    pose.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: true,
      smoothSegmentation: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });

    pose.onResults((results) => {
      if (!canvasRef.current) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = videoRef.current?.videoWidth || 640;
      canvas.height = videoRef.current?.videoHeight || 480;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (results.poseLandmarks) {
        // Draw pose landmarks
        drawLandmarks(ctx, results.poseLandmarks, canvas.width, canvas.height);
        
        // Analyze form based on pose landmarks
        const analysis = analyzeForm(results.poseLandmarks, exercise);
        onPoseDetected(results.poseLandmarks, analysis);
      }
    });

    const camera = new Camera(videoRef.current, {
      onFrame: async () => {
        if (videoRef.current) {
          await pose.send({ image: videoRef.current });
        }
      },
      width: 640,
      height: 480
    });

    poseRef.current = pose;
    cameraRef.current = camera;

    camera.start();

    return () => {
      camera.stop();
    };
  }, [videoRef, canvasRef, exercise, onPoseDetected]);

  return null;
}

function drawLandmarks(ctx: CanvasRenderingContext2D, landmarks: any[], width: number, height: number) {
  // Draw skeleton connections
  const connections = [
    [11, 12], [11, 13], [13, 15], [12, 14], [14, 16], // Arms
    [11, 23], [12, 24], [23, 24], // Torso
    [23, 25], [25, 27], [24, 26], [26, 28], // Legs
    [27, 29], [29, 31], [28, 30], [30, 32] // Feet
  ];

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
  landmarks.forEach((landmark) => {
    if (landmark.visibility > 0.5) {
      ctx.beginPath();
      ctx.arc(landmark.x * width, landmark.y * height, 3, 0, 2 * Math.PI);
      ctx.fill();
    }
  });
}

function analyzeForm(landmarks: any[], exercise: string): { score: number; feedback: string[] } {
  const feedback: string[] = [];
  let score = 100;

  switch (exercise) {
    case 'squat':
      return analyzeSquat(landmarks);
    case 'pushup':
      return analyzePushup(landmarks);
    case 'deadlift':
      return analyzeDeadlift(landmarks);
    default:
      return { score: 85, feedback: ['Keep your back straight', 'Maintain proper alignment'] };
  }
}

function analyzeSquat(landmarks: any[]): { score: number; feedback: string[] } {
  const feedback: string[] = [];
  let score = 100;

  // Check knee alignment
  const leftKnee = landmarks[25];
  const rightKnee = landmarks[26];
  const leftAnkle = landmarks[27];
  const rightAnkle = landmarks[28];

  if (leftKnee && rightKnee && leftAnkle && rightAnkle) {
    const kneeAlignment = Math.abs(leftKnee.x - rightKnee.x);
    if (kneeAlignment > 0.1) {
      feedback.push('Keep knees aligned with toes');
      score -= 15;
    }
  }

  // Check back posture
  const leftShoulder = landmarks[11];
  const rightShoulder = landmarks[12];
  const leftHip = landmarks[23];
  const rightHip = landmarks[24];

  if (leftShoulder && rightShoulder && leftHip && rightHip) {
    const shoulderAngle = Math.atan2(rightShoulder.y - leftShoulder.y, rightShoulder.x - leftShoulder.x);
    const hipAngle = Math.atan2(rightHip.y - leftHip.y, rightHip.x - leftHip.x);
    
    if (Math.abs(shoulderAngle - hipAngle) > 0.2) {
      feedback.push('Keep your torso upright');
      score -= 10;
    }
  }

  if (feedback.length === 0) {
    feedback.push('Excellent form! Keep it up!');
  }

  return { score: Math.max(score, 0), feedback };
}

function analyzePushup(landmarks: any[]): { score: number; feedback: string[] } {
  const feedback: string[] = [];
  let score = 100;

  // Check body alignment
  const nose = landmarks[0];
  const leftHip = landmarks[23];
  const leftAnkle = landmarks[27];

  if (nose && leftHip && leftAnkle) {
    const bodySlope = (leftAnkle.y - nose.y) / (leftAnkle.x - nose.x);
    if (Math.abs(bodySlope) > 0.1) {
      feedback.push('Keep your body in a straight line');
      score -= 20;
    }
  }

  if (feedback.length === 0) {
    feedback.push('Perfect push-up form!');
  }

  return { score: Math.max(score, 0), feedback };
}

function analyzeDeadlift(landmarks: any[]): { score: number; feedback: string[] } {
  const feedback: string[] = [];
  let score = 100;

  // Check back posture
  const leftShoulder = landmarks[11];
  const leftHip = landmarks[23];
  const leftKnee = landmarks[25];

  if (leftShoulder && leftHip && leftKnee) {
    const backAngle = Math.atan2(leftHip.y - leftShoulder.y, leftHip.x - leftShoulder.x);
    if (Math.abs(backAngle) > 0.3) {
      feedback.push('Keep your back straight and chest up');
      score -= 25;
    }
  }

  if (feedback.length === 0) {
    feedback.push('Great deadlift technique!');
  }

  return { score: Math.max(score, 0), feedback };
}
