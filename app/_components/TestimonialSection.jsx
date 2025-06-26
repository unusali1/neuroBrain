"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { useRef } from "react";
import test1 from "../../public/assets/tes1.png";
import test2 from "../../public/assets/tes2.jpg";
import Image from "next/image";

export default function TestimonialSection() {
  const carousel = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Joseff Puckett",
      title: "Engineer",
      rating: 5,
      image: test1,
      feedback:
        "Two dear held mrs feet view her old fine. Bore can led than how has rank. Discovery any extensive has commanded direction. Short at front which blind as. Ye as procuring unwilling principle by.",
    },
    {
      id: 2,
      name: "Lena Morrison",
      title: "Designer",
      rating: 4,
      image: test2,
      feedback:
        "Amazing experience! The team was professional, and the service was top-notch. I highly recommend them for anyone looking for reliable solutions.",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="py-16 px-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-gray-800">
          Hear From Our Clients
        </h2>
        <p className="text-blue-500 text-lg font-medium">Feedbacks</p>
      </div>

      {/* Carousel */}
      <Carousel ref={carousel} className="relative max-w-4xl mx-auto">
        <CarouselContent className="flex gap-4">
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="flex-shrink-0 w-full">
              <div className="flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="w-36 h-36 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="object-cover w-full h-full"
                    width={120}
                    height={120}
                  />
                </div>

                {/* Name and Title */}
                <h3 className="text-lg font-semibold text-gray-800 mt-4">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.title}</p>

                {/* Rating */}
                <div className="flex mt-2 text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-center text-gray-600 mt-4 max-w-md">
                  {testimonial.feedback}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </CarouselNext>
      </Carousel>
    </div>
  );
}
