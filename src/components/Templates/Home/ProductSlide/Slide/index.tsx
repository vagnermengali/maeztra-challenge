import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { Products } from "@/data/Products";

const SlideProducts = () => {
  return (
    <>
      <Swiper
        speed={750}
        loop={true}
        navigation={true}
        className="mz-swiper mz-slide"
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1.15,
            spaceBetween: 15,
          },
          390: {
            slidesPerView: 1.3,
            spaceBetween: 15,
          },
          450: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          590: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          1536: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
      >
        {Products.map((product, index) => (
          <SwiperSlide key={index}>
            <Link
              href={product.link}
              aria-label={`Ir para o produto ${product.title}`}
              title={product.title}
            >
              <div>
                <Image
                  src={product.image}
                  alt={product.title}
                  width="308"
                  height="381"
                  loading="lazy"
                />
                <div className="flex flex-col gap-2 pt-2 pb-4 px-[27px]">
                  <div className="flex gap-2">
                    {product.sku.map((sku, index) => (
                      <button
                        className="w-[27px] h-[27px] rounded border-[1px] border-solid border-transparent hover:border-brand2 transition-all duration-500 ease-in-out"
                        key={index}
                        style={{ backgroundColor: sku.color }}
                        aria-label={` Selecionar a cor ${sku.name}`}
                        title={sku.name}
                      ></button>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-bold text-brand4 text-xl leading-[30px]">{`R$ ${product.price},00`}</p>
                    <p className="xl:h-12 2xl:h-auto font-normal text-brand2 text-base">
                      {product.title}
                    </p>
                    <p className="xl:h-[72px] 2xl:h-auto  max-w-60 font-normal text-brand2 text-xs leading-[18px]">
                      {product.description}
                    </p>
                    <button className="bg-brand1 text-brand10 hover:text-brand4 rounded h-[35px] w-full font-normal text-base transition-all ease-in-out duration-500">
                      Adicionar
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SlideProducts;
