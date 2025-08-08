import React from "react";
import SkillCircle from "./ui/SkillCircle";

function SkillsCard({
    children,
    text,
    textColor = "text-white",
    className = "",
    ...probs

}) {
    return(
        <div className="py-8 w-auto flex flex-wrap flex-row justify-evenly border  border-[#737373] rounded-[10px] h-auto">
            <div className="flex">
                <SkillCircle/>
            </div>
            <div className="flex flex-col items-center sm:items-start justify-center ">
                <h3 className={` flex flex-wrap  text-white text-lg font-semibold ${probs} ${textColor} ${className}`}>
                    {children}
                </h3>
                <p className={ `flex w-auto  sm:w-[425px] sm:text-[12px] text-center sm:text-start  ${probs} ${textColor}`}>
                    {text}
                </p>
            </div>
        </div>
    )
}

export default SkillsCard;