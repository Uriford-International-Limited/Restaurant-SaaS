"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  setSortBy,
  toggleQuickFilter,
  toggleOffer,
  toggleCuisine,
  togglePrice,
  clearAll,
} from "../../redux/filters/filterSlice";

const cuisines = ["Bangladeshi", "Indian", "Chinese", "Italian", "Thai"];
const prices = ["Low", "Medium", "High"];

const AdvanceFilterSidebar: React.FC = () => {
  const dispatch = useDispatch();
  const { sortBy, quickFilter, offers, selectedCuisines, selectedPrices } = useSelector(
    (state: RootState) => state.filters
  );

  const [searchCuisine, setSearchCuisine] = useState("");

  return (
    <aside className="w-full sm:w-80 lg:w-72 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-xl p-5 flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3 sticky top-0 bg-white dark:bg-gray-900 z-10">
        <h2 className="text-xl font-semibold">Filters</h2>
        <button
          onClick={() => dispatch(clearAll())}
          className="text-sm text-pink-500 hover:text-pink-600 flex items-center gap-1 transition-colors cursor-pointer"
        >
          <X size={16} /> Clear All
        </button>
      </div>

      {/* Scrollable Filters */}
      <div className="flex flex-col gap-6 overflow-y-auto max-h-[calc(100vh-4rem)]">
        {/* Sort By */}
        <section>
          <h3 className="font-medium mb-2">Sort by</h3>
          {["relevance", "fastest", "distance", "top"].map((val) => (
            <label key={val} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={sortBy === val}
                onChange={() => dispatch(setSortBy(val))}
                className="accent-pink-500"
              />
              {val}
            </label>
          ))}
        </section>

        {/* Quick Filter */}
        <section>
          <h3 className="font-medium mb-2">Quick Filter</h3>
          {[{ key: "rating4", label: "Rating 4+" }, { key: "super", label: "Super restaurant" }].map(
            (f) => (
              <button
                key={f.key}
                onClick={() => dispatch(toggleQuickFilter(f.key))}
                className={`px-3 py-1 rounded-full border ${
                  quickFilter.includes(f.key) ? "bg-pink-500 text-white" : "bg-gray-100"
                }`}
              >
                {f.label}
              </button>
            )
          )}
        </section>

        {/* Offers */}
        <section>
          <h3 className="font-medium mb-2">Offers</h3>
          {["Free delivery", "Accepts vouchers", "Deals"].map((offer) => (
            <label key={offer} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={offers.includes(offer)}
                onChange={() => dispatch(toggleOffer(offer))}
                className="accent-pink-500"
              />
              {offer}
            </label>
          ))}
        </section>

        {/* Cuisines */}
        <section>
          <h3 className="font-medium mb-2">Cuisines</h3>
          <input
            type="text"
            placeholder="Search cuisine"
            value={searchCuisine}
            onChange={(e) => setSearchCuisine(e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          {cuisines
            .filter((c) => c.toLowerCase().includes(searchCuisine.toLowerCase()))
            .map((c) => (
              <label key={c} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedCuisines.includes(c)}
                  onChange={() => dispatch(toggleCuisine(c))}
                  className="accent-pink-500"
                />
                {c}
              </label>
            ))}
        </section>

        {/* Price */}
        <section>
          <h3 className="font-medium mb-2">Price</h3>
          {prices.map((p) => (
            <label key={p} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedPrices.includes(p)}
                onChange={() => dispatch(togglePrice(p))}
                className="accent-pink-500"
              />
              {p}
            </label>
          ))}
        </section>
      </div>
    </aside>
  );
};

export default AdvanceFilterSidebar;
