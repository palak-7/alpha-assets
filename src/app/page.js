import Banner from "@/components/homepage/Banner";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import Services from "@/components/homepage/Services";
import Contact from "@/components/homepage/Contact";
import React from "react";
import Strategies from "@/components/homepage/Strategies";
import Products from "@/components/homepage/Products";

const page = () => {
  return (
    <div>
      <Banner />
      <WhyChooseUs />
      <Services />
      <Products />
      <Strategies />
      <Contact />
    </div>
  );
};

export default page;
