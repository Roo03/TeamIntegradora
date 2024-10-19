"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaWater } from "react-icons/fa";
export default function NavbarPage() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7m md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-8 md:py-5 md:block">
              <div className="flex items-center">
                <FaWater className="mr-5 text-2m" />
                <Link href="/">
                  <h1 className="text-xl text-xl font-bold">
                    Guardian of the ocean
                  </h1>
                </Link>
              </div>

              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <FaTimes
                      size={30}
                      className="focus:border-none active:border-none"
                      aria-label="Close"
                    />
                  ) : (
                    <FaBars
                      size={30}
                      className="focus:border-none active:border-none"
                      aria-label="Menu"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="text-m  text-white py-2 px-5 text-center border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Inicio
                  </Link>
                </li>
                <li className="text-m text-white py-2 px-5 text-center  border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-600 md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </Link>
                </li>
                <li className="text-m text-white py-2 px-5 text-center  border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-600 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    En los medios
                  </Link>
                </li>
                <li className="text-m text-white py-2 px-5 text-center  border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-600 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Manual
                  </Link>
                </li>
                <li className="text-m text-white py-2 px-5 text-center  border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-600 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Acerca de
                  </Link>
                </li>
                <li className="text-m text-white py-2 px-5 text-center  border-b-2 md:border-b-0  hover:bg-green-600  border-green-900  md:hover:text-green-600 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Contactanos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
