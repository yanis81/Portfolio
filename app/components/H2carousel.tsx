"use client";
import React from "react";
import { CarouselDemo } from "./carousel";
import { useLanguage } from "@/app/utils/LanguageContext";

export function H2carousel() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center dark:bg-[#0B0B0F]  ">
      <h2 className="text-4xl pb-12 font-semibold flex flex-col items-center ">
        {t('my')} <br />
        <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
          {t('Skills')}
        </span>
      </h2>
      <CarouselDemo />
    </div>
  );
}
