"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Build } from "@/data/shows";
import { getShowForBuild } from "@/data/shows";

interface Props {
  build: Build;
  index?: number;
}

export function BuildCard({ build, index = 0 }: Props) {
  const show = getShowForBuild(build.slug);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
    >
      <Link
        href={`/builds/${build.slug}`}
        className="group block bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <p className="text-xs text-accent font-medium mb-1">
              {show?.name}
            </p>
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
              {build.name}
            </h3>
          </div>
          <ArrowRight className="h-4 w-4 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
        </div>
        <p className="text-sm text-text-secondary mb-4">
          {build.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {build.tech.slice(0, 3).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-xs font-medium bg-surface rounded-md text-muted border border-border"
            >
              {t}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
