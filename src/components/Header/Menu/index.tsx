import { useEffect, useState } from "react";
import { FaMinus, FaPlus, FaRegHeart, FaRegUser, FaTimes } from "react-icons/fa";
import { TbMessageCircle2Filled } from "react-icons/tb";
import Link from "next/link";
import { MenuLink } from "@/data/MenuLinks";

const Menu = ({ isMenu, handleMenu }: { isMenu: boolean, handleMenu: () => void }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [menus, setMenus] = useState<any[]>([]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1023);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setMenus(MenuLink);
    }, []);

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
            <div className={`${!isMobile ? 'hidden' : isMenu ? 'block' : 'hidden'} fixed inset-0 bg-brand3 z-40 transition-all duration-500 ease-in-out`} onClick={handleMenu}></div>
            <div className={` ${!isMobile ? 'hidden' : isMenu ? 'animate-menu-in' : 'hidden'} fixed top-0 bottom-0 left-0 z-50 bg-brand10 w-80 md:w-96`}>
                <div className="relative flex flex-col h-full pt-[94px] pb-[72px]">
                    <div className="absolute right-0 py-6 px-4 top-0 flex justify-between w-full border-b-2 border-solid border-brand8 pb-3">
                        <div className="flex flex-col gap-4 ">
                            <Link className="flex items-center gap-2 text-brand4 font-semibold text-sm" href="/login" aria-label="Ir para a página de login" onClick={handleMenu}>
                                <FaRegUser /> Login/Register
                            </Link>
                            <Link className="flex items-center gap-2 text-brand4 font-semibold text-sm" href="/account#/wishlist" aria-label="Ir para a página dos meus favoritos" onClick={handleMenu}>
                                <FaRegHeart /> Favoritos
                            </Link>
                        </div>
                        <FaTimes className="text-brand4 w-5 h-5 cursor-pointer " onClick={handleMenu} />
                    </div>
                    {menus.map((menu, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="flex cursor-pointer flex-row items-center justify-between text-brand4 w-full py-4 px-4 border-b-[1px] border-solid border-brand8 bg-brand10 hover:brightness-95 transition-all duration-500 ease-in-out " onClick={() => isMobile && toggleMenu(index)}>
                                <span className="leading-5 text-base font-bold">{menu.title}</span>
                                {isMobile && (menu.open ? <FaMinus className="w-4 h-4" /> : <FaPlus className="w-4 h-4" />)}
                            </div>
                            <ul className={`w-full py-4 px-4 border-b-[1px] border-solid border-brand8 flex flex-col gap-4 ${menu.open ? 'block' : !isMobile ? 'flex' : 'hidden'}`}>
                                {menu.links.map((link: { label: string, href: string }, linkIndex: number) => (
                                    <li key={linkIndex}>
                                        <Link className={`leading-5 text-sm ${link.label == "Ver tudo" ? "font-bold uppercase underline" : "font-normal"}`} href={link.href} aria-label={`Ir para ${link.label}`} title={link.label} onClick={handleMenu}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <Link href="/outlet" className="text-brand4 w-full py-4 px-4 border-b-[1px] border-solid border-brand8 bg-brand10 hover:brightness-95 transition-all duration-500 ease-in-out leading-5 text-base font-bold" aria-label="Ir para a categoria de Outlet" title="Outlet">
                        OUTLET
                    </Link>
                    <Link href="/novidades" className="text-brand1 w-full py-4 px-4 border-b-[1px] border-solid border-brand8 bg-brand10 hover:brightness-95 transition-all duration-500 ease-in-out leading-5 text-base font-bold" aria-label="Ir para a categoria de novidades" title="Novidades">
                        Novidades
                    </Link>
                    <div className="absolute bottom-0 left-0 py-6 px-7 bg-brand9 w-full">
                        <Link className="flex flex-row items-center gap-2 text-brand4 font-semibold text-base" href="/institucional/fale-conosco" aria-label="Ir para a página fale conosco" title="Fale conosco" onClick={handleMenu}>
                            <TbMessageCircle2Filled className="w-6 h-6" />  Fale conosco
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;
