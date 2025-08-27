import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

const AccountMenu = () => {
  return (
    <Link href={"login"} className="flex items-center gap-1 cursor-pointer hover:text-pink-600">
      <FaUserCircle size={22} />
      <span className="hidden sm:block font-medium">Account</span>
      <MdKeyboardArrowDown />
    </Link>
  );
};

export default AccountMenu;
