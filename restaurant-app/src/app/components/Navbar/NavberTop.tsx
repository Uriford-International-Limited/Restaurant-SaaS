import React from "react";
import Logo from "../Navbar/Logo";
import LocationBadge from "../Navbar/LocationBadge";
import AccountMenu from "../Navbar/AccountMenu";
import NavIcons from "../Navbar/NavIcons";
import NavbarBottom from "./NavbarBottom";

const NavbarTop: React.FC = () => {
  return (
    <div className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        {/* ===== Mobile Layout ===== */}
        <div className="flex w-full items-center justify-between md:hidden">
          {/* Left: Account */}
          <AccountMenu />

          {/* Center: Logo */}
          <Logo />

          {/* Right: Only Fav & Cart */}
          <NavIcons />
        </div>

        {/* ===== Desktop Layout ===== */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Left: Logo */}
          <Logo />

          {/* Center: Location */}
          <LocationBadge />

          {/* Right: Account + All Icons */}
          <div className="flex items-center gap-4">
            <AccountMenu />
            <NavIcons />
          </div>
        </div>
      </div>
      <NavbarBottom/>
    </div>
  );
};

export default NavbarTop;
