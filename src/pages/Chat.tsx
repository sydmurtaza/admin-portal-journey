import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Send, Phone, Video, MoreVertical } from "lucide-react";

const contacts = [
  {
    id: 1,
    name: "Alice Johnson",
    lastMessage: "Sure, I'll check the inventory",
    time: "10:30 AM",
    online: true,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Bob Smith",
    lastMessage: "The order has been shipped",
    time: "9:15 AM",
    online: false,
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  // Add more contacts as needed
];

const messages = [
  {
    id: 1,
    sender: "Alice Johnson",
    message: "Hi, I need to check the stock for product #123",
    time: "10:30 AM",
    isSender: false,
  },
  {
    id: 2,
    sender: "You",
    message: "Let me check that for you right away",
    time: "10:31 AM",
    isSender: true,
  },
  // Add more messages as needed
];

const Chat = () => {
  return (
    <div className="h-[calc(100vh-12rem)]">
      <div className="grid grid-cols-12 h-full gap-6">
        <div className="col-span-4">
          <Card className="h-full flex flex-col">
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search contacts..."
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dashboard-primary"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className="p-4 border-b hover:bg-gray-50 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={contact.avatar}
                        alt={contact.name}
                        className="w-10 h-10 rounded-full"
                      />
                      {contact.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{contact.name}</h3>
                        <span className="text-xs text-gray-500">
                          {contact.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 truncate">
                        {contact.lastMessage}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="col-span-8">
          <Card className="h-full flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/150?img=1"
                  alt="Current chat"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-medium">Alice Johnson</h3>
                  <span className="text-sm text-green-500">Online</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.isSender ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.isSender
                        ? "bg-dashboard-primary text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    <p className="text-sm">{message.message}</p>
                    <span
                      className={`text-xs mt-1 block ${
                        message.isSender ? "text-white/80" : "text-gray-500"
                      }`}
                    >
                      {message.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dashboard-primary"
                />
                <Button>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat;