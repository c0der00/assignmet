import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-500",
    h= "h-10",
    w = "w-36",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`${h} ${w}  ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}
