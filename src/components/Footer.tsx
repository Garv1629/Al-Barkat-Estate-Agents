import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp, FileText, MapPin, Shield, X } from "lucide-react";
import { BUSINESS } from "../data/businessData";
import { buildWhatsAppUrl } from "../utils/propertyLogic";
import { ActionButton } from "./ActionButton";
import { EASE_LUXURY } from "./MotionPrimitives";

interface FooterProps {
  onOpenConsultation: () => void;
}

type ModalType = "privacy" | "terms" | "listing" | null;

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const [modal, setModal] = useState<ModalType>(null);

  useEffect(() => {
    if (!modal) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModal(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [modal]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111111] border-t border-[#F2EED8]/15 pt-20 pb-28 md:pb-16 px-6 lg:px-12 text-xs text-[#F2EED8]/65">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16 border-b border-[#F2EED8]/10">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#E09290] font-mono font-bold block">
              Begin Your Property Search
            </span>
            <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F2EED8] font-normal leading-tight">
              Ready to find a home <br />
              <span className="italic font-serif text-[#E09290]">
                worth calling your own?
              </span>
            </h3>
            <p className="text-sm text-[#F2EED8]/75 font-light font-sans">
              Visit {BUSINESS.name} at {BUSINESS.address.fullAddress}, or connect
              with {BUSINESS.leadAgent} for studio apartments, budget-friendly
              flats, and beautiful houses across Andheri West.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <ActionButton
              variant="primary"
              size="md"
              onClick={onOpenConsultation}
              className="shadow-md text-center"
            >
              Book Advisory Consultation
            </ActionButton>
            <ActionButton
              variant="glass"
              size="md"
              href={buildWhatsAppUrl(BUSINESS.whatsappNumber)}
              target="_blank"
              className="text-center"
            >
              Chat on WhatsApp
            </ActionButton>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-1">
              <span className="font-serif text-2xl tracking-[0.14em] uppercase text-[#F2EED8] block">
                {BUSINESS.name}
              </span>
            </div>
            <p className="text-xs text-[#F2EED8]/75 font-light max-w-sm leading-relaxed font-sans">
              Rated {BUSINESS.rating.score} ★ ({BUSINESS.rating.count} reviews)
              — courteous real estate advisory for flats for sale,
              budget-friendly apartments, studio homes, landlord advocacy &amp;
              move-in support in Andheri West.
            </p>
          </div>

          <div className="space-y-3 font-sans">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#F2EED8] font-bold font-mono">
              Andheri West Localities
            </p>
            <ul className="space-y-2 text-xs text-[#F2EED8]/70">
              <li>
                <a
                  href="#materials"
                  className="hover:text-[#E09290] transition-colors"
                >
                  Azad Nagar &amp; Apna Bazar Rd
                </a>
              </li>
              <li>
                <a
                  href="#materials"
                  className="hover:text-[#E09290] transition-colors"
                >
                  Dhake Colony
                </a>
              </li>
              <li>
                <a
                  href="#materials"
                  className="hover:text-[#E09290] transition-colors"
                >
                  Sahakar Nagar
                </a>
              </li>
              <li>
                <a
                  href="#materials"
                  className="hover:text-[#E09290] transition-colors"
                >
                  Four Bungalows &amp; Seven Bungalows
                </a>
              </li>
              <li>
                <a
                  href="#materials"
                  className="hover:text-[#E09290] transition-colors"
                >
                  Lokhandwala Complex
                </a>
              </li>
              <li>
                <a
                  href="#materials"
                  className="hover:text-[#E09290] transition-colors"
                >
                  Versova &amp; Yari Road
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3 font-sans">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#F2EED8] font-bold font-mono">
              Advisory Services
            </p>
            <ul className="space-y-2 text-xs text-[#F2EED8]/70">
              <li>
                <a
                  href="#services"
                  className="hover:text-[#E09290] transition-colors"
                >
                  Flat Finding &amp; House Hunts
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#E09290] transition-colors"
                >
                  Properties For Sale
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#E09290] transition-colors"
                >
                  Budget-Friendly Homes
                </a>
              </li>
              <li>
                <a
                  href="#estimator"
                  className="hover:text-[#E09290] transition-colors"
                >
                  Property Budget Planner
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#E09290] transition-colors"
                >
                  Move-In &amp; Room Setup Support
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="hover:text-[#E09290] transition-colors tabular-nums"
                >
                  Call {BUSINESS.displayPhone}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3 font-sans">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#F2EED8] font-bold font-mono">
              Office Address
            </p>
            <p className="text-xs text-[#F2EED8]/85 leading-relaxed">
              {BUSINESS.address.line1}, <br />
              {BUSINESS.address.line2}, <br />
              {BUSINESS.address.area}, {BUSINESS.address.city},{" "}
              {BUSINESS.address.state} {BUSINESS.address.pincode}
            </p>
            <p className="text-[11px] text-[#F2EED8]/60 pt-1 font-mono">
              {BUSINESS.hours}
            </p>
            <p className="text-xs text-[#F2EED8] font-semibold tabular-nums">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="hover:text-[#E09290] transition-colors"
              >
                {BUSINESS.displayPhone}
              </a>
            </p>
            <p className="text-[11px] text-[#E09290] pt-1 font-mono">
              <a
                href={BUSINESS.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {BUSINESS.plusCode} ↗
              </a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-[#F2EED8]/10 font-sans text-[11px] leading-relaxed text-[#F2EED8]/60">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-[#F2EED8]/75">
            <button
              type="button"
              onClick={() => setModal("privacy")}
              className="hover:text-[#E09290] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-[#F2EED8]/25">·</span>
            <button
              type="button"
              onClick={() => setModal("terms")}
              className="hover:text-[#E09290] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Advisory Terms
            </button>
            <span className="text-[#F2EED8]/25">·</span>
            <button
              type="button"
              onClick={() => setModal("listing")}
              className="hover:text-[#E09290] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Google Business Details ({BUSINESS.plusCode})
            </button>
            <span className="text-[#F2EED8]/25">·</span>
            <a
              href={BUSINESS.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E09290] transition-colors underline-offset-4 hover:underline"
            >
              Open on Google Maps ↗
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-[#F2EED8]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}.{" "}
            {BUSINESS.address.fullAddress}.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="glass-button rounded-full px-4 py-2 flex items-center gap-1.5 text-[#F2EED8] transition-colors uppercase tracking-wider font-mono font-bold text-[10px] cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div
            key="footer-modal-backdrop"
            role="dialog"
            aria-modal="true"
            onClick={(e) => {
              if (e.target === e.currentTarget) setModal(null);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE_LUXURY }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111111]/85 backdrop-blur-xl text-[#111111]"
          >
            <motion.div
              key="footer-modal-card"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.3, ease: EASE_LUXURY }}
              className="relative w-full max-w-2xl bg-[#FAF8EE] border border-[#111111]/15 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[85vh]"
            >
              <button
                type="button"
                onClick={() => setModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full glass-button-light text-[#111111]/70 hover:text-[#111111] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {modal === "privacy" && (
                <div className="space-y-5 text-left font-sans">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-[#A85856] font-bold">
                    <Shield className="w-4 h-4" />
                    <span>Privacy Policy</span>
                  </div>
                  <h3 className="font-serif text-3xl text-[#111111]">
                    Client Privacy &amp; Data Care
                  </h3>
                  <div className="space-y-3 text-xs text-[#111111]/80 leading-relaxed">
                    <p>
                      <strong>{BUSINESS.name}</strong> respects your privacy. We
                      collect only the details (name, phone number, property
                      preferences, and locality notes) you voluntarily share
                      through our consultation form, telephone (
                      {BUSINESS.displayPhone}), or WhatsApp.
                    </p>
                    <p>
                      <strong>Purpose of Information:</strong> Your details are
                      used exclusively to shortlist suitable flats, studio
                      apartments, or properties for sale in Andheri West,
                      schedule assisted viewings, and coordinate courteously
                      with landlords and property owners on your behalf.
                    </p>
                    <p>
                      <strong>Contact Office:</strong> Visit us at{" "}
                      {BUSINESS.address.fullAddress} or call{" "}
                      {BUSINESS.displayPhone} ({BUSINESS.hours}).
                    </p>
                  </div>
                </div>
              )}

              {modal === "terms" && (
                <div className="space-y-5 text-left font-sans">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-[#A85856] font-bold">
                    <FileText className="w-4 h-4" />
                    <span>Advisory Terms</span>
                  </div>
                  <h3 className="font-serif text-3xl text-[#111111]">
                    Property Advisory &amp; Viewing Terms
                  </h3>
                  <div className="space-y-3 text-xs text-[#111111]/80 leading-relaxed">
                    <p>
                      <strong>Client-First Property Search:</strong>{" "}
                      {BUSINESS.name} assists clients with studio apartments,
                      budget-friendly flats, beautiful houses, and residential
                      properties for sale in Andheri West, Mumbai.
                    </p>
                    <p>
                      <strong>Property Availability &amp; Pricing:</strong> All
                      asking prices, rental terms, carpet areas, and society
                      norms are subject to owner confirmation during scheduled
                      site visits and landlord discussions.
                    </p>
                    <p>
                      <strong>Office Jurisdiction:</strong> Operated from{" "}
                      {BUSINESS.address.fullAddress}, Mumbai, Maharashtra.
                    </p>
                  </div>
                </div>
              )}

              {modal === "listing" && (
                <div className="space-y-5 text-left font-sans">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-[#A85856] font-bold">
                    <MapPin className="w-4 h-4" />
                    <span>Google Business Details</span>
                  </div>
                  <h3 className="font-serif text-3xl text-[#111111]">
                    {BUSINESS.name}
                  </h3>
                  <div className="space-y-3 text-xs text-[#111111]/80 leading-relaxed">
                    <div className="p-4 bg-[#F2EED8] rounded-xl border border-[#111111]/10 space-y-1.5">
                      <p className="font-mono text-xs text-[#111111]">
                        <strong>Business Name:</strong> {BUSINESS.name}
                      </p>
                      <p className="font-mono text-xs text-[#A85856] font-bold tabular-nums">
                        <strong>Category &amp; Rating:</strong>{" "}
                        {BUSINESS.category} · {BUSINESS.rating.score} ★ (
                        {BUSINESS.rating.count} reviews)
                      </p>
                      <p className="font-mono text-xs text-[#111111]">
                        <strong>Address:</strong> {BUSINESS.address.fullAddress}
                      </p>
                      <p className="font-mono text-xs text-[#111111]">
                        <strong>Hours:</strong> {BUSINESS.hours}
                      </p>
                      <p className="font-mono text-xs text-[#111111] tabular-nums">
                        <strong>Phone:</strong> {BUSINESS.displayPhone}
                      </p>
                      <p className="font-mono text-xs text-[#111111]">
                        <strong>Plus Code:</strong> {BUSINESS.plusCode}
                      </p>
                    </div>
                    <p>
                      Frequently highlighted in client reviews for:{" "}
                      <strong>for sale (22)</strong>,{" "}
                      <strong>budget-friendly (9)</strong>,{" "}
                      <strong>beautiful house (8)</strong>,{" "}
                      <strong>quick response (8)</strong>, and{" "}
                      <strong>flat finding (5)</strong>.
                    </p>
                  </div>
                </div>
              )}

              <div className="pt-6 mt-6 border-t border-[#111111]/10 flex justify-end">
                <ActionButton
                  variant="secondary"
                  size="sm"
                  onClick={() => setModal(null)}
                >
                  Close
                </ActionButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};
