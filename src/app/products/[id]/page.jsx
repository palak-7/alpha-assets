import React from "react";
import Image from "next/image";
import { product } from "@/components/product";
const page = ({ params }) => {
  const id = params.id;
  const p = product.filter((x) => x.id == id);
  return (
    <div className="xl:mt-[200px] mt-[250px] dark:text-black">
      <h1 className="text-center text-5xl mb-7 font-serif font-bold">
        {p[0].name}
      </h1>
      <div className="grid grid-cols-2">
        <Image
          src={`/products/${p[0].image}`}
          width={1000}
          height={1000}
          alt="product"
          className="w-[500px] h-[300px] mx-10 border-primary border-4 shadow-lg"
        />
      </div>
    </div>
  );
};

export default page;
