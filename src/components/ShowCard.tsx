"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Show } from "@/data/shows";

interface Props {
  show: Show;
  index?: number;
}

export function ShowCard({ show, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
    >
      <Link
        href={`/shows/${show.slug}`}
        className="group block bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
      >
        <div
          className={`h-40 bg-gradient-to-br ${show.gradient} relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <div className="absolute bottom-3 left-3">
            <span className="inline-block px-2 py-0.5 text-xs font-medium bg-black/40 backdrop-blur-sm rounded-md text-white">
              {show.genre}
            </span>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
              {show.name}
            </h3>
            <span className="text-xs text-muted whitespace-nowrap mt-1">
              {show.year}
            </span>
          </div>
          <p className="text-sm text-text-secondary line-clamp-2 mb-3">
            {show.description}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-accent">
              {show.builds.length} {show.builds.length === 1 ? "recreation" : "recreations"}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
