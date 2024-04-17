import Image from "next/image";
import Link from "next/link";

const Collection = () => {
  return (
    <section className="mb-5 md:mb-[39px] mt-[4.5px] md:mt-8">
      <div className="container flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-6 lg:gap-16">
        <div className="flex flex-col gap-4 max-w-full lg:max-w-sm xl:max-w-[420px]">
          <h5 className="text-brand2 text-2xl leading-9 font-bold">
            Out/Inverno
          </h5>
          <p className="text-brand2 text-sm leading-5 font-normal">
            Descubra o charme do inverno com nossa nova coleção. Dos casacos de
            lã aos elegantes sobretudos, cada peça é uma mistura perfeita de
            estilo e conforto. Nossos suéteres de cashmere oferecem calor e
            luxo, enquanto os cachecóis de lã merino complementam qualquer look.
            Para um toque de elegância, experimente nossas luvas de couro e
            chapéus de feltro. Não se esqueça das botas de camurça para
            completar o visual. Aproveite o inverno com nossa coleção, onde moda
            e funcionalidade se encontram!
          </p>
        </div>
        <Link href="/#outono-inverno" aria-label="Ir para a coleção outono-inverno">
          <Image
            className="w-[1114px] rounded lg:rounded-none"
            src="/assets/images/second-banner.webp"
            width="1114"
            height="480"
            alt="Nova coleção de outono-inverno"
            loading="lazy"
          />
        </Link>
      </div>
    </section>
  );
};

export default Collection;
