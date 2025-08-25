import React from "react";
import { FaMotorcycle, FaStore, FaShoppingBasket } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";

const NavbarBottom = () => {
  const menuItems = [
    { icon: <FaMotorcycle />, label: "Delivery" },
    { icon: <FaStore />, label: "Pick-up" },
    { icon: <MdOutlineLocalGroceryStore />, label: "Pandamart" },
    { icon: <FaShoppingBasket />, label: "Shop" },
  ];

  return (
    <div className="bg-white shadow-sm">
      <div className="flex justify-center gap-10 py-4 text-gray-700 text-l font-medium">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center cursor-pointer group transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-2 mb-3 text-l">
              {item.icon} {item.label}
            </div>
            {/* Animated underline */}
            <span className="absolute bottom-0 left-1/2 w-0 h-[4px] bg-pink-600 rounded-full transition-all duration-400 group-hover:left-0 group-hover:w-full"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarBottom;
