import Image from "next/image";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

import Icon from "@/components/Icon";

const PopUp = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const closePopUp = () => {
    setShowPopUp(false);
    localStorage.setItem("show-popup", JSON.stringify(false));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setValidEmail(false);
      return;
    }
    setSubmitted(true);
    setTimeout(closePopUp, 3000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setValidEmail(true);
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  useEffect(() => {
    const storedValue = localStorage.getItem("show-popup");
    setShowPopUp(storedValue ? JSON.parse(storedValue) : true);

    return () => {
      if (!storedValue) {
        document.body.style.overflow = "";
      }
    };
  }, []);

  useEffect(() => {
    if (showPopUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showPopUp]);

  return (
    <>
      {showPopUp && (
        <>
          <div className="fixed block inset-0 bg-brand3 z-40 transition-all duration-500 ease-in-out"></div>
          <div className="fixed flex flex-col items-end w-[298px] md:w-96 lg:w-[851px] h-[307px] md:h-[558px] z-50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <button
              className="text-xs leading-5 text-brand10 uppercase"
              onClick={closePopUp}
            >
              Fechar
            </button>
            <div className="bg-brand10 w-full h-full flex flex-row justify-between">
              <Image
                className="w-1/2 hidden lg:flex"
                src="/assets/images/newsletter.webp"
                width="426"
                height="532"
                alt=""
                aria-label=""
              />
              <div className="flex flex-col items-center justify-center w-full lg:w-1/2 p-5 md:p-[51px]">
                {submitted ? (
                  <>
                    <Icon
                      id="Checked"
                      width="64"
                      height="64"
                      className="mb-7"
                    />
                    <p className="text-brand6 text-xl leading-6 font-normal text-center mb-[26px]">
                      Obrigado por se inscrever! Entraremos em contato em breve.
                    </p>
                  </>
                ) : (
                  <>
                    <Icon id="Mail" width="28" height="28" className="mb-3" />
                    <span className="text-brand6 text-xs font-normal mb-3 uppercase">
                      Bem vinda à Maeztra
                    </span>
                    <p className="text-brand6 text-base md:text-xl leading-6 font-normal text-center mb-[26px] px-3 md:px-0">
                      Receba em Primeira mão{" "}
                      <span className="text-brand6 text-base md:text-xl leading-6 font-bold">
                        desconto e ofertas exclusivas
                      </span>
                    </p>
                    <form
                      className="flex flex-col items-center gap-[12px] md:gap-[10px] w-full"
                      onSubmit={handleSubmit}
                    >
                      <input
                        className={`px-[14px] w-full text-brand7 text-xs leading-5 placeholder:text-brand7 placeholder:text-xs placeholder:leading-5 bg-brand10 border-[1px] border-brand11 border-solid rounded-[5px] md:rounded-[10px] h-10 outline-none ${
                          validEmail ? "" : "border-red-500"
                        }`}
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={handleChange}
                        aria-label="Digite seu e-mail"
                      />
                      {!validEmail && (
                        <p className="text-red-500 text-xs">
                          Por favor, insira um endereço de e-mail válido.
                        </p>
                      )}
                      <button className="bg-brand1 rounded-[10px] w-full h-10 text-xs font-bold leading-5 text-brand10 flex gap-2 items-center justify-center">
                        Enviar <Icon id="Plane" width="12" height="12" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PopUp;
