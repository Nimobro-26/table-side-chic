import Navbar from "@/components/Navbar";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart, total } = useCart();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (items.length === 0) { toast.error("Cart is empty"); return; }
    toast.success("Order placed successfully!");
    clearCart();
    navigate("/customer/orders");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <ShoppingBag className="h-16 w-16 text-muted-foreground/40" />
          <h2 className="text-2xl font-bold">Your cart is empty</h2>
          <Button asChild><Link to="/menu">Browse Menu</Link></Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="container py-8 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 p-4">
                  <img src={item.image} alt={item.name} className="h-16 w-16 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  <span className="font-semibold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</span>
                  <Button variant="ghost" size="icon" className="text-destructive" onClick={() => removeItem(item.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="mt-4">
          <CardContent className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-muted-foreground text-sm">Total Amount</p>
              <p className="text-3xl font-bold text-primary">${total.toFixed(2)}</p>
            </div>
            <Button size="lg" onClick={handlePlaceOrder} className="gap-2">
              <ShoppingBag className="h-5 w-5" /> Place Order
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
