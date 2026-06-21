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
    'hero.secondary': 'Verify Licensing',

    // Optimized High-Trust SEO terms
    'seo.home.title': 'Licensed Gold Exporters Kampala | Mineral Dealers Africa',
    'seo.home.desc': "Africa's Verified Sovereign Sourcing Pipeline. Uganda Mining Act 2022 Compliant. Direct Sourcing from Licensed Exporters with LBMA gold standards Kampala. Secure escrow clearing corridors.",
    'seo.home.keywords': 'Licensed gold exporters Kampala, Uganda Mining Act 2022 Compliant, LBMA gold standards Kampala, Direct Sourcing from Licensed Exporters, gold refinery clearing Uganda',
    'seo.about.title': 'Trading Integrity & Corporate Profile | Mineral Dealers Africa',
    'seo.about.desc': 'Learn about our Kampala-based A-Class mineral export licensing, compliant under Uganda Mining Act 2022, securing genuine LBMA gold standards in Kampala.',
    'seo.about.keywords': 'Kampala gold export license, mineral trading corporation Uganda, gold suppliers East Africa, genuine gold traders Kampala',
    'seo.services.title': 'Physical Assaying & Secured Export Logistics | Mineral Dealers Africa',
    'seo.services.desc': 'Double-blind primary assays at official laboratories, secure escrow clearance, and direct sourcing from licensed exporters. Uganda Mining Act 2022 Compliant.',
    'seo.services.keywords': 'gold assaying kampala, mineral escrow services africa, gold smelting services kenia uganda, gold export logistics',
    'seo.marketplace.title': 'Verified Gold & Rough Stones Inventory | Mineral Dealers Africa',
    'seo.marketplace.desc': 'Review active physical inventories of certified bullion, gold nuggets, and rough cut gemstones. Direct sourcing from licensed exporters under LBMA standards.',
    'seo.marketplace.keywords': 'buy gold uganda, verified gold sellers kampala, direct gold sourcing africa, ethical gold export',
    'seo.miners.title': 'Sovereign Sourcing Gateway For Miners | Mineral Dealers Africa',
    'seo.miners.desc': 'Empowering artisanal and medium-scale miners across East Africa with direct refining, swift state double-blind assay certification, and full compliance under Uganda Mining Act 2022.',
    'seo.miners.keywords': 'artisanal miners uganda, gold refining kampala, mining act compliance, mineral clearance certificates',
    'seo.education.title': 'Compliance, AML, and Mineral Legal Education | Mineral Dealers Africa',
    'seo.education.desc': 'Explore resource manuals on Kampala gold trading regulations, Uganda Mining Act 2022 legal compliance, and LBMA gold standards in Kampala.',
    'seo.education.keywords': 'safeguard gold trading, uganda mining laws, gold export tax, anti money laundering precious metals',
    'seo.investor.title': 'Sovereign Investor Clearing Desk | Mineral Dealers Africa',
    'seo.investor.desc': 'Guaranteed escrow, fully bonded state clearing vaults, and direct sourcing from licensed exporters under LBMA gold standards Kampala.',
    'seo.investor.keywords': 'gold investment africa, mineral escrow uganda, sovereign precious metals clearing, safe deposit kampala',
    'seo.blog.title': 'African Precious Metal Markets & Analysis | Mineral Dealers Africa',
    'seo.blog.desc': 'Read regular updates on regulatory guidelines, price actions in Kampala, and detailed explanations of the Uganda Mining Act 2022.',
    'seo.blog.keywords': 'african gold market updates, kampala gold refine news, mineral trade legal blog',
    'seo.contact.title': 'Secure Kampala Refining Desk Contact | Mineral Dealers Africa',
    'seo.contact.desc': 'Connect with our primary licensing administrators and Kampala refining desk coordinators. Initiate double-blind assay booking.',
    'seo.contact.keywords': 'contact gold exporters kampala, office mineral dealers africa, secure precious metals trade'
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
    'hero.secondary': 'Vérifier la Licence',

    // Optimized High-Trust SEO terms
    'seo.home.title': 'Exportateurs d\'Or Agréés à Kampala | Mineral Dealers Africa',
    'seo.home.desc': 'Pipeline d\'approvisionnement souverain vérifié en Afrique. Conforme au Uganda Mining Act 2022. Sourcing direct auprès d\'exportateurs agréés selon les normes d\'or de la LBMA à Kampala.',
    'seo.home.keywords': 'Exportateurs d\'or agréés Kampala, Conforme Uganda Mining Act 2022, normes d\'or LBMA Kampala, sourcing direct exportateurs',
    'seo.about.title': 'Intégrité Commerciale & Profil de l\'Entreprise | Mineral Dealers Africa',
    'seo.about.desc': 'Découvrez notre licence d\'exportation de classe A à Kampala, conforme à la loi minière de l\'Ouganda (Mining Act 2022), garantissant les normes LBMA.',
    'seo.about.keywords': 'licence exportation or Kampala, courtier minerai Ouganda, or éthique Afrique de l\'Est',
    'seo.services.title': 'Analyses Physiques et Logistique d\'Exportation Sécurisée | MDA',
    'seo.services.desc': 'Analyses en double aveugle dans les laboratoires d\'État, séquestre sécurisé et sourcing direct auprès d\'exportateurs agréés de classe A.',
    'seo.services.keywords': 'analyse d\'or ouganda, escrow or afrique, raffinage or kampala',
    'seo.marketplace.title': 'Inventaire Vérifié de Lingots et Pierres | Mineral Dealers Africa',
    'seo.marketplace.desc': 'Consultez nos inventaires physiques certifiés d\'or et de pierres précieuses brutes. Sourcing direct sous l\'égide des lois ougandaises.',
    'seo.marketplace.keywords': 'acheter de l\'or ouganda, lingots certifiés kampala, canal d\'achat direct minéraux',
    'seo.miners.title': 'Portail de Régulation pour les Mineurs | Mineral Dealers Africa',
    'seo.miners.desc': 'Soutenir les mineurs artisanaux avec des processus de raffinage, d\'analyse gouvernementale et de mise en conformité au Uganda Mining Act 2022.',
    'seo.miners.keywords': 'mines artisanales ouganda, certificat conformité minière, exportation légale or',
    'seo.education.title': 'Éducation à la Conformité et Législation Minière | MDA',
    'seo.education.desc': 'Familiarisez-vous avec la loi minière ougandaise (Uganda Mining Act 2022) et les procédures anti-blanchiment pour le négoce d\'or à Kampala.',
    'seo.education.keywords': 'lois minières ouganda, conformité aml ouganda, taxes exportation or',
    'seo.investor.title': 'Espace Investisseurs & Comptes Séquestres | Mineral Dealers Africa',
    'seo.investor.desc': 'Transactions sécurisées via comptes séquestres bancaires et processus d\'exportation certifiés conformes aux normes LBMA à Kampala.',
    'seo.investor.keywords': 'investissement or ouganda, coffre-fort kampala, achat or sécurisé',
    'seo.blog.title': 'Analyses et Nouvelles du Marché Minier Africain | MDA',
    'seo.blog.desc': 'Toutes les actualités sur les lois minières, les cours de l\'or à Kampala et l\'évolution du Uganda Mining Act 2022.',
    'seo.blog.keywords': 'actualité minière Afrique, blog or kampala',
    'seo.contact.title': 'Contacter notre Bureau de Kampala | Mineral Dealers Africa',
    'seo.contact.desc': 'Entrez en contact avec nos administrateurs agréés et planifiez vos analyses physiques dans nos laboratoires ougandais.',
    'seo.contact.keywords': 'contact exportateur or kampala, adresse mineral dealers africa'
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
    'hero.secondary': 'التحقق من التراخيص',

    // Optimized High-Trust SEO terms
    'seo.home.title': 'مصدرين ذهب مرخصين كامبالا | توريد مباشر من المصدرين المرخصين في أوغندا | معايير الذهب لـ LBMA كامبالا',
    'seo.home.desc': 'بوابة المعادن الإفريقية المعتمدة والسيادية. متوافق مع قانون التعدين الأوغندي لعام 2022. توريد مباشر من المصدرين المرخصين مع معايير الذهب لـ LBMA كامبالا للتصفية والتصدير الآمن.',
    'seo.home.keywords': 'مصدرين ذهب مرخصين كامبالا, متوافق مع قانون التعدين الأوغندي لعام 2022, معايير الذهب لـ LBMA كامبالا, توريد مباشر من المصدرين المرخصين, تصدير الذهب من أوغندا',
    'seo.about.title': 'النزاهة التجارية وملف الشركة | مصدرين ذهب مرخصين كامبالا',
    'seo.about.desc': 'تعرف على تراخيص تصدير المعادن من الفئة أ في كامبالا، المتوافقة مع قانون التعدين الأوغندي لعام 2022 لضمان معايير الذهب لـ LBMA كامبالا.',
    'seo.about.keywords': 'ترخيص تصدير الذهب كامبالا, شركة تجارة المعادن أوغندا, توريد الذهب المباشر',
    'seo.services.title': 'فحص المعادن والخدمات اللوجستية الآمنة للتصدير | معايير الذهب لـ LBMA كامبالا',
    'seo.services.desc': 'فحوصات معملية حكومية ثنائية التعمية، عمليات تصفية مصرفية آمنة وضمان كامل متوافق مع قانون التعدين الأوغندي لعام 2022 لتصدير الذهب والروح.',
    'seo.services.keywords': 'مختبر فحص الذهب أوغندا, شحن المعادن الثمينة والذهب, تصفية مالية الذهب',
    'seo.marketplace.title': 'مخزون تجارة المعادن المعتمد والذهب الخالص | توريد مباشر من المصدرين المرخصين',
    'seo.marketplace.desc': 'تصفح مخزوننا الفعلي المعتمد من سبائك الذهب الخالصة، قطع الذهب الخام، والمعادن الكريمة المتاحة للتصدير بموجب القوانين النافذة.',
    'seo.marketplace.keywords': 'شراء ذهب أوغندا, سبائك ذهب مرخصة كامبالا, سوق المعادن أفريقيا',
    'seo.miners.title': 'بوابة تصدير وتسهيلات لعمال المناجم | توريد مباشر من المصدرين المرخصين',
    'seo.miners.desc': 'دعم عمال المناجم الصغار والحرفيين من خلال التكرير والتصفية والتوثيق القانوني المتوافق بالكامل مع قانون التعدين الأوغندي لعام 2022.',
    'seo.miners.keywords': 'عمال المناجم الحرفيين أوغندا, تكرير الذهب كامبالا, رخصة التعدين أوغندا',
    'seo.education.title': 'التثقيف القانوني والامتثال والتشريعات التعدينية في أوغندا | قانون التعدين الأوغندي لعام 2022',
    'seo.education.desc': 'دليلك الشامل للقوانين واللوائح التعدينية في أوغندا وقواعد مكافحة غسيل الأموال في تجارة المعادن الثمينة.',
    'seo.education.keywords': 'قوانين التعدين أوغندا, مكافحة غسيل الأموال المعادن, ضرائب تصدير الذهب أوغندا',
    'seo.investor.title': 'مكتب المستثمر للتخليص والخدمات المصرفية الآمنة | معايير الذهب لـ LBMA كامبالا',
    'seo.investor.desc': 'خطوط استثمار ممتازة وضمانات بنكية وحسابات ضمان معتمدة للتوريد المباشر من المصدرين المرخصين بموجب معايير الذهب لـ LBMA كامبالا.',
    'seo.investor.keywords': 'الاستثمار في الذهب أفريقيا, حسابات الضمان أوغندا, المقاصة السيادية للمعادن',
    'seo.blog.title': 'أخبار وتقارير أسواق المعادن في أفريقيا | قانون التعدين الأوغندي لعام 2022',
    'seo.blog.desc': 'تحليلات سوق الذهب الأفريقي، وتحديثات الأسعار في كامبالا، وتغطيات الامتثال لقانون التعدين الأوغندي لعام 2022.',
    'seo.blog.keywords': 'سوق الذهب الأفريقي, أخبار التعدين أوغندا, أسعار الذهب كامبالا',
    'seo.contact.title': 'اتصل بمكتب التصفية وإدارة التراخيص في كامبالا | توريد مباشر',
    'seo.contact.desc': 'تواصل معنا لحجز عمليات فحص الذهب والمعادن أو للحصول على استشارة قانونية تجارية من وكلائنا المرخصين.',
    'seo.contact.keywords': 'رقم مصدرين ذهب كامبالا, عنوان شركة ميتال ديلرز أفريقيا'
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
    'hero.secondary': 'Kakasa Layisensi',

    // Optimized High-Trust SEO terms
    'seo.home.title': 'Abafulumya Eby\'obugagga Ebya Class A Kampala | Uganda Mining Act 2022 owa Uganda',
    'seo.home.desc': 'Ekkubo ly\'amazima ery\'ebya minerals mu Afrika. Mining Act 2022 owa Uganda compliant. Sourcing ey\'amazima n\'obukuumi bwa sente mu banka kutandikira mu Kampala.',
    'seo.home.keywords': 'Kampala gold exporters, Uganda Mining Act 2022, LBMA standards Kampala, abafulumya eby\'obugagga, Uganda minerals trade',
    'seo.about.title': 'Ebitukwatako n\'Obwesigwa mu Busuubuzi | Mineral Dealers Africa',
    'seo.about.desc': 'Kakasa byonna ebitukwatako n\'emigendo gyaffe egy\'obusubuzi egy\'amateeka gyonna mu Uganda ne Kampala.',
    'seo.about.keywords': 'ebitukwatako mineral dealers, Kampala gold license, Uganda gold buyers',
    'seo.services.title': 'Okukebera Minerals n\'Okuzifulumya mu Mateeka | Kampala Minerals',
    'seo.services.desc': 'Kebera mineral yo mu laboratory ya gavumenti n\'obwegendereza era naffe tukuwe layisensi mu mateeka ag\'omulembe.',
    'seo.services.keywords': 'okukebera gold kampala, gold refining uganda, okusindika gold ebuvanjuba',
    'seo.marketplace.title': 'Sunda n\'Omuwendo gw\'Ebyalimu mu Layisensi | Mineral Dealers Africa',
    'seo.marketplace.desc': 'Laba eby\'obugagga ebya gold ne rough stones ebiri mu inventory yaffe mu Kampala ebyesigika.',
    'seo.marketplace.keywords': 'gula gold kampala, certified gold uganda, rough minerals trading',
    'seo.miners.title': 'Emiryimu Gy\'Abasimi b\'Eby\'obugagga Abamazima | Uganda Mining Act 2022',
    'seo.miners.desc': 'Kuyamba abasimi abatonotono n\'abanene okufuna layisensi n\'okulaba nti byakasibwa gavumenti mu mateeka.',
    'seo.miners.keywords': 'abasimi ba gold uganda, okuyamba abasimi, amateeka g\'okusima minerals',
    'seo.education.title': 'Sino Okusoma n\'Amateeka G\'okusima Minerals mu Uganda',
    'seo.education.desc': 'Soma ebikwata ku Uganda Mining Act 2022, obusubuzi mu mateeka, n\'engeri y\'okusasula omusingo.',
    'seo.education.keywords': 'okusoma amateeka uganda, gold laws kampala, anti money laundering precious metals uganda',
    'seo.investor.title': 'Ekitongole ky\'Abaweerezebwa ne Bank Escrow | Mineral Dealers Africa',
    'seo.investor.desc': 'Okukuuma ensimbi z\'abasiga ensimbi ne bank escrow ey\'amazima n\'okutuukiriza ebya LBMA ebya Kampala.',
    'seo.investor.keywords': 'abasiga ensingo ku gold uganda, mineral escrow kampala, secure investment uganda',
    'seo.blog.title': 'Amawulire n\'Okukebera Eby\'obusuubuzi mu Afrika | MDA',
    'seo.blog.desc': 'Amagezi n\'amawulire ku mbeera ya gold mu Kampala, Uganda, ne East Africa.',
    'seo.blog.keywords': 'amawulire ga minerals uganda, kampala gold refine updates',
    'seo.contact.title': 'Tuwulize mu Kampala Sourcing Desk | Mineral Dealers Africa',
    'seo.contact.desc': 'Tuwulize ofisi yaffe esangibwa mu Kampala okufuna obuyambi era n\'okupima minerals zo.',
    'seo.contact.keywords': 'endagiriro ya mineral dealers africa, essimu ya basubuzi ba gold Kampala'
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
    'hero.desc': 'Chini ya usimamizi thabiti wa kisheria and upimaji wa maabara za serikali uliothibitishwa na ukorido salama wa escrow wa benki.',
    'hero.primary': 'Hoji Mali Yetu',
    'hero.secondary': 'Thibitisha Leseni',

    // Optimized High-Trust SEO terms
    'seo.home.title': 'Wauzaji Leseni wa Madini Aliyethibitishwa Class A Kampala | Kuzingatia Sheria ya Madini ya Uganda 2022 | BEI YA DHAHABU YA SPOT LBMA',
    'seo.home.desc': 'Lango la Madini Lililothibitishwa Afrika Mashariki. Kuzingatia Sheria ya Madini ya Uganda 2022. Wauzaji dhahabu wenye leseni na upimaji rasmi wa maabara za serikali.',
    'seo.home.keywords': 'Wauzaji dhahabu Kampala, Sheria ya Madini Uganda 2022, viwango vya dhahabu LBMA Kampala, wauzaji madini waliothibitishwa Kampala',
    'seo.about.title': 'Kuhusu Sisi na Uaminifu wa Biashara | Mineral Dealers Africa',
    'seo.about.desc': 'Fahamu historia yetu na cheti halisi cha Class A mineral export chini ya sheria ya madini ya Uganda 2022 hapa Kampala.',
    'seo.about.keywords': 'leseni ya dhahabu Kampala, historia ya mineral dealers, kampuni ya madini Uganda',
    'seo.services.title': 'Upimaji wa Dhahabu na Usafirishaji Salama | Viwango vya LBMA Kampala',
    'seo.services.desc': 'Upimaji huru wa serikali, huduma salama za escrow za benki, na ugavi wa moja kwa moja kutoka kwa wauzaji wenye leseni kisheria.',
    'seo.services.keywords': 'upimaji wa dhahabu Kampala, huduma ya escrow uganda, usafirishaji wa dhahabu',
    'seo.marketplace.title': 'Soko la Madini na Mali Yenye Leseni | Mineral Dealers Africa',
    'seo.marketplace.desc': 'Chunguza madini yetu ya dhahabu yaliyohakikiwa na maabara ya serikali. Wauzaji wa moja kwa moja wenye leseni kamili.',
    'seo.marketplace.keywords': 'nunua dhahabu uganda, wauzaji dhahabu Kampala, dhahabu safi ya afrika',
    'seo.miners.title': 'Lango la Usaidizi kwa Wachimbaji Madini | Sheria ya Madini ya Uganda 2022',
    'seo.miners.desc': 'Kusaidia wachimbaji wadogo na wa kati kupata vipimo bora vya maabara na vibali vya kisheria vya kuuza nje dhahabu yao.',
    'seo.miners.keywords': 'wachimbaji wadogo uganda, kusafisha dhahabu kampala, vibali vya maabara ya serikali',
    'seo.education.title': 'Kituo cha Elimu ya Kisheria ya Madini | Sheria ya Uganda ya 2022',
    'seo.education.desc': 'Fahamu masharti ya kisheria ya kuuza madini, utoroshaji wa madini, kodi ya kuuza dhahabu na usalama chini ya kisheria ya Uganda.',
    'seo.education.keywords': 'sheria ya madini uganda, utoroshaji wa fedha dhahabu, ushuru wa dhahabu kampala',
    'seo.investor.title': 'Kituo cha Wawekezaji & Escrow Salama za Benki | Viwango vya LBMA Kampala',
    'seo.investor.desc': 'Dhamana maalum za benki na mifumo salama ya ununuzi na usafirishaji wa dhahabu inayofuata viwango vya LBMA hapa Kampala.',
    'seo.investor.keywords': 'uwekezaji wa dhahabu afrika, escrow ya madini uganda, uwekezaji thabiti wa dhahabu',
    'seo.blog.title': 'Uchambuzi na Habari za Sekta ya Madini Afrika Mashariki | MDA',
    'seo.blog.desc': 'Makala na habari za kila wakati kuhusu bei ya dhahabu Kampala, na maboresho ya Sheria ya Madini ya Uganda 2022.',
    'seo.blog.keywords': 'habari za madini uganda, kodi ya dhahabu updates',
    'seo.contact.title': 'Mwasiliano wa Ofisi Yetu ya Kampala | Mineral Dealers Africa',
    'seo.contact.desc': 'Wasiliana na wataalamu wetu Kampala kupanga miadi ya upimaji na kuangalia leseni na hati zilizoidhinishwa.',
    'seo.contact.keywords': 'ramani ya mineral dealers kampala, nambari ya simu dhahabu kampala'
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
    'hero.secondary': '验证牌照资质',

    // Optimized High-Trust SEO terms
    'seo.home.title': '乌干达坎帕拉特许持牌黄金出口商 | 完全合规乌干达2022年最新矿业法案 | 坎帕拉LBMA伦敦金标准大宗采购平台',
    'seo.home.desc': '非洲官方资质审查贵金属物流通道。完全符合乌干达2022年最新矿业法案，严格执行坎帕拉LBMA伦敦金标准，以及坎帕拉总部安全信托清算与特许出口服务。从持牌出口商直接采购精炼及粗金产品。',
    'seo.home.keywords': '乌干达坎帕拉黄金出口商, 乌干达2022年最新矿业法案合规, 坎帕拉LBMA黄金标准, 从持牌出口商直接采购, 非洲黄金清算物流',
    'seo.about.title': '关于我们与合规贸易机制 | 坎帕拉持牌特许出口商-非洲矿业联络处',
    'seo.about.desc': '了解我们在乌干达坎帕拉持有的A级（Class A）贵金属及特许矿产出口牌照，全部流程完全合规乌干达2022年最新矿业法案，严格匹配坎帕拉LBMA黄金检测物理标准。',
    'seo.about.keywords': '乌干达黄金出口牌照, 矿产商非洲联络处, 坎帕拉黄金精炼公司, 坎帕拉Class A特许证合规',
    'seo.services.title': '双盲物理精炼化验、保税仓储与国际特许出口清算 | 乌干达矿业法合规',
    'seo.services.desc': '主权级银行信托托管清算。提供乌干达国家地质实验室双盲火法化验、安全跨境保税物流、以及完全合规乌干达2022年最新矿业法案的特许出口申报服务。',
    'seo.services.keywords': '黄金检测化验坎帕拉, 主权信托托管清算, 乌干达国家地质实验室检测, 非洲金条报关出口',
    'seo.marketplace.title': '持牌可售矿产及现货金锭库存目录 | 完全合规乌干达矿业法',
    'seo.marketplace.desc': '核查我们的特许现货精炼金锭（LBMA品质）、天然金块以及未加工彩宝库存。全部批次配有国家主权检测报告，从持牌出口商直接采购。',
    'seo.marketplace.keywords': '乌干达黄金大宗采购, 现货金锭现款坎帕拉, 非洲持牌黄金源头渠道, 天然高纯度粗金块',
    'seo.miners.title': '东非合作矿区与矿工出海服务口岸 | 乌干达特许持牌精炼化验',
    'seo.miners.desc': '为乌干达和东非各地中小型矿主、合作矿区提供符合最新乌干达2022矿业法案的化验检测、合规审计、精炼与通关直通车。',
    'seo.miners.keywords': '非洲手工开采金矿合作, 坎帕拉双盲金块化验, 坎帕拉黄金精炼仓储, 乌干达采矿许证申报',
    'seo.education.title': '最新反洗钱（AML）合规指引与乌干达矿业最新法规学习中心',
    'seo.education.desc': '系统学习乌干达2022年最新矿业法案法律效力、反洗钱大宗商品合规背景审查、坎帕拉LBMA伦敦金检验流程、以及乌干达矿产出口关税标准。',
    'seo.education.keywords': '乌干达2022最新矿业法, 反洗钱合规精炼黄金, 坎帕拉贵金属出口关税, 黄金买家防诈骗指引',
    'seo.investor.title': '主权级信托清算与国际主权金属交易通道 | 特许出口商直供',
    'seo.investor.desc': '专为跨国大宗买家设计的信托托管（Escrow）机制与国家地质实验室双盲火法检测机制，保障自持牌出口商直接采购的高纯度LBMA黄金资产交收安全。',
    'seo.investor.keywords': '乌干达黄金主权信托托管, 东非贵金属投资通道, 持牌黄金生产交易流, 坎帕拉LBMA标准',
    'seo.blog.title': '非洲贵金属市况、乌干达采矿法律与黄金精炼深度研报库',
    'seo.blog.desc': '由坎帕拉合规研究团队撰写的东非大宗矿产政策洞察、坎帕拉黄金现货最新行情变化与乌干达采矿法合规进展。',
    'seo.blog.keywords': '非洲黄金采购趋势分析, 东非贵贵金属市况动态, 乌干达最新矿区政策',
    'seo.contact.title': '联系我们在坎帕拉的黄金精炼与出口特许申报总部 | 特许出口商直通车',
    'seo.contact.desc': '致电或预约我们在乌干达坎帕拉的总部的精炼清算柜台，可当场见证双盲取样化验或咨询完全合规乌干达2022年最新矿业法案的法务及买家程序。',
    'seo.contact.keywords': '乌干达Kampala总部电话, 矿产商非洲联络处地址, 怎么在乌干达安全买黄金'
  }
};
