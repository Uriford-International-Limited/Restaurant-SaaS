"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { incrementQuantity, decrementQuantity, removeFromCart, clearCart } from "../redux/Carts/cartSlice";
import { Trash2, Plus, Minus } from "lucide-react";


// import Image from "next/image";

const CartPage: React.FC = () => {
  const { items, totalPrice, totalQuantity } = useSelector(
    (state: RootState) => state.carts
  );
  const dispatch = useDispatch();

  const tax = totalPrice * 0.05; // 5% tax
  const grandTotal = totalPrice + tax;

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-gray-600">
        {/* <Image
          src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7259655-5929257.png"
          alt="Empty Cart"
          height={30}
          width={30}
          className="w-60 mb-6"
        /> */}
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        <p className="text-gray-500 mt-2">Looks like you haven’t added anything yet.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white dark:bg-gray-900 rounded-2xl shadow p-4"
          >
            <div className="flex items-center gap-4">
              {/* <Image
                src={`https://source.unsplash.com/100x100/?${item.name}`}
                alt={item.name}
                className="w-20 h-20 rounded-xl object-cover"
                height={30}
                width={30}
              /> */}
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500">৳ {item.price}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => dispatch(decrementQuantity(item.id))}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300"
              >
                <Minus size={16} />
              </button>
              <span className="font-semibold">{item.quantity}</span>
              <button
                onClick={() => dispatch(incrementQuantity(item.id))}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300"
              >
                <Plus size={16} />
              </button>
            </div>

            {/* Remove */}
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}

        <button
          onClick={() => dispatch(clearCart())}
          className="mt-4 text-red-600 hover:text-red-800 font-medium"
        >
          Clear Cart
        </button>
      </div>

      {/* Order Summary */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-6 h-fit">
        <h2 className="text-xl font-bold mb-6">Order Summary</h2>

        <div className="flex justify-between mb-3">
          <span>Items ({totalQuantity})</span>
          <span>৳ {totalPrice.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-3">
          <span>Tax (5%)</span>
          <span>৳ {tax.toFixed(2)}</span>
        </div>

        <div className="border-t border-gray-300 my-4"></div>

        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>৳ {grandTotal.toFixed(2)}</span>
        </div>
     

        <button className="w-full mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-2xl shadow-lg transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
