import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const CustomersExperience = () => {
  return (
    <div className="mt-12 mb-12 flex justify-center  py-16">
      <div className="container px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          NeruBrains Chatbot Customers Experienced
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <Card className="w-full bg-white shadow-lg rounded-lg transition-transform hover:scale-105">
            <CardContent className="text-center py-6">
              <p className="text-4xl font-bold text-blue-600">60%</p>
              <p className="mt-4 text-gray-500">Increase in incoming queries</p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="w-full bg-white shadow-lg rounded-lg transition-transform hover:scale-105">
            <CardContent className="text-center py-6">
              <p className="text-4xl font-bold text-blue-600">10X</p>
              <p className="mt-4 text-gray-500">Faster response time</p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="w-full bg-white shadow-lg rounded-lg transition-transform hover:scale-105">
            <CardContent className="text-center py-6">
              <p className="text-4xl font-bold text-blue-600">35%</p>
              <p className="mt-4 text-gray-500">Less chat abandon rate</p>
            </CardContent>
          </Card>

          {/* Card 4 */}
          <Card className="w-full bg-white shadow-lg rounded-lg transition-transform hover:scale-105">
            <CardContent className="text-center py-6">
              <p className="text-4xl font-bold text-blue-600">33%</p>
              <p className="mt-4 text-gray-500">Reduction in operational cost</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomersExperience;
