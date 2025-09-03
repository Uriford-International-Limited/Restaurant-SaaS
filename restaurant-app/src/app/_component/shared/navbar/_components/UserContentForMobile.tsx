import Logo from "@/components/ui/Logo";
import { User, X } from "lucide-react";

const length = 8;

const UserContentForMobile = () => {
  return (
    <div className="sm:hidden ">
      {/* checkbox */}
      <input type="checkbox" id="menuToggle" className="hidden peer" />

      <label htmlFor="menuToggle" className="peer-checked:hidden">
        <User className="bg-accent p-1.5 size-10 rounded-full" />
      </label>

      {/* Main user content */}
      <div className="absolute bg-white top-0 left-0 w-full h-screen -translate-x-full peer-checked:translate-0 transition duration-150">
        <div className="flex justify-between items-center p-4 pb-18 border-b">
          <Logo />
          <label
            htmlFor="menuToggle"
            className="cursor-pointer flex items-center"
          >
            <X className="mr-1" />
          </label>
        </div>

        <ul className="p-3">
          {Array.from({ length }).map((_, i) => (
            <li key={i} className="py-1.5 px-2.5 hover:bg-accent rounded-sm">
              aasd
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserContentForMobile;
