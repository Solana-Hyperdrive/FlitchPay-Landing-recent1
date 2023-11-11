"use client";
import Image, { StaticImageData } from "next/image";

import Link from "next/link";
import {
  MotionStyle,
  MotionValue,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import React, {
  CSSProperties,
  PropsWithChildren,
  useState,
  MouseEvent,
  useEffect,
} from "react";
import discussion from "@/public/images/discussions.png";
import pullRequests from "@/public/images/pull-requests.png";
import laptop from "@/public/images/FlitchPayLaptop.webp";
import mobile from "@/public/images/FlitchPayMobile.webp";
import { useMediaQuery } from "@mantine/hooks";
import clsx from "clsx";

type WrapperStyle = MotionStyle & {
  "--x": MotionValue<string>;
  "--y": MotionValue<string>;
};
interface CardProps {
  bgClass?: string;
  cardWidth: string;
}

function FeatureCard({
  bgClass,
  cardWidth,
  children,
}: CardProps & {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const isMobile = useMediaQuery("768px");

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    if (isMobile) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      className={clsx(
        cardWidth,
        "animated-feature-cards relative drop-shadow-[0_0_15px_rgba(49,49,49,0.2)] dark:drop-shadow-[0_0_15px_rgba(49,49,49,0.2)]",
      )}
      onMouseMove={handleMouseMove}
      style={
        {
          "--x": useMotionTemplate`${mouseX}px`,
          "--y": useMotionTemplate`${mouseY}px`,
        } as WrapperStyle
      }
    >
      <div
        className={clsx(
          "group relative w-full overflow-hidden rounded-3xl border bg-gradient-to-b from-neutral-50/90 to-neutral-100/90 transition duration-300 dark:from-neutral-950/90 dark:to-neutral-800/90",
          "md:hover:border-transparent",
          bgClass,
        )}
      >
        <div className="w-full ">{mounted ? children : null}</div>
      </div>
    </motion.div>
  );
}

export function Card1() {
  return (
    <FeatureCard cardWidth="md:w-1/2" bgClass="md:bg-gradient-to-br">
      <div className="flex  flex-col gap-12">
        <div className="ml-10 mt-10 flex w-5/6 flex-col gap-8 sm:w-4/6 md:w-4/5 xl:w-4/6">
          <h2 className="text-xl font-bold tracking-tight md:text-xl">
            Sophisticated Checkoutsl{" "}
            <span className="font-normal text-zinc-400">
              create space to ask questions and have open-ended conversations.
            </span>
          </h2>
          <Link href={""}>
            <div className="flex text-base font-bold transition-colors hover:text-muted-foreground">
              Enable GitHub Discussion {"->"}
              {/* Right Arrow */}
              <span className="sr-only">Enable GitHub Discussion</span>
            </div>
          </Link>
        </div>
        <div>
          <Image src={discussion} alt="App" className="" />
        </div>
      </div>
    </FeatureCard>
  );
}

export function Card2() {
  return (
    <FeatureCard cardWidth="md:w-1/2" bgClass="md:bg-gradient-to-bl">
      <div className="flex flex-col gap-6">
        <div className="ml-10 mt-10 flex w-5/6 flex-col gap-8 sm:w-4/6 md:w-4/5 xl:w-4/6">
          <h2 className="text-xl font-bold tracking-tight md:text-xl">
            On Make products & Sell{" "}
            <span className="font-normal text-zinc-400">
              allow communication and collaboration about code changes.
            </span>
          </h2>
          <Link href={""}>
            <div className="flex text-base font-bold transition-colors hover:text-muted-foreground">
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
    </FeatureCard>
  );
}
export function Card3() {
  return (
    <FeatureCard cardWidth="md:w-full" bgClass="md:bg-gradient-to-b ">
      <div className="flex w-full  flex-wrap md:flex-nowrap">
        <div className="ml-10 mt-10 flex flex-col gap-8  md:w-5/12">
          <h2 className="text-xl font-bold tracking-tight md:text-xl">
            On premise Messaging & Real-time Payments{" "}
            <span className="font-normal text-zinc-400">
              lets you support your favorite open source maintainers and
              projects.
            </span>
          </h2>
          <Link href={""}>
            <div className="flex text-base font-bold transition-colors hover:text-muted-foreground">
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
    </FeatureCard>
  );
}
