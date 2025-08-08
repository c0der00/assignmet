import React from "react";

function Tag({
    children,
    type ="button",
    bgColor = "bg-[#E9DFFC]",
    textColor = "text-[#784DC7]",
    className = "",
    rounded = "rounded-full",
    border = "border border-[#BE9FF6]",
    ...props
}){
    return (
         <button className={`h-[24px] w-[60px] text-[10px]  ${rounded} ${border} ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Tag;