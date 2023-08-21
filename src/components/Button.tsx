import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import Link from "next/link";

interface Props {
    title: string;
    url: string;
    black?: boolean;
}

const defaultProps = {
    black: false,
};

export default function ShareButton({ title, url, black }: Props) {
    return (
        <Link
            href={url}
            className={`text-sm ${
                black ? "bg-black" : "bg-blue-600"
            } text-white py-2 rounded-lg border px-5  flex gap-3 items-center w-full md:max-w-[200px] justify-center`}
        >
            {title} <FaShoppingBag />
        </Link>
    );
}

ShareButton.defaultProps = defaultProps;
