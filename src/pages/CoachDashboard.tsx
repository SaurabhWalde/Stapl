
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { CoachSidebar } from '@/components/coach/CoachSidebar';
import { CoachHeader } from '@/components/coach/CoachHeader';
import { TeamOverview } from '@/components/coach/TeamOverview';
import { ClientListTable } from '@/components/coach/ClientListTable';
import { RiskAlertsPanel } from '@/components/coach/RiskAlertsPanel';
import { PerformanceLeaderboard } from '@/components/coach/PerformanceLeaderboard';
import { ProgramAssignmentPanel } from '@/components/coach/ProgramAssignmentPanel';
import { CustomReportBuilder } from '@/components/coach/CustomReportBuilder';
import { Avatar3DPanel } from '@/components/coach/Avatar3DPanel';

const CoachDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <CoachSidebar />
          
          <div className="flex-1 flex flex-col">
            <CoachHeader />
            
            <main className="flex-1 p-6 space-y-6 overflow-auto">
              {/* Team Health Overview */}
              <TeamOverview />
              
              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="space-y-6 xl:col-span-2">
                  <ClientListTable />
                  <PerformanceLeaderboard />
                </div>
                
                {/* Right Column */}
                <div className="space-y-6">
                  <Avatar3DPanel />
                  <RiskAlertsPanel />
                  <ProgramAssignmentPanel />
                </div>
              </div>
              
              {/* Report Builder */}
              <CustomReportBuilder />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default CoachDashboard;
