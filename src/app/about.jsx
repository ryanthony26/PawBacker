"use client";

import React from "react";
import {
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const faqData = [
  {
    id: 1,
    question: "How does PawBacker verify pet sitters?",
    answer:
      "Every sitter goes through a careful screening process, including identity checks, profile reviews, and ongoing performance monitoring. We ensure only trusted, caring individuals join our community.",
  },
  {
    id: 2,
    question: "Can I chat with my sitter before booking?",
    answer:
      "Yes! PawBacker offers an in-app chat so you can ask questions, share pet details, and get comfortable with your sitter before confirming a booking.",
  },
  {
    id: 3,
    question: "What happens if a sitter cancels?",
    answer:
      "If a sitter cancels unexpectedly, PawBacker helps you quickly find another available sitter. You’ll receive notifications, and we’ll support you throughout the replacement process.",
  },
  {
    id: 4,
    question: "Is PawBacker available for all types of pets?",
    answer:
      "Absolutely! Whether you have dogs, cats, rabbits, or other small animals, our sitters are equipped to care for a wide range of pets with love and attention.",
  },
];

export function AboutUs() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <section className="py-20 px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto items-start lg:gap-5">
        <div className="col-span-1 mx-auto px-4 lg:px-0">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Get to Know Us
          </Typography>
          <Typography
            variant="text"
            className="mb-5 px-0 text-left !text-gray-500 lg:px-0 font-normal"
          >
            PawBacker was created with a simple mission to make pet care
            effortless, trustworthy, and accessible for every pet parent. We
            know how much your furry family means to you, and finding reliable
            care shouldn’t be stressful. With verified sitters, easy scheduling,
            and seamless in-app communication, PawBacker gives you peace of mind
            every time you’re away. Whether you’re working late, traveling, or
            planning a weekend escape, we’re here to make sure your pet feels
            safe, happy, and loved.
          </Typography>
        </div>
        <div className="col-span-1 px-4 lg:px-0">
          {faqData.map((item) => (
            <Accordion
              key={item.id}
              open={open === item.id}
              icon={<Icon id={item.id} open={open} />}
            >
              <AccordionHeader
                className={`text-[#263238] transition-colors ${
                  open === item.id ? "text-[#7738F4] hover:!text-[#7738F4]" : ""
                }`}
                onClick={() => handleOpen(item.id)}
              >
                {item.question}
              </AccordionHeader>

              <AccordionBody className="text-[#263238] text-base font-normal">{item.answer}</AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
export default AboutUs;
