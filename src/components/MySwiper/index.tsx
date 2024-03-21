'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules"
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

export default function MySwiper() {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={0}
            grabCursor={true}
            loop={true}
            modules={[Pagination, Navigation]}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                1000: {
                    slidesPerView: 3
                },
                500: {
                    slidesPerView: 1
                },
                300: {
                    slidesPerView: 1
                }
            }}
            className="mySwiper"
        >
            <SwiperSlide className="swiper-slide">
                <div className="h-full flex flex-col relative">
                    <Image
                        src="/images/zambo/time/abel.jpg"
                        alt="Integrante Abel"
                        width={260}
                        height={350}
                        layout="cover"
                        className="rounded-xl h-full"
                    />
                    <p className="sub text-center -translate-y-4 text-sm">Abel Gonçalves</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="h-full flex flex-col relative">
                    <Image
                        src="/images/zambo/time/alexandre.jpg"
                        alt="Integrante Alexandre"
                        width={260}
                        height={350}
                        layout="cover"
                        className="rounded-xl h-full"
                    />
                    <p className="sub text-center -translate-y-4 text-sm">Alexandre Salim</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="h-full flex flex-col relative">
                    <Image
                        src="/images/zambo/time/amanda.jpg"
                        alt="Integrante Amanda"
                        width={260}
                        height={350}
                        layout="cover"
                        className="rounded-xl h-full"
                    />
                    <p className="sub text-center -translate-y-4 text-sm">Amanda Barbalho</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="h-full flex flex-col relative">
                    <Image
                        src="/images/zambo/time/ataide.jpg"
                        alt="Integrante Ataíde"
                        width={260}
                        height={350}
                        layout="cover"
                        className="rounded-xl h-full"
                    />
                    <p className="sub text-center -translate-y-4 text-sm">Ataíde Capideli</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="h-full flex flex-col relative">
                    <Image
                        src="/images/zambo/time/ingrid.jpg"
                        alt="Integrante Ingrid"
                        width={260}
                        height={350}
                        layout="cover"
                        className="rounded-xl h-full"
                    />
                    <p className="sub text-center -translate-y-4 text-sm">Ingrid Godinho</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="h-full flex flex-col relative">
                    <Image
                        src="/images/zambo/time/priscilla.jpg"
                        alt="Integrante Priscilla"
                        width={260}
                        height={350}
                        layout="cover"
                        className="rounded-xl h-full"
                    />
                    <p className="sub text-center -translate-y-4 text-sm">Priscilla Fernandes</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div className="h-full flex flex-col relative">
                    <Image
                        src="/images/zambo/time/viviane.jpg"
                        alt="Integrante Viviane"
                        width={260}
                        height={350}
                        layout="cover"
                        className="rounded-xl h-full"
                    />
                    <p className="sub text-center -translate-y-4 text-sm">Viviane Delgado</p>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}