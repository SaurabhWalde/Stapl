import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronUp, 
  ChevronDown, 
  AlertTriangle, 
  CheckCircle, 
  Info,
  User
} from 'lucide-react';

interface JointAngle {
  name: string;
  current: number;
  ideal: number;
  deviation: number;
  status: 'good' | 'warning' | 'poor';
}

interface PostureFeedback {
  overall: 'good' | 'warning' | 'poor';
  message: string;
  joints: JointAngle[];
}

interface FeedbackPanelProps {
  feedback: PostureFeedback;
  className?: string;
}

export function FeedbackPanel({ feedback, className = '' }: FeedbackPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'poor':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default:
        return <Info className="w-4 h-4 text-blue-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good':
        return 'border-green-500 bg-green-50/90 text-green-900';
      case 'warning':
        return 'border-yellow-500 bg-yellow-50/90 text-yellow-900';
      case 'poor':
        return 'border-red-500 bg-red-50/90 text-red-900';
      default:
        return 'border-blue-500 bg-blue-50/90 text-blue-900';
    }
  };

  return (
    <div className={`absolute bottom-20 left-4 z-20 ${className}`}>
      <Card 
        className={`
          max-w-xs transition-all duration-300 backdrop-blur-sm border-2
          ${getStatusColor(feedback.overall)}
          ${isExpanded ? 'w-80' : 'w-48'}
        `}
      >
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <CardTitle className="text-sm font-medium">Posture</CardTitle>
            </div>
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              size="sm"
              variant="ghost"
              className="h-6 w-6 p-0 hover:bg-black/10"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronUp className="w-4 h-4" />
              )}
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0">
          {/* Main Feedback */}
          <div className="flex items-center space-x-2 mb-2">
            {getStatusIcon(feedback.overall)}
            <span className="text-sm font-medium">{feedback.message}</span>
          </div>
          
          {/* Expanded Joint Details */}
          {isExpanded && (
            <div className="space-y-3 mt-4 border-t pt-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider opacity-75">
                Joint Analysis
              </h4>
              
              {feedback.joints.map((joint, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium">{joint.name}</span>
                    <Badge 
                      variant="outline" 
                      className={`text-xs px-1 py-0 ${
                        joint.status === 'good' ? 'border-green-500 text-green-700' :
                        joint.status === 'warning' ? 'border-yellow-500 text-yellow-700' :
                        'border-red-500 text-red-700'
                      }`}
                    >
                      {joint.current}°
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs opacity-70">
                    <span>Ideal: {joint.ideal}°</span>
                    <span>
                      {joint.deviation > 0 ? '+' : ''}{joint.deviation}°
                    </span>
                  </div>
                  
                  {/* Visual indicator */}
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-300 ${
                        joint.status === 'good' ? 'bg-green-500' :
                        joint.status === 'warning' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ 
                        width: `${Math.max(10, Math.min(100, 100 - Math.abs(joint.deviation) * 2))}%` 
                      }}
                    />
                  </div>
                </div>
              ))}
              
              <div className="text-xs opacity-60 mt-3 pt-2 border-t">
                Tap to monitor posture in real-time
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}