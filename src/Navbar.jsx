import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent flex items-center justify-between px-4 py-2">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-white mr-2"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
          <polyline points="8 6 12 2 16 6"></polyline>
        </svg>
        <span className="text-white font-bold text-lg">KeyKeeper</span>
      </div>
      <div>
        <button className="text-white bg-transparent border border-white rounded px-4 py-2 mr-2">
          Login
        </button>
        <button className="text-white bg-transparent border border-white rounded px-4 py-2">
          Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
