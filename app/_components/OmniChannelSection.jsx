"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // For animations

export default function OmniChannelSection() {
  const router = useRouter();

  const channels = [
    { icon: "tabler:world", name: "Website", color: "bg-blue-600" },
    { icon: "ic:outline-whatsapp", name: "WhatsApp", color: "bg-green-500" },
    {
      icon: "mingcute:messenger-line",
      name: "Messenger",
      color: "bg-gradient-to-br from-blue-500 to-pink-500",
    },
    {
      icon: "hugeicons:instagram",
      name: "Instagram",
      color: "bg-gradient-to-br from-pink-500 to-yellow-500",
    },
    { icon: "cib:hubspot", name: "HubSpot", color: "bg-orange-500" },
  ];

  return (
    <section
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-gray-900"
      style={{
        backgroundImage: `url('/assets/ai.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col items-center px-4 py-16 text-center"
      >
        {/* Channel Icons Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 md:gap-12">
          {channels.map((channel, index) => (
            <motion.div
              key={channel.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div
                className={`p-5 ${channel.color} rounded-full shadow-xl transition-transform hover:scale-110 focus:scale-110 focus:outline-none`}
                role="img"
                aria-label={`${channel.name} icon`}
              >
                <Icon
                  icon={channel.icon}
                  className="h-8 w-8 text-white sm:h-10 sm:w-10"
                />
              </div>
              <p className="mt-3 text-sm font-semibold text-white sm:text-lg">
                {channel.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 max-w-2xl text-xl font-bold text-white sm:text-2xl md:text-3xl"
        >
          NeuroBrain’s Customer Agent integrates with 50+ omni-channels.
        </motion.h2>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/contact")}
          className="mt-8 rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Build your first AI chatbot"
        >
          Build Your First AI
        </motion.button>
      </motion.div>
    </section>
  );
}