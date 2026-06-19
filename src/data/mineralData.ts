import { MineralListing, BlogArticle, EducationGuide } from '../types';

export const INITIAL_MARKETPLACE_LISTINGS: MineralListing[] = [
  {
    id: 'lst-gold-bar-01',
    title: 'LBMA Certified Bullion Gold Bars',
    category: 'Gold',
    type: 'Gold Bars',
    origin: 'Uganda',
    purity: '99.99% (24 Karat)',
    quantity: '500 kg (Available in parts)',
    photoUrl: 'https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&q=80&w=600',
    supplierName: 'Kigezi Mining Cooperative (Licensed)',
    isSupplierVerified: true,
    supplierLocation: 'Mbarara & Kampala, Uganda',
    description: 'Fully assayed LBMA standard gold bars. Secured and stored in a high-security Kampala treasury. Available for FOB Uganda or fully cleared CIF shipment only after complete neutral assay verification by the Directorate of Geological Survey and Mines (DGSM). All export documentation fully in order.',
    specifications: [
      { label: 'Form', value: '1kg Bars / Bullion' },
      { label: 'Assay Certificate', value: 'DGSM Uganda & international report' },
      { label: 'Conflict-Free Status', value: 'Certified conflict-free' },
      { label: 'Taxes & Royalties', value: 'Fully paid locally' }
    ],
    dateAdded: '2026-06-15'
  },
  {
    id: 'lst-gold-nugget-01',
    title: 'High-Purity Alluvial Gold Nuggets',
    category: 'Gold',
    type: 'Gold Nuggets',
    origin: 'Tanzania',
    purity: '94.2% - 96.8% (22K+ equivalent)',
    quantity: '120 kg',
    photoUrl: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=600',
    supplierName: 'Victoria Goldfields Consortium',
    isSupplierVerified: true,
    supplierLocation: 'Geita District, Tanzania',
    description: 'Stunning premium alluvial gold nuggets harvested from licensed artisanal and small-scale partnerships in Geita, Tanzania. Excellent for premium collectibles, jewelry manufacturing, or refining assets. Full provenance tracking, certified ethically sourced, and compliant under regional mining codes.',
    specifications: [
      { label: 'Size Range', value: '5g to 150g individual nuggets' },
      { label: 'Purity Average', value: '95.5% pure element' },
      { label: 'Packaging', value: 'Security-sealed metal containers' },
      { label: 'Origin Verification', value: 'Tanzanian Ministry of Minerals' }
    ],
    dateAdded: '2026-06-17'
  },
  {
    id: 'lst-gold-dust-01',
    title: 'Alluvial Gold Dust Concentrate',
    category: 'Gold',
    type: 'Gold Dust',
    origin: 'DR Congo',
    purity: '92.5% Average Purity',
    quantity: '250 kg',
    photoUrl: 'https://images.unsplash.com/photo-1610375229632-c7158c35a537?auto=format&fit=crop&q=80&w=600',
    supplierName: 'Ituri Artisanal Mining Union',
    isSupplierVerified: false,
    supplierLocation: 'Bunia, DR Congo (Processed in Uganda)',
    description: 'Gold dust raw concentrate sourced directly from community smallholders. Exported legally via official regional trading houses and processed in Kampala under strict due diligence compliance. Ideal for buyers with dedicated refinery contracts.',
    specifications: [
      { label: 'Moisture Content', value: '< 0.5%' },
      { label: 'Refinery Status', value: 'Unrefined raw concentrate' },
      { label: 'Due Diligence Route', value: 'OECD Annex II fully screened' },
      { label: 'Packaging', value: 'Industrial tamper-evident bags' }
    ],
    dateAdded: '2026-06-18'
  },
  {
    id: 'lst-rough-diamond-01',
    title: 'Kimberley Approved Rough Diamonds',
    category: 'Diamonds',
    type: 'Diamonds',
    origin: 'Angola',
    purity: 'VVS2 - VS1 Clarity Range',
    quantity: '4,500 Carats',
    photoUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=600',
    supplierName: 'Lunda Sul Diamond Syndicate',
    isSupplierVerified: true,
    supplierLocation: 'Saurimo, Angola',
    description: 'Direct consignment of gem-quality rough diamonds carrying authentic Kimberley Process Certificates. Fully cleared for exports. Parcels range from 2ct up to 18ct individual rough crystals. Inspected, sealed, and audited in cooperation with SODIAM authorization protocols.',
    specifications: [
      { label: 'Color Grade', value: 'D to H color range' },
      { label: 'Kimberley Certificate', value: 'KPCS Certified - fully compliant' },
      { label: 'Shape Type', value: 'Octahedral and dodecahedral crystals' },
      { label: 'Audit Status', value: 'Double-custody security verified' }
    ],
    dateAdded: '2026-06-12'
  },
  {
    id: 'lst-emerald-01',
    title: 'Raw Deep Green Emerald Lot',
    category: 'Gemstones',
    type: 'Emerald',
    origin: 'Zambia',
    purity: 'High Transparency / Rich Saturation',
    quantity: '15,000 Carats',
    photoUrl: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=600',
    supplierName: 'Kagem Region Smallholders Syndicate',
    isSupplierVerified: true,
    supplierLocation: 'Lufwanyama, Zambia',
    description: 'Exquisite Zambian emerald parcel exhibiting remarkable chromium-rich signature green hues. Exhibits phenomenal crystallization, highly transparent fields, and pristine structural integrity suitable for premium gemstone faceting.',
    specifications: [
      { label: 'Saturation', value: 'Intense Emerald Green' },
      { label: 'Lot Type', value: 'Mixed faceting and high-grade cabochon' },
      { label: 'Treatment', value: 'Unheated / completely natural' },
      { label: 'Provenance Licence', value: 'GEM-ZAM-2209' }
    ],
    dateAdded: '2026-06-14'
  },
  {
    id: 'lst-tanzanite-01',
    title: 'Intense Blue-Violet Tanzanite rough crystals',
    category: 'Gemstones',
    type: 'Tanzanite',
    origin: 'Tanzania',
    purity: 'Eye-Clean Premium Grade (unheated)',
    quantity: '8,000 Carats',
    photoUrl: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=600',
    supplierName: 'Mirerani Gems Cooperative',
    isSupplierVerified: true,
    supplierLocation: 'Manyara / Mirerani Hills, Tanzania',
    description: 'Rare tanzanite parcel exhibiting high trichroic behavior: transitioning between deep indigo blues, violets, and reddish-pinks. Mined strictly within Block D of the Mirerani Hills under official governmental supervision. Shipped with official mineral certificates of origin.',
    specifications: [
      { label: 'Color Grade', value: 'AAA grade deep blue-violet' },
      { label: 'Source', value: 'Mirerani Hills Mine Block D' },
      { label: 'Transparency', value: 'Excellent eye-clean potential' },
      { label: 'Export Tax Status', value: 'Fully cleared, Royalties resolved' }
    ],
    dateAdded: '2026-06-10'
  },
  {
    id: 'lst-amethyst-01',
    title: 'High-Grade Purple Quartz Amethyst Geodes',
    category: 'Gemstones',
    type: 'Amethyst',
    origin: 'Uganda',
    purity: 'Deep Purple Crystallization',
    quantity: '12 Metric Tons',
    photoUrl: 'https://images.unsplash.com/photo-1598115598188-f5bc81297e55?auto=format&fit=crop&q=80&w=600',
    supplierName: 'Karamoja Mining Alliance',
    isSupplierVerified: true,
    supplierLocation: 'Moroto District, Uganda',
    description: 'Bulk industrial and carving grade Amethyst geological points and geodes. Features rich, saturated dark purples representing high concentrations of iron impurities. Perfect for international importers, luxury design houses, and architectural applications.',
    specifications: [
      { label: 'Grade Type', value: 'Grade AA deep violet crystal points' },
      { label: 'Quantity Format', value: 'Palletized wood crates' },
      { label: 'Weight Range', value: '2kg to 45kg individual specimens' },
      { label: 'Assistance Offered', value: 'Full loading and freight forwarding support' }
    ],
    dateAdded: '2026-06-14'
  }
];

