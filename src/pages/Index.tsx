import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import FoodCard from "@/components/FoodCard";
import { menuItems } from "@/data/mockData";
import { ShoppingBag, BookOpen, CalendarDays, Receipt, UtensilsCrossed, Phone, Mail, MapPin } from "lucide-react";

const modules = [
  { icon: ShoppingBag, title: "Order Management", desc: "Manage and track customer orders in real-time" },
  { icon: BookOpen, title: "Menu Management", desc: "Create and update your restaurant menu easily" },
  { icon: CalendarDays, title: "Table Reservations", desc: "Handle table bookings and availability" },
  { icon: Receipt, title: "Billing System", desc: "Generate digital bills and manage payments" },
];

export default function HomePage() {
  const featured = menuItems.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-secondary py-20 md:py-32">
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary mb-6">
            <UtensilsCrossed className="h-4 w-4" /> Restaurant Management System
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-4 leading-tight">
            Efficiently Manage Your<br />Restaurant Operations
          </h1>
          <p className="text-secondary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            A complete digital system for restaurant orders, reservations, billing, and management.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="text-base">
              <Link to="/menu">View Menu</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
              <Link to="/reserve">Reserve Table</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">System Modules</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((m) => (
            <Card key={m.title} className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-6 flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <m.icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-lg">{m.title}</h3>
                <p className="text-sm text-muted-foreground">{m.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Active Menu */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">Active Menu Items</h2>
            <Button asChild variant="outline">
              <Link to="/menu">View All</Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 mt-auto">
        <div className="container grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-3">
              <UtensilsCrossed className="h-5 w-5 text-primary" /> RestaurantMS
            </div>
            <p className="text-sm text-secondary-foreground/60">A complete restaurant management system for modern dining operations.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm text-secondary-foreground/70">
              <Link to="/menu" className="block hover:text-primary">Menu</Link>
              <Link to="/reserve" className="block hover:text-primary">Reservations</Link>
              <Link to="/login" className="block hover:text-primary">Login</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <div className="space-y-2 text-sm text-secondary-foreground/70">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Restaurant St, Food City</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> (555) 123-4567</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@restaurantms.com</p>
            </div>
          </div>
        </div>
        <div className="container mt-8 pt-6 border-t border-secondary-foreground/10 text-center text-xs text-secondary-foreground/40">
          © 2026 RestaurantMS. DBMS Academic Project.
        </div>
      </footer>
    </div>
  );
}
