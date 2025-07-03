"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import LookingCustomChatBot from "@/app/_components/LookingCustomChatBot";

const Pricing = () => {
  const router = useRouter();

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Animation for buttons
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <div className="dark:bg-gray-900">
      {/* Header Section */}
      <motion.div
        className="flex flex-col items-center justify-center sm:mt-16 mt-8 px-4 py-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-[#06004A] dark:text-white">
          Choose the Right Plan for Your Business
        </h1>
        <p className="text-base lg:text-lg mt-4 text-gray-600 dark:text-gray-300 max-w-2xl">
          At NuroBrains Chatbot, we offer competitive pricing for our live chat and chatbot software platform with comprehensive features!
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <div className="flex flex-col sm:flex-row sm:justify-center sm:px-8 lg:px-24 sm:py-16 px-4 py-8 gap-8">
        {/* Starter Package */}
        <motion.div
          className="sm:w-1/3 w-full"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <Card className="relative overflow-hidden border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl bg-white dark:bg-gray-800 hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center text-center mb-4">
              <Icon
                icon="tabler:brain"
                width={60}
                height={60}
                className="text-blue-600 mb-2"
              />
              <h1 className="text-blue-700 dark:text-blue-300 text-2xl font-semibold">
                Starter Package
              </h1>
              <p className="text-sm text-gray-400">Basic</p>
              <h1 className="text-blue-700 dark:text-blue-300 text-3xl font-bold mt-2">***</h1>
            </CardHeader>

            <CardContent className="space-y-4 px-6">
              <hr className="border-gray-200 dark:border-gray-700" />
              {[
                "ChatBot Type: ChatBot",
                "Preferred Channel: 1",
                "AI Model: Moderately Optimized",
                "Voice Agent: No",
                "CRM Integration: No",
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Icon
                    icon="mdi:success-bold"
                    width={20}
                    height={20}
                    className="text-red-700 mr-2"
                  />
                  <p className="text-gray-600 dark:text-gray-300">{feature}</p>
                </div>
              ))}
            </CardContent>

            <CardFooter className="flex flex-col items-center mt-4 px-6">
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" className="w-full">
                <Button
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none transition duration-200"
                  onClick={() => router.push("/contact")}
                >
                  Start Free Trial
                </Button>
              </motion.div>
              <p className="text-sm text-gray-400 mt-2">15 Days Money Back Guarantee</p>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Essential Package */}
        <motion.div
          className="sm:w-1/3 w-full"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <Card className="relative overflow-hidden border-2 border-orange-500 rounded-2xl shadow-xl bg-white dark:bg-gray-800 hover:shadow-2xl transition-shadow duration-300">
            <p className="absolute w-full text-center text-lg font-bold top-0 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-t-2xl p-2 shadow-lg">
              Most Popular
            </p>
            <CardHeader className="flex flex-col items-center text-center mb-4 pt-12">
              <Icon
                icon="token:neuroni"
                width={60}
                height={60}
                className="text-blue-600 mb-2"
              />
              <h1 className="text-blue-700 dark:text-blue-300 text-2xl font-semibold">
                Essential Package
              </h1>
              <p className="text-sm text-gray-400">Standard</p>
              <h1 className="text-blue-700 dark:text-blue-300 text-3xl font-bold mt-2">***</h1>
            </CardHeader>

            <CardContent className="space-y-4 px-6">
              <hr className="border-gray-200 dark:border-gray-700" />
              {[
                "ChatBot Type: Advanced ChatBot",
                "Conversations: Unlimited",
                "Preferred Channels: Up to 3",
                "Model Optimization: Highly Optimized",
                "Voice Agent: No",
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Icon
                    icon="mdi:success-bold"
                    width={20}
                    height={20}
                    className="text-red-700 mr-2"
                  />
                  <p className="text-gray-600 dark:text-gray-300">{feature}</p>
                </div>
              ))}
            </CardContent>

            <CardFooter className="flex flex-col items-center mt-4 px-6">
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" className="w-full">
                <Button
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none transition duration-200"
                  onClick={() => router.push("/contact")}
                >
                  Get Started
                </Button>
              </motion.div>
              <p className="text-sm text-gray-400 mt-2">15 Days Money Back Guarantee</p>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Professional Package */}
        <motion.div
          className="sm:w-1/3 w-full"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <Card className="relative overflow-hidden border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl bg-white dark:bg-gray-800 hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center text-center mb-4">
              <Icon
                icon="pepicons-pencil:people"
                width={60}
                height={60}
                className="text-blue-600 mb-2"
              />
              <h1 className="text-blue-700 dark:text-blue-300 text-2xl font-semibold">
                Professional Package
              </h1>
              <p className="text-sm text-gray-400">Professional</p>
              <h1 className="text-blue-700 dark:text-blue-300 text-3xl font-bold mt-2">Custom Pricing</h1>
            </CardHeader>

            <CardContent className="space-y-4 px-6">
              <hr className="border-gray-200 dark:border-gray-700" />
              {[
                "ChatBot Type: Multi-Purpose AI Agent",
                "Conversations: Unlimited",
                "Preferred Channels: Up to 5",
                "Voice Agent: Yes",
                "CRM Integration: Yes",
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <Icon
                    icon="mdi:success-bold"
                    width warped={20}
                    height={20}
                    className="text-red-700 mr-2"
                  />
                  <p className="text-gray-600 dark:text-gray-300">{feature}</p>
                </div>
              ))}
            </CardContent>

            <CardFooter className="flex flex-col items-center mt-4 px-6">
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap" className="w-full">
                <Button
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none transition duration-200"
                  onClick={() => router.push("/contact")}
                >
                  Contact Us
                </Button>
              </motion.div>
              <p className="text-sm text-gray-400 mt-2">15 Days Money Back Guarantee</p>
            </CardFooter>
          </Card>
        </motion.div>
      </div>

      {/* Call to Action Section */}
      <LookingCustomChatBot />
    </div>
  );
};

export default Pricing;