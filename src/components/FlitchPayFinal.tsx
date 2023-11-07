import Image from "next/image";
import React from "react";
import Final from "@/public/images/Final.png";
import Link from "next/link";

export function FlitchPayFinal() {
  return (
    <section className="cursor-pointer">
      {/* redirect to get started link */}
      <Link href={""}>
        <Image src={Final} alt=""></Image>
      </Link>
    </section>
  );
}
