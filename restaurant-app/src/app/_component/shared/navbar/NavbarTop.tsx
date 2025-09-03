import Logo from "@/components/ui/Logo";
import Cart from "./_components/Cart";
import LanguageSelect from "./_components/LanguageSelect";
import AddressSec from "./_components/AddressSec";
import UserContent from "./_components/UserContent";
import UserContentForMobile from "./_components/UserContentForMobile";

const NavbarTop = () => {
  return (
    <div className="flex justify-between items-center py-3.5">
      {/* UserContent for small screen */}
      <UserContentForMobile />

      {/* Site Logo */}
      <Logo />

      {/* Address */}
      <AddressSec />

      {/* Login/Logout, Language, Cart etc sections */}
      <div className="flex items-center gap-2 md:gap-7">
        <UserContent />
        <LanguageSelect />
        <Cart />
      </div>
    </div>
  );
};

export default NavbarTop;
