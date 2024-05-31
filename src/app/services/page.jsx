import React from "react";
import { services } from "@/components/services";
import Service from "@/components/common/Service";

const page = () => {
  return (
    <div className="xl:mt-[150px] mt-[200px]">
      <Service filtered={services} />
    </div>
  );
};

export default page;
