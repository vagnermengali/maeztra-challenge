import { useState } from "react";

import { TopSearches } from "@/data/TopSearches";

const Search = ({className} : {className : string}) => {
    const [showTopSearches, setShowTopSearches] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const handleFocus = () => {
        setShowTopSearches(true);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setShowTopSearches(false);
        }, 100);
    };

    const handleItemClick = (item: string) => {
        setSearchValue(item);
        setShowTopSearches(false);
    };

    return (
        <div className={className}>
            <div className="relative bg-brand8 w-full lg:w-[327px] xl:w-lg 2xl:w-[791px] rounded-[10px]">
                <div className="bg-brand8 rounded-[10px] flex w-auto">
                    <input
                        type="search"
                        placeholder="O que você busca?"
                        aria-label="Pesquisar"
                        className="bg-brand8 text-brand4 px-6 rounded-s-[10px] w-full 2xl:w-[672px] placeholder:text-brand4 placeholder:text-xs outline-none"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button className="bg-brand1 hover:text-brand4 transition-all duration-500 ease-in-out text-brand10 py-[14px] px-[39.25px] max-w-[119px] rounded-lg font-normal text-sm leading-5 text-center">
                        Buscar
                    </button>
                </div>
                {showTopSearches && (
                    <div className="bg-brand10 shadow-effect1 rounded p-4 absolute flex flex-col gap-3 md:gap-4 w-full mt-6">
                        <h2 className="text-bran4 text-base leading-[18px] font-bold">Termos mais procurados</h2>
                        <ul>
                            {TopSearches.map((item, index) => (
                                <li key={index} className="py-1 cursor-pointer hover:bg-gray-100" onClick={() => handleItemClick(item)}>
                                    <p className="text-bran4 text-xs leading-[18px] font-normal">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
