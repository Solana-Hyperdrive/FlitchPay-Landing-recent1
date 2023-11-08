import React from "react";
import Script from "next/script";
import "../styles/globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  themeColor: [
    { media: "(prefers-color-scheme: light", color: "white" },
    { media: "(prefers-color-scheme: dark", color: "black" },
  ],
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <head>
        <title>FlitchPay</title>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7NXTY5KCKL"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7NXTY5KCKL');
        `}
      </Script>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col ">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
