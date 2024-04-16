import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { Products } from "@/data/Products"

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
          420: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          530: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        }}
      >
        {Products.map((product, index) => (
          <SwiperSlide id={product.id.toString()} key={index}>
            <Link href={product.link} aria-label={`Ir para o produto ${product.title}`} title={product.title}>
              <div>
                <Image src={product.image} alt={product.title} width="308" height="381" />
                <div>
                  <div>
                    {product.sku.map((sku, index) => (
                      <button id={sku.id.toString()} key={index} style={{ backgroundColor: sku.color }} aria-label={` Selecionar a cor ${sku.name}`} title={sku.name}></button>
                    ))}
                  </div>
                  <div>
                    <p>{product.price}</p>
                    <p>{product.title}</p>
                    <p>{product.description}</p>
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
