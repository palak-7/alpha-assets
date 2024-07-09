"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "animate.css";
import ScrollTrigger from "react-scroll-trigger";
const Service = ({ filtered }) => {
  const [animate, setAnimate] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setAnimate(true)}
      onExit={() => setAnimate(false)}
    >
      <div
        className={`xl:mt-[30px] dark:text-black ${
          animate && "animate__animated animate__fadeInUp animate__slow"
        }`}
      >
        <h1 className="font-bold text-5xl mx-10 text-center pt-10 font-serif mb-6">
          Our Services
        </h1>
        {filtered.map((f) => (
          <div key={f.id}>
            <div className="hover:shadow-xl hover:scale-105 xl:grid lg:grid grid-cols-4 border-gray-300 border-2 m-10 rounded-xl">
              <div>
                <Image
                  src={`/services/${f.image}`}
                  width={1000}
                  height={100}
                  className="w-full rounded-l-xl"
                  alt="wealth"
                />
              </div>
              <div className="p-5 col-span-3">
                <h1 className="text-center text-3xl font-bold">{f.name}</h1>
                <p className="mt-4 xl:mx-10">{f.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollTrigger>
  );
};

export default Service;
