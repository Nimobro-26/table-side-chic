import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { UtensilsCrossed, LayoutDashboard, BookOpen, ShoppingBag, CalendarDays, User, LogOut, BarChart3, Users, Table2, ChefHat } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

const customerNav: NavItem[] = [
  { title: "Dashboard", url: "/customer/dashboard", icon: LayoutDashboard },
  { title: "Menu", url: "/customer/menu", icon: BookOpen },
  { title: "Orders", url: "/customer/orders", icon: ShoppingBag },
  { title: "Reservations", url: "/customer/reservations", icon: CalendarDays },
  { title: "Profile", url: "/customer/profile", icon: User },
];

const adminNav: NavItem[] = [
  { title: "Dashboard", url: "/admin/dashboard", icon: BarChart3 },
  { title: "Menu Management", url: "/admin/menu", icon: BookOpen },
  { title: "Table Management", url: "/admin/tables", icon: Table2 },
  { title: "Orders", url: "/customer/orders", icon: ShoppingBag },
  { title: "Customers", url: "#", icon: Users },
];

const staffNav: NavItem[] = [
  { title: "Order Dashboard", url: "/staff/dashboard", icon: ChefHat },
  { title: "Menu", url: "/staff/menu", icon: BookOpen },
];

const roleNavMap: Record<string, NavItem[]> = {
  customer: customerNav,
  admin: adminNav,
  staff: staffNav,
};

const roleLabelMap: Record<string, string> = {
  customer: "Customer Panel",
  admin: "Admin Panel",
  staff: "Staff Panel",
};

export default function DashboardSidebar({ role }: { role: string }) {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const items = roleNavMap[role] || customerNav;

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/60">
            {!collapsed && (
              <span className="flex items-center gap-2">
                <UtensilsCrossed className="h-4 w-4 text-sidebar-primary" />
                {roleLabelMap[role]}
              </span>
            )}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className="hover:bg-sidebar-accent"
                      activeClassName="bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/login" className="hover:bg-sidebar-accent text-sidebar-foreground/60">
                    <LogOut className="mr-2 h-4 w-4" />
                    {!collapsed && <span>Logout</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
