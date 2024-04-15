import Link from 'next/link';
import { PiDressLight } from 'react-icons/pi';
import { MenuLink } from "@/data/MenuLinks";

const Categories = ({ activeMenu, setActiveMenu }: { activeMenu: number | null, setActiveMenu: React.Dispatch<React.SetStateAction<number | null>> }) => {

    return (
        <div className="bg-brand10 hidden relative lg:block" onMouseEnter={() => setActiveMenu(null)}>
            <div className="container flex items-center justify-center gap-[15px]">
                <Link onMouseEnter={() => setActiveMenu(null)} href="/" className="flex items-center justify-center gap-[10px] text-brand1 bg-brand10 hover:bg-brand8 transition-all duration-500 ease-in-out w-[146px] py-[14px] text-center leading-5 text-sm font-bold" aria-label="Ir para a categoria de novidades" title="Novidades">
                    <PiDressLight className="text-brand2" />Novidades
                </Link>
                {MenuLink.map((menu, index) => (
                    <div key={index}>
                        <button
                            onMouseEnter={() => setActiveMenu(index)}
                            className="text-brand4 bg-brand10 hover:bg-brand8 transition-all duration-500 ease-in-out w-[146px] py-[14px] text-center leading-5 text-sm font-normal"
                        >
                            {menu.title}
                        </button>
                        {activeMenu === index && (
                            <div className="absolute bg-white w-full left-0 right-0 top-10 shadow-lg py-10 px-4 mt-2 rounded-lg" onMouseLeave={() => setActiveMenu(null)}>
                                <div className="container relative flex flex-col gap-4">
                                    {menu.links.map((link, idx) => (
                                        <Link key={idx} href={link.href} className={`${link.label == "Ver tudo" ? "absolute bottom-0 right-0 underline font-bold uppercase" : "font-normal hover:underline"} block text-brand4 leading-5 text-sm`} aria-label={`Ir para ${link.label}`} title={link.label}>{link.label}</Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                <Link onMouseEnter={() => setActiveMenu(null)} href="/" className="text-brand4 bg-brand10 hover:bg-brand8 transition-all duration-500 ease-in-out w-[146px] py-[14px] text-center leading-5 text-sm font-normal" aria-label="Ir para a categoria de Outlet" title="Outlet">
                    OUTLET
                </Link>
            </div>
        </div>
    )
}

export default Categories