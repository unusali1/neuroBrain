"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import abroadMate from "../../public/assets/abroadMate.jpg";
import muftiAI from "../../public/assets/muftiAI.png";
import klyraAI from "../../public/assets/KlyraAI.png";
import doctorAI from "../../public/assets/doctorAI.png";
import tripAI from "../../public/assets/tripAI.webp";

const productList = [
  {
    id: 1,
    name: "AbroadMate",
    description:
      "AbroadMate handles student inquiries automatically, qualifies leads, and frees up your counselors to focus on high-value consultations. Built specifically for Bangladeshi education agencies.",
    link: "https://abroadmate-ai-landing.lovable.app/",
    image: abroadMate,
  },
  {
    id: 2,
    name: "Mufti AI",
    description:
      "A mufti is an Islamic scholar qualified to give legal opinions (fatwas) on points of Islamic law. Consulted on religious and personal matters, their opinions are highly respected within the Muslim community.",
    link: null,
    image: muftiAI,
  },
  {
    id: 3,
    name: "Klyra AI",
    description:
      "Shop authentic premium beauty & skincare brands in Bangladesh at unbeatable prices. Exclusively UK, USA, Korean, and Japanese premium cosmetics brands.",
    link: null,
    image: klyraAI,
  },
  {
    id: 4,
    name: "Doctor AI",
    description:
      "AI Diagnosis Tool — Simplify diagnosis with accurate health tracking and efficient AI-driven insights.",
    link: null,
    image: doctorAI,
  },
  {
    id: 5,
    name: "Trip AI",
    description:
      "Simplify travel planning with our all-in-one platform. Trip Planner AI consolidates hotel and flight details, manages bookings, and imports tips and guides.",
    link: null,
    image: tripAI,
  },
];

// Animation variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.3, ease: "easeOut" },
};

const AllProducts = () => {
  return (
    <section className="bg-gradient-to-b py-12 sm:py-20 px-6 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Grow Your Business with AI
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            NeuroBrain empowers businesses with AI-driven solutions to automate
            customer support, boost efficiency, and elevate service quality.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {productList.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariant}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              role="article"
              aria-labelledby={`product-title-${item.id}`}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.name} preview`}
                  width={200}
                  height={200}
                  className="contain w-full h-full group-hover:scale-110 transition-transform duration-500"
                  //   sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2
                  id={`product-title-${item.id}`}
                  className="text-2xl font-semibold text-gray-900 mb-3"
                >
                  {item.name}
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3 text-sm sm:text-base">
                  {item.description}
                </p>
                <div className="flex flex-row gap-4">
                  <motion.a
                    href={item.link || "#"}
                    target={item.link ? "_blank" : undefined}
                    rel={item.link ? "noopener noreferrer" : undefined}
                    whileHover={item.link ? buttonHover : {}}
                    className={`flex-1 text-center py-2.5 px-4 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2
    ${
      item.link
        ? "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500"
        : "bg-gray-300 text-gray-500 cursor-not-allowed"
    }`}
                    aria-disabled={!item.link}
                    aria-label={`See details for ${item.name}`}
                  >
                    See Details
                  </motion.a>

                  <motion.a
                    href={item.link || "#"}
                    target={item.link ? "_blank" : undefined}
                    rel={item.link ? "noopener noreferrer" : undefined}
                    whileHover={item.link ? buttonHover : {}}
                    className={`flex-1 text-center border py-2.5 px-4 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2
    ${
      item.link
        ? "border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500"
        : "border-gray-300 text-gray-400 cursor-not-allowed"
    }`}
                    aria-disabled={!item.link}
                    aria-label={`View live demo for ${item.name}`}
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AllProducts;
