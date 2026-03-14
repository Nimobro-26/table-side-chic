import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import StatusBadge from "@/components/StatusBadge";
import { restaurantTables } from "@/data/mockData";
import { CalendarDays, Users } from "lucide-react";
import { toast } from "sonner";

export default function CustomerReservationPage() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", guests: "" });
  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.time || !form.guests) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Reservation confirmed!");
    setForm({ name: "", phone: "", date: "", time: "", guests: "" });
  };

  return (
    <DashboardLayout role="customer">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Book Your Table</h1>
          <p className="text-muted-foreground">Reserve a table at our restaurant</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><CalendarDays className="h-5 w-5 text-primary" /> Reservation Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2"><Label>Name</Label><Input placeholder="Your name" value={form.name} onChange={(e) => update("name", e.target.value)} /></div>
                <div className="space-y-2"><Label>Phone</Label><Input type="tel" placeholder="(555) 123-4567" value={form.phone} onChange={(e) => update("phone", e.target.value)} /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2"><Label>Date</Label><Input type="date" value={form.date} onChange={(e) => update("date", e.target.value)} /></div>
                  <div className="space-y-2"><Label>Time</Label><Input type="time" value={form.time} onChange={(e) => update("time", e.target.value)} /></div>
                </div>
                <div className="space-y-2"><Label>Number of Guests</Label><Input type="number" min="1" max="20" placeholder="4" value={form.guests} onChange={(e) => update("guests", e.target.value)} /></div>
                <Button type="submit" className="w-full" size="lg">Confirm Reservation</Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Users className="h-5 w-5 text-primary" /> Table Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {restaurantTables.map((t) => (
                  <div key={t.id} className={`rounded-xl border p-4 text-center transition-colors ${
                    t.status === "Available" ? "bg-success/10 border-success/30" : t.status === "Reserved" ? "bg-warning/10 border-warning/30" : "bg-primary/10 border-primary/30"
                  }`}>
                    <p className="font-bold text-lg">T-{t.number}</p>
                    <p className="text-xs text-muted-foreground mb-2">{t.capacity} seats</p>
                    <StatusBadge status={t.status} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
