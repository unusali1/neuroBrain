import React from "react";
import { Icon } from "@iconify/react";

export default function IndustrySolutions() {
  const solutions = [
    {
      title: "Telecom Customer Support",
      description:
        "Handles customer inquiries, resolves issues, and provides quick telecom solutions via automated and human support.",
      icon: "hugeicons:telephone",
    },
    {
      title: "HR Chatbot & Agent",
      description:
        "Streamlines HR processes, assists in recruitment, answers employee queries, and improves communication.",
      icon: "ion:people-outline",
    },
    {
      title: "Travel Chatbot & Agent",
      description:
        "Simplifies travel bookings, itinerary planning, and customer assistance for seamless travel experiences.",
      icon: "healthicons:travel-alt",
    },
    {
      title: "Restaurant & Hotel Agent",
      description:
        "Manages reservations, menu recommendations, and customer inquiries for enhanced dining and lodging experiences.",
      icon: "ion:restaurant-outline",
    },
    {
      title: "Real Estate Chatbot & Agent",
      description:
        "Provides property listings, virtual tours, and instant responses to buyers and renters.",
      icon: "fluent-mdl2:real-estate",
    },
    {
      title: "Educational Chatbot & Agent",
      description:
        "Supports student queries, course recommendations, and administrative assistance for improved learning engagement.",
      icon: "streamline:quality-education",
    },
    {
      title: "eCommerce Chatbot & Agent",
      description:
        "Enhances shopping by offering product recommendations, order tracking, and customer support.",
      icon: "mdi-light:cart",
    },
    {
      title: "Government Chatbot & Agent",
      description:
        "Facilitates citizen inquiries, service requests, and information dissemination for better public services.",
      icon: "mingcute:government-fill",
    },
  ];

  return (
    <div
      className="py-20 px-6"
      // style={{
      //   backgroundImage: `url('/assets/industri.jpg')`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <h2 className="text-center text-4xl font-bold text-cyan-400 mb-12">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-2 sm:px-20">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white p-2 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow  hover:bg-slate-600 hover:text-white"
          >
            <div className="flex items-center p-4 justify-center w-16 h-16 mx-auto bg-cyan-100 rounded-full mb-4">
              <Icon
                icon={solution.icon}
                width={60}
                height={50}
                className="text-blue-600 mb-2"
              />
            </div>
            <h3 className="text-lg font-semibold text-center  mb-4">
              {solution.title}
            </h3>
            <p className="text-sm text-center  mb-4">{solution.description}</p>
            <div className="text-center">
              <a
                href="#"
                className="text-cyan-500 text-sm font-medium hover:underline"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
