import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import WhyChooseUs from "./pages/WhyChooseUs";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import AkroTution from "./pages/verticals/AkroTution";
import AkroPlacement from "./pages/verticals/AkroPlacement";
import AkroHolidays from "./pages/verticals/AkroHolidays";
import AkroMind from "./pages/verticals/AkroMind";
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
        <Route path="/about" element={<About />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/verticals/akrotution" element={<AkroTution />} />
        <Route path="/verticals/akroplacement" element={<AkroPlacement />} />
        <Route path="/verticals/akroholidays" element={<AkroHolidays />} />
        <Route path="/verticals/akromind" element={<AkroMind />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;