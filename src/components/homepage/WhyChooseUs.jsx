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
              At Alfa Assets, we redefine wealth management by offering tailored
              solutions for Ultra High Income (UHI) and Ultra High Net Worth
              Individuals (UHNI). Choose Alfa Assets for a partnership built on
              trust, transparency, and a commitment to empowering your financial
              success.
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
                As a premier asset management firm, we prioritize excellence in
                every aspect of our services. From personalized investment
                strategies to dedicated client support, we go above and beyond
                to deliver exceptional results.
              </p>
            </div>
            <div className="border-2 border-gray-300 hover:bg-primary hover:text-white p-3 rounded-lg">
              <h1 className="text-center font-bold text-lg">
                Customized Investment Strategies
              </h1>
              <p className="text-center mt-2">
                We understand that each client has unique financial objectives
                and risk tolerances. That&apos;s why our team of experienced
                advisors crafts customized investment strategies that align with
                your goals, whether it&apos;s wealth preservation, growth, or
                philanthropic endeavors.
              </p>
            </div>
          </div>
          <div className="mt-10 col-span-3 xl:mr-5 xl:mx-0 mx-3">
            <div className="border-2 border-gray-300 hover:bg-primary hover:text-white p-3 rounded-lg mb-3">
              <h1 className="text-center font-bold text-lg">
                Exclusive Access and Opportunities
              </h1>
              <p className="text-center mt-2">
                As a UHI or UHNI client, you gain access to exclusive investment
                opportunities and alternative asset classes. From private equity
                to real estate ventures, we provide access to curated
                opportunities designed to enhance your portfolio&apos;s
                diversification and potential returns.
              </p>
            </div>
            <div className="border-2 border-gray-300 p-3 rounded-lg bg-primary text-white hover:bg-white hover:text-black">
              <h1 className="text-center font-bold text-lg">
                Dedicated Client Support
              </h1>
              <p className="text-center mt-2">
                Your financial journey is our priority. Our dedicated client
                support team is available to address your inquiries, provide
                regular updates, and ensure a seamless experience throughout our
                partnership. We are committed to building long-term
                relationships based on trust and transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default WhyChooseUs;
