export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  event: string;
  avatar?: string;
  type: "designer" | "model" | "attendee" | "sponsor";
}

export interface Sponsor {
  id: string;
  name: string;
  logo?: string;
  tier: "platinum" | "gold" | "silver" | "media";
  url?: string;
  featured: boolean;
}

export interface SponsorTier {
  id: string;
  name: string;
  price: number;
  perks: string[];
  color: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar?: string;
  social?: { instagram?: string; linkedin?: string };
}

export interface PressItem {
  id: string;
  publication: string;
  headline: string;
  date: string;
  url?: string;
  logo?: string;
}
