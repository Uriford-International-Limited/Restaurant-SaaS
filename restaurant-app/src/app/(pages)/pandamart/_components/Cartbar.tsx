import Link from "next/link";

const Cartbar = () => {
  return (
    <>
      <div className=" "></div>
      <h3 className="font-bold text-xl text-center my-4">Your cart</h3>
      <p className="text-fp-gray text-center">
        Start adding items to your cart
      </p>

      <div className="flex items-center justify-between my-7 mt-24">
        <p>Subtotal</p>
        <p>Tk 0</p>
      </div>

      <div className="px-2">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-lg">
            Total{" "}
            <span className="text-xs font-normal text-fp-gray">
              (incl. fees and tax)
            </span>
          </p>
          <p>Tk 0</p>
        </div>
        <Link href="#" className="underline text-lg">
          See summary
        </Link>
        <button className="p-3 w-full rounded-lg bg-fp-gray/25 font-semibold text-fp-gray cursor-pointer mt-3">
          Go to checkout
        </button>
      </div>
    </>
  );
};

export default Cartbar;
