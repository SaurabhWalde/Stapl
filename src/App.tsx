
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CoachDashboard from "./pages/CoachDashboard";
import ClientList from "./pages/coach/ClientList";
import RiskAlerts from "./pages/coach/RiskAlerts";
import Performance from "./pages/coach/Performance";
import Reports from "./pages/coach/Reports";
import Settings from "./pages/coach/Settings";
import Sensors from "./pages/coach/Sensors";
import MotionCapture from "./pages/MotionCapture";
import AvatarAnalysis from "./pages/AvatarAnalysis";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/coach" element={<CoachDashboard />} />
          <Route path="/coach/clients" element={<ClientList />} />
          <Route path="/coach/alerts" element={<RiskAlerts />} />
          <Route path="/coach/performance" element={<Performance />} />
          <Route path="/coach/reports" element={<Reports />} />
          <Route path="/coach/settings" element={<Settings />} />
          <Route path="/coach/sensors" element={<Sensors />} />
          <Route path="/motion-capture" element={<MotionCapture />} />
          <Route path="/avatar-analysis" element={<AvatarAnalysis />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
