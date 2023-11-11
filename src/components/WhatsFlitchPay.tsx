import { FeaturesStar } from "@/public/svgs/FeaturesStar";
import { InView, useInView } from "react-intersection-observer";
import React, { CSSProperties } from "react";
import { Card1, Card2, Card3 } from "./FeaturesCards";
import clsx from "clsx";
import { useActivePage } from "../app/_context";

export function WhatsFlitchPay() {
  const { activePage } = useActivePage();
  type WrapperStyle = CSSProperties & {
    "--bottom": string;
  };

  const { ref } = useInView({});
  return (
    <>
      <section className="flex items-center bg-transparent pt-14 md:py-20 ">
        <div className="container mx-auto flex flex-col items-center gap-4 md:px-48 ">
          <HeadComponent />
          <div className="mt-14 flex flex-wrap gap-4 md:flex-nowrap md:text-lg">
            {/* card1 */}
            <Card1 />
            {/* card2 */}
            <Card2 />
          </div>
          {/* card3 */}
          <Card3 />
        </div>
      </section>
      <div className="lampcontainer  -z-10 flex rotate-180 opacity-50 dark:opacity-100">
        <div
          className={clsx(
            { "scale-[3] md:scale-[2] 2xl:scale-[1.55]": InView },
            "lamp translate-z-0 translate-y-[-180px] rotate-180 scale-50 animate-none duration-1000",
          )}
          ref={ref}
          style={
            {
              "--bottom": `${activePage == "Business" ? "#ff9500" : "#FFB800"}`,
            } as WrapperStyle
          }
        />
      </div>
    </>
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
