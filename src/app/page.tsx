// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./feature";
import About from "./about";
import Testimonials from "./testimonials";
import Faqs from "./faqs";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Testimonials />
      <About />
      {/* <VideoIntro /> */}
      {/* <Faqs /> */}
      <Footer />
    </>
  );
}
