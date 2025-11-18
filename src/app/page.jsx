// components
import { Navbar, Footer } from "@/components";
// sections
import Hero from "./hero";
import Feature from "./feature";
import About from "./about";
import Testimonials from "./testimonials";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}
