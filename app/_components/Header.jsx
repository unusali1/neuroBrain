"use client";
// favicon.ico

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Button } from "@/components/ui/button";
import logo from "../../public/assets/neurobrain_logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <header className={`${pathname === "/" ? "bg-gray-100" : "bg-none"}`}>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image alt="Logo" src={logo} width={250} height={20} />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {[
            { name: "Home", href: "/" },
            { name: "Products", href: "/product" },
            { name: "Services", href: "/services" },
            { name: "Pricing", href: "/pricing" },
            { name: "Blog", href: "/blogs" },
            { name: "About Us", href: "/about" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`hover:scale-105 transition-all text-md font-semibold ${
                pathname === link.href
                  ? "text-blackdark-950 border-b-[2.5px] border-red-700 "
                  : "text-blackdark-950"
              }`}
            >
              {link.name}
            </a>
          ))}
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <Button
            variant="outline"
            className="rounded-full p-4 shadow-lg hover:scale-105 transition-all"
            onClick={() => router.push("/contact")}
          >
            Start Free Trial
          </Button>
          <Button
            className="bg-blackdark-900 text-white rounded-full p-4 shadow-lg hover:scale-105 transition-all"
            onClick={() => router.push("/contact")}
          >
            Book a Demo
          </Button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt="Logo"
                src={logo}
                className=""
                width={120}
                height={120}
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>

                <a
                  href="pricing"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Pricing
                </a>

                <a
                  href="blogs"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </a>
                <a
                  href="about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </a>
                <a
                  href="contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </a>

                <a
                  href="contact"
                  className="-mx-3 block rounded-sm  py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  <Button
                    variant="outline"
                    className="rounded-sm p-4 shadow-lg hover:scale-105 transition-all"
                  >
                    Start Free Trial
                  </Button>
                </a>

                <a
                  href="contact"
                  className="-mx-3 block rounded-sm py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  <Button className="bg-blackdark-900 text-white rounded-sm p-4 shadow-lg hover:scale-105 transition-all">
                    Book a Demo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
