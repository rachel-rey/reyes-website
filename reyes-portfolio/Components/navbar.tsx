import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-navbar text-white shadow-md sm:p-20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/" className="hover:text-yellow-900">
            Rachel Reyes
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-yellow-900">
            Home
          </Link>
          <Link href="/aboutMe" className="hover:text-yellow-900">
            About Me
          </Link>
          <Link href="/project" className="hover:text-yellow-900">
            Projects
          </Link>
          <Link href="/health" className="hover:text-yellow-900">
            Health
          </Link>
          <Link href="/contact" className="hover:text-yellow-900">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white focus:outline-none focus:ring-2 focus:ring-yellow-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
