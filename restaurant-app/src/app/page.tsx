"use client";
import React, { useState } from "react";
import Sidebar from "./components/sidebar/SideBar";
import { menuItems } from "./data/menuItems";
import type { MenuItem } from "./data/menuItems";

const Home: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(menuItems[0]?.id ?? "");

  const selectedItem: MenuItem | undefined = menuItems.find(
    (item: MenuItem) => item.id === selectedId
  );

  return (
    <div className="flex min-h-screen">
      <div className="lg:sticky lg:top-0">
        <Sidebar selectedId={selectedId} onSelect={setSelectedId} />
      </div>

      <main className="flex-1 p-6 ">
        {!selectedItem ? (
          <p className="text-gray-500 text-lg">
            Select a food item to see details
          </p>
        ) : (
          <div>{selectedItem.content}</div>
        )}
      </main>
    </div>
  );
};

export default Home;
