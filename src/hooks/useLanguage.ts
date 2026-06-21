import { useLocation, useNavigate } from 'react-router-dom';

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

// Compact and high-fidelity dictionary for key corporate messaging & components
export const TRANSLATIONS: Record<LanguageCode, Record<string, string>> = {
  en: {
    // Nav & Common
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.marketplace': 'Marketplace',
    'nav.miners': 'For Miners',
    'nav.education': 'Education Center',
    'nav.investor': 'Investor Center',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.cta': 'Request Consultation',
    'nav.phone': '+256 762 079775',
    'nav.email': 'info@mineraldealersafrica.com',
    'nav.tagline': 'Verified Mineral Gateway',
    'nav.compliance': 'Uganda Mining Act 2022 Compliant',
    'nav.spot': 'LBMA GOLD SPOT',

    // Notification / Toast helper when language switches
    'lang.switched': 'System language updated.',
    'lang.desc': 'Regulatory docs, trade forms, and direct channels are now optimized.',

    // Hero / Trust highlights
    'hero.badge': 'Licensed Class A Mineral Exporter • Kampala',
    'hero.title': 'Secure Sovereign Pathways For African Gold and Minerals',
    'hero.desc': 'Under strict regulatory governance with double-blind assays at state laboratories and certified secure escrow clearing corridors.',
    'hero.primary': 'Interrogate Inventory',
    'hero.secondary': 'Verify Licensing'
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.marketplace': 'Marché',
    'nav.miners': 'Pour Mineurs',
    'nav.education': 'Centre Éducatif',
    'nav.investor': 'Espace Investisseurs',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.cta': 'Demander une Consultation',
    'nav.phone': '+256 762 079775',
    'nav.email': 'info@mineraldealersafrica.com',
    'nav.tagline': 'Passerelle Minérale Vérifiée',
    'nav.compliance': 'Conforme au Uganda Mining Act 2022',
    'nav.spot': 'PRIX SPOT DE L\'OR LBMA',

    'lang.switched': 'Langue du système mise à jour.',
    'lang.desc': 'Les documents réglementaires, formulaires et canaux de communication sont optimisés.',

    'hero.badge': 'Exportateur de minéraux agréé de classe A • Kampala',
    'hero.title': 'Voies Souveraines Sécurisées Pour l\'Or et les Minéraux d\'Afrique',
    'hero.desc': 'Sous stricte gouvernance réglementaire avec des analyses en double aveugle dans les laboratoires d\'État et des corridors de paiement sécurisés par séquestre.',
    'hero.primary': 'Consulter l\'Inventaire',
    'hero.secondary': 'Vérifier la Licence'
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'الخدمات',
    'nav.marketplace': 'السوق',
    'nav.miners': 'لعمال المناجم',
    'nav.education': 'المركز التعليمي',
    'nav.investor': 'مركز المستثمر',
    'nav.blog': 'المدونة',
    'nav.contact': 'اتصل بنا',
    'nav.cta': 'طلب استشارة',
    'nav.phone': '+256 762 079775',
    'nav.email': 'info@mineraldealersafrica.com',
    'nav.tagline': 'بوابة المعادن المعتمدة',
    'nav.compliance': 'متوافق مع قانون التعدين الأوغندي لعام 2022',
    'nav.spot': 'السعر الفوري للذهب LBMA',

    'lang.switched': 'تم تحديث لغة النظام.',
    'lang.desc': 'الوثائق التنظيمية واستمارات التجارة وقنوات الاتصال المباشرة مهيأة الآن.',

    'hero.badge': 'مصدر معادن معتمد من الفئة أ • كامبالا',
    'hero.title': 'مسارات سيادية آمنة للذهب والمعادن الأفريقية',
    'hero.desc': 'تحت حوكمة تنظيمية صارمة مع اختبارات تحليل ثنائية التعمية في مختبرات الدولة وممرات تصفية مصرفية آمنة.',
    'hero.primary': 'تصفح المخزون',
    'hero.secondary': 'التحقق من التراخيص'
  },
  lg: {
    'nav.home': 'Ewasooka',
    'nav.about': 'Ebitukwatako',
    'nav.services': 'Emiryimu',
    'nav.marketplace': 'Sunda',
    'nav.miners': "Eby'Abaamanyi",
    'nav.education': 'Sino Okusoma',
    'nav.investor': "Eby'Abasiga Ensingo",
    'nav.blog': 'Amawulire',
    'nav.contact': 'Tuwulize',
    'nav.cta': 'Saba Okwebuzesa',
    'nav.phone': '+256 762 079775',
    'nav.email': 'info@mineraldealersafrica.com',
    'nav.tagline': 'Omulyango gw\'Eby\'Obugagga',
    'nav.compliance': 'Mining Act 2022 owa Uganda',
    'nav.spot': 'Omuwendo gwa LBMA Gold',

    'lang.switched': 'Olubimi lwa kikyusidwa n’obwegendereza.',
    'lang.desc': 'Ebirowoozo byonna n’empapula z’eby’obusuubuzi bikyusiddwa okulaba nti bikuyamba.',

    'hero.badge': 'Abafulumya Eby\'obugagga Ebya Class A • Kampala',
    'hero.title': 'Ekkubo Eky\'obukuumi Ery\'amazima mu nsimbi n\'Eby\'obugagga mu Afrika',
    'hero.desc': 'Chapa tonda n\'obwegendereza wansi w\'amateeka amagobereze, n\'okukebera minerals okusinga mu laboratory za Gavumenti ez\'oku ntikko.',
    'hero.primary': 'Kebera Ebyalimu',
    'hero.secondary': 'Kakasa Layisensi'
  },
  sw: {
    'nav.home': 'Mwanzo',
    'nav.about': 'Kuhusu Sisi',
    'nav.services': 'Huduma',
    'nav.marketplace': 'Soko la Madini',
    'nav.miners': 'Kwa Wachimbaji',
    'nav.education': 'Kituo cha Elimu',
    'nav.investor': 'Kituo cha Wawekezaji',
    'nav.blog': 'Blogu',
    'nav.contact': 'Wasiliana Nasi',
    'nav.cta': 'Omba Ushauri',
    'nav.phone': '+256 762 079775',
    'nav.email': 'info@mineraldealersafrica.com',
    'nav.tagline': 'Lango la Madini Lililothibitishwa',
    'nav.compliance': 'Kuzingatia Sheria ya Madini ya Uganda 2022',
    'nav.spot': 'BEI YA DHAHABU YA SPOT LBMA',

    'lang.switched': 'Lugha ya mfumo imesasishwa.',
    'lang.desc': 'Nyaraka za kisheria, fomu za biashara, na njia za kuelekeza zimeboreshwa sasa.',

    'hero.badge': 'Muuzaji Leseni wa Madini Aliyethibitishwa Class A • Kampala',
    'hero.title': 'Njia Salama na za Kihistoria kwa Dhahabu na Madini ya Afrika',
    'hero.desc': 'Chini ya usimamizi thabiti wa kisheria na upimaji wa maabara za serikali uliothibitishwa na ukorido salama wa escrow wa benki.',
    'hero.primary': 'Hoji Mali Yetu',
    'hero.secondary': 'Thibitisha Leseni'
  },
  zh: {
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.services': '专业服务',
    'nav.marketplace': '矿产贸易',
    'nav.miners': '矿工服务',
    'nav.education': '教育中心',
    'nav.investor': '投资者中心',
    'nav.blog': '行业新闻',
    'nav.contact': '联系我们',
    'nav.cta': '在线咨询',
    'nav.phone': '+256 762 079775',
    'nav.email': 'info@mineraldealersafrica.com',
    'nav.tagline': '严格资质验证的非洲矿产品通道',
    'nav.compliance': '完全符合乌干达2022年最新矿业法案',
    'nav.spot': 'LBMA伦敦金现货价',

    'lang.switched': '系统语言已更新',
    'lang.desc': '法规标准、贸易申请和即时对接渠道均已完成本土化适配优化。',

    'hero.badge': '乌干达国家矿业部 A 级持牌特许出口商 • 坎帕拉',
    'hero.title': '严谨、合规且安全的非洲黄金与贵重矿产出海通道',
    'hero.desc': '在最新民商法规保障下，全部批次商品执行乌干达国家地质实验室双盲火法化验鉴定，配套主权级银行信托托管清算。',
    'hero.primary': '核查现货库存',
    'hero.secondary': '验证牌照资质'
  }
};
