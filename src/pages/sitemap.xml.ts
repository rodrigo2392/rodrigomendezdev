import type { NextApiResponse } from "next";
import { getBlog } from "../contentful";
import { BlogPost } from "../contentful/types";

const EXTERNAL_DATA_URL = "https://rodrigomendez.dev/blog";

interface Props {
    posts: BlogPost[];
}

function generateSiteMap({ posts }: Props) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://jsonplaceholder.typicode.com</loc>
     </url>
     <url>
       <loc>https://jsonplaceholder.typicode.com/guide</loc>
     </url>
     ${posts
         .map(({ fields: { slug } }) => {
             return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${slug}`}</loc>
       </url>
     `;
         })
         .join("")}
   </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

interface ServerProps {
    res: NextApiResponse;
}

export async function getServerSideProps({ res }: ServerProps) {
    // We make an API call to gather the URLs for our site
    const blogPosts = (await getBlog()) as BlogPost[];

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap({ posts: blogPosts });

    res.setHeader("Content-Type", "text/xml");
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;
