"use client";
import React from "react";
import { Button } from "@/components/ui/button"; // Assuming you're using a UI library like Shadcn
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-24">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-orange-400 via-orange-500 to-pink-500 text-white py-12 sm:py-16 rounded-2xl shadow-xl relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1440 320">
              <path
                fill="#ffffff"
                d="M0,160L80,186.7C160,213,320,267,480,266.7C640,267,800,213,960,186.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              />
            </svg>
          </div>

          <div className="relative container mx-auto px-6 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Text */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                Boost Conversions <br />
                Enhance Support <br />
                Retain Customers
              </h2>
              <p className="mt-4 text-lg sm:text-xl text-orange-100 max-w-xl">
                Leverage our AI-powered chatbot to streamline customer interactions and drive business growth.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-100">
              <Button
                asChild
                className="px-8 py-4 bg-white text-orange-500 font-semibold rounded-full shadow-lg hover:bg-orange-50 hover:shadow-xl hover:scale-105 transition-transform duration-300 text-base"
              >
                <Link href="/contact" aria-label="Start a free trial">
                  Start Free Trial
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-orange-500 hover:shadow-xl hover:scale-105 transition-transform duration-300 text-base"
              >
                <Link href="/contact" aria-label="Book a demo">
                  Book a Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;