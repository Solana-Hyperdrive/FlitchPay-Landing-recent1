"use client";

import appDemo from "public/images/AppDemo.webp";
import Image from "next/image";
import { useMediaQuery } from "@mantine/hooks";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { VectorRight } from "@/public/svgs/VectorRight";

export default function LandingHero() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32 ">
      <div className="container w-fit md:mx-64 md:px-6">
        <Button
          variant={"primary"}
          size={"sm"}
          className="my-3 flex items-center gap-1 h-6 rounded-xl"
        >
          {/* logo */}
          <div>Check our new update</div>
          <ArrowRight size={"1rem"} />
        </Button>
        <div className="flex flex-wrap justify-between">
          <div className="text-5xl tracking-wide md:w-7/12 md:text-6xl md:leading-tight">
            Build like a team <br />
            of hundreds<span className="text-primary">_</span>
          </div>
          <div className="mt-3 flex flex-col gap-6 md:w-5/12 ">
            <p className="text-muted-foreground">
              {"Appwrite's"} open-source platform lets you add Auth, DBs,
              Functions and Storage to your product and build any application at
              any scale, own your data, and use your preferred coding languages
              and tools.
            </p>
            <div className="flex gap-6">
              <Button size={"sm"} variant={"primary"}>
                Get Started
              </Button>
              <Button variant={"outline"} size={"sm"}>
                Join the waitlist
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
