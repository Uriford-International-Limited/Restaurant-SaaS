import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex gap-1 md:gap-2 items-center cursor-pointer">
      <Image src="./pandaface.svg" width={200} height={100} alt="LOGO HEAD" className="w-7 md:w-8"/>
      <Image src="./pandaname.svg" width={200} height={100} alt="LOGO NAME" className="w-26 md:w-28"/>
    </div>
  );
};

export default Logo;
