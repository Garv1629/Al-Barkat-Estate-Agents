import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { BUSINESS } from "../data/businessData";
import {
  BudgetInclusions,
  buildWhatsAppUrl,
  calculatePropertyEstimate,
  LocationTier,
  PropertyTypology,
} from "../utils/propertyLogic";
import { ActionButton } from "./ActionButton";
import { EASE_LUXURY, EditorialReveal } from "./MotionPrimitives";

interface EstimatorSectionProps {
  onOpenConsultationWithEstimate: (context: string) => void;
}

export const EstimatorSection: React.FC<EstimatorSectionProps> = ({
  onOpenConsultationWithEstimate,
}) => {
  const [typology, setTypology] = useState<PropertyTypology>("2bhk");
  const [carpetArea, setCarpetArea] = useState<number>(820);
  const [inclusions, setInclusions] = useState<BudgetInclusions>({
    budgetFriendly: true,
    beautifulHouse: true,
    studioOption: true,
    quickResponse: true,
    landlordNegotiation: true,
    roomSetupHelp: true,
  });
  const [tier, setTier] = useState<LocationTier>("prime");

  const handleTypologyChange = (next: PropertyTypology) => {
    setTypology(next);
    if (next === "studio") setCarpetArea(420);
    if (next === "2bhk") setCarpetArea(820);
    if (next === "3bhk") setCarpetArea(1250);
    if (next === "4bhk") setCarpetArea(1800);
  };

  const estimate = calculatePropertyEstimate(carpetArea, inclusions, tier);

  const typologyLabels: Record<PropertyTypology, string> = {
    studio: "Studio / 1 BHK Flat",
    "2bhk": "2 BHK Apartment",
    "3bhk": "3 BHK Family Flat",
    "4bhk": "4 BHK Beautiful House",
  };

  const tierLabels: Record<LocationTier, string> = {
    budget: "Budget-Friendly · Azad Nagar & Sahakar Nagar",
    prime: "Apna Bazar Rd & Dhake Colony (Prime)",
    luxury: "Four Bungalows, Lokhandwala & Versova",
  };

  const selectedInclusions = [
    inclusions.budgetFriendly && "Budget-Friendly Shortlist",
    inclusions.beautifulHouse && "Beautiful House Collection",
    inclusions.studioOption && "Studio & 1 BHK Flat Finding",
    inclusions.quickResponse && "Quick-Response Viewing Support",
    inclusions.landlordNegotiation && "Direct Landlord Advocacy",
    inclusions.roomSetupHelp && "Move-In & Room Setup Assistance",
  ].filter(Boolean) as string[];

  const estimateSummary = `${typologyLabels[typology]} (~${carpetArea} sq ft) · Locality: ${tierLabels[tier]} · Preferences: ${selectedInclusions.slice(0, 3).join(", ")} · Estimated Budget: ${estimate.low} – ${estimate.high}`;

  const whatsappMessage = `Hello Al-Barkat Estate Agents, I used your property budget planner for a ${typologyLabels[typology]} (~${carpetArea} sq ft) in ${tierLabels[tier]}. My estimated range is ${estimate.low} - ${estimate.high}. I would like to speak with ${BUSINESS.leadAgent} for available options.`;

  return (
    <section
      id="estimator"
      className="scroll-mt-20 py-24 lg:py-32 px-6 lg:px-12 bg-[#F2EED8] border-t border-[#111111]/15 text-[#111111]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <EditorialReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#111111]/15">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A85856] font-mono font-semibold block">
              Budget Planner
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#111111] font-normal leading-[1.05]">
              Plan your <br />
              <span className="italic text-[#111111]/60">
                property budget.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#111111]/80 font-light font-sans">
              Estimate your budget for flats and houses for sale across Azad
              Nagar, Dhake Colony &amp; Sahakar Nagar.
            </p>
          </div>
        </EditorialReveal>

        <EditorialReveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 bg-[#FAF8EE] border border-[#111111]/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_18px_50px_-20px_rgba(17,17,15,0.12)]">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#A85856] block font-mono font-bold">
                01 · Select Property Typology
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(["studio", "2bhk", "3bhk", "4bhk"] as PropertyTypology[]).map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => handleTypologyChange(item)}
                      className={`py-2 px-2.5 sm:py-3 sm:px-3 text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-200 border font-sans rounded-full cursor-pointer whitespace-nowrap ${
                        typology === item
                          ? "bg-[#E09290] text-[#111111] font-bold border-[#E09290] shadow-sm"
                          : "bg-[#F2EED8] text-[#111111]/75 border-[#111111]/10 hover:border-[#111111]/30"
                      }`}
                    >
                      {item === "studio" && "Studio / 1 BHK"}
                      {item === "2bhk" && "2 BHK"}
                      {item === "3bhk" && "3 BHK"}
                      {item === "4bhk" && "4 BHK House"}
                    </button>
                  ),
                )}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <label
                  htmlFor="carpet-area-range"
                  className="uppercase tracking-[0.2em] text-[#A85856] font-mono font-bold cursor-pointer"
                >
                  02 · Approximate Carpet Area
                </label>
                <span className="font-mono text-sm text-[#111111] font-bold tabular-nums">
                  {carpetArea.toLocaleString()} sq ft
                </span>
              </div>
              <input
                id="carpet-area-range"
                type="range"
                min={350}
                max={2500}
                step={50}
                value={carpetArea}
                onChange={(e) => setCarpetArea(Number(e.target.value))}
                aria-label="Approximate Carpet Area in square feet"
                className="w-full accent-[#E09290] bg-[#F2EED8] h-2 cursor-pointer rounded-full"
              />
              <div className="flex justify-between text-[11px] text-[#111111]/60 font-mono tabular-nums">
                <span>350 sq ft</span>
                <span>1,250 sq ft</span>
                <span>2,500+ sq ft</span>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#A85856] block font-mono font-bold">
                03 · Preferred Advisory &amp; Property Filters
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  {
                    key: "budgetFriendly" as const,
                    label: "Budget-Friendly Options",
                  },
                  {
                    key: "beautifulHouse" as const,
                    label: "Beautiful Houses",
                  },
                  {
                    key: "studioOption" as const,
                    label: "Studio & Flat Finding",
                  },
                  {
                    key: "quickResponse" as const,
                    label: "Quick-Response Viewings",
                  },
                  {
                    key: "landlordNegotiation" as const,
                    label: "Landlord Advocacy",
                  },
                  {
                    key: "roomSetupHelp" as const,
                    label: "Move-In & Room Setup Care",
                  },
                ].map((item) => {
                  const active = inclusions[item.key];
                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() =>
                        setInclusions((prev) => ({
                          ...prev,
                          [item.key]: !prev[item.key],
                        }))
                      }
                      className={`p-2.5 sm:p-3.5 text-left text-xs flex items-center justify-between border transition-all duration-200 font-sans rounded-2xl cursor-pointer ${
                        active
                          ? "bg-[#F2EED8] border-[#E09290] text-[#111111] font-medium shadow-sm"
                          : "bg-[#FAF8EE] border-[#111111]/10 text-[#111111]/65 hover:text-[#111111]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center border text-[10px] shrink-0 transition-colors ${
                          active
                            ? "bg-[#E09290] border-[#E09290] text-[#111111] font-bold"
                            : "border-[#111111]/20 text-transparent"
                        }`}
                      >
                        ✓
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#A85856] block font-mono font-bold">
                04 · Andheri West Locality Tier
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  {
                    id: "budget" as const,
                    title: "Budget-Friendly",
                    desc: "Azad Nagar & Sahakar Nagar · ₹21,500/sq ft",
                  },
                  {
                    id: "prime" as const,
                    title: "Prime Core",
                    desc: "Apna Bazar Rd & Dhake Colony · ₹26,500/sq ft",
                  },
                  {
                    id: "luxury" as const,
                    title: "Coastal & High-Rise",
                    desc: "Four Bungalows & Versova · ₹33,000/sq ft",
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTier(item.id)}
                    className={`p-3 sm:p-4 text-left border transition-all duration-200 rounded-2xl cursor-pointer ${
                      tier === item.id
                        ? "bg-[#E09290] text-[#111111] border-[#E09290] shadow-sm"
                        : "bg-[#F2EED8] text-[#111111]/75 border-[#111111]/10 hover:border-[#111111]/30"
                    }`}
                  >
                    <p className="text-xs uppercase tracking-wider font-bold font-sans">
                      {item.title}
                    </p>
                    <p className="text-[11px] mt-1 text-[#111111]/75 font-sans">
                      {item.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#F2EED8] border border-[#111111]/12 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-8 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#111111]/15">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#A85856] font-mono font-bold">
                  Property Forecast
                </span>
                <span className="text-xs text-[#111111]/65 font-mono">
                  {typologyLabels[typology]}
                </span>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-[#111111]/60 uppercase tracking-wider font-mono">
                  Estimated Purchase Range
                </p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${estimate.low}-${estimate.high}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25, ease: EASE_LUXURY }}
                    className="font-serif text-4xl sm:text-5xl text-[#111111] tabular-nums"
                  >
                    {estimate.low} – {estimate.high}
                  </motion.div>
                </AnimatePresence>
                <p className="text-xs text-[#111111]/65 font-sans">
                  *Indicative Andheri West market guidance; rental &amp; studio
                  lease options also available.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#111111]/15">
                <p className="text-xs uppercase tracking-wider text-[#111111]/60 font-mono">
                  Included in this plan
                </p>
                <div className="space-y-1.5">
                  {selectedInclusions.map((inc) => (
                    <div
                      key={inc}
                      className="flex items-center gap-2 text-xs text-[#111111]/85 font-sans"
                    >
                      <span className="text-[#A85856] font-bold">✓</span>
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#FAF8EE] border border-[#111111]/10 rounded-xl space-y-1 text-xs shadow-sm">
                <div className="flex items-center gap-2 text-[#111111]">
                  <CheckCircle2 className="w-4 h-4 text-[#A85856]" />
                  <span className="font-semibold font-sans">
                    Guided by {BUSINESS.leadAgent}
                  </span>
                </div>
                <p className="text-[11px] text-[#111111]/70 pl-6 font-sans">
                  Includes landlord advocacy, flat finding &amp; move-in care.
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#111111]/15">
              <ActionButton
                variant="secondary"
                size="lg"
                fullWidth
                onClick={() => onOpenConsultationWithEstimate(estimateSummary)}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request Verified Listings
              </ActionButton>
              <ActionButton
                variant="glassLight"
                size="md"
                fullWidth
                href={buildWhatsAppUrl(BUSINESS.whatsappNumber, whatsappMessage)}
                target="_blank"
                className="font-semibold text-center"
                icon={<MessageCircle className="w-4 h-4 text-[#A85856]" />}
                iconPosition="left"
              >
                Send Plan to WhatsApp
              </ActionButton>
            </div>
          </div>
        </EditorialReveal>
      </div>
    </section>
  );
};
