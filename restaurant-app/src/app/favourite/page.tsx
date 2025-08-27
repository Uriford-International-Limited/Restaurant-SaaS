"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface FavouriteItem {
  title?: string;
  description?: string;
  image?: string;
  alt?:string;
}

export default function FavouritesPage() {
  const favourites: FavouriteItem[] = []; // replace with real data later

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-[#2e0d1d] to-gray-800 px-4 py-12 mt-[100px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 p-8"
      >
        {favourites.length === 0 ? (
          <div className="text-center">
            {/* Heart Badge */}
            <div className="mx-auto mb-6 h-20 w-20 rounded-full flex items-center justify-center bg-[#e21b70]/10">
              <svg
                width={36}
                height={36}
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#e21b70]"
                aria-hidden="true"
              >
                <path d="M12 21s-7.534-4.153-10-8.5C.5 8.5 3 6 5.5 6 7.24 6 8.5 7 9.25 8c.75-1 2.01-2 3.75-2C15 6 17.5 8.5 22 12.5 19.534 16.847 12 21 12 21z" />
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-white mb-2">
              No favourites yet
            </h1>
            <p className="text-gray-300 text-sm mb-6">
              Save items to see them here. Start exploring and add your favourites.
            </p>

            <Link
              href="/"
              className="inline-block w-full py-3 font-semibold text-white bg-[#e21b70] rounded-xl shadow-md hover:bg-[#e21b70]/90 transition"
            >
              ← Back to Home
            </Link>
          </div>
        ) : (
          <div>
            <div className="mb-6 text-center">
              <h1 className="text-3xl font-bold text-white mb-2">Your Favourites</h1>
              <p className="text-gray-300 text-sm">
                You have {favourites.length} saved item{favourites.length > 1 ? "s" : ""}.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {favourites.map((item, index) => (
                <motion.article
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 overflow-hidden transition transform"
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title ?? "Favourite item"}
                      width={50}
                      height={50}
                      className="h-40 w-full object-cover"
                    />
                  ) : (
                    <div className="h-40 w-full flex items-center justify-center bg-[#e21b70]/20 text-[#e21b70] font-semibold">
                      No Image
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-1">{item.title ?? "Favourite item"}</h3>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {item.description ?? "Short description…"}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/"
                className="inline-block w-full py-3 font-semibold text-white bg-[#e21b70] rounded-xl shadow-md hover:bg-[#e21b70]/90 transition"
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
