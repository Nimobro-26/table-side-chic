import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import FoodCard from "@/components/FoodCard";
import { menuItems, categories } from "@/data/mockData";

export default function CustomerMenuPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <DashboardLayout role="customer">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Restaurant Menu</h1>
          <p className="text-muted-foreground">Browse our delicious menu items</p>
        </div>

        <div className="flex gap-2 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                active === c ? "bg-primary text-primary-foreground" : "bg-card text-foreground hover:bg-muted border"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
