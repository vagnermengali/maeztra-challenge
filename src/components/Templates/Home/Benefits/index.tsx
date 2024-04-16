import SlideBenefits from "@/components/Templates/Home/Benefits/Slide";

const Benefits = () => {
  return (
    <section className="flex flex-col items-center gap-4 pb-5 pt-6 md:pb-10">
      <h2 className="font-bold text-brand4 text-base leading-6 text-center">
        Por que comprar na Maeztra?
      </h2>
      <div className="container">
        <SlideBenefits />
      </div>
    </section>
  );
};

export default Benefits;
