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
                <SwiperSlide className="swiper-slide py-12 my-12">
                    <div className="w-full h-80 flex items-center">
                        <Image
                            src="/images/metodo/testmonials/1.webp"
                            alt="Depoimento"
                            width={1080}
                            height={1920}
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide py-12 my-12">
                    <div className="w-full h-80 flex items-center">
                        <Image
                            src="/images/metodo/testmonials/2.webp"
                            alt="Depoimento"
                            width={1080}
                            height={1920}
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide py-12 my-12">
                    <div className="w-full h-80 flex items-center">
                        <Image
                            src="/images/metodo/testmonials/3.webp"
                            alt="Depoimento"
                            width={1080}
                            height={1920}
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide py-12 my-12">
                    <div className="w-full h-80 flex items-center">
                        <Image
                            src="/images/metodo/testmonials/4.webp"
                            alt="Depoimento"
                            width={1080}
                            height={1920}
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide py-12 my-12">
                    <div className="w-full h-80 flex items-center">
                        <Image
                            src="/images/metodo/testmonials/5.webp"
                            alt="Depoimento"
                            width={1080}
                            height={1920}
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide py-12 my-12">
                    <div className="w-full h-80 flex items-center">
                        <Image
                            src="/images/metodo/testmonials/6.webp"
                            alt="Depoimento"
                            width={1080}
                            height={1920}
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide py-12 my-12">
                    <div className="w-full h-80 flex items-center">
                        <Image
                            src="/images/metodo/testmonials/7.webp"
                            alt="Depoimento"
                            width={1080}
                            height={1920}
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide py-12 my-12">
                    <div className="w-full h-80 flex items-center">
                        <Image
                            src="/images/metodo/testmonials/8.webp"
                            alt="Depoimento"
                            width={1080}
                            height={1920}
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide py-12 my-12">
                    <div className="w-full h-80 flex items-center">
                        <Image
                            src="/images/metodo/testmonials/9.webp"
                            alt="Depoimento"
                            width={1080}
                            height={1920}
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide py-12 my-12">
                    <div className="w-full h-80 flex items-center">
                        <Image
                            src="/images/metodo/testmonials/10.webp"
                            alt="Depoimento"
                            width={1080}
                            height={1920}
                            className="rounded-lg"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}