import Image from "next/image";
import { CountdownTimer } from "@/components/shared/CountdownTimer";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/events/aerial_shot_swim_week.png"
          alt="Fusion Fashion Events — Miami Swim Week aerial view"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
        <p className="font-label tracking-[0.4em] text-accent text-xs md:text-sm uppercase mb-6">
          Miami · Fashion · Culture
        </p>

        <h1 className="font-display font-light text-6xl md:text-8xl lg:text-[110px] leading-none text-white mb-6">
          Where Fashion
          <br />
          <span className="text-gradient-green">Meets Fire</span>
        </h1>

        <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed">
          Miami&apos;s premier runway platform — from Swim Week to couture. Designers, models, and tastemakers converging on one stage.
        </p>

        <div className="mb-12">
          <p className="font-label tracking-widest text-[10px] text-muted-dark uppercase mb-6">
            Fusion Swim Week 2026 Begins In
          </p>
          <div className="flex justify-center">
            <CountdownTimer targetDate="2026-05-24T20:00:00" variant="hero" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/swim-week" variant="primary" className="glow-green-sm">
            Get Swim Week Tickets
          </Button>
          <Button href="/register/designer" variant="ghost">
            Apply as Designer
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-accent/60 animate-bounce" />
      </div>
    </section>
  );
}
