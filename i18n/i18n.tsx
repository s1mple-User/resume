'use client';

import { ReactNode, useEffect, useState } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/public/locales/en/translation.json';
import ru from '@/public/locales/ru/translation.json';
import detector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(detector)
  .init({
    resources: { en: { translation: en }, ru: { translation: ru } },
    fallbackLng: 'ru',
    lng: 'ru',
    debug: true,
    interpolation: { escapeValue: true },
    detection: { order: ['cookie', 'localStorage', 'navigator'], caches: ['cookie'] },
  });

export default function I18nProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}