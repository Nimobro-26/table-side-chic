import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  label: string;
  value: string | number;
  trend?: string;
}

export default function DashboardStatCard({ icon: Icon, label, value, trend }: Props) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6 flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          {trend && <p className="text-xs text-success">{trend}</p>}
        </div>
      </CardContent>
    </Card>
  );
}
