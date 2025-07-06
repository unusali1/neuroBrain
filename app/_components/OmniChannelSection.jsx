"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

// Channel data with Iconify icons
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
   {
    icon: "ri:linkedin-fill",
    name: "Linkedin",
    color: "bg-gradient-to-br from-pink-500 to-yellow-500",
  },
  { icon: "cib:hubspot", name: "HubSpot", color: "bg-orange-500" },
];

// Animation variants for curved effect
const curveVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const OmniChannelSection = () => {
  const router = useRouter();

  return (
    <section
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-gray-900 px-4 sm:px-6"
      style={{
        backgroundImage: `url('/assets/ai.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment:"fixed"
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center py-20 text-center"
      >
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-12 max-w-4xl text-center font-['Inter'] font-extrabold text-black text-xl sm:text-3xl md:text-4xl lg:text-5xl bg-clip-text"
        >
          NeuroBrain’s Customer Agent integrates with 50+ omni-channels
        </motion.h2>

        {/* Icons */}
        <div className="relative flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-14">
          {channels.map((channel, index) => {
            const isLargeScreen = typeof window !== "undefined" && window.innerWidth >= 768;
            const angle = (index - (channels.length - 1) / 2) * 20;

            return (
              <motion.div
                key={channel.name}
                custom={index}
                variants={curveVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center px-4 sm:px-0"
                style={
                  typeof window !== "undefined" && window.innerWidth >= 768
                    ? {
                        transform: `rotate(${angle}deg) translateX(100px) rotate(-${angle}deg)`,
                        transformOrigin: "center bottom",
                      }
                    : {}
                }
              >
                <div
                  className={`p-4 sm:p-5 ${channel.color} rounded-full shadow-lg transition-transform hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900`}
                  role="img"
                  aria-label={`${channel.name} icon`}
                >
                  <Icon
                    icon={channel.icon}
                    className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-black"
                  />
                </div>
                <p className="mt-3 text-xs sm:text-sm md:text-base font-semibold text-black">
                  {channel.name}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/contact")}
          className="mt-12 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          aria-label="Build your first AI chatbot"
        >
          Build Your First AI
        </motion.button>
      </motion.div>

      {/* Background Wave */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-20"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="w-full h-full" viewBox="0 0 1440 320">
          <path
            fill="#3b82f6"
            fillOpacity="0.4"
            d="M0,160L80,186.7C160,213,320,267,480,266.7C640,267,800,213,960,186.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default OmniChannelSection;
