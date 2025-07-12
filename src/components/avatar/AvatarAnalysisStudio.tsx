
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  User, 
  Activity, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  RotateCcw,
  Camera,
  Scan3D
} from 'lucide-react';
import { Avatar3DViewer } from './Avatar3DViewer';
import { PostureAnalysis } from './PostureAnalysis';
import { BodyMetrics } from './BodyMetrics';

export function AvatarAnalysisStudio() {
  const [isScanning, setIsScanning] = useState(false);
  const [avatarGenerated, setAvatarGenerated] = useState(true); // Set to true for demo
  const [selectedView, setSelectedView] = useState('front');

  const postureData = {
    overallScore: 82,
    headAlignment: 75,
    shoulderLevel: 88,
    spinalCurvature: 79,
    hipAlignment: 85,
    kneeTracking: 90
  };

  const bodyMetrics = {
    height: "5'9\"",
    armSpan: "5'11\"",
    shoulderWidth: "18.5\"",
    torsoLength: "24\"",
    legLength: "35\"",
    flexibility: 78
  };

  const handleStartScan = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false);
      setAvatarGenerated(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">3D Avatar Analysis</h1>
            <p className="text-gray-600">AI-powered body analysis and posture assessment</p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              <Scan3D className="w-4 h-4 mr-2" />
              Motion Capture Ready
            </Badge>
            <Button 
              onClick={handleStartScan}
              disabled={isScanning}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isScanning ? (
                <>
                  <RotateCcw className="w-4 h-4 mr-2 animate-spin" />
                  Scanning...
                </>
              ) : (
                <>
                  <Camera className="w-4 h-4 mr-2" />
                  New Scan
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 3D Avatar Viewer */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>3D Body Avatar</span>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={selectedView === 'front' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedView('front')}
                    >
                      Front
                    </Button>
                    <Button
                      variant={selectedView === 'side' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedView('side')}
                    >
                      Side
                    </Button>
                    <Button
                      variant={selectedView === '3d' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedView('3d')}
                    >
                      3D
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gray-900 rounded-lg overflow-hidden">
                  {avatarGenerated ? (
                    <Avatar3DViewer view={selectedView} isScanning={isScanning} />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white">
                      <div className="text-center">
                        <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                        <p className="text-lg mb-2">No Avatar Generated</p>
                        <p className="text-sm text-gray-400">Start a motion capture scan to create your 3D avatar</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Analysis Panel */}
          <div className="space-y-6">
            {/* Posture Analysis */}
            <PostureAnalysis data={postureData} />
            
            {/* Body Metrics */}
            <BodyMetrics data={bodyMetrics} />
          </div>
        </div>

        {/* Detailed Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Strengths</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Excellent knee tracking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Good shoulder alignment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Balanced hip positioning</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                <span>Areas for Improvement</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Forward head posture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Spinal curvature needs attention</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span>Core stability could improve</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <span>Recommendations</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Neck stretching exercises</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Core strengthening routine</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Posture awareness training</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