export const EDUCATION_GUIDES: EducationGuide[] = [
  {
    id: 'guide-buy-gold',
    title: 'How to Safely Buy Gold in Africa',
    shortSummary: 'An end-to-end framework on the legal pathways, assaying processes, and logistics necessary for successful physical gold purchasing.',
    iconName: 'ShieldAlert',
    slug: 'how-to-buy-gold-africa',
    sections: [
      {
        heading: '1. Never Buy Gold in Hotel Rooms or Private Homes',
        paragraphs: [
          'Legitimate gold trading in East Africa is bound by rigorous municipal and federal legislation. Authorized dealers and mining groups must strictly negotiate inside official company boardrooms, licensed offices, government-certified vaults, or secured bank chambers.',
          'Transactions proposed in covert settings—such as boutique hotels, rental apartments, or remote residential areas—almost universally point to scams or illicit activities. A licensed dealer will always invite you to transparent, verified environments.'
        ]
      },
      {
        heading: '2. Insist on Directorate-Level Assaying',
        paragraphs: [
          'Never acquire minerals without verifying purity at respected governmental facilities. In Uganda, the Directorate of Geological Survey and Mines (DGSM) in Entebbe provides the definitive assay benchmark. Their state-of-the-art laboratory performs fire testing and spectrometer scans to generate ironclad certificates.',
          'Ensure that sample picking for the assay is monitored by your own appointed, independent legal or consulting representatives like Mineral Dealers Africa to prevent substitution.'
        ]
      },
      {
        heading: '3. Understand FOB vs CIF Delivery Terms',
        paragraphs: [
          'In mineral purchasing, FOB (Free On Board) requires the seller to handle local clearance and loading at Entebbe Airport (EBB) or regional hubs. Once on the carrier, risks transfer to the buyer.',
          'Under CIF (Cost, Insurance, and Freight), the seller pays for transportation to the port of destination. Be highly cautious of dealers offering 100% CIF delivery with zero upfront costs or escrow; this is a classic trap where fake transport fees are requested midway.'
        ]
      }
    ]
  },
  {
    id: 'guide-fraud-prevention',
    title: 'Gold Fraud Prevention & Scam Indicators',
    shortSummary: 'Learn the core warnings of gold scams: "below-market discount traps", fake export fees, and fraudulent "Ministry of Mines" communications.',
    iconName: 'AlertOctagon',
    slug: 'gold-fraud-prevention',
    sections: [
      {
        heading: 'The Fallacy of Cheap Gold',
        paragraphs: [
          'Gold is a highly liquid global commodity tied directly to LBMA spot prices. Sizable discounts (e.g., 20% to 40% below market spot) are structurally impossible. No licensed miner or trading company will sell gold below spot value when they can immediately walk into a refinery and get paid 98% of LBMA value.',
          'Anyone offering gold at a heavy discount is setting a financial trap. They will bait you with a small legitimate sample, followed by demands for massive upfront taxes, transport costs, or refinery duties.'
        ]
      },
      {
        heading: 'Fake Government Documentation',
        paragraphs: [
          'Scammers regularly generate elaborate, forged documents decorated with official-looking stamps, falsified signatures, and mock Ministry seals.',
          'Always cross-check certificate numbers directly with the regulatory directories. In Uganda, all mineral dealer licenses and export permits can be queried directly via the DGSM Online Mining Cadastre Portal. Mineral Dealers Africa provides on-the-ground document verification to confirm real authorizations.'
        ]
      },
      {
        heading: 'The Escrow and Clearing Trap',
        paragraphs: [
          'In many scams, buyers are urged to transfer funds to a private bank account or an unverified escrow service run by legal accomplices. They will claim that local customs will not release the cargo until specific administrative fines, "anti-terror clearances", or processing fees are paid.',
          'Always utilize internationally recognized transit vaults (such as Brinks, G4S, or Malca-Amit) and reputable corporate trust structures that operate independently of local individual bank accounts.'
        ]
      }
    ]
  },
  {
    id: 'guide-mining-laws',
    title: 'De-mystifying African Mining Laws',
    shortSummary: 'Understand the legal frameworks, licensing rules, and environmental rules governing direct mineral investments in East Africa.',
    iconName: 'BookOpen',
    slug: 'african-mining-laws',
    sections: [
      {
        heading: 'Regulatory Framework in Uganda',
        paragraphs: [
          'Uganda operates under the Mining Act of 2022. This updated framework enforces high corporate accountability, regional mineral value addition, and strict licensing protocols. It classifies minerals under three tiers: Large-scale, medium-scale, and small-scale/artisanal licenses.',
          'Exporting unprocessed minerals is strictly regulated under Ugandan law. This policy promotes local mineral refineries and cutting centers, meaning raw gold must typically undergo refining to standard 99.5%+ purities before permanent export.'
        ]
      },
      {
        heading: 'Responsible and Ethical Mineral Sourcing',
        paragraphs: [
          'International regulatory directives (such as the Dodd-Frank Act Section 1502 and OECD Due Diligence Guidelines) mandate that global buyers trace mineral provenance. Buyers must confirm that their minerals do not finance conflict, support armed actors, or source from illicit child labor.',
          'Mineral Dealers Africa maintains rigid compliance, requiring all listed marketplace cooperatives to pass strict site audits and document chain-of-custodies before they can earn our "Verified Supplier Badge".'
        ]
      }
    ]
  }
];

