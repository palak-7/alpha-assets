"use client";

import React, { useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Numbers = () => {
  const [count, setCount] = useState(false);
  return (
    <div className="lg:mt-[25px] mt-[450px] relative">
      <ScrollTrigger
        onEnter={() => setCount(true)}
        onExit={() => setCount(false)}
      >
        <Image
          src="/numbers/numbers_banner.png"
          width={1000}
          height={1000}
          className="lg:h-[500px] h-[1000px] w-full object-cover"
          alt="banner"
        />

        <div className="absolute inset-0 lg:grid grid-cols-3 m-[20px] lg:m-[130px] text-white font-bold text-2xl">
          <div className="bg-secondary my-5 rounded-l-lg flex justify-center items-center">
            <div className="my-3">
              <Image
                src="/numbers/hospitals.png"
                width={150}
                height={150}
                alt="numbers"
              />
              <div className="text-7xl text-center">
                {count && <CountUp start={1} end={10} duration={2} delay={0} />}
                +
              </div>
              <div className="text-center">Hospitals</div>
            </div>
          </div>
          <div className="bg-primary rounded-lg flex justify-center items-center">
            <div>
              <Image
                src="/numbers/experience.png"
                width={200}
                height={200}
                alt="experience"
              />
              <div className="text-7xl text-center">
                {count && <CountUp start={1} end={9} duration={2} delay={0} />}+
              </div>
              <div className="text-center">Yrs. Experience</div>
            </div>
          </div>
          <div className="bg-secondary my-5 rounded-r-lg flex justify-center items-center">
            <div>
              <Image
                src="/numbers/patients.png"
                width={150}
                height={150}
                alt="doctors"
              />
              <div className="text-7xl text-center">
                {count && <CountUp start={1} end={50} duration={2} delay={0} />}
                +
              </div>
              <div className="text-center">Doctors</div>
            </div>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Numbers;
