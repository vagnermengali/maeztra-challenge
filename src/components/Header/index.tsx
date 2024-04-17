import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import Minicart from "@/components/Header/Minicart";
import Menu from "@/components/Header/Menu";
import Categories from "@/components/Header/Categories";
import Search from "@/components/Header/Search";
import Icon from "@/components/Icon";

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [isMinicart, setIsMinicart] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const loginModalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        loginModalRef.current &&
        !loginModalRef.current.contains(event.target as Node)
      ) {
        setLoginModalVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLoginButtonClick = () => {
    setLoginModalVisible(!loginModalVisible);
  };

  const handleMinicart = () => {
    setIsMinicart(!isMinicart);
  };

  const handleSearchVisible = () => {
    setSearchVisible(!searchVisible);
  };

  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-brand4" onMouseEnter={() => setActiveMenu(null)}>
        <div className="flex items-center justify-center py-[3px]">
          <Swiper
            autoplay={{
              delay: 5000,
              pauseOnMouseEnter: true,
            }}
            cssMode={true}
            allowTouchMove={false}
            speed={500}
            loop={true}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <p className="text-brand10 text-[10px] md:text-xs leading-[18px] font-normal text-center">
                Acompanhe as melhores promoções disponíveis aqui na Maeztra.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-brand10 text-[10px] md:text-xs leading-[18px] font-normal text-center">
                Frete Grátis acima de 449,99 Sul/Sudeste
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="text-brand10 text-[10px] md:text-xs leading-[18px] font-normal text-center">
                Pague com PIX e ganhe mais 10% de desconto ou parcele em até 10x
                sem juros.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div
        className="bg-brand10 shadow-effect1 relative z-30"
        onMouseEnter={() => setActiveMenu(null)}
      >
        <div className="container flex items-center justify-between h-[88px]">
          <div className="flex items-center justify-start gap-[15px]">
            <button
              className="block lg:hidden cursor-pointer"
              onClick={handleMenu}
            >
              <Icon id="Menu" width="32" height="32" />
            </button>
            <Link href="/" aria-label="Ir para a página inicial">
              <Image
                className="w-[110px] h-[12px] md:w-[147px] md:h-[18px]"
                src="/assets/images/logo-maeztra.webp"
                width="147"
                height="18"
                alt="Maeztra"
              />
            </Link>
          </div>
          <Search className="hidden lg:flex" />
          <div className="flex items-center gap-0 lg:gap-4 xl:gap-8">
            <button className="block lg:hidden" onClick={handleSearchVisible}>
              <Icon
                id="Magnifier"
                width="32"
                height="32"
                className="mr-[31px]"
              />
            </button>
            <div className=" relative">
              <button
                className="hidden lg:flex items-center justify-center gap-2 text-sm text-brand4 leading-5 font-normal w-[134px] h-[46px] xl:ml-[35px]"
                aria-label="Ir para minha conta"
                onClick={handleLoginButtonClick}
              >
                <Icon id="User" width="14" height="16" /> Minha Conta
              </button>
              {!isMobile && loginModalVisible && (
                <div
                  ref={loginModalRef}
                  className="absolute top-10 left-0 w-80 p-4 bg-brand9 shadow-effect1"
                >
                  <p className="text-sm text-brand4 leading-5 font-normal mb-4 text-center">
                    Escolha uma opção para entrar
                  </p>
                  <button className="bg-brand1 my-1 hover:text-brand10 text-sm rounded-lg text-brand4 leading-5 font-normal w-full py-3 px-3 text-center transition-all duration-500 ease-in-out">
                    Receber código de acesso
                  </button>
                  <button className="bg-brand4 my-1 hover:text-brand1 text-sm rounded-lg text-brand10 leading-5 font-normal w-full py-3 px-3 text-center transition-all duration-500 ease-in-out">
                    Entrar com e-mail
                  </button>
                </div>
              )}
            </div>
            <Link
              className="hidden lg:flex items-center justify-center gap-2 text-sm text-brand4 leading-5 font-normal w-[134px] h-[46px]"
              href="/#account#/wishlist"
              aria-label="Ir para a página dos meus favoritos"
            >
              <Icon id="Heart" width="18.28" height="16" /> Favoritos
            </Link>
            <button
              className="flex items-center justify-center gap-2 w-8 h-8 lg:w-[134px] lg:h-[46px] lg:border-2 lg:border-solid lg:border-brand1 lg:rounded-lg"
              aria-label="Abrir carrinho"
              onClick={handleMinicart}
            >
              <Icon
                id="Bag"
                width="14.38"
                height="16"
                className="h-6 w-6 lg:w-auto lg:h-auto"
              />
              <p className="hidden lg:block text-sm text-brand4 leading-5 font-normal">
                Meu Carrinho
              </p>
            </button>
          </div>
        </div>
      </div>
      <Categories activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div
        className={`${
          searchVisible
            ? "translate-y-0 z-30 opacity-100"
            : "-translate-y-20 z-0 opacity-0"
        } shadow-effect1 lg:hidden w-full bg-brand10 py-2 justify-center items-center absolute flex transition-all duration-500 ease-in-out`}
      >
        <Search
          className={`px-[18px] sm:max-w-[640px] md:max-w-3xl mx-auto w-full`}
        />
      </div>
      <Minicart isMinicart={isMinicart} handleMinicart={handleMinicart} />
      <Menu isMenu={isMenu} handleMenu={handleMenu} />
    </header>
  );
};

export default Header;
