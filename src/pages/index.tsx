import React from "react";
import Head from "next/head";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Videos from "@/components/Videos";
import BlogList from "@/components/BlogList";
import Contact from "@/components/Contact";
import Social from "@/components/Social";
import { Fade } from "react-awesome-reveal";
import Container from "@/components/Container";
import BackTop from "@/components/BackTop";
import { getVideos, getBlog } from "../contentful";
import { YoutubeVideo, BlogPost } from "../contentful/types";

const poppins = Poppins({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

interface Props {
    videos: YoutubeVideo[];
    blogPosts: BlogPost[];
}
export default function Home({ videos, blogPosts }: Props) {
    const Sections = [
        {
            section: <Header />,
            id: "inicio",
        },
        {
            section: <About />,
            id: "acerca",
        },
        {
            section: <BlogList blogPosts={blogPosts} />,
            id: "blog",
        },
        {
            section: <Videos videos={videos} />,
            id: "videos",
        },
        {
            section: <Social />,
            id: "redes",
        },
        {
            section: <Contact />,
            id: "contacto",
        },
    ];

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
                />
                <title>Rodrigo Méndez - Frontend developer</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="title"
                    content="Rodrigo Méndez - Frontend developer"
                />
                <meta
                    name="description"
                    content="Rodrigo Méndez desarrollador frontend con 10 años de experiencia"
                />
                <meta
                    name="keywords"
                    content="frontend,desarrollador,guadalajara,zapopan,jalisco,backend,fullstack,react,native"
                />
                <meta name="robots" content="index, follow" />
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
                <meta name="language" content="Spanish" />
                <meta name="revisit-after" content="10 days" />
                <meta name="author" content="Rodrigo Méndez" />
                <meta
                    itemProp="name"
                    content="Rodrigo Méndez - Frontend developer"
                />
                <meta
                    itemProp="description"
                    content="Rodrigo Méndez desarrollador frontend con 10 años de experiencia"
                />

                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    content="Rodrigo Méndez - Frontend developer"
                />
                <meta
                    name="twitter:description"
                    content="Rodrigo Méndez desarrollador frontend con 10 años de experiencia"
                />
                <meta name="twitter:site" content="@rodrigom_dev" />
                <meta name="twitter:creator" content="@rodrigom_dev" />
                <meta
                    name="twitter:image:src"
                    content="https://rodrigomendez.dev/banner.png"
                />

                <meta
                    name="og:title"
                    content="Rodrigo Méndez - Frontend developer"
                />
                <meta
                    name="og:description"
                    content="Rodrigo Méndez desarrollador frontend con 10 años de experiencia"
                />
                <meta
                    name="og:image"
                    content="https://rodrigomendez.dev/banner.png"
                />
                <meta name="og:url" content="https://rodrigomendez.dev" />
                <meta name="og:site_name" content="rodrigomendez.dev" />
                <meta name="og:locale" content="es_MX" />
                <meta name="og:type" content="website" />

                <meta
                    name="application-name"
                    content="Rodrigo Méndez - Frontend developer"
                />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="default"
                />
                <meta
                    name="apple-mobile-web-app-title"
                    content="Rodrigo Méndez - Frontend developer"
                />
                <meta
                    name="description"
                    content="Rodrigo Méndez desarrollador frontend con 10 años de experiencia"
                />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta
                    name="msapplication-config"
                    content="/icons/browserconfig.xml"
                />
                <meta name="msapplication-TileColor" content="#2B5797" />
                <meta name="msapplication-tap-highlight" content="no" />
                <meta name="theme-color" content="#FFF" />

                <link
                    rel="apple-touch-icon"
                    href="/icons/touch-icon-iphone.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/icons/touch-icon-ipad.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/icons/touch-icon-iphone-retina.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="167x167"
                    href="/icons/touch-icon-ipad-retina.png"
                />

                <link rel="manifest" href="/manifest.json" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={poppins.className}>
                <Navbar />
                <Fade delay={300} triggerOnce>
                    {Sections.map((section, index) => (
                        <Container id={section.id} gray={index % 2 === 0}>
                            {section.section}
                        </Container>
                    ))}
                </Fade>
                <BackTop />
                <Footer />
            </main>
        </>
    );
}

Home.getInitialProps = async () => {
    const videos = await getVideos();
    const blogPosts = await getBlog();
    return {
        videos,
        blogPosts,
    };
};
