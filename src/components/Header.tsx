import React from "react";
import Image from "next/image";
import { Mulish } from "next/font/google";
import ShareButton from "@/components/ShareButton";
import ProfileImageColor from "../../public/assets/image/perfil.png";
import TailwindImage from "../../public/assets/image/tailwind.png";
import ReactImage from "../../public/assets/image/react.png";
import HtmlImage from "../../public/assets/image/html.png";
import JsImage from "../../public/assets/image/js.png";
import NextImage from "../../public/assets/image/next.png";
import CssImage from "../../public/assets/image/css.png";
import LinkedinIcon from "../../public/assets/icons/linkedin.svg";
import GithubIcon from "../../public/assets/icons/github.svg";

const muslish = Mulish({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

const stack = [
    {
        image: ReactImage,
        name: "React",
    },
    {
        image: NextImage,
        name: "Next JS",
    },
    {
        image: TailwindImage,
        name: "Tailwind",
    },
    {
        image: HtmlImage,
        name: "Html",
    },
    {
        image: CssImage,
        name: "Css",
    },
    {
        image: JsImage,
        name: "Javascript",
    },
];

const Header = () => {
    return (
        <>
            <div className="flex w-full justify-center md:justify-end">
                <div className="pb-9 pt-7 flex flex-col md:flex-row gap-6  items-center">
                    <ShareButton
                        text="Mira el sitio web de Rodrigo"
                        title="Rodrigo Méndez"
                        url="https://rodrigomendez.dev"
                        black
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
                    <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">
                        Frontend Developer
                    </h1>
                    <p className={` ${muslish.className} pt-6 text-secondary`}>
                        ¡Hola! Soy Rodrigo Méndez, tengo 10 años de experiencia
                        como desarrollador de software. Trabajo principalmente
                        en proyectos de tipo startup e ideas interesantes.
                    </p>
                    <div className="pt-4 flex flex-row gap-2 justify-center md:justify-start">
                        <a
                            href="https://www.linkedin.com/in/%E2%98%95-rodrigo-m%C3%A9ndez/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                src={LinkedinIcon}
                                width={50}
                                height={50}
                                alt="Linkedin"
                            />
                        </a>
                        <a
                            href="https://github.com/rodrigo2392"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                src={GithubIcon}
                                width={45}
                                height={45}
                                alt="Github"
                            />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center h-auto order-1 lg:order-2 mb-10 lg:mb-0 px-10">
                    <Image
                        src={ProfileImageColor}
                        alt="Perfil"
                        className="max-w-sm w-full lg:h-80 lg:w-80 rounded-full"
                        width={600}
                        height={600}
                        loading="eager"
                        priority
                    />
                </div>
            </div>
            <div className="w-full flex justify-center mt-10 flex-col text-center relative">
                <h2 className="font-bold text-3xl">Tecnologías</h2>
                <p className="font-bold text-primary text-center mb-6 pt-4">
                    Con lo que actualmente trabajo 💻
                </p>
                <div className="flex gap-10 flex-wrap justify-center  mt-5">
                    {stack.map(el => (
                        <div
                            className="flex justify-center items-center bg-white rounded-full shadow-md w-16 h-16"
                            key={el.name}
                        >
                            <Image
                                src={el.image}
                                alt="Html"
                                width={50}
                                height={50}
                                className="w-10 h-10"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Header;
