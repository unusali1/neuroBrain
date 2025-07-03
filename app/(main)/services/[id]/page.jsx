import { serviceData } from '@/Data/BlogsData';
import React from 'react';
import { notFound } from 'next/navigation';


const ServiceDetails = ({ params }) => {
  const serviceId = parseInt(params.id);
  const service = serviceData.find((item) => item.id === serviceId);

  if (!service) return notFound();

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
         
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">{service.title}</h1>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {service.description}
          </p>
        </div>

        {/* Key Features Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 border-b pb-4">
            🔍 Key Features & Benefits
          </h2>
          <div className="space-y-8">
            {service.details?.map((item, index) => {
              const [heading, rest] = item.split(':');
              const [summary, extra] = rest?.split('.') || [];
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <span className="inline-block w-3 h-3 bg-blue-600 rounded-full"></span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">{heading.trim()}</p>
                    <p className="text-gray-600">
                      {summary?.trim()}
                      {extra && '.' + extra}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white font-medium px-8 py-4 rounded-xl shadow-md"
          >
            🚀 Get Started with Our AI Solution
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
