"use client";

import React from "react";
import Link from "next/link";
import IconButton from "../UI/IconButton";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";

interface NavIconsProps {
  onlyHeart?: boolean;
}

const NavIcons: React.FC<NavIconsProps> = ({ onlyHeart = false }) => {
  return (
    <div className="flex items-center gap-3">
      {/* Heart icon with Link */}
      <Link href="favourite">
        <IconButton icon={<CiHeart size={25} />} />
      </Link>

      {/* Cart icon (optional) */}
      {!onlyHeart && (
        <Link href="/cart">
          <IconButton icon={<LuShoppingCart size={22} />} />
        </Link>
      )}
    </div>
  );
};

export default NavIcons;
