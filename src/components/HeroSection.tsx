import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { BUSINESS } from "../data/businessData";
import { ActionButton } from "./ActionButton";
import { ResilientImage } from "./ResilientImage";

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onExploreWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onExploreWork,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const update = () => {
      setReduced(
        window.innerWidth < 768 ||
          window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      );
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.78, 1], [1, 0.86, 0]);
  const scrimOpacity = useTransform(scrollYProgress, [0, 1], [0.32, 0.68]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-20 md:pb-8 px-6 lg:px-12 overflow-hidden bg-[#111111]"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ scale: reduced ? 1 : scale, y: reduced ? "0%" : bgY }}
          className="w-full h-full relative will-change-transform"
        >
          <ResilientImage
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
            width={1920}
            quality={85}
            sizes="100vw"
            alt="Al-Barkat Estate Agents residences in Andheri West Mumbai"
            className="w-full h-full object-cover object-center brightness-[0.86] contrast-[1.04]"
            loading="eager"
            fetchPriority="high"
          />
          <motion.div
            style={{ opacity: reduced ? 0.5 : scrimOpacity }}
            className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/58 to-[#111111]/45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/75 via-[#111111]/25 to-[#111111]/40" />
        </motion.div>
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />
      </div>

      <motion.div
        style={{ y: reduced ? "0%" : textY, opacity: reduced ? 1 : opacity }}
        className="relative z-10 max-w-7xl mx-auto w-full my-auto py-6 md:py-10"
      >
        <div className="max-w-5xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-3 text-xs font-mono tracking-[0.22em] uppercase text-[#FAF8ED]/80"
          >
            <span className="text-[#E09290]">{BUSINESS.category}</span>
            <span aria-hidden="true" className="text-[#FAF8ED]/35">·</span>
            <span>Andheri West, Mumbai 400053</span>
            <span aria-hidden="true" className="text-[#FAF8ED]/35">·</span>
            <span className="tabular-nums text-[#FAF8ED]">
              {BUSINESS.rating.score} ★ ({BUSINESS.rating.count} Reviews)
            </span>
          </motion.div>

          <h1 className="space-y-2 font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] leading-[1.04] tracking-tight font-normal text-[#F2EED8]">
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block will-change-transform"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              >
                Homes{" "}
                <span className="italic font-normal font-serif text-[#E09290]">
                  worth
                </span>
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span
                className="block will-change-transform"
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 1.0,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                calling your own.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-xl md:text-2xl text-[#F2EED8]/90 font-light max-w-2xl leading-relaxed font-sans"
          >
            {BUSINESS.name} — studio apartments, budget-friendly flats, and
            beautiful houses across Andheri West.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
            className="pt-3 flex flex-wrap items-center gap-3 sm:gap-5"
          >
            <ActionButton
              variant="primary"
              size="lg"
              onClick={onExploreWork}
              data-cursor="EXPLORE"
              className="group"
              icon={
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
              }
            >
              Explore Properties
            </ActionButton>
            <ActionButton
              variant="glass"
              size="lg"
              onClick={onOpenConsultation}
              data-cursor="CONSULT"
              className="group"
              icon={
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              }
            >
              Book Advisory Call
            </ActionButton>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between border-t border-[#F2EED8]/15 pt-5 text-xs font-mono text-[#F2EED8]/70"
      >
        <span className="truncate">
          {BUSINESS.address.line1}, {BUSINESS.address.area} · {BUSINESS.hours}
        </span>
        <button
          type="button"
          onClick={onExploreWork}
          className="hidden sm:inline-flex items-center gap-2 text-[#F2EED8]/80 hover:text-[#E09290] transition-colors cursor-pointer uppercase tracking-[0.2em] shrink-0"
        >
          <span>Scroll to Homes</span>
          <motion.span
            animate={reduced ? undefined : { y: [0, 4, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex"
          >
            <ArrowDown className="w-3.5 h-3.5 text-[#E09290]" />
          </motion.span>
        </button>
      </motion.div>
    </section>
  );
};
