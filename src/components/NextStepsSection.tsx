import React from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { BUSINESS } from "../data/businessData";
import { buildWhatsAppUrl } from "../utils/propertyLogic";
import { ActionButton } from "./ActionButton";
import { EditorialReveal } from "./MotionPrimitives";
import { ResilientImage } from "./ResilientImage";

interface NextStepsSectionProps {
  onOpenConsultation: () => void;
}

export const NextStepsSection: React.FC<NextStepsSectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section className="relative py-28 lg:py-36 px-6 lg:px-12 bg-[#F2EED8] text-[#111111] overflow-hidden border-t border-[#111111]/15">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-15">
        <ResilientImage
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
          width={1000}
          sizes="(max-width: 768px) 100vw, 1200px"
          loading="eager"
          alt="Al-Barkat Estate Agents residences in Andheri West Mumbai"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-grain opacity-40" />
      </div>

      <EditorialReveal className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight font-normal text-[#111111]">
          “Let’s find a space <br />
          <span className="italic font-serif text-[#111111]/60">
            that feels right at home.”
          </span>
        </h2>

        <p className="text-base sm:text-xl md:text-2xl text-[#111111]/80 font-light max-w-2xl mx-auto leading-relaxed font-sans">
          Share your budget, preferred locality, or flat requirements with{" "}
          {BUSINESS.leadAgent} for a smooth, responsive house hunt.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          <ActionButton
            variant="secondary"
            size="lg"
            onClick={onOpenConsultation}
            className="shadow-xl group"
            icon={
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            }
          >
            BOOK ADVISORY CALL
          </ActionButton>
          <ActionButton
            variant="glassLight"
            size="lg"
            href={buildWhatsAppUrl(
              BUSINESS.whatsappNumber,
              "Hello Al-Barkat Estate Agents team, I would like to schedule a property viewing in Andheri West, Mumbai.",
            )}
            target="_blank"
            icon={<MessageCircle className="w-4 h-4 text-[#A85856]" />}
            iconPosition="left"
          >
            WHATSAPP US
          </ActionButton>
        </div>
      </EditorialReveal>
    </section>
  );
};
