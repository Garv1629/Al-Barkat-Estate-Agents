import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "../data/businessData";
import { ActionButton } from "./ActionButton";
import { EditorialReveal } from "./MotionPrimitives";
import { ResilientImage } from "./ResilientImage";

interface ServicesSectionProps {
  onOpenConsultationWithService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenConsultationWithService,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const s0 = SERVICES[0];
  const s1 = SERVICES[1];
  const s2 = SERVICES[2];
  const s3 = SERVICES[3];
  const s4 = SERVICES[4];

  return (
    <section
      id="services"
      className="scroll-mt-20 bg-[#FAF8EE] text-[#111111] border-t border-[#111111]/15"
    >
      <div className="py-24 lg:py-32 px-6 lg:px-12 bg-[#F2EED8] border-b border-[#111111]/15">
        <EditorialReveal className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A85856] font-mono font-semibold block">
              Advisory Services
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#111111] font-normal leading-[1.03]">
              Advisory <br />
              <span className="italic font-serif text-[#111111]/50">
                disciplines.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#111111]/80 font-light leading-relaxed font-sans">
              Courteous communication, quick responses, and attentive guidance
              from Mr. Mohammed Saud and the Al-Barkat team.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 self-start md:self-end">
            {SERVICES.map((svc, idx) => (
              <button
                key={svc.id}
                type="button"
                onClick={() => {
                  setActiveIndex(idx);
                  const el = document.getElementById(`service-chapter-${idx}`);
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-300 border rounded-full cursor-pointer whitespace-nowrap shrink-0 ${
                  activeIndex === idx
                    ? "bg-[#E09290] text-[#111111] font-bold border-[#E09290] shadow-sm"
                    : "bg-[#FAF8EE] text-[#111111]/70 hover:text-[#111111] border-[#111111]/12"
                }`}
              >
                0{idx + 1} · {svc.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </EditorialReveal>
      </div>

      <div className="divide-y divide-[#111111]/15">
        <div
          id="service-chapter-0"
          className="scroll-mt-20 py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF8EE]"
        >
          <EditorialReveal className="max-w-7xl mx-auto space-y-10">
            <div className="border-b border-[#111111]/10 pb-4">
              <span className="font-mono text-xs text-[#A85856] font-bold tracking-[0.22em] uppercase">
                01 · Flat Finding &amp; House Hunts
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#111111] border border-[#111111]/12 shadow-xl group">
                <ResilientImage
                  src={s0.imageUrl}
                  width={1000}
                  sizes="(max-width: 768px) 100vw, 800px"
                  alt={s0.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
              <div className="lg:col-span-5 space-y-6">
                <h3 className="font-serif text-3xl sm:text-5xl text-[#111111] leading-tight">
                  {s0.title}
                </h3>
                <p className="text-base text-[#111111]/70 italic font-serif">
                  "{s0.tagline}"
                </p>
                <p className="text-sm text-[#111111]/80 font-light leading-relaxed font-sans">
                  {s0.summary}
                </p>
                <div className="space-y-2 pt-2 border-t border-[#111111]/15">
                  <p className="text-xs uppercase tracking-wider text-[#111111]/60 font-mono">
                    Included
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {s0.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-xs text-[#111111]/85 font-sans"
                      >
                        <span className="text-[#E09290] font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <ActionButton
                    variant="secondary"
                    size="md"
                    onClick={() => onOpenConsultationWithService(s0.title)}
                    data-cursor="DISCUSS"
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    Start Your House Hunt
                  </ActionButton>
                </div>
              </div>
            </div>
          </EditorialReveal>
        </div>

        <div
          id="service-chapter-1"
          className="scroll-mt-20 py-24 lg:py-32 px-6 lg:px-12 bg-[#E09290] text-[#111111]"
        >
          <EditorialReveal className="max-w-7xl mx-auto space-y-10">
            <div className="border-b border-[#111111]/15 pb-4">
              <span className="font-mono text-xs text-[#111111] font-bold tracking-[0.22em] uppercase">
                02 · For Sale &amp; Budget-Friendly Options
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
                <h3 className="font-serif text-3xl sm:text-5xl text-[#111111] leading-tight">
                  {s1.title}
                </h3>
                <p className="text-base text-[#111111]/85 italic font-serif">
                  "{s1.tagline}"
                </p>
                <p className="text-sm text-[#111111]/80 font-light leading-relaxed font-sans">
                  {s1.summary}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#111111]/15">
                  {s1.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-3.5 bg-[#FAF8EE] border border-[#111111]/10 rounded-xl luxury-card"
                    >
                      <p className="text-[10px] uppercase tracking-wider text-[#111111]/60 font-mono">
                        {spec.label}
                      </p>
                      <p className="text-xs text-[#111111] font-semibold mt-0.5 font-sans">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <ActionButton
                    variant="secondary"
                    size="md"
                    onClick={() => onOpenConsultationWithService(s1.title)}
                    data-cursor="DISCUSS"
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    Explore Properties For Sale
                  </ActionButton>
                </div>
              </div>
              <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#111111] border border-[#111111]/12 shadow-xl group order-1 lg:order-2">
                <ResilientImage
                  src={s1.imageUrl}
                  width={1000}
                  sizes="(max-width: 768px) 100vw, 800px"
                  alt={s1.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
            </div>
          </EditorialReveal>
        </div>

        <div
          id="service-chapter-2"
          className="scroll-mt-20 py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF8EE]"
        >
          <EditorialReveal className="max-w-7xl mx-auto space-y-10">
            <div className="border-b border-[#111111]/10 pb-4">
              <span className="font-mono text-xs text-[#A85856] font-bold tracking-[0.22em] uppercase">
                03 · Moving In &amp; Room Setup
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#111111] border border-[#111111]/12 shadow-xl group">
                <ResilientImage
                  src={s2.imageUrl}
                  width={1000}
                  sizes="(max-width: 768px) 100vw, 800px"
                  alt={s2.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
              <div className="lg:col-span-6 space-y-6">
                <h3 className="font-serif text-3xl sm:text-5xl text-[#111111] leading-tight">
                  {s2.title}
                </h3>
                <p className="text-base text-[#111111]/70 italic font-serif">
                  "{s2.tagline}"
                </p>
                <p className="text-sm text-[#111111]/80 font-light leading-relaxed font-sans">
                  {s2.summary}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-[#111111]/15">
                  {s2.deliverables.map((item) => (
                    <div
                      key={item}
                      className="p-3.5 bg-[#F2EED8] border border-[#111111]/10 rounded-xl luxury-card flex items-start gap-2 text-xs text-[#111111]/85 font-sans"
                    >
                      <span className="text-[#A85856] font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="leading-snug break-words">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <ActionButton
                    variant="secondary"
                    size="md"
                    onClick={() => onOpenConsultationWithService(s2.title)}
                    data-cursor="DISCUSS"
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    Schedule Assisted Site Visit
                  </ActionButton>
                </div>
              </div>
            </div>
          </EditorialReveal>
        </div>

        <div
          id="service-chapter-3"
          className="scroll-mt-20 py-24 lg:py-32 px-6 lg:px-12 bg-[#F2EED8]"
        >
          <EditorialReveal className="max-w-7xl mx-auto space-y-10">
            <div className="border-b border-[#111111]/15 pb-4">
              <span className="font-mono text-xs text-[#A85856] font-bold tracking-[0.22em] uppercase">
                04 · Landlord &amp; Owner Advocacy
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <h3 className="font-serif text-3xl sm:text-5xl text-[#111111] leading-tight">
                  {s3.title}
                </h3>
                <p className="text-base text-[#111111]/70 italic font-serif">
                  "{s3.tagline}"
                </p>
                <p className="text-sm text-[#111111]/80 font-light leading-relaxed font-sans">
                  {s3.summary}
                </p>
                <div className="space-y-2 pt-2 border-t border-[#111111]/15">
                  <p className="text-xs uppercase tracking-wider text-[#111111]/60 font-mono">
                    Included
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {s3.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-xs text-[#111111]/85 font-sans"
                      >
                        <span className="text-[#A85856] font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <ActionButton
                    variant="secondary"
                    size="md"
                    onClick={() => onOpenConsultationWithService(s3.title)}
                    data-cursor="DISCUSS"
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    Connect With Mr. Mohammed Saud
                  </ActionButton>
                </div>
              </div>
              <div className="lg:col-span-7 relative aspect-[16/11] overflow-hidden rounded-2xl bg-[#111111] border border-[#111111]/12 shadow-xl group">
                <ResilientImage
                  src={s3.imageUrl}
                  width={1000}
                  sizes="(max-width: 768px) 100vw, 800px"
                  alt={s3.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
            </div>
          </EditorialReveal>
        </div>

        <div
          id="service-chapter-4"
          className="scroll-mt-20 py-24 lg:py-32 px-6 lg:px-12 bg-[#FAF8EE]"
        >
          <EditorialReveal className="max-w-7xl mx-auto space-y-10">
            <div className="border-b border-[#111111]/10 pb-4">
              <span className="font-mono text-xs text-[#A85856] font-bold tracking-[0.22em] uppercase">
                05 · Quick-Response Advisory
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#111111] border border-[#111111]/12 shadow-xl group">
                <ResilientImage
                  src={s4.imageUrl}
                  width={1000}
                  sizes="(max-width: 768px) 100vw, 800px"
                  alt={s4.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
              <div className="lg:col-span-5 space-y-6">
                <h3 className="font-serif text-3xl sm:text-5xl text-[#111111] leading-tight">
                  {s4.title}
                </h3>
                <p className="text-base text-[#111111]/70 italic font-serif">
                  "{s4.tagline}"
                </p>
                <p className="text-sm text-[#111111]/80 font-light leading-relaxed font-sans">
                  {s4.summary}
                </p>
                <div className="space-y-2 pt-2 border-t border-[#111111]/15">
                  <p className="text-xs uppercase tracking-wider text-[#111111]/60 font-mono">
                    Included
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {s4.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-xs text-[#111111]/85 font-sans"
                      >
                        <span className="text-[#A85856] font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <ActionButton
                    variant="secondary"
                    size="md"
                    onClick={() => onOpenConsultationWithService(s4.title)}
                    data-cursor="DISCUSS"
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    Request Andheri West Shortlist
                  </ActionButton>
                </div>
              </div>
            </div>
          </EditorialReveal>
        </div>
      </div>
    </section>
  );
};
