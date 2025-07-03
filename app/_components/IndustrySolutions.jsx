"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function IndustrySolutions() {
 
  const router = useRouter();

  const solutions = [
    {
      id : 1,
      title: "Telecom Customer Support",
      description:
        "Resolve customer issues and inquiries in real-time through smart automation and hybrid human-AI support.",
      icon: "hugeicons:telephone",
    },
    {
      id : 2,
      title: "HR Chatbot & Agent",
      description:
        "Automate hiring, onboarding, and employee query resolution to streamline HR operations.",
      icon: "ion:people-outline",
    },
    {
      id : 3,
      title: "Travel Chatbot & Agent",
      description:
        "Manage bookings, suggest travel plans, and offer 24/7 support for travelers globally.",
      icon: "healthicons:travel-alt",
    },
    {
      id : 4,
      title: "Restaurant & Hotel Agent",
      description:
        "Handle reservations, suggest menus, and respond to guest inquiries—boosting customer satisfaction.",
      icon: "ion:restaurant-outline",
    },
    {
      id : 5,
      title: "Real Estate Chatbot & Agent",
      description:
        "Show property listings, schedule viewings, and answer queries instantly with smart automation.",
      icon: "fluent-mdl2:real-estate",
    },
    {
      id : 6,
      title: "Educational Chatbot & Agent",
      description:
        "Provide academic assistance, enrollment support, and answer student inquiries seamlessly.",
      icon: "streamline:quality-education",
    },
    {
      id : 7,
      title: "eCommerce Chatbot & Agent",
      description:
        "Guide customers, track orders, recommend products, and handle post-sale queries.",
      icon: "mdi-light:cart",
    },
    {
      id : 8,
      title: "Government Chatbot & Agent",
      description:
        "Offer instant citizen support, automate service requests, and deliver public information efficiently.",
      icon: "mingcute:government-fill",
    },
  ];

  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1, // Staggered animation for each card
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.3,
      },
    },
  };

  // Animation for the section heading
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.1)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Industry Solutions
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover how our AI-powered agents revolutionize operations across industries with seamless automation and support.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-2 sm:px-8">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            variants={cardVariants}
            onClick={()=>router.push(`/services/${solution.id}`)}
            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-cyan-600 hover:text-white relative overflow-hidden"
          >
            {/* Card Background Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-500 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-cyan-100 group-hover:bg-white rounded-full mb-6 transition-colors duration-300">
              <Icon
                icon={solution.icon}
                width={40}
                height={40}
                className="text-cyan-500 group-hover:text-cyan-700 transition-colors duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 tracking-tight">
              {solution.title}
            </h3>
            <p className="text-sm text-center mb-4 leading-relaxed">
              {solution.description}
            </p>
            <div className="text-center">
              <a
               href={`/services/${solution.id}`}
                className="text-cyan-500 group-hover:text-white text-sm font-medium underline underline-offset-4 transition-colors duration-300 hover:text-cyan-300"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}