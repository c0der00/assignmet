import React from "react";
import Button from "../components/Button";
import img from "../assets/238b3b2a524f9cface2cd139f974dd7f588178b2.jpg";


import Card from "../components/Card";
import SkillsCard from "../components/SkillsCard";

function Home() {
    return (
        <div className="grid grid-rows-1 items-center justify-center min-h-screen bg-black gap-12 mb-12 ">
            <div className="flex flex-col lg:flex-row justify-between max-w-[1200px] gap-x-2 mx-auto   ">
                <div className=" lg:w-[956px] flex  flex-col items-center lg:items-start justify-center gap-[70px] ">
                    <div className="h-full flex flex-col gap-6">
                        <h1 className=" font-poppins text-white text-[4.6rem] sm:text-[8rem] lg:text-[9.1rem] font-extrabold leading-none uppercase">
                            PRODUCT <br /> DESIGNER
                        </h1>
                        <p className="font-poppins text-[2.5rem] sm:text-[4rem] lg:text-[5.0rem] leading-none font-extrabold bg-gradient-to-r from-[#FA709A] via-[#FEC165] to-[#FEE140] bg-clip-text text-transparent uppercase">
                            CRISTIAN MUNOZ
                        </p>
                    </div>

                    <div className="w-[80%] flex flex-col items-center justify-center gap-9">

                        <div className="w-full lg:w-[66%] lg:ml-[144px] flex flex-row items-center justify-between object-contain">
                            <div className="h-[52px] w-[52px] border border-white flex justify-center items-center rounded-[10px] ">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.1408 7.57959C27.1008 7.67279 27.1016 12.0464 30.1408 12.1388C33.1808 12.0456 33.18 7.67199 30.1408 7.57959ZM20 10.2188C14.612 10.2188 10.2444 14.598 10.2444 20C10.7584 32.9748 29.2432 32.9712 29.7552 20C29.7556 14.598 25.3876 10.2188 20 10.2188ZM20 26.3492C16.5028 26.3492 13.6676 23.5064 13.6676 20C14.0012 11.578 26.0004 11.58 26.3328 20C26.3324 23.5068 23.4972 26.3492 20 26.3492Z" fill="white" />
                                    <path d="M38.8832 12.1673C38.7424 5.50045 34.5008 1.25645 27.8324 1.11685C26.2312 0.962452 13.7696 0.959652 12.1672 1.11685C5.50039 1.25765 1.25639 5.49925 1.11679 12.1677C0.962389 13.7665 0.959189 26.2321 1.11679 27.8329C1.24119 34.4781 5.52119 38.7593 12.1672 38.8833C13.7684 39.0393 26.23 39.0393 27.8324 38.8833C29.8544 38.7909 31.2356 38.4697 32.444 38.0001C36.6788 36.3085 38.748 32.5457 38.8832 27.8325C39.0376 26.2313 39.0404 13.7697 38.8832 12.1673ZM27.6764 35.4637C26.1008 35.6141 13.9 35.6165 12.3232 35.4637C10.4712 35.3793 9.46519 35.0697 8.79559 34.8097C3.01599 32.1289 4.80799 26.7077 4.53559 19.2665C4.54159 17.5381 4.53199 14.0521 4.53599 12.3237C4.76679 7.17085 7.19359 4.78525 12.3232 4.53645C13.9008 4.38605 26.0984 4.38365 27.6764 4.53645C32.8308 4.76725 35.214 7.19405 35.4636 12.3233C35.5656 13.5549 35.6396 20.2781 35.4636 23.6805C35.6536 30.0709 35.3624 35.0889 27.6764 35.4637Z" fill="white" />
                                </svg>
                            </div>
                            <div className="h-[52px] w-[52px] border border-white flex justify-center items-center rounded-[10px] ">
                                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.9332 40C17.6132 40 20.5998 37.0133 20.5998 33.3333V26.6666H13.9332C10.2532 26.6666 7.26651 29.6533 7.26651 33.3333C7.26651 37.0133 10.2532 40 13.9332 40Z" fill="white" />
                                    <path d="M7.26651 19.9999C7.26651 16.3199 10.2532 13.3333 13.9332 13.3333H20.5998V26.6666H13.9332C10.2532 26.6666 7.26651 23.6799 7.26651 19.9999Z" fill="white" />
                                    <path d="M7.26651 6.66667C7.26651 2.98667 10.2532 0 13.9332 0H20.5998V13.3333H13.9332C10.2532 13.3333 7.26651 10.3467 7.26651 6.66667Z" fill="white" />
                                    <path d="M20.5999 0H27.2665C30.9465 0 33.9332 2.98667 33.9332 6.66667C33.9332 10.3467 30.9465 13.3333 27.2665 13.3333H20.5999V0Z" fill="white" />
                                    <path d="M33.9332 19.9999C33.9332 23.6799 30.9465 26.6666 27.2665 26.6666C23.5865 26.6666 20.5999 23.6799 20.5999 19.9999C20.5999 16.3199 23.5865 13.3333 27.2665 13.3333C30.9465 13.3333 33.9332 16.3199 33.9332 19.9999Z" fill="white" />
                                </svg>
                            </div>
                            <div className="h-[52px] w-[52px] border border-white flex justify-center items-center rounded-[10px] ">
                                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M36.3916 1.00523C30.5472 0.988827 8.99081 1.01643 4.00841 1.00523C2.45801 1.00523 1.20001 2.22483 1.20001 3.72683V36.2792C1.20001 37.7816 2.45801 39 4.00841 39H36.3916C37.9428 39 39.2 37.7816 39.2 36.2788V3.72683C39.2 2.22483 37.9428 1.00523 36.3916 1.00523Z" fill="white" />
                                    <path d="M21.5812 32.802C21.5812 32.802 21.5812 23.2508 21.5812 23.2504C21.5256 21.4952 22.5748 19.8572 24.686 19.7836C26.7432 19.7836 27.5664 21.352 27.5664 23.6516V32.8016H33.252V22.994C33.252 17.74 30.4472 15.2952 26.706 15.2952C23.6388 15.2952 22.2916 17.0092 21.5432 18.1768L21.5812 15.6968H15.8956C15.9696 17.3016 15.8952 32.802 15.8952 32.802H21.5812ZM12.748 25.3844V15.6964H7.06159V32.8016H12.7484C12.7472 31.0056 12.7504 27.1552 12.748 25.3844ZM9.90599 13.3616C11.8884 13.3616 13.1228 12.048 13.1228 10.4068C13.1064 6.44797 6.72119 6.49197 6.72639 10.4064C6.72199 12.0604 7.99039 13.382 9.90599 13.3616Z" fill="black" />
                                </svg>
                            </div>
                            <div className="h-[52px] w-[52px] border border-white flex justify-center items-center rounded-[10px] ">
                                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.3684 8.44876C38.0016 9.05596 36.5332 9.46436 34.992 9.64876C36.566 8.70596 37.7728 7.21356 38.3412 5.43396C36.87 6.30676 35.2392 6.94076 33.502 7.28356C32.1124 5.80236 30.1328 4.87676 27.9416 4.87676C23.0984 4.81196 19.3748 9.54356 20.5208 14.2308C14.1892 13.9136 8.57599 10.88 4.81679 6.26916C2.76519 9.61476 3.92999 14.3992 7.17519 16.4416C5.92679 16.4016 4.75119 16.0588 3.72439 15.4888C3.67679 19.2108 6.31719 22.3532 9.83599 23.0544C8.75479 23.356 7.50919 23.4032 6.39519 23.1856C7.36519 26.212 10.1788 28.416 13.5124 28.4772C10.4984 30.8856 6.27879 32.1412 2.23199 31.6324C18.5048 41.6472 36.494 28.5264 35.5652 12.392C37.0544 11.3168 38.3472 9.97556 39.3684 8.44876Z" fill="white" />
                                </svg>
                            </div>
                            <div className="h-[52px] w-[52px] border border-white flex justify-center items-center rounded-[10px] ">
                                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.3906 3.33337C17.0942 3.33337 13.8719 4.31086 11.131 6.14221C8.39023 7.97357 6.25402 10.5765 4.99256 13.622C3.7311 16.6674 3.40104 20.0185 4.04413 23.2515C4.68722 26.4846 6.27456 29.4543 8.60544 31.7852C10.9363 34.116 13.906 35.7034 17.139 36.3465C20.3721 36.9896 23.7232 36.6595 26.7686 35.398C29.814 34.1366 32.417 32.0004 34.2484 29.2595C36.0797 26.5187 37.0572 23.2964 37.0572 20C37.0574 17.8113 36.6264 15.6439 35.7889 13.6218C34.9514 11.5996 33.7237 9.7622 32.1761 8.21452C30.6284 6.66684 28.791 5.43919 26.7688 4.60168C24.7466 3.76416 22.5793 3.33319 20.3906 3.33337ZM25.6897 28.5875C25.6273 28.743 25.5324 28.8835 25.4113 28.9993C25.2903 29.1152 25.1458 29.2038 24.9877 29.2593C24.8295 29.3148 24.6613 29.3358 24.4944 29.321C24.3275 29.3062 24.1656 29.2558 24.0197 29.1733L19.4953 25.6577L16.5914 28.3367C16.524 28.3865 16.4452 28.4185 16.3622 28.4299C16.2792 28.4412 16.1947 28.4315 16.1164 28.4016L16.6731 23.4208L16.6909 23.435L16.7023 23.3366C16.7023 23.3366 24.844 15.9241 25.1756 15.6083C25.5114 15.2933 25.4006 15.225 25.4006 15.225C25.4197 14.8408 24.7981 15.225 24.7981 15.225L14.0106 22.165L9.51807 20.635C9.51807 20.635 8.82807 20.3875 8.76307 19.8434C8.69473 19.3034 9.54055 19.01 9.54055 19.01L27.4022 11.9142C27.4022 11.9142 28.8706 11.26 28.8706 12.3434L25.6897 28.5875Z" fill="white" />
                                </svg>
                            </div>
                            <div className="h-[52px] w-[52px] border border-white flex justify-center items-center rounded-[10px] ">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1069_98)">
                                        <path d="M21.25 20C21.25 25.8586 16.7641 30.625 11.25 30.625C5.73594 30.625 1.25 25.8586 1.25 20C1.25 14.1414 5.73594 9.375 11.25 9.375C16.7641 9.375 21.25 14.1414 21.25 20ZM28.75 10C27.8621 10 26.1876 10.4314 24.9494 13.3205C24.1759 15.1251 23.75 17.4974 23.75 20C23.75 22.5026 24.1759 24.8749 24.9494 26.6795C26.1876 29.5686 27.8621 30 28.75 30C29.6379 30 31.3124 29.5686 32.5506 26.6795C33.3241 24.8749 33.75 22.5026 33.75 20C33.75 17.4974 33.3241 15.1251 32.5506 13.3205C31.3124 10.4314 29.6379 10 28.75 10ZM37.5 10C37.1685 10 36.8506 10.1317 36.6161 10.3661C36.3817 10.6006 36.25 10.9185 36.25 11.25V28.75C36.25 29.0815 36.3817 29.3995 36.6161 29.6339C36.8505 29.8683 37.1685 30 37.5 30C37.8315 30 38.1495 29.8683 38.3839 29.6339C38.6183 29.3995 38.75 29.0815 38.75 28.75V11.25C38.75 10.9185 38.6183 10.6006 38.3839 10.3661C38.1494 10.1317 37.8315 10 37.5 10Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1069_98">
                                            <rect width="40" height="40" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        <Button
                            className="w-full flex justify-center items-center gap-2 h-[52px]"
                            bgColor="bg-[#292929]"
                            textColor="text-white"
                        >
                            Download Curriculum Vitae
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-1"
                            >
                                <path
                                    d="M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66669 5.39759 1.66669 9.99996C1.66669 14.6023 5.39765 18.3333 10 18.3333Z"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10 7.08337V12.0834"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M7.5 10.4166L10 12.9166L12.5 10.4166"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </Button>
                    </div>
                </div>
 
                <img
                    src={img}
                    alt="Cristian Munoz"
                    className="w-full h-[610px] rounded-[10px] hidden lg:block"
                />
              
            </div>

            <div className=" w-full h-auto  mx-auto    ">
                <div className="flex flex-col sm:flex-row gap-10 justify-evenly items-center border rounded-[29px] sm:mx-0 mx-4 border-[#646464] py-[82px]">
                    <div className="flex flex-col text-[#C8FEC7]  items-center justify-center gap-[21px]">
                        <p className="text-[3.5rem] text-center  font-bold leading-[3.5rem]   ">
                            90%
                        </p>
                        <p className="text-center lg:text-start">
                            Job Success Score <br/>on Upwork
                        </p>
                    </div>

                    <svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden lg:block">
                        <path d="M40 0.5L40.0077 40.4606L55.3074 3.54481L40.0223 40.4668L68.2842 12.2157L40.0332 40.4777L76.9552 25.1926L40.0394 40.4923L80 40.5L40.0394 40.5077L76.9552 55.8074L40.0332 40.5223L68.2842 68.7842L40.0223 40.5332L55.3074 77.4552L40.0077 40.5394L40 80.5L39.9923 40.5394L24.6926 77.4552L39.9777 40.5332L11.7157 68.7842L39.9668 40.5223L3.04481 55.8074L39.9606 40.5077L0 40.5L39.9606 40.4923L3.04481 25.1926L39.9668 40.4777L11.7157 12.2157L39.9777 40.4668L24.6926 3.54481L39.9923 40.4606L40 0.5Z" fill="#C8FEC7" stroke="#C8FEC7" stroke-width="4" />
                    </svg>

                     <div className="flex flex-col text-[#C8FEC7]   gap-[21px]">
                        <p className="text-[3.5rem] text-center  font-bold leading-[3.5rem]  ">
                            &gt;25.000
                        </p>
                        <p className="text-center lg:text-start">
                            Duplicates on Figma <br/> Community
                        </p>
                    </div>

                    <svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden lg:block">
                        <path d="M40 0.5L40.0077 40.4606L55.3074 3.54481L40.0223 40.4668L68.2842 12.2157L40.0332 40.4777L76.9552 25.1926L40.0394 40.4923L80 40.5L40.0394 40.5077L76.9552 55.8074L40.0332 40.5223L68.2842 68.7842L40.0223 40.5332L55.3074 77.4552L40.0077 40.5394L40 80.5L39.9923 40.5394L24.6926 77.4552L39.9777 40.5332L11.7157 68.7842L39.9668 40.5223L3.04481 55.8074L39.9606 40.5077L0 40.5L39.9606 40.4923L3.04481 25.1926L39.9668 40.4777L11.7157 12.2157L39.9777 40.4668L24.6926 3.54481L39.9923 40.4606L40 0.5Z" fill="#C8FEC7" stroke="#C8FEC7" stroke-width="4" />
                    </svg>


                    <div className="flex flex-col  text-[#C8FEC7] gap-[21px]">
                        <p className="text-[3.5rem] text-center  font-bold leading-[3.5rem]  ">
                            &gt;2K
                        </p>
                        <p className="text-center lg:text-start">
                            In Finished <br/>Works
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col px-4 sm:px-0  ">
            <p className="h-[52px] text-[2.5rem] gap-x-2 text-white  font-Poppins  ">
             PORTFOLIO
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 justify-between    lg:gap-4 sm:gap-9 ">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />                 
            </div>
            </div>

            <div className="flex flex-col  ">
            <p className="h-[52px] text-[2.5rem] text-white  font-Poppins leading-[3.5rem]">
             SKILLS
            </p>

            <div className="grid  lg:grid-cols-2 gap-[20px] mb-[20px] ">
                <SkillsCard
                children="UX Design"
                text = "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users."
                />
                <SkillsCard
                children="UI Design"
                text = "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users."
                />
            </div>

            <div className="grid lg:grid-cols-2 gap-[20px] ">
                <SkillsCard
                children="UX Design"
                text = "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users."
                />
                <SkillsCard
                children="UX Design"
                text = "UI design is the process of designing the visual and interactive elements of a user interface, such as buttons, icons, and layout, to create an intuitive and pleasing experience for users."
                />
            </div>
            </div>
        </div>
    );
}

export default Home;
