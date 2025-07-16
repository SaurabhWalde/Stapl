
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import { 
  Activity, 
  Bluetooth, 
  Wifi, 
  Battery, 
  Plus, 
  Settings, 
  Zap,
  Heart,
  Scale,
  Watch,
  Smartphone,
  Dumbbell,
  Thermometer,
  Eye,
  Signal
} from 'lucide-react';

const Sensors = () => {
  const [connectedSensors, setConnectedSensors] = useState([
    {
      id: 1,
      name: "Force Deck Pro",
      type: "Force Platform",
      status: "connected",
      battery: 85,
      connection: "bluetooth",
      lastSync: "2 mins ago",
      icon: Dumbbell,
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 2,
      name: "Polar H10",
      type: "Heart Rate Monitor",
      status: "connected",
      battery: 62,
      connection: "bluetooth",
      lastSync: "1 min ago",
      icon: Heart,
      color: "from-red-500 to-pink-500"
    },
    {
      id: 3,
      name: "InBody 970",
      type: "Body Composition Scanner",
      status: "connected",
      battery: null,
      connection: "wifi",
      lastSync: "5 mins ago",
      icon: Scale,
      color: "from-green-500 to-emerald-500"
    }
  ]);

  const availableSensors = [
    {
      name: "Apple Watch Series 9",
      type: "Fitness Tracker",
      icon: Watch,
      color: "from-blue-500 to-cyan-500",
      compatibility: "iOS/Android"
    },
    {
      name: "WHOOP 4.0",
      type: "Recovery Tracker",
      icon: Activity,
      color: "from-orange-500 to-red-500",
      compatibility: "Universal"
    },
    {
      name: "Oura Ring Gen3",
      type: "Sleep & Recovery",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      compatibility: "Universal"
    },
    {
      name: "Garmin Venu 3",
      type: "GPS Fitness Watch",
      icon: Watch,
      color: "from-teal-500 to-green-500",
      compatibility: "Universal"
    },
    {
      name: "Fitbit Sense 2",
      type: "Health Tracker",
      icon: Heart,
      color: "from-indigo-500 to-blue-500",
      compatibility: "Universal"
    },
    {
      name: "DEXA Scanner",
      type: "Body Composition",
      icon: Eye,
      color: "from-gray-500 to-slate-500",
      compatibility: "Professional"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'bg-green-100 text-green-700';
      case 'connecting': return 'bg-yellow-100 text-yellow-700';
      case 'disconnected': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const toggleSensorConnection = (sensorId: number) => {
    setConnectedSensors(prev => 
      prev.map(sensor => 
        sensor.id === sensorId 
          ? { ...sensor, status: sensor.status === 'connected' ? 'disconnected' : 'connected' }
          : sensor
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Sensor Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage and monitor your connected fitness devices</p>
          </div>
          <Button className="bg-gradient-to-r from-slate-600 to-gray-600 hover:from-slate-700 hover:to-gray-700">
            <Plus className="w-4 h-4 mr-2" />
            Add New Sensor
          </Button>
        </div>

        {/* Connected Sensors Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Connected Devices</p>
                  <p className="text-3xl font-bold text-gray-900">{connectedSensors.filter(s => s.status === 'connected').length}</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Signal className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Monitoring</p>
                  <p className="text-3xl font-bold text-gray-900">24/7</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Data Points</p>
                  <p className="text-3xl font-bold text-gray-900">15.2K</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Connected Sensors */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Signal className="w-5 h-5" />
              <span>Connected Sensors</span>
            </CardTitle>
            <CardDescription>Manage your active sensor connections and monitor their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {connectedSensors.map((sensor) => {
                const IconComponent = sensor.icon;
                return (
                  <div key={sensor.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${sensor.color} rounded-lg flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{sensor.name}</h3>
                        <p className="text-sm text-gray-600">{sensor.type}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary" className={getStatusColor(sensor.status)}>
                            {sensor.status}
                          </Badge>
                          <span className="text-xs text-gray-500">Last sync: {sensor.lastSync}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      {sensor.battery && (
                        <div className="flex items-center space-x-2">
                          <Battery className="w-4 h-4 text-gray-500" />
                          <div className="w-16">
                            <Progress value={sensor.battery} className="h-2" />
                          </div>
                          <span className="text-sm text-gray-600">{sensor.battery}%</span>
                        </div>
                      )}
                      
                      <div className="flex items-center space-x-2">
                        {sensor.connection === 'bluetooth' ? (
                          <Bluetooth className="w-4 h-4 text-blue-500" />
                        ) : (
                          <Wifi className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                      
                      <Switch 
                        checked={sensor.status === 'connected'} 
                        onCheckedChange={() => toggleSensorConnection(sensor.id)}
                      />
                      
                      <Button variant="ghost" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Available Sensors */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Available Sensors</span>
            </CardTitle>
            <CardDescription>Discover and connect new fitness tracking devices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {availableSensors.map((sensor, index) => {
                const IconComponent = sensor.icon;
                return (
                  <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${sensor.color} rounded-lg flex items-center justify-center`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{sensor.name}</h4>
                          <p className="text-sm text-gray-600">{sensor.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {sensor.compatibility}
                        </Badge>
                        <Button size="sm" variant="outline">
                          Connect
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Sensors;
