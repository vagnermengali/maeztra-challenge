import { useEffect, useState } from "react";

import Icon from "@/components/Icon";

const BackToButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 250) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${
        showButton ? "flex" : "hidden"
      } bg-brand1 group fixed items-center justify-center w-8 h-8 bottom-5 right-5 rounded-full z-30 m-0 p-0 transition-all duration-500 ease-in-out`}
      onClick={handleScrollToTop}
      aria-label="Voltar ao topo"
    >
      <Icon id="ArrowY" width="14" height="14" />
    </button>
  );
};

export default BackToButton;
