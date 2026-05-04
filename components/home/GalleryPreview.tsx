import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "@/components/shared/SectionHeader";

const previewImages = [
  { src: "/events/G47A3871.jpg", alt: "Fusion Fashion runway show model" },
  { src: "/events/G47A3597.jpg", alt: "Fusion Fashion backstage" },
  { src: "/events/DSC07799.jpg", alt: "Fusion Fashion designer showcase" },
  { src: "/events/G47A3467.jpg", alt: "Fusion Fashion event atmosphere" },
  { src: "/events/7B25F2C4.png", alt: "Fusion Fashion VIP event" },
  { src: "/events/A1B0955D.png", alt: "Fusion Fashion Miami show" },
];

export function GalleryPreview() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Gallery"
        title="The Look of Fusion"
        description="A glimpse behind the lens — runway moments, backstage energy, and Miami magic."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
        {previewImages.map((img, i) => (
          <div
            key={i}
            className={`relative overflow-hidden group ${i === 0 ? "row-span-2" : ""}`}
            style={{ aspectRatio: i === 0 ? "3/4" : "4/3" }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/gallery"
          className="font-label tracking-widest text-xs uppercase text-accent hover:text-white transition-colors border-b border-accent/40 hover:border-white/40 pb-1"
        >
          View Full Gallery →
        </Link>
      </div>
    </section>
  );
}
