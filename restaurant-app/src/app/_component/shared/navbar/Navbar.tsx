import NavbarBottom from "./NavbarBottom";
import NavbarTop from "./NavbarTop";

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-white shadow-xl px-3 z-50">
      <div className="container mx-auto">
        <NavbarTop />
        <NavbarBottom />
      </div>
    </header>
  );
};

export default Navbar;
