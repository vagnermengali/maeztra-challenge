import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import { Banners } from "@/data/Banners";

const MainBanner = () => {
  return (
    <section className="w-full">
      <Swiper
        speed={750}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="mz-swiper"
        modules={[Pagination, Navigation]}
      >
        {Banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Link href="/#outuno-inverno" aria-label="Ir para a promoções de outono">
              <div className="relative">
                <Image
                  className="w-screen min-h-[320px] object-cover md:min-h-[600px]"
                  src={banner.imageUrl}
                  width={1920}
                  height={600}
                  alt="Promoções de Outono"
                />
                <div className="w-48 md:w-72 lg:w-full absolute top-1/2 -translate-y-1/2 left-1/2 lg:left-[17%] lg:translate-x-0 -translate-x-1/2">
                  <h1 className="w-40 md:w-full font-bold mb-6 md:mb-10 text-3xl md:text-[40px] leading-9 md:leading-[48px] text-brand10">
                    {banner.title}
                  </h1>
                  <p className="font-base max-w-[239px] md:max-w-[370px] mb-4 md:mb-8 text-sm md:text-xl leading-[17px] md:leading-6 text-brand10">
                    {banner.description}
                  </p>
                  <button className="rounded-[10px] bg-brand1 w-[76px] md:w-32 h-7 md:h-12 font-bold text-sm md:text-base leading-[17px] md:leading-5 text-brand10">
                    {banner.buttonText}
                  </button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MainBanner;
