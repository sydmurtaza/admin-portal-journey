import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit2, Trash2, Truck } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
  category: string;
  thumbnail: string;
}

const Products = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      return data.products as Product[];
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-dashboard-primary/90 to-dashboard-primary p-4 rounded-lg shadow-md">
        <div className="flex items-center gap-3 text-white">
          <Truck className="h-6 w-6" />
          <div className="space-y-1">
            <h2 className="font-semibold text-lg">Summer Special Offers! 🌞</h2>
            <p className="text-sm opacity-90">
              Enjoy FREE Home Delivery on all orders above $50 | Use code SUMMER23 for 10% off
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Products</h1>
        <Button>Add New Product</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-dashboard-primary font-bold">
                  ${product.price}
                </span>
                <span className="text-gray-500">Stock: {product.stock}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">{product.category}</p>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit2 className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 text-dashboard-error hover:text-dashboard-error"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;