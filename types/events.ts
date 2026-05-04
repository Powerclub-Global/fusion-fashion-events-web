export type EventCategory =
  | "swim-week"
  | "runway"
  | "workshop"
  | "casting"
  | "competition";

export type EventStatus = "upcoming" | "ongoing" | "past" | "sold-out";

export interface TicketTier {
  id: string;
  name: string;
  price: number;
  earlyBirdPrice?: number;
  earlyBirdDeadline?: string;
  perks: string[];
  available: boolean;
  soldOut?: boolean;
}

export interface ScheduleItem {
  time: string;
  title: string;
  description?: string;
  location?: string;
}

export interface ScheduleDay {
  date: string;
  label: string;
  events: ScheduleItem[];
}

export interface Venue {
  name: string;
  address: string;
  googleMapsUrl?: string;
}

export interface Event {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: EventCategory;
  featured: boolean;
  status: EventStatus;
  dates: string;
  dateRange: { start: string; end: string };
  location: string;
  venue: Venue;
  heroImage: string;
  galleryImages: string[];
  description: string;
  longDescription: string;
  ticketTiers: TicketTier[];
  registrationOpen: boolean;
  designerApplicationUrl?: string;
  modelApplicationUrl?: string;
  schedule?: ScheduleDay[];
  designers?: string[];
  tags: string[];
  seoTitle: string;
  seoDescription: string;
}
