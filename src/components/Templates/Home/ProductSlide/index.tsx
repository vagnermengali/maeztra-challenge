import SlideProducts from "@/components/Templates/Home/ProductSlide/Slide";

const ProductSlide = () => {
  return (
    <section className="flex flex-col items-center gap-4 md:gap-6 pb-[4.5px] md:pb-8 pt-5 md:pt-10">
      <h4 className="text-brand4 font-bold text-center text-2xl leading-9 md:text-[32px] md:leading-[48px]">
        As Mais Pedidas
      </h4>
      <div className="container pr-0 sm:pr-[18px]">
        <SlideProducts />
      </div>
    </section>
  );
};

export default ProductSlide;
