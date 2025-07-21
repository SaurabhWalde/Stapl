
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import CoachDashboard from "./pages/CoachDashboard";
import ClientList from "./pages/coach/ClientList";
import RiskAlerts from "./pages/coach/RiskAlerts";
import Performance from "./pages/coach/Performance";
import Reports from "./pages/coach/Reports";
import Settings from "./pages/Settings";
import CoachSettings from "./pages/coach/Settings";
import Sensors from "./pages/coach/Sensors";
import MotionCapture from "./pages/MotionCapture";
import AvatarAnalysis from "./pages/AvatarAnalysis";
import WorkoutLibrary from "./pages/WorkoutLibrary";
import Progress from "./pages/Progress";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import NutritionStore from "./pages/NutritionStore";
import CoachNetwork from "./pages/CoachNetwork";
import SocialFeed from "./pages/SocialFeed";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="smartfit-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/workout-library" element={<WorkoutLibrary />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/help" element={<Help />} />
            <Route path="/coach" element={<CoachDashboard />} />
            <Route path="/coach/clients" element={<ClientList />} />
            <Route path="/coach/alerts" element={<RiskAlerts />} />
            <Route path="/coach/performance" element={<Performance />} />
            <Route path="/coach/reports" element={<Reports />} />
            <Route path="/coach/settings" element={<CoachSettings />} />
            <Route path="/coach/sensors" element={<Sensors />} />
            <Route path="/motion-capture" element={<MotionCapture />} />
            <Route path="/avatar-analysis" element={<AvatarAnalysis />} />
            <Route path="/nutrition-store" element={<NutritionStore />} />
            <Route path="/coach-network" element={<CoachNetwork />} />
            <Route path="/social-feed" element={<SocialFeed />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
