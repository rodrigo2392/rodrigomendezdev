import { createClient, ContentfulClientApi } from "contentful";

const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "";
const environment = process.env.NEXT_PUBLIC__ENVIRONMENT || "";

const client = createClient({
    accessToken,
    space,
    environment,
}) as ContentfulClientApi;

export const getVideos = async () => {
    const response = await client.getEntries({
        content_type: "youtubeVideo",
    });

    return response.items;
};

export const getBlog = async () => {
    const response = await client.getEntries({
        content_type: "blog",
    });

    return response.items;
};

export const getPost = async (slug: string) => {
    const response = await client.getEntries({
        content_type: "blog",
        "fields.slug": slug,
    });

    return response.items;
};
