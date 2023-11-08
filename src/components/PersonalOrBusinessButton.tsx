import React, { useState } from "react";
import { useActivePage } from "../app/_context";

export function PersonalOrBusinessButton() {
  const {activePage, setActivePage} = useActivePage();
  return (
    <div className="flex items-center gap-1 rounded-full border md:px-2.5 md:py-1.5 text-xs md:text-sm">
      <div
        className={`${
          activePage == "Personal"
            ? "bg-[#7000FF] hover:bg-[#7000FF]/90"
            : "hover:bg-accent"
        } cursor-pointer rounded-full px-2.5 py-1.5 `}
        onClick={() => {
          setActivePage("Personal");
        }}
      >
        Personal
      </div>
      <div
        className={`${
          activePage == "Business" ? "bg-[#7000FF]" : "hover:bg-accent"
        } cursor-pointer rounded-full px-2.5 py-1.5 `}
        onClick={() => {
          setActivePage("Business");
        }}
      >
        Business
      </div>
    </div>
  );
}
