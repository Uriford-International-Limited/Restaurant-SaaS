import React from "react";
import IconButton from "../UI/IconButton";
import { CiHeart } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";



const NavIcons = ({ onlyHeart = false }) => {
  return (
    <div className="flex items-center gap-3">
      
      {/* {!onlyHeart && <IconButton icon={<MdTranslate size={20} />} />} */}
      <IconButton icon={<CiHeart size={25} />} />
      {!onlyHeart && <IconButton icon={<LuShoppingCart size={22} />} />}
    </div>
  );
};

export default NavIcons;
