import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users } from "lucide-react";

const mockCustomers = [
  { id: "C001", name: "John Doe", email: "john@example.com", phone: "(555) 123-4567", orders: 12, totalSpent: 345.80 },
  { id: "C002", name: "Jane Smith", email: "jane@example.com", phone: "(555) 234-5678", orders: 8, totalSpent: 210.50 },
  { id: "C003", name: "Bob Wilson", email: "bob@example.com", phone: "(555) 345-6789", orders: 15, totalSpent: 520.00 },
  { id: "C004", name: "Alice Brown", email: "alice@example.com", phone: "(555) 456-7890", orders: 5, totalSpent: 130.25 },
  { id: "C005", name: "Charlie Davis", email: "charlie@example.com", phone: "(555) 567-8901", orders: 20, totalSpent: 780.90 },
];

export default function AdminCustomersPage() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Users className="h-7 w-7 text-primary" />
          <h1 className="text-2xl font-bold">Customers</h1>
        </div>
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Total Spent</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockCustomers.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs">{c.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{c.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{c.email}</TableCell>
                    <TableCell>{c.phone}</TableCell>
                    <TableCell>{c.orders}</TableCell>
                    <TableCell>${c.totalSpent.toFixed(2)}</TableCell>
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
