import Card from "@/app/_component/UI/Card";
import SearchBox from "@/app/_component/UI/SearchBox";
import Image from "next/image";
import CardBoxForStore from "./_components/CardBoxForStore";
import Sidebar from "@/app/_component/shared/sidebar/Sidebar";
import Slider from "@/app/_component/UI/Slider/Slider";

import { allStores } from "@/datas/stores";

export default function Shops() {
  return (
    <div className="container relative mx-auto xl:grid grid-cols-9 gap-5 2xl:gap-12">
      <div className="hidden xl:block col-span-2">
        <div className="sticky top-[122px] p-4 h-[calc(100vh_-_122px)]">
          <div className="size-full border border-fp-gray rounded-2xl overflow-y-scroll">
            <Sidebar />
          </div>
        </div>
      </div>

      <div className="px-4 col-span-7 mt-5 md:pt-8">
        {/* <SearchBox /> */}
        <SearchBox />

        {/* Deals Section */}
        <Slider seeMore categName="Your daily deals">
          {Array.from({ length: 10 }).map((_, i) => (
            <Image
              key={i}
              src="https://images.deliveryhero.io/image/fd-bd/campaign-assets/02e77d64-5036-11f0-a83e-0657f0b942b8/desktop_tile_EnigiJ.png"
              height={500}
              width={500}
              alt="Banner"
              className="w-[300px] cursor-pointer hover:scale-105 transition"
            />
          ))}
        </Slider>

        {/* New on foodpanda Section */}
        <Slider seeMore categName="Deals & More">
          {Array.from({ length: 10 }).map((_, i) => (
            <Card
              key={i}
              size="md"
              content={{
                banner:
                  "https://images.deliveryhero.io/image/fd-bd/LH/yzit-listing.jpg?width=400&amp;height=225",
                title: "Bazar Lagbe",
                description: "Kabab",
                rating: 5.6,
                ratingPersion: 140,
                deliveryTime: "25-35",
                deliveryCharge: "49",
              }}
            />
          ))}
        </Slider>

        <CardBoxForStore allStores={allStores} />
      </div>
    </div>
  );
}
