import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Inbox,
  MessageSquare,
  ClipboardList,
  BarChart2,
} from "lucide-react";

const menuItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/products", label: "Products", icon: Package },
  { path: "/inbox", label: "Inbox", icon: Inbox },
  { path: "/chat", label: "Chat", icon: MessageSquare },
  { path: "/orders", label: "Orders", icon: ClipboardList },
  { path: "/stock", label: "Stock", icon: BarChart2 },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-dashboard-primary">Admin Panel</h1>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-3 text-gray-600 hover:bg-dashboard-light hover:text-dashboard-primary transition-colors ${
                isActive ? "bg-dashboard-light text-dashboard-primary" : ""
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};