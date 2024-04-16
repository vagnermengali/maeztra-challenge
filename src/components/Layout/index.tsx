import { Titillium_Web } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToButton from "@/components/BackToTop";

const titillium = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${titillium.className}`}>
      <Header />
      <BackToButton />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
