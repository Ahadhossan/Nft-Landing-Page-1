import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BecomeCreator from "@/components/BecomeCreator";
import PopularNft from "@/components/PopularNft";
import LiveBiding from "@/components/LiveBiding";
import TopCreator from "@/components/TopCreator";
import Footer from "@/components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <BecomeCreator />
      <PopularNft />
      <LiveBiding />
      <TopCreator />
      <Footer />
    </div>
  );
};

export default Homepage;
