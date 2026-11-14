import React from "react";
import { ArrowUpRight } from "lucide-react";
import { BUSINESS } from "../data/businessData";
import { ActionButton } from "./ActionButton";
import { EditorialReveal, StaggerGrid, StaggerItem } from "./MotionPrimitives";
import { ResilientImage } from "./ResilientImage";

interface PrinciplesSectionProps {
  onOpenConsultation: () => void;
}

export const PrinciplesSection: React.FC<PrinciplesSectionProps> = ({
  onOpenConsultation,
}) => {
  const principles = [
    {
      title: "For Sale Specialist",
      tagline: "Mentioned in 22 verified reviews.",
      description:
        "Whether you are purchasing a compact flat or a spacious family apartment, Al-Barkat curates genuine properties for sale across Andheri West with transparent terms.",
    },
    {
      title: "Budget-Friendly Options",
      tagline: "Mentioned in 9 verified reviews.",
      description:
        "We respect your budget ceiling and present realistic, value-driven studio apartments, rentals, and homes without pressuring you into overpriced inventory.",
    },
    {
      title: "Beautiful Houses & Flats",
      tagline: "Mentioned in 8 reviews · Flat finding in 5.",
      description:
        "Handpicked residences with natural light, clean society upkeep, and convenient access to Apna Bazar Rd, Dhake Colony, Sahakar Nagar & Azad Nagar.",
    },
    {
      title: "Quick Response & Care",
      tagline: "Mentioned in 8 reviews · 4.7 ★ (102 Reviews).",
      description:
        "Mr. Mohammed Saud and the Al-Barkat team are known for courteous conversations, speaking on your behalf to landlords, and helping set up your space.",
    },
  ];

  return (
    <section className="py-28 lg:py-36 px-6 lg:px-12 bg-[#F2EED8] border-t border-[#111111]/15 text-[#111111]">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="space-y-16">
          <EditorialReveal className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A85856] font-semibold font-mono block">
              Client Trust
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#111111] font-normal leading-[1.05]">
              Courteous guidance. <br />
              <span className="italic font-serif text-[#111111]/60">
                Smooth house hunts.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#111111]/80 font-light leading-relaxed font-sans">
              {BUSINESS.name} combines 4.7-star client trust across{" "}
              {BUSINESS.rating.count} reviews with attentive neighborhood
              expertise in Andheri West.
            </p>
          </EditorialReveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((item, idx) => (
              <StaggerItem
                key={item.title}
                className="p-8 bg-[#FAF8EE] border border-[#111111]/10 rounded-2xl space-y-4 flex flex-col justify-between luxury-card"
              >
                <div className="space-y-3">
                  <span className="font-mono text-xs text-[#A85856] font-bold block tabular-nums">
                    0{idx + 1}.
                  </span>
                  <h3 className="font-serif text-2xl text-[#111111]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A85856] uppercase tracking-wider font-mono font-bold">
                    {item.tagline}
                  </p>
                  <p className="text-xs text-[#111111]/75 font-light leading-relaxed pt-2 font-sans">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>

        <EditorialReveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-16 border-t border-[#111111]/15">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A85856] block font-mono font-bold">
                The Al-Barkat Philosophy
              </span>
              <h3 className="font-serif text-3xl sm:text-5xl text-[#111111] leading-tight">
                Behind every move <br />
                <span className="italic font-serif text-[#111111]/60">
                  is genuine attention to detail.
                </span>
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#111111]/85 font-light leading-relaxed font-sans">
              From studio apartments to houses for sale, {BUSINESS.leadAgent}{" "}
              and our team at{" "}
              <strong className="text-[#111111] font-semibold">
                {BUSINESS.address.fullAddress}
              </strong>{" "}
              stay helpful through every step — even down to setting up your
              room.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <ActionButton
                variant="secondary"
                size="md"
                onClick={onOpenConsultation}
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Schedule Advisory Visit
              </ActionButton>
              <ActionButton variant="glassLight" size="md" href="#studio">
                View Office Details
              </ActionButton>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#111111] border border-[#111111]/12 shadow-xl group">
            <ResilientImage
              src="https://images.unsplash.com/photo-1497366216548-37526070297c"
              width={800}
              sizes="(max-width: 768px) 100vw, 600px"
              alt="Al-Barkat Estate Agents Office in Andheri West Mumbai"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs uppercase tracking-widest text-[#E09290] font-mono font-bold">
                {BUSINESS.category}
              </p>
              <p className="font-serif text-xl text-[#F2EED8]">
                {BUSINESS.name}
              </p>
              <p className="text-xs text-[#F2EED8]/75 font-sans">
                Apna Bazar Rd, Azad Nagar, Andheri West, Mumbai 400053
              </p>
            </div>
          </div>
        </EditorialReveal>
      </div>
    </section>
  );
};
