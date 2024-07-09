import React from "react";
import Image from "next/image";
import Link from "next/link";
import { product } from "@/components/product";
const page = () => {
  return (
    <div className="xl:mt-[200px] mt-[250px] dark:text-black">
      <h1 className="text-center text-5xl mb-7 font-serif font-bold">
        Our Premium Products
      </h1>
      <div className="lg:grid grid-cols-3 lg:mx-20 space-x-4">
        {product.map((d) => (
          <Link
            href={`/products/${d.id}`}
            key={d.id}
            className="hover:scale-105 hover:shadow-xl xl:border-gray-300 xl:border-2 p-3 mb-3 rounded-md"
          >
            <div className="flex justify-center">
              <Image
                src={`/products/${d.image}`}
                width={200}
                height={200}
                className="lg:w-[300px] lg:h-[200px] w-[350px] h-[250px] border-secondary border-4"
                alt="products"
              />
            </div>
            <h1 className="font-bold text-xl text-center mb-5 mt-2">
              {d.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
