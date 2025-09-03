"use client";

import { ArrowUpLeft, Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const popularItems = [
  "ice cream",
  "cat food",
  "nutella",
  "flowers",
  "7up",
  "medicine pharmacy",
  "pharmacy",
  "vape",
  "cat litter",
  "coke",
];

const arr = [
  { label: "djlkkalsdk", link: "djlkkalsdk" },
  { label: "djlkkalsdk", link: "djlkkalsdk" },
  { label: "djlkkalsdk", link: "djlkkalsdk" },
  { label: "djlkdfgdfg", link: "djlkkalsdk" },
  { label: "djlkkalsdk", link: "djlkkalsdk" },
  { label: "djlkkalsdk", link: "djlkkalsdk" },
  { label: "djlkkalsdk", link: "djlkkalsdk" },
  { label: "djlkkalsdk", link: "djlkkalsdk" },
  { label: "djlkkalsdk", link: "djlkkalsdk" },
  { label: "djlkkalsdk", link: "djlkkalsdk" },
];

const SearchBox = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="relative px-3 md:px-5 bg-fp-light rounded-full flex items-center gap-3 bg-accent hover:ring ring-gray-500/50 transition duration-200 z-40">
      <Search />
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        placeholder="Search for shops, categories, and products"
        className="w-full text-sm md:text-base border-none outline-none placeholder:font-semibold py-2 md:py-5 peer"
      />
      <p
        onClick={() => setValue("")}
        className={`hover:underline text-sm md:text-base cursor-pointer ${
          !(value.length > 0) && "hidden peer-focus:block"
        }`}
      >
        <span className="hidden md:block">Cancel</span>
        <X size={15} className="md:hidden"/>
      </p>

      <div
        className={`hidden p-4 absolute w-full top-[120%] left-0 bg-accent rounded-2xl ${
          !(value.length > 0) && ` peer-focus:block`
        }`}
      >
        <h2 className="text-xl font-semibold py-2">Popular searches</h2>
        <ul className="flex flex-wrap gap-2 mt-3">
          {popularItems.map((item, i) => (
            <li
              key={i}
              className="p-1 px-3 border border-gray-300 rounded-full cursor-pointer hover:bg-[#f7f7f7]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {value.length > 0 && (
        <div className="md:max-h-[37rem] w-full p-1.5 md:p-2 overflow-y-scroll absolute top-[120%] left-0 bg-accent rounded-2xl scrollbarHide">
          <ul>
            {arr.map(({ label }, idx) => (
              <li key={idx} className="md:mb-1 cursor-pointer">
                <Link
                  key={idx}
                  href={"/#"}
                  className="flex flex-wrap gap-2 rounded-sm md:gap-3 p-2 md:p-2.5 hover:bg-gray-400/20 transition-all"
                >
                  <div className="flex gap-2 md:gap-3">
                    <Search />
                    <p className="w-full">{label}</p>
                  </div>
                  <ArrowUpLeft />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
