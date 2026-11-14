import React from "react";
import { motion } from "motion/react";
import { ClipboardCheck, Compass, Home, Search } from "lucide-react";
import {
  EASE_LUXURY,
  EditorialReveal,
  StaggerGrid,
  StaggerItem,
} from "./MotionPrimitives";

export const ProcessSection: React.FC = () => {
  const stages = [
    {
      number: "01",
      title: "DISCOVER",
      headline: "Requirements & Budget Alignment",
      description:
        "We listen closely to your budget, configuration preference (studio apartment, 1, 2, 3 BHK or house for sale), and preferred lanes around Azad Nagar, Dhake Colony & Sahakar Nagar.",
      focus: "Attentive brief & budget-friendly matching",
      icon: Search,
    },
    {
      number: "02",
      title: "SHORTLIST",
      headline: "Quick Response & Curated Options",
      description:
        "With quick turnaround, Mr. Mohammed Saud shares verified apartments and beautiful houses that genuinely fit your criteria without wasting your time.",
      focus: "Curated flat finding & verified for-sale listings",
      icon: ClipboardCheck,
    },
    {
      number: "03",
      title: "INSPECT",
      headline: "Guided Tours & Landlord Advocacy",
      description:
        "We accompany you on property visits and speak courteously on your behalf to landlords and sellers to align fair terms and smooth agreements.",
      focus: "Courteous conversations & owner negotiations",
      icon: Compass,
    },
    {
      number: "04",
      title: "MOVE IN",
      headline: "Documentation & Room Setup Help",
      description:
        "From paperwork to moving into your new space and attention to detail in setting up your room, our team stays super helpful until you feel at home.",
      focus: "Move-in coordination & room setup support",
      icon: Home,
    },
  ];

  return (
    <section
      id="process"
      className="scroll-mt-20 py-28 lg:py-36 px-6 lg:px-12 bg-[#FAF8EE] text-[#111111] border-t border-[#111111]/15 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-30" />
      <div className="relative z-10 max-w-7xl mx-auto space-y-20 lg:space-y-24">
        <EditorialReveal className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[#111111]/15">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A85856] font-mono block">
              Advisory Process
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#111111] font-normal leading-[1.05]">
              Flat finding to <br />
              <span className="italic text-[#111111]/60">moving in.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#111111]/80 font-light leading-relaxed font-sans">
              A courteous, responsive four-stage journey built around your
              requirements in Andheri West.
            </p>
          </div>
        </EditorialReveal>

        <div className="relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE_LUXURY }}
            className="hidden lg:block absolute top-11 left-12 right-12 h-[1px] bg-[#111111]/15 origin-left z-0"
          />
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <StaggerItem
                  key={stage.number}
                  className="bg-[#F2EED8] border border-[#111111]/10 rounded-2xl p-8 space-y-6 flex flex-col justify-between luxury-card group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#A85856] font-bold tabular-nums">
                        {stage.number}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-[#FAF8EE] border border-[#111111]/12 flex items-center justify-center group-hover:border-[#E09290] group-hover:bg-[#E09290]/15 transition-colors duration-300">
                        <Icon className="w-4 h-4 text-[#111111] group-hover:text-[#A85856] transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-serif text-3xl text-[#111111] tracking-wide">
                        {stage.title}
                      </h3>
                      <p className="text-xs text-[#111111]/65 uppercase tracking-wider font-mono">
                        {stage.headline}
                      </p>
                    </div>
                    <p className="text-xs text-[#111111]/80 font-light leading-relaxed font-sans">
                      {stage.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
};
