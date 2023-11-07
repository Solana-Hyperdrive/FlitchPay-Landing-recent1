import React from "react";
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
import { FlitchPayFinal } from "../components/FlitchPayFinal";

export default function LandingPage() {
  return (
    <>
      <LandingHero />
      <GradientPlatform />
      {/* {!isMobile ? <Timeline /> : null} */}
      <OrgTestimonials />
      <WhatsFlitchPay />
      <FlitchPayFinal/>
      {/* <Authlite />
      <Showcase />
      <Customize /> */}
    </>
  );
}
