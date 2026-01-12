import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { FavoritesProvider } from "@/contexts/FavoritesContext";
import LoginScreen from "@/components/LoginScreen";
import Layout from "@/components/Layout";
import Dashboard from "@/pages/Dashboard";
import MenuFlexible from "@/pages/MenuFlexible";
import MenusKcal from "@/pages/MenusKcal";
import Smoothies from "@/pages/Smoothies";
import Metabolismo from "@/pages/Metabolismo";
import Favoritos from "@/pages/Favoritos";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/" replace />;
  return <>{children}</>;
};

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="*" element={<LoginScreen />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/menu-flexible" element={<MenuFlexible />} />
        <Route path="/menus-kcal" element={<MenusKcal />} />
        <Route path="/smoothies" element={<Smoothies />} />
        <Route path="/metabolismo" element={<Metabolismo />} />
        <Route path="/keto" element={<MenuFlexible />} />
        <Route path="/alimentos-keto" element={<Metabolismo />} />
        <Route path="/detox" element={<Smoothies />} />
        <Route path="/cardio" element={<Metabolismo />} />
        <Route path="/diabetes" element={<Metabolismo />} />
        <Route path="/vegano" element={<Metabolismo />} />
        <Route path="/masa-muscular" element={<Metabolismo />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <FavoritesProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </FavoritesProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
