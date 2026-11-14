import React from "react";
import { motion } from "motion/react";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { BUSINESS } from "../data/businessData";
import officeImage from "../assets/images/andheri_west_office_1794653915462.jpg";
import { ActionButton } from "./ActionButton";
import { EditorialReveal } from "./MotionPrimitives";
import { ResilientImage } from "./ResilientImage";

interface OfficeSectionProps {
  onOpenConsultation: () => void;
}

export const OfficeSection: React.FC<OfficeSectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section
      id="studio"
      className="scroll-mt-20 py-28 lg:py-36 px-6 lg:px-12 bg-[#FAF8EE] border-t border-[#111111]/15 text-[#111111]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <EditorialReveal className="max-w-3xl space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A85856] font-semibold font-mono block">
            Our Office
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#111111] font-normal leading-[1.05]">
            Visit our office.
          </h2>
          <p className="text-base sm:text-lg text-[#111111]/80 font-light leading-relaxed font-sans">
            Meet{" "}
            <strong className="font-medium text-[#111111]">
              {BUSINESS.leadAgent}
            </strong>{" "}
            and the {BUSINESS.name} team at Apna Bazar Rd, Azad Nagar, Andheri
            West.
          </p>
        </EditorialReveal>

        <EditorialReveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          <div className="lg:col-span-5 bg-[#F2EED8] border border-[#111111]/12 rounded-2xl p-8 sm:p-10 flex flex-col justify-between space-y-8 luxury-card">
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#111111]/15">
                <div>
                  <span className="font-serif text-2xl sm:text-3xl text-[#111111] block">
                    {BUSINESS.name}
                  </span>
                  <span className="text-xs text-[#111111]/70 font-sans">
                    {BUSINESS.category}
                  </span>
                </div>
                <span className="text-xs uppercase tracking-wider text-[#A85856] font-mono font-bold text-right">
                  Andheri West
                </span>
              </div>

              <div className="space-y-4 text-xs text-[#111111]/85 font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#A85856] mt-0.5 shrink-0" />
                  <div className="space-y-1">
                    <p className="font-semibold text-[#111111] text-sm">
                      {BUSINESS.address.line1}
                    </p>
                    <p>{BUSINESS.address.line2}</p>
                    <p>
                      {BUSINESS.address.area}, {BUSINESS.address.city},{" "}
                      {BUSINESS.address.state} {BUSINESS.address.pincode}
                    </p>
                    <p className="font-mono text-[11px] text-[#A85856] font-bold pt-0.5">
                      Plus Code: {BUSINESS.plusCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#111111]/10">
                  <Clock className="w-4 h-4 text-[#A85856] mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-[#111111]">
                      Office Hours
                    </p>
                    <p className="text-[#111111]/70">{BUSINESS.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-[#111111]/10">
                  <Phone className="w-4 h-4 text-[#A85856] mt-0.5 shrink-0" />
                  <div className="space-y-0.5">
                    <p className="font-semibold text-[#111111]">Direct Phone</p>
                    <a
                      href={`tel:${BUSINESS.phone}`}
                      className="text-[#111111]/85 font-mono font-semibold hover:text-[#A85856] hover:underline"
                    >
                      {BUSINESS.displayPhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#111111]/15">
              <ActionButton
                variant="secondary"
                size="md"
                fullWidth
                href={BUSINESS.address.googleMapsUrl}
                target="_blank"
                className="shadow-md"
                icon={<Navigation className="w-4 h-4" />}
                iconPosition="left"
              >
                Get Driving Directions
              </ActionButton>
              <ActionButton
                variant="glassLight"
                size="md"
                fullWidth
                onClick={onOpenConsultation}
                className="font-semibold text-center"
              >
                Book Office Consultation
              </ActionButton>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#F2EED8] border border-[#111111]/12 rounded-2xl p-4 sm:p-8 flex flex-col justify-center relative overflow-hidden luxury-card">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#111111] border border-[#111111]/10 group">
              <ResilientImage
                src={officeImage}
                width={800}
                sizes="(max-width: 768px) 100vw, 700px"
                loading="eager"
                alt="Al-Barkat Estate Agents Office Apna Bazar Rd Andheri West Mumbai"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-[#111111]/38" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-6 space-y-2.5 sm:space-y-3">
                <div className="relative flex items-center justify-center">
                  <motion.span
                    animate={{ scale: [1, 1.45, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-14 h-14 rounded-full bg-[#E09290]/45 pointer-events-none"
                  />
                  <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#E09290] text-[#111111] flex items-center justify-center shadow-xl">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
                <div className="glass-panel px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-lg max-w-full">
                  <p className="font-serif text-base sm:text-lg text-[#111111] font-medium">
                    {BUSINESS.name}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-[#111111]/80 uppercase tracking-wider font-mono">
                    Apna Bazar Rd, Dhake Colony · Andheri West
                  </p>
                </div>
              </div>
            </div>
          </div>
        </EditorialReveal>
      </div>
    </section>
  );
};
