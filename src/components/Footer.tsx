import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SocialLogo } from "@/public/svgs/Social";
import { FlitchPayLogo } from "@/public/svgs/FlitchPayLogo";

const ProductFooterItems = [
  {
    link: "",
    name: "Features",
  },
  {
    link: "",
    name: "Security",
  },
  {
    link: "",
    name: "Team",
  },
  {
    link: "",
    name: "Enterprise",
  },
  {
    link: "",
    name: "Customer Stories",
  },
  {
    link: "",
    name: "The ReadMe Project",
  },
  {
    link: "",
    name: "Pricing",
  },
  {
    link: "",
    name: "Resources",
  },
  {
    link: "",
    name: "Roadmap",
  },
  {
    link: "",
    name: "Compare Github",
  },
];
const PlatformFooterItems = [
  {
    link: "",
    name: "Developer API",
  },
  {
    link: "",
    name: "Partners",
  },
  {
    link: "",
    name: "Electron",
  },
  {
    link: "",
    name: "Github Desktop",
  },
];
const SupportFooterItems = [
  {
    link: "",
    name: "Docs",
  },
  {
    link: "",
    name: "Community Forum",
  },
  {
    link: "",
    name: "Professional Services",
  },
  {
    link: "",
    name: "Premium Support",
  },
  {
    link: "",
    name: "Skills",
  },
  {
    link: "",
    name: "Status",
  },
  {
    link: "",
    name: "Contact Github",
  },
];
const CompanyFooterItems = [
  {
    link: "",
    name: "About",
  },
  {
    link: "",
    name: "Blog",
  },
  {
    link: "",
    name: "Carrers",
  },
  {
    link: "",
    name: "Press",
  },
  {
    link: "",
    name: "Inclusion",
  },
  {
    link: "",
    name: "Social Impact",
  },
  {
    link: "",
    name: "Shop",
  },
];
const Socials = [
  {
    link: "",
    name: "Youtube",
  },
  {
    link: "",
    name: "Facebook",
  },
  {
    link: "",
    name: "Linkedin",
  },
  {
    link: "",
    name: "Twitter",
  },
  {
    link: "",
    name: "Twitch",
  },
  {
    link: "",
    name: "Github",
  },
  {
    link: "",
    name: "Tiktok",
  },
];
const FooterBottomItems = [
  {
    name: "Terms",
    link: "",
  },
  {
    name: "Privacy",
    link: "",
  },
  {
    name: "Sitemap",
    link: "",
  },
  {
    name: "What is Git?",
    link: "",
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto flex flex-col flex-wrap px-2 py-6 md:flex-row md:flex-nowrap md:items-center md:px-16 lg:items-start">
        <div className="mx-auto w-72 flex-shrink-0 text-center md:mx-0 md:text-left">
          <Link
            href={"/"}
            className="title-font flex items-center justify-center font-medium hover:cursor-pointer  md:justify-start"
          >
            <FlitchPayLogo />
            <span className="ml-3 text-xl font-bold">FlitchPay</span>
          </Link>
          <div className="mt-4 font-semibold">
            Subscribe to the Github Insider
          </div>
          <div className="mb-4 mt-1 text-sm text-muted-foreground">
            Discover tips, technical guides, and best practices in our monthly
            newsletter for developers.
          </div>
          <Button className="font-semibold" variant={"outline"}>
            Subscribe
          </Button>
        </div>
        <div className="mt-10 flex flex-grow flex-wrap md:mt-0 md:pl-20 md:text-left">
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="mb-3">Product</h2>
            <nav className="mb-10 list-none">
              {ProductFooterItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline"
                    >
                      {item.name} <span className="sr-only">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="mb-3">Platform</h2>
            <nav className="mb-10 list-none">
              {PlatformFooterItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline"
                    >
                      {item.name} <span className="sr-only">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="mb-3">Support</h2>
            <nav className="mb-10 list-none">
              {SupportFooterItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline"
                    >
                      {item.name} <span className="sr-only">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="mb-3">Company</h2>
            <nav className="mb-10 list-none">
              {CompanyFooterItems.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline"
                    >
                      {item.name} <span className="sr-only">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
      <BottomFooter />
    </footer>
  );
}

function BottomFooter() {
  return (
    <div className="bg-primary/10 px-4 py-2 md:px-32">
      <section
        id="footer-bottom"
        aria-labelledby="footer-bottom-heading"
        className="flex flex-col items-center space-x-4 sm:flex-row md:flex-row lg:flex-row xl:flex-row"
      >
        <div className="text-left text-xs leading-loose text-muted-foreground md:text-sm">
          © 2023 GitHub, Inc.
        </div>
        <ul className="flex flex-1 flex-row space-x-3">
          {FooterBottomItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground hover:underline md:text-sm"
              >
                {item.name} <span className="sr-only">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center space-x-1">
          {Socials.map((social, index) => {
            return (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                  )}
                >
                  <SocialLogo name={social.name} />
                  <span className="sr-only">{social.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
