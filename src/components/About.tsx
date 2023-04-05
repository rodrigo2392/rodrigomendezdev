import Image from 'next/image';
import React from 'react';
import { Mulish } from 'next/font/google'
import DeveloperImage from '../../public/assets/image/developer.jpg'

const muslish = Mulish({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
  })

export default function About(){

        return (
            <div className='pb-10'>
                <h1 className='text-center font-bold text-3xl'>Sobre mí</h1>
                <p  className={`font-bold text-primary text-center mb-6 pt-4`}>Guadalajara, Jalisco, México 📌</p>
                <div className='grid grid-cols-1 md:grid-cols-2 '>
                    <div className='flex items-center pb-6 md:mr-10'>
                        <Image  src={DeveloperImage} alt="Acerca de mí" height={400} width={400} className="w-full h-auto rounded-xl"/>
                    </div>
                    <div>
                        <p className={`${muslish.className} text-secondary`}>
                            Soy desarrollador de software con más de 10 años de experiencia, he trabajo en diferentes tecnologías
                            tanto frontend como backend. 
                        </p>
                        <p className={`${muslish.className} text-secondary`}>
                            Actualmente me enfoco en trabajar proyectos frontend con React como tecnología principal.
                            También en el desarrollo mobile con React Native.
                        </p>
                        <p className={`${muslish.className} text-secondary`}>
                            Vivo en Guadalajara, Jalisco, pero soy originario del estado de Chiapas.
                        </p>
                    </div>
                    
                    
                </div>
                
            </div>
        );
}