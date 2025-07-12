
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  Users,
  AlertTriangle,
  BarChart3,
  ClipboardList,
  FileText,
  Settings,
  Activity,
  Home
} from 'lucide-react';

const menuItems = [
  { 
    title: "User Dashboard", 
    url: "/", 
    icon: Home,
    bgGradient: "from-blue-500/20 to-cyan-500/20",
    iconBg: "bg-gradient-to-r from-blue-500 to-cyan-500"
  },
  { 
    title: "Team Overview", 
    url: "/coach", 
    icon: Users,
    bgGradient: "from-purple-500/20 to-pink-500/20",
    iconBg: "bg-gradient-to-r from-purple-500 to-pink-500"
  },
  { 
    title: "Client List", 
    url: "/coach/clients", 
    icon: ClipboardList,
    bgGradient: "from-green-500/20 to-emerald-500/20",
    iconBg: "bg-gradient-to-r from-green-500 to-emerald-500"
  },
  { 
    title: "Risk Alerts", 
    url: "/coach/alerts", 
    icon: AlertTriangle,
    bgGradient: "from-red-500/20 to-orange-500/20",
    iconBg: "bg-gradient-to-r from-red-500 to-orange-500"
  },
  { 
    title: "Performance", 
    url: "/coach/performance", 
    icon: BarChart3,
    bgGradient: "from-indigo-500/20 to-blue-500/20",
    iconBg: "bg-gradient-to-r from-indigo-500 to-blue-500"
  },
  { 
    title: "Reports", 
    url: "/coach/reports", 
    icon: FileText,
    bgGradient: "from-teal-500/20 to-green-500/20",
    iconBg: "bg-gradient-to-r from-teal-500 to-green-500"
  },
  { 
    title: "Settings", 
    url: "/coach/settings", 
    icon: Settings,
    bgGradient: "from-gray-500/20 to-slate-500/20",
    iconBg: "bg-gradient-to-r from-gray-500 to-slate-500"
  },
];

export function CoachSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-60"} collapsible="icon">
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          {!isCollapsed && (
            <div>
              <h2 className="font-bold text-lg">SmartFit Coach</h2>
              <p className="text-sm text-muted-foreground">Team Dashboard</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `relative overflow-hidden rounded-lg transition-all duration-200 ${
                          isActive
                            ? `bg-gradient-to-r ${item.bgGradient} border border-white/20 shadow-lg`
                            : `hover:bg-gradient-to-r ${item.bgGradient} hover:border hover:border-white/10`
                        }`
                      }
                    >
                      <div className="flex items-center space-x-3 p-2">
                        <div className={`w-8 h-8 ${item.iconBg} rounded-md flex items-center justify-center shadow-sm`}>
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        {!isCollapsed && (
                          <div className="flex-1">
                            <span className="font-medium text-foreground">{item.title}</span>
                            <div className="flex items-center space-x-1 mt-0.5">
                              <div className="w-1 h-1 bg-current opacity-60 rounded-full"></div>
                              <div className="w-1 h-1 bg-current opacity-40 rounded-full"></div>
                              <div className="w-1 h-1 bg-current opacity-20 rounded-full"></div>
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Decorative background pattern */}
                      {!isCollapsed && (
                        <div className="absolute top-0 right-0 w-16 h-full opacity-10">
                          <div className="w-full h-full bg-gradient-to-l from-white/20 to-transparent"></div>
                          <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full"></div>
                          <div className="absolute bottom-2 right-3 w-1 h-1 bg-white/20 rounded-full"></div>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
