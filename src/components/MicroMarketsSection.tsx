import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { BUSINESS, MICRO_MARKETS } from "../data/businessData";
import {
  buildImageSrcSet,
  buildWhatsAppUrl,
  optimizeImageUrl,
} from "../utils/propertyLogic";
import { ActionButton } from "./ActionButton";
import { EASE_LUXURY, EditorialReveal } from "./MotionPrimitives";

export const MicroMarketsSection: React.FC = () => {
  const [selectedId, setSelectedId] = useState(MICRO_MARKETS[0].id);
  const current =
    MICRO_MARKETS.find((item) => item.id === selectedId) || MICRO_MARKETS[0];

  return (
    <section
      id="materials"
      className="scroll-mt-20 py-28 lg:py-36 px-6 lg:px-12 bg-[#F2EED8] border-t border-[#111111]/15 text-[#111111]"
    >
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        <EditorialReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#111111]/15">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A85856] font-mono font-semibold block">
              Andheri West Localities
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#111111] font-normal leading-[1.03]">
              Locations <br />
              <span className="italic font-serif text-[#111111]/50">
                mapped by value.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#111111]/80 font-light font-sans">
              Local knowledge across Apna Bazar Rd, Dhake Colony, Sahakar Nagar,
              and Azad Nagar to match you with the right home.
            </p>
          </div>
        </EditorialReveal>

        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-4 border-b border-[#111111]/10">
          {MICRO_MARKETS.map((item) => {
            const isActive = selectedId === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                data-cursor="SWATCH"
                className={`relative px-3.5 py-1.5 sm:px-6 sm:py-3 text-[11px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.2em] whitespace-nowrap shrink-0 transition-colors duration-200 border font-sans rounded-full cursor-pointer ${
                  isActive
                    ? "text-[#111111] font-bold border-transparent"
                    : "bg-[#FAF8EE] text-[#111111]/75 hover:text-[#111111] border-[#111111]/10"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="microMarketTabPill"
                    transition={{ type: "spring", stiffness: 360, damping: 32 }}
                    className="absolute inset-0 bg-[#E09290] rounded-full shadow-sm"
                  />
                )}
                <span className="relative z-10">
                  {item.label.split("&")[0].trim()}
                </span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden rounded-2xl bg-[#111111] border border-[#111111]/12 group shadow-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={optimizeImageUrl(current.imageUrl, 1000)}
                srcSet={buildImageSrcSet(current.imageUrl) || undefined}
                sizes="(max-width: 768px) 100vw, 800px"
                alt={current.label}
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.99 }}
                transition={{ duration: 0.45, ease: EASE_LUXURY }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-serif text-2xl sm:text-3xl text-[#F2EED8]">
                {current.label}
              </p>
              <p className="text-xs text-[#F2EED8]/75 mt-0.5 font-mono">
                {current.sublabel}
              </p>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${current.id}-details`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: EASE_LUXURY }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.22em] text-[#A85856] font-mono font-bold">
                  {current.category}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#111111] leading-tight">
                  {current.headline}
                </h3>
              </div>
              <p className="text-sm text-[#111111]/80 leading-relaxed font-light font-sans">
                {current.description}
              </p>
              <div className="p-5 bg-[#FAF8EE] border border-[#111111]/10 rounded-xl luxury-card">
                <p className="text-[#111111] italic font-serif text-base">
                  "{current.tactileFeel}"
                </p>
              </div>
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase tracking-wider text-[#111111]/60 block font-mono">
                  Locality Highlights
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.finishes.map((finish) => (
                    <div
                      key={finish}
                      className="p-3.5 bg-[#FAF8EE] border border-[#111111]/10 text-xs text-[#111111] flex items-start gap-2 font-sans rounded-xl"
                    >
                      <span className="text-[#A85856] font-bold shrink-0" aria-hidden="true">·</span>
                      <span className="leading-snug break-words">{finish}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 flex items-center gap-4">
                <ActionButton
                  variant="secondary"
                  size="md"
                  href={buildWhatsAppUrl(
                    BUSINESS.whatsappNumber,
                    `Hi Al-Barkat Estate Agents, I would like to inquire about flats and houses in ${current.label}.`,
                  )}
                  target="_blank"
                  data-cursor="SWATCH"
                  icon={<ArrowUpRight className="w-3.5 h-3.5 text-[#E09290]" />}
                >
                  Inquire About Locality
                </ActionButton>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
