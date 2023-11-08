"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LandingHero() {
  return (
    <section className="flex items-center bg-background py-12 md:py-24 lg:pt-32 ">
      <div className="container mx-auto flex flex-col items-center md:px-48 ">
        <div>
          <div className="md:px-2">
            <Button
              variant={"primary"}
              size={"sm"}
              className="my-3 flex h-6 items-center gap-1 rounded-xl"
            >
              {/* logo */}
              <div>Check our new update</div>
              <ArrowRight size={"1rem"} />
            </Button>
          </div>
          <div className="flex flex-wrap justify-between md:flex-nowrap">
            <div className="text-5xl tracking-wide md:w-1/2 md:px-2 md:text-[3.5rem] md:leading-tight">
              Web3 payments for the
              <span className="font-bold"> Internet.. 🌐</span>
            </div>
            <div className="mt-3 flex flex-col gap-8 md:w-1/2  md:pl-16 ">
              <p className="text-muted-foreground">
                {/* {"Appwrite's"} open-source platform lets you add Auth, DBs,
                Functions and Storage to your product and build any application
                at any scale, own your data, and use your preferred coding
                languages and tools. */}
                <span className="font-semibold text-red-500">{"Flitchpay's"}</span> fully managed, low-code platform empowers you to integrate crypto checkout services into your product with ease. 
                Build any application, at any scale and maintain control of your data.
                <span className="font-medium"> Welcome</span> to the future of crypto transactions with <span className="font-semibold text-red-500">Flitchpay.</span>
              </p>
              <div className="flex gap-8">
                <Link href="https://tally.so/r/nrOxzR" target="_blank">
                <Button size={"sm"} variant={"primary"} className="font-medium">
                  Get Started
                </Button>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="border-0 text-white cursor-pointer ml-2"
                >
                  Join the waitlist
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
