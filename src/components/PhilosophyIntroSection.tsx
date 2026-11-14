import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { BUSINESS } from "../data/businessData";
import { ActionButton } from "./ActionButton";
import {
  EASE_LUXURY,
  EditorialReveal,
  StaggerGrid,
  StaggerItem,
} from "./MotionPrimitives";
import { ResilientImage } from "./ResilientImage";

interface PhilosophyIntroSectionProps {
  onOpenConsultation: () => void;
}

export const PhilosophyIntroSection: React.FC<PhilosophyIntroSectionProps> = ({
  onOpenConsultation,
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
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1.04, 1]);
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.42],
    ["inset(5% 3% 5% 3% round 16px)", "inset(0% 0% 0% 0% round 16px)"],
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-28 lg:py-36 px-6 lg:px-12 bg-[#F2EED8] text-[#111111] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />
      <div className="relative z-10 max-w-7xl mx-auto space-y-20 lg:space-y-28">
        <EditorialReveal className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#111111]/15 pb-6">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#111111]/75 font-sans">
            Advisory Philosophy
          </span>
          <span className="text-xs font-mono tracking-wider text-[#111111]/60 uppercase">
            Andheri West, Mumbai 400053
          </span>
        </EditorialReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <EditorialReveal className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass-badge text-[11px] uppercase tracking-[0.22em] text-[#111111]/85 font-mono">
              <span className="text-[#A85856]" aria-hidden="true">✦</span>
              <span>
                {BUSINESS.name} · Andheri West
              </span>
            </div>

            <div className="overflow-hidden">
              <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight font-normal text-[#111111]">
                “The best property is found <br />
                <span className="italic font-serif text-[#111111]/50">
                  with a smooth house hunt.”
                </span>
              </h2>
            </div>

            <p className="text-lg sm:text-2xl text-[#111111]/85 font-light max-w-2xl leading-relaxed font-sans">
              Led by {BUSINESS.leadAgent} on Apna Bazar Rd, our team pairs
              courteous guidance and quick responses with budget-friendly flats,
              studio apartments, and homes for sale.
            </p>
          </EditorialReveal>

          <EditorialReveal delay={0.12} className="lg:col-span-4 space-y-5 pt-4 lg:pt-8">
            <div className="p-8 bg-[#FAF8EE] border border-[#111111]/10 rounded-2xl luxury-card space-y-4">
              <div className="text-[11px] uppercase tracking-[0.2em] font-mono font-semibold text-[#A85856]">
                Personal Real Estate Advisor
              </div>
              <h3 className="font-serif text-2xl text-[#111111] leading-tight">
                From Flat Finding to Setting Up Your Room
              </h3>
              <p className="text-xs text-[#111111]/75 leading-relaxed font-sans">
                Whether you are looking for a studio apartment, a budget-friendly
                rental, or a house for sale, we speak on your behalf to landlords
                and assist with moving into your new space.
              </p>
              <div className="pt-2">
                <ActionButton
                  variant="secondary"
                  size="md"
                  onClick={onOpenConsultation}
                  data-cursor="DISCUSS"
                  className="font-semibold"
                  icon={<ArrowUpRight className="w-3.5 h-3.5 text-[#E09290]" />}
                >
                  Schedule Advisory Visit
                </ActionButton>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs">
              <div className="p-5 bg-[#FAF8EE] border border-[#111111]/10 rounded-xl luxury-card">
                <p className="font-serif text-2xl text-[#111111] tabular-nums">
                  {BUSINESS.rating.score} ★ ({BUSINESS.rating.count})
                </p>
                <p className="text-xs text-[#111111]/65 mt-1 font-sans">
                  Google Reviews
                </p>
              </div>
              <div className="p-5 bg-[#FAF8EE] border border-[#111111]/10 rounded-xl luxury-card">
                <p className="font-serif text-2xl text-[#111111] tabular-nums">
                  {BUSINESS.plusCode.split(" ")[0]}
                </p>
                <p className="text-xs text-[#111111]/65 mt-1 font-sans">
                  Apna Bazar Rd · {BUSINESS.hours}
                </p>
              </div>
            </div>
          </EditorialReveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.8, ease: EASE_LUXURY }}
          className="relative aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden rounded-2xl bg-[#111111] border border-[#111111]/10 shadow-xl"
        >
          <motion.div
            style={{
              scale: reduced ? 1 : scale,
              clipPath: reduced ? undefined : clipPath,
            }}
            className="w-full h-full relative will-change-transform"
          >
            <ResilientImage
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
              width={1200}
              sizes="(max-width: 768px) 100vw, 1200px"
              alt="Al-Barkat Estate Agents Andheri West Mumbai Residences"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-[#111111]/15">
          {[
            {
              num: "01",
              title: "For Sale",
              desc: "Mentioned in 22 reviews — curated residential flats and beautiful houses for sale in Andheri West.",
            },
            {
              num: "02",
              title: "Budget-Friendly",
              desc: "Mentioned in 9 reviews — honest, budget-aligned apartment and studio options without wasted tours.",
            },
            {
              num: "03",
              title: "Beautiful Houses",
              desc: "Mentioned in 8 reviews — airy, well-kept residences across Azad Nagar, Dhake Colony & Sahakar Nagar.",
            },
            {
              num: "04",
              title: "Quick Response",
              desc: "Mentioned in 8 reviews — prompt, courteous support from Mr. Mohammed Saud through move-in and setup.",
            },
          ].map((item) => (
            <StaggerItem key={item.num} className="space-y-2.5 group">
              <span className="text-xs font-mono text-[#A85856] font-bold block">
                {item.num}.
              </span>
              <h4 className="font-serif text-2xl text-[#111111] group-hover:text-[#A85856] transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-xs text-[#111111]/75 leading-relaxed font-sans">
                {item.desc}
              </p>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
};
