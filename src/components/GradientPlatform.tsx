"use client";

import ArrowIcon from "./ArrowIcon";
import AnimatedGradient from "./gradients/AnimatedGradient";
import React from "react";
import dashboard from "@/public/images/dashboard.png";
import { useMediaQuery } from "@mantine/hooks";
import MobileAppDemo from "../../public/images/MobileAppDemo.webp";
import AppDemo from "../../public/page3.png";
import Image from "next/image";

export default function GradientPlatform() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="w-full bg-background py-8 ">
      <div className="relative">
        <div className="flex items-center justify-center px-4">
          <div
            className="relative z-10 my-3 h-full  max-h-[738px] w-2/3 rounded-[2.1rem] border border-[#ffffff40] border-opacity-25 bg-transparent/10 bg-opacity-5 p-4 shadow-inner backdrop-blur-[24px] md:my-6 md:p-8"
            style={{
              boxShadow: "0px 0px 9.5px 1px #ffffff33 inset",
            }}
          >
            <div>
              {isMobile ? (
                <Image
                  src={MobileAppDemo}
                  alt="App Demo"
                  className="p-2 md:p-4"
                />
              ) : (
                <Image src={dashboard} alt="App Demo" className="" />
              )}
            </div>
          </div>
        </div>

        {!isMobile ? <AnimatedGradient /> : null}
      </div>
    </div>
  );
}