export const BLOG_POSTS: BlogArticle[] = [
  {
    id: 'blog-01',
    title: 'How to Find Licensed Gold Dealers in Uganda: The Definitive Investor Guide',
    slug: 'gold-dealers-in-uganda-guide',
    excerpt: 'Navigating the mineral trade landscape in Kampala and Entebbe. Learn how to verify mining licenses, check DGSM registries, and prevent financial loss when buying raw gold.',
    content: `
The Ugandan gold market has grown into a significant regional hub for precious metal trade in East Africa. However, for international investors, jewelers, and institutional buyers, knowing how to distinguish a genuine, licensed dealer from fraudulent operators is the single most important step for safe transactions.

### The Licensing Landscape in Uganda
In Uganda, mineral transactions and activities are strictly governed by the **Directorate of Geological Survey and Mines (DGSM)**, located in Entebbe. To legally trade, hold, refine, or export gold, a company must possess a valid, up-to-date license.

These licenses come in several distinct legal structures:
1. **Mineral Dealer License**: Authorizes the company to buy, sell, and trade processed or raw gold within the country.
2. **Gold Refining License**: Granted only to professional refineries with state-of-the-art facilities capable of upgrading purity to investment-quality grades (typically 99.5%+ or above).
3. **Mineral Export Permit**: Re-issued for every specific parcel shipped internationally, ensuring all taxes, royalties, and compliance reports are fully cleared.

### Critical Verification Steps
When seeking reliable **gold dealers in Uganda**, never rely solely on glossy paper certificates shown at initial meetings. Follow this step-by-step audit:

1. **Query the National Cadastre**: Request the dealer's specific mineral license number. Genuine credentials can be cross-referenced directly through the DGSM digital systems in Entebbe.
2. **Request Bank-Vault Assay**: Insist on witnessing the extraction and fire-assay of mineral samples in the presence of an independent, internationally accredited laboratory or directly at the Directorate's labs.
3. **Appoint Professional Local Agents**: Working with local partners like **Mineral Dealers Africa** ensures specialized hands-on management. Our physical due diligence reports confirm if a dealer has an active corporate office, verified license, real stockpiles, and legitimate source mines.

*By adhering to these corporate governance rules and avoiding "hotel corridor deals", you can secure pristine Ugandan gold on highly favorable market terms while fully protecting your capital.*
    `,
    category: 'Market Intelligence',
    readTime: '6 min read',
    date: 'June 18, 2026',
    author: 'Andrew Ssewankambo, Director of Compliance',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=600',
    tags: ['Gold Dealers in Uganda', 'Buy Gold in Africa', 'Gold Export Uganda']
  },
  {
    id: 'blog-02',
    title: 'Buy Gold in Africa: Overcoming the 4 Crucial Due Diligence Hurdles',
    slug: 'buy-gold-in-africa-due-diligence',
    excerpt: 'An industry expert breaks down the essential compliance, logistical, and legal protocols required to source conflict-free gold bars and nuggets.',
    content: `
For decades, global markets have recognized the vast geological wealth of Africa. Despite this massive opportunity, purchasing gold and minerals direct from local African sources remains a daunting path for foreign companies due to regulatory complexity and security risks.

To successfully **buy gold in Africa**, you must build an operational pipeline that addresses these four core compliance areas:

### 1. Verification of Chain-of-Custody (Provenance)
International standards, such as the **OECD Due Diligence Guidance for Responsible Supply Chains of Minerals**, mandate that importers track where every ounce of gold was mined.
- Secure mines must be certified conflict-free.
- Smallholder minerals must be channeled through organized, government-supervised artisanal cooperatives.
- Shipped goods must possess clear transportation logs tracing them from the mine gate to the export terminal.

### 2. Spot Price Realism and Market Pricing Structures
Sellers claiming to offer gold bars at "unbelievable pricing" (e.g., $40,000 per kg when market spot is $75,000 per kg) are setting elaborate traps. Gold is globally valued. No legitimate mining cooperative or licensed trader will sell below international rates when refineries are ready to pay full spot price instantly inside major local cities. Secure buyers always operate based on market indices (e.g., LBMA Spot Minus 2% to 4% discount representing local logistics and purification costs).

### 3. Securing Neutral Third-Party Assaying
Never purchase gold based on a seller's personal scale or basic acid test. Purity evaluations must be completed by a neutral party. Our partners use state-of-the-art XRF (X-ray Fluorescence) technology or Fire Assay methodologies to guarantee you pay only for pure fine gold content.

### 4. Direct Logistics and Custody Management
The physical transfer of assets must be safe and secure. Working with vetted gold couriers like G4S or Brinks ensures that precious metals remain in secure hands throughout local transfer, customs clearance, and flight loading.

Partnering with localized consultants like **Mineral Dealers Africa** ensures these four pillars are fully managed, offering you an authenticated, hassle-free gateway to legitimate African mineral ecosystems.
    `,
    category: 'Investor Education',
    readTime: '7 min read',
    date: 'June 14, 2026',
    author: 'Sarah Nakato, Lead Logistics Consultant',
    image: 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=600',
    tags: ['Buy Gold in Africa', 'African Gold Suppliers', 'Gold Sourcing Africa']
  },
  {
    id: 'blog-03',
    title: 'African Mineral Marketplace: Unlocking Access for Smallholder Miners',
    slug: 'african-mineral-marketplace-launch',
    excerpt: 'How digital listing registries and standardized vetting frameworks are empowering local miner cooperatives to safely attract international buyers.',
    content: `
Artisanal and small-scale miners (ASM) account for nearly 20% of Africa’s total mineral output, providing crucial livelihoods to millions of families. Despite their productivity, these localized groups often struggle to reach the global market due to language barriers, limited digital access, and complex compliance frameworks.

The launch of the **Mineral Dealers Africa Marketplace** bridges this global gap by establishing a digital, secure registry.

### Transparent Listing and Global Exposure
The marketplace offers local smallholders several key benefits:
- **Direct Miner-to-Buyer Connections**: Eliminating middlemen allows miners to capture higher market values for their materials.
- **Assayed Purity Badging**: Sourced minerals undergo on-the-ground inspection, giving buyers confidence.
- **Official Compliance Auditing**: Our team manages local compliance checking, proving that shipments are conflict-free.

### Restoring Capital Security
By introducing structured, secure communication channels and standardized inquiry interfaces, buyers can safely evaluate lots of raw tanzanite, emeralds, industrial quartz, and alluvial nuggets. This digital integration elevates the standard of African mineral trading, positioning our mining groups on the global stage.
    `,
    category: 'Industry Innovation',
    readTime: '5 min read',
    date: 'June 10, 2026',
    author: 'Kabuleta Rogers, Head of Community Relations',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
    tags: ['African Mineral Marketplace', 'African Mining News', 'Mining Investment Guides']
  }
];

