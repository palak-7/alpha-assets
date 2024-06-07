"use client";

import { useState } from "react";
import "animate.css";
import Image from "next/image";
import Link from "next/link";
// import ContactForm from "../Contact";
import ScrollTrigger from "react-scroll-trigger";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Banner() {
  const [animate, setAnimate] = useState(false);
  const [text] = useTypewriter({
    words: ["Securing Your Wealth", "Building Your Legacy"],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="overflow-x-clip mt-[180px]">
      <div className="">
        <div className="relative -mt-20 w-screen lg:grid grid-cols-12">
          <Image
            width={20000}
            height={20000}
            src="/banner/banner2.jpg"
            alt="slider-image"
            className="w-full h-[533px] object-cover col-span-12"
          />
          <div className="absolute inset-0 lg:bg-primary lg:border-2 lg:border-white col-start-8 col-span-5 mr-24 mt-32 mb-5"></div>
          <div className="absolute inset-0 bg-white col-start-7 col-span-5 mt-[170px] lg:mt-28 mb-20 lg:mb-10">
            <div className="xl:mt-20 mt-5">
              <h1 className=" font-bold text-xl lg:text-4xl uppercase text-center font-sans text-black">
                {text}
                <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17" />
              </h1>
              <p className="lg:px-14 px-3 font-sans mt-3">
                Alfa Assets & Infra Ventures is a premier Asset Portfolio
                Management Service company specializing in real estate and
                infrastructure assets. We serve as trusted consultants and asset
                managers for our clients, offering expertise across a diverse
                range of properties and services.
              </p>
              <div className="space-x-3 flex justify-center mt-3">
                <Link
                  href="/about"
                  className="bg-primary hover:bg-primary/90 shadow-lg border p-3 text-white"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 shadow-lg border p-3 text-white"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
