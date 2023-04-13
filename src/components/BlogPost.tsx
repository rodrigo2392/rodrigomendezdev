/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import { BlogPost } from "@/contentful/types";
import {
    documentToReactComponents,
    RenderNode,
} from "@contentful/rich-text-react-renderer";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Disqus from "@/components/Disqus";
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es");

interface Props {
    post: BlogPost;
}

const options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
            const { data } = node;
            return (
                <Image
                    src={`https:${data?.target?.fields?.file?.url}`}
                    width={1080}
                    height={720}
                    alt={data?.target?.fields?.title}
                    className="w-1/2 h-auto object-cover md:rounded-xl mt-5 mb-5"
                />
            );
        },
        [BLOCKS.PARAGRAPH]: (node: RenderNode, children: any) => (
            <p className="mb-4 text-sm">{children}</p>
        ),
        [INLINES.HYPERLINK]: (node: any, children: any) => {
            const { data } = node;
            return (
                <a
                    className="py-10 text-blue-600 cursor-pointer"
                    href={data?.uri}
                    target="_bank"
                >
                    {children}
                </a>
            );
        },
    },
} as any;
const Post = ({ post }: Props) => {
    const [currentDate, setCurrentDate] = React.useState("");

    React.useEffect(() => {
        setCurrentDate(
            dayjs(post.sys.createdAt).format("dddd D MMMM YYYY h:mm A")
        );
    }, [post.sys.createdAt]);

    return (
        <div className="pb-10 w-full">
            <span className="text-gray-500 text-sm pl-5 md:pl-0">
                {currentDate}
            </span>
            <h1 className="pl-5 text-left font-bold text-3xl  mt-2 md:pl-0">
                {post.fields.title}
            </h1>
            <div className="pl-5 pt-5 flex flex-wrap gap-2 w-full  md:pl-0">
                {post.fields.tags.map(tag => (
                    <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-gray-100 rounded-lg"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="w-full mt-5">
                <Image
                    src={`https:${post.fields.cover.fields.file.url}`}
                    width={1080}
                    height={720}
                    alt={post.fields.title}
                    className="w-full h-80 object-cover md:rounded-xl"
                />
            </div>

            <div className=" w-full">
                <div className="px-5 py-5 mt-6">
                    <div>
                        {documentToReactComponents(
                            post.fields.content,
                            options
                        )}
                    </div>
                </div>
                <div className="px-5 py-5">
                    <Disqus post={post} />
                </div>
            </div>
        </div>
    );
};

export default Post;
