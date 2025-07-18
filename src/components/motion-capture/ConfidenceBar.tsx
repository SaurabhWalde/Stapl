import React from 'react';

interface ConfidenceBarProps {
  confidence: number;
  className?: string;
}

export function ConfidenceBar({ confidence, className = '' }: ConfidenceBarProps) {
  const getConfidenceColor = (value: number) => {
    if (value >= 0.8) return 'bg-green-500';
    if (value >= 0.6) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getConfidenceText = (value: number) => {
    if (value >= 0.8) return 'Excellent';
    if (value >= 0.6) return 'Good';
    if (value >= 0.4) return 'Fair';
    return 'Poor';
  };

  return (
    <div className={`space-y-1 ${className}`}>
      <div className="flex justify-between items-center text-xs text-white">
        <span>Detection Quality</span>
        <span className="font-mono">{getConfidenceText(confidence)}</span>
      </div>
      <div className="w-full h-2 bg-black/50 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-300 ${getConfidenceColor(confidence)}`}
          style={{ width: `${Math.max(0, Math.min(100, confidence * 100))}%` }}
        />
      </div>
      <div className="text-xs text-white/70 font-mono text-center">
        {(confidence * 100).toFixed(1)}%
      </div>
    </div>
  );
}