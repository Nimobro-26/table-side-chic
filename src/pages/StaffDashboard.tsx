import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import StatusBadge from "@/components/StatusBadge";
import { mockOrders, Order } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChefHat } from "lucide-react";
import { toast } from "sonner";

export default function StaffDashboard() {
  const [orders, setOrders] = useState<Order[]>(mockOrders.filter((o) => o.status !== "Delivered"));

  const updateStatus = (id: string, status: Order["status"]) => {
    setOrders((p) => p.map((o) => (o.id === id ? { ...o, status } : o)));
    toast.success(`Order ${id} marked as ${status}`);
  };

  return (
    <DashboardLayout role="staff">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <ChefHat className="h-7 w-7 text-primary" />
          <h1 className="text-2xl font-bold">Active Orders</h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <Card key={order.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{order.id}</CardTitle>
                  <StatusBadge status={order.status} />
                </div>
                <p className="text-sm text-muted-foreground">Table {order.tableNumber}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {order.items.map((item, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span>{item.name} x{item.qty}</span>
                      <span className="text-muted-foreground">${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between font-semibold border-t pt-2">
                  <span>Total</span>
                  <span className="text-primary">${order.total.toFixed(2)}</span>
                </div>
                <div className="flex gap-2">
                  {order.status === "Preparing" && (
                    <Button size="sm" className="flex-1" onClick={() => updateStatus(order.id, "Ready")}>Mark Ready</Button>
                  )}
                  {order.status === "Ready" && (
                    <Button size="sm" className="flex-1" onClick={() => updateStatus(order.id, "Served")}>Mark Served</Button>
                  )}
                  {order.status === "Served" && (
                    <Button size="sm" variant="outline" className="flex-1" disabled>Completed</Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
