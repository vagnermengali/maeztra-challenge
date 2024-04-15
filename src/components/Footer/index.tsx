import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaFacebookSquare, FaLinkedinIn, FaInstagram, FaYoutube, FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [infoMenuOpen, setInfoMenuOpen] = useState(false);
    const [accountMenuOpen, setAccountMenuOpen] = useState(false);
    const [locationMenuOpen, setLocationMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleInfoMenu = () => {
        if (isMobile) {
            setInfoMenuOpen(!infoMenuOpen);
            setAccountMenuOpen(false);
            setLocationMenuOpen(false);
        }
    };

    const toggleAccountMenu = () => {
        if (isMobile) {
            setAccountMenuOpen(!accountMenuOpen);
            setInfoMenuOpen(false);
            setLocationMenuOpen(false);
        }
    };

    const toggleLocationMenu = () => {
        if (isMobile) {
            setLocationMenuOpen(!locationMenuOpen);
            setInfoMenuOpen(false);
            setAccountMenuOpen(false);
        }
    };

    return (
        <footer>
            <div className="bg-brand9 border-t-2 border-solid border-brand8">
                <div className="container ">
                    <div className="mx-auto max-w-[944px] flex flex-col gap-4 md:gap-0 md:flex-row justify-between pt-10 pb-14 md:pb-16">
                        <div className="flex flex-col gap-4 md:gap-6">
                            <div className="flex flex-row items-center justify-between" onClick={isMobile ? toggleInfoMenu : undefined}>
                                <p className="text-bran4 text-base leading-[18px] font-bold">Informações</p>
                                {isMobile && (infoMenuOpen ? <FaMinus className="w-2 h-2" /> : <FaPlus className="w-2 h-2" />)}
                            </div>
                            <ul className={`flex flex-col gap-4 md:gap-6 ${infoMenuOpen ? 'block' : !isMobile ? 'flex' : 'hidden'}`}>
                                <li>
                                    <Link className="text-bran4 text-xs leading-[18px] font-normal" href="/institucional/quem-somos" aria-label="Ir para a página de quem somos" title="Quem somos">
                                        Quem somos
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-bran4 text-xs leading-[18px] font-normal" href="/institucional/prazo-de-envio" aria-label="Ir para a página de prazo de envio" title="Prazo de envio">
                                        Prazo de Envio
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-bran4 text-xs leading-[18px] font-normal" href="/institucional/troca-e-devolucoes" aria-label="Ir para a página de troca e devoluções" title="Troca e devoluções">
                                        Troca e Devoluções
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-bran4 text-xs leading-[18px] font-normal" href="/institucional/promocoes-e-cupons" aria-label="Ir para a página promoções e cupons" title="Promoções e cupons">
                                        Promoções e Cupons
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-6">
                            <div className="flex flex-row items-center justify-between" onClick={isMobile ? toggleAccountMenu : undefined}>
                                <p className="text-bran4 text-base leading-[18px] font-bold">Minha Conta</p>
                                {isMobile && (accountMenuOpen ? <FaMinus className="w-2 h-2" /> : <FaPlus className="w-2 h-2" />)}
                            </div>
                            <ul className={`flex flex-col gap-4 md:gap-6 ${accountMenuOpen ? 'block' : !isMobile ? 'flex' : 'hidden'}`}>
                                <li>
                                    <Link className="text-bran4 text-xs leading-[18px] font-normal" href="/account" aria-label="Ir para minha conta" title="Minha conta">
                                        Minha Conta
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-bran4 text-xs leading-[18px] font-normal" href="/account#/orders" aria-label="Ir para a página dos meus pedidos" title="Meus pedidos">
                                        Meus Pedidos
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-bran4 text-xs leading-[18px] font-normal" href="/login" aria-label="Ir para a página de cadastro" title="Cadastre-se">
                                        Cadastre-se
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-6">
                            <div className="flex flex-row items-center justify-between" onClick={isMobile ? toggleLocationMenu : undefined}>
                                <p className="text-bran4 text-base leading-[18px] font-bold">Onde nos Encontrar</p>
                                {isMobile && (locationMenuOpen ? <FaMinus className="w-2 h-2" /> : <FaPlus className="w-2 h-2" />)}
                            </div>
                            <ul className={`flex flex-col gap-4 md:gap-6 ${locationMenuOpen ? 'block' : !isMobile ? 'flex' : 'hidden'}`}>
                                <li>
                                    <Link className="text-bran4 text-xs leading-[18px] font-normal" href="/institucional/nossas-lojas" aria-label="Ir para a página de nossas lojas" title="Lojas">
                                        Lojas
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-bran4 text-xs leading-[18px] font-normal" href="/institucional/endereco" aria-label="Ir para a página de endereços" title="Endereço">
                                        Endereço
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-brand4">
                <div className="container flex flex-col gap-8 md:flex-row items-center justify-between pt-5 pb-4">
                    <div className="flex items-center justify-center gap-[22px]">
                        <Link href="https://www.facebook.com/maeztraconsultoria/" aria-label="Ir para o Facebook da Maeztra" title="Facebook">
                            <FaFacebookSquare className="w-8 h-8 text-brand10" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/maeztra/" aria-label="Ir para o Linkedin da Maeztra" title="Linkedin">
                            <FaLinkedinIn className="w-8 h-8 text-brand10" />
                        </Link>
                        <Link href="https://www.instagram.com/maeztra_consultoria/" aria-label="Ir para o Instagram da Maeztra" title="Instagram">
                            <FaInstagram className="w-8 h-8 text-brand10" />
                        </Link>
                        <Link href="https://www.youtube.com/@maeztra" aria-label="Ir para o Instagram da Youtube" title="Youtube">
                            <FaYoutube className="w-8 h-8 text-brand10" />
                        </Link>
                    </div>
                    <div>
                        <Image src="/assets/images/flags.png" alt="Bandeiras de cartão" width="193" height="25" />
                    </div>
                    <div className="flex items-center justify-center gap-5">
                        <Link href="https://vtex.com/br-pt/" aria-label="Ir para o site da Vtex" title="Vtex">
                            <Image src="/assets/images/vtex.png" alt="Logo Vtex" width="68" height="48" />
                        </Link>
                        <Link href="https://maeztra.com/" aria-label="Ir para o site da Maeztra" title="Maeztra">
                            <Image src="/assets/images/maeztra.png" alt="Logo Maeztra" width="129" height="49" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
