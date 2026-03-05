import { useState } from "react";
import Navbar from "@/components/Navbar";
import FoodCard from "@/components/FoodCard";
import { menuItems, categories } from "@/data/mockData";

export default function MenuPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-2">Restaurant Menu</h1>
        <p className="text-muted-foreground mb-6">Browse our delicious menu items</p>

        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap mb-8">
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
    </div>
  );
}
