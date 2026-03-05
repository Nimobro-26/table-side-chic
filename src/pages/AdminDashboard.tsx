import DashboardLayout from "@/components/DashboardLayout";
import DashboardStatCard from "@/components/DashboardStatCard";
import StatusBadge from "@/components/StatusBadge";
import { mockOrders, mockReservations, weeklyOrdersData, popularDishesData } from "@/data/mockData";
import { ShoppingBag, Users, DollarSign, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const COLORS = ["hsl(1,76%,55%)", "hsl(220,26%,14%)", "hsl(38,92%,50%)", "hsl(142,71%,45%)", "hsl(215,16%,47%)"];

export default function AdminDashboard() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Admin Analytics</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DashboardStatCard icon={ShoppingBag} label="Total Orders" value={405} trend="+12% this week" />
          <DashboardStatCard icon={Users} label="Total Customers" value={128} trend="+5 new" />
          <DashboardStatCard icon={DollarSign} label="Revenue" value="$12,450" trend="+8.2%" />
          <DashboardStatCard icon={BookOpen} label="Menu Items" value={16} />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle>Weekly Orders</CardTitle></CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={weeklyOrdersData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="orders" fill="hsl(1,76%,55%)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Popular Dishes</CardTitle></CardHeader>
            <CardContent className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={popularDishesData} dataKey="orders" nameKey="name" cx="50%" cy="50%" outerRadius={90} label={({ name }) => name}>
                    {popularDishesData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle>Recent Orders</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead><TableHead>Date</TableHead><TableHead>Total</TableHead><TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockOrders.map((o) => (
                    <TableRow key={o.id}>
                      <TableCell className="font-medium">{o.id}</TableCell>
                      <TableCell>{o.date}</TableCell>
                      <TableCell>${o.total.toFixed(2)}</TableCell>
                      <TableCell><StatusBadge status={o.status} /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>Recent Reservations</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead><TableHead>Date</TableHead><TableHead>Guests</TableHead><TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockReservations.map((r) => (
                    <TableRow key={r.id}>
                      <TableCell className="font-medium">{r.name}</TableCell>
                      <TableCell>{r.date} {r.time}</TableCell>
                      <TableCell>{r.guests}</TableCell>
                      <TableCell><StatusBadge status={r.status} /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
