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

const Pricing = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex flex-col items-center justify-center sm:mt-16 mt-8 px-4 py-4 ">
        <h1 className="text-3xl lg:text-4xl font-bold leading-relaxed text-[#06004A]">
          Choose Right Plan for Your Business
        </h1>
        <p className="text-base lg:text-base mt-4  text-[#06004A]">
          At NuroBrains Chatbot, we offer very competitive pricing for our live
          chat and chatbot software platform that comes with comprehensive
          features.!
        </p>
      </div>

      <div className="flex sm:justify-between sm:px-24 sm:py-24 px-4 py-8 sm:flex-row flex-col">
        <Card className="mt-12 sm:mb-0 mb-12 sm:w-auto w-full border rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800">
          <CardHeader className="flex flex-col items-center text-center mb-4">
            <Icon
              icon="tabler:brain"
              width={60}
              height={60}
              className="text-blue-600 mb-2"
            />
            <h1 className="text-blue-700 text-2xl font-semibold">
              Starter Package
            </h1>
            <p className="text-sm text-gray-400">Basic</p>
            <h1 className="text-blue-700 text-3xl font-bold mt-2">$499</h1>
          </CardHeader>

          <CardContent className="space-y-3">
            <hr className="border-gray-200 dark:border-gray-700" />
            <div className="flex items-center">
              <Icon
                icon="mdi:success-bold"
                width={20}
                height={20}
                className="text-red-700 mr-2"
              />
              <p className="text-gray-600 dark:text-gray-300">
                ChatBot Type: ChatBot
              </p>
            </div>
            <div className="flex items-center">
              <Icon
                icon="mdi:success-bold"
                width={20}
                height={20}
                className="text-red-700 mr-2"
              />
              <p className="text-gray-600 dark:text-gray-300">
                Preferred Channel: 1
              </p>
            </div>
            <div className="flex items-center">
              <Icon
                icon="mdi:success-bold"
                width={20}
                height={20}
                className="text-red-700 mr-2"
              />
              <p className="text-gray-600 dark:text-gray-300">
                AI Model: Moderately Optimized
              </p>
            </div>
            <div className="flex items-center">
              <Icon
                icon="mdi:success-bold"
                width={20}
                height={20}
                className="text-red-700 mr-2"
              />
              <p className="text-gray-600 dark:text-gray-300">
                Voice Agent: No
              </p>
            </div>
            <div className="flex items-center">
              <Icon
                icon="mdi:success-bold"
                width={20}
                height={20}
                className="text-red-700 mr-2"
              />
              <p className="text-gray-600 dark:text-gray-300">
                CRM Integration: No
              </p>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col items-center mt-4">
            <Button
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none transition"
              onClick={() => router.push("/contact")}
            >
              Start Free Trial
            </Button>
            <p className="text-sm text-gray-400 mt-2">
              15 Days Money Back Guarantee
            </p>
          </CardFooter>
        </Card>

        <Card className="relative mb-12 border rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800">
          <CardHeader className="flex flex-col items-center text-center mb-4">
            <p className="absolute w-64 text-lg font-bold top-0 bg-gradient-to-r from-orange-400 via-orange-500 to-pink-500 text-white rounded-bl-lg rounded-br-lg p-2 shadow-lg">
              Most Popular
            </p>

            <Icon
              icon="token:neuroni"
              width={60}
              height={60}
              className="text-blue-600 mb-2"
            />
            <h1 className="text-blue-700 text-2xl font-semibold">
              Essential Package
            </h1>
            <p className="text-sm text-gray-400">Standard</p>
            <h1 className="text-blue-700 text-3xl font-bold mt-2">$999</h1>
          </CardHeader>

          <CardContent className="space-y-3">
            <hr className="border-gray-200 dark:border-gray-700" />
            <div className="flex items-center">
              <Icon
                icon="mdi:success-bold"
                width={20}
                height={20}
                className="text-red-700 mr-2"
              />
              <p className="text-gray-600 dark:text-gray-300">
                ChatBot Type: Advanced ChatBot
              </p>
            </div>
            <div className="flex items-center">
              <Icon
                icon="mdi:success-bold"
                width={20}
                height={20}
                className="text-red-700 mr-2"
              />
              <p className="text-gray-600 dark:text-gray-300">
                Conversations: Unlimited
              </p>
            </div>
            <div className="flex items-center">
              <Icon
                icon="mdi:success-bold"
                width={20}
                height={20}
                className="text-red-700 mr-2"
              />
              <p className="text-gray-600 dark:text-gray-300">
                Preferred Channels: Up to 3
              </p>
            </div>
            <div className="flex items-center">
              <Icon
                icon="mdi:success-bold"
                width={20}
                height={20}
                className="text-red-700 mr-2"
              />
              <p className="text-gray-600 dark:text-gray-300">
                Model Optimization: Highly Optimized
              </p>
            </div>
            <div className="flex items-center">
              <Icon
                icon="mdi:success-bold"
                width={20}
                height={20}
                className="text-red-700 mr-2"
              />
              <p className="text-gray-600 dark:text-gray-300">
                Voice Agent: No
              </p>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col items-center mt-4">
            <Button
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none transition"
              onClick={() => router.push("/contact")}
            >
              Get Start
            </Button>
            <p className="text-sm text-gray-400 mt-2">
              15 Days Money Back Guarantee
            </p>
          </CardFooter>
        </Card>

        <Card className=" mt-12 border rounded-lg shadow-lg p-6 bg-white dark:bg-gray-800">
          <CardHeader className="flex flex-col items-center text-center mb-4">
            <Icon
              icon="pepicons-pencil:people"
              width={60}
              height={60}
              className="text-blue-600 mb-2"
            />
            <h1 className="text-blue-700 text-2xl font-semibold">
              Professional Package
            </h1>
            <p className="text-sm text-gray-400">Professional</p>
            <h1 className="text-blue-700 text-xl font-bold mt-2">
              Custom pricing{" "}
            </h1>
          </CardHeader>

          <CardContent className="space-y-3">
            <hr className="border-gray-200 dark:border-gray-700" />
            <div className="flex items-center">
              <Icon
                icon="mdi:success-bold"
                width={20}
                height={20}
                className="text-red-700 mr-2"
              />
              <p className="text-gray-600 dark:text-gray-300">
                ChatBot Type: Multi-Purpose AI Agent
              </p>
            </div>
            <div className="flex items-center">
              <Icon
                icon="mdi:success-bold"
                width={20}
                height={20}
                className="text-red-700 mr-2"
              />
              <p className="text-gray-600 dark:text-gray-300">
                Conversations: Unlimited
              </p>
            </div>
            <div className="flex items-center">
              <Icon
                icon="mdi:success-bold"
                width={20}
                height={20}
                className="text-red-700 mr-2"
              />
              <p className="text-gray-600 dark:text-gray-300">
                Preferred Channels: Up to 5
              </p>
            </div>
            <div className="flex items-center">
              <Icon
                icon="mdi:success-bold"
                width={20}
                height={20}
                className="text-red-700 mr-2"
              />
              <p className="text-gray-600 dark:text-gray-300">
                Voice Agent: Yes
              </p>
            </div>
            <div className="flex items-center">
              <Icon
                icon="mdi:success-bold"
                width={20}
                height={20}
                className="text-red-700 mr-2"
              />
              <p className="text-gray-600 dark:text-gray-300">
                CRM Integration: Yes
              </p>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col items-center mt-4">
            <Button
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none transition"
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </Button>
            <p className="text-sm text-gray-400 mt-2">
              15 Days Money Back Guarantee
            </p>
          </CardFooter>
        </Card>
      </div>

      <div className="lg:px-24 mb-12 mt-8 sm:px-4 px-4">
        <Card className=" py-12 rounded-xl shadow-lg">
          <div className="container mx-auto px-2 lg:px-24 flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <h2 className="text-3xl lg:text-4xl font-bold leading-relaxed">
                Need Any Custom <br />
                Chatbot Solutions? <br />
              </h2>
            </div>

            <div className="mb-6 lg:mb-0  px-4">
              <h2 className="text-sm font-bold leading-relaxed">
                Create your own customized AI based chatbots with your desired{" "}
                <br />
                features to put customer service on autopilot <br />
              </h2>
            </div>

            <div>
              <a
                href="/contact"
                className="bg-white text-orange-500 font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-orange-50 transition duration-300"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
