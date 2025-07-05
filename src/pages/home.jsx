import React from "react";
import Faqs from "../components/Faqs";
import Header from "../components/Header";
import HowItWork from "../components/HowItWork";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/footer";
import HeroSection from "../components/heroSection";
import About from "./about";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      {/* <Services /> */}
      {/* <CabsCollecrtion /> */}
      <HowItWork />
      <WhyChooseUs />
      <Faqs />
      {/* <CTABox /> */}
      {/* <Article /> */}
      <Footer />
    </>
  );
}
