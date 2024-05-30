import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
      <footer className=" items-center text-surface">
        <div className="border text-gray-600 mt-5 mx-5"></div>
        <div className="container py-20 pl-10 pt-6 mt-[50px] lg:mt-[100px]">
          <div className="lg:grid grid-cols-4">
            {/* logo */}
            <div>
              <Link href="/" className="">
                <Image
                  src="/logos/logolight2.png"
                  alt="logo"
                  width={200}
                  height={200}
                  className="w-[250px] mb-4"
                />
              </Link>
              <p className=" leading-normal">
                Your trusted partner in bespoke asset management solutions.
                Catering exclusively to UHNI and HNI clients.
              </p>
            </div>
            <div className="lg:flex justify-center mt-6">
              <div className="mb-6">
                <h5 className="mb-2.5 font-bold uppercase">Quick Links</h5>

                <ul className="mb-0 list-none leading-loose">
                  <li>
                    <Link href="/" className="hover:text-darkgreen">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/who-are-we"
                      className="hover:text-darkgreen"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about/why-choose-us"
                      className="hover:text-darkgreen"
                    >
                      Articles
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-darkgreen">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:flex justify-center mt-6">
              <div className="mb-6">
                <h5 className="mb-2.5 font-bold uppercase">Treatments</h5>

                <ul className="mb-0 list-none leading-loose">
                  <li>
                    <Link href="/tests/1" className="hover:text-blue">
                      Oncology
                    </Link>
                  </li>
                  <li>
                    <Link href="/tests/2" className="hover:text-blue">
                      Orthopedic Surgery
                    </Link>
                  </li>
                  <li>
                    <Link href="/tests/3" className="hover:text-blue">
                      Spine Surgery
                    </Link>
                  </li>
                  <li>
                    <Link href="/tests/4" className="hover:text-blue">
                      Urology
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* address */}
            <div className="lg:flex justify-center mt-6 lg:ml-5">
              <div className="mb-6">
                <ul className="mb-0 list-none leading-loose">
                  <li className="leading-normal">
                    <h5 className="mb-2.5 font-bold uppercase">Address</h5>
                    <Link href="/" className="hover:text-blue">
                      G-36, First Floor, Outer circle, Connaught place, New
                      Delhi - 110001
                    </Link>
                  </li>
                  <li className="mt-3 leading-normal">
                    <Link href="tel:+91-981 172 4700">
                      <h5 className="mb-2.5 font-bold uppercase">Phone</h5>
                      <div className="hover:text-blue">+91 98186 47557</div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Copyright section --> */}
        <div className="w-full bg-primary text-white p-4 text-center">
          © 2024 Copyright:
          <Link
            className="text-white font-semibold"
            href="https://tw-elements.com/"
          >
            TekBooster
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
