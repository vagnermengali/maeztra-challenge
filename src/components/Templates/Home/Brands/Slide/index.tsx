import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Image from 'next/image';
import Link from 'next/link';

const SlideBrands = () => {
  return (
    <>
      <Swiper
        loop={true}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1.15,
            spaceBetween: 15,
          },
          420: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
      >
        <SwiperSlide className="flex items-center justify-center">
          <Link href="/" aria-label="Ir para a coleção Comma" title="Comma">
            <Image src="/assets/images/brand-1.png" width="308" height="64" alt="Marca Comma" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Link href="/" aria-label="Ir para a coleção Melissa" title="Melissa">
            <Image src="/assets/images/brand-2.png" width="307" height="64" alt="Marca Melissa" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Link href="/" aria-label="Ir para a coleção Forever21" title="Forever21">
            <Image src="/assets/images/brand-3.png" width="308" height="64" alt="Marca Forever21" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Link href="/" aria-label="Ir para a coleção Zara" title="Zara">
            <Image src="/assets/images/brand-4.png" width="322" height="67" alt="Marca Zara" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <Link href="/" aria-label="Ir para a coleção Ann Taylor" title="Ann Taylor">
            <Image src="/assets/images/brand-5.png" width="307" height="64" alt="Marca Ann Taylor" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SlideBrands;
