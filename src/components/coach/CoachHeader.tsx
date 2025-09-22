
import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Badge } from '@/components/ui/badge';
import { Bell, User } from 'lucide-react';

export function CoachHeader() {
  const alertCount = 3;

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4 text-black">
          <SidebarTrigger />
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-black">Coach Sarah Wilson</h1>
              <p className="text-sm text-muted-foreground">Elite Performance Center</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <Badge variant="destructive" className="text-xs">
              {alertCount} Alerts
            </Badge>
          </div>
          
          <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-black hover:text-white">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            24 Athletes Active
          </Badge>
        </div>
      </div>
    </header>
  );
}
