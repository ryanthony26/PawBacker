"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  ChatBubbleBottomCenterTextIcon,
  CheckBadgeIcon,
  StarIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CheckBadgeIcon,
    title: "Verified Sitters",
    children:
      "Every sitter on PawBacker is carefully screened and verified so your pet gets safe, reliable, and loving care from the moment you book.",
  },
  {
    icon: ChatBubbleBottomCenterTextIcon,
    title: "In‑App Chat",
    children:
      "Message sitters instantly to share instructions, ask questions, or get real-time updates all inside the app for clear, simple communication.",
  },
  {
    icon: StarIcon,
    title: "Ratings & Reviews",
    children:
      "Read honest feedback from other pet owners to find a sitter who’s the perfect fit. Transparent reviews help you choose with confidence.",
  },
  {
    icon: CalendarDaysIcon,
    title: "Easy Scheduling",
    children:
      "Book one-time visits or recurring care in seconds. Manage bookings, confirmations, and changes from your PawBacker calendar.",
  },
];
export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Your Trusted Pet Companion App
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Designed for Convenience. Built for Trust.
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          PawBacker makes finding loving, verified sitters simple so you can get
          on with your day knowing your pet is happy, safe, and well cared for.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
