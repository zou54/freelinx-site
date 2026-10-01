import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsBenefits extends Struct.ComponentSchema {
  collectionName: 'components_sections_benefits';
  info: {
    displayName: 'Benefits Section';
    icon: 'shield';
  };
  attributes: {
    benefits: Schema.Attribute.Component<'shared.icon-text-item', true>;
    cta: Schema.Attribute.Component<'shared.cta-banner', false>;
    highlightCardText: Schema.Attribute.String;
    intro1: Schema.Attribute.Text;
    intro2: Schema.Attribute.Text;
    pill: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsCommitments extends Struct.ComponentSchema {
  collectionName: 'components_sections_commitments';
  info: {
    displayName: 'Commitments Section';
    icon: 'medal';
  };
  attributes: {
    commitments: Schema.Attribute.Component<'shared.icon-text-item', true>;
    cta: Schema.Attribute.Component<'shared.cta-banner', false>;
    description: Schema.Attribute.Text;
    pill: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'FAQ Section';
    icon: 'question';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta-banner', false>;
    description: Schema.Attribute.Text;
    faqs: Schema.Attribute.Component<'shared.faq-item', true>;
    pill: Schema.Attribute.String;
    seeAllLabel: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFigures extends Struct.ComponentSchema {
  collectionName: 'components_sections_figures';
  info: {
    displayName: 'Figures Section';
    icon: 'chartBubble';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta-banner', false>;
    description: Schema.Attribute.Text;
    figures: Schema.Attribute.Component<'shared.figure-item', true>;
    pill: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsFinalCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_final_ctas';
  info: {
    displayName: 'Final CTA Section';
    icon: 'rocket';
  };
  attributes: {
    badge: Schema.Attribute.String;
    checklistItems: Schema.Attribute.Component<'shared.checklist-item', true>;
    iconItems: Schema.Attribute.Component<'shared.icon-text-item', true>;
    paragraph: Schema.Attribute.Text;
    primaryCtaHref: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    primaryCtaLabel: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
    secondaryCtaHref: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    secondaryCtaLabel: Schema.Attribute.String;
    statItems: Schema.Attribute.Component<'shared.icon-stat-text', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    icon: 'rocket';
  };
  attributes: {
    badge: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'PORTAGE SALARIAL'>;
    bannerHighlight: Schema.Attribute.String;
    bannerText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    highlight: Schema.Attribute.Text;
    primaryCtaHref: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    primaryCtaLabel: Schema.Attribute.String;
    secondaryCtaHref: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    secondaryCtaLabel: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'shared.icon-stat', true>;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectionsPcHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_pc_heroes';
  info: {
    displayName: 'Portage Commercial Hero';
    icon: 'rocket';
  };
  attributes: {
    checklist: Schema.Attribute.Component<'shared.icon-stat-text', true>;
    highlightLine: Schema.Attribute.String;
    paragraph1: Schema.Attribute.Text;
    paragraph2: Schema.Attribute.Text;
    primaryCtaHref: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    primaryCtaLabel: Schema.Attribute.String;
    secondaryCtaHref: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    secondaryCtaLabel: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPcNumberedBenefits extends Struct.ComponentSchema {
  collectionName: 'components_sections_pc_numbered_benefits';
  info: {
    displayName: 'Portage Commercial - Numbered Benefits';
    icon: 'briefcase';
  };
  attributes: {
    group1: Schema.Attribute.Component<'shared.advantage-group', false>;
    group2: Schema.Attribute.Component<'shared.advantage-group', false>;
    icon: Schema.Attribute.String;
    index: Schema.Attribute.Integer;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPcNumberedHow extends Struct.ComponentSchema {
  collectionName: 'components_sections_pc_numbered_hows';
  info: {
    displayName: 'Portage Commercial - Numbered How';
    icon: 'gear';
  };
  attributes: {
    calloutText: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    index: Schema.Attribute.Integer;
    steps: Schema.Attribute.Component<'shared.icon-text-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPcNumberedIntro extends Struct.ComponentSchema {
  collectionName: 'components_sections_pc_numbered_intros';
  info: {
    displayName: 'Portage Commercial - Numbered Intro';
    icon: 'question';
  };
  attributes: {
    callout: Schema.Attribute.Component<'shared.callout-text', false>;
    checklistItems: Schema.Attribute.Component<'shared.checklist-item', true>;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    index: Schema.Attribute.Integer & Schema.Attribute.Required;
    intro: Schema.Attribute.Text;
    paragraph2: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPcNumberedWhy extends Struct.ComponentSchema {
  collectionName: 'components_sections_pc_numbered_whies';
  info: {
    displayName: 'Portage Commercial - Numbered Why';
    icon: 'target';
  };
  attributes: {
    icon: Schema.Attribute.String;
    index: Schema.Attribute.Integer;
    paragraph1: Schema.Attribute.Text;
    paragraph2: Schema.Attribute.Text;
    resultItems: Schema.Attribute.Component<'shared.checklist-item', true>;
    resultLabel: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPourQui extends Struct.ComponentSchema {
  collectionName: 'components_sections_pour_quis';
  info: {
    displayName: 'Pour Qui Section';
    icon: 'user';
  };
  attributes: {
    paragraph1: Schema.Attribute.Text;
    paragraph2: Schema.Attribute.Text;
    profiles: Schema.Attribute.Component<'shared.checklist-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPricing extends Struct.ComponentSchema {
  collectionName: 'components_sections_pricings';
  info: {
    displayName: 'Pricing Section';
    icon: 'price-tag';
  };
  attributes: {
    description: Schema.Attribute.Text;
    plans: Schema.Attribute.Component<'shared.pricing-plan', true>;
    rateCaption: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_ps_heroes';
  info: {
    displayName: 'Portage Salarial Hero';
    icon: 'rocket';
  };
  attributes: {
    checklist: Schema.Attribute.Component<'shared.icon-stat-text', true>;
    paragraph1: Schema.Attribute.Text;
    paragraph2: Schema.Attribute.Text;
    primaryCtaHref: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    primaryCtaLabel: Schema.Attribute.String;
    secondaryCtaHref: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    secondaryCtaLabel: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsQsnHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_qsn_heroes';
  info: {
    displayName: 'Qui Sommes Nous Hero';
    icon: 'rocket';
  };
  attributes: {
    paragraph1: Schema.Attribute.Text;
    paragraph2: Schema.Attribute.Text;
    pill: Schema.Attribute.String;
    team: Schema.Attribute.Component<'shared.team-member', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsQsnStatement extends Struct.ComponentSchema {
  collectionName: 'components_sections_qsn_statements';
  info: {
    displayName: 'Qui Sommes Nous Statement';
    icon: 'bulb';
  };
  attributes: {
    highlight: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    paragraph1: Schema.Attribute.Text;
    paragraph2: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsQsnValues extends Struct.ComponentSchema {
  collectionName: 'components_sections_qsn_values';
  info: {
    displayName: 'Qui Sommes Nous Values';
    icon: 'star';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    values: Schema.Attribute.Component<'shared.icon-text-item', true>;
  };
}

export interface SectionsSectors extends Struct.ComponentSchema {
  collectionName: 'components_sections_sectors';
  info: {
    displayName: 'Sectors Section';
    icon: 'briefcase';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta-banner', false>;
    description: Schema.Attribute.Text;
    pill: Schema.Attribute.String;
    sectors: Schema.Attribute.Component<'shared.icon-text-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsSteps extends Struct.ComponentSchema {
  collectionName: 'components_sections_steps';
  info: {
    displayName: 'Steps Section';
    icon: 'bulletList';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta-banner', false>;
    description: Schema.Attribute.Text;
    pill: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'shared.icon-text-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTarifsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_tarifs_heroes';
  info: {
    displayName: 'Tarifs Hero';
    icon: 'price-tag';
  };
  attributes: {
    features: Schema.Attribute.Component<'shared.icon-text-item', true>;
    highlight: Schema.Attribute.Text;
    paragraph1: Schema.Attribute.Text;
    paragraph2: Schema.Attribute.Text;
    pill: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonials Section';
    icon: 'quote';
  };
  attributes: {
    description: Schema.Attribute.Text;
    pill: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'shared.testimonial-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTransparency extends Struct.ComponentSchema {
  collectionName: 'components_sections_transparencies';
  info: {
    displayName: 'Transparency Section';
    icon: 'shield';
  };
  attributes: {
    checklistItems: Schema.Attribute.Component<'shared.checklist-item', true>;
    description: Schema.Attribute.Text;
    quote: Schema.Attribute.Component<'shared.statement-quote', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsTripartite extends Struct.ComponentSchema {
  collectionName: 'components_sections_tripartites';
  info: {
    displayName: 'Tripartite Diagram';
    icon: 'shuffle';
  };
  attributes: {
    clientsIcon: Schema.Attribute.String;
    clientsLabel: Schema.Attribute.String;
    clientsSublabel: Schema.Attribute.String;
    freelinxLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'FREELINX'>;
    link1From: Schema.Attribute.String;
    link1To: Schema.Attribute.String;
    link2From: Schema.Attribute.String;
    link2To: Schema.Attribute.String;
    paragraph1: Schema.Attribute.Text;
    paragraph2: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    vousIcon: Schema.Attribute.String;
    vousLabel: Schema.Attribute.String;
    vousSublabel: Schema.Attribute.String;
  };
}

export interface SectionsWhy extends Struct.ComponentSchema {
  collectionName: 'components_sections_whies';
  info: {
    displayName: 'Why Section';
    icon: 'question';
  };
  attributes: {
    features: Schema.Attribute.Component<'shared.feature-item', true>;
    intro1: Schema.Attribute.Text;
    intro2: Schema.Attribute.Text;
    intro3: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsWhyChoose extends Struct.ComponentSchema {
  collectionName: 'components_sections_why_chooses';
  info: {
    displayName: 'Why Choose Section';
    icon: 'star';
  };
  attributes: {
    reasons: Schema.Attribute.Component<'shared.icon-text-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedAdvantageGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_advantage_groups';
  info: {
    displayName: 'Advantage Group';
    icon: 'layer';
  };
  attributes: {
    calloutText: Schema.Attribute.Text;
    calloutTone: Schema.Attribute.Enumeration<['pink', 'blue']> &
      Schema.Attribute.DefaultTo<'pink'>;
    items: Schema.Attribute.Component<'shared.checklist-item', true>;
    pillColor: Schema.Attribute.Enumeration<['red', 'navy']> &
      Schema.Attribute.DefaultTo<'red'>;
    pillLabel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCalloutText extends Struct.ComponentSchema {
  collectionName: 'components_shared_callout_texts';
  info: {
    displayName: 'Callout Text';
    icon: 'feather';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    tone: Schema.Attribute.Enumeration<['pink', 'blue']> &
      Schema.Attribute.DefaultTo<'pink'>;
  };
}

export interface SharedChecklistItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_checklist_items';
  info: {
    displayName: 'Checklist Item';
    icon: 'check';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCtaBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_banners';
  info: {
    displayName: 'CTA Banner';
    icon: 'envelope';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    primaryHref: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    primaryLabel: Schema.Attribute.String;
    secondaryHref: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    secondaryLabel: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    displayName: 'FAQ Item';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_items';
  info: {
    displayName: 'Feature Item';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    number: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFigureItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_figure_items';
  info: {
    displayName: 'Figure Item';
    icon: 'chartBubble';
  };
  attributes: {
    caption: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedIconStat extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_stats';
  info: {
    displayName: 'Icon Stat';
    icon: 'star';
  };
  attributes: {
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    sublabel: Schema.Attribute.String;
  };
}

export interface SharedIconStatText extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_stat_texts';
  info: {
    displayName: 'Icon Stat Text';
    icon: 'star';
  };
  attributes: {
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedIconTextItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_text_items';
  info: {
    displayName: 'Icon Text Item';
    icon: 'puzzle';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLabelDetail extends Struct.ComponentSchema {
  collectionName: 'components_shared_label_details';
  info: {
    displayName: 'Label Detail';
    icon: 'information';
  };
  attributes: {
    detail: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedNavLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_links';
  info: {
    displayName: 'Nav Link';
    icon: 'link';
  };
  attributes: {
    hasChevron: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedPricingPlan extends Struct.ComponentSchema {
  collectionName: 'components_shared_pricing_plans';
  info: {
    displayName: 'Pricing Plan';
    icon: 'price-tag';
  };
  attributes: {
    badge: Schema.Attribute.String;
    ctaHref: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#'>;
    ctaLabel: Schema.Attribute.String;
    featureItems: Schema.Attribute.Component<'shared.checklist-item', true>;
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    rate: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['red', 'blue', 'green']> &
      Schema.Attribute.DefaultTo<'red'>;
  };
}

export interface SharedStatementQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_statement_quotes';
  info: {
    displayName: 'Statement Quote';
    icon: 'quote';
  };
  attributes: {
    line1: Schema.Attribute.Text & Schema.Attribute.Required;
    line2: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_members';
  info: {
    displayName: 'Team Member';
    icon: 'user';
  };
  attributes: {
    initials: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    photo: Schema.Attribute.Media<'images'>;
    role: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['mono', 'color']> &
      Schema.Attribute.DefaultTo<'mono'>;
  };
}

export interface SharedTestimonialItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonial_items';
  info: {
    displayName: 'Testimonial Item';
    icon: 'quote';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    role: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'sections.benefits': SectionsBenefits;
      'sections.commitments': SectionsCommitments;
      'sections.faq': SectionsFaq;
      'sections.figures': SectionsFigures;
      'sections.final-cta': SectionsFinalCta;
      'sections.hero': SectionsHero;
      'sections.pc-hero': SectionsPcHero;
      'sections.pc-numbered-benefits': SectionsPcNumberedBenefits;
      'sections.pc-numbered-how': SectionsPcNumberedHow;
      'sections.pc-numbered-intro': SectionsPcNumberedIntro;
      'sections.pc-numbered-why': SectionsPcNumberedWhy;
      'sections.pour-qui': SectionsPourQui;
      'sections.pricing': SectionsPricing;
      'sections.ps-hero': SectionsPsHero;
      'sections.qsn-hero': SectionsQsnHero;
      'sections.qsn-statement': SectionsQsnStatement;
      'sections.qsn-values': SectionsQsnValues;
      'sections.sectors': SectionsSectors;
      'sections.steps': SectionsSteps;
      'sections.tarifs-hero': SectionsTarifsHero;
      'sections.testimonials': SectionsTestimonials;
      'sections.transparency': SectionsTransparency;
      'sections.tripartite': SectionsTripartite;
      'sections.why': SectionsWhy;
      'sections.why-choose': SectionsWhyChoose;
      'shared.advantage-group': SharedAdvantageGroup;
      'shared.callout-text': SharedCalloutText;
      'shared.checklist-item': SharedChecklistItem;
      'shared.cta-banner': SharedCtaBanner;
      'shared.faq-item': SharedFaqItem;
      'shared.feature-item': SharedFeatureItem;
      'shared.figure-item': SharedFigureItem;
      'shared.icon-stat': SharedIconStat;
      'shared.icon-stat-text': SharedIconStatText;
      'shared.icon-text-item': SharedIconTextItem;
      'shared.label-detail': SharedLabelDetail;
      'shared.nav-link': SharedNavLink;
      'shared.pricing-plan': SharedPricingPlan;
      'shared.statement-quote': SharedStatementQuote;
      'shared.team-member': SharedTeamMember;
      'shared.testimonial-item': SharedTestimonialItem;
    }
  }
}
