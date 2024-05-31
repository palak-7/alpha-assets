"use client";

import { useState } from "react";
import { subscribe } from "@/services/formData";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
const NewsLatterBox = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await subscribe(email);
    if (response.success) {
      Swal.fire({
        title: "Success",
        text: response.message,
        icon: "success",
      });
      router.push("/");
    } else {
      Swal.fire({
        title: "Error",
        text: response.message,
        icon: "error",
      });
    }
  };
  return (
    <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Subscribe to Our NewsLetter receive future updates
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
        />
        <button
          type="submit"
          className="mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLatterBox;
