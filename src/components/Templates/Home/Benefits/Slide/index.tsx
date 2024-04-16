import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Image from 'next/image';

const SlideBenefits = () => {
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
            slidesPerView: 2,
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
        <SwiperSlide className="flex items-center justify-center">
          <div className="flex flex-row gap-3 2xl:gap-5 items-center py-4 px-3 2xl:px-[26px] rounded bg-brand8 w-[298px]  md:w-[308px] h-16">
            <Image src="/assets/images/benefits-1.png" alt="Ícone do planeta terra" width="32" height="32" />
            <div className="w-full">
              <p className="font-bold md:text-sm leading-5">Produtos importados</p>
              <p className="font-normal text-xs leading-[18px]">Produto de Alta Qualidade</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="flex flex-row gap-3 2xl:gap-5 items-center py-4 px-3 2xl:px-[26px] rounded bg-brand8 w-[298px]  md:w-[308px] h-16">
            <Image src="/assets/images/benefits-2.png" alt="Ícone de uma caixa" width="32" height="32" />
            <div className="w-full">
              <p className="font-bold md:text-sm leading-5">Estoque no Brazil</p>
              <p className="font-normal text-xs leading-[18px]">Produtos mais perto de você!</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="flex flex-row gap-3 2xl:gap-5 items-center py-4 px-3 2xl:px-[26px] rounded bg-brand8 w-[298px]  md:w-[308px] h-16">
            <Image src="/assets/images/benefits-3.png" alt="Ícone de uma tag de desconto" width="32" height="32" />
            <div className="w-full">
              <p className="font-bold md:text-sm leading-5">Trocas Garantidas</p>
              <p className="font-normal text-xs leading-[18px]">Trocas em até 48h, veja as regras</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="flex flex-row gap-3 2xl:gap-5 items-center py-4 px-3 2xl:px-[26px] rounded bg-brand8 w-[298px]  md:w-[308px] h-16">
            <Image src="/assets/images/benefits-4.png" alt="Ícone de um caminhão" width="32" height="32" />
            <div className="w-full">
              <p className="font-bold md:text-sm leading-5">Ganhe 5% off</p>
              <p className="font-normal text-xs leading-[18px]">Pagando à vista no Cartão</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="flex flex-row gap-3 2xl:gap-5 items-center py-4 px-3 2xl:px-[26px] rounded bg-brand8 w-[298px]  md:w-[308px] h-16">
            <Image src="/assets/images/benefits-5.png" alt="" width="32" height="32" />
            <div className="w-full">
              <p className="font-bold md:text-sm leading-5">Frete Grátis</p>
              <p className="font-normal text-xs leading-[18px]">Em compras acima de R$ 499,00</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SlideBenefits;
