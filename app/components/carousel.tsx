"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carouselParams";
import { useLanguage } from "@/app/utils/LanguageContext";

export function CarouselDemo() {
  const { t } = useLanguage();

  const datas = [
    {
      id: 1,
      title: t('frontend'),
      image: `https://raw.githubusercontent.com/yanis81/My-Portfolio/main/app/assets/carteInfinie/frontend.png`,
      alt: "Mes competences Frontends",
    },
    {
      id: 2,
      title: t('backend'),
      image: `https://raw.githubusercontent.com/yanis81/My-Portfolio/main/app/assets/carteInfinie/backend.png`,
      alt: "Mes competences Backends",
    },
    {
      id: 3,
      title: t('tools'),
      image: `https://raw.githubusercontent.com/yanis81/My-Portfolio/main/app/assets/carteInfinie/autres.png`,
      alt: "Mes competences en outils de travails",
    },
  ];

  return (
    <section className="flex item-center justify-center dark:bg-[#0B0B0F]">
      <Carousel
        plugins={[Autoplay({ delay: 3000 })]}
        className="w-full max-w-5xl h-full max-h- pb-0 "
      >
        <CarouselContent>
          {datas.map((carousel) => (
            <CarouselItem key={carousel.id}>
              <div className="p-0 ">
                <Card>
                  <div className="flex justify-center text-3xl dark:bg-[#0B0B0F]">
                    <h3>{carousel.title}</h3>
                  </div>
                  <CardContent className="flex items-center justify-center w-full dark:bg-[#0B0B0F]">
                    <img src={carousel.image} alt={carousel.alt} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
