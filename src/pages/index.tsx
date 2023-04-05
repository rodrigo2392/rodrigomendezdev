import React from 'react';
import Head from 'next/head'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Videos from '@/components/Videos'
import Contact from '@/components/Contact'
import Social from '@/components/Social'
import {getVideos} from '../contentful'
import {YoutubeVideo} from '../contentful/types'
import {Bounce ,JackInTheBox} from 'react-awesome-reveal';
import Meta from '@/components/Meta';

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

interface Props {
  videos: YoutubeVideo[]
}
export default function Home({videos}: Props) {
  const [back, setBack] = React.useState(false)
  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  React.useEffect(()=> {
    if(window) {
      window.addEventListener('scroll', scrollFunction);
    }
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    }
  }, [])
  
  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      setBack(true)
    } else {
      setBack(false)
    }
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
        <title>Rodrigo Méndez - Frontend developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Rodrigo Méndez - Frontend developer"/>
        <meta name="description" content="Rodrigo Méndez desarrollador frontend con 10 años de experiencia" />
        <meta name="keywords" content="frontend,desarrollador,guadalajara,zapopan,jalisco,backend,fullstack,react,native" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Spanish" />
        <meta name="revisit-after" content="10 days" />
        <meta name="author" content="Rodrigo Méndez" />
        <meta itemProp="name" content="Rodrigo Méndez - Frontend developer" />
        <meta itemProp="description" content="Rodrigo Méndez desarrollador frontend con 10 años de experiencia" />

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content="Rodrigo Méndez - Frontend developer" />
        <meta name="twitter:description" content="Rodrigo Méndez desarrollador frontend con 10 años de experiencia" />
        <meta name="twitter:site" content="@rodrigom_dev"/>
        <meta name="twitter:creator" content="@rodrigom_dev"/>
        <meta name="twitter:image:src" content="https://rodrigomendez.dev/_ipx/w_1080,q_75/%2F_next%2Fstatic%2Fmedia%2Fperfil-c.2d6e09cb.png?url=%2F_next%2Fstatic%2Fmedia%2Fperfil-c.2d6e09cb.png&w=1080&q=75"/>
        
        <meta name="og:title" content="Rodrigo Méndez - Frontend developer" />
        <meta name="og:description" content="Rodrigo Méndez desarrollador frontend con 10 años de experiencia" />
        <meta name="og:image" content="https://rodrigomendez.dev/_ipx/w_1080,q_75/%2F_next%2Fstatic%2Fmedia%2Fperfil-c.2d6e09cb.png?url=%2F_next%2Fstatic%2Fmedia%2Fperfil-c.2d6e09cb.png&w=1080&q=75" />
        <meta name="og:url" content="https://rodrigomendez.dev" />
        <meta name="og:site_name" content="rodrigomendez.dev" />
        <meta name="og:locale" content="es_MX" />
        <meta name="og:type" content="website" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={poppins.className}>
        <Navbar />
        <Bounce delay={200} triggerOnce>
          <JackInTheBox  delay={200} triggerOnce>
          <div className='flex justify-center align-middle pt-10 md:pt-24 text-primary bg-bgGray pb-10 px-10' id="inicio">
            <div className='max-w-4xl'>
              <Header />
            </div>
          </div>
          </JackInTheBox>
          <div className='flex justify-center align-middle pt-10 md:pt-24 text-primary px-10' id="acerca">
            <div className='max-w-4xl'>
              <About />
            </div>
          </div>
          <div className='flex justify-center align-middle pt-10 md:pt-24 text-primary bg-bgGray pb-10 px-10'  id="proyectos">
            <div className='max-w-4xl'>
              <Videos videos={videos} />
            </div>
          </div>
          <div className='flex justify-center align-middle pt-10 md:pt-24 text-primary pb-10 px-10'  id="contacto">
            <div className='max-w-4xl'>
              <Social />
            </div>
          </div>
          <div className='flex justify-center align-middle pt-10 md:pt-24 text-primary bg-bgGray pb-10 px-10'>
            <div className='max-w-4xl'>
              <Contact />
            </div>
          </div>
        </Bounce>
        <button onClick={backToTop} type="button"  className={`${back?'fixed':'hidden'} p-3 bg-black text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out bottom-9 right-5`}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-4 h-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>
        </button>
        <Footer />
      </main>
    </>
  )
}

Home.getInitialProps = async (ctx: any) => {
  const videos = await getVideos();
  return {
    videos
  };
};

