"use client";
import { useState } from "react";
import testimonialsData from "@/data/testimonials.json";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const { testimonials } = testimonialsData;
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="py-24 bg-surface border-y border-border">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title="What They're Saying"
          description="From designers to models to sponsors — hear from the people who've been on the runway."
        />

        <div className="relative text-center">
          <Quote className="text-accent/20 mx-auto mb-8" size={48} />
          <blockquote className="font-display font-light text-2xl md:text-3xl text-white leading-relaxed mb-8 min-h-[120px] flex items-center justify-center">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="font-label tracking-widest text-xs text-muted-dark uppercase">
            <span className="text-white">{t.author}</span>
            <span className="mx-2 text-accent">·</span>
            {t.title}
            <span className="mx-2 text-accent">·</span>
            {t.event}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="p-2 border border-border hover:border-accent text-white/60 hover:text-accent transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-colors",
                    i === active ? "bg-accent" : "bg-white/20 hover:bg-white/40"
                  )}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 border border-border hover:border-accent text-white/60 hover:text-accent transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
