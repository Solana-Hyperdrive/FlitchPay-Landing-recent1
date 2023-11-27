"use client"
import React, { useContext } from "react";
import Footer from "../components/Footer";
import Showcase from "../components/Showcase";
import Authlite from "../components/Authlite";
import GradientPlatform from "../components/GradientPlatform";
import LandingHero from "../components/LandingHero";
import AiInCLI from "../components/AiInCLI";
import Navbar from "../components/Navbar";
import Timeline from "../components/Timeline";
import Customize from "../components/Customize";
import { useMediaQuery } from "@mantine/hooks";
import { OrgTestimonials } from "../components/OrgTestimonials";
import { WhatsFlitchPay } from "../components/WhatsFlitchPay";
import { WhatsFlitchPay2 } from "../components/WhatsFlitchPay2";

import { FlitchPayFinal } from "../components/FlitchPayFinal";
import { useActivePage } from "./_context";

export default function LandingPage() {
  return (
    <>
    <div className="relative h-screen w-full bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      {/* <div className="absolute left-20 top-[-5%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_500px_at_50%_300px,#fbfbfb36,#000)]" /> */}
      <LandingHero />
      <GradientPlatform />
      <Showcase />
      <OrgTestimonials />
      <WhatsFlitchPay />
      <WhatsFlitchPay2 />
      <FlitchPayFinal />
      </div>
    </>
  );
}
