import Benefits from "@/components/molecules/Home/Benefits/Benefits";
import Stories from "@/components/molecules/Home/Stories/Stories";
import Top3Sections from "@/components/molecules/Home/HeroSection/HeroSection";
import React from "react";
import Header from "@/components/molecules/Header/Header";
import Footer from "@/components/molecules/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Top3Sections />
      <Stories />
      <Benefits />
      <Footer />
    </>
  );
}

export default Home;
