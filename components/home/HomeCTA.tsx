import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HomeCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/events/G47A3467.jpg"
          alt="Fusion Fashion Events runway"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="font-label tracking-[0.4em] text-accent text-xs uppercase mb-6">
          Your Moment Awaits
        </p>
        <h2 className="font-display font-light text-5xl md:text-7xl text-white leading-tight mb-6">
          Step Into the
          <br />
          <span className="text-gradient-green">Spotlight</span>
        </h2>
        <p className="text-white/70 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
          Whether you&apos;re a designer ready to showcase your collection, a model building your portfolio, or a fashion lover looking for the best seats in Miami — Fusion has a place for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/register" variant="primary" className="glow-green-sm">
            Get Involved
          </Button>
          <Button href="/sponsors" variant="ghost">
            Become a Sponsor
          </Button>
        </div>
      </div>
    </section>
  );
}
