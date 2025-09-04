// import { Pandamart } from "@/icons"

import Image from "next/image";
import panda from "../../../../../public/pandapart.svg";

const Header = () => {
  return (
    <header className="px-2.5 md:px-20 pt-3.5 pb-7 md:pt-4 md:pb-10 bg-primary flex justify-between items-center">
      <div className="flex flex-col md:flex-row md:gap-6 items-center text-white font-medium">
        <Image src={panda} width={200} height={200} alt="Pandamart Logo" className="max-h-10"/>
        {/* <Pandamart className="w-28 h-6 md:w-40 md:h-12"/> */}
        <h4>in 15 minutes</h4>
      </div>

      <button className="py-0.5 md:py-1 px-2 md:px-4 md:hover:scale-[1.01] bg-accent text-black font-medium rounded-lg cursor-pointer transition-all border">
        Shop information
      </button>
    </header>
  );
};

export default Header;
