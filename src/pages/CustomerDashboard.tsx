import DashboardLayout from "@/components/DashboardLayout";
import DashboardStatCard from "@/components/DashboardStatCard";
import FoodCard from "@/components/FoodCard";
import StatusBadge from "@/components/StatusBadge";
import { mockOrders, menuItems } from "@/data/mockData";
import { ShoppingBag, Clock, CalendarDays, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function CustomerDashboard() {
  return (
    <DashboardLayout role="customer">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, Customer</h1>
          <p className="text-muted-foreground">Here's what's happening with your orders</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DashboardStatCard icon={ShoppingBag} label="Total Orders" value={12} trend="+3 this week" />
          <DashboardStatCard icon={Clock} label="Active Orders" value={2} />
          <DashboardStatCard icon={CalendarDays} label="Upcoming Reservation" value="Mar 6" />
          <DashboardStatCard icon={TrendingUp} label="Total Spent" value="$284.50" />
        </div>

        {/* Popular Items */}
        <Card>
          <CardHeader><CardTitle>Popular Menu Items</CardTitle></CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {menuItems.slice(0, 4).map((item) => (
                <FoodCard key={item.id} item={item} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card>
          <CardHeader><CardTitle>Recent Orders</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockOrders.slice(0, 3).map((o) => (
                  <TableRow key={o.id}>
                    <TableCell className="font-medium">{o.id}</TableCell>
                    <TableCell>{o.date}</TableCell>
                    <TableCell>{o.items.map((i) => i.name).join(", ")}</TableCell>
                    <TableCell>${o.total.toFixed(2)}</TableCell>
                    <TableCell><StatusBadge status={o.status} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
