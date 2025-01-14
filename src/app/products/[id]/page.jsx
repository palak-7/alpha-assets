import React from "react";
import Image from "next/image";
import { product } from "@/components/product";
const page = ({ params }) => {
  const id = params.id;
  const p = product.filter((x) => x.id == id);
  return (
    <div className="xl:mt-[200px] mt-[250px] dark:text-black">
      <h1 className="text-center text-3xl lg:text-5xl font-serif font-bold mb-4">
        {p[0].name}
      </h1>
      <p className="text-center text-xl lg:text-2xl font-serif font-medium mb-6">
        {p[0].content}
      </p>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
        <div className="w-full lg:w-1/2 flex justify-center px-5">
          <Image
            src={`/products/${p[0].image}`}
            width={500}
            height={300}
            alt="product"
            className="w-full max-w-md lg:max-w-full border-primary border-4 shadow-lg rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
