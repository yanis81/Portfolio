'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useLanguage } from "@/app/utils/LanguageContext";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < 100 || currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initialisation du thème
    const root = document.documentElement;
    if (root.classList.contains('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-4 right-4 z-50 p-3 aspect-square rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
      }`}
      aria-label={t('changeTheme')}
    >
      {isDark ? (
        <FontAwesomeIcon 
          icon={faMoon} 
          className="w-5 h-5 text-blue-500" 
        />
      ) : (
        <FontAwesomeIcon 
          icon={faSun} 
          className="w-5 h-5 text-yellow-500" 
        />
      )}
    </button>
  );
} 