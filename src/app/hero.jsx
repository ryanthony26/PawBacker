"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[49rem] bg-main px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              Find trusted, loving pet sitters anytime, anywhere.
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              PawBacker makes it easy to find trusted sitters, schedule visits,
              and stay connected.
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <a
                href="https://www.apple.com/id/app-store/" 
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-auto w-full"
              >
                <Button
                  size="lg"
                  color="white"
                  className="flex justify-center items-center gap-3"
                >
                  <Image
                    width={256}
                    height={256}
                    src="/logos/logo-apple.png"
                    alt="metamask"
                    className="w-6 h-6"
                  />
                  App Store
                </Button>
              </a>

              <a
                href="https://play.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="md:w-auto w-full"
              >
                <Button
                  size="lg"
                  color="white"
                  className="flex justify-center items-center gap-3"
                >
                  <Image
                    width={256}
                    height={256}
                    src="/logos/logo-google.png"
                    alt="metamask"
                    className="w-6 h-6"
                  />
                  Google Play
                </Button>
              </a>
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/iphones.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
            Your Pet Deserves the Best Care
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            Whether you're working late, traveling, or just need an extra hand,
            PawBacker connects you with verified sitters who treat your pets
            like their own.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
