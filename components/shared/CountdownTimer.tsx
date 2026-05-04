"use client";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: string): TimeLeft {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

interface CountdownTimerProps {
  targetDate: string;
  variant?: "hero" | "compact";
}

export function CountdownTimer({ targetDate, variant = "hero" }: CountdownTimerProps) {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    setTime(getTimeLeft(targetDate));
    const id = setInterval(() => setTime(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Mins", value: time.minutes },
    { label: "Secs", value: time.seconds },
  ];

  if (!mounted) {
    return variant === "compact" ? (
      <div className="flex items-center gap-3 h-10 animate-pulse bg-white/5 rounded w-40" />
    ) : (
      <div className="h-20 animate-pulse bg-white/5 rounded w-80" />
    );
  }

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-3">
        {units.map(({ label, value }, i) => (
          <div key={label} className="flex items-center gap-3">
            <div className="text-center">
              <span className="font-label text-2xl text-accent tabular-nums">
                {String(value).padStart(2, "0")}
              </span>
              <p className="font-label text-[9px] tracking-widest text-muted-dark uppercase">
                {label}
              </p>
            </div>
            {i < units.length - 1 && (
              <span className="text-accent font-label text-xl mb-3">:</span>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 md:gap-8">
      {units.map(({ label, value }, i) => (
        <div key={label} className="flex items-start gap-4 md:gap-8">
          <div className="text-center">
            <div className="font-label text-5xl md:text-7xl text-white tabular-nums leading-none">
              {String(value).padStart(2, "0")}
            </div>
            <div className="font-label text-[10px] tracking-[0.2em] text-muted-dark uppercase mt-1">
              {label}
            </div>
          </div>
          {i < units.length - 1 && (
            <span className="font-label text-4xl md:text-6xl text-accent/50 leading-none mt-0.5">
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
