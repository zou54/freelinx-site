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
      'sections.sectors': SectionsSectors;
      'sections.steps': SectionsSteps;
      'sections.testimonials': SectionsTestimonials;
      'sections.why': SectionsWhy;
      'shared.cta-banner': SharedCtaBanner;
      'shared.faq-item': SharedFaqItem;
      'shared.feature-item': SharedFeatureItem;
      'shared.figure-item': SharedFigureItem;
      'shared.icon-stat': SharedIconStat;
      'shared.icon-stat-text': SharedIconStatText;
      'shared.icon-text-item': SharedIconTextItem;
      'shared.label-detail': SharedLabelDetail;
      'shared.nav-link': SharedNavLink;
      'shared.testimonial-item': SharedTestimonialItem;
    }
  }
}
