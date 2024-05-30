import React from "react";
import Image from "next/image";
const Strategies = () => {
  return (
    <div className="mt-[50px]">
      <div className="grid grid-cols-2">
        <div className="text-center m-20">
          <h1 className="font-bold text-3xl">
            TIME-TESTED STRATEGIES FOR LIFELONG SUCCESS
          </h1>
          <p className="mt-3 leading-relaxed">
            At Alfa Asset, we believe in the power of proven methodologies to
            secure your financial future. Our approach combines deep market
            insight with personalized planning to ensure your wealth grows and
            adapts with you over time.
          </p>
        </div>
        <Image
          src="/strategies/strategies.png"
          width={1000}
          height={1000}
          className="w-full h-full"
          alt="strategies"
        />
      </div>
    </div>
  );
};

export default Strategies;
