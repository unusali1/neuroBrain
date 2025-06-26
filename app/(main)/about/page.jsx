import React from "react";
import aboutImg from "../../../public/assets/industri.jpg";
import Image from "next/image";

const Page = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 lg:flex lg:items-center lg:space-x-12">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            About Us
          </h2>
          <p className="text-gray-600 text-lg text-justify mb-4">
            Welcome to{" "}
            <span className="font-semibold text-cyan-600">Congent.ai</span> –
            your premier AI-driven solution for seamless and intelligent
            customer communication. We specialize in designing advanced,
            customizable chatbots that elevate customer experiences and optimize
            operational efficiency.
          </p>
          <p className="text-gray-600 text-lg text-justify mb-4">
            At Congent.ai, we harness the power of AI to transform how
            businesses engage with their audiences. Our AI agents deliver
            personalized, human-like interactions, helping businesses foster
            meaningful connections with their customers. With multilingual
            capabilities, including English, Bangla, and Banglish, we ensure
            effective communication across diverse markets and demographics.
          </p>
          <h4 className="text-2xl font-semibold text-gray-900 mb-4">
            Why Choose Congent.ai?
          </h4>
          <p className="text-gray-600 text-lg text-justify mb-4">
            <span className="font-semibold">24/7 Availability:</span> Deliver
            round-the-clock customer support, ensuring no query is ever missed.
            <br />
            <span className="font-semibold">
              Omni-Channel Integration:
            </span>{" "}
            Effortlessly connect across platforms like Facebook, WhatsApp,
            websites, and more.
            <br />
            <span className="font-semibold">Operational Savings:</span> Cut
            support costs by up to 90% with efficient automation.
            <br />
            <span className="font-semibold">
              Custom-Tailored Solutions:
            </span>{" "}
            Aligns perfectly with your brand’s tone and style, offering a
            consistent customer experience.
          </p>
          <p className="text-gray-600 text-lg text-justify mb-4">
            <span className="font-semibold">Enhanced Engagement:</span>{" "}
            Transform inquiries into loyal customers through intelligent,
            data-driven interactions.
          </p>
          <p className="text-gray-600 text-lg text-justify mb-4">
            Our mission is to empower businesses with innovative AI tools that
            simplify customer service and drive sustainable growth. From
            startups to large enterprises, Congent.ai adapts to your unique
            requirements, delivering exceptional performance at every stage.
          </p>
          <p className="text-gray-600 text-lg text-justify mb-4">
            Ready to revolutionize your customer support? Start your{" "}
            <span className="font-semibold text-cyan-600">
              15-day free trial
            </span>{" "}
            today and experience the future of customer communication with
            Congent.ai.
          </p>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center rounded-lg">
          <Image
            src={aboutImg}
            alt="Congent.ai Illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
