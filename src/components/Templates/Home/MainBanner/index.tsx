import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';;
import Link from 'next/link';
import Image from 'next/image';

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
                <SwiperSlide>
                    <Link href="/" aria-label="Ir para a promoções de outono">
                        <div className="relative">
                            <Image className="w-screen" src="/assets/images/banner-main.png" width={1920} height={600} alt="Promoções de Outono" />
                            <div className="absolute top-0">
                                <h1>Promoções de Outono</h1>
                                <p>Confira os melhores looks para combinar com você nesse Outono</p>
                                <button>Conferir</button>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/" aria-label="Ir para a promoções de outono">
                        <div className="relative">
                            <Image className="w-screen" src="/assets/images/banner-main.png" width={1920} height={600} alt="Promoções de Outono" />
                            <div className="absolute top-0">
                                <h1>Promoções de Outono</h1>
                                <p>Confira os melhores looks para combinar com você nesse Outono</p>
                                <button>Conferir</button>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/" aria-label="Ir para a promoções de outono">
                        <div className="relative">
                            <Image className="w-screen" src="/assets/images/banner-main.png" width={1920} height={600} alt="Promoções de Outono" />
                            <div className="absolute top-0">
                                <h1>Promoções de Outono</h1>
                                <p>Confira os melhores looks para combinar com você nesse Outono</p>
                                <button>Conferir</button>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default MainBanner;
