import Link from "next/link";
import { useState } from "react";

// Learn how to create this Nav:
// https://dev.to/andrewespejo/how-to-design-a-simple-and-beautiful-navbar-using-nextjs-and-tailwindcss-26p1

export default function Nav() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="flex items-center flex-wrap bg-gray-700 p-3 fixed w-full z-40">
      <Link href="/">
        <a className="inline-flex items-center p-2 mr-4">
          <span className="text-xl text-white font-bold uppercase tracking-wide">
            ABCD Website
          </span>
        </a>
      </Link>
      <button
        className="inline-flex p-3 hover:bg-gray-300 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
        onClick={handleClick}
      >
        {/* mobile hamburger icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/* 
                Note that in this div we will use a ternary operator to decide whether or not to display the content of the div 
                This ternary operator only applies to mobile view
            */}
      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <Link href="/">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-300 hover:text-black">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-300 hover:text-black">
              About
            </a>
          </Link>
          <Link href="/blog/BlogPage">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-300 hover:text-black">
              Blog
            </a>
          </Link>
          <Link href="https://pooltool.io/pool/683e89fa1bcde139504b11fbfd914f8ebe9b8db2678b3da0abdcb2f1/epochs">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-300 hover:text-black">
              Delegate
            </a>
          </Link>
          <Link href="/contact">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-gray-300 hover:text-black">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
