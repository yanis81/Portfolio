'use client'

import { useState, useEffect } from 'react';
import { useLanguage } from '@/app/utils/LanguageContext';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();
    
    // Gérer la visibilité du bouton en fonction du scroll
    useEffect(() => {
        const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
        window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Fonction pour remonter en haut
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    return (
        <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 w-12 h-12 bg-[#333] text-white rounded-full shadow-lg flex items-center justify-center
            transform transition-all duration-400 ease-in-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        aria-label={t('scrollToTop')}
        >
        ⇧
        </button>
    );
};

export default BackToTopButton;