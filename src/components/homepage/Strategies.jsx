"use client";

import React, { useState } from "react";
import Image from "next/image";
import "animate.css";
import ScrollTrigger from "react-scroll-trigger";
const Strategies = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setAnimate(true)}
      onExit={() => setAnimate(false)}
    >
      <div className="mt-[50px]">
        <div className="lg:grid grid-cols-2">
          <div
            className={`${
              animate && "animate__animated animate__slideInLeft"
            } text-center xl:m-20 m-5`}
          >
            <h1 className="font-bold xl:text-3xl text-2xl">
              TIME-TESTED STRATEGIES FOR LIFELONG SUCCESS
            </h1>
            <p className="mt-3 leading-relaxed">
              At Alfa Assets, we believe in the power of proven methodologies to
              secure your financial future. Our approach combines deep market
              insight with personalized planning to ensure your wealth grows and
              adapts with you over time.
            </p>
          </div>
          <div
            className={`${animate && "animate__animated animate__slideInUp"}`}
          >
            <Image
              src="/strategies/strategies.png"
              width={1000}
              height={1000}
              className="w-full h-full"
              alt="strategies"
            />
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Strategies;
