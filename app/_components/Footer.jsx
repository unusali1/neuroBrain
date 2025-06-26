import Link from "next/link";
import { Icon } from "@iconify/react";

const products = [
  {
    id: 1,
    name: "Automated Chatbot",
    path: "/automatedChatbot",
  },
  {
    id: 2,
    name: "Data Security",
    path: "/dataSecurity",
  },
  {
    id: 3,
    name: "Communication",
    path: "/contact",
  },
  {
    id: 4,
    name: "Support",
    path: "/support",
  },
  {
    id: 5,
    name: "Virtual Reality",
    path: "/virtualReality",
  },
];

const services = [
  {
    id: 1,
    name: "FAQ's",
    path: "/faqs",
  },
  {
    id: 2,
    name: "Privacy Policy",
    path: "/privacyPolicy",
  },
  {
    id: 3,
    name: "Terms & Condition",
    path: "/termsAndCondition",
  },
  {
    id: 4,
    name: "Team",
    path: "/about",
  },
  {
    id: 5,
    name: "Contact Us",
    path: "/contact",
  },
];

const usefulLink = [
  {
    id: 1,
    name: "About Us",
    path: "/about",
  },
  {
    id: 2,
    name: "Services",
    path: "/services",
  },
  {
    id: 3,
    name: "Features",
    path: "/pricing",
  },
  {
    id: 4,
    name: "Our Pricing",
    path: "/pricing",
  },
  {
    id: 5,
    name: "Latest News",
    path: "/blogs",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {/* Products Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Products</h3>
          <ul className="space-y-2">
            {products.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className="hover:underline hover:text-gray-900"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2">
            {services.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className="hover:underline hover:text-gray-900"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
          <ul className="space-y-2">
            {usefulLink.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className="hover:underline hover:text-gray-900"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>📞 +880 1614451098</li>
            <li>📞 +880 1643651990</li>
          </ul>
          <ul className="flex gap-2">
            <li>
              {" "}
              <Icon
                icon="mdi:email-outline"
                width={20}
                height={20}
                className="text-blue-600 hover:text-blue-800 transition mt-1"
              />{" "}
            </li>
            <li className="break-all">hi.neurobrains@gmail.com</li>
          </ul>
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-2">Social Media</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-900">
                <Icon
                  icon="fa6-brands:square-facebook"
                  width={24}
                  height={24}
                  className="text-blue-600 hover:text-blue-800 transition"
                />
              </Link>

              <Link href="#" className="hover:text-gray-900">
                <Icon
                  icon="logos:youtube-icon"
                  width={24}
                  height={24}
                  className="text-blue-600 hover:text-blue-800 transition"
                />
              </Link>

              <Link href="#" className="hover:text-gray-900">
                <Icon
                  icon="fa-brands:twitter-square"
                  width={24}
                  height={24}
                  className="text-blue-600 hover:text-blue-800 transition"
                />
              </Link>

              <Link href="#" className="hover:text-gray-900">
                <Icon
                  icon="uim:whatsapp"
                  width={24}
                  height={24}
                  className="text-blue-600 hover:text-blue-800 transition"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 mt-10" />

      <div className="container mx-auto px-6 lg:px-12 mt-4 flex flex-col md:flex-row justify-center items-center text-sm text-gray-500">
        <p>© 2025 CongentAI. All rights reserved.</p>
      </div>
    </footer>
  );
}
