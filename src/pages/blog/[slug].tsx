import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import { NextPageContext } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/NavbarPages";
import BlogPost from "@/components/BlogPost";
import Footer from "@/components/Footer";
import { getPost } from "../../contentful";
import { BlogPost as Post } from "../../contentful/types";

const poppins = Poppins({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

interface Props {
    post: Post;
}
export default function Home({ post }: Props) {
    const router = useRouter();
    const { slug } = router.query;
    const [back, setBack] = React.useState(false);
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    function scrollFunction() {
        if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
        ) {
            setBack(true);
        } else {
            setBack(false);
        }
    }
    React.useEffect(() => {
        if (window) {
            window.addEventListener("scroll", scrollFunction);
        }
        return () => {
            window.removeEventListener("scroll", scrollFunction);
        };
    }, []);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
                />
                <title>{post.fields.title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="title" content={post.fields.title} />
                <meta name="description" content={post.fields.description} />
                <meta name="keywords" content={post.fields.tags.join()} />
                <meta name="robots" content="index, follow" />
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
                <meta name="language" content="Spanish" />
                <meta name="revisit-after" content="10 days" />
                <meta name="author" content="Rodrigo Méndez" />
                <meta itemProp="name" content={slug?.toString()} />
                <meta
                    itemProp="description"
                    content={post.fields.description}
                />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={post.fields.title} />
                <meta
                    name="twitter:description"
                    content={post.fields.description}
                />
                <meta name="twitter:site" content="@rodrigom_dev" />
                <meta name="twitter:creator" content="@rodrigom_dev" />
                <meta
                    name="twitter:image:src"
                    content={`https:${post.fields.cover.fields.file.url}`}
                />

                <meta name="og:title" content={post.fields.title} />
                <meta name="og:description" content={post.fields.description} />
                <meta
                    name="og:image"
                    content={`https:${post.fields.cover.fields.file.url}`}
                />
                <meta
                    name="og:url"
                    content={`https://rodrigomendez.dev/blog/${slug}`}
                />
                <meta name="og:site_name" content="rodrigomendez.dev" />
                <meta name="og:locale" content="es_MX" />
                <meta name="og:type" content="website" />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={poppins.className}>
                <Navbar />
                <div
                    className="flex justify-center pt-10 text-primary bg-bgGray pb-10 md:px-10"
                    id="inicio"
                >
                    <div className="max-w-4xl">
                        <BlogPost post={post} />
                    </div>
                </div>
                <button
                    title="Volver arriba"
                    aria-label="Volver arriba"
                    onClick={backToTop}
                    type="button"
                    className={`${
                        back ? "fixed" : "hidden"
                    } p-3 bg-black text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out bottom-9 right-5`}
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        className="w-4 h-4"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor"
                            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                        />
                    </svg>
                </button>
                <Footer />
            </main>
        </>
    );
}

Home.getInitialProps = async (ctx: NextPageContext) => {
    const post = await getPost(ctx?.query?.slug?.toString() || "");
    return {
        post: post[0],
    };
};
