
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { User, Activity, AlertTriangle, Eye } from 'lucide-react';

export function Avatar3DPanel() {
  const [selectedClient, setSelectedClient] = useState('John Smith');

  const clientData = {
    'John Smith': {
      postureScore: 82,
      riskLevel: 'low',
      lastScan: '2 days ago',
      issues: ['Forward head', 'Rounded shoulders']
    },
    'Sarah Johnson': {
      postureScore: 68,
      riskLevel: 'medium',
      lastScan: '1 week ago',
      issues: ['Pelvic tilt', 'Knee valgus']
    },
    'Mike Chen': {
      postureScore: 91,
      riskLevel: 'low',
      lastScan: '1 day ago',
      issues: []
    },
    'Emma Davis': {
      postureScore: 74,
      riskLevel: 'medium',
      lastScan: '3 days ago',
      issues: ['Spinal rotation', 'Hip imbalance']
    }
  };

  const clients = Object.keys(clientData);
  const currentData = clientData[selectedClient as keyof typeof clientData];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'high': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5 text-blue-500" />
            <span>3D Avatar Analysis</span>
          </div>
          <Button size="sm" variant="outline">
            <Eye className="w-4 h-4 mr-2" />
            View Full
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Client Selector */}
          <div className="flex flex-wrap gap-2">
            {clients.map((client) => (
              <Button
                key={client}
                variant={selectedClient === client ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedClient(client)}
                className="text-xs"
              >
                {client.split(' ')[0]}
              </Button>
            ))}
          </div>

          {/* Mini Avatar Display */}
          <div className="bg-gray-900 rounded-lg p-4 aspect-square flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-16 h-16 mx-auto mb-2 bg-blue-500 rounded-lg flex items-center justify-center">
                <User className="w-8 h-8" />
              </div>
              <div className="text-xs">3D Avatar</div>
              <div className="text-xs text-gray-400">{selectedClient}</div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Posture Score</span>
              <div className="flex items-center space-x-2">
                <span className="font-semibold">{currentData.postureScore}%</span>
                <Activity className="w-4 h-4 text-blue-500" />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm">Risk Level</span>
              <Badge variant="secondary" className={getRiskColor(currentData.riskLevel)}>
                {currentData.riskLevel.toUpperCase()}
              </Badge>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm">Last Scan</span>
              <span className="text-sm text-gray-600">{currentData.lastScan}</span>
            </div>

            {currentData.issues.length > 0 && (
              <div className="border-t pt-3">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm font-medium">Key Issues</span>
                </div>
                <ul className="space-y-1">
                  {currentData.issues.map((issue, index) => (
                    <li key={index} className="text-xs text-gray-600 flex items-center space-x-2">
                      <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
