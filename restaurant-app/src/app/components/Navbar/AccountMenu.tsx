"use client";

import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSession, signIn, signOut } from "next-auth/react";

export default function AccountMenu() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  // Login button
  if (!session) {
    return (
      <button
        onClick={() => signIn()}
        className="px-4 py-2 bg-pink-600 text-white rounded-lg shadow hover:bg-pink-700 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-400"
      >
        Login
      </button>
    );
  }

  // Logged-in user menu
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 cursor-pointer px-3 py-2 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-400"
      >
        <FaUserCircle size={22} className="text-gray-700" />
        <span className="hidden sm:block font-medium text-gray-800">
          {session.user?.name || session.user?.email}
        </span>
        <MdKeyboardArrowDown
          className={`transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>

    {open && (
  <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-xl border border-gray-100 z-50 overflow-hidden">
    <div className="py-2">
      <button
        onClick={() => signOut()}
        className="w-full text-left px-4 py-2 text-gray-700 font-medium 
                   hover:bg-gradient-to-r hover:from-pink-50 hover:to-pink-100 
                   hover:text-pink-600 
                   transition-all duration-200 ease-in-out 
                   focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-lg"
      >
        Logout
      </button>
    </div>
  </div>
)}

    </div>
  );
}
