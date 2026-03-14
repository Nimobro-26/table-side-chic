import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import ReservationPage from "./pages/ReservationPage";
import CustomerDashboard from "./pages/CustomerDashboard";
import CustomerMenuPage from "./pages/CustomerMenuPage";
import CustomerReservationPage from "./pages/CustomerReservationPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import ProfilePage from "./pages/ProfilePage";
import BillPage from "./pages/BillPage";
import AdminDashboard from "./pages/AdminDashboard";
import MenuManagement from "./pages/MenuManagement";
import TableManagement from "./pages/TableManagement";
import StaffDashboard from "./pages/StaffDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/reserve" element={<ReservationPage />} />
            <Route path="/customer/dashboard" element={<CustomerDashboard />} />
            <Route path="/customer/menu" element={<CustomerMenuPage />} />
            <Route path="/customer/orders" element={<OrderHistoryPage />} />
            <Route path="/customer/reservations" element={<CustomerReservationPage />} />
            <Route path="/customer/profile" element={<ProfilePage />} />
            <Route path="/customer/bill/:id" element={<BillPage />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/menu" element={<MenuManagement />} />
            <Route path="/admin/tables" element={<TableManagement />} />
            <Route path="/staff/dashboard" element={<StaffDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
