import React from "react";
import aboutImg from "../../../public/assets/chatBot.gif";
import Image from "next/image";
import { Icon } from "@iconify/react";
import LookingCustomChatBot from "@/app/_components/LookingCustomChatBot";

const features = [
  {
    title: "24/7 Smart Support",
    icon: "solar:clock-circle-bold",
    description:
      "Never miss a customer query. Our AI agents are available round the clock to support your business globally.",
  },
  {
    title: "Omni-Channel Presence",
    icon: "bi:chat-dots-fill",
    description:
      "Seamlessly integrate with Facebook, WhatsApp, your website, and more — all from one dashboard.",
  },
  {
    title: "Cost-Efficient Automation",
    icon: "ph:currency-circle-dollar-bold",
    description:
      "Reduce operational costs by up to 90% without compromising on quality or speed.",
  },
  {
    title: "Customized Interactions",
    icon: "fluent:design-ideas-20-filled",
    description:
      "Tailored AI agents aligned with your brand tone for consistent and personalized customer experiences.",
  },
];

const Page = () => {
  return (
    <section className="bg-white py-6 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-2xl font-extrabold text-gray-900 leading-snug">
            Empowering Customer Engagement with <br />
            <span className="text-cyan-600">NeuroBrain</span>
          </h2>
          <p className="text-gray-600 text-lg text-justify">
            At <span className="font-semibold text-cyan-600">NeuroBrain</span>, we
            specialize in crafting smart, multilingual AI agents designed to
            simplify customer communication and automate support. Our AI
            solutions combine powerful automation with a human touch — enabling
            businesses to scale faster while staying personal.
          </p>

          {/* Key Features */}
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {features.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <Icon
                  icon={item.icon}
                  className="text-cyan-600 text-3xl flex-shrink-0"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-lg text-justify mt-6">
            Whether you're a startup or a growing enterprise, NeuroBrain adapts
            to your needs with precision. Our goal is to help you turn every
            conversation into conversion — with intelligence, speed, and
            scalability.
          </p>
        </div>

        {/* Image */}
        <div className="rounded-lg overflow-hidden ">
          <Image
            src={aboutImg}
            alt="NeuroBrain About Illustration"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

    <div className="mt-20">
        <LookingCustomChatBot />
    </div>
    </section>
  );
};

export default Page;
