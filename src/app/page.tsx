"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Tv, Code, Users } from "lucide-react";
import { shows, getFeaturedBuilds, getShowForBuild } from "@/data/shows";
import { FadeIn } from "@/components/MotionWrapper";

export default function HomePage() {
  const featured = getFeaturedBuilds();

  return (
    <div className="relative">
      {/* Scanline overlay */}
      <div className="scanline fixed inset-0 pointer-events-none z-50 opacity-30" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-40 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-32 sm:pb-32">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Community-Driven Recreation Hub
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Software from your favorite shows{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                — actually built
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
              We catalog the apps, UIs, and tech from TV and film — then recreate
              them as real, functional demos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#shows"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dim text-white font-medium rounded-xl transition-colors"
              >
                Browse Shows
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/vote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-card hover:bg-card-hover text-text border border-border font-medium rounded-xl transition-colors"
              >
                Vote on Next Build
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border bg-surface/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-3 gap-8">
            {[
              { icon: Tv, value: "10", label: "Shows" },
              { icon: Code, value: "10", label: "Recreations" },
              { icon: Users, value: "Open", label: "Community-Driven" },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon className="h-4 w-4 text-primary" />
                  <span className="text-2xl sm:text-3xl font-bold text-text">
                    {stat.value}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted">{stat.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Builds */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured Builds
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Our most ambitious recreations — iconic fictional software brought to life.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((build, i) => {
              const show = getShowForBuild(build.slug);
              return (
                <motion.div
                  key={build.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    href={`/builds/${build.slug}`}
                    className="group block bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                  >
                    <div
                      className={`h-48 bg-gradient-to-br ${show?.gradient || "from-primary to-accent"} relative`}
                    >
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-xs font-medium text-white/80 mb-1 block">
                          {show?.name}
                        </span>
                        <h3 className="text-xl font-bold text-white">
                          {build.name}
                        </h3>
                      </div>
                      {build.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="px-2 py-0.5 text-xs font-bold bg-primary/90 text-white rounded-md">
                            FEATURED
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                        {build.tagline}
                      </p>

                      {/* Code snippet preview */}
                      {build.codeSnippet && (
                        <div className="mb-4 rounded-lg bg-base border border-border p-3 overflow-hidden">
                          <pre className="code-block text-xs text-muted overflow-hidden max-h-20">
                            <code>{build.codeSnippet.slice(0, 120)}...</code>
                          </pre>
                        </div>
                      )}

                      <div className="flex items-center justify-between">
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
                        <ArrowRight className="h-4 w-4 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Browse by Show */}
      <section id="shows" className="py-20 sm:py-28 bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Browse by Show
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              From Iron Man to Succession — explore the software that made these stories unforgettable.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shows.map((show, i) => (
              <motion.div
                key={show.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <div className="max-w-2xl mx-auto bg-gradient-to-b from-card to-surface border border-border rounded-2xl p-10 sm:p-14">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Vote for What We Build Next
              </h2>
              <p className="text-text-secondary mb-8">
                Have a favorite piece of fictional software? Vote for it or suggest a new build.
                The community decides what gets recreated next.
              </p>
              <Link
                href="/vote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dim text-white font-medium rounded-xl transition-colors"
              >
                Cast Your Vote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer links */}
      <section className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted">
            <Link href="/vote" className="hover:text-primary transition-colors">
              Vote on Builds
            </Link>
            <span className="hidden sm:inline text-border">|</span>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
