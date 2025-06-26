"use client";
import Link from "next/link";
import Image from "next/image";
import blog1 from "../../public/assets/blog1.webp";
import blog2 from "../../public/assets/blog2.webp";
import blog3 from "../../public/assets/blog3.webp";
import blog4 from "../../public/assets/blog4.webp";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Blogs() {
  const router = useRouter();
  return (
    <>
      <section className="bg-neutral-50 py-16">
        <div className="container mx-auto px-6 lg:px-6">
          {/* Section Title */}
          <h2 className="text-4xl font-bold text-center mb-12">
            Check out our blogs
          </h2>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
            {/* Left Large Feature */}
            <div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                <Image
                  src={blog1} // Replace with actual image URL
                  alt="Feature Image"
                  className="w-full h-64 object-cover"
                  width={120}
                  height={120}
                />
                <div className="p-6">
                  <p className="text-blue-500 text-sm font-medium mb-2">
                    AI CHATBOT
                  </p>
                  <h3 className="text-2xl font-semibold mb-4">
                    LLM Use Cases and Applications (2025)
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Companies face many struggles in customer service, such as
                    language barriers, lack of personalized support, and
                    inability to resolve issues swiftly. Learn how LLMs are
                    transforming industries.
                  </p>
                  <Link
                    href="blogs"
                    className="text-blue-500 font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Smaller Blogs */}
            <div className="space-y-8">
              {/* Blog Item */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
                <Image
                  src={blog2} // Replace with actual image URL
                  alt="Feature Image"
                  className="object-cover"
                  width={220}
                  height={120}
                />
                <div className="p-6">
                  <p className="text-blue-500 text-sm font-medium mb-2">
                    LIVE CHAT
                  </p>
                  <h3 className="text-base font-semibold mb-2">
                    Generative AI for Business: What It is, Models & Strategies
                  </h3>
                  <p className="text-gray-600">
                    Generative AI isn’t just about creating art, writing songs,
                    or drafting clever captions... industries.
                  </p>
                  <Link
                    href="blogs"
                    className="text-blue-500 font-medium hover:underline mt-4 block"
                  >
                    Read More →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
                <Image
                  src={blog3} // Replace with actual image URL
                  alt="Feature Image"
                  className="object-cover"
                  width={220}
                  height={120}
                />
                <div className="p-6">
                  <p className="text-blue-500 text-sm font-medium mb-2">AI</p>
                  <h3 className="text-base font-semibold mb-2">
                    LLM Use Cases and Applications (2025)
                  </h3>
                  <p className="text-gray-600">
                    Companies face many struggles in customer service such as
                    language barriers, lack...
                  </p>
                  <Link
                    href="blogs"
                    className="text-blue-500 font-medium hover:underline mt-4 block"
                  >
                    Read More →
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex">
                <Image
                  src={blog4} // Replace with actual image URL
                  alt="Feature Image"
                  className="object-cover"
                  width={220}
                  height={120}
                />
                <div className="p-6">
                  <p className="text-blue-500 text-sm font-medium mb-2">AI</p>
                  <h3 className="text-base font-semibold mb-2">
                    What is a Large Language Model (LLM) and How Does It Work?
                  </h3>
                  <p className="text-gray-600">
                    Generative AI has revolutionized the world with the
                    introduction of LLMs.
                  </p>
                  <Link
                    href="blogs"
                    className="text-blue-500 font-medium hover:underline mt-4 block"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-8">
          <Button
            variant="outline"
            className="rounded-full border-blue-600 text-blue-600 text-base"
            onClick={() => router.push("/blogs")}
          >
            View All Posts
          </Button>
        </div>
      </section>
    </>
  );
}
