"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { product } from "../product";
const Products = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <GrNext color="black" />,
    prevArrow: <GrPrevious color="black" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  };
  return (
    <div className="lg:mt-10">
      <div className="h-[500px] relative">
        <Image
          src="/products/products.png"
          width={1000}
          height={1000}
          className="w-full h-[500px] object-cover"
          alt="products"
        />

        <div className="absolute inset-0">
          <div className="flex justify-center">
            <h1 className="bg-white dark:text-black text-center p-3 bg-opacity-50 font-bold text-4xl mt-10 shadow-xl">
              Premium Product category
            </h1>
          </div>
          <Slider {...settings} className="overflow-x-clip">
            {product.map((h) => (
              <div className="" key={h.id}>
                <div className="bg-white m-10 xl:mx-20">
                  <Image
                    src={`/products/${h.image}`}
                    width={1000}
                    height={1000}
                    className="w-[320px] h-[220px] mb-5 border-secondary border-4"
                    alt="products"
                  />
                  <h1 className="dark:text-black text-center text-lg font-bold mx-10 pb-5">
                    {h.name}
                  </h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Products;
