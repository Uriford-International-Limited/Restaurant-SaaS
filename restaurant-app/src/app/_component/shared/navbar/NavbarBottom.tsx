import { PersonStanding, ShoppingBag, Store, Truck } from "lucide-react";
import Link from "next/link";

// Menu items with links
const menuItems = [
  { icon: <Truck />, label: "Delivery", href: "/" },
  { icon: <PersonStanding />, label: "Pick-up", href: "/pick-up" },
  { icon: <ShoppingBag />, label: "Pandamart", href: "/pandamart" },
  { icon: <Store />, label: "Shops", href: "/shops" },
];

const NavbarBottom = () => {
  return (
    <div className="flex md:justify-center gap-6 md:gap-10 py-2 text-gray-700 font-medium overflow-x-scroll scrollbarHide">
      {menuItems.map((item, idx) => (
        <Link key={idx} href={item.href} className="relative text-nowrap group">
          <div className="flex items-center gap-1 md:gap-2 mb-1.5 md:text-lg cursor-pointer transition-transform duration-300 hover:-translate-y-0.5">
            {item.icon} {item.label}
          </div>
          {/* Animated underline */}
          <span className="absolute bottom-0 left-1/2 w-0 h-[3px] bg-secondary rounded-full transition-all duration-400 group-hover:left-0 group-hover:w-full"></span>
        </Link>
      ))}
    </div>
  );
};

export default NavbarBottom;
