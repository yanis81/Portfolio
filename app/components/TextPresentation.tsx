"use client";

import React from "react";
import { AnimatedTooltipPreview } from "./avatar";
import { TypewriterEffectSmoothDemo } from "./effetEcriture";

export function TextPresentation() {
  return (
    <div className="flex items-center gap-12 w-full">
      <div className="animate-bounce">
        <AnimatedTooltipPreview />
      </div>
      <TypewriterEffectSmoothDemo />
    </div>
  );
}
