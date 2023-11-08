"use client";

import React, { useState } from "react";
import { FlitchPayLogo } from "../../public/svgs/FlitchPayLogo";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { GithubLogo } from "../../public/svgs/Github";
import { VectorRight } from "../../public/svgs/VectorRight";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const internalLinks = [
  { name: "Docs", link: "https://docs.flitchcoin.com/" },
  { name: "Community", link: "" },
];

const externalLinks = [
  { name: "Github" },
  { name: "Sign in" },
  { name: "Let’s Get Started" },
];

const ExternalLinks = () => (
  <>
    <Link
      href="https://github.com/Solana-Hyperdrive"
      target="_blank"
    >
      <div className="flex items-center justify-start gap-1.5">
        <Button size={"sm"} variant={"outline"} className="gap-2">
          <div>
            <GithubLogo />
          </div>
          <div className="font-semibold">Star on Github</div>
          {/* <div className="rounded-sm bg-secondary px-1">36.8k</div> */}
        </Button>
      </div>
    </Link>
    <Link href="https://ledger.flitchcoin.com/login" target="_blank">
      <Button size={"sm"} variant={"outline"} className="font-semibold">
        Sign In
      </Button>
    </Link>
    <div className="flex items-center justify-center">
      <Link href="https://ledger.flitchcoin.com/login" target="_blank">
        <Button size={"sm"} variant={"primary"}>
          Get Started
        </Button>
      </Link>
    </div>
  </>
);

function Navbar() {
  return (
    <>
      <div className="flex w-full justify-between bg-background px-4 sm:px-16 md:py-2">
        {/*Internal Links*/}
        <div className="flex items-center gap-2">
          <FlitchPayLogo />
          <h1 className="text-lg font-semibold cursor-pointer">FlitchPay</h1>
          <div className="ml-4 hidden items-start justify-center gap-4 md:flex md:flex-wrap ">
            {internalLinks.map((link) => (
              <Link href={link.link} key={link.name} className="font-medium ">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Personal/Bussiness Button */}

        {/*External Links*/}
        <div className="hidden items-center justify-center gap-4 md:flex md:flex-wrap">
          <ExternalLinks />
        </div>

        {/*  Mobile Menu*/}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild className="md:hidden">
            <button className="IconButton" aria-label="Customise options">
              <HamburgerMenuIcon width={35} height={35} />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="DropdownMenuContent z-[1000] -mt-2 flex h-screen w-screen flex-col items-center gap-4 bg-black p-4 font-medium text-white md:hidden"
              sideOffset={5}
            >
              {internalLinks.map((link) => (
                <DropdownMenu.Item className="DropdownMenuItem" key={link.name}>
                  <Link
                    target={link.name === "Pricing" ? "" : "_blank"}
                    href={link.link}
                    key={link.name}
                    className="font-medium mix-blend-exclusion"
                  >
                    {link.name}
                  </Link>
                </DropdownMenu.Item>
              ))}

              <DropdownMenu.Separator className="border-b-1 w-full border" />

              <DropdownMenu.Item className="DropdownMenuItem">
                <Link
                  href="https://github.com/One-Click-Auth/Landing-Next-TrustAuthx"
                  target="_blank"
                  className="flex gap-3"
                >
                  Github
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropdownMenuItem">
                <Link href="https://ledger.flitchcoin.com/login" target="_blank">
                  Sign In
                </Link>
              </DropdownMenu.Item>
              <Button size={"sm"} variant={"primary"} >
                Get Started
              </Button>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </>
  );
}

export default Navbar;
