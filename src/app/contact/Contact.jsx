"use client";

import NewsLatterBox from "./NewsLatterBox";
import SocialLinks from "./SocialLinks";
import React, { useState } from "react";
import { sendFormData } from "@/services/formData";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
const Contact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleNameChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };
  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  const handleMessageChange = (e) => {
    setFormData({ ...formData, message: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await sendFormData(formData);
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
    <section id="contact" className="overflow-hidden py-2 -mt-[100px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className=" border-2 border-gray-100 mb-12 rounded-sm bg-white px-8 py-11 shadow-three sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Contact Us
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium"
                      >
                        Your Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                        value={formData.name}
                        onChange={handleNameChange}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium"
                      >
                        Your Email
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                        value={formData.email}
                        onChange={handleEmailChange}
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                        value={formData.message}
                        onChange={handleMessageChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-sm bg-primary px-7 py-3 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <SocialLinks />
            <div className="mt-6">
              <NewsLatterBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
