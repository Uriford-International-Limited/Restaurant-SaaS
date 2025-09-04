import Sidebar from '@/app/_component/shared/sidebar/Sidebar'
import Card from '@/app/_component/UI/Card'
import CardBox from '@/app/_component/UI/CardBox'
import SearchBox from '@/app/_component/UI/SearchBox'
import Slider from '@/app/_component/UI/Slider/Slider'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="container relative mx-auto xl:grid grid-cols-9 gap-5 2xl:gap-12">
      <div className="hidden xl:block col-span-2">
        <div className="sticky top-[122px] p-4 h-[calc(100vh_-_122px)]">
          <div className="size-full border border-fp-gray rounded-2xl overflow-y-scroll">
            <Sidebar/>
          </div>
        </div>
      </div>

      <div className="px-4 col-span-7 mt-5 md:pt-8">
        {/* <SearchBox /> */}
        <SearchBox />


        {/* Deals Section */}
        <Slider seeMore categName="Your favourite cuisines">
          {Array.from({ length: 10 }).map((_, i) => (
            <Card
              key={i}
              size="sm"
              content={{
                banner:
                  "https://images.deliveryhero.io/image/fd-bd/LH/yzit-listing.jpg?width=400&amp;height=225",
                title: "Bazar Lagbe",
              }}
            />
          ))}
        </Slider>


        <CardBox categName="All restaurants">
          {Array.from({ length: 10 }).map((_, i) => (
            <Card
              key={i}
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
        </CardBox>
      </div>

    </div>
  )
}

export default page