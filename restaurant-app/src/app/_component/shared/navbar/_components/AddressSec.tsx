"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CircleX, LocateFixed, MapPin, Search } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { cn } from "@/lib/utils";

const districs: string[] = [
  "Dhaka",
  "Chittagong",
  "Sylhet",
  "Rajshahi",
  "Rangpur",
  "Dhaka",
  "Chittagong",
];

const AddressSec = () => {
  const [value, setValue] = useState<string>("Street, Postal code");

  return (
    <div className="hidden md:block">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            className="text-base font-medium text-gray-600 cursor-pointer"
          >
            <MapPin className="size-5" />
            <address className="max-w-90 overflow-hidden text-ellipsis text-nowrap">
              Your location here -
            </address>
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[40rem]">
          <div className="flex w-full items-center gap-4">
            <div className="w-full flex gap-3 items-center py-2.5 px-3 border rounded-md">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full border-none outline-none font-light"
              />
              <CircleX
                onClick={() => setValue("")}
                className={cn(
                  "block cursor-pointer",
                  value.length === 0 && "hidden"
                )}
              />
              <button
                className={cn(
                  "hidden gap-1 text-nowrap outline-none border-none cursor-pointer hover:text-primary font-medium transition",
                  value.length === 0 && "flex"
                )}
              >
                <LocateFixed color="var(--primary)" /> Locate me
              </button>
            </div>

            <Button
              type="button"
              className="h-full bg-secondary text-white cursor-pointer"
            >
              <ArrowRight size={30} className="size-7" />
            </Button>
          </div>

          {/* Bottom content */}
          <div className="my-8">
            <div className={cn("hidden", value.length === 0 && "block")}>
              <h2 className="text-xl font-bold my-4">Popular locations</h2>
              <ul className="flex flex-wrap gap-2">
                {districs.map((distric, idx) => (
                  <li key={idx}>
                    <Button variant={"outline"} className="cursor-pointer">
                      {distric}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Search filetring check */}
            <div>
              <h3 className="text-lg font-semibold my-4">Did you mean:</h3>
              <ul className="space-y-1 max-h-[30rem] overflow-hidden">
                {districs.map((distric, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-1.5 p-1.5 rounded-sm hover:bg-gray-500/15 cursor-pointer"
                  >
                    <Search color="gray" size={21} />
                    <p className="text-nowrap  text-ellipsis overflow-hidden">
                      {distric}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default AddressSec;
