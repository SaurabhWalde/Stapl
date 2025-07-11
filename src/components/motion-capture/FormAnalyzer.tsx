
import React, { useEffect, useState } from 'react';

interface FormAnalyzerProps {
  exercise: string;
  onAnalysisUpdate: (analysis: { score: number; feedback: string[] }) => void;
}

export function FormAnalyzer({ exercise, onAnalysisUpdate }: FormAnalyzerProps) {
  const [analysisHistory, setAnalysisHistory] = useState<Array<{ score: number; timestamp: number }>>([]);

  useEffect(() => {
    // Simulate real-time analysis updates
    const interval = setInterval(() => {
      const mockAnalysis = generateMockAnalysis(exercise);
      
      setAnalysisHistory(prev => {
        const newHistory = [...prev, { score: mockAnalysis.score, timestamp: Date.now() }];
        return newHistory.slice(-10); // Keep last 10 readings
      });

      onAnalysisUpdate(mockAnalysis);
    }, 2000);

    return () => clearInterval(interval);
  }, [exercise, onAnalysisUpdate]);

  return null; // This component doesn't render anything visible
}

function generateMockAnalysis(exercise: string): { score: number; feedback: string[] } {
  const baseScore = 75 + Math.random() * 25; // Random score between 75-100
  const feedback: string[] = [];

  switch (exercise) {
    case 'squat':
      if (baseScore < 90) {
        const issues = [
          'Lower your hips more',
          'Keep your chest up',
          'Ensure knees track over toes',
          'Maintain weight on heels'
        ];
        feedback.push(issues[Math.floor(Math.random() * issues.length)]);
      } else {
        feedback.push('Excellent squat depth and form!');
      }
      break;

    case 'pushup':
      if (baseScore < 90) {
        const issues = [
          'Keep your core engaged',
          'Lower your chest closer to the ground',
          'Maintain straight body line',
          'Control the descent'
        ];
        feedback.push(issues[Math.floor(Math.random() * issues.length)]);
      } else {
        feedback.push('Perfect push-up technique!');
      }
      break;

    case 'deadlift':
      if (baseScore < 90) {
        const issues = [
          'Keep the bar close to your body',
          'Engage your lats',
          'Drive through your heels',
          'Keep your shoulders back'
        ];
        feedback.push(issues[Math.floor(Math.random() * issues.length)]);
      } else {
        feedback.push('Excellent deadlift form!');
      }
      break;

    case 'lunges':
      if (baseScore < 90) {
        const issues = [
          'Step out wider for better stability',
          'Keep your front knee over ankle',
          'Lower your back knee towards ground',
          'Maintain upright torso'
        ];
        feedback.push(issues[Math.floor(Math.random() * issues.length)]);
      } else {
        feedback.push('Great lunge technique!');
      }
      break;

    case 'plank':
      if (baseScore < 90) {
        const issues = [
          'Avoid sagging hips',
          'Keep your head neutral',
          'Engage your core muscles',
          'Maintain straight line from head to heels'
        ];
        feedback.push(issues[Math.floor(Math.random() * issues.length)]);
      } else {
        feedback.push('Perfect plank hold!');
      }
      break;

    default:
      feedback.push('Keep maintaining good form!');
  }

  return {
    score: Math.round(baseScore),
    feedback
  };
}
