import { blogData } from "@/Data/BlogsData";
import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <>
      <div className="mt-12 mb-24 min-h-screen">
        <div className=" px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 sm:gap-6">
            <div className="hidden lg:block p-4 space-y-6">
              <div>
                <h2 className="font-semibold text-xl text-gray-800 mb-4">
                  Categories
                </h2>
                <ul className="divide-y divide-gray-200">
                  {[
                    "AI",
                    "Business",
                    "Chatbots",
                    "Customer Engagement",
                    "Healthcare",
                    "Tech",
                  ].map((category, idx) => (
                    <li
                      key={idx}
                      className="py-3 text-gray-700 font-medium hover:text-blue-600 cursor-pointer transition-colors duration-300"
                    >
                      <span className="flex items-center space-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        <span>{category}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-semibold text-2xl text-gray-800 mb-4">
                  Popular Posts
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {blogData.map((blog) => (
                    <div
                      key={blog.id}
                      className="flex  overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="w-24 h-24 flex-shrink-0">
                        <Image
                          src={blog.img}
                          alt={blog.category}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex flex-col  p-4">
                        <h2 className="text-base text-gray-800 ">
                          {blog.title || "Untitled Blog"}
                        </h2>
                        <div className="flex items-center text-gray-500 text-sm mt-1 ">
                          <Icon icon="stash:data-date" width={16} height={16} />
                          <span className="ml-2">{blog.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {blogData.map((blog) => (
                  <div
                    key={blog.id}
                    className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
                  >
                    <div className="relative">
                      <Image
                        src={blog.img}
                        alt={blog.category}
                        className="w-full h-48 object-cover"
                        height={200}
                        width={400}
                      />
                      <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {blog.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Icon icon="stash:data-date" width={16} height={16} />
                        <span>{blog.date}</span>
                      </div>
                      <h2 className="text-xl font-semibold text-gray-800 mt-3 mb-2 line-clamp-2">
                        {blog.title || "Untitled Blog"}
                      </h2>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {blog.description}
                      </p>

                      <div className="mt-4">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline"> Read More → </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[825px]">
                            <div key={blog.id} className="">
                              <div className="relative">
                                <Image
                                  src={blog.img}
                                  alt={blog.category}
                                  className="w-full h-80 object-cover"
                                  height={200}
                                  width={300}
                                />
                                <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                  {blog.category}
                                </div>
                              </div>
                              <div className="p-6">
                                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                                  <Icon
                                    icon="stash:data-date"
                                    width={16}
                                    height={16}
                                  />
                                  <span>{blog.date}</span>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800 mt-3 mb-2 line-clamp-2">
                                  {blog.title || "Untitled Blog"}
                                </h2>
                                <p className="text-gray-600 text-sm line-clamp-3">
                                  {blog.description}
                                </p>
                              </div>
                            </div>
                            <DialogFooter>
                              <Button type="submit">Done</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
