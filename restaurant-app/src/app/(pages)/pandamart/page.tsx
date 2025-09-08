import Header from "./_components/Header";
import SearchBox from "./_components/SearchBox";
import AllCategSection from "./_components/AllCategSection";
import Cartbar from "./_components/Cartbar";
import Slider from "@/app/_component/UI/Slider/Slider";
import { Plus } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Pandamart = () => {
  return (
    <div className="flex">
      <div className="w-full lg:w-10/12">
        <Header />
        <SearchBox />

        <main className="container lg:w-[85%] mx-auto space-y-8 pb-8">

          <Carousel className="w-full px-2 md:p-0">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="md:grid grid-cols-2 gap-3">
                    <Image src="https://images.deliveryhero.io/image/adtech-display/campaigns/fp_bd/f878961f-8695-11f0-b3a6-2a750033deb8.jpeg" width={1000} height={500} alt=""/>
                    <Image src="https://images.deliveryhero.io/image/adtech-display/campaigns/fp_bd/9742c465-8735-11f0-bb93-d6ccf16bf705.png" width={1000} height={500} alt="" loading="lazy" placeholder="blur" blurDataURL={"ALAMIN"} className=" hidden md:block"/>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden xl:flex"/>
            <CarouselNext className="hidden xl:flex"/>
          </Carousel>

          <AllCategSection />

          <Slider seeMore categName="Hot Deals">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-33 md:w-38 leading-5">
                <div
                  className="relative size-33 md:size-38 bg-accent shadow-sm mb-2 overflow-hidden cursor-pointer
          bg-[url('https://images.deliveryhero.io/image/product-information-management/67cec7d6505f4e014c625534.jpg?height=140&dpi=1')]
          "
                >
                  <Plus className="absolute size-7 bottom-3 right-3 bg-white border border-gray-300 rounded-full p-1 cursor-pointer hover:scale-105 transition" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-primary font-medium">
                    Tk 79 <del className="text-gray-400 text-sm">Tk 84</del>
                  </h4>
                  <h5 className="inline-block text-primary text-xs p-1 px-2.5 rounded-full bg-secondary/25">
                    Save Tk4
                  </h5>
                  <p className="text-gray-400 text-ellipsis font-normal line-clamp-2">
                    Hanay Premium Banana Sagor Kola 6 Pieces
                  </p>
                </div>
              </div>
            ))}
          </Slider>

          <Slider seeMore categName="Hot Deals">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-33 md:w-38 leading-5">
                <div
                  className="relative size-33 md:size-38 bg-accent shadow-sm mb-2 overflow-hidden cursor-pointer
          bg-[url('https://images.deliveryhero.io/image/product-information-management/67cec7d6505f4e014c625534.jpg?height=140&dpi=1')]
          "
                >
                  <Plus className="absolute size-7 bottom-3 right-3 bg-white border border-gray-300 rounded-full p-1 cursor-pointer hover:scale-105 transition" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-primary font-medium">
                    Tk 79 <del className="text-gray-400 text-sm">Tk 84</del>
                  </h4>
                  <h5 className="inline-block text-primary text-xs p-1 px-2.5 rounded-full bg-secondary/25">
                    Save Tk4
                  </h5>
                  <p className="text-gray-400 text-ellipsis font-normal line-clamp-2">
                    Hanay Premium Banana Sagor Kola 6 Pieces
                  </p>
                </div>
              </div>
            ))}
          </Slider>

          <Carousel className="w-full px-2 md:p-0">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="md:grid grid-cols-2 gap-3">
                    <Image src="https://images.deliveryhero.io/image/adtech-display/campaigns/fp_bd/f878961f-8695-11f0-b3a6-2a750033deb8.jpeg" width={1000} height={500} alt=""/>
                    <Image src="https://images.deliveryhero.io/image/adtech-display/campaigns/fp_bd/9742c465-8735-11f0-bb93-d6ccf16bf705.png" width={1000} height={500} alt="" loading="lazy" placeholder="blur" blurDataURL={"ALAMIN"} className=" hidden md:block"/>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden xl:flex"/>
            <CarouselNext className="hidden xl:flex"/>
          </Carousel>

          <Slider seeMore categName="Hot Deals">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-33 md:w-38 leading-5">
                <div
                  className="relative size-33 md:size-38 bg-accent shadow-sm mb-2 overflow-hidden cursor-pointer
          bg-[url('https://images.deliveryhero.io/image/product-information-management/67cec7d6505f4e014c625534.jpg?height=140&dpi=1')]
          "
                >
                  <Plus className="absolute size-7 bottom-3 right-3 bg-white border border-gray-300 rounded-full p-1 cursor-pointer hover:scale-105 transition" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-primary font-medium">
                    Tk 79 <del className="text-gray-400 text-sm">Tk 84</del>
                  </h4>
                  <h5 className="inline-block text-primary text-xs p-1 px-2.5 rounded-full bg-secondary/25">
                    Save Tk4
                  </h5>
                  <p className="text-gray-400 text-ellipsis font-normal line-clamp-2">
                    Hanay Premium Banana Sagor Kola 6 Pieces
                  </p>
                </div>
              </div>
            ))}
          </Slider>

          <Slider seeMore categName="Hot Deals">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-33 md:w-38 leading-5">
                <div
                  className="relative size-33 md:size-38 bg-accent shadow-sm mb-2 overflow-hidden cursor-pointer
          bg-[url('https://images.deliveryhero.io/image/product-information-management/67cec7d6505f4e014c625534.jpg?height=140&dpi=1')]
          "
                >
                  <Plus className="absolute size-7 bottom-3 right-3 bg-white border border-gray-300 rounded-full p-1 cursor-pointer hover:scale-105 transition" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-primary font-medium">
                    Tk 79 <del className="text-gray-400 text-sm">Tk 84</del>
                  </h4>
                  <h5 className="inline-block text-primary text-xs p-1 px-2.5 rounded-full bg-secondary/25">
                    Save Tk4
                  </h5>
                  <p className="text-gray-400 text-ellipsis font-normal line-clamp-2">
                    Hanay Premium Banana Sagor Kola 6 Pieces
                  </p>
                </div>
              </div>
            ))}
          </Slider>

          <Slider seeMore categName="Hot Deals">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="w-33 md:w-38 leading-5">
                <div
                  className="relative size-33 md:size-38 bg-accent shadow-sm mb-2 overflow-hidden cursor-pointer
          bg-[url('https://images.deliveryhero.io/image/product-information-management/67cec7d6505f4e014c625534.jpg?height=140&dpi=1')]
          "
                >
                  <Plus className="absolute size-7 bottom-3 right-3 bg-white border border-gray-300 rounded-full p-1 cursor-pointer hover:scale-105 transition" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-primary font-medium">
                    Tk 79 <del className="text-gray-400 text-sm">Tk 84</del>
                  </h4>
                  <h5 className="inline-block text-primary text-xs p-1 px-2.5 rounded-full bg-secondary/25">
                    Save Tk4
                  </h5>
                  <p className="text-gray-400 text-ellipsis font-normal line-clamp-2">
                    Hanay Premium Banana Sagor Kola 6 Pieces
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </main>
      </div>

      <aside className="sticky top-30 h-screen w-full p-3 xl:p-8 hidden lg:block shadow-2xl">
        <Cartbar />
      </aside>
    </div>
  );
};

export default Pandamart;
