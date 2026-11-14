import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { BUSINESS, REVIEWS } from "../data/businessData";
import { EASE_LUXURY, EditorialReveal } from "./MotionPrimitives";

export const ReviewsSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [showMoreTags, setShowMoreTags] = useState(false);

  const active = REVIEWS[index] || REVIEWS[0];
  const extraTopics = [
    "courteous",
    "professional",
    "studio apartment",
    "landlords",
    "moving in",
    "room setup",
  ];

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    if (tag === "All") {
      setShowMoreTags(false);
      setIndex(0);
      return;
    }
    if (tag === "+6") {
      setShowMoreTags((prev) => !prev);
      return;
    }
    const matchingIndices = REVIEWS.reduce<number[]>((acc, r, idx) => {
      if (r.tags?.includes(tag)) acc.push(idx);
      return acc;
    }, []);
    if (matchingIndices.length > 0) {
      const currentPos = matchingIndices.indexOf(index);
      const nextIdx =
        currentPos === -1
          ? matchingIndices[0]
          : matchingIndices[(currentPos + 1) % matchingIndices.length];
      setIndex(nextIdx);
    }
  };

  return (
    <section
      id="reviews"
      className="scroll-mt-20 py-28 lg:py-36 px-6 lg:px-12 bg-[#E09290] border-t border-[#111111]/15 text-[#111111]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <EditorialReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#111111]/15">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#111111] font-bold font-mono">
                Client Reviews
              </span>
              <span className="text-[#111111]/40" aria-hidden="true">·</span>
              <span className="text-xs text-[#111111] font-mono font-semibold tabular-nums">
                {BUSINESS.rating.score.toFixed(1)} / 5.0 (
                {BUSINESS.rating.count} reviews)
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#111111] font-normal leading-[1.05]">
              What our clients <br />
              <span className="italic text-[#111111]/70">remember.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2.5 self-start md:self-end">
            <button
              type="button"
              onClick={() =>
                setIndex((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1))
              }
              className="p-2.5 sm:p-3.5 rounded-full glass-button-light text-[#111111] transition-all shadow-sm cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() =>
                setIndex((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1))
              }
              className="p-2.5 sm:p-3.5 rounded-full glass-button-light text-[#111111] transition-all shadow-sm cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </EditorialReveal>

        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#111111]/80 font-mono font-bold mr-2">
              Mentioned in reviews:
            </span>
            {BUSINESS.reviewTags.map((tag) => {
              const activeChip =
                tag.label === "+6" ? showMoreTags : selectedTag === tag.label;
              return (
                <button
                  key={tag.label}
                  type="button"
                  onClick={() => handleTagClick(tag.label)}
                  aria-expanded={tag.label === "+6" ? showMoreTags : undefined}
                  className={`relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-mono transition-colors duration-200 border cursor-pointer whitespace-nowrap shrink-0 tabular-nums ${
                    activeChip
                      ? "text-[#FAF8EE] border-[#111111] font-bold"
                      : "bg-[#FAF8EE]/85 text-[#111111] border-[#111111]/15 hover:bg-[#FAF8EE]"
                  }`}
                >
                  {activeChip && (
                    <motion.span
                      layoutId={
                        tag.label === "+6" ? undefined : "reviewTagPill"
                      }
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 bg-[#111111] rounded-full shadow-sm"
                    />
                  )}
                  <span className="relative z-10">
                    {tag.label}
                    {tag.count !== null ? ` (${tag.count})` : ""}
                  </span>
                </button>
              );
            })}
          </div>
          {showMoreTags && (
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-[#111111]/85">
              <span className="text-[11px] uppercase tracking-wider text-[#111111]/70">
                Also highlighted:
              </span>
              {extraTopics.map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1 rounded-full bg-[#FAF8EE]/70 border border-[#111111]/12 text-[#111111]"
                >
                  {topic}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: EASE_LUXURY }}
                className="space-y-8"
              >
                <Quote className="w-12 h-12 text-[#111111]/25" />
                <blockquote className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#111111] font-normal leading-[1.2] tracking-tight">
                  "{active.quote}"
                </blockquote>

                <div className="space-y-4 pt-4 border-t border-[#111111]/15">
                  <div className="space-y-1">
                    <p className="text-base text-[#111111] font-bold font-sans">
                      {active.author}
                    </p>
                    <p className="text-xs text-[#111111]/80 font-sans">
                      {active.role} ·{" "}
                      <strong className="text-[#111111] font-semibold">
                        {active.society}
                      </strong>{" "}
                      ({active.location})
                    </p>
                  </div>

                  {active.ownerResponse && (
                    <div className="p-5 rounded-2xl bg-[#FAF8EE]/90 border border-[#111111]/12 space-y-1 max-w-xl shadow-sm">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[#111111]/60 font-mono font-bold">
                        {active.ownerResponseTime}
                      </p>
                      <p className="text-sm text-[#111111] font-sans">
                        "{active.ownerResponse}"
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#111111]/80 font-mono font-bold">
              Client Highlights
            </p>
            <div className="space-y-2.5">
              {REVIEWS.map((review, idx) => (
                <motion.div
                  key={review.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setIndex(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setIndex(idx);
                    }
                  }}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2, ease: EASE_LUXURY }}
                  className={`p-4 rounded-2xl cursor-pointer border transition-all text-left ${
                    index === idx
                      ? "bg-[#FAF8EE] border-[#111111] text-[#111111] shadow-md"
                      : "bg-[#FAF8EE]/65 border-[#111111]/10 text-[#111111]/75 hover:bg-[#FAF8EE]"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#111111] font-sans">
                      {review.author}
                    </span>
                    <span className="text-[10px] text-[#111111] font-mono font-bold tabular-nums">
                      {review.rating.toFixed(1)} ★
                    </span>
                  </div>
                  <p className="text-xs text-[#111111]/70 truncate mt-1 font-sans">
                    {review.role} · {review.timeAgo}
                  </p>
                  <p className="text-[11px] text-[#111111]/85 italic mt-1 font-serif">
                    "{review.highlight}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
