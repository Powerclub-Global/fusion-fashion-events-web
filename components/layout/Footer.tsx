import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/config/site";

const footerLinks = {
  Events: [
    { label: "Fusion Swim Week 2026", href: "/swim-week" },
    { label: "Hollywood Couture", href: "/events/hollywood-couture-2026" },
    { label: "All Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
  ],
  Register: [
    { label: "Designer Application", href: "/register/designer" },
    { label: "Model Application", href: "/register/model" },
    { label: "Get Tickets", href: "/register" },
    { label: "Workshops", href: "/workshops" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Press & Media", href: "/press" },
    { label: "Sponsorships", href: "/sponsors" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/">
              <Image
                src="/logo-white.png"
                alt="Fusion Fashion Events"
                width={160}
                height={45}
                className="object-contain mb-6"
              style={{ height: "40px", width: "auto" }}
              />
            </Link>
            <p className="text-muted-dark text-sm leading-relaxed max-w-xs mb-6">
              Miami&apos;s premier fashion event platform. Runway shows, Swim
              Week, model casting, and designer showcases.
            </p>
            <div className="flex gap-4">
              <a href={siteConfig.contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon size={18} className="text-muted-dark hover:text-accent transition-colors" />
              </a>
              <a href={siteConfig.contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon size={18} className="text-muted-dark hover:text-accent transition-colors" />
              </a>
              <a href={siteConfig.contact.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <YoutubeIcon size={18} className="text-muted-dark hover:text-accent transition-colors" />
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} aria-label="Email">
                <Mail size={18} className="text-muted-dark hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Link Groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="font-label tracking-widest text-xs text-white uppercase mb-4">
                {group}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-dark text-sm hover:text-accent transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} Fusion Fashion Events. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-muted text-xs hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted text-xs hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
