"use client";
import React, { useState, useMemo } from "react";
import { SlidersHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import AdvanceFilterSidebar from "./components/sidebar/AdvanceFilterSidebar";
import restaurantData from "./data/resturent";

const HomePage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // এখানে সব filter state নিতে হবে
  const { selectedCuisines, selectedPrices, offers, quickFilter, sortBy } = useSelector(
    (state: RootState) => state.filters
  );

  const filteredRestaurants = useMemo(() => {
    let res = restaurantData
      .filter((r) => (selectedCuisines.length ? selectedCuisines.includes(r.cuisine) : true))
      .filter((r) => (selectedPrices.length ? selectedPrices.includes(r.price) : true))
      .filter((r) => (offers.length ? offers.includes(r.offer) : true));

    // Quick filter logic
    quickFilter.forEach((f) => {
      if (f === "rating4") res = res.filter((r) => r.rating >= 4);
      if (f === "super") res = res.filter((r:any) => r.isSuper); // যদি isSuper flag থাকে
    });

    // Sort logic
    if (sortBy === "fastest") res.sort((a, b) => a.deliveryTime - b.deliveryTime);
    if (sortBy === "distance") res.sort((a, b) => a.distance - b.distance);
    if (sortBy === "top") res.sort((a, b) => b.rating - a.rating);

    return res;
  }, [selectedCuisines, selectedPrices, offers, quickFilter, sortBy]);

  return (
    <div className="flex">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <AdvanceFilterSidebar />
      </div>

      {/* Mobile Filter Button */}
      <div className="lg:hidden fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500 text-white"
        >
          <SlidersHorizontal size={20} /> Filter
        </button>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)} />
          <div className="fixed top-0 left-0 w-72 h-full overflow-y-auto">
            <AdvanceFilterSidebar />
          </div>
        </>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Restaurants</h1>
        {filteredRestaurants.length === 0 ? (
          <p>No restaurants found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredRestaurants.map((r) => (
              <div key={r.id} className="p-4 border rounded-lg shadow">
                <h2 className="font-semibold">{r.name}</h2>
                <p>
                  {r.cuisine} • {r.price} • {r.offer}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;
