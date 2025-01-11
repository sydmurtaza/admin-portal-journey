import React from "react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import {
  Users,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  Package,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4500 },
  { name: "May", sales: 6000 },
  { name: "Jun", sales: 5500 },
];

const stats = [
  {
    title: "Total Users",
    value: "1,274",
    icon: Users,
    trend: "+12.5%",
    color: "text-dashboard-primary",
  },
  {
    title: "Total Orders",
    value: "843",
    icon: ShoppingBag,
    trend: "+8.2%",
    color: "text-dashboard-success",
  },
  {
    title: "Total Sales",
    value: "$45,678",
    icon: DollarSign,
    trend: "+15.3%",
    color: "text-dashboard-accent",
  },
  {
    title: "Pending Orders",
    value: "24",
    icon: Package,
    trend: "-2.1%",
    color: "text-dashboard-warning",
    link: "/orders?status=pending",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card
              key={stat.title}
              className={`p-6 cursor-pointer hover:shadow-lg transition-shadow ${
                stat.link ? "hover:bg-dashboard-light" : ""
              }`}
              onClick={() => stat.link && navigate(stat.link)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                </div>
                <div
                  className={`h-12 w-12 rounded-full flex items-center justify-center ${stat.color} bg-opacity-10`}
                >
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <TrendingUp
                  className={`h-4 w-4 mr-1 ${
                    stat.trend.startsWith("+")
                      ? "text-dashboard-success"
                      : "text-dashboard-error"
                  }`}
                />
                <span
                  className={`text-sm ${
                    stat.trend.startsWith("+")
                      ? "text-dashboard-success"
                      : "text-dashboard-error"
                  }`}
                >
                  {stat.trend} vs last month
                </span>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Sales Overview</h2>
          <select className="bg-dashboard-light px-4 py-2 rounded-md text-sm">
            <option>Last 6 months</option>
            <option>Last year</option>
            <option>All time</option>
          </select>
        </div>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#4318FF"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;