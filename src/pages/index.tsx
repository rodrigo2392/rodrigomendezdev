import React from "react";
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
import SEO from "@/components/Seo";
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
            <SEO
                title="Rodrigo Méndez - Frontend developer"
                description="Rodrigo Méndez desarrollador frontend con 10 años de experiencia"
                tags="frontend,desarrollador,guadalajara,zapopan,jalisco,backend,fullstack,react,native"
                image="https://rodrigomendez.dev/banner.png"
                url="https://rodrigomendez.dev"
            />
            <main className={poppins.className}>
                <Navbar />
                <Fade delay={300} triggerOnce>
                    {Sections.map((section, index) => (
                        <Container
                            key={section.id}
                            id={section.id}
                            gray={index % 2 === 0}
                            noPaddingTop={index === 0}
                        >
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
