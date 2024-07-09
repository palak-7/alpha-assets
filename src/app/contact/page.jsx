import React from "react";
import Contact from "./Contact";

const page = () => {
  return (
    <div className="xl:mt-[200px] mt-[250px] dark:text-black">
      <h1 className="text-center text-5xl mb-28 font-serif font-bold">
        Contact Us
      </h1>
      <div className="flex justify-center">
        <Contact />
      </div>
    </div>
  );
};

export default page;
