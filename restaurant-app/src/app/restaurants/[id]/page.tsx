"use client";

import React from "react";
import restaurantData from "../../data/resturent";
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "../../redux/favourites/favouriteSlice";
import { addToCart } from "../../redux/Carts/cartSlice";
import { RootState } from "../../store/store";

interface Params {
  params: { id: string };
}

export default function RestaurantPage({ params }: Params) {
  const dispatch = useDispatch();
  const favouriteIds = useSelector((state: RootState) => state.favourites.items);

 const { id } = params;
  const restaurant = restaurantData.find((r) => r.id === Number(id));

  if (!restaurant)
    return (
      <div className="p-6 text-center text-white">Restaurant not found</div>
    );

  const isFav = favouriteIds.includes(restaurant.id);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      
      {/* Restaurant Card */}
      <div className="w-full max-w-5xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
        
        {/* Banner */}
        <div className="relative h-64 w-full bg-gradient-to-br from-pink-500/40 to-pink-700/30 flex items-center justify-center text-4xl sm:text-5xl font-bold text-white">
          {restaurant.name}
        </div>

        {/* Info & Actions */}
        <div className="p-6 sm:flex sm:justify-between sm:items-start gap-6">
          
          {/* Info */}
          <div className="flex-1 space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold">{restaurant.name}</h1>
            <p className="text-gray-300 text-lg">{restaurant.cuisine} • {restaurant.priceLabel} • {restaurant.offer}</p>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 font-semibold">⭐ {restaurant.rating}</span>
              <span className="text-gray-400">• {restaurant.distance} km • {restaurant.deliveryTime} mins</span>
            </div>
            {restaurant.isSuper && (
              <span className="inline-block mt-2 px-4 py-1 text-sm font-semibold text-pink-500 bg-pink-500/20 rounded-full">
                Super Restaurant
              </span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 sm:items-end">
            {/* Favourite */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                dispatch(toggleFavourite(restaurant.id));
              }}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition text-pink-500 font-semibold"
            >
              {isFav ? <AiFillHeart size={22} /> : <AiOutlineHeart size={22} />}
              {isFav ? "Remove Favourite" : "Add Favourite"}
            </button>

            {/* Add to Cart */}
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: restaurant.id,
                    name: restaurant.name,
                    price: restaurant.price, // number type price
                  })
                )
              }
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-pink-500 hover:bg-pink-600 transition text-white font-semibold"
            >
              <AiOutlineShoppingCart size={22} /> Add to Cart
            </button>
          </div>
        </div>

        {/* Description / Story */}
        <div className="px-6 pb-6 pt-2">
          <h2 className="text-2xl font-semibold mb-2">About {restaurant.name}</h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus, mi quis viverra ornare,
            eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique.
          </p>
        </div>
      </div>
    </div>
  );
}
