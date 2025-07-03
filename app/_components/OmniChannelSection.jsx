// "use client";
// import React from "react";
// import { Icon } from "@iconify/react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";

// // Channel data with Iconify icons
// const channels = [
//   { icon: "tabler:world", name: "Website", color: "bg-blue-600" },
//   { icon: "ic:outline-whatsapp", name: "WhatsApp", color: "bg-green-500" },
//   {
//     icon: "mingcute:messenger-line",
//     name: "Messenger",
//     color: "bg-gradient-to-br from-blue-500 to-pink-500",
//   },
//   {
//     icon: "hugeicons:instagram",
//     name: "Instagram",
//     color: "bg-gradient-to-br from-pink-500 to-yellow-500",
//   },
//   { icon: "cib:hubspot", name: "HubSpot", color: "bg-orange-500" },
// ];

// // Animation variants for curved effect
// const curveVariants = {
//   hidden: { opacity: 0, scale: 0.8, rotate: -10 },
//   visible: (i) => ({
//     opacity: 1,
//     scale: 1,
//     rotate: 0,
//     transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
//   }),
// };

// const OmniChannelSection = () => {
//   const router = useRouter();

//   return (
//     <section
//       className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-gray-900"
//       style={{
//         backgroundImage: `url('/assets/ai.jpg')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />

//       {/* Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-10 flex flex-col items-center px-4 py-20 text-center"
//       >
//         {/* Headline */}
//         <motion.h2
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.6 }}
//           className="mb-12 max-w-3xl text-2xl font-extrabold text-white sm:text-3xl md:text-4xl font-['Inter'] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300"
//         >
//           NeuroBrain’s Customer Agent integrates with 50+ omni-channels
//         </motion.h2>

//         {/* Channel Icons in Curved Layout */}
//         <div className="relative flex justify-center items-center flex-wrap gap-6 md:gap-12">
//           {channels.map((channel, index) => {
//             // Calculate angle for circular/curved arrangement
//             const angle = (index - (channels.length - 1) / 2) * 20; // Spread icons in a curve
//             return (
//               <motion.div
//                 key={channel.name}
//                 custom={index}
//                 variants={curveVariants}
//                 initial="hidden"
//                 animate="visible"
//                 className="flex flex-col items-center"
//                 style={{
//                   transform: `rotate(${angle}deg) translateX(100px) rotate(-${angle}deg)`,
//                   transformOrigin: "center bottom",
//                 }}
//               >
//                 <div
//                   className={`p-5 ${channel.color} rounded-full shadow-lg transition-transform hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900`}
//                   role="img"
//                   aria-label={`${channel.name} icon`}
//                 >
//                   <Icon
//                     icon={channel.icon}
//                     className="h-8 w-8 text-white sm:h-10 sm:w-10"
//                   />
//                 </div>
//                 <p className="mt-3 text-sm font-semibold text-white sm:text-base">
//                   {channel.name}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* CTA Button */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => router.push("/contact")}
//           className="mt-12 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
//           aria-label="Build your first AI chatbot"
//         >
//           Build Your First AI
//         </motion.button>
//       </motion.div>

//       {/* Background Wave Decoration */}
//       <motion.div
//         className="absolute inset-0 -z-10 opacity-20"
//         animate={{ y: [0, -15, 0] }}
//         transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//       >
//         <svg className="w-full h-full" viewBox="0 0 1440 320">
//           <path
//             fill="#3b82f6"
//             fillOpacity="0.4"
//             d="M0,160L80,186.7C160,213,320,267,480,266.7C640,267,800,213,960,186.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
//           />
//         </svg>
//       </motion.div>
//     </section>
//   );
// };

// export default OmniChannelSection;

"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function OmniChannelSection() {
  const router = useRouter();
  return (
    <div
      className="relative flex  items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/assets/ai.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute w-[800px] h-[800px]  from-[#f0f0f0] via-[#f0f0f0] to-[#f0f0f0] rounded-full blur-[100px]"></div>
      <div className="relative z-10 flex flex-col items-center mb-12 mt-12 ">
        <div className="flex gap-3 sm:gap-44 items-center px-4">
          <div className="flex flex-col items-center gap-0 sm:gap-2">
            <div className="p-4 bg-blue-500 rounded-full shadow-lg">
              <Icon
                icon="tabler:world"
                // width={60}
                // height={50}
                className="text-white mb-2 sm:w-12 sm:h-10 w-8 h-6"
              />
            </div>
            <p className="text-[#01034A] text-sm sm:text-lg sm:font-bold">
              Website
            </p>
          </div>

          <div className="flex flex-col items-center gap-0 sm:gap-2 mb-0 sm:mb-24">
            <div className="p-4 bg-green-500 rounded-full shadow-lg">
              <Icon
                icon="ic:outline-whatsapp"
                // width={60}
                // height={50}
                className="text-white mb-2 sm:w-12 sm:h-10 w-8 h-6"
              />
            </div>
            <p className="text-[#01034A] text-sm sm:text-lg sm:font-bold">
              WhatsApp
            </p>
          </div>
          <div className="flex flex-col items-center gap-0 sm:gap-2 mb-0 sm:mb-48">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-pink-500 rounded-full shadow-lg">
              <Icon
                icon="mingcute:messenger-line"
                // width={60}
                // height={50}
                className="text-white mb-2 sm:w-12 sm:h-10 w-8 h-6"
              />
            </div>
            <p className="text-[#01034A] text-sm sm:text-lg sm:font-bold">
              Messenger
            </p>
          </div>
          <div className="flex flex-col items-center gap-0 sm:gap-2 mb-0 sm:mb-24">
            <div className="p-4 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-full shadow-lg">
              <Icon
                icon="hugeicons:instagram"
                // width={60}
                // height={50}
                className="text-white mb-2 sm:w-12 sm:h-10 w-8 h-6"
              />
            </div>
            <p className="text-[#01034A] text-sm sm:text-lg sm:font-bold">
              Instagram
            </p>
          </div>
          <div className="flex flex-col items-center gap-0 sm:gap-2">
            <div className="p-4 bg-orange-500 rounded-full shadow-lg">
              <Icon
                icon="cib:hubspot"
                // width={60}
                // height={50}
                className="text-white mb-2 sm:w-12 sm:h-10 w-8 h-6"
              />
            </div>
            <p className="text-[#01034A] text-sm sm:text-lg sm:font-bold">
              HubSpot
            </p>
          </div>
        </div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="max-w-3xl text-2xl font-extrabold text-black sm:text-2xl md:text-2xl font-['Inter'] bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-400"
        >
          NeuroBrain’s Customer Agent integrates with 50+ omni-channels
        </motion.h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push("/contact")}
          className="mt-12 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-md transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          aria-label="Build your first AI chatbot"
        >
          Build Your First AI
        </motion.button>
      </div>
    </div>
  );
}
