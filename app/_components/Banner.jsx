"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import heroImg from "../../public/assets/homeHero.png";
import chatImg from "../../public/assets/chatImg.webp";

const Banner = () => {
  const router = useRouter();

  return (
    <section className="relative bg-gradient-to-r from-gray-100 to-gray-200 py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 tracking-tight">
              AI-Powered Chatbot with Seamless Human Handover
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Boost service efficiency by 10X with AI-driven chatbots and seamless human agent handovers for smoother customer interactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 text-base font-semibold tracking-wide"
                onClick={() => router.push("/contact")}
                aria-label="Start a free trial"
              >
                Start Free Trial
              </Button>
              <Button
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg shadow-lg hover:bg-blue-50 hover:scale-105 transition-transform duration-300 text-base font-semibold tracking-wide"
                variant="outline"
                onClick={() => router.push("/contact")}
                aria-label="Book a demo"
              >
                Book a Demo
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src={heroImg}
                width={600}
                height={600}
                alt="AI Chatbot Hero Illustration"
                priority
                className="object-contain"
              />
              <div className="absolute -top-4 -right-4 sm:top-0 sm:right-0 lg:top-8 lg:right-12">
                <Image
                  src={chatImg}
                  width={100}
                  height={100}
                  alt="Chat Icon"
                  className="rounded-full shadow-md border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Background Decoration */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 320">
          <path
            fill="#3b82f6"
            fillOpacity="0.3"
            d="M0,160L80,186.7C160,213,320,267,480,266.7C640,267,800,213,960,186.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Banner;