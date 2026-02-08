import Link from "next/link";
import { Monitor } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Monitor className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold">
                TV<span className="text-primary">Code</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed">
              Every piece of software from your favorite shows — actually built.
              A community-driven project cataloging and recreating fictional tech.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/shows", label: "Browse Shows" },
                { href: "/vote", label: "Vote on Builds" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-4">
              About
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              TVCode is an open exploration of fictional software.
              All recreations are fan-made tributes built for educational and entertainment purposes.
              No affiliation with any studios or networks.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
          <p className="text-xs text-muted">
            Fan project. All show names and references belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
