
import React, { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertTriangle, ThumbsUp } from 'lucide-react';

interface Coach {
  id: string;
  name: string;
  specialty: string;
  avatar: string;
}

interface VirtualCoachOverlayProps {
  coach?: Coach;
  feedback: string[];
  formScore: number;
}

export function VirtualCoachOverlay({ coach, feedback, formScore }: VirtualCoachOverlayProps) {
  const [currentMessage, setCurrentMessage] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (feedback.length > 0) {
      setCurrentMessage(feedback[feedback.length - 1]);
      setIsVisible(true);
      
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [feedback]);

  if (!coach || !isVisible) return null;

  const getStatusIcon = () => {
    if (formScore >= 90) return <CheckCircle className="w-4 h-4 text-green-500" />;
    if (formScore >= 70) return <ThumbsUp className="w-4 h-4 text-yellow-500" />;
    return <AlertTriangle className="w-4 h-4 text-red-500" />;
  };

  const getStatusColor = () => {
    if (formScore >= 90) return 'bg-green-100 border-green-200 text-green-800';
    if (formScore >= 70) return 'bg-yellow-100 border-yellow-200 text-yellow-800';
    return 'bg-red-100 border-red-200 text-red-800';
  };

  return (
    <div className="absolute top-4 right-4 max-w-sm">
      <div className={`rounded-lg border-2 p-4 backdrop-blur-sm ${getStatusColor()}`}>
        <div className="flex items-start space-x-3">
          <div className="text-2xl">{coach.avatar}</div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-sm">{coach.name}</h4>
              <div className="flex items-center space-x-1">
                {getStatusIcon()}
                <Badge variant="secondary" className="text-xs">
                  {formScore}%
                </Badge>
              </div>
            </div>
            <p className="text-sm leading-relaxed">{currentMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
