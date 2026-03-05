

# Restaurant Management System — Implementation Plan

## Overview
A modern, responsive frontend web application for managing restaurant operations — ordering, reservations, billing, and role-based dashboards. Built as an academic DBMS project with sample data (no real backend).

## Design System
- **Primary:** Red (#E53935) / **Secondary:** Dark Gray (#1F2937) / **Background:** Light Gray (#F5F5F5) / **Cards:** White
- Clean sans-serif typography, card-based layout, smooth hover effects, rounded elements, shadows
- Restaurant-themed icons from Lucide

## Roles & Navigation
- **Public pages** → Top navbar (Home, Menu, Login, Register)
- **Customer/Admin/Staff dashboards** → Left sidebar navigation
- Login page with role dropdown redirects to the appropriate dashboard

---

## Pages to Build

### Public Pages
1. **Home Page** — Hero section, system modules (4 feature cards), active menu items grid, footer
2. **Login Page** — Email, password, role selector dropdown, redirect per role
3. **Registration Page** — Full name, email, phone, password, confirm password with validation
4. **Menu Catalog** — Category filter tabs (Main Course, Pizza, Burgers, Desserts, Drinks), food card grid with Add to Cart

### Customer Pages (sidebar layout)
5. **Customer Dashboard** — Welcome message, stat widgets (total orders, recent orders, upcoming reservation), popular menu items, recent orders list
6. **Shopping Cart / Order Page** — Item list with quantity controls, auto-calculated totals, Place Order button
7. **Table Reservation** — Reservation form (name, phone, date, time, guests), table availability visual (available/reserved status)
8. **Order History** — Table with Order ID, date, items, total, status badges (Preparing/Ready/Delivered)
9. **Digital Bill / Receipt** — Order summary with subtotal, tax, grand total, Download/Print buttons

### Admin Pages (sidebar layout)
10. **Admin Analytics Dashboard** — Stat cards (orders, customers, revenue, menu items), charts (weekly orders, popular dishes via Recharts), recent orders & reservations tables
11. **Menu Management** — Table with food item, category, price, status, edit/delete actions, Add Menu Item button
12. **Table Management** — Table list with number, capacity, status, reserve/free/edit actions

### Staff Pages (sidebar layout)
13. **Staff Order Dashboard** — Active order cards with table number, items, food images, status buttons (Mark Preparing / Ready / Served)

---

## Reusable Components
- **Navbar** (public top nav) & **DashboardSidebar** (role-aware sidebar)
- **FoodCard** — Image, name, price, Add to Cart
- **DashboardStatCard** — Icon, label, value widget
- **OrderTable** — Reusable table for order data
- **ReservationForm** — Date/time/guest picker
- **BillLayout** — Receipt-style bill display
- **StatusBadge** — Color-coded order status

## Data
All pages will use hardcoded sample data (menu items with placeholder images, mock orders, mock reservations) — no backend required.

## Routing
- `/` — Home
- `/login` — Login
- `/register` — Registration
- `/menu` — Menu Catalog
- `/cart` — Shopping Cart
- `/reserve` — Table Reservation
- `/customer/dashboard` — Customer Dashboard
- `/customer/orders` — Order History
- `/customer/bill/:id` — Digital Bill
- `/admin/dashboard` — Admin Analytics
- `/admin/menu` — Menu Management
- `/admin/tables` — Table Management
- `/staff/dashboard` — Staff Order Dashboard

## Responsive
All pages fully responsive for desktop, tablet, and mobile with collapsible sidebar on smaller screens.

