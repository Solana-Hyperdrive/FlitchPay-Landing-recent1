import { AmericanAirlines } from "@/public/svgs/AmericanAirlines";
import { Apple } from "@/public/svgs/Apple";
import { Bosch } from "@/public/svgs/Bosch";
import { Decathlon } from "@/public/svgs/Decathlon";
import { Deloitte } from "@/public/svgs/Deloitte";
import { EY } from "@/public/svgs/EY";
import { GM } from "@/public/svgs/GM";
import { IBM } from "@/public/svgs/IBM";
import { Intel } from "@/public/svgs/Intel";
import { Nestle } from "@/public/svgs/Nestle";
import { Oracle } from "@/public/svgs/Oracle";
import { Tiktok2 } from "@/public/svgs/Tiktok2";
import React from "react";
import { useActivePage } from "../app/_context";

export function OrgTestimonials() {
  const {activePage} = useActivePage();
  if(activePage=="Personal"){
    return;
  }
  return (
    <section className="flex items-center bg-background  md:py-20 ">
      <div className="container mx-auto flex flex-col items-center gap-8 md:gap-20 md:px-36 ">
        <div className="md:w-[34.0925rem] text-2xl text-center md:text-3xl">
          Trusted by developers from the {"world's"} leading organizations
        </div>
        <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-6 md:gap-16 px-4">
          <Apple></Apple>
          <Oracle></Oracle>
          <Tiktok2></Tiktok2>
          <Intel></Intel>
          <IBM></IBM>
          <AmericanAirlines></AmericanAirlines>
          <Deloitte></Deloitte>
          <GM></GM>
          <EY></EY>
          <Nestle></Nestle>
          <Bosch></Bosch>
          <Decathlon></Decathlon>
        </div>
      </div>
    </section>
  );
}
