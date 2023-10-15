import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Carousel() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
        >
            <SwiperSlide>
                <img className='object-cover aspect-[4/1.7]' src="../img/img2.jpg" alt="carousel-3" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover aspect-[4/1.7]' src="../img/img1.jpg" alt="carousel-1" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover aspect-[4/1.7]' src="../img/img4.jpg" alt="carousel-2" />
            </SwiperSlide>
        </Swiper>
    );
}
