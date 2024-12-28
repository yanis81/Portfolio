"use client";
import Link from 'next/link'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useLanguage } from "@/app/utils/LanguageContext";

export function BasDePage() {
  const { t } = useLanguage();

  return (
    <section className="p-12 dark:bg-[#0B0B0F] flex flex-col ">
      <div className='flex items-start gap-x-24'>
        <div className="flex flex-col text-xl pb-4 leading-none">
          <h2 className="font-bold">{t('contactMeAt')}</h2><br /><br />
          <p className="font-medium text-[#1890ec]">Lartigueyanis@yahoo.com</p> <br />
        </div>

        <div className='flex flex-col gap-y-5 items-start'>
          <h2 className='font-bold text-xl'>{t('followMe')}</h2>
          <div className='text-4xl'>
            <Link href={'https://www.linkedin.com/in/yanis-lartigue-a2965a330'} target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} style={{color: "#1890ec",}} />
            </Link>
          </div>
        </div>
      </div>
      <br />
      <div className="dark:bg-[#0B0B0F] flex flex-col items-center">
        <p>{t('siteInfo')}</p> 
        <p>{t('copyright')}</p>
      </div>    
    </section>
  );
}
