import { ScrollReveal } from "@/components/shared/ScrollReveal";

const stats = [
  { value: "50+", label: "Runway Shows" },
  { value: "200+", label: "Designers Featured" },
  { value: "5K+", label: "Event Attendees" },
  { value: "3", label: "Years Running" },
];

export function StatsBar() {
  return (
    <section className="bg-surface border-y border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-border">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center md:px-8">
                <div className="font-display text-5xl md:text-6xl font-light text-gradient-green mb-2">
                  {stat.value}
                </div>
                <div className="font-label tracking-widest text-[10px] text-muted-dark uppercase">
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
