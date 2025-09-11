import React from "react";
import { LuMail } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-[#202020] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-2xl font-bold mb-3 text-orange-500">
            Kidpreneur
          </h1>
          <p className="text-gray-400 mb-3">
            Made for Design Championship 2025 for students to share their
            startup idea with people and inspire others!
          </p>
          <p className="flex items-center gap-2 text-gray-300">
            <LuMail className="text-orange-500" />
            <a
              href="mailto:saksham.khatod27@gmail.com"
              className="hover:underline"
            >
              saksham.khatod27@gmail.com
            </a>
          </p>
        </div>
        <div className="flex flex-col md:items-end">
          <div>
            <p className="font-semibold mb-3 ">Explore</p>
            <ul className="space-y-2  text-gray-300">
              <li className="hover:text-orange-500 cursor-pointer">Home Page</li>
              <li className="hover:text-orange-500 cursor-pointer">About Us</li>
              <li className="hover:text-orange-500 cursor-pointer">Student's Ideas</li>
              <li className="hover:text-orange-500 cursor-pointer">
                Submit Your Idea
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Kidpreneur. Design Championship 2025.
      </div>
    </footer>
  );
};

export default Footer;
