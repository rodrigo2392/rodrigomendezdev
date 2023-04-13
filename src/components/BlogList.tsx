import React from "react";
import Image from "next/image";
import { BlogPost } from "@/contentful/types";
import dayjs from "dayjs";

interface Props {
    blogPosts: BlogPost[];
}

const BlogList = ({ blogPosts }: Props) => {
    return (
        <div className="pb-10">
            <h1 className="text-center font-bold text-3xl">Blog</h1>
            <a href="https://www.youtube.com/@rodrigomendezdev">
                <div className="flex flex-row mb-6 justify-center items-center pt-4">
                    <p className="font-bold text-primary text-center mr-2">
                        Mi blog personal 📖
                    </p>
                </div>
            </a>

            <div className="grid grid-cols-1 gap-7 lg:grid-cols-2  w-full">
                {blogPosts?.map(el => (
                    <div key={el.fields.slug}>
                        <a
                            href={`blog/${el.fields.slug}`}
                            className="cursor-pointer w-full"
                        >
                            <div
                                className="bg-white w-full shadow-md rounded-b-lg relative lg:flex"
                                key={el.sys.id}
                            >
                                <Image
                                    src={`https:${el.fields.cover.fields.file.url}`}
                                    width={326}
                                    height={260}
                                    alt="Linkedin"
                                    className="w-full h-44 lg:w-40 lg:h-auto rounded-t-lg lg:rounded-none object-cover"
                                />
                                <div>
                                    <span className="absolute text-xs -mt-14 right-2 lg:right-2 lg:mt-0 lg:top-2 bg-blue-900  text-white rounded-xl px-4 py-1">
                                        {dayjs(el.sys.createdAt).format(
                                            "DD-MM-YYYY"
                                        )}
                                    </span>
                                    <div className="px-5 py-5 mt-6">
                                        <h2 className="font-bold text-sm">
                                            {el.fields.title}
                                        </h2>
                                        <p className="text-xs">
                                            {el.fields.description}
                                        </p>
                                    </div>
                                    <div className="px-5 pb-5 flex flex-wrap gap-2">
                                        {el.fields.tags.map(tag => (
                                            <>
                                                <span
                                                    key={tag}
                                                    className="text-xs px-2 py-1 bg-gray-100 rounded-lg"
                                                >
                                                    {tag}
                                                </span>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
