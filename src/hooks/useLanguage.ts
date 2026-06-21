import { useLocation, useNavigate } from 'react-router-dom';
import enJSON from '../locales/en.json';
import frJSON from '../locales/fr.json';
import arJSON from '../locales/ar.json';
import lgJSON from '../locales/lg.json';
import swJSON from '../locales/sw.json';
import zhJSON from '../locales/zh.json';

export type LanguageCode = 'en' | 'fr' | 'ar' | 'lg' | 'sw' | 'zh';

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇦🇪' },
  { code: 'lg', name: 'Luganda', nativeName: 'Oluganda', flag: '🇺🇬' },
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili', flag: '🇹🇿' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' }
];

export const VALID_LANG_CODES: LanguageCode[] = ['fr', 'ar', 'lg', 'sw', 'zh'];

export function getLangFromPath(pathname: string): LanguageCode {
  const parts = pathname.split('/');
  const firstSegment = parts[1];
  if (firstSegment && VALID_LANG_CODES.includes(firstSegment as any)) {
    return firstSegment as LanguageCode;
  }
  return 'en';
}

export function getLocalizedPath(currentPath: string, targetLang: LanguageCode): string {
  const parts = currentPath.split('/');
  const firstSegment = parts[1];
  
  let strippedPath = currentPath;
  if (firstSegment && VALID_LANG_CODES.includes(firstSegment as any)) {
    strippedPath = '/' + parts.slice(2).join('/');
  }
  
  if (targetLang === 'en') {
    return strippedPath === '' ? '/' : strippedPath;
  } else {
    const prefix = `/${targetLang}`;
    if (strippedPath === '/' || strippedPath === '') {
      return prefix;
    }
    return `${prefix}${strippedPath}`;
  }
}

export function useLanguage() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const lang = getLangFromPath(location.pathname);

  const changeLanguage = (newLang: LanguageCode) => {
    localStorage.setItem('mda-selected-language', newLang);
    const newPath = getLocalizedPath(location.pathname, newLang);
    navigate(newPath);
  };

  const getTranslation = (key: string): string => {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS['en'];
    return dict[key] || TRANSLATIONS['en'][key] || key;
  };

  const getLocalizedLink = (path: string): string => {
    if (lang === 'en') return path;
    if (path === '/') return `/${lang}`;
    return `/${lang}${path.startsWith('/') ? path : '/' + path}`;
  };

  return { 
    lang, 
    changeLanguage, 
    t: getTranslation, 
    languages: LANGUAGES, 
    getLocalizedLink 
  };
}

// Compact and high-fidelity dictionary loaded from JSON files
export const TRANSLATIONS: Record<LanguageCode, Record<string, string>> = {
  en: enJSON as Record<string, string>,
  fr: frJSON as Record<string, string>,
  ar: arJSON as Record<string, string>,
  lg: lgJSON as Record<string, string>,
  sw: swJSON as Record<string, string>,
  zh: zhJSON as Record<string, string>
};
