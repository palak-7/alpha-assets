"use client";
import React, { useState } from "react";
import Image from "next/image";
import "animate.css";
import ScrollTrigger from "react-scroll-trigger";
const WhyChooseUs = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setAnimate(true)}
      onExit={() => setAnimate(false)}
    >
      <div
        className={`xl:mt-[50px] ${
          animate && "animate__animated animate__fadeInUp animate__slow"
        }`}
      >
        <div className="lg:grid grid-cols-12">
          <div className="col-span-6">
            <h1 className="font-bold text-5xl mx-10 text-center pt-10 font-serif mb-6">
              Why Choose Us ?
            </h1>
            <p className="mx-10">
              Choosing Alfa Assets & Infra Ventures means partnering with a team
              that is dedicated to your success. Experience the difference with
              our expert guidance, personalized service, and unwavering
              commitment to excellence.
            </p>
            <div className="flex justify-center">
              <Image
                src="/choose/choose.png"
                height={1000}
                width={1000}
                className="h-[290px] w-[300px] mt-2 mb-4"
                alt="choose"
              />
            </div>
          </div>
          <div className="col-span-3 xl:mr-5 xl:mx-0 mx-3">
            <div className="border-2 border-gray-300 bg-primary text-white hover:bg-white hover:text-black p-3 rounded-lg mb-3">
              <h1 className="text-center font-bold text-lg">
                Our Commitment to Excellence
              </h1>
              <p className="text-center mt-2">
                Our unwavering commitment to excellence drives everything we do.
                We strive to exceed client expectations through meticulous
                planning, execution, and ongoing support.
              </p>
            </div>
            <div className="border-2 border-gray-300 hover:bg-primary hover:text-white p-3 rounded-lg">
              <h1 className="text-center font-bold text-lg">
                Personalized Advisory Services
              </h1>
              <p className="text-center mt-2">
                We understand that each client has unique needs and goals. Our
                personalized transaction advisory services are tailored to meet
                your specific requirements, ensuring a smooth and hassle-free
                acquisition process.
              </p>
            </div>
          </div>
          <div className="mt-10 col-span-3 xl:mr-5 xl:mx-0 mx-3">
            <div className="border-2 border-gray-300 hover:bg-primary hover:text-white p-3 rounded-lg mb-3">
              <h1 className="text-center font-bold text-lg">Expert Team</h1>
              <p className="text-center mt-2">
                Our team consists of highly experienced professionals with
                in-depth knowledge of the real estate and infrastructure
                sectors. We bring years of expertise and a proven track record
                of successful asset management and consultancy.
              </p>
            </div>
            <div className="border-2 border-gray-300 p-3 rounded-lg bg-primary text-white hover:bg-white hover:text-black">
              <h1 className="text-center font-bold text-lg">
                Comprehensive Due Diligence
              </h1>
              <p className="text-center mt-2">
                We conduct thorough due diligence to ensure that the assets we
                recommend promise high returns and align with your investment
                goals. Our rigorous evaluation process guarantees that you are
                investing in the best opportunities available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default WhyChooseUs;
