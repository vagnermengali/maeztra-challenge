import Benefits from "./Benefits";
import Brands from "./Brands";
import Collection from "./Collection";
import MainBanner from "./MainBanner";
import Newsletter from "./Newsletter";
import ProductSlide from "./ProductSlide";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <MainBanner />
      <Benefits />
      <Brands />
      <ProductSlide />
      <Collection />
      <Newsletter />
    </div>
  );
}

export default Home;
