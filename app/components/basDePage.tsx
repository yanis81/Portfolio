"use client";
import Link from 'next/link'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useLanguage } from "@/app/utils/LanguageContext";

export function BasDePage() {
  const { t } = useLanguage();

  return (
    <footer className="w-full dark:bg-[#0B0B0F] text-neutral-600 dark:text-neutral-300 border-t border-neutral-200 dark:border-neutral-800">
      {/* Partie principale du footer */}
      <div className="max-w-7xl mx-auto py-8 md:py-12 lg:py-16 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Section Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-lg md:text-xl font-bold mb-4 pb-2 border-b-2 border-[#1890ec] inline-block">
              {t('contactMeAt')}
            </h2>
            <div className="flex items-center mt-4 group">
              <FontAwesomeIcon 
                icon={faEnvelope} 
                className="mr-3 text-[#1890ec] text-xl group-hover:scale-110 transition-transform duration-300" 
              />
              <a 
                href="mailto:Lartigueyanis@yahoo.com" 
                className="text-[#1890ec] font-medium hover:underline"
              >
                Lartigueyanis@yahoo.com
              </a>
            </div>
          </div>

          {/* Section Logo/Identité */}
          <div className="flex flex-col items-center justify-center">
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold">Yanis LARTIGUE</h2>
              <p className="mt-2 text-sm md:text-base">{t('description')}</p>
            </div>
          </div>

          {/* Section Réseaux sociaux */}
          <div className="flex flex-col items-center md:items-end">
            <h2 className="text-lg md:text-xl font-bold mb-4 pb-2 border-b-2 border-[#1890ec] inline-block">
              {t('followMe')}
            </h2>
            <div className="flex space-x-6 mt-4">
              <Link 
                href="https://www.linkedin.com/in/yanis-lartigue-a2965a330" 
                target="_blank" 
                aria-label="LinkedIn"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <FontAwesomeIcon 
                  icon={faLinkedin} 
                  className="text-3xl md:text-4xl" 
                  style={{color: "#1890ec"}} 
                />
              </Link>
              <Link 
                href="https://github.com/yanis81" 
                target="_blank" 
                aria-label="GitHub"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <FontAwesomeIcon 
                  icon={faGithub} 
                  className="text-3xl md:text-4xl" 
                  style={{color: "#1890ec"}} 
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de droits d'auteur */}
      <div className="border-t border-neutral-200 dark:border-neutral-800 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-center md:text-left">{t('siteInfo')}</p>
          <p className="text-sm">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
