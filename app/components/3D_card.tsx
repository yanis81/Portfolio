"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { useLanguage } from "@/app/utils/LanguageContext";

export function ThreeDCardDemoP2() {
  const { t } = useLanguage();
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[32rem] rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          BOOKI
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {t('bookiDesc')}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={`/imageProjet/P2.webp`}
            height="1000"
            width="1000"
            className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="image du site Booki"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {t('viewSite')} → <br />
            {t('githubLink')} →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://yanis81.github.io/Projet-n2_OC/"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white font-bold text-base"
          >
            <FontAwesomeIcon icon={faGlobe} />
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://github.com/yanis81/Projet-n2_OC"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white font-bold text-base"
          >
            <FontAwesomeIcon icon={faGithub} />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export function ThreeDCardDemoP3() {
  const { t } = useLanguage();
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[32rem] rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Sophie Bluel
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {t('sophieDesc')}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={`/imageProjet/P3.webp`}
            height="1000"
            width="1000"
            className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="image du site Sophie Bluel"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {t('viewSite')} → <br />
            {t('githubLink')} →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://yanis81.github.io/Projet-n3_Publi-/"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white font-bold text-base"
          >
            <FontAwesomeIcon icon={faGlobe} />
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://github.com/yanis81/Projet-n3_OC"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white font-bold text-base"
          >
            <FontAwesomeIcon icon={faGithub} />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export function ThreeDCardDemoP4() {
  const { t } = useLanguage();
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[32rem] rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Menu Maker by Qwenta
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {t('menuMakerDesc')}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={`/imageProjet/P4.webp`}
            height="1000"
            width="1000"
            className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="image du site Menu Maker by Qwenta"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {t('githubLink')} →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://github.com/yanis81/Projet-n4_OC"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white font-bold text-base"
          >
            <FontAwesomeIcon icon={faGithub} />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export function ThreeDCardDemoP5() {
  const { t } = useLanguage();
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[32rem] rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Nina Carducci
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {t('ninaDesc')}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={`/imageProjet/P5.webp`}
            height="1000"
            width="1000"
            className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="image du site Nina Carducci"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {t('viewSite')} → <br />
            {t('githubLink')} →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://yanis81.github.io/Projet-n5_OC/"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white font-bold text-base"
          >
            <FontAwesomeIcon icon={faGlobe} />
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://github.com/yanis81/Projet-n5_OC"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white font-bold text-base"
          >
            <FontAwesomeIcon icon={faGithub} />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export function ThreeDCardDemoP6() {
  const { t } = useLanguage();
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[32rem] rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Kasa
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {t('kasaDesc')}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={`/imageProjet/P6.webp`}
            height="1000"
            width="1000"
            className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="image du site Kasa"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {t('viewSite')} → <br />
            {t('githubLink')} →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://kasa-pearl.vercel.app/accueil"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white font-bold text-base"
          >
            <FontAwesomeIcon icon={faGlobe} />
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://github.com/yanis81/Projet-n6_OC"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white font-bold text-base"
          >
            <FontAwesomeIcon icon={faGithub} />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export function ThreeDCardDemoP7() {
  const { t } = useLanguage();
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[32rem] rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Mon Vieux Grimoire
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {t('grimoireDesc')}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={`/imageProjet/P7.webp`}
            height="1000"
            width="1000"
            className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="image du site Mon Vieux Grimoire"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {t('githubLink')} →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://github.com/yanis81/Projet-n7_OC"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white font-bold text-base"
          >
            <FontAwesomeIcon icon={faGithub} />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export function ThreeDCardMangaMania() {
  const { t } = useLanguage();
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[32rem] rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Manga Mania
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {t('mangaManiaDesc')}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={`/imageProjet/mangamania.webp`}
            height="1000"
            width="1000"
            className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="image du site Manga Mania"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {t('viewSite')} →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://manga-mania-theta.vercel.app/"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white font-bold text-base"
          >
            <FontAwesomeIcon icon={faGlobe} />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
export function ThreeDCardCalculator() {
  const { t } = useLanguage();
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[32rem] rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Calculateur de salaire brut à net
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {t('calculatorDesc')}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={`/imageProjet/calculateur.webp`}
            height="1000"
            width="1000"
            className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="image du site Calculateur de salaire brut à net"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {t('viewSite')} →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="https://salaire-brut-en-net.vercel.app/"
            target="_blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white font-bold text-base"
          >
            <FontAwesomeIcon icon={faGlobe} />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}