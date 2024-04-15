import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaRegCircleCheck } from 'react-icons/fa6';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setValidEmail(false);
            return;
        }
        setSubmitted(true);
        setTimeout(function () {
            setEmail('')
            setSubmitted(false);
        }, 3000);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setValidEmail(true);
    };

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    return (
        <section className="bg-brand9 py-6 border-t-2 border-brand8 border-solid mt-5 md:mt-[39px] -z-10">
            <div className="container flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-14">
                <h6 className="text-brand2 text-2xl leading-9 font-bold">Recebe Nossa Newsletter</h6>
                <div className="flex flex-col gap-2 sm:gap-1">
                    <form className="flex items-center w-full gap-[15px] sm:gap-0 sm:w-[280px] md:w-[410px] lg:w-[630px] relative" onSubmit={handleSubmit}>
                        <input
                            className={`px-6 w-[204px] sm:w-full text-brand4 text-sm leading-5 placeholder:text-brand4 placeholder:text-sm placeholder:leading-5 bg-brand10 border-t-[1px] border-r-[1px]  sm:border-r-0 border-l-[1px] border-b-[1px] border-solid rounded-[4px] sm:rounded-none sm:rounded-s-[4px] md:rounded-s-[10px] h-[26px] sm:h-10 outline-none ${submitted ? 'border-green-500' : validEmail ? 'border-brand4' : 'border-red-500'}`}
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={handleChange}
                            aria-label="Digite seu e-mail" />
                        <button className={`${submitted ? "bg-green-500" : "bg-brand1"} max-w-full w-[69px] sm:w-[131px] rounded-[4px] hover:text-brand4 text-brand10 font-bold text-sm sm:text-base leading-5 sm:leading-6 h-[26px] sm:h-10 transition-all duration-500 ease-in-out`}>{submitted ? "Enviado" : "Enviar"}</button>
                    </form>
                    {!validEmail && <p className="text-red-500 text-xs max-auto sm:mx-0 text-center">Por favor, insira um endereço de e-mail válido.</p>}
                    {submitted && <p className="text-green-500 text-xs max-auto sm:mx-0 text-center">Obrigado pela inscrição! Entraremos em contato.</p>}
                </div>
            </div>
        </section>
    );
}

export default Newsletter;
