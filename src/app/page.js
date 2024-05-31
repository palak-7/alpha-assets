import Banner from "@/components/homepage/Banner";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import Services from "@/components/homepage/Services";
import Contact from "@/components/homepage/Contact";
import React from "react";
import Strategies from "@/components/homepage/Strategies";
import Products from "@/components/homepage/Products";
import { services } from "@/components/services";

const page = () => {
  const filtered = services.slice(0, 3);

  return (
    <div>
      <Banner />
      <WhyChooseUs />
      <Services filtered={filtered} />
      <Products />
      <Strategies />
      <Contact />
    </div>
  );
};

export default page;
