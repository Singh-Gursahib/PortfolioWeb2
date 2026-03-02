export interface SiteMetadata {
  name: string;
  initials: string;
  tagline: string;
  description: string;
  location: string;
}

export interface Experience {
  org: string;
  date: string;
  role: string;
  bullets: string[];
}

export interface Project {
  slug: string;
  num: string;
  tag: string;
  tagColor?: 'lime' | 'teal' | 'red';
  name: string;
  shortDescription: string;
  // listing page fields
  listingDescription: string;
  stack: string[];
  hasDetail: boolean;
  // detail page fields (only for projects with a detail page)
  detailTag?: string;
  detailSub?: string;
  timeline?: string;
  role?: string;
  teamSize?: string;
  status?: string;
  statusHighlight?: boolean;
  bannerImage?: string;
  videoUrl?: string;
  githubUrl?: string;
  gallery?: GalleryItem[];
  overview?: string[];
  features?: Feature[];
  detailSections?: DetailSection[];
  techStack?: StackItem[];
  techChallenges?: string[];
  impact?: string[];
}

export interface GalleryItem {
  label: string;
  image: string;
  active?: boolean;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface DetailSection {
  tag: string;
  title: string;
  titleAccent: string;
  paragraphs: string[];
  bullets?: string[];
  image?: string;
  imageCaption?: string;
  subsections?: {
    heading: string;
    content: string;
    bullets?: string[];
  }[];
}

export interface StackItem {
  name: string;
  role: string;
}

export interface Research {
  slug: string;
  amount: string;
  grantType: string;
  grantTypeColor?: 'lime' | 'teal' | 'red';
  title: string;
  shortDescription: string;
  listingDescription: string;
  award?: string;
  stack: string[];
  hasDetail: boolean;
  // detail page fields (only for research with a detail page)
  detailTag?: string;
  detailSub?: string;
  timeline?: string;
  role?: string;
  status?: string;
  statusHighlight?: boolean;
  bannerImage?: string;
  overview?: string[];
  features?: Feature[];
  detailSections?: DetailSection[];
  techStack?: StackItem[];
  impact?: string[];
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  bullets: string[];
  icon: string;
}

export interface ContactLink {
  name: string;
  value: string;
  href: string;
  external?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
  isButton?: boolean;
}
