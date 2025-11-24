"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";

const LINKS = [
  { label: "Home", id: "" },
  { label: "About", id: "about" },
];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              as="a"
              href="#!"
              variant="h5"
              color="white"
              className="mb-4"
            >
              PawBacker
            </Typography>
            <Typography color="white" className="mb-12 font-normal">
              Helping pet parents find trusted, loving sitters anytime, anywhere
            </Typography>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <Typography
                    as="a"
                    href={`#${link.id}`}
                    color="white"
                    className={`py-1 font-medium transition-colors ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link.label}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <Typography variant="h6" color="white" className="mb-3">
              Get the app
            </Typography>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.apple.com/id/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  color="white"
                  className="flex items-center justify-center w-full"
                >
                  <Image
                    width={256}
                    height={256}
                    src="/logos/logo-apple.png"
                    className="-mt-0.5 mr-2 h-6 w-6"
                    alt="ios"
                  />
                  App Store
                </Button>
              </a>

              <a
                href="https://www.play.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  color="white"
                  className="flex items-center justify-center w-full"
                >
                  <Image
                    width={256}
                    height={256}
                    src="/logos/logo-google.png"
                    className="-mt-0.5 mr-2 h-6 w-6"
                    alt="ios"
                  />
                  Google Play
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
            color="white"
            className="text-center font-normal opacity-75"
          >
            © {CURRENT_YEAR} PawBacker. All rights reserved.
          </Typography>

          <div className="flex gap-2">
            <a href="https://x.com" target="_blank">
              <IconButton variant="text" color="white">
                <i className="fa-brands fa-twitter text-2xl not-italic opacity-75"></i>
              </IconButton>
            </a>

            <a href="https://instagram.com" target="_blank">
              <IconButton variant="text" color="white">
                <i className="fa-brands fa-instagram text-2xl not-italic opacity-75"></i>
              </IconButton>
            </a>

            <a href="https://facebook.com" target="_blank">
              <IconButton variant="text" color="white">
                <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
              </IconButton>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
