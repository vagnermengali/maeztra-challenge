import Seo from "@/components/Seo";
import Home from "@/components/Templates/Home";

const HomePage = () => {
  return (
    <>
      <Seo
        title="Homepage"
        url="https://www.tekoa.dev.br/"
        description="Descrição Homepage"
      />
      <Home />
    </>
  );
}

export default HomePage