import eventsData from "@/data/events.json";
import type { Event } from "@/types/events";

export function getAllEvents(): Event[] {
  return eventsData.events as Event[];
}

export function getEventBySlug(slug: string): Event | undefined {
  return (eventsData.events as Event[]).find((e) => e.slug === slug);
}

export function getFeaturedEvents(): Event[] {
  return (eventsData.events as Event[]).filter((e) => e.featured);
}

export function getUpcomingEvents(): Event[] {
  return (eventsData.events as Event[]).filter(
    (e) => e.status === "upcoming" || e.status === "ongoing"
  );
}

export function getEventsByCategory(category: string): Event[] {
  return (eventsData.events as Event[]).filter((e) => e.category === category);
}
