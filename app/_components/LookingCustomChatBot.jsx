"use client"
import React from 'react'
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";


const LookingCustomChatBot = () => {
    const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  // Animation variants for button
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 20px rgba(249, 115, 22, 0.3)",
      transition: { duration: 0.3 },
    },
  };
  return (
     <div className="lg:px-20 mt-12 mb-16 sm:px-4 px-4">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="container mx-auto"
            >
              <Card className="py-12 px-6 sm:px-12 rounded-3xl shadow-2xl bg-gradient-to-br from-orange-100 via-white to-orange-50 overflow-hidden relative">
                {/* Background decorative element */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-200/20 to-transparent opacity-50 pointer-events-none" />
    
                <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
                  {/* Left Section */}
                  <motion.div variants={textVariants} className="flex-1">
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                      Looking for a <span className="text-orange-600">Custom AI Chatbot?</span>
                    </h2>
                    <p className="mt-4 text-gray-600 text-lg max-w-lg leading-relaxed">
                      We craft intelligent, goal-driven chatbot systems tailored to your
                      industry—perfect for lead generation, support automation, or customer engagement.
                    </p>
                  </motion.div>
    
                  {/* Middle Section */}
                  <motion.div
                    variants={textVariants}
                    className="flex-1 lg:block hidden"
                  >
                    <p className="text-base text-gray-600 font-semibold leading-relaxed">
                      Customize your AI-powered assistant to:
                    </p>
                    <ul className="mt-4 text-base text-gray-600 list-none space-y-3">
                      {[
                        "Automate 24/7 customer support",
                        "Generate and qualify leads",
                        "Integrate with your CRM and website",
                        "Support multiple languages and platforms",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        >
                          <span className="text-orange-500">✓</span> {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
    
                  {/* Right Section */}
                  <motion.div
                    className="flex-shrink-0 text-center"
                    variants={textVariants}
                  >
                    <motion.a
                      href="/contact"
                      className="inline-block bg-orange-600 text-white text-base sm:text-lg font-semibold py-4 px-8 rounded-full shadow-lg hover:bg-orange-700 transition duration-300"
                      variants={buttonVariants}
                      whileHover="hover"
                    >
                      Start Free Trial
                    </motion.a>
                    <p className="text-sm text-gray-500 mt-3">
                      No credit card required
                    </p>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
  )
}

export default LookingCustomChatBot