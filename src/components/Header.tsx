import React from 'react';
import Image from 'next/image';
import { Mulish } from 'next/font/google'
import ProfileImage from '../../public/assets/image/perfil.png';
import ProfileImageColor from '../../public/assets/image/perfil-c.png';
import TailwindImage from '../../public/assets/image/tailwind.png';
import ReactImage from '../../public/assets/image/react.png';
import HtmlImage from '../../public/assets/image/html.png';
import JsImage from '../../public/assets/image/js.png';
import NextImage from '../../public/assets/image/next.png';
import CssImage from '../../public/assets/image/css.png';
import LinkedinIcon from '../../public/assets/icons/linkedin.svg';
import GithubIcon from '../../public/assets/icons/github.svg';

const muslish = Mulish({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
  })

const stack = [
    {
        image: ReactImage,
        name: 'React'
    },
    {
        image: NextImage,
        name: 'Next JS'
    },
    {
        image: TailwindImage,
        name: 'Tailwind'
    },
    {
        image: HtmlImage,
        name: 'Html'
    },
    {
        image: CssImage,
        name: 'Css'
    },
    {
        image: JsImage,
        name: 'Javascript'
    },
]

const Header = () => {
    const [hover, setHover] = React.useState(false)
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='flex flex-col justify-center order-2 md:order-1 text-center md:text-left'>
                <h1 className='font-bold text-5xl'>Frontend Developer</h1>
                <p className={` ${muslish.className} pt-6 text-secondary`} >
                    ¡Hola! Soy Rodrigo Méndez, tengo 10 años de experiencia como desarrollador de software.
                </p>
                <div className='pt-4 flex flex-row gap-2 justify-center md:justify-start'>
                    <a href="https://www.linkedin.com/in/%E2%98%95-rodrigo-m%C3%A9ndez/" target="_blank">
                        <Image src={LinkedinIcon} width={50} height={50} alt="Linkedin" />
                    </a>
                    <a href="https://github.com/rodrigo2392" target="_blank">
                        <Image src={GithubIcon} width={45} height={45} alt="Linkedin" />
                    </a>
                </div>
            </div>
            <div className='flex align-middle justify-center h-auto order-1 md:order-2 mb-10 md:mb-0' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
                <Image
                src={hover ? ProfileImageColor : ProfileImage}
                width={1024}
                height={1024}
                alt="Perfil"
                className='w-60 h-auto rounded-full'
                />
            </div>
        </div>
        <div className='w-full flex justify-center mt-10 flex-col text-center'>
            <h1 className='font-bold text-3xl'>Tecnologías</h1>
            <p  className={`font-bold text-primary text-center mb-6 pt-4`}>Con lo que actualmente trabajo 💻</p>
            <div className='flex gap-10 flex-wrap justify-center align-middle mt-5'>
                {
                    stack.map(el => (
                        <div className='flex justify-center items-center bg-white rounded-full shadow-md w-16 h-16' key={el.name} >
                            <Image src={el.image} alt="Html"  width={400} height={400} className='w-10 h-10' />
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    );
};

export default Header;