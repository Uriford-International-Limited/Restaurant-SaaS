import { cn } from "@/lib/utils";
import { Bike, Clock, Heart, Star } from "lucide-react";
import Image from "next/image";

type contentType = {
  banner?: string;
  label?: string;
  like?: "nolike" | "liked";
  title?: string;
  description?: string;
  price?: number | string;
  rating?: number | string;
  ratingPersion?: number | string;
  deliveryCharge?: number | string;
  deliveryTime?: string;
};

type CardPropsTypes = {
  overlay?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  content?: contentType;
};

const Card = ({ size, overlay, content, className }: CardPropsTypes) => {
  return (
    <div
      className={cn(
        `border border-fp-gray/30 rounded-xl overflow-hidden cursor-pointer group ${
          size === "sm"
            ? "min-w-30"
            : size === "md"
            ? "min-w-60 h-54"
            : "w-full md:w-80 lg:w-75 2xl:w-85 lg:h-65"
        }`,
        className
      )}
    >
      {/* Image secsion */}
      <div className="relative md:h-[66%] overflow-hidden border-b">
        <Image
          src={content && content.banner ? content.banner : ""}
          height={500}
          width={500}
          alt="Store/Food Banner"
          // placeholder="blur"
          className="size-full group-hover:scale-[103%] transition"
        />

        {/* Card label */}
        {content?.label && (
          <div className="absolute top-2.5 left-2.5 py-0.5 px-2.5 rounded-md bg-secondary text-xs text-white font-medium">
            {content?.label}
          </div>
        )}

        {content?.like && (
          <div>
            <Heart
              size={20}
              className="absolute top-3 right-3 text-lg text-secondary "
            />
            {/* <FaHeart
              className={`absolute top-3 right-3 text-lg text-fp-secondary ${
                content.like === "liked" ? "block" : "hidden"
              }`}
            /> */}
          </div>
        )}

        {/* Overlay */}
        {overlay && (
          <div className="absolute top-0 size-full bg-black/50 flex flex-col justify-center items-center gap-2 text-white">
            <h2 className="text-fp-white text-lg font-bold">
              Closed untill Fri 08:30
            </h2>
            <button className="py-1 px-3 rounded-md bg-fp-white text-secondary font-semibold hover:ring-1 ring-[#ffebeb] hover:bg-[#ffebeb]  transition cursor-pointer">
              Order for later
            </button>
          </div>
        )}
      </div>

      {/* Description */}
      <div
        className={`lg:h-[33%] flex flex-col justify-center ${
          size === "md" ? "px-2" : "p-2"
        } ${!content?.description && "gap-2"}`}
      >
        <div className="flex justify-between items-center">
          <h2
            className={`text-lg font-semibold text-nowrap text-ellipsis overflow-hidden ${
              size === "sm" ? "text-sm text-center text-primary" : size === "md" && "leading-6"
            }`}
          >
            {content?.title ? content.title : "Please give any title!"}
          </h2>

          {content?.rating && (
            <div className="flex items-center gap-1">
              <Star size={14} className="text-amber-700" />
              <p className="text-sm">
                {content.rating}
                <span className="text-xs text-gray-600">
                  ({content.ratingPersion}+)
                </span>
              </p>
            </div>
          )}
        </div>

        {content?.description && (
          <p className="text-sm text-fp-gray text-nowrap text-ellipsis overflow-hidden mb-0.5">
            {content.description}
          </p>
        )}

        <div className="text-gray-400 text-xs flex items-center">
          {content?.deliveryTime && (
            <p className="flex items-center gap-0.5">
              <Clock size={14} /> {content.deliveryTime} min .
            </p>
          )}

          {content?.deliveryCharge && (
            <p className="flex items-center gap-0.5">
              <Bike size={14} className="ms-2" />
              Tk {content.deliveryCharge}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
