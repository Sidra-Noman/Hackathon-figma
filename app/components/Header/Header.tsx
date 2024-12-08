

'use client'
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () =>  {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 md:px-10 bg-[#F5F5F5] py-2">
        {/* Logo */}
        <Image
          src="/images/Vector (1).png"
          alt="Top Logo"
          width={19.2}
          height={17.97}
        />

        {/* Top Links */}
        <ul className="hidden sm:flex space-x-4 md:space-x-6 text-sm">
          <li className="flex items-center border-r border-black pr-4 md:pr-6">
            <Link href="/store">Find a Store</Link>
          </li>
          <li className="flex items-center border-r border-black pr-4 md:pr-6">
            <Link href="/help">Help</Link>
          </li>
          <li className="flex items-center border-r border-black pr-4 md:pr-6">
            <Link href="/join">Join Us</Link>
          </li>
          <li className="flex items-center pr-4 md:pr-6">
            <Link href="/sign-in">Sign In</Link>
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <GiHamburgerMenu className="w-6 h-6" />
        </button>
      </div>

      {/* Main Navbar */}
      <div className="flex flex-wrap justify-between items-center px-4 md:px-10 py-4 bg-white">
        {/* Logo */}
        <Image
          src="/images/Vector (2).png"
          alt="Main Logo"
          width={58.85}
          height={20.54}
        />

        {/* Links */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6 text-sm">
          <li className="hover:underline"><Link href="#">New & Featured</Link></li>
          <li className="hover:underline"><Link href="#">Men</Link></li>
          <li className="hover:underline"><Link href="#">Women</Link></li>
          <li className="hover:underline"><Link href="#">Kids</Link></li>
          <li className="hover:underline"><Link href="#">Sale</Link></li>
          <li className="hover:underline"><Link href="#">SNKRS</Link></li>
        </ul>

        {/* Search and Icons */}
        <div className="flex space-x-4 items-center mt-4 md:mt-0">
          {/* Search Bar */}
          <div className="flex items-center px-4 py-2 bg-[#F5F5F5] rounded-full">
            <Image
              src="/images/Vector (3).png"
              alt="Search Icon"
              width={16}
              height={16}
            />
            <input
              className="ml-2 bg-transparent outline-none text-sm w-full"
              type="text"
              placeholder="Search"
            />
          </div>

          {/* Icons */}
          <div className="flex space-x-4">
            <Image
              src="/images/Vector (4).png"
              alt="Wishlist Icon"
              width={20}
              height={20}
            />
            <Image
              src="/images/Vector (5).png"
              alt="Cart Icon"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white px-4 py-2">
          <ul className="flex flex-col space-y-2">
            <li><Link href="#">New & Featured</Link></li>
            <li><Link href="#">Men</Link></li>
            <li><Link href="#">Women</Link></li>
            <li><Link href="#">Kids</Link></li>
            <li><Link href="#">Sale</Link></li>
            <li><Link href="#">SNKRS</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}




 

export default Header;