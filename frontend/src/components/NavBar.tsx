import { useState, useRef } from "react";

const Avatar = ({ imgSrc }: { imgSrc: string }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    // Clear any existing timer to keep the dropdown open
    if (dropdownTimer.current) {
      clearTimeout(dropdownTimer.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    // Set a small delay before closing the dropdown
    dropdownTimer.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // Adjust delay (in milliseconds) as needed
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Avatar Image */}
      <img
        src={imgSrc}
        alt="User Avatar"
        className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-500 cursor-pointer"
      />

      {/* Online Indicator */}
      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-50 rounded-lg shadow-lg z-50">
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-blue-100 hover:text-blue-700"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-blue-100 hover:text-blue-700"
              >
                My Blogs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-red-500 hover:bg-red-100 "
              >
                Log Out{" →"}
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Avatar;

// Navbar Component
export const NavBar = () => {
  return (
    <div>
      <nav className="bg-gray-50 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo Section */}
          <a href="blogs" className="flex items-center space-x-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmV7PFHn-GBRUSQVWseyD6UqF3tpAE1nwgA&s"
              className="h-8"
              alt="BlogStream Logo"
            />
            <span className="self-center text-2xl font-semibold text-gray-800">
              BlogStream
            </span>
          </a>

          {/* Right Side: Avatar */}
          <div className="flex md:order-2 space-x-4">
            <Avatar imgSrc="https://miro.medium.com/v2/resize:fit:523/1*fwP9AHHpNSm7dzm13oIlhA.png" />
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 font-medium">
              <li>
                <a
                  href="blogs"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-50 hover:text-blue-700"
                  aria-current="page"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/blogs"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-50 hover:text-blue-700"
                >
                  New Blogs
                </a>
              </li>
              <li>
                <a
                  href="/create"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-50 hover:text-blue-700"
                >
                  Create a blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
