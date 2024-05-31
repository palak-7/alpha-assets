"use client";

import React, { useState } from "react";
import Link from "next/link";
import Service from "../common/Service";
const Services = ({ filtered }) => {
  return (
    <div>
      <Service filtered={filtered} />

      <div className="flex justify-center">
        <Link
          href="/services"
          className="bg-primary text-center hover:bg-primary/90 text-white text-lg p-3 m-5 xl:w-1/6"
        >
          View All Services
        </Link>
      </div>
    </div>
  );
};

export default Services;
