import React from "react";
import { FaShare } from "react-icons/fa";

interface Props {
    title: string;
    url: string;
    text: string;
}

export default function ExportButton({ title, url, text }: Props) {
    const share = () => {
        navigator.share({
            text,
            url,
            title,
        });
    };
    return (
        <button
            onClick={share}
            type="button"
            className="text-sm bg-blue-600 text-white py-2 rounded-lg border px-5  flex gap-3 items-center w-full md:max-w-[200px] justify-center"
        >
            Compartir <FaShare />
        </button>
    );
}
