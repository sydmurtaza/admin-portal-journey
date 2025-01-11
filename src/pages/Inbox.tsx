import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Star, Trash2, Mail } from "lucide-react";

const messages = [
  {
    id: 1,
    sender: "John Supplier",
    subject: "Product Restock Request",
    message: "We need to restock our popular items...",
    date: "2024-02-20",
    read: false,
    starred: true,
  },
  {
    id: 2,
    sender: "Sarah Manager",
    subject: "Monthly Sales Report",
    message: "Here's the detailed sales report for...",
    date: "2024-02-19",
    read: true,
    starred: false,
  },
  // Add more messages as needed
];

const Inbox = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Inbox</h1>
        <Button>
          <Mail className="mr-2 h-4 w-4" />
          Compose
        </Button>
      </div>

      <div className="flex gap-6">
        <div className="w-64 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search emails..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dashboard-primary"
            />
          </div>

          <Card className="p-4">
            <h2 className="font-semibold mb-4">Filters</h2>
            <div className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                All
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Unread
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Starred
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Sent
              </Button>
            </div>
          </Card>
        </div>

        <div className="flex-1">
          <Card>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`p-4 border-b last:border-b-0 flex items-center gap-4 hover:bg-gray-50 cursor-pointer ${
                  !message.read ? "bg-blue-50" : ""
                }`}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className={`p-0 hover:bg-transparent ${
                    message.starred ? "text-yellow-400" : "text-gray-400"
                  }`}
                >
                  <Star className="h-5 w-5" />
                </Button>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3
                      className={`font-medium ${
                        !message.read ? "font-semibold" : ""
                      }`}
                    >
                      {message.sender}
                    </h3>
                    <span className="text-sm text-gray-500">{message.date}</span>
                  </div>
                  <p className="text-sm font-medium">{message.subject}</p>
                  <p className="text-sm text-gray-500 truncate">
                    {message.message}
                  </p>
                </div>
                <Button variant="ghost" size="sm" className="p-0">
                  <Trash2 className="h-4 w-4 text-gray-400" />
                </Button>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Inbox;