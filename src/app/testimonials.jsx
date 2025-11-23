"use client";

import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";
import TestimonialCard from "../components/testimonial-card";


const TESTIMONIALS = [
  {
    feedback:
      "PawBacker made it so easy to find someone I could truly trust with my dog. The sitter sent updates throughout the day, and Max looked happier than ever. Total peace of mind.",
    client: "Sarah Thompson",
    title: "Pet Mom of Max (Golden Retriever)",
    img: "/image/avatar1.jpg",
  },
  {
    feedback:
      "I love how simple the app is. I booked a sitter last minute during a business trip, and the in-app chat kept me updated the whole time. Such a lifesaver!",
    client: "Daniel Reyes",
    title: "Frequent Traveler & Cat Dad",
    img: "/image/avatar2.jpg",
  },
  {
    feedback:
      "Our sitter went above and beyond daily photos, on-time visits, and so much care. PawBacker is now my go-to every time I’m out of town.",
    client: "Priya Nand",
    title: "Dog Dad of Bella & Tofu",
    img: "/image/avatar3.jpg",
  },
];


export function Testimonials() {
  return (
    <section className="px-10 !py-20">
      <div className="container mx-auto">
        <div className="mb-10 flex w-full flex-col items-center">
          <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-lg bg-main text-white " data-aos="fade-up">
            <UserIcon className="h-6 w-6" />
          </div>
          <Typography variant="h2" color="blue-gray" className="mb-2" data-aos="fade-up">
            What They Say
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl text-center !text-gray-600"
            data-aos="fade-up"
          >
            Discover what our valued clients have to say about their experiences
            with our services. We take pride in delivering exceptional results
            and fostering lasting partnerships.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
          {TESTIMONIALS.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
