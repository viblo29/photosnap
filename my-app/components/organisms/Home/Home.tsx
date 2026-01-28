import Benefits from "@/components/molecules/Home/Benefits/Benefits";
import Footer from "@/components/molecules/Home/Footer/Footer";
import Header from "@/components/molecules/Home/Header/Header";
import Stories from "@/components/molecules/Home/Stories/Stories";
import Top3Sections from "@/components/molecules/Home/HeroSection/HeroSection";
import React from "react";


function Home() {
  return (
    <>
      <Header/>
      <Top3Sections/>
      <Stories/>
      <Benefits/>
      <Footer/>
    </>
    
  );
}

export default Home;
