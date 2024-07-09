"use client";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import Link from "next/link";
const SocialLinks = () => {
  return (
    <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
      <h3 className="dark:text-black mb-4 text-2xl font-bold leading-tight text-black">
        Connect with Us on Social Media
      </h3>
      <p>
        Stay informed with the latest news and insights from Alfa Assets & Infra
        Ventures by connecting with us on social media. Join the conversation
        and engage with our community.
      </p>
      <div className="container max-w-screen-lg mx-auto mt-4">
        <div className="flex justify-center">
          <div className="flex gap-5 mt-1 lg:mx-0 mx-24">
            <Link
              href={
                "https://www.facebook.com/profile.php?id=100064168657723&mibextid=ZbWKwL"
              }
              className="hover:text-secondary"
            >
              <FaFacebook />
            </Link>
            {/* <Link href={"#!"} className="hover:text-secondary">
              <FaInstagram />
            </Link> */}
            <Link
              href={
                "https://www.linkedin.com/in/alfa-assets-920b131b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
              className="hover:text-secondary"
            >
              <FaLinkedin />
            </Link>
            {/* <Link href={"#!"} className="hover:text-secondary">
              <FaXTwitter />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
