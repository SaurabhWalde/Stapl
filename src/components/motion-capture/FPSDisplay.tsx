import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Activity, Zap } from 'lucide-react';

interface FPSDisplayProps {
  fps: number;
  confidence: number;
}

export function FPSDisplay({ fps, confidence }: FPSDisplayProps) {
  const [fpsColor, setFpsColor] = useState('text-green-500');
  const [confidenceColor, setConfidenceColor] = useState('text-green-500');

  useEffect(() => {
    // Update FPS color based on performance
    if (fps >= 25) {
      setFpsColor('text-green-500');
    } else if (fps >= 15) {
      setFpsColor('text-yellow-500');
    } else {
      setFpsColor('text-red-500');
    }
  }, [fps]);

  useEffect(() => {
    // Update confidence color based on detection quality
    if (confidence >= 0.8) {
      setConfidenceColor('text-green-500');
    } else if (confidence >= 0.6) {
      setConfidenceColor('text-yellow-500');
    } else {
      setConfidenceColor('text-red-500');
    }
  }, [confidence]);

  return (
    <div className="absolute top-4 right-4 z-20 space-y-2">
      {/* FPS Counter */}
      <Badge className="bg-black/70 border-white/20 text-white">
        <Activity className={`w-3 h-3 mr-1 ${fpsColor}`} />
        <span className="text-xs font-mono">
          {fps.toFixed(0)} FPS
        </span>
      </Badge>
      
      {/* Confidence Score */}
      <Badge className="bg-black/70 border-white/20 text-white">
        <Zap className={`w-3 h-3 mr-1 ${confidenceColor}`} />
        <span className="text-xs font-mono">
          {(confidence * 100).toFixed(0)}%
        </span>
      </Badge>
      
      {/* Confidence Bar */}
      <div className="w-24 h-2 bg-black/50 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-300 ${
            confidence >= 0.8 ? 'bg-green-500' :
            confidence >= 0.6 ? 'bg-yellow-500' : 'bg-red-500'
          }`}
          style={{ width: `${confidence * 100}%` }}
        />
      </div>
    </div>
  );
}