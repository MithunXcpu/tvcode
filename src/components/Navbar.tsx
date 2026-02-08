"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/shows", label: "Shows" },
  { href: "/vote", label: "Vote" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Monitor className="h-6 w-6 text-primary transition-colors group-hover:text-accent" />
            <span className="text-xl font-bold tracking-tight">
              TV<span className="text-primary">Code</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-text-secondary hover:text-text hover:bg-card"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-x-2 -bottom-px h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text rounded-lg hover:bg-card transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-surface overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-text-secondary hover:text-text hover:bg-card"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
