"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Icon } from "@iconify/react";
import heroImg from "../../public/assets/homeHero.webp";

// Steps with Iconify icons
const steps = [
  {
    icon: (
      <Icon
        icon="material-symbols-light:handshake-outline"
        width={24}
        height={24}
        className="text-white"
      />
    ),
    text: "Enhance Customer Experience",
  },
  {
    icon: (
      <Icon
        icon="streamline-pixel:money-payments-accounting-bill-money-1"
        width={24}
        height={24}
        className="text-white"
      />
    ),
    text: "Reducing Operational Cost",
  },
  {
    icon: (
      <Icon
        icon="streamline-ultimate:performance-increase"
        width={24}
        height={24}
        className="text-white"
      />
    ),
    text: "Increase Revenue",
  },
];

// Animation variants for fade-in and slide-in effects
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Banner = () => {
  const router = useRouter();

  return (
    <section className="relative bg-gradient-to-r bg-[#F3F4F6] py-2 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-xl sm:text-4xl lg:text-4xl font-extrabold leading-tight text-gray-900 tracking-tight font-sans">
              Automate Your Customer Support
            </h1>
            <h2 className="text-sm sm:text-xl lg:text-md text-indigo-600 font-semibold">
              <TypeAnimation
                sequence={[
                  "with AI chatbot and voice assistant for 24/7 support",
                  2000,
                  "to streamline customer interactions effortlessly",
                  2000,
                  "and boost satisfaction with instant responses",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>

            {/* Steps Section */}
            <div className="flex flex-col items-start space-y-6 px-6 sm:px-0 ">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-center relative"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {/* Line connector */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-5 top-full h-10 border-l-2 border-dashed border-indigo-400" />
                  )}
                  {/* Icon inside diamond */}
                  <div className="bg-indigo-500 p-2 rounded-md transform rotate-45 shadow-md mt-2">
                    <div className="-rotate-45">{step.icon}</div>
                  </div>
                  {/* Text */}
                  <div className="ml-4 text-gray-800 text-lg font-medium">
                    {step.text}
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
              Boost service efficiency by 10X with AI-driven chatbots and
              seamless human agent handovers for smoother customer interactions.
            </p>
            <div className="flex flex-row sm:flex-row gap-4 px-6 sm:px-0 justify-center lg:justify-start">
              <Button
                className="px-4 py-6 sm:px-8 sm:py-6 border-2 border-indigo-600 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg font-semibold"
                onClick={() => router.push("/contact")}
                aria-label="Start a free trial"
              >
                Start Free Trial
              </Button>
              <Button
                className="px-4 py-6 sm:px-8 sm:py-6 border-2 border-indigo-600 text-indigo-600 rounded-lg shadow-md hover:bg-indigo-50 hover:scale-105 transition-all duration-300 text-lg font-semibold"
                variant="outline"
                onClick={() => router.push("/contact")}
                aria-label="Book a demo"
              >
                Book a Demo
              </Button>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="mt-10 lg:mt-0 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex w-full max-w-md lg:max-w-xl justify-end">
              <Image
                src={heroImg}
                width={400}
                height={500}
                alt="AI Chatbot Hero Illustration"
                priority
                className="object-contain rounded-lg justify-end"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
