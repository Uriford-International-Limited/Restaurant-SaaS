import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="https://logolook.net/wp-content/uploads/2023/11/FoodPanda-Logo-2012.png"
      alt="FoodPanda Logo"
      width={120}
      height={50}
      priority
      className="cursor-pointer"
    />
  );
};

export default Logo;
