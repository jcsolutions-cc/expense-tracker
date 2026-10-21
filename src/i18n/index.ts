


import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';

import en from './en.json';
import pt from './pt.json';

export const I18N = new I18n({ en, pt });

I18N.enableFallback = true;
I18N.defaultLocale = 'en';

export type Language = 'en' | 'pt';

export function getDeviceLanguage(): Language {
  const code = Localization.getLocales()[0]?.languageCode;

  return code === 'pt' ? 'pt' : 'en';
}

I18N.locale = getDeviceLanguage();

export function translation(key: string): string {
  return I18N.t(key);
}

export function setLanguage(lang: Language): void {
  I18N.locale = lang;
}

//Alias for translation
export const t = (key: string): string => translation(key);
