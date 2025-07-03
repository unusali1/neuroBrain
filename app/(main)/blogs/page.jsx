"use client";
import React, { useState } from "react";
import { blogData } from "@/Data/BlogsData";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// Extract all unique categories from blogData dynamically
const categories = [
  "All Posts",
  ...new Set(blogData.map((blog) => blog.category)),
];

const BlogPage = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All Posts");

  const filteredBlogs =
    selectedCategory === "All Posts"
      ? blogData
      : blogData.filter((blog) => blog.category === selectedCategory);

  return (
    <div className="container mx-auto mt-12 mb-24 min-h-screen px-4 sm:px-8 md:px-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="font-extrabold text-4xl sm:text-5xl text-gray-900">
          Latest Insights
        </h2>
        <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
          Explore expert-written posts, industry news, and deep dives into how
          AI and digital solutions are reshaping the world.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              selectedCategory === category
                ? "bg-indigo-600 text-white focus:ring-indigo-500"
                : "bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 focus:ring-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-[1.02] hover:shadow-2xl"
              onClick={()=>router.push(`/blogs/${blog.id}`)}
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                  height={200}
                  width={400}
                />
                <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {blog.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                  <Icon icon="stash:data-date" width={16} height={16} />
                  <span>{blog.date}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mt-3 mb-2 line-clamp-2">
                  {blog.title}
                </h2>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {blog.description}
                </p>

                {/* Dialog Modal */}
                <div className="mt-4">
                  <Button variant="outline">Read More →</Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No posts found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
