"use client";
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
import { notFound } from "next/navigation";
import Link from "next/link";

const BlogDetails = ({ params }) => {
  const blogId = parseInt(params.id);
  const blog = blogData.find((item) => item.id === blogId);

  if (!blog) return notFound();

  return (
    <div className="min-h-screen py-12 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Back to Blogs Link */}
        <Link
          href="/blogs"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 mb-6"
          aria-label="Back to blogs"
        >
          <Icon icon="mdi:arrow-left" width={20} height={20} className="mr-2" />
          Back to Blogs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar (Fixed, Non-Scrollable) */}
          <aside className="lg:sticky lg:top-24 lg:block hidden p-6 bg-white rounded-lg shadow-md space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Popular Articles
              </h2>
              <ul className="divide-y divide-gray-200">
                {[
                  "Finance Management",
                  "Banking Investigation",
                  "Business Insurance",
                  "Consulting",
                  "Healthcare",
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
                        aria-hidden="true"
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Popular Posts
              </h2>
              <div className="space-y-4">
                {blogData.slice(0, 3).map((post) => (
                  <Link
                    href={`/blogs/${post.id}`}
                    key={post.id}
                    className="flex items-center bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors duration-300"
                    aria-label={`Read more about ${
                      post.title || "Untitled Blog"
                    }`}
                  >
                    <div className="w-20 h-20 flex-shrink-0">
                      <Image
                        src={post.img}
                        alt={post.category}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-base font-semibold text-gray-800">
                        {post.title || "Untitled Blog"}
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <Icon icon="stash:data-date" width={16} height={16} />
                        <span className="ml-2">{post.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Blog Details (Scrollable) */}
          <article className="lg:col-span-2">
            <div className="max-h-[calc(100vh)] overflow-y-auto space-y-6 pr-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={blog.img}
                  width={600}
                  height={400}
                  priority
                  className="w-full h-[50vh] object-cover"
                  alt={blog.title || "Blog image"}
                />
                <div className="p-6">
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    {blog.title}
                  </h1>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Icon icon="stash:data-date" width={16} height={16} />

                    <span className="ml-2">{blog.date}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {blog.description}
                  </p>
                </div>
              </div>

              {/* Share Button with Dialog */}
              <div className="flex justify-end">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
                      aria-label="Share this blog post"
                    >
                      <Icon
                        icon="mdi:share"
                        width={20}
                        height={20}
                        className="mr-2"
                      />
                      Share
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] rounded-lg">
                    <DialogHeader>
                      <DialogTitle>Share this Post</DialogTitle>
                      <DialogDescription>
                        Share this blog post via your favorite platform.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex justify-around py-4">
                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                          window.location.href
                        )}&text=${encodeURIComponent(blog.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on Twitter"
                      >
                        <Icon
                          icon="mdi:twitter"
                          width={24}
                          height={24}
                          className="text-blue-500"
                        />
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          window.location.href
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on LinkedIn"
                      >
                        <Icon
                          icon="mdi:linkedin"
                          width={24}
                          height={24}
                          className="text-blue-700"
                        />
                      </a>
                      <a
                        href={`mailto:?subject=${encodeURIComponent(
                          blog.title
                        )}&body=Check out this blog post: ${encodeURIComponent(
                          window.location.href
                        )}`}
                        aria-label="Share via Email"
                      >
                        <Icon
                          icon="mdi:email"
                          width={24}
                          height={24}
                          className="text-gray-600"
                        />
                      </a>
                    </div>
                    <DialogFooter>
                      <DialogTrigger asChild>
                        <Button variant="outline">Close</Button>
                      </DialogTrigger>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
