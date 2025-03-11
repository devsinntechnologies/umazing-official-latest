"use client";
import React, { useEffect, useState } from "react";

type ReusableComponentProps = {
  heading?: string;
  para?: string;
};

const Banner: React.FC<ReusableComponentProps> = ({ heading, para }) => {
  return (
    <div className="size-full flex justify-center items-center content-center bg-[#F7F8F2] z-10 md:h-[380px] h-[300px]">
      <div className="w-full h-full flex flex-col gap-3 justify-center items-center ">
        {heading && (
          <div className="text-center lg:text-7xl md:text-6xl text-5xl font-extrabold tracking-normal text-primary">
            {heading}
          </div>
        )}
        {para && <p className="text-center text-[#6B7280] md:w-[80%] w-[90%] lg:w-[50%] md:text-xl text-base  tracking-wide">{para}</p>}
      </div>
    </div>
  );
};

export default Banner;
