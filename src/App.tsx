import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VirtualTours from "./pages/VirtualTours";
import InteractiveMapPage from "./pages/Map";
import CulturalCalendarPage from "./pages/Calendar";
import TravelPackagesPage from "./pages/Packages";
import FoodPage from "./pages/Food";
import GuidesPage from "./pages/Guides";
import CommunityPage from "./pages/Community";
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
          <Route path="/tours" element={<VirtualTours />} />
          <Route path="/map" element={<InteractiveMapPage />} />
          <Route path="/calendar" element={<CulturalCalendarPage />} />
          <Route path="/packages" element={<TravelPackagesPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
