"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import restaurantData from "../data/resturent";
import { toggleFavourite } from "../redux/favourites/favouriteSlice";

export default function FavouritesPage() {
  const dispatch = useDispatch();
  const favouriteIds = useSelector((state: RootState) => state.favourites.items);

  // Map favourite IDs to restaurant objects
  const favourites = restaurantData.filter((r) => favouriteIds.includes(r.id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#2e0d1d] to-gray-800 px-4 py-12 flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-5xl"
      >
        {favourites.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mx-auto mb-6 h-24 w-24 rounded-full flex items-center justify-center bg-[#e21b70]/10">
              <svg
                width={40}
                height={40}
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#e21b70]"
              >
                <path d="M12 21s-7.534-4.153-10-8.5C.5 8.5 3 6 5.5 6 7.24 6 8.5 7 9.25 8c.75-1 2.01-2 3.75-2C15 6 17.5 8.5 22 12.5 19.534 16.847 12 21 12 21z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">No favourites yet</h1>
            <p className="text-gray-300 text-sm mb-6">
              Save items to see them here. Start exploring and add your favourites.
            </p>
            <Link
              href="/"
              className="inline-block w-full sm:w-1/2 py-3 font-semibold text-white bg-[#e21b70] rounded-xl shadow-md hover:bg-[#e21b70]/90 transition"
            >
              ← Back to Home
            </Link>
          </div>
        ) : (
          <div>
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold text-white mb-2">Your Favourites</h1>
              <p className="text-gray-300 text-sm">
                You have {favourites.length} saved item{favourites.length > 1 ? "s" : ""}.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favourites.map((r) => (
                <motion.article
                  key={r.id}
                  whileHover={{ scale: 1.03 }}
                  className="relative flex flex-col bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 overflow-hidden transition-transform duration-200"
                >
                  {/* Placeholder for Image */}
                  <div className="h-40 w-full flex items-center justify-center bg-[#e21b70]/20 text-[#e21b70] font-semibold text-lg">
                    {r.name}
                  </div>

                  {/* Info */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-1">{r.name}</h3>
                      <p className="text-gray-300 text-sm line-clamp-2">
                        {r.cuisine} • {r.price} • {r.offer}
                      </p>
                    </div>
                  </div>

                  {/* Remove favourite button */}
                  <button
                    onClick={() => dispatch(toggleFavourite(r.id))}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/10 text-pink-500 hover:bg-white/20 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L10 8.586 7.707 6.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 001.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293z" />
                    </svg>
                  </button>
                </motion.article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/"
                className="inline-block w-full sm:w-1/2 py-3 font-semibold text-white bg-[#e21b70] rounded-xl shadow-md hover:bg-[#e21b70]/90 transition"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
