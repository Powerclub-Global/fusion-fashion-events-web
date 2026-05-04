import Image from "next/image";
import Link from "next/link";
import { getFeaturedEvents } from "@/lib/events";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Calendar, MapPin } from "lucide-react";

export function FeaturedEventsStrip() {
  const events = getFeaturedEvents();

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Upcoming Events"
        title="On the Runway"
        description="From swimwear showcases to couture nights — every Fusion event is produced to the highest standard."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Link
            key={event.id}
            href={`/events/${event.slug}`}
            className="group block bg-surface border border-border hover:border-accent/40 transition-all duration-300"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={event.heroImage}
                alt={event.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute top-4 left-4">
                <Badge variant={event.category === "swim-week" ? "accent" : "dark"}>
                  {event.category.replace("-", " ")}
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-white/60 text-xs mb-2">
                  <Calendar size={12} />
                  <span className="font-label tracking-wider">{event.dates}</span>
                </div>
                <h3 className="font-display text-2xl font-light text-white leading-tight">
                  {event.name}
                </h3>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-muted-dark text-xs mb-4">
                <MapPin size={12} />
                <span>{event.location}</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-5 line-clamp-2">
                {event.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-label text-xs tracking-wider text-accent">
                  From ${Math.min(...event.ticketTiers.filter((t) => t.price > 0).map((t) => t.price))}
                </span>
                <span className="font-label text-[10px] tracking-widest text-white/40 group-hover:text-accent transition-colors uppercase">
                  View Event →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button href="/events" variant="ghost">
          View All Events
        </Button>
      </div>
    </section>
  );
}
