// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationRU from './locales/ru.json';
import translationKY from './locales/ky.json';
import translationEN from './locales/en.json';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            ru: {
                translation: translationRU,
            },
            ky: {
                translation: translationKY,
            },
            en: {
                translation: translationEN,
            },
        },
        fallbackLng: 'ru',
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
