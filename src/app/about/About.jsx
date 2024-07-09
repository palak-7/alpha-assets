import React from "react";
import Image from "next/image";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
const About = () => {
  return (
    <div className="mt-[200px] relative font-sans dark:text-black">
      <div className="xl:grid grid-cols-4">
        <div className="bg-primary text-white font-bold text-3xl grid grid-rows-2">
          <h1 className="mt-16 px-5 text-center">Our Mission And Vision</h1>
          <div className="">
            <Image
              src="/missionvision/mission.png"
              height={1000}
              width={1000}
              className="h-[200px] w-full object-cover"
              alt="mission"
            />
          </div>
        </div>
        <div className="col-span-3 lg:grid grid-cols-2">
          <div className="border-gray-300 border-2 m-10 pt-5">
            <h1 className="text-center font-semibold text-xl bg-primary text-white p-2">
              Mission
            </h1>
            <p className="p-5">
              At Alfa Assets & Infra Ventures, our mission is to deliver
              exceptional asset portfolio management services by leveraging our
              deep industry expertise and extensive network. We are dedicated to
              providing personalized, high-quality advisory services that ensure
              our clients achieve optimal returns on their real estate and
              infrastructure investments.
            </p>
          </div>
          <div className="border-gray-300 border-2 m-10 pt-5">
            <h1 className="text-center font-semibold text-xl bg-primary text-white p-2">
              Our Vision
            </h1>
            <p className="p-5">
              Our vision is to be the leading asset management and consultancy
              firm in the real estate and infrastructure sectors, recognized for
              our integrity, innovation, and client-centric approach. We aspire
              to continuously explore and identify premier assets, setting new
              standards in the industry. By fostering a culture of excellence
              and adaptability, we aim to drive sustainable growth for our
              clients and contribute significantly to the development of
              top-tier real estate and infrastructure projects.
            </p>
          </div>
        </div>
      </div>
      <WhyChooseUs />
    </div>
  );
};

export default About;
