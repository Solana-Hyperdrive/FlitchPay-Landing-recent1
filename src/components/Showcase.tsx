"use client";

import React from "react";
import { AccountDropdown } from "./Dropdown";
import {
  ShowcaseCard,
  StartWithAiSparkles,
  PercentageSVGFirst,
  PercentageSVGSecond,
  TableItem,
  RedirectButton,
  ShowcaseSocialConnectionCard,
} from "./showcase/Components";
import CodeTabs from "./showcase/CodeTabs";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import { useActivePage } from "../app/_context";

function Showcase() {
  const { activePage } = useActivePage();
  if (activePage == "Business") {
    return;
  }
  return (
    <div className="flex flex-col  items-center justify-center p-6 sm:p-12">
      <div className="space-between flex max-w-[1110px] flex-col items-center gap-12 lg:flex-row xl:gap-48">
        <div className="flex flex-col gap-6">
          <p className="text-3xl md:text-5xl ">
            Powerful.Simple. And Sooo... Easy to Setup
          </p>

          <p className="text-xl text-[#777] md:text-[26px]">
            We made building Auth for sites easy, fast and Scalable while
            delivering best-in-class Security & performance
          </p>
        </div>

        <p className="block  text-7xl leading-none md:text-[128px] lg:hidden">
          👋🏻
        </p>

        <p className="hidden text-[128px] leading-none lg:block">
          <span className="ml-4">👋🏻</span>{" "}
        </p>
      </div>

      <div className="mt-20 flex w-full max-w-screen-xl flex-col gap-6">
        <ShowcaseCard
          title={
            <p className="flex gap-1 text-2xl font-semibold text-white">
              Start with AI
              <StartWithAiSparkles />
            </p>
          }
          description={
            <div className="text-white">
              Generate a beautiful images for site,
              <br />
              set static or use as carousel.
            </div>
          }
          className="showcase-1  w-full"
        >
          <div className="relative  mt-10 flex h-[300px] w-full items-center justify-center bg-transparent ">
            <Image
              src="/showcase/1.png"
              alt=""
              width={1000}
              height={1000}
              className="absolute  bottom-0 bg-cover"
            />

            <div className="z-10 mx-auto flex flex-col items-center justify-center rounded-2xl bg-white p-5 px-8">
              <button
                className="showcase-1-btn mx-auto flex w-[125px] items-center
              justify-center gap-2 rounded-md py-2 pl-3 font-semibold text-white
              "
              >
                <StartWithAiSparkles />
                Generate
              </button>
              <div className="my-4 h-[1px] w-full bg-[#eee]" />

              <p>
                {" "}
                <strong>
                  Pile of white rubik cubes in a red room, in anderson style.
                </strong>
              </p>
            </div>
          </div>
        </ShowcaseCard>

        <div className="grid auto-rows-[1fr] grid-cols-10    gap-6 lg:grid-rows-1">
          <ShowcaseCard
            title={
              <div className="text-2xl font-semibold ">
                Layout, Color & Social
              </div>
            }
            description={
              <div className="text-[#222]">
                Select form a range of customizations <br /> on Trustauthx
                server all kinds of
                <br />
                specialized requirements .
              </div>
            }
            className="  showcase-2 col-span-full w-full lg:col-span-6  "
          >
            <div className=" my-8 text-center text-6xl font-normal  text-neutral-800">
              Ship Fast with Style
            </div>

            <div className="relative hidden   h-[205px] w-full items-center justify-center bg-transparent sm:flex ">
              <img
                src="/showcase/2.png"
                alt=""
                className="absolute  bottom-0 left-0  w-full bg-cover"
              />
            </div>
          </ShowcaseCard>

          <ShowcaseCard
            title={
              <div className="  text-3xl font-normal  tracking-wide text-black">
                Overall{" "}
                <span className="text-3xl font-bold  tracking-wide text-white underline underline-offset-[6px]">
                  Cost{" "}
                </span>
                Reduction :
              </div>
            }
            description={
              <div className="text-white">
                Our Auth-Lite is built in such a way to
                <br />
                reduce overall cost minimum by 50% .
              </div>
            }
            className="showcase-3    col-span-full lg:col-span-4  "
          >
            <div className="showcase-3-width relative -mx-10    flex h-[340px] w-full items-center justify-center bg-transparent ">
              <PercentageSVGFirst> 65%</PercentageSVGFirst>

              <PercentageSVGSecond className="absolute -right-20 top-1/2 -translate-y-[52%]">
                {" "}
                28%
              </PercentageSVGSecond>

              <PercentageSVGSecond className="absolute -left-20 top-1/2 -translate-y-1/2">
                {" "}
                33%
              </PercentageSVGSecond>
            </div>
          </ShowcaseCard>
        </div>

        <div className="grid auto-rows-[1fr] grid-cols-10    gap-6 lg:grid-rows-1">
          <ShowcaseCard
            white
            title={
              <div className=" text-2xl font-normal leading-7 text-white">
                White-Labeled, Everything{" "}
              </div>
            }
            description={
              <div className=" w-64 text-base font-normal leading-snug text-white">
                Option to use your personal resources from email-servers to
                private-hosting
              </div>
            }
            className="showcase-4    col-span-full lg:col-span-4  "
          >
            <div
              className="showcase-3-width relative mx-4 flex h-[340px] 
             flex-col bg-transparent py-1 "
            >
              <div className="flex gap-16  text-[82px] text-white">
                <p>Custom</p>
                <p className="underline underline-offset-[12px]">Depl</p>
              </div>

              <img
                src="/showcase/4.png"
                alt=""
                className="absolute -left-10 bottom-0 bg-cover"
              />
              <img
                src="/showcase/4-2.png"
                alt=""
                className="absolute bottom-0 right-20 bg-cover"
              />
            </div>
          </ShowcaseCard>
          <ShowcaseCard
            white
            title={
              <div className=" text-2xl font-normal leading-7 text-white">
                From Manage User to User Management, <br />
                Everything done Right.{" "}
              </div>
            }
            description={
              <div className="  w-100 text-base font-normal leading-snug text-white">
                We make sure your site looks great & Works great
              </div>
            }
            className="  showcase-9 col-span-full w-full lg:col-span-6  "
          >
            <div className=" absolute left-1/2 z-10 -translate-x-1/2 scale-90 sm:right-1/3">
              <AccountDropdown />
            </div>

            <div
              className=" relative -mx-10   hidden   h-[325px] w-full items-center 
            justify-center bg-transparent sm:flex "
            >
              <img
                src="/showcase/9.svg"
                alt=""
                className="absolute -bottom-8   left-0   w-full max-w-[95%] bg-cover"
              />
            </div>
          </ShowcaseCard>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
