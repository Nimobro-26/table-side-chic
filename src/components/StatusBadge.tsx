import { Badge } from "@/components/ui/badge";

const statusStyles: Record<string, string> = {
  Preparing: "bg-warning text-warning-foreground",
  Ready: "bg-primary text-primary-foreground",
  Delivered: "bg-success text-success-foreground",
  Served: "bg-success text-success-foreground",
  Available: "bg-success text-success-foreground",
  Reserved: "bg-warning text-warning-foreground",
  Occupied: "bg-primary text-primary-foreground",
  Confirmed: "bg-success text-success-foreground",
  Pending: "bg-warning text-warning-foreground",
  Cancelled: "bg-destructive text-destructive-foreground",
};

export default function StatusBadge({ status }: { status: string }) {
  return (
    <Badge className={statusStyles[status] || "bg-muted text-muted-foreground"}>
      {status}
    </Badge>
  );
}
