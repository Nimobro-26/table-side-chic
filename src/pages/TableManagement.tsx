import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import StatusBadge from "@/components/StatusBadge";
import { restaurantTables as initialTables, RestaurantTable } from "@/data/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function TableManagement() {
  const [tables, setTables] = useState<RestaurantTable[]>(initialTables);

  const updateStatus = (id: number, status: RestaurantTable["status"]) => {
    setTables((p) => p.map((t) => (t.id === id ? { ...t, status } : t)));
    toast.success(`Table status updated to ${status}`);
  };

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Table Management</h1>
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Table #</TableHead><TableHead>Capacity</TableHead><TableHead>Status</TableHead><TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tables.map((t) => (
                  <TableRow key={t.id}>
                    <TableCell className="font-medium">Table {t.number}</TableCell>
                    <TableCell>{t.capacity} seats</TableCell>
                    <TableCell><StatusBadge status={t.status} /></TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        {t.status !== "Available" && <Button size="sm" variant="outline" onClick={() => updateStatus(t.id, "Available")}>Free</Button>}
                        {t.status !== "Reserved" && <Button size="sm" variant="outline" onClick={() => updateStatus(t.id, "Reserved")}>Reserve</Button>}
                        {t.status !== "Occupied" && <Button size="sm" variant="outline" onClick={() => updateStatus(t.id, "Occupied")}>Occupy</Button>}
                      </div>
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
