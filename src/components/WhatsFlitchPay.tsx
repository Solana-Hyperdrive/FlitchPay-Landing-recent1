import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/lib/icons";
import { cn } from "@/lib/utils";
import { FeaturesStar } from "@/public/svgs/FeaturesStar";
import { VectorRight } from "@/public/svgs/VectorRight";
import Link from "next/link";
import discussion from "@/public/images/discussions.png";
import pullRequests from "@/public/images/pull-requests.png";
import laptop from "@/public/images/FlitchPayLaptop.webp";
import mobile from "@/public/images/FlitchPayMobile.webp";
import React from "react";
import Image from "next/image";

export function WhatsFlitchPay() {
  return (
    <section className="flex items-center bg-background py-14 md:py-24 lg:pt-32 ">
      <div className="container mx-auto flex flex-col items-center gap-4 md:px-48 ">
        <HeadComponent />
        <div className="mt-14 flex flex-wrap gap-4 md:flex-nowrap md:text-lg">
          {/* card1 */}
          <div className="flex flex-col justify-between gap-8 rounded-md bg-secondary font-semibold md:w-1/2 ">
            <div className="flex flex-col justify-between gap-6  px-6 pt-6 md:px-14 md:pt-14">
              <div>
                Sophisticated Checkouts
                <span className="font-normal text-muted-foreground">
                  {" "}
                  create space to ask questions and have open-ended
                  conversations.
                </span>
              </div>
              <Link href={""}>
                <div className="flex text-base transition-colors hover:text-muted-foreground">
                  Enable GitHub Discussion {"->"}
                  {/* Right Arrow */}
                  <span className="sr-only">Enable Github Discussions</span>
                </div>
              </Link>
            </div>
            <div>
              <Image src={discussion} alt="App" className="" />
            </div>
          </div>
          {/* card2 */}
          <div className="flex flex-col gap-12 rounded-md bg-secondary font-semibold md:w-1/2 md:gap-16 ">
            <div className="flex flex-col justify-between gap-8  px-6 pt-6 md:px-14 md:pt-14">
              <div>
                On Make products & Sell
                <span className="font-normal text-muted-foreground">
                  {" "}
                  allow communication and collaboration about code changes.
                </span>
              </div>
              <Link href={""}>
                <div className="flex text-base transition-colors hover:text-muted-foreground">
                  Check out pull requests {"->"}
                  {/* Right Arrow */}
                  <span className="sr-only">Check out pull requests</span>
                </div>
              </Link>
            </div>
            <div>
              <Image src={pullRequests} alt="App" className="" />
            </div>
          </div>
        </div>
        {/* card3 */}
        <div className="flex w-full gap-12 rounded-md bg-secondary font-semibold md:gap-16 md:text-lg ">
          <div className="flex w-full flex-wrap md:flex-nowrap">
            <div className="pl-6 pt-6 md:w-5/12 md:pl-14 md:pt-14">
              On premise Messaging & Real-time Payments
              <span className="font-normal text-muted-foreground">
                {" "}
                lets you support your favorite open source maintainers and
                projects.
              </span>
              <Link href={""}>
                <div className="mt-6 flex text-base transition-colors hover:text-muted-foreground">
                  Invest with GitHub Sponsors {"->"}
                  {/* Right Arrow */}
                  <span className="sr-only">Invest with GitHub Sponsors</span>
                </div>
              </Link>
            </div>
            <div className="mt-8 flex overflow-hidden md:mt-0">
              <div className="-me-20 md:-me-52">
                <Image src={laptop} alt="laptop"></Image>
              </div>
              <div className="md:-me-14 ">
                <Image src={mobile} alt="mobile"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeadComponent() {
  return (
    <div className="mt-1 flex flex-col gap-3 px-4 text-center sm:px-0">
      <a
        className="mx-auto rounded-full bg-gradient-to-r from-[#5157E6] to-[#FFB800] p-[1px] brightness-90 contrast-150 focus:outline-none focus:ring-blue-600 focus-visible:ring-2 dark:brightness-125 dark:contrast-100 "
        href="#features"
      >
        <div className="flex items-center rounded-full bg-background/80 px-3 py-1">
          <div className="-mb-1">
            <FeaturesStar />
          </div>
          <span className="bg-gradient-to-r from-[#5157E6] to-[#FFB800] bg-clip-text text-transparent">
            many features, wow{" "}
          </span>
        </div>
      </a>
      <h1 className="text-3xl font-bold md:text-4xl">
        {"What's"} in FlitchPay
      </h1>
      <p className="text-muted-foreground">
        All you need to become a TypeScript menace
      </p>
    </div>
  );
}
