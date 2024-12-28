"use client";

import React from "react";
import {
  ThreeDCardDemoP2,
  ThreeDCardDemoP3,
  ThreeDCardDemoP4,
  ThreeDCardDemoP5,
  ThreeDCardDemoP6,
  ThreeDCardDemoP7,
} from "./3D_card";

export function ProjetComp() {
  return (
    <section>
      <div className="flex gap-x-3 justify-center flex-wrap items-center dark:bg-[#0B0B0F]">
        <ThreeDCardDemoP2 />
        <ThreeDCardDemoP3 />
        <ThreeDCardDemoP4 />
        <ThreeDCardDemoP5 />
        <ThreeDCardDemoP6 />
        <ThreeDCardDemoP7 />
      </div>
    </section>
  );
}
