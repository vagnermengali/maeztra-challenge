import SlideBrands from "@/components/Templates/Home/Brands/Slide";

const Brands = () => {

    return (
        <section className="flex flex-col items-center gap-6 py-5 md:py-10">
            <h3 className="font-bold text-brand4 text-2xl md:text-[32px] leading-9 md:leading-[48px] text-center">Marcas Parceiras</h3>
            <div className="container">
                <SlideBrands/>
            </div>
        </section>
    );
}

export default Brands;
