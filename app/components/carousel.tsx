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
    <section className="flex items-center justify-center dark:bg-[#0B0B0F] w-full overflow-hidden">
      <Carousel
        plugins={[Autoplay({ delay: 3000 })]}
        className="w-full max-w-full md:max-w-5xl pb-12 md:pb-0"
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <CarouselContent>
          {datas.map((carousel) => (
            <CarouselItem key={carousel.id} className="md:basis-full">
              <div className="p-0">
                <Card className="border-none">
                  <div className="flex justify-center text-2xl md:text-3xl dark:bg-[#0B0B0F] py-2 md:py-4">
                    <h3 className="text-black dark:text-white">{carousel.title}</h3>
                  </div>
                  <CardContent className="flex items-center justify-center w-full dark:bg-[#0B0B0F] p-0 md:p-6">
                    <img 
                      src={carousel.image} 
                      alt={carousel.alt} 
                      className="max-w-full h-auto object-contain rounded-md  "
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </section>
  );
}
