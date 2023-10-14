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
                <img className='object-cover aspect-[4/1.7]' src="https://lelabo.com.vn/upload/images/slide/2022_29_11_19_10_12-slide3.jpg" alt="carousel-1" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover aspect-[4/1.7]' src="https://lelabo.com.vn/upload/images/slide/2022_29_11_19_11_14-slide4.jpg" alt="carousel-2" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover aspect-[4/1.7]' src="https://lelabo.com.vn/upload/images/slide/2022_29_11_09_34_17-855_ONE_SIZE_IMAGE_01_8852_1377049543.jpg" alt="carousel-3" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='object-cover aspect-[4/1.7]' src="https://lelabo.com.vn/upload/images/slide/2022_29_11_19_07_33-923_ONE_SIZE_IMAGE_01_10884_1214212543.jpg" alt="carousel-4" />
            </SwiperSlide>
        </Swiper>
    );
}
