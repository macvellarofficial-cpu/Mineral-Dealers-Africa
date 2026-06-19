export type MineralCategory = 'Gold' | 'Diamonds' | 'Gemstones' | 'Strategic Minerals';

export interface MineralListing {
  id: string;
  title: string;
  category: MineralCategory;
  type: string; // e.g., "Gold Bars", "Gold Nuggets", "Rough Cut"
  origin: string; // Country, e.g., "Uganda", "DR Congo", "Tanzania"
  purity: string; // e.g., "99.9% (24K)", "96.5% (22K)", "VVS1 Clarity"
  quantity: string; // e.g., "150 kg", "25 Carats"
  photoUrl: string;
  supplierName: string;
  isSupplierVerified: boolean;
  supplierLocation: string;
  description: string;
  specifications: { label: string; value: string }[];
  dateAdded: string;
}

export interface Supplier {
  id: string;
  companyName: string;
  contactPerson: string;
  country: string;
  email: string;
  phone: string;
  licenseNumber: string;
  isVerified: boolean;
  mineralsOffered: MineralCategory[];
  registrationDate: string;
}

export interface Inquiry {
  id: string;
  mineralId?: string;
  mineralTitle?: string;
  buyerName: string;
  buyerEmail: string;
  buyerPhone: string;
  companyName: string;
  message: string;
  quantityRequired: string;
  preferredTerms: 'FOB' | 'CIF';
  date: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
}

export interface EducationGuide {
  id: string;
  title: string;
  shortSummary: string;
  iconName: string;
  slug: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}
