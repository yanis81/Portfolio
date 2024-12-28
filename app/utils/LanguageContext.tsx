'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type LanguageContextType = {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
  t: (key: keyof typeof translations.fr) => string;
};

const translations = {
  fr: {
    'my': 'Mes',
    'welcome': 'Bienvenue sur mon portfolio',
    'about': 'À propos',
    'projects': 'Projets',
    'contact': 'Contact',
    'skills': 'Compétences',
    'experience': 'Expérience',
    'education': 'Formation',
    'downloadCV': 'Télécharger CV',
    'contactMe': 'Me contacter',
    'description': 'Développeur web junior passionné par les nouvelles technologies',
    'viewProject': 'Voir le projet',
    'technologies': 'Technologies utilisées',
    'sendMessage': 'Envoyer un message',
    'scrollToTop': 'Retour en haut',
    'changeLanguage': 'Changer la langue',
    'changeTheme': 'Changer le thème',
    'name': 'Nom',
    'email': 'Email',
    'message': 'Message',
    'submit': 'Envoyer',
    'webDeveloper': 'Développeur Web',
    'hello': 'Hello world!',
    'student': 'Je suis étudiant',
    'inYear': 'en',
    'thirdYear': '3ème',
    'years': 'années',
    'of': 'de',
    'bachelor': 'bachelor',
    'systemDesigner': 'Concepteur de Systèmes d\'Information',
    'specialty': 'SPÉCIALITÉ',
    'softwareDev': '« Développement Logiciel et Web »',
    'at': 'à',
    'school': 'l\'École',
    'superior': 'Supérieure',
    'numeric': 'du Numérique',
    'tarn': 'du Tarn (ESN 81)',
    'graduate': 'Je suis titulaire',
    'diploma': 'd\'un diplôme',
    'webIntegrator': 'développeur intégrateur web',
    'delivered': 'délivré par',
    'passionate': 'Passionné',
    'newTech': 'de nouvelles technologies',
    'and': 'et',
    'web': 'du Web',
    'general': 'en général',
    'Projects': 'Projets',
    'viewSite': 'Lien du Site',
    'githubLink': 'Lien Github',
    'Skills': 'Compétences',
    'frontend': 'FRONTEND',
    'backend': 'BACKEND',
    'tools': 'OUTILS',
    'contactMeAt': 'Me Contacter :',
    'followMe': 'Me Suivre :',
    'siteInfo': 'Ce site a été réalisé à la main et ne collecte aucune donnée. Merci de votre visite, passez une bonne journée ! 👋',
    'copyright': '© 2024 Portfolio Lartigue Yanis. Tous droits réservés.',
    'bookiDesc': 'Créez la page d\'accueil d\'une agence de voyage avec HTML & CSS.',
    'sophieDesc': 'Créez une page web dynamique avec JavaScript natif.',
    'menuMakerDesc': 'Planifiez le développement du site de votre client (méthode agile, kanban, User Stories).',
    'ninaDesc': 'Débuggez et optimisez un site de photographe (SEO, Lighthouse, Debug).',
    'kasaDesc': 'Créez une application web de location immobilière avec React.',
    'grimoireDesc': 'Développez le back-end d\'un site de notation de livres (NodeJS, Express).',
  },
  en: {
    'my': 'My',
    'welcome': 'Welcome to my portfolio',
    'about': 'About',
    'projects': 'Projects',
    'contact': 'Contact',
    'skills': 'Skills',
    'experience': 'Experience',
    'education': 'Education',
    'downloadCV': 'Download Resume',
    'contactMe': 'Contact Me',
    'description': 'Junior web developer passionate about new technologies',
    'viewProject': 'View Project',
    'technologies': 'Technologies used',
    'sendMessage': 'Send a message',
    'scrollToTop': 'Back to top',
    'changeLanguage': 'Change language',
    'changeTheme': 'Change theme',
    'name': 'Name',
    'email': 'Email',
    'message': 'Message',
    'submit': 'Submit',
    'webDeveloper': 'Web Developer',
    'hello': 'Hello world!',
    'student': 'I am a student',
    'inYear': 'in',
    'thirdYear': '3rd',
    'years': 'year',
    'of': 'of',
    'bachelor': 'bachelor',
    'systemDesigner': 'Information Systems Designer',
    'specialty': 'SPECIALTY',
    'softwareDev': '« Software and Web Development »',
    'at': 'at',
    'school': 'the School',
    'superior': 'Superior',
    'numeric': 'of Digital',
    'tarn': 'of Tarn (ESN 81)',
    'graduate': 'I hold',
    'diploma': 'a diploma',
    'webIntegrator': 'web developer integrator',
    'delivered': 'delivered by',
    'passionate': 'Passionate',
    'newTech': 'about new technologies',
    'and': 'and',
    'web': 'Web',
    'general': 'in general',
    'Projects': 'Projects',
    'viewSite': 'View Site',
    'githubLink': 'Github Link',
    'Skills': 'Skills',
    'frontend': 'FRONTEND',
    'backend': 'BACKEND',
    'tools': 'TOOLS',
    'contactMeAt': 'Contact Me:',
    'followMe': 'Follow Me:',
    'siteInfo': 'This site was handcrafted and does not collect any data. Thank you for your visit, have a great day! 👋',
    'copyright': '© 2024 Portfolio Lartigue Yanis. All rights reserved.',
    'bookiDesc': 'Create a travel agency homepage with HTML & CSS.',
    'sophieDesc': 'Create a dynamic web page with vanilla JavaScript.',
    'menuMakerDesc': 'Plan the development of your client\'s website (agile method, kanban, User Stories).',
    'ninaDesc': 'Debug and optimize a photographer\'s website (SEO, Lighthouse, Debug).',
    'kasaDesc': 'Create a real estate rental web application with React.',
    'grimoireDesc': 'Develop the back-end of a book rating website (NodeJS, Express).',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<'fr' | 'en'>('fr');

  const setLanguage = (lang: 'fr' | 'en') => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as 'fr' | 'en' | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const t = (key: keyof typeof translations.fr): string => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 