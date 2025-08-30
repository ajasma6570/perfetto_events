import React from "react";

export default function Navbar() {
  return (
    <div className="relative z-10 flex justify-between w-full p-5 items-center">
      <ul>
        <li>
          <img src="/images/logo.webp" alt="Logo" width={170} height={80} />
        </li>
      </ul>
      <ul className="flex text-white space-x-12 text-lg items-center">
        <li className="hover:text-red-700 tracking-tight cursor-pointer">
          Home
        </li>
        <li className="hover:text-red-700 tracking-tight cursor-pointer">
          What we Do
        </li>
        <li className="hover:text-red-700 tracking-tight cursor-pointer">
          About Us
        </li>
        <li className="hover:text-red-700 tracking-tight cursor-pointer">
          Gallery
        </li>
        <li className="hover:text-red-700 tracking-tight cursor-pointer">
          Blog
        </li>
        <li>
          <button className="py-2 px-6 border rounded-3xl cursor-pointer tracking-tight">
            Contact Us
          </button>
        </li>
      </ul>
    </div>
  );
}
