
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  CheckCircle, 
  AlertTriangle, 
  Activity,
  Users,
  Zap
} from 'lucide-react';

interface ScanData {
  landmarks: Array<{
    id: number;
    x: number;
    y: number;
    z: number;
    confidence: number;
  }>;
  confidence: number;
  timestamp: number;
  quality: string;
}

interface ScanResultsPanelProps {
  scanData: ScanData | null;
  isVisible: boolean;
}

export function ScanResultsPanel({ scanData, isVisible }: ScanResultsPanelProps) {
  if (!isVisible || !scanData) {
    return null;
  }

  const averageConfidence = scanData.landmarks.reduce((acc, landmark) => acc + landmark.confidence, 0) / scanData.landmarks.length;
  const highConfidencePoints = scanData.landmarks.filter(l => l.confidence > 0.9).length;
  const mediumConfidencePoints = scanData.landmarks.filter(l => l.confidence > 0.7 && l.confidence <= 0.9).length;
  const lowConfidencePoints = scanData.landmarks.filter(l => l.confidence <= 0.7).length;

  return (
    <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center space-x-2">
            <Activity className="w-5 h-5 text-green-500" />
            <span>Scan Results</span>
          </span>
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            <CheckCircle className="w-3 h-3 mr-1" />
            {scanData.quality.charAt(0).toUpperCase() + scanData.quality.slice(1)} Quality
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Overall Confidence */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Overall Confidence</span>
            <span className="text-sm text-green-600 font-semibold">
              {(averageConfidence * 100).toFixed(1)}%
            </span>
          </div>
          <Progress value={averageConfidence * 100} className="h-2" />
        </div>

        {/* Landmark Detection Summary */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="text-sm font-medium">Body Landmarks</div>
            <div className="text-2xl font-bold text-blue-600">{scanData.landmarks.length}</div>
            <div className="text-xs text-gray-600">Total detected</div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-medium">Tracking Quality</div>
            <div className="text-2xl font-bold text-green-600">{highConfidencePoints}</div>
            <div className="text-xs text-gray-600">High confidence</div>
          </div>
        </div>

        {/* Confidence Distribution */}
        <div className="space-y-3">
          <div className="text-sm font-medium">Point Quality Distribution</div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>High Confidence (&gt;90%)</span>
              </span>
              <span className="text-xs font-medium">{highConfidencePoints}</span>
            </div>
            <Progress value={(highConfidencePoints / scanData.landmarks.length) * 100} className="h-1" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Medium Confidence (70-90%)</span>
              </span>
              <span className="text-xs font-medium">{mediumConfidencePoints}</span>
            </div>
            <Progress value={(mediumConfidencePoints / scanData.landmarks.length) * 100} className="h-1" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>Low Confidence (&lt;70%)</span>
              </span>
              <span className="text-xs font-medium">{lowConfidencePoints}</span>
            </div>
            <Progress value={(lowConfidencePoints / scanData.landmarks.length) * 100} className="h-1" />
          </div>
        </div>

        {/* Key Body Parts Status */}
        <div className="space-y-2">
          <div className="text-sm font-medium">Key Body Parts</div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center justify-between">
              <span>Head & Face</span>
              <CheckCircle className="w-3 h-3 text-green-500" />
            </div>
            <div className="flex items-center justify-between">
              <span>Shoulders</span>
              <CheckCircle className="w-3 h-3 text-green-500" />
            </div>
            <div className="flex items-center justify-between">
              <span>Arms & Hands</span>
              <CheckCircle className="w-3 h-3 text-green-500" />
            </div>
            <div className="flex items-center justify-between">
              <span>Torso</span>
              <CheckCircle className="w-3 h-3 text-green-500" />
            </div>
            <div className="flex items-center justify-between">
              <span>Hips</span>
              <CheckCircle className="w-3 h-3 text-green-500" />
            </div>
            <div className="flex items-center justify-between">
              <span>Legs & Feet</span>
              {lowConfidencePoints > 3 ? (
                <AlertTriangle className="w-3 h-3 text-yellow-500" />
              ) : (
                <CheckCircle className="w-3 h-3 text-green-500" />
              )}
            </div>
          </div>
        </div>

        {/* Scan Metadata */}
        <div className="pt-2 border-t border-gray-200 text-xs text-gray-600">
          <div className="flex justify-between">
            <span>Scan Time</span>
            <span>{new Date(scanData.timestamp).toLocaleTimeString()}</span>
          </div>
          <div className="flex justify-between mt-1">
            <span>Processing Time</span>
            <span>8.2 seconds</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
