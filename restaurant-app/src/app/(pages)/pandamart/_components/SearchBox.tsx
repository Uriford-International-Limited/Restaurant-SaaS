"use client";

import { ArrowUpLeft, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
    <>
      <div className="w-11/12 md:w-auto container lg:w-[85%] mx-auto bg-white shadow-lg -translate-y-7 sticky top-38 md:top-41 z-50">
        <div className="flex items-center gap-2 md:gap-4 p-3 md:p-4">
          <Search className="text-gray-600" />
          <input
            type="text"
            placeholder="Search products"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            className="w-full outline-none border-none peer"
          />
          <p
            onClick={() => setValue("")}
            className={`hover:underline cursor-pointer ${
              !(value.length > 0) && " hidden peer-focus:block"
            }`}
          >
            Cancel
          </p>
        </div>

        {value.length > 0 && (
          <div className="md:max-h-[37rem] w-full border-t border-black/30 p-1.5 md:p-2 overflow-y-scroll absolute top-full left-0 bg-white">
            <ul>
              {arr.map(({ label }, idx) => (
                <li key={idx} className="md:mb-1 cursor-pointer">
                  <Link
                    key={idx}
                    href={"/#"}
                    className="flex justify-between gap-2 md:gap-3 p-2 md:p-2.5 hover:bg-gray-400/20 transition-all"
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
    </>
  );
};

export default SearchBox;
