import React from "react";
import { Bell, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="relative w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8 bg-dashboard-light border-0"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative">
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-dashboard-primary rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <span className="text-sm font-medium">Admin User</span>
          </div>
        </div>
      </div>
    </nav>
  );
};