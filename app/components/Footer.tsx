import Link from "next/link";
import Image from "next/image";
// import FooterLogo from "../assets/oh_snacker_logo.png";
// import Instagram from "../assets/instagram.png";
// import Whatsapp from "../assets/whatsapp.png";
// import Gmail from "../assets/gmail.png";
import "../globals.css";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
        <div className="md:flex md:justify-between ">
          <div className="mb-6 md:mb-0 ">
            <Link href="/" className="flex justify-start ">
              <h1 className="font-bold text-3xl">The Matthews</h1>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-gray-400">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-white font-medium">
                <li className="mb-4">
                  <Link href="/contact" className=" hover:text-red-400">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/products" className=" hover:text-red-500">
                    Explore More
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-gray-400">
                Infomation
              </h2>
              <ul className="text-gray-500 dark:text-gray-100 font-medium">
                <li className="mb-4">
                  <Link href="/about" className="hover:text-red-500">
                    About us
                  </Link>
                </li>

                <li className="mb-4">
                  <Link href="/tc" className="hover:text-red-500">
                    School Gallery
                  </Link>
                </li>

                <li>
                  <Link href="/policy" className="hover:text-red-500">
                    School Policies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between dark:text-gray-400">
          <span className="text-sm sm:text-center ">
            © 2024{" "}
            <Link href="/" className="hover:text-red-500">
              The Matthew™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
