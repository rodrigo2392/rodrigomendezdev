import React from "react";
import { BlogPost } from "@/contentful/types";
import BlogCard from "./BlogCard";

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
                {blogPosts?.map(el => {
                    return <BlogCard el={el} key={el.fields.slug} />;
                })}
            </div>
        </div>
    );
};

export default BlogList;
