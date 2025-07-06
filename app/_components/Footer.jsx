"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import React from "react";

const Icon = dynamic(() => import("@iconify/react").then((mod) => mod.Icon), {
  ssr: false,
});

const products = [
  { id: 1, name: "AbroadMate", path: "/automatedChatbot" },
  { id: 2, name: "Mufti AI", path: "/dataSecurity" },
  { id: 3, name: "Klyra AI", path: "/contact" },
  { id: 4, name: "Doctor AI", path: "/support" },
  { id: 5, name: "Trip AI", path: "/virtualReality" },
];

const services = [
  { id: 1, name: "FAQ's", path: "/faqs" },
  { id: 2, name: "Privacy Policy", path: "/privacyPolicy" },
  { id: 3, name: "Terms & Condition", path: "/termsAndCondition" },
  { id: 5, name: "Contact Us", path: "/contact" },
];

const usefulLinks = [
  { id: 1, name: "About Us", path: "/about" },
  { id: 2, name: "Services", path: "/services" },
  { id: 4, name: "Our Pricing", path: "/pricing" },
  { id: 5, name: "Latest News", path: "/blogs" },
];

const contactInfo = [
  { id: 1, type: "phone", value: "+880 1614451098", icon: "mdi:phone" },
  { id: 2, type: "phone", value: "+880 1643651990", icon: "mdi:phone" },
  {
    id: 3,
    type: "email",
    value: "hi.neurobrains@gmail.com",
    icon: "mdi:email-outline",
  },
];

const socialMedia = [
  {
    id: 1,
    name: "Facebook",
    path: "https://facebook.com",
    icon: "fa6-brands:square-facebook",
    color: "hover:text-blue-600",
  },
  {
    id: 2,
    name: "YouTube",
    path: "https://youtube.com",
    icon: "logos:youtube-icon",
    color: "hover:text-red-600",
  },
  {
    id: 3,
    name: "Twitter",
    path: "https://twitter.com",
    icon: "fa-brands:twitter-square",
    color: "hover:text-blue-400",
  },
  {
    id: 4,
    name: "WhatsApp",
    path: "https://whatsapp.com",
    icon: "uim:whatsapp",
    color: "hover:text-green-500",
  },
];

function Footer() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 px-6 py-12 font-inter backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {/* Products */}
        <motion.nav
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Products
          </h3>
          <ul className="space-y-3">
            {products.map((item) => (
              <motion.li key={item.id} variants={itemVariants}>
                <Link
                  href={item.path}
                  className="text-gray-300 hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* Services */}
        <motion.nav
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Services
          </h3>
          <ul className="space-y-3">
            {services.map((item) => (
              <motion.li key={item.id} variants={itemVariants}>
                <Link
                  href={item.path}
                  className="text-gray-300 hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* Useful Links */}
        <motion.nav
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Useful Links
          </h3>
          <ul className="space-y-3">
            {usefulLinks.map((item) => (
              <motion.li key={item.id} variants={itemVariants}>
                <Link
                  href={item.path}
                  className="text-gray-300 hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* Contact Info */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Contact
          </h3>
          <ul className="space-y-3">
            {contactInfo.map((item) => (
              <motion.li
                key={item.id}
                className="flex items-start gap-2"
                variants={itemVariants}
              >
                <Icon icon={item.icon} width={20} height={20} className="text-gray-300 mt-1" />
                <span className="text-gray-300 break-all text-sm sm:text-base">
                  {item.type === "email" ? (
                    <a
                      href={`mailto:${item.value}`}
                      className="hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <a
                      href={`tel:${item.value}`}
                      className="hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  )}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Social Icons Desktop */}
          <div className="mt-6 hidden sm:block">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {socialMedia.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-300 ${item.color} transition duration-300`}
                  >
                    <Icon icon={item.icon} width={28} height={28} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Social Icons Mobile */}
      <div className="mt-10 block sm:hidden">
        <h3 className="text-xl text-center font-bold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          Follow Us
        </h3>
        <div className="flex gap-4 justify-center">
          {socialMedia.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-300 ${item.color} transition duration-300`}
              >
                <Icon icon={item.icon} width={28} height={28} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <hr className="border-gray-600 mt-10" />

      <div className="max-w-screen-xl mx-auto mt-6 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} NeuroBrain. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
