import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Square, Loader2 } from 'lucide-react';

interface RecordButtonProps {
  isRecording: boolean;
  isProcessing: boolean;
  onStartRecording: () => void;
  onStopRecording: () => void;
}

export function RecordButton({ 
  isRecording, 
  isProcessing, 
  onStartRecording, 
  onStopRecording 
}: RecordButtonProps) {
  const handleClick = () => {
    if (isProcessing) return;
    
    if (isRecording) {
      onStopRecording();
    } else {
      onStartRecording();
    }
  };

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
      <Button
        onClick={handleClick}
        disabled={isProcessing}
        size="lg"
        className={`
          h-16 w-16 rounded-full transition-all duration-300 shadow-lg
          ${isRecording 
            ? 'bg-red-600 hover:bg-red-700 border-red-500' 
            : 'bg-white hover:bg-gray-100 border-gray-300 text-gray-900'
          }
          ${isProcessing ? 'cursor-not-allowed opacity-75' : 'hover:scale-105'}
        `}
        variant={isRecording ? "destructive" : "outline"}
      >
        {isProcessing ? (
          <Loader2 className="w-6 h-6 animate-spin" />
        ) : isRecording ? (
          <Square className="w-6 h-6 fill-current" />
        ) : (
          <Play className="w-6 h-6 ml-0.5" />
        )}
      </Button>
      
      {/* Button Label */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
        <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
          {isProcessing 
            ? 'Processing...' 
            : isRecording 
              ? 'Stop Recording' 
              : 'Start Recording'
          }
        </span>
      </div>
    </div>
  );
}