import AllBenefits from "@/components/molecules/Features/AllBenefits/AllBenefits";
import Footer from "@/components/molecules/Footer/Footer";
import Footer2 from "@/components/molecules/Footer2/Footer2";
import Header from "@/components/molecules/Header/Header";
import Header2 from "@/components/molecules/Header2/Header2";
import mobileCameraman from "../../../public/features&pricing/mobile-cameraman.webp";
import tabletCameraman from "../../../public/features&pricing/tablet-cameraman.webp";
import cameraman from "../../../public/features&pricing/cameraman.webp";

import React from "react";

function Features() {
  return (
    <div>
      <Header />
      <Header2
        h1="FEATURES"
        h2="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        images={{
          mobile: mobileCameraman,
          tablet: tabletCameraman,
          desktop: cameraman,
        }}
      />
      <AllBenefits />
      <Footer2 />
      <Footer />
    </div>
  );
}

export default Features;
