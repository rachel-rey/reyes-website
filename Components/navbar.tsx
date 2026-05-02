import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  console.log("its loading")
  return (
    <nav className=" shadow-md p-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/" className="hover:text-yellow-900">
            Rachel Reyes
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-yellow-900">Home</Link>
          <Link href="/aboutMee" className="hover:text-yellow-900">About Me</Link>
          <Link href="/project" className="hover:text-yellow-900">Projects</Link>
          <Link href="/contact" className="hover:text-yellow-900">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden hover:text-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-900"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex flex-col items-center justify-center space-y-6 text-2xl z-50">
          <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-yellow-900"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
          <Link href="/" className="text-white hover:text-yellow-900" onClick={toggleMenu}>Home</Link>
          <Link href="/aboutMe" className="text-white hover:text-yellow-900" onClick={toggleMenu}>About Me</Link>
          <Link href="/project" className="text-white hover:text-yellow-900" onClick={toggleMenu}>Projects</Link>
          <Link href="/contact" className="text-white hover:text-yellow-900" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
