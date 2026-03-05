import DashboardLayout from "@/components/DashboardLayout";
import StatusBadge from "@/components/StatusBadge";
import { mockOrders } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";

export default function OrderHistoryPage() {
  return (
    <DashboardLayout role="customer">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Order History</h1>
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockOrders.map((o) => (
                  <TableRow key={o.id}>
                    <TableCell className="font-medium">{o.id}</TableCell>
                    <TableCell>{o.date}</TableCell>
                    <TableCell className="max-w-[200px] truncate">{o.items.map((i) => `${i.name} x${i.qty}`).join(", ")}</TableCell>
                    <TableCell>${o.total.toFixed(2)}</TableCell>
                    <TableCell><StatusBadge status={o.status} /></TableCell>
                    <TableCell>
                      <Button asChild variant="ghost" size="sm">
                        <Link to={`/customer/bill/${o.id}`}><Eye className="h-4 w-4 mr-1" /> Bill</Link>
                      </Button>
                    </TableCell>
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
