"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getShowBySlug } from "@/data/shows";
import { FadeIn } from "@/components/MotionWrapper";

export default function ShowPage() {
  const params = useParams();
  const slug = params.slug as string;
  const show = getShowBySlug(slug);

  if (!show) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Show not found</h1>
          <Link href="/" className="text-primary hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero banner */}
      <div className={`h-64 bg-gradient-to-br ${show.gradient} relative`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <FadeIn>
            <span className="text-sm text-white/70 font-medium">
              {show.year} &middot; {show.genre}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-1">
              {show.name}
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <p className="text-lg text-text-secondary max-w-3xl mb-12">
            {show.description}
          </p>
        </FadeIn>

        <h2 className="text-2xl font-bold mb-8">
          Builds ({show.builds.length})
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {show.builds.map((build, i) => (
            <motion.div
              key={build.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link
                href={`/builds/${build.slug}`}
                className="group block bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {build.name}
                    </h3>
                    <p className="text-sm text-accent mt-0.5">{build.tagline}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                </div>
                <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                  {build.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {build.tech.map((t) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
