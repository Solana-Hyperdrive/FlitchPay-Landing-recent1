"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function LandingHero() {
  return (
    <section className="flex items-center bg-background py-12 md:py-24 lg:pt-32 ">
      <div className="container mx-auto flex flex-col items-center md:px-36 ">
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
          <div className="flex flex-wrap justify-between">
            <div className="text-5xl tracking-wide md:w-1/2 md:px-2 md:text-6xl md:leading-tight">
              Build like a team of hundreds
              <span className="text-primary">_</span>
            </div>
            <div className="mt-3 flex flex-col justify-between gap-6 px-2 md:w-1/2 ">
              <p className="text-base text-muted-foreground">
                {"Appwrite's"} open-source platform lets you add Auth, DBs,
                Functions and Storage to your product and build any application
                at any scale, own your data, and use your preferred coding
                languages and tools.
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
      </div>
    </section>
  );
}
