import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Orarend from "./pages/Orarend";
import Berletek from "./pages/Berletek";
import Rolam from "./pages/Rolam";
import Kapcsolat from "./pages/Kapcsolat";
import Gyik from "./pages/Gyik";
import EdzesReszletek from "./pages/EdzesReszletek";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import MobileCallBar from "./components/MobileCallBar";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <MobileCallBar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/orarend" element={<Orarend />} />
            <Route path="/edzes/:slug" element={<EdzesReszletek />} />
            <Route path="/berletek" element={<Berletek />} />
            <Route path="/rolam" element={<Rolam />} />
            <Route path="/kapcsolat" element={<Kapcsolat />} />
            <Route path="/gyik" element={<Gyik />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
