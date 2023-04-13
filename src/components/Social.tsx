import React from "react";
import Image from "next/image";
import TiktokIcon from "../../public/assets/icons/tiktok.svg";
import YoutubeIcon from "../../public/assets/icons/youtube.svg";
import TwitterIcon from "../../public/assets/icons/twitter.svg";
import InstagramIcon from "../../public/assets/icons/instagram.svg";

const stack = [
    {
        image: YoutubeIcon,
        name: "Youtube",
        url: "https://www.youtube.com/@rodrigomendezdev",
    },
    {
        image: TiktokIcon,
        name: "Tiktok",
        url: "https://www.tiktok.com/@rodrigomendezdev",
    },

    {
        image: TwitterIcon,
        name: "Twitter",
        url: "https://twitter.com/rodrigom_dev",
    },

    {
        image: InstagramIcon,
        name: "Instagram",
        url: "https://www.instagram.com/rodrigomendezdev/",
    },
];

const Social = () => {
    return (
        <div className="pb-10">
            <h1 className="text-center font-bold text-3xl">Redes sociales</h1>
            <p className="font-bold text-primary text-center mr-2 pt-4">
                Sígueme en mis redes 📱
            </p>
            <div className="flex gap-10 flex-wrap justify-center align-middle mt-5">
                {stack.map(el => (
                    <a
                        href={el.url}
                        key={el.name}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="flex justify-center items-center bg-white rounded-full shadow-md w-16 h-16">
                            <Image
                                src={el.image}
                                alt="Html"
                                width={400}
                                height={400}
                                className="w-10 h-10"
                            />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Social;