export const CORE_SERVICES = [
  {
    id: 'srv-gold-sourcing',
    title: 'Gold Sourcing',
    icon: 'Hammer',
    description: 'Direct procurement pipelines from vetted local mining cooperatives to source consistent, ethically mined alluvial gold bars, dust, and nuggets.'
  },
  {
    id: 'srv-precious-stones',
    title: 'Precious Stone Sourcing',
    icon: 'Gem',
    description: 'Strategic connections with gem producers in Mirerani (Tanzania), Lufwanyama (Zambia), and Lunda Sul (Angola) for fine gemstones and rough diamonds.'
  },
  {
    id: 'srv-supplier-verification',
    title: 'Supplier Verification & Vetting',
    icon: 'ShieldCheck',
    description: 'Rigorous physical desk audits, on-ground site inspections, and background license checks of smallholders to ensure you only deal with certified suppliers.'
  },
  {
    id: 'srv-due-diligence',
    title: 'Independent Due Diligence',
    icon: 'FileSearch',
    description: 'Comprehensive, audit-ready compliance analysis aligning with OECD guidelines, Kimberley Process standards, and regional Ugandan Mining Act clauses.'
  },
  {
    id: 'srv-export-facilitation',
    title: 'Export & Customs Facilitation',
    icon: 'PlaneTakeoff',
    description: 'Complete handling of municipal royalties payments, Ministry-issued certificates of origin, import clearances, and DGSM geological export stamps.'
  },
  {
    id: 'srv-mining-consultancy',
    title: 'Mining Consultancy & Advice',
    icon: 'Briefcase',
    description: 'A-grade tactical advisory on local concession licensing, environmental impact mitigation, refinery setup, and equipment imports.'
  },
  {
    id: 'srv-assay-verification',
    title: 'Assaying & Purity Auditing',
    icon: 'FileSpreadsheet',
    description: 'Hands-on management of mineral sample extraction and direct testing inside governmental Directorate laboratories (DGSM) to certify karat specifications.'
  },
  {
    id: 'srv-logistics-support',
    title: 'Logistics & Secure Escort',
    icon: 'TrendingUp',
    description: 'Coordination with top-tier international couriers (Brinks / G4S) and secure local transit teams to monitor cargo from the mine to the loading bay.'
  }
];
