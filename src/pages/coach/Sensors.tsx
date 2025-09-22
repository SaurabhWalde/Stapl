import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { CoachSidebar } from '@/components/coach/CoachSidebar';
import { CoachHeader } from '@/components/coach/CoachHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import { 
  Wifi, 
  Battery, 
  Bluetooth, 
  Activity, 
  Zap,
  Settings,
  AlertTriangle,
  CheckCircle,
  Clock,
  Signal
} from 'lucide-react';

interface Sensor {
  id: string;
  name: string;
  type: string;
  connected: boolean;
  battery: number;
  connectionType: 'bluetooth' | 'wifi' | 'usb';
  status: 'active' | 'idle' | 'error';
  lastSync: string;
  image: string;
}

const Sensors = () => {
  const [sensors, setSensors] = useState<Sensor[]>([
    {
      id: '1',
      name: 'Force Deck Pro',
      type: 'Force Platform',
      connected: true,
      battery: 85,
      connectionType: 'wifi',
      status: 'active',
      lastSync: '2 min ago',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f'
    },
    {
      id: '2',
      name: 'Polar H10',
      type: 'Heart Rate Monitor',
      connected: true,
      battery: 72,
      connectionType: 'bluetooth',
      status: 'active',
      lastSync: '1 min ago',
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5d'
    },
    {
      id: '3',
      name: 'InBody 970',
      type: 'Body Composition',
      connected: false,
      battery: 0,
      connectionType: 'wifi',
      status: 'idle',
      lastSync: '2 hours ago',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56'
    },
    {
      id: '4',
      name: 'Apple Watch Series 9',
      type: 'Fitness Tracker',
      connected: true,
      battery: 64,
      connectionType: 'bluetooth',
      status: 'active',
      lastSync: 'Just now',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256'
    },
    {
      id: '5',
      name: 'WHOOP 4.0',
      type: 'Recovery Tracker',
      connected: true,
      battery: 91,
      connectionType: 'bluetooth',
      status: 'active',
      lastSync: '30 sec ago',
      image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288'
    },
    {
      id: '6',
      name: 'Oura Ring Gen3',
      type: 'Sleep & Recovery',
      connected: false,
      battery: 45,
      connectionType: 'bluetooth',
      status: 'error',
      lastSync: '1 day ago',
      image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf'
    }
  ]);

  const toggleConnection = (id: string) => {
    setSensors(sensors.map(sensor => 
      sensor.id === id 
        ? { ...sensor, connected: !sensor.connected, status: !sensor.connected ? 'active' : 'idle' }
        : sensor
    ));
  };

  const getConnectionIcon = (type: string) => {
    switch (type) {
      case 'bluetooth': return <Bluetooth className="w-4 h-4 text-black" />;
      case 'wifi': return <Wifi className="w-4 h-4 text-black" />;
      case 'usb': return <Zap className="w-4 h-4" />;
      default: return <Signal className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'idle': return 'bg-yellow-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const connectedSensors = sensors.filter(s => s.connected).length;
  const activeSensors = sensors.filter(s => s.status === 'active').length;
  const avgBattery = Math.round(sensors.reduce((acc, s) => acc + s.battery, 0) / sensors.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Wrap the dashboard with SidebarProvider for sidebar layout */}
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          {/* Left Sidebar */}
          <CoachSidebar />

          {/* Right side content area */}
          <div className="flex-1 flex flex-col">
            {/* Top Header */}
            <CoachHeader />

            {/* Main Content */}
            <main className="flex-1 p-6 space-y-6 overflow-auto relative">
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-8 -left-8 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 -right-12 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute -bottom-12 left-1/4 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
              </div>

              <div className="space-y-6 relative">
                {/* Header */}
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">Sensors Dashboard</h1>
                  <p className="text-gray-600 text-lg">Monitor and manage all your connected fitness devices</p>
                </div>

                {/* Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:shadow-xl transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2 text-green-900">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          </div>
                          <span>Connected Devices</span>
                        </div>
                        <span className="text-2xl font-bold text-green-600">{connectedSensors}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">of {sensors.length} total devices</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:shadow-xl transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2 text-blue-900">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Activity className="w-4 h-4 text-blue-600" />
                          </div>
                          <span>Active Sensors</span>
                        </div>
                        <span className="text-2xl font-bold text-blue-600">{activeSensors}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Currently monitoring</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:shadow-xl transition-shadow">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2 text-yellow-900">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                            <Battery className="w-4 h-4 text-yellow-600" />
                          </div>
                          <span>Avg Battery</span>
                        </div>
                        <span className="text-2xl font-bold text-yellow-600">{avgBattery}%</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress value={avgBattery} className="h-2" />
                    </CardContent>
                  </Card>
                </div>

                {/* Sensors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sensors.map((sensor) => (
                    <Card key={sensor.id} className="border-0 shadow-lg bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between text-black">
                          <div className="flex items-center space-x-3">
                            <div className="relative">
                              <img 
                                src={sensor.image} 
                                alt={sensor.name}
                                className="w-12 h-12 rounded-lg object-cover"
                              />
                              <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${getStatusColor(sensor.status)} border-2 border-white`}></div>
                            </div>
                            <div>
                              <CardTitle className="text-lg">{sensor.name}</CardTitle>
                              <p className="text-sm text-muted-foreground">{sensor.type}</p>
                            </div>
                          </div>
                          <Switch 
                            checked={sensor.connected} 
                            onCheckedChange={() => toggleConnection(sensor.id)}
                          />
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        {/* Connection Status */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {getConnectionIcon(sensor.connectionType)}
                            <span className="text-sm capitalize text-black">{sensor.connectionType}</span>
                          </div>
                          <Badge variant={sensor.connected ? "default" : "secondary"}>
                            {sensor.connected ? "Connected" : "Disconnected"}
                          </Badge>
                        </div>

                        {/* Battery Level */}
                        {sensor.connected && (
                          <div className="space-y-2 text-black">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Battery className="w-4 h-4" />
                                <span className="text-sm">Battery</span>
                              </div>
                              <span className="text-sm font-medium">{sensor.battery}%</span>
                            </div>
                            <Progress value={sensor.battery} className="h-2" />
                          </div>
                        )}

                        {/* Last Sync */}
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>Last sync</span>
                          </div>
                          <span>{sensor.lastSync}</span>
                        </div>

                        {/* Actions */}
                        <div className="flex space-x-2 pt-2">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Settings className="w-4 h-4 mr-2" />
                            Settings
                          </Button>
                          {sensor.status === 'error' && (
                            <Button size="sm" variant="destructive" className="flex-1">
                              <AlertTriangle className="w-4 h-4 mr-2" />
                              Fix
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Add New Sensor */}
                <Card className="border-2 border-dashed border-gray-300 bg-white/40 backdrop-blur-sm hover:border-blue-400 transition-colors cursor-pointer">
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 hover:scale-110 transition-transform">
                      <Activity className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Add New Sensor</h3>
                    <p className="text-gray-600 text-center mb-4">Connect a new fitness device to expand your monitoring capabilities</p>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Zap className="w-4 h-4 mr-2" />
                      Scan for Devices
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Sensors;
