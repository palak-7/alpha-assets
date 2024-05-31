import React from "react";
import Image from "next/image";
import Link from "next/link";
const Contact = () => {
  return (
    <div className="mt-[50px] relative">
      <Image
        src="/contact/contact.png"
        width={10000}
        height={10000}
        className="w-full xl:h-[600px] h-[450px]"
        alt="contact"
      />
      <div className="absolute inset-0">
        <div className="lg:grid grid-cols-2">
          <div className="bg-white text-center xl:mt-[150px] xl:mx-20 mx-5 xl:pb-0 pb-1">
            <h1 className="p-2 xl:mt-2 mt-4">Contact Us</h1>
            <h1 className="text-3xl font-bold xl:mx-10 mt-5">
              ACHIEVE YOUR GREATEST GOALS
            </h1>
            <p className="text-lg m-6">
              Collaborate with our advisors to create a personalized plan that
              empowers you to navigate change with confidence.
            </p>
            <Link href="/contact">
              <div className="border-gray-400 border-2 m-10 p-2 text-lg hover:text-white hover:bg-primary">
                Contact our experts
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* <h1 className="font-bold text-5xl mx-10 text-center pt-10 font-serif mb-6">
        Contact Us
      </h1> */}
    </div>
  );
};

export default Contact;
