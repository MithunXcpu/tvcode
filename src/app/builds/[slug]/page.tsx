"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getBuildBySlug, getShowForBuild } from "@/data/shows";
import { FadeIn } from "@/components/MotionWrapper";

export default function BuildPage() {
  const params = useParams();
  const slug = params.slug as string;
  const build = getBuildBySlug(slug);
  const show = getShowForBuild(slug);

  if (!build || !show) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Build not found</h1>
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
      <div className={`h-48 bg-gradient-to-br ${show.gradient} relative`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-6">
          <Link
            href={`/shows/${show.slug}`}
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white mb-3 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {show.name}
          </Link>
          <FadeIn>
            <span className="text-sm text-white/70 font-medium">
              {show.name}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mt-1">
              {build.name}
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          {/* Tagline */}
          <p className="text-xl text-accent font-medium mb-6">
            {build.tagline}
          </p>

          {/* Description */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-3">About this build</h2>
            <p className="text-text-secondary leading-relaxed">
              {build.description}
            </p>
          </div>

          {/* How it appears in the show */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-3">In the show</h2>
            <p className="text-text-secondary leading-relaxed">
              {build.showDescription}
            </p>
          </div>

          {/* Real-world equivalent */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-3">Real-world equivalent</h2>
            <p className="text-text-secondary leading-relaxed">
              {build.realWorldEquivalent}
            </p>
          </div>

          {/* Tech tags */}
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-3">Tech stack</h2>
            <div className="flex flex-wrap gap-2">
              {build.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-lg border border-primary/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Code snippet */}
          {build.codeSnippet && (
            <div className="mb-10">
              <h2 className="text-lg font-semibold mb-3">Code preview</h2>
              <div className="rounded-xl bg-base border border-border overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-surface">
                  <span className="w-3 h-3 rounded-full bg-red-500/60" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <span className="w-3 h-3 rounded-full bg-green-500/60" />
                  <span className="ml-3 text-xs text-muted font-mono">
                    {build.slug}.tsx
                  </span>
                </div>
                <pre className="code-block p-4 overflow-x-auto text-sm text-muted leading-relaxed">
                  <code>{build.codeSnippet}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Back link */}
          <div className="pt-6 border-t border-border">
            <Link
              href={`/shows/${show.slug}`}
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              All {show.name} builds
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
