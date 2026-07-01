export interface ServiceItem {
  id: string;
  title: string;
  titleId?: string;
  description: string;
  descriptionId?: string;
  longDescription: string;
  longDescriptionId?: string;
  iconName: string;
  features: string[];
  featuresId?: string[];
}

export interface PackageItem {
  id: string;
  name: string;
  nameId?: string;
  price: string;
  priceNumeric: number;
  period: string;
  periodId?: string;
  description: string;
  descriptionId?: string;
  features: string[];
  featuresId?: string[];
  notIncluded?: string[];
  notIncludedId?: string[];
  isPopular: boolean;
  badge?: string;
  badgeId?: string;
  buttonText: string;
  buttonTextId?: string;
  gradient?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  titleId?: string;
  category: string;
  categoryEn?: string;
  categoryLabel: string;
  categoryLabelId?: string;
  image: string;
  description: string;
  descriptionId?: string;
  clientName: string;
  location: string;
  locationId?: string;
  features: string[];
  featuresId?: string[];
  url?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  roleId?: string;
  businessName: string;
  avatarUrl: string;
  rating: number;
  content: string;
  contentEn?: string;
  location: string;
  locationId?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  questionId?: string;
  answer: string;
  answerId?: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  titleId?: string;
  slug: string;
  category: string;
  readingTime: string;
  readingTimeId?: string;
  author: {
    name: string;
    role: string;
    roleId?: string;
    avatar: string;
  };
  publishDate: string;
  publishDateId?: string;
  summary: string;
  summaryId?: string;
  content: string;
  contentId?: string;
  image: string;
  tags: string[];
  tagsId?: string[];
}

export interface QuoteFeature {
  id: string;
  name: string;
  nameId?: string;
  description: string;
  descriptionId?: string;
  price: number;
  category: 'features' | 'pages' | 'hosting' | 'support';
}
