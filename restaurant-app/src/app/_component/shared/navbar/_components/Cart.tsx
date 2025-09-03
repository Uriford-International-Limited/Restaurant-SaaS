import { BaggageClaim } from "lucide-react";

const Cart = () => {
  return (
    <div className="flex hover:bg-accent cursor-pointer pr-2 rounded-md">
      <BaggageClaim color="gray" size={40} className="p-2 rounded-md" />
      <p className="size-[17px] flex items-center justify-center text-[11px] rounded-full bg-secondary -mx-3 text-white">
        6
      </p>
    </div>
  );
};

export default Cart;
