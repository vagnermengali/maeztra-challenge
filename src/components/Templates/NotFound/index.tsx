import Link from "next/link";

const NotFound = () => {
  return (
    <section className="container flex flex-col items-center justify-center gap-8 py-10">
      <p className="text-brand5 text-6xl sm:text-8xl uppercase font-black">404</p>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-black text-2xl md:text-5xl leading-tight md:leading-tight text-brand1 uppercase text-center">Página não encontrada</h1>
        <p className="font-normal text-sm md:text-lg leading-relaxed md:leading-relaxed text-brand17 max-w-lg text-center">Lamentamos, mas a página que você solicitou não foi encontrada. Por favor, vá para a página inicial.</p>
      </div>
      <Link className="bg-brand1 hover:text-brand4 transition-all duration-500 ease-in-out text-brand10 py-3 sm:py-4 px-5 sm:px-10 rounded-lg font-normal text-sm leading-5 text-center" href="/" aria-label="Voltar para a página inicial" title="Página inicial" rel="nofollow">
        Voltar para a página inicial
      </Link>
    </section>
  );
}

export default NotFound;
