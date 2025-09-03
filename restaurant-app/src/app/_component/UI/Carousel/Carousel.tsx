"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { ReactNode, useEffect, useRef, useState } from "react";
import "../Carousel/carousel.css";

type CategPropsTypes = {
  categName: string;
  seeMore?: boolean;
  children: ReactNode;
};

const Carousel = ({ categName, seeMore, children }: CategPropsTypes) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);

  // scroll left
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -350,
        behavior: "smooth",
      });
    }
  };

  // scroll right
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 350,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const handleScroll = () => {
      setShowLeftBtn(el.scrollLeft > 0);
    };

    el.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="pt-7 md:pt-10">
      <div className="flex justify-between items-end px-2.5">
        <h2 className="text-xl font-semibold md:text-3xl md:font-bold">{categName}</h2>
        {seeMore && <p className="underline text-xs md:text-sm cursor-pointer">View All</p>}
      </div>

      <div className="relative">
        <div
          ref={carouselRef}
          className="flex md:justify-start gap-5 mt-4 px-3 md:px-1 overflow-x-auto scrollbarHide"
        >
          {children}
        </div>

        {showLeftBtn && (
          <button
            onClick={scrollLeft}
            className="carouselBtn size-13 hidden md:flex "
          >
            <ArrowLeft />
          </button>
        )}

        <button
          onClick={scrollRight}
          className="carouselBtn size-13 hidden md:flex translate-x-full -right-1"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
