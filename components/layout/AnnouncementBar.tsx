"use client";
import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-accent text-white text-xs font-label tracking-widest text-center py-2 px-4">
      <Link href="/swim-week" className="hover:underline">
        FUSION SWIM WEEK 2026 · MAY 24–31 · MIAMI BEACH · TICKETS ON SALE NOW →
      </Link>
    </div>
  );
}
