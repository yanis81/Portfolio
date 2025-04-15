"use client";
import React from "react";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import Image from "next/image";
import { useLanguage } from "@/app/utils/LanguageContext";

export function Ipad() {
  const { t } = useLanguage();

  return (
    <section>
      <div className="flex flex-col overflow-hidden dark:bg-[#0B0B0F]">
        <ContainerScroll
          titleComponent={
            <>
              <h2 className="text-4xl font-semibold text-black dark:text-white">
                {t('my')} <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  {t('Projects')}
                </span>
              </h2>
            </>
          }
        >
          <Image
            src={`/presentationImage/allP.webp`}
            alt="Aperçu de mes projets de développement web"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
            loading="lazy"
          />
        </ContainerScroll>
      </div>
    </section>
  );
}
