export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  status: "available" | "unavailable";
}

export interface Order {
  id: string;
  date: string;
  items: { name: string; qty: number; price: number }[];
  total: number;
  status: "Preparing" | "Ready" | "Delivered" | "Served";
  tableNumber?: number;
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  tableNumber: number;
  status: "Confirmed" | "Pending" | "Cancelled";
}

export interface RestaurantTable {
  id: number;
  number: number;
  capacity: number;
  status: "Available" | "Reserved" | "Occupied";
}

export const menuItems: MenuItem[] = [
  { id: 1, name: "Grilled Chicken", price: 15.99, category: "Main Course", image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop", status: "available" },
  { id: 2, name: "Beef Steak", price: 24.99, category: "Main Course", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop", status: "available" },
  { id: 3, name: "Salmon Fillet", price: 22.99, category: "Main Course", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop", status: "available" },
  { id: 4, name: "Margherita Pizza", price: 12.99, category: "Pizza", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop", status: "available" },
  { id: 5, name: "Pepperoni Pizza", price: 14.99, category: "Pizza", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop", status: "available" },
  { id: 6, name: "BBQ Chicken Pizza", price: 15.99, category: "Pizza", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop", status: "available" },
  { id: 7, name: "Classic Burger", price: 11.99, category: "Burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop", status: "available" },
  { id: 8, name: "Cheese Burger", price: 13.49, category: "Burgers", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop", status: "available" },
  { id: 9, name: "Veggie Burger", price: 10.99, category: "Burgers", image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=400&h=300&fit=crop", status: "available" },
  { id: 10, name: "Chocolate Cake", price: 7.99, category: "Desserts", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop", status: "available" },
  { id: 11, name: "Tiramisu", price: 8.99, category: "Desserts", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop", status: "available" },
  { id: 12, name: "Ice Cream Sundae", price: 6.99, category: "Desserts", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop", status: "available" },
  { id: 13, name: "Fresh Lemonade", price: 4.99, category: "Drinks", image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop", status: "available" },
  { id: 14, name: "Iced Coffee", price: 5.49, category: "Drinks", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop", status: "available" },
  { id: 15, name: "Mango Smoothie", price: 6.49, category: "Drinks", image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=300&fit=crop", status: "available" },
  { id: 16, name: "Pasta Carbonara", price: 14.99, category: "Main Course", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop", status: "available" },
];

export const mockOrders: Order[] = [
  { id: "ORD-001", date: "2026-03-01", items: [{ name: "Grilled Chicken", qty: 2, price: 15.99 }, { name: "Fresh Lemonade", qty: 2, price: 4.99 }], total: 41.96, status: "Delivered", tableNumber: 3 },
  { id: "ORD-002", date: "2026-03-02", items: [{ name: "Margherita Pizza", qty: 1, price: 12.99 }, { name: "Iced Coffee", qty: 1, price: 5.49 }], total: 18.48, status: "Delivered", tableNumber: 5 },
  { id: "ORD-003", date: "2026-03-03", items: [{ name: "Beef Steak", qty: 1, price: 24.99 }, { name: "Chocolate Cake", qty: 1, price: 7.99 }], total: 32.98, status: "Ready", tableNumber: 1 },
  { id: "ORD-004", date: "2026-03-04", items: [{ name: "Classic Burger", qty: 3, price: 11.99 }, { name: "Mango Smoothie", qty: 3, price: 6.49 }], total: 55.44, status: "Preparing", tableNumber: 7 },
  { id: "ORD-005", date: "2026-03-05", items: [{ name: "Pepperoni Pizza", qty: 2, price: 14.99 }, { name: "Tiramisu", qty: 2, price: 8.99 }], total: 47.96, status: "Preparing", tableNumber: 2 },
];

export const mockReservations: Reservation[] = [
  { id: "RES-001", name: "John Smith", phone: "555-0101", date: "2026-03-06", time: "19:00", guests: 4, tableNumber: 3, status: "Confirmed" },
  { id: "RES-002", name: "Emily Davis", phone: "555-0102", date: "2026-03-06", time: "20:00", guests: 2, tableNumber: 5, status: "Confirmed" },
  { id: "RES-003", name: "Michael Brown", phone: "555-0103", date: "2026-03-07", time: "18:30", guests: 6, tableNumber: 8, status: "Pending" },
  { id: "RES-004", name: "Sarah Wilson", phone: "555-0104", date: "2026-03-07", time: "19:30", guests: 3, tableNumber: 1, status: "Confirmed" },
];

export const restaurantTables: RestaurantTable[] = [
  { id: 1, number: 1, capacity: 2, status: "Available" },
  { id: 2, number: 2, capacity: 4, status: "Reserved" },
  { id: 3, number: 3, capacity: 4, status: "Occupied" },
  { id: 4, number: 4, capacity: 6, status: "Available" },
  { id: 5, number: 5, capacity: 2, status: "Reserved" },
  { id: 6, number: 6, capacity: 8, status: "Available" },
  { id: 7, number: 7, capacity: 4, status: "Occupied" },
  { id: 8, number: 8, capacity: 6, status: "Available" },
  { id: 9, number: 9, capacity: 2, status: "Available" },
  { id: 10, number: 10, capacity: 4, status: "Reserved" },
];

export const categories = ["All", "Main Course", "Pizza", "Burgers", "Desserts", "Drinks"];

export const weeklyOrdersData = [
  { day: "Mon", orders: 42 },
  { day: "Tue", orders: 38 },
  { day: "Wed", orders: 55 },
  { day: "Thu", orders: 47 },
  { day: "Fri", orders: 68 },
  { day: "Sat", orders: 82 },
  { day: "Sun", orders: 73 },
];

export const popularDishesData = [
  { name: "Margherita Pizza", orders: 145 },
  { name: "Classic Burger", orders: 132 },
  { name: "Grilled Chicken", orders: 118 },
  { name: "Beef Steak", orders: 96 },
  { name: "Pasta Carbonara", orders: 89 },
];
