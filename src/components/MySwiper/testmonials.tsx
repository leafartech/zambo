'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules"
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

export default function Testmonials() {
    return (
        <div className="overflow-hidden max-w-full">
            <Swiper
                slidesPerView={5}
                spaceBetween={32}
                grabCursor={true}
                loop={true}
                modules={[Pagination, Navigation]}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    1000: {
                        slidesPerView: 5
                    },
                    500: {
                        slidesPerView: 1
                    },
                    300: {
                        slidesPerView: 1
                    }
                }}
                className="mySwiper sm:max-w-7xl"
            >
                <SwiperSlide className="swiper-slide">
                    <div className="w-full h-72 flex items-center ">
                        <Image
                            src="/images/zambo/testmonials/1.png"
                            alt="Depoimento"
                            width={300}
                            height={152}
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="w-full h-80 flex items-center ">
                        <Image
                            src="/images/zambo/testmonials/2.png"
                            alt="Depoimento"
                            width={300}
                            height={75}
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="w-full h-80 flex items-center ">
                        <Image
                            src="/images/zambo/testmonials/3.png"
                            alt="Depoimento"
                            width={300}
                            height={133}
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="w-full h-80 flex items-center ">
                        <Image
                            src="/images/zambo/testmonials/4.png"
                            alt="Depoimento"
                            width={300}
                            height={61}
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="w-full h-80 flex items-center ">
                        <Image
                            src="/images/zambo/testmonials/5.png"
                            alt="Depoimento"
                            width={300}
                            height={261}
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="w-full h-80 flex items-center ">
                        <Image
                            src="/images/zambo/testmonials/6.png"
                            alt="Depoimento"
                            width={300}
                            height={284}
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="w-full h-80 flex items-center ">
                        <Image
                            src="/images/zambo/testmonials/7.png"
                            alt="Depoimento"
                            width={300}
                            height={282}
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="w-full h-80 flex items-center ">
                        <Image
                            src="/images/zambo/testmonials/8.png"
                            alt="Depoimento"
                            width={300}
                            height={243}
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="w-full h-80 flex items-center ">
                        <Image
                            src="/images/zambo/testmonials/9.png"
                            alt="Depoimento"
                            width={290}
                            height={300}
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="w-full h-80 flex items-center ">
                        <Image
                            src="/images/zambo/testmonials/10.png"
                            alt="Depoimento"
                            width={300}
                            height={263}
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="w-full h-80 flex items-center ">
                        <Image
                            src="/images/zambo/testmonials/11.png"
                            alt="Depoimento"
                            width={300}
                            height={263}
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="w-full h-80 flex items-center ">
                        <Image
                            src="/images/zambo/testmonials/12.png"
                            alt="Depoimento"
                            width={300}
                            height={141}
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}