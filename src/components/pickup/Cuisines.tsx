'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';


const Cuisines = () => {
    return (
        <div>
            <Swiper
                navigation={true}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 8,
                        spaceBetween: 0,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    cuisin?.map(food => (

                        <SwiperSlide key={food.id}>
                            <div className='p-5 space-y-3'>
                                <Image className='w-full h-full' src="https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg" width={800} height={800} alt={food?.title} />
                                <p className='text-center'>{food.title}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
};

export default Cuisines;


const cuisin = [
    {
        id: 1,
        title: "pizza",
        image: "https://ibb.co.com/s5xCQ8H"

    },
    {
        id: 2,
        title: "Biryani",
        image: "https://ibb.co.com/s5xCQ8H"

    },
    {
        id: 3,
        title: "Burgers",
        image: "https://ibb.co.com/s5xCQ8H"

    },
    {
        id: 4,
        title: "Cakes",
        image: "https://ibb.co.com/s5xCQ8H"

    },
    {
        id: 5,
        title: "Cafe",
        image: "https://ibb.co.com/s5xCQ8H"

    },
    {
        id: 6,
        title: "Pasta",
        image: "https://ibb.co.com/s5xCQ8H"

    },
    {
        id: 7,
        title: "Kebab",
        image: "https://ibb.co.com/s5xCQ8H"

    },
    {
        id: 8,
        title: "Tehari",
        image: "https://ibb.co.com/s5xCQ8H"

    },
    {
        id: 9,
        title: "Snacks",
        image: "https://ibb.co.com/s5xCQ8H"

    },
    {
        id: 10,
        title: "Soup",
        image: "https://ibb.co.com/s5xCQ8H"

    },
]