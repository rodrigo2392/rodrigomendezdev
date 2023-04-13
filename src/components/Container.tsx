import React from "react";

interface Props {
    id: string;
    children: React.ReactElement;
    gray?: boolean;
}
const defaultProps = {
    gray: false,
};
export default function Container({ id, gray, children }: Props) {
    return (
        <div
            className={`flex justify-center pt-24 text-primary px-10 pb-20 ${
                gray && "bg-bgGray"
            }`}
            id={id}
        >
            <div className="max-w-4xl">{children}</div>
        </div>
    );
}

Container.defaultProps = defaultProps;
