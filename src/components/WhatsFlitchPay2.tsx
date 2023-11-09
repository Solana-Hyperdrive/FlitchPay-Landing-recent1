import { Button } from "@/components/ui/button";
import { FeaturesStar } from "@/public/svgs/FeaturesStar";
import Link from "next/link";
import React from "react";
import inboundRelay from "@/public/images/inbound-relay.png";
import Image from "next/image";
import { Book } from "@/public/svgs/Book";
import { Rocket } from "@/public/svgs/Rocket";
import { InboundRelay } from "@/public/svgs/InboundRelay";
import { Send } from "@/public/svgs/Send";
import { Terminal } from "@/public/svgs/Terminal";
import { useActivePage } from "../app/_context";

export function WhatsFlitchPay2() {
  const { activePage } = useActivePage();
  if (activePage == "Personal") {
    return;
  }
  return (
    <>
    <section className="relative flex items-center bg-white md:my-20 my-10  py-12 text-black md:py-24 lg:pt-32 ">
        <div
          style={{
            position: "absolute",
            top: "-10px",
            left: "0",
            width: "100%",
            height: "40px",
            backdropFilter: "blur(5px)",
          }}
        ></div>
        <div className="container mx-auto flex flex-col items-center gap-16 md:gap-28 md:px-48 ">
          <HeadComponent />
          <div className="w-full">
            <div className="flex items-center justify-between text-xs">
              <div className="text-base font-semibold md:text-xl">
                Inbound Payments
              </div>
              <div>
                <Link
                  href="/"
                  className="items-center rounded-full bg-violet-600 px-4 py-2  text-[0.6rem] text-white backdrop-filter-none hover:bg-violet-700 md:text-base "
                >
                  Create Inbound Payments
                </Link>
              </div>
            </div>
            <div
              className="mt-4 flex flex-wrap justify-between overflow-hidden rounded-[4rem] md:mt-14 md:flex-nowrap"
              style={{ border: "1px solid hsla(234, 49%, 92%, 1)" }}
            >
              {/* card1 */}
              <div
                className="flex flex-col gap-4 p-6 pt-8 md:w-1/2 md:p-9"
                style={{ border: "1px solid hsla(234, 49%, 92%, 1)" }}
              >
                <div className="text-lg font-medium">
                  Encrypt or Redact your Data
                </div>
                <div
                  className="text-sm "
                  style={{ color: "hsla(236, 16%, 20%, 1)" }}
                >
                  Inbound Relay is a proxy that intercepts and encrypts or
                  redacts selected fields in an HTTPS request before forwarding
                  the request to its original destination.
                </div>
                <div
                  className="flex flex-wrap gap-4 rounded-[2rem] p-6 md:flex-nowrap"
                  style={{ border: "1px solid hsla(234, 49%, 92%, 1)" }}
                >
                  <div className="text-[0.84rem] md:mt-8 md:w-1/2">
                    <p style={{ color: "hsla(236, 16%, 20%, 1)" }}>
                      Create an Inbound Relay with an onboarding tutorial.
                    </p>
                    <div className="mt-2">
                      <Link
                        href="/"
                        className="items-center rounded-full bg-violet-600 px-2.5 py-1.5 text-[0.775rem]  text-white hover:bg-violet-700"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                  <Image className="md:w-1/2" src={inboundRelay} alt="" />
                </div>
                <div className="flex flex-wrap gap-2 md:flex-nowrap md:gap-4">
                  <Link
                    href="/"
                    className="flex w-full items-center justify-between rounded-full px-2.5 py-0.5 text-[0.7rem] hover:bg-gray-200 md:w-1/2 md:text-[0.775rem]"
                    style={{ border: "1px solid hsla(234, 49%, 92%, 1)" }}
                  >
                    <div className="flex items-center gap-2 ">
                      <span>
                        <Book />
                      </span>
                      Get Started
                    </div>
                    <div
                      className="font-semibold"
                      style={{ color: "hsla(236, 16%, 20%, 1)" }}
                    >
                      {">"}
                    </div>
                  </Link>
                  <Link
                    href="/"
                    className="flex w-full items-center justify-between rounded-full px-2.5 py-0.5 text-[0.7rem] hover:bg-gray-200 md:w-1/2 md:text-[0.775rem]"
                    style={{ border: "1px solid hsla(234, 49%, 92%, 1)" }}
                  >
                    <div className="flex items-center gap-2 ">
                      <span>
                        <Rocket />
                      </span>
                      Follow a Quickstart
                    </div>
                    <div
                      className="font-semibold"
                      style={{ color: "hsla(236, 16%, 20%, 1)" }}
                    >
                      {">"}
                    </div>
                  </Link>
                </div>
              </div>
              {/* card2 */}
              <div
                className="flex w-full flex-col flex-wrap items-center justify-between gap-4 p-6 text-xs md:w-1/2 md:flex-row md:flex-nowrap md:p-10"
                style={{
                  border: "1px solid hsla(234, 49%, 92%, 1)",
                  backgroundColor: "hsla(234, 49%, 92%, 1)",
                }}
              >
                {/* card1 */}
                <div className=" flex flex-wrap items-center md:flex-nowrap">
                  <div className=" flex-wrap items-center rounded-xl bg-white leading-none md:flex ">
                    <div className="flex items-center">
                      <div
                        className="p-1.5"
                        style={{
                          borderRight: "2px solid hsla(234, 49%, 92%, 1)",
                        }}
                      >
                        <Send />
                      </div>
                      <div className="p-1.5">Client</div>
                    </div>

                    <div
                      className="p-1.5 text-xs"
                      style={{ borderTop: "2px solid hsla(234, 49%, 92%, 1)" }}
                    >
                      &nbsp;{'"name":"Claude"'}&nbsp;
                    </div>
                  </div>
                </div>
                <div className="rotate-90 md:rotate-0">{">"}</div>
                {/* card2 */}
                <div>
                  <div className=" flex-wrap items-center rounded-xl bg-white leading-none md:flex">
                    <div className="flex items-center">
                      <div
                        className="p-2"
                        style={{
                          borderRight: "2px solid hsla(234, 49%, 92%, 1)",
                        }}
                      >
                        <InboundRelay />
                      </div>
                      <div className="p-2">Inbound Relay</div>
                    </div>
                  </div>
                </div>
                <div className="rotate-90 md:rotate-0 ">{">"}</div>
                {/* card3 */}
                <div>
                  <div className=" flex-wrap items-center rounded-xl bg-white leading-none md:flex ">
                    <div className="flex items-center">
                      <div
                        className="p-1.5"
                        style={{
                          borderRight: "2px solid hsla(234, 49%, 92%, 1)",
                        }}
                      >
                        <Terminal />
                      </div>
                      <div className="p-1.5">Server</div>
                    </div>

                    <div
                      className="p-1.5 text-xs"
                      style={{ borderTop: "2px solid hsla(234, 49%, 92%, 1)" }}
                    >
                      {'"name":"ev:Tk9D"'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "-10px",
            left: "0",
            width: "100%",
            height: "40px",
            backdropFilter: "blur(5px)",
          }}
        ></div>
      </section>
    </>
  );
}

function HeadComponent() {
  return (
    <div className="mt-1 flex flex-col gap-3 px-4 text-center sm:px-0">
      <a
        className="mx-auto rounded-full bg-gradient-to-r from-[#161FF2] to-[#F00] p-[1px] brightness-90 contrast-150 focus:outline-none focus:ring-blue-600 focus-visible:ring-2 dark:brightness-125 dark:contrast-100 "
        href="#features"
      >
        <div className="flex items-center rounded-full bg-white/60 px-3 py-1">
          <div className="-mb-1">
            <FeaturesStar />
          </div>
          <span className="bg-gradient-to-r from-[#161FF2] to-[#F00] bg-clip-text text-transparent">
            many features, wow{" "}
          </span>
        </div>
      </a>
      <h1 className="text-3xl font-bold md:text-4xl">
        {"What's"} in FlitchPay
      </h1>
      <p className="" style={{ color: "hsla(0, 0%, 10%, 0.5)" }}>
        All you need to become a TypeScript menace
      </p>
    </div>
  );
}
