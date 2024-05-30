import React from "react";
import Image from "next/image";
import Link from "next/link";
const Services = () => {
  return (
    <div className="mt-[30px]">
      <h1 className="font-bold text-5xl mx-10 text-center pt-10 font-serif mb-6">
        Our Services
      </h1>
      <Link href="/">
        <div className="hover:shadow-xl hover:scale-105 grid grid-cols-4 border-gray-300 border-2 m-10 rounded-xl">
          <div>
            <Image
              src="/services/wealth.png"
              width={1000}
              height={100}
              className="w-full rounded-l-xl"
              alt="wealth"
            />
          </div>
          <div className="p-5 col-span-3">
            <h1 className="text-center text-3xl font-bold">
              Wealth Management
            </h1>
            <p className="mt-4 mx-10">
              we offer comprehensive wealth management services that cater
              specifically to the intricate needs of HNIs and UHNIs. Our team of
              seasoned professionals works closely with you to develop
              customized investment plans that align with your financial goals,
              risk tolerance, and time horizon.
            </p>
          </div>
        </div>
      </Link>
      <Link href="/">
        <div className="hover:shadow-xl hover:scale-105 grid grid-cols-4 border-gray-300 border-2 m-10 rounded-xl">
          <div className="p-5 col-span-3">
            <h1 className="text-center text-3xl font-bold">
              Financial Planning
            </h1>
            <p className="mt-4 mx-10">
              We provide tailored financial planning services that help you
              achieve your short-term and long-term financial goals. Our
              comprehensive approach encompasses retirement planning, education
              planning, and strategies for wealth preservation.
            </p>
          </div>
          <div>
            <Image
              src="/services/financial.png"
              width={1000}
              height={100}
              className="w-full rounded-r-xl"
              alt="financial"
            />
          </div>
        </div>
      </Link>
      <Link href="/">
        <div className="hover:shadow-xl hover:scale-105 grid grid-cols-4 border-gray-300 border-2 m-10 rounded-xl">
          <div>
            <Image
              src="/services/estate.png"
              width={1000}
              height={100}
              className="w-full rounded-l-xl"
              alt="estate"
            />
          </div>
          <div className="p-5 col-span-3">
            <h1 className="text-center text-3xl font-bold">Estate Planning</h1>
            <p className="mt-4 mx-10">
              we We assist you in developing comprehensive estate plans that
              ensure the smooth transfer of wealth and assets to future
              generations. Our estate planning services include the creation of
              wills, trusts, and estate administration.
            </p>
          </div>
        </div>
      </Link>
      <div className="flex justify-center">
        <Link
          href="/services"
          className="bg-primary text-center hover:bg-primary/90 text-white text-lg p-3 m-5 w-1/6"
        >
          View All Services
        </Link>
      </div>
    </div>
  );
};

export default Services;
