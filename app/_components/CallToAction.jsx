"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 xl:px-12">
      <motion.div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-r from-orange-400 via-orange-500 to-pink-500 text-white shadow-xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Background Decoration (Wave) */}
        <div
          className="absolute inset-0 opacity-20"
          aria-hidden="true"
        >
          <svg
            className="h-full w-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,160L80,186.7C160,213,320,267,480,266.7C640,267,800,213,960,186.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:flex-row lg:justify-between lg:px-8">
          {/* Left Text */}
          <motion.div
            className="text-center lg:text-left"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Boost Conversions <br />
              Enhance Support <br />
              Retain Customers
            </h2>
            <p className="mt-4 max-w-xl text-lg text-white/90 sm:text-xl">
              Leverage our AI-powered chatbot to streamline customer interactions
              and drive business growth.
            </p>
          </motion.div>

          {/* Right Buttons */}
          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            variants={itemVariants}
          >
            <Button
              asChild
              className="px-8 py-3 text-base font-semibold text-orange-500 bg-white rounded-full shadow-lg hover:bg-orange-50 hover:shadow-xl hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
            >
              <Link href="/contact" aria-label="Start a free trial">
                Start Free Trial
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="px-8 py-3 text-base font-semibold text-gray-600 border-2 border-white rounded-full shadow-lg hover:bg-white hover:text-orange-500 hover:shadow-xl hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
            >
              <Link href="/contact" aria-label="Book a demo">
                Book a Demo
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
