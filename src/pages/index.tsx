import PopUp from "@/components/Popup";
import Seo from "@/components/Seo";
import Home from "@/components/Templates/Home";

const HomePage = () => {
  return (
    <>
      <Seo
        title="Maeztra - Especialista em E-commerce"
        url="https://maeztra-challenge-vagnermengali.vercel.app/"
        description="Uma empresa com mais de 10 anos de experiência, especialista em soluções eficientes para alavancar suas vendas online."
      />
      <PopUp/>
      <Home />
    </>
  );
}

export default HomePage