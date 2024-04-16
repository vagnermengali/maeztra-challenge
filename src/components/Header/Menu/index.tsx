import Link from "next/link";
import { useEffect, useState } from "react";

import Icon from "@/components/Icon";

import { MenuLink } from "@/data/MenuLinks";

const Menu = ({
  isMenu,
  handleMenu,
}: {
  isMenu: boolean;
  handleMenu: () => void;
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [menus, setMenus] = useState<
    {
      title: string;
      links: { label: string; href: string }[];
      open?: boolean;
    }[]
  >([]);

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
    setMenus(MenuLink);
  }, []);

  useEffect(() => {
    if (isMenu && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenu, isMobile]);

  const toggleMenu = (index: number) => {
    const updatedMenus = menus.map((menu, i) => {
      if (index === i) {
        menu.open = !menu.open;
      } else {
        menu.open = false;
      }
      return menu;
    });
    setMenus(updatedMenus);
  };

  return (
    <>
      <div
        className={`${
          !isMobile ? "hidden" : isMenu ? "block" : "hidden"
        } fixed inset-0 bg-brand3 z-40 transition-all duration-500 ease-in-out`}
        onClick={handleMenu}
      ></div>
      <div
        className={` ${
          !isMobile ? "hidden" : isMenu ? "animate-menu-in" : "hidden"
        } fixed top-0 bottom-0 left-0 z-50 bg-brand10 w-80 md:w-96`}
      >
        <div className="relative overflow-y-scroll flex flex-col h-full">
          <div className="sticky right-0 py-6 bg-brand1 px-4 top-0 flex justify-between w-full border-b-2 border-solid border-brand8 pb-3">
            <div className="flex flex-col gap-4">
              <Link
                className="flex items-center gap-2 text-brand10 font-semibold text-sm"
                href="/"
                aria-label="Ir para a página de login"
                onClick={handleMenu}
              >
                <Icon id="UserWhite" width="14" height="14" /> Login/Register
              </Link>
              <Link
                className="flex items-center gap-2 text-brand10 font-semibold text-sm"
                href="/"
                aria-label="Ir para a página dos meus favoritos"
                onClick={handleMenu}
              >
                <Icon id="HeartWhite" width="14" height="14" /> Favoritos
              </Link>
            </div>
            <Icon
              id="XWhite"
              width="24"
              height="24"
              className="cursor-pointer "
              onClick={handleMenu}
            />
          </div>
          {menus.map((menu, index) => (
            <div key={index} className="flex flex-col">
              <div
                className="flex cursor-pointer flex-row items-center justify-between text-brand4 w-full py-4 px-4 border-b-[1px] border-solid border-brand8 bg-brand10 hover:brightness-95 transition-all duration-500 ease-in-out "
                onClick={() => isMobile && toggleMenu(index)}
              >
                <span className="leading-5 text-base font-bold">
                  {menu.title}
                </span>
                {isMobile &&
                  (menu.open ? (
                    <Icon id="Minus" width="16" height="16" />
                  ) : (
                    <Icon id="Plus" width="16" height="16" />
                  ))}
              </div>
              <ul
                className={`w-full py-4 px-4 border-b-[1px] border-solid border-brand8 flex flex-col gap-4 ${
                  menu.open ? "block" : !isMobile ? "flex" : "hidden"
                }`}
              >
                {menu.links.map(
                  (
                    link: { label: string; href: string },
                    linkIndex: number
                  ) => (
                    <li key={linkIndex}>
                      <Link
                        className={`leading-5 text-sm ${
                          link.label == "Ver tudo"
                            ? "font-bold uppercase underline"
                            : "font-normal"
                        }`}
                        href={link.href}
                        aria-label={`Ir para ${link.label}`}
                        title={link.label}
                        onClick={handleMenu}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
          <Link
            href="/"
            className="text-brand4 w-full py-4 px-4 border-b-[1px] border-solid border-brand8 bg-brand10 hover:brightness-95 transition-all duration-500 ease-in-out leading-5 text-base font-bold"
            aria-label="Ir para a categoria de Outlet"
            title="Outlet"
          >
            OUTLET
          </Link>
          <Link
            href="/"
            className="text-brand1 w-full py-4 px-4 border-b-[1px] border-solid border-brand8 bg-brand10 hover:brightness-95 transition-all duration-500 ease-in-out leading-5 text-base font-bold"
            aria-label="Ir para a categoria de novidades"
            title="Novidades"
          >
            Novidades
          </Link>
          <div className="sticky bottom-0 left-0 py-6 px-7 bg-brand9 w-full">
            <Link
              className="flex flex-row items-center gap-2 text-brand4 font-semibold text-base"
              href="/institucional/fale-conosco"
              aria-label="Ir para a página fale conosco"
              title="Fale conosco"
              onClick={handleMenu}
            >
              <Icon id="Message" width="20" height="20" /> Fale conosco
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
