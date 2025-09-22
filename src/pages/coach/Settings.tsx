
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { CoachSidebar } from '@/components/coach/CoachSidebar';
import { CoachHeader } from '@/components/coach/CoachHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Settings as SettingsIcon, User, Bell, Shield, Database, Palette } from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    alerts: true,
    reports: true,
  });

  const [preferences, setPreferences] = useState({
    theme: 'light',
    language: 'en',
    timezone: 'UTC-5',
    autoSave: true,
  });

  const settingsCategories = [
    { id: 'profile', name: 'Profile Settings', icon: User, color: "from-gray-500 to-slate-500" },
    { id: 'notifications', name: 'Notifications', icon: Bell, color: "from-blue-500 to-cyan-500" },
    { id: 'security', name: 'Security', icon: Shield, color: "from-red-500 to-orange-500" },
    { id: 'data', name: 'Data Management', icon: Database, color: "from-green-500 to-emerald-500" },
    { id: 'appearance', name: 'Appearance', icon: Palette, color: "from-purple-500 to-pink-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <CoachSidebar />
          
          <div className="flex-1 flex flex-col">
            <CoachHeader />
            
            <main className="flex-1 p-6 space-y-6 overflow-auto">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
                  <p className="text-gray-600">Manage your account and application preferences</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge variant="secondary">Coach Account</Badge>
                  <Button>Save Changes</Button>
                </div>
              </div>

              {/* Settings Categories */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                {settingsCategories.map((category) => (
                  <Card key={category.id} className={`bg-gradient-to-r ${category.color} text-white cursor-pointer hover:shadow-lg transition-shadow`}>
                    <CardContent className="p-4 text-center">
                      <category.icon className="w-6 h-6 mx-auto mb-2" />
                      <p className="text-sm font-medium">{category.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Profile Settings */}
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-black">
                      <User className="w-5 h-5 text-gray-500" />
                      <span>Profile Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Full Name</label>
                      <Input defaultValue="Sarah Wilson" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                      <Input defaultValue="sarah.wilson@eliteperformance.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Organization</label>
                      <Input defaultValue="Elite Performance Center" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Role</label>
                      <Select defaultValue="head-coach">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="head-coach">Head Coach</SelectItem>
                          <SelectItem value="assistant-coach">Assistant Coach</SelectItem>
                          <SelectItem value="trainer">Trainer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                {/* Notification Settings */}
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-black">
                      <Bell className="w-5 h-5 text-blue-500" />
                      <span>Notification Preferences</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-gray-600">Receive updates via email</p>
                      </div>
                      <Switch 
                        checked={notifications.email}
                        onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, email: checked }))}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Push Notifications</p>
                        <p className="text-sm text-gray-600">Browser push notifications</p>
                      </div>
                      <Switch 
                        checked={notifications.push}
                        onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, push: checked }))}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Risk Alerts</p>
                        <p className="text-sm text-gray-600">Immediate alerts for high-risk situations</p>
                      </div>
                      <Switch 
                        checked={notifications.alerts}
                        onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, alerts: checked }))}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Weekly Reports</p>
                        <p className="text-sm text-gray-600">Automated weekly summary reports</p>
                      </div>
                      <Switch 
                        checked={notifications.reports}
                        onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, reports: checked }))}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Security Settings */}
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-black">
                      <Shield className="w-5 h-5 text-red-500" />
                      <span>Security Settings</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full">
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full">
                      Enable Two-Factor Authentication
                    </Button>
                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Last Login:</strong> Dec 12, 2024 at 9:15 AM from Chrome on Windows
                      </p>
                    </div>
                    <Button variant="destructive" className="w-full">
                      Log Out All Devices
                    </Button>
                  </CardContent>
                </Card>

                {/* Application Preferences */}
                <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2 text-black">
                      <Palette className="w-5 h-5 text-purple-500" />
                      <span>Application Preferences</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Theme</label>
                      <Select value={preferences.theme} onValueChange={(value) => setPreferences(prev => ({ ...prev, theme: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="auto">Auto</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Language</label>
                      <Select value={preferences.language} onValueChange={(value) => setPreferences(prev => ({ ...prev, language: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Timezone</label>
                      <Select value={preferences.timezone} onValueChange={(value) => setPreferences(prev => ({ ...prev, timezone: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="UTC-5">Eastern Time (UTC-5)</SelectItem>
                          <SelectItem value="UTC-6">Central Time (UTC-6)</SelectItem>
                          <SelectItem value="UTC-7">Mountain Time (UTC-7)</SelectItem>
                          <SelectItem value="UTC-8">Pacific Time (UTC-8)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Auto-save</p>
                        <p className="text-sm text-gray-600">Automatically save changes</p>
                      </div>
                      <Switch 
                        checked={preferences.autoSave}
                        onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, autoSave: checked }))}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Data Management */}
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-black">
                    <Database className="w-5 h-5 text-green-500" />
                    <span>Data Management</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg text-center">
                      <h4 className="font-semibold text-green-900">Export Data</h4>
                      <p className="text-sm text-green-700 mt-2">Download all your coaching data</p>
                      <Button variant="outline" size="sm" className="mt-3">
                        Export
                      </Button>
                    </div>
                    
                    <div className="p-4 bg-blue-50 rounded-lg text-center">
                      <h4 className="font-semibold text-blue-900">Backup Settings</h4>
                      <p className="text-sm text-blue-700 mt-2">Configure automatic backups</p>
                      <Button variant="outline" size="sm" className="mt-3">
                        Configure
                      </Button>
                    </div>
                    
                    <div className="p-4 bg-red-50 rounded-lg text-center">
                      <h4 className="font-semibold text-red-900">Delete Account</h4>
                      <p className="text-sm text-red-700 mt-2">Permanently delete your account</p>
                      <Button variant="destructive" size="sm" className="mt-3">
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Settings;
