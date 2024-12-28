'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useLanguage } from "../utils/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < 100 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`fixed top-4 right-20 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
      } shadow-lg hover:shadow-xl`}
      aria-label={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
    >
      <div className="flex items-center space-x-2">
        <FontAwesomeIcon 
          icon={faLanguage}
          className="w-5 h-5 text-gray-600 dark:text-gray-300" 
        />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {language === 'fr' ? 'FR' : 'EN'}
        </span>
      </div>
    </button>
  );
} 