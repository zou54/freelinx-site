export interface IconStat {
  icon: string;
  label: string;
  sublabel?: string;
}

export interface IconTextItem {
  icon: string;
  title: string;
  description: string;
}

export interface FeatureItem {
  number: number;
  title: string;
  description: string;
}

export interface FigureItem {
  icon: string;
  value: string;
  caption: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  rating?: number;
}

export interface FaqItem {
  icon: string;
  question: string;
  answer: string;
}

export interface CtaBannerData {
  icon: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
  hasChevron?: boolean;
}

export interface LabelDetail {
  label: string;
  detail: string;
}

export interface IconStatText {
  icon: string;
  text: string;
}

export interface HeroData {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  bannerText?: string;
  bannerHighlight?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  stats?: IconStat[];
}

export interface WhySectionData {
  title: string;
  intro1?: string;
  intro2?: string;
  intro3?: string;
  features?: FeatureItem[];
}

export interface StepsSectionData {
  pill?: string;
  title: string;
  description?: string;
  steps?: IconTextItem[];
  cta?: CtaBannerData;
}

export interface BenefitsSectionData {
  pill?: string;
  title: string;
  intro1?: string;
  intro2?: string;
  highlightCardText?: string;
  benefits?: IconTextItem[];
  cta?: CtaBannerData;
}

export interface CommitmentsSectionData {
  pill?: string;
  title: string;
  description?: string;
  commitments?: IconTextItem[];
  cta?: CtaBannerData;
}

export interface FiguresSectionData {
  pill?: string;
  title: string;
  description?: string;
  figures?: FigureItem[];
  cta?: CtaBannerData;
}

export interface SectorsSectionData {
  pill?: string;
  title: string;
  description?: string;
  sectors?: IconTextItem[];
  cta?: CtaBannerData;
}

export interface TestimonialsSectionData {
  pill?: string;
  title: string;
  description?: string;
  testimonials?: TestimonialItem[];
}

export interface FaqSectionData {
  pill?: string;
  title: string;
  description?: string;
  faqs?: FaqItem[];
  seeAllLabel?: string;
  cta?: CtaBannerData;
}

export interface FinalCtaSectionData {
  badge?: string;
  title: string;
  paragraph?: string;
  quote?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  iconItems?: IconTextItem[];
  statItems?: IconStatText[];
}

export interface HomepageData {
  hero: HeroData;
  whySection: WhySectionData;
  stepsSection: StepsSectionData;
  benefitsSection: BenefitsSectionData;
  commitmentsSection: CommitmentsSectionData;
  figuresSection: FiguresSectionData;
  sectorsSection: SectorsSectionData;
  testimonialsSection: TestimonialsSectionData;
  faqSection: FaqSectionData;
  finalCtaSection: FinalCtaSectionData;
}

export interface HeaderData {
  logoLabel?: string;
  hours?: LabelDetail;
  phone?: LabelDetail;
  address?: LabelDetail;
  navLinks?: NavLinkItem[];
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export interface FooterData {
  logoLabel?: string;
  description?: string;
  socialLinks?: NavLinkItem[];
  navTitle?: string;
  navLinks?: NavLinkItem[];
  resourcesTitle?: string;
  resourceLinks?: NavLinkItem[];
  contactTitle?: string;
  email?: string;
  phone?: string;
  city?: string;
  copyrightText?: string;
  legalLinks?: NavLinkItem[];
}
