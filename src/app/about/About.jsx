import React from "react";
import Image from "next/image";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
const About = () => {
  return (
    <div className="mt-[200px] relative font-sans">
      <div className="xl:grid grid-cols-4">
        <div className="bg-primary text-white font-bold text-3xl grid grid-rows-2">
          <h1 className="mt-16 px-5 text-center">Our Mission And Vision</h1>
          <div className="">
            <Image
              src="/missionvision/mission.png"
              height={1000}
              width={1000}
              className="h-[200px] w-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-3 lg:grid grid-cols-2">
          <div className="border-gray-300 border-2 m-10 pt-5">
            <h1 className="text-center font-semibold text-xl bg-primary text-white p-2">
              Mission
            </h1>
            <p className="p-5">
              At Alfa Assets, our mission is to empower Ultra High Net Worth
              Individuals (UHNIs) and High Net Worth Individuals (HNIs) by
              providing tailored wealth management solutions that align with
              their unique financial goals.
            </p>
          </div>
          <div className="border-gray-300 border-2 m-10 pt-5">
            <h1 className="text-center font-semibold text-xl bg-primary text-white p-2">
              Our Vision
            </h1>
            <p className="p-5">
              Our vision is to be the premier wealth management firm for UHNIs
              and HNIs, recognized for our unwavering commitment to excellence,
              integrity, and innovation. We aim to lead the industry by
              integrating cutting-edge financial solutions with a deep
              understanding of our clients' needs, fostering long-term
              relationships built on trust and mutual success.
            </p>
          </div>
        </div>
      </div>
      <WhyChooseUs />
    </div>
  );
};

export default About;
