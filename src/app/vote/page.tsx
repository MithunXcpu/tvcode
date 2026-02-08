"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ThumbsUp, Send } from "lucide-react";
import { shows } from "@/data/shows";
import { voteItems } from "@/data/votes";
import { FadeIn } from "@/components/MotionWrapper";

export default function VotePage() {
  const [votes, setVotes] = useState<Record<string, number>>(
    Object.fromEntries(voteItems.map((v) => [v.id, v.initialVotes]))
  );
  const [voted, setVoted] = useState<Set<string>>(new Set());

  function handleVote(id: string) {
    if (voted.has(id)) return;
    setVotes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setVoted((prev) => new Set(prev).add(id));
  }

  const sorted = [...voteItems].sort(
    (a, b) => (votes[b.id] || 0) - (votes[a.id] || 0)
  );

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <FadeIn>
          <h1 className="text-4xl font-bold mb-4">Vote on Next Builds</h1>
          <p className="text-text-secondary max-w-2xl mb-12">
            Help decide what fictional software gets recreated next. Vote for your favorites
            or suggest something new.
          </p>
        </FadeIn>

        {/* Current shows */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Shows We Cover</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {shows.map((show, i) => (
              <motion.div
                key={show.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
              >
                <Link
                  href={`/shows/${show.slug}`}
                  className="group block bg-card rounded-lg border border-border p-4 text-center hover:border-primary/50 transition-all"
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br ${show.gradient}`}
                  />
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">
                    {show.name}
                  </p>
                  <p className="text-xs text-muted mt-1">{show.year}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Vote items */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Vote for New Builds</h2>
          <div className="space-y-4">
            {sorted.map((item, i) => {
              const hasVoted = voted.has(item.id);
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="bg-card rounded-xl border border-border p-6 flex flex-col sm:flex-row items-start gap-4"
                >
                  <button
                    onClick={() => handleVote(item.id)}
                    disabled={hasVoted}
                    className={`flex-shrink-0 flex flex-col items-center gap-1 px-4 py-3 rounded-lg border transition-all ${
                      hasVoted
                        ? "bg-primary/10 border-primary/30 text-primary"
                        : "bg-surface border-border text-muted hover:border-primary/50 hover:text-primary"
                    }`}
                  >
                    <ThumbsUp className="h-5 w-5" />
                    <span className="text-sm font-bold">{votes[item.id]}</span>
                  </button>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <span className="text-xs text-accent font-medium whitespace-nowrap mt-1">
                        {item.show}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Request a build */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Request a Build</h2>
          <div className="bg-card rounded-xl border border-border p-8">
            <p className="text-text-secondary mb-6">
              Do not see your favorite fictional software? Let us know what you would love to see recreated.
            </p>
            <form
              action="https://formspree.io/f/xplaceholder"
              method="POST"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="show" className="block text-sm font-medium mb-2">
                    Show / Film name
                  </label>
                  <input
                    id="show"
                    type="text"
                    name="show"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                    placeholder="e.g. Minority Report"
                  />
                </div>
                <div>
                  <label htmlFor="software" className="block text-sm font-medium mb-2">
                    Software / Tech
                  </label>
                  <input
                    id="software"
                    type="text"
                    name="software"
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                    placeholder="e.g. PreCrime gesture interface"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="details" className="block text-sm font-medium mb-2">
                  Details (optional)
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                  placeholder="What makes this software interesting? What scene is it from?"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your email (optional)
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  placeholder="you@example.com"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dim text-white font-medium rounded-xl transition-colors"
              >
                <Send className="h-4 w-4" />
                Submit Request
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
