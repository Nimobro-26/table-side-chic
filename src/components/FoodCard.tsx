import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { MenuItem } from "@/data/mockData";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

export default function FoodCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();

  const handleAdd = () => {
    addItem(item);
    toast.success(`${item.name} added to cart`);
  };

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground">{item.name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{item.category}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">${item.price.toFixed(2)}</span>
          <Button size="sm" onClick={handleAdd} className="gap-1">
            <ShoppingCart className="h-4 w-4" /> Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
