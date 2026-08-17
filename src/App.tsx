import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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
          {/* Legacy 301 Client-Side Redirects */}
          <Route path="/produtos/*" element={<Navigate to="/#mudas" replace />} />
          <Route path="/produto/*" element={<Navigate to="/#mudas" replace />} />
          <Route path="/produtos" element={<Navigate to="/#mudas" replace />} />
          <Route path="/produto" element={<Navigate to="/#mudas" replace />} />
          <Route path="/empresa" element={<Navigate to="/#sobre" replace />} />
          <Route path="/contato" element={<Navigate to="/#mudas" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
