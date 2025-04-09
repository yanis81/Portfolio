"use client";
import React from "react";
import { CarouselDemo } from "./carousel";
import { useLanguage } from "@/app/utils/LanguageContext";

export function H2carousel() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center dark:bg-[#0B0B0F] px-4 md:px-0 py-8 md:py-12 overflow-hidden">
      <h2 className="text-3xl md:text-4xl pb-6 md:pb-12 font-semibold flex flex-col items-center text-center text-black dark:text-white">
        {t('my')} <br />
        <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-black dark:text-white">
          {t('Skills')}
        </span>
      </h2>
      <CarouselDemo />
    </div>
  );
}
