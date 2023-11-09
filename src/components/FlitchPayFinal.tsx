/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import Final from "@/public/images/Final.png";
import Link from "next/link";

export function FlitchPayFinal() {
  return (
    <section className="flex md:pt-10 items-center">
      <div className="items-center md:mx-auto md:min-w-[768px] md:max-w-[1600px]">
        <div
          style={{
            background:
              "radial-gradient(70.32% 109% at 98.17% 55.75%, #401694 11.37%, #000 100%)",
          }}
          className="flex h-full overflow-hidden"
        >
          <div className="my-[1.44rem] ml-[1.75rem] w-[90%] rounded-xl border-2 border-gray-500 p-3 pb-6  md:h-[46rem]  xl:m-6  xl:w-[95%] ">
            <div className="ml-4 mt-4 md:ml-[5rem] md:mt-[4.75rem] md:w-[42.15545rem]">
              <div className="text-3xl font-bold leading-tight md:text-[2.75rem]">
                <span
                  className=""
                  style={{
                    background:
                      "linear-gradient(136deg, #9C74F1 52.45%, #3600A8 73.07%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  FlitchPay
                  <br />
                </span>{" "}
                Building the Future of{" "}
                <span
                  className=""
                  style={{
                    background:
                      "linear-gradient(136deg, #9C74F1 52.45%, #3600A8 73.07%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Decentralized <br className="md:hidden" />
                </span>{" "}
                Payments{" "}
              </div>
              <div className="mt-4 w-[17.8125rem] bg-gradient-to-r from-slate-400 via-white to-slate-100 bg-clip-text text-[1rem] text-gray-600 text-transparent xl:h-[4.062rem] xl:w-full xl:text-[1.3rem] xl:leading-8 xl:tracking-[0.04131rem]">
                {" "}
                Solana-run technology powering the cryptocurrency payments
                network Flitch-Pay and decentralized applications.
              </div>
              <Link
                href="/"
                className="mt-9 inline-flex shrink-0 items-center rounded-full border-2 border-violet-600 bg-black  fill-black px-4  py-2 text-white backdrop-filter-none hover:bg-violet-600 md:px-7 md:py-3 "
              >
                Get Started for Free &nbsp;{"->"}
              </Link>
            </div>
            <div className="hidden md:flex">
              <div className="relative right-[-22rem] top-[-3rem]">
                <img
                  className=""
                  src="https://cdn.discordapp.com/attachments/1159478783020113980/1163837366197309553/Group_39574.webp?ex=65410703&is=652e9203&hm=7e86ef8ee152c073efdae7084634b97025df8b7aab215120aa3162d566a27a68&"
                  alt=""
                />
              </div>
              <div className="relative right-[-16rem] top-[-16rem]">
                <img
                  className=""
                  src="https://cdn.discordapp.com/attachments/1159478783020113980/1163837366608330803/Group_39575.webp?ex=65410703&is=652e9203&hm=c8dcc2707379ae2c3f3756426645cdd34bcf7880825d51731531bc9e33a7cc18&"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
