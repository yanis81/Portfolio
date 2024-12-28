"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewritter-effect";
import { useLanguage } from "@/app/utils/LanguageContext";

export function TypewriterEffectSmoothDemo() {
  const { t } = useLanguage();

  const words = [
    {
      text: t('hello'),
      className: "font-bold text-3xl",
    },
    {
      text: t('student'),
      className: "text-2xl",
    },
    {
      text: t('inYear'),
      className: "text-2xl",
    },
    {
      text: t('thirdYear'),
      className: "text-2xl",
    },
    {
      text: t('years'),
      className: "text-2xl",
    },
    {
      text: t('of'),
      className: "text-2xl",
    },
    {
      text: t('bachelor'),
      className: "text-2xl",
    },
    {
      text: t('systemDesigner'),
      className: "text-2xl",
    },
    {
      text: t('specialty'),
      className: "text-2xl",
    },
    {
      text: t('softwareDev'),
      className: "text-2xl",
    },
    {
      text: t('at'),
      className: "text-2xl",
    },
    {
      text: t('school'),
      className: "text-2xl",
    },
    {
      text: t('superior'),
      className: "text-2xl",
    },
    {
      text: t('numeric'),
      className: "text-2xl",
    },
    {
      text: t('tarn'),
      className: "text-2xl",
    },
    {
      text: t('graduate'),
      className: "text-2xl",
    },
    {
      text: t('diploma'),
      className: "text-2xl",
    },
    {
      text: t('webIntegrator'),
      className: "text-2xl",
    },
    {
      text: t('delivered'),
      className: "text-2xl",
    },
    {
      text: "OpenClassroom.",
      className: "text-2xl",
    },
    {
      text: t('passionate'),
      className: "text-2xl",
    },
    {
      text: t('of'),
      className: "text-2xl",
    },
    {
      text: t('newTech'),
      className: "text-2xl",
    },
    {
      text: t('and'),
      className: "text-2xl",
    },
    {
      text: t('web'),
      className: "text-2xl",
    },
    {
      text: t('general'),
      className: "text-2xl",
    },
    {
      text: "Lartigue yanis.",
      className: "text-blue-500 dark:text-blue-500 text-2xl",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
