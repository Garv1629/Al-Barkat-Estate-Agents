import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  X,
} from "lucide-react";
import { BUSINESS } from "../data/businessData";
import { buildWhatsAppUrl } from "../utils/propertyLogic";
import { ActionButton } from "./ActionButton";
import { EASE_LUXURY } from "./MotionPrimitives";

interface ConsultationFunnelProps {
  isOpen: boolean;
  onClose: () => void;
  initialStep?: number;
  initialContext?: string;
}

export const ConsultationFunnel: React.FC<ConsultationFunnelProps> = ({
  isOpen,
  onClose,
  initialStep = 1,
  initialContext = "",
}) => {
  const [step, setStep] = useState<number>(initialStep);
  const [propertyType, setPropertyType] = useState<string>("2 BHK Flat");
  const [services, setServices] = useState<string[]>([
    "Flat Finding & Property Shortlist",
  ]);
  const [timeline, setTimeline] = useState<string>(
    "Immediate Move-In / Ready Flat",
  );
  const [meetingMode, setMeetingMode] = useState<string>(
    "Office Visit (Apna Bazar Rd, Andheri West)",
  );
  const [details, setDetails] = useState({
    name: "",
    phone: "",
    email: "",
    locality: "",
    notes: initialContext || "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>("");

  useEffect(() => {
    if (!isOpen) return;
    setStep(initialStep);
    setSubmitted(false);
    setFormError("");
    setDetails((prev) => ({ ...prev, notes: initialContext || "" }));
  }, [initialStep, initialContext, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow =
        prevOverflow === "hidden" ? "" : prevOverflow || "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  const toggleService = (service: string) => {
    if (services.includes(service)) {
      if (services.length > 1) {
        setServices(services.filter((s) => s !== service));
      }
    } else {
      setServices([...services, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedName = details.name.trim();
    const trimmedPhone = details.phone.trim();
    const trimmedLocality = details.locality.trim();
    const digitsOnly = trimmedPhone.replace(/\D/g, "");

    if (!trimmedName) {
      setFormError("Please enter your full name.");
      return;
    }
    if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      setFormError("Please enter a valid phone number.");
      return;
    }
    if (!trimmedLocality) {
      setFormError("Please enter your preferred Andheri West locality.");
      return;
    }

    setFormError("");
    setDetails((prev) => ({
      ...prev,
      name: trimmedName,
      phone: trimmedPhone,
      locality: trimmedLocality,
      email: prev.email.trim(),
      notes: prev.notes.trim(),
    }));
    setSubmitted(true);
  };

  const whatsappUrl = buildWhatsAppUrl(
    BUSINESS.whatsappNumber,
    `Hello Al-Barkat Estate Agents (${BUSINESS.leadAgent})! I would like to schedule a property consultation for a ${propertyType} in ${details.locality || "Andheri West, Mumbai"}.\nScope: ${services.join(", ")}\nTimeline: ${timeline}\nPreferred Mode: ${meetingMode}\nClient: ${details.name || "Home Seeker"} (${details.phone || "Phone pending"})`,
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="consultation-funnel-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Schedule Advisory Consultation"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE_LUXURY }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#111111]/85 backdrop-blur-xl"
        >
          <motion.div
            key="consultation-funnel-card"
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.35, ease: EASE_LUXURY }}
            className="relative w-full max-w-2xl bg-[#FAF8EE] border border-[#111111]/15 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[92vh] text-[#111111]"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full glass-button-light text-[#111111]/70 hover:text-[#111111] transition-colors cursor-pointer"
              aria-label="Close Consultation Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="funnel-submitted"
                  initial={{ opacity: 0, scale: 0.97, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: EASE_LUXURY }}
                  className="py-8 space-y-6 text-center"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#E09290]/25 flex items-center justify-center text-[#A85856]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.22em] text-[#A85856] font-mono font-bold">
                      Advisory Request Received
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#111111]">
                      Thank you, {details.name || "Home Seeker"}.
                    </h3>
                    <p className="text-sm text-[#111111]/70 max-w-md mx-auto font-sans">
                      {BUSINESS.leadAgent} and the {BUSINESS.name} team will get
                      back to you promptly to arrange your property viewings in
                      Andheri West.
                    </p>
                  </div>
                  <div className="p-5 bg-[#F2EED8] border border-[#111111]/12 rounded-2xl luxury-card max-w-md mx-auto text-xs text-left space-y-2 font-sans">
                    <div className="flex justify-between text-[#111111]/60 gap-4">
                      <span>Property</span>
                      <span className="text-[#111111] font-semibold text-right">
                        {propertyType} ({details.locality || "Andheri West"})
                      </span>
                    </div>
                    <div className="flex justify-between text-[#111111]/60 gap-4">
                      <span>Scope</span>
                      <span className="text-[#111111] font-semibold text-right">
                        {services.slice(0, 2).join(", ")}
                      </span>
                    </div>
                    <div className="flex justify-between text-[#111111]/60 gap-4">
                      <span>Venue</span>
                      <span className="text-[#111111] font-semibold text-right">
                        {meetingMode}
                      </span>
                    </div>
                  </div>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <ActionButton
                      variant="glassLight"
                      size="md"
                      href={whatsappUrl}
                      target="_blank"
                      className="w-full sm:w-auto font-semibold"
                      icon={<MessageCircle className="w-4 h-4 text-[#A85856]" />}
                      iconPosition="left"
                    >
                      Confirm Instantly via WhatsApp
                    </ActionButton>
                    <ActionButton
                      variant="secondary"
                      size="md"
                      onClick={onClose}
                      className="w-full sm:w-auto"
                    >
                      Done
                    </ActionButton>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="funnel-active"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#111111]/60 uppercase tracking-[0.22em] font-mono font-bold pr-8">
                      <span className="text-[#A85856]">{BUSINESS.name}</span>
                      <span className="glass-badge rounded-full px-3 py-0.5 text-[10px] tabular-nums">
                        Step {step} of 4
                      </span>
                    </div>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#111111]">
                      Let's find your Andheri West home.
                    </h3>
                    <p className="text-xs text-[#111111]/65 font-sans">
                      {BUSINESS.address.fullAddress} · {BUSINESS.displayPhone} ·{" "}
                      {BUSINESS.hours}
                    </p>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((num) => (
                      <div
                        key={num}
                        className="h-1.5 rounded-full bg-[#111111]/10 overflow-hidden"
                      >
                        <motion.div
                          initial={false}
                          animate={{ scaleX: num <= step ? 1 : 0 }}
                          transition={{ duration: 0.35, ease: EASE_LUXURY }}
                          className="h-full w-full bg-[#E09290] origin-left rounded-full"
                        />
                      </div>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="funnel-step-1"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.25, ease: EASE_LUXURY }}
                        className="space-y-6"
                      >
                        <div className="space-y-1">
                          <span className="text-xs uppercase tracking-[0.2em] text-[#A85856] font-mono font-bold">
                            Step 01
                          </span>
                          <h4 className="font-serif text-2xl text-[#111111]">
                            What property are you looking for?
                          </h4>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {[
                            "Studio Apartment",
                            "1 BHK Budget Flat",
                            "2 BHK Flat",
                            "3 BHK Family Home",
                            "4 BHK Beautiful House",
                            "Property For Sale",
                          ].map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setPropertyType(option)}
                              className={`p-4 rounded-xl text-left border transition-all duration-200 text-xs uppercase tracking-wider font-sans cursor-pointer ${
                                propertyType === option
                                  ? "bg-[#E09290] text-[#111111] font-bold border-[#E09290] shadow-sm"
                                  : "bg-[#F2EED8] text-[#111111]/75 border-[#111111]/10 hover:border-[#111111]/30"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                        <div className="pt-4 flex justify-end">
                          <ActionButton
                            variant="secondary"
                            size="md"
                            onClick={() => setStep(2)}
                            className="shadow-md"
                            icon={<ArrowRight className="w-4 h-4" />}
                          >
                            Next: Select Scope
                          </ActionButton>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="funnel-step-2"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.25, ease: EASE_LUXURY }}
                        className="space-y-6"
                      >
                        <div className="space-y-1">
                          <span className="text-xs uppercase tracking-[0.2em] text-[#A85856] font-mono font-bold">
                            Step 02
                          </span>
                          <h4 className="font-serif text-2xl text-[#111111]">
                            Which advisory services do you need?
                          </h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            "Flat Finding & Property Shortlist",
                            "Properties For Sale Advisory",
                            "Budget-Friendly Options",
                            "Speaking on Your Behalf to Landlords",
                            "Moving-In & Room Setup Care",
                            "Quick-Response Society Tours",
                          ].map((option) => {
                            const active = services.includes(option);
                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() => toggleService(option)}
                                className={`p-3.5 rounded-xl text-left border transition-all duration-200 text-xs flex items-center justify-between gap-2 font-sans cursor-pointer ${
                                  active
                                    ? "bg-[#F2EED8] text-[#111111] border-[#A85856] font-medium shadow-sm"
                                    : "bg-[#FAF8EE] text-[#111111]/65 border-[#111111]/10 hover:text-[#111111]"
                                }`}
                              >
                                <span>{option}</span>
                                <div
                                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] shrink-0 ${
                                    active
                                      ? "bg-[#E09290] text-[#111111] font-bold"
                                      : "border border-[#111111]/20 text-transparent"
                                  }`}
                                >
                                  ✓
                                </div>
                              </button>
                            );
                          })}
                        </div>
                        <div className="pt-4 flex items-center justify-between">
                          <ActionButton
                            variant="glassLight"
                            size="sm"
                            onClick={() => setStep(1)}
                            icon={<ArrowLeft className="w-3.5 h-3.5" />}
                            iconPosition="left"
                          >
                            Back
                          </ActionButton>
                          <ActionButton
                            variant="secondary"
                            size="md"
                            onClick={() => setStep(3)}
                            className="shadow-md"
                            icon={<ArrowRight className="w-4 h-4" />}
                          >
                            Next: Timeline
                          </ActionButton>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="funnel-step-3"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.25, ease: EASE_LUXURY }}
                        className="space-y-6"
                      >
                        <div className="space-y-1">
                          <span className="text-xs uppercase tracking-[0.2em] text-[#A85856] font-mono font-bold">
                            Step 03
                          </span>
                          <h4 className="font-serif text-2xl text-[#111111]">
                            Timeline &amp; Meeting Preference
                          </h4>
                        </div>
                        <div className="space-y-3">
                          <span className="text-[11px] uppercase tracking-wider text-[#111111]/60 block font-mono">
                            Move-In / Purchase Timeline
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                            {[
                              "Immediate Move-In / Ready Flat",
                              "Within 1–3 Months",
                              "Exploring For Sale Options",
                            ].map((option) => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => setTimeline(option)}
                                className={`p-3 rounded-xl text-left border text-xs font-sans transition-all duration-200 cursor-pointer ${
                                  timeline === option
                                    ? "bg-[#E09290] text-[#111111] border-[#E09290] font-bold shadow-sm"
                                    : "bg-[#F2EED8] text-[#111111]/75 border-[#111111]/10 hover:text-[#111111]"
                                }`}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3 pt-2">
                          <span className="text-[11px] uppercase tracking-wider text-[#111111]/60 block font-mono">
                            Preferred Consultation Mode
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {[
                              "Office Visit (Apna Bazar Rd, Andheri West)",
                              "Assisted Society & Flat Tours",
                              "Phone Consultation (083691 32945)",
                            ].map((option) => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => setMeetingMode(option)}
                                className={`p-3 rounded-xl text-left border text-xs font-sans transition-all duration-200 cursor-pointer ${
                                  meetingMode === option
                                    ? "bg-[#E09290] text-[#111111] border-[#E09290] font-bold shadow-sm"
                                    : "bg-[#F2EED8] text-[#111111]/75 border-[#111111]/10 hover:text-[#111111]"
                                }`}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 flex items-center justify-between">
                          <ActionButton
                            variant="glassLight"
                            size="sm"
                            onClick={() => setStep(2)}
                            icon={<ArrowLeft className="w-3.5 h-3.5" />}
                            iconPosition="left"
                          >
                            Back
                          </ActionButton>
                          <ActionButton
                            variant="secondary"
                            size="md"
                            onClick={() => setStep(4)}
                            className="shadow-md"
                            icon={<ArrowRight className="w-4 h-4" />}
                          >
                            Next: Your Details
                          </ActionButton>
                        </div>
                      </motion.div>
                    )}

                    {step === 4 && (
                      <motion.form
                        key="funnel-step-4"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        transition={{ duration: 0.25, ease: EASE_LUXURY }}
                        onSubmit={handleSubmit}
                        noValidate
                        className="space-y-6"
                      >
                        <div className="space-y-1">
                          <span className="text-xs uppercase tracking-[0.2em] text-[#A85856] font-mono font-bold">
                            Step 04
                          </span>
                          <h4 className="font-serif text-2xl text-[#111111]">
                            Your Details &amp; Preferred Andheri West Locality
                          </h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label
                              htmlFor="funnel-name"
                              className="text-[11px] uppercase tracking-wider text-[#111111]/60 font-mono"
                            >
                              Full Name *
                            </label>
                            <input
                              id="funnel-name"
                              type="text"
                              required
                              value={details.name}
                              onChange={(e) => {
                                setFormError("");
                                setDetails({ ...details, name: e.target.value });
                              }}
                              placeholder="e.g. Rohan Mehta"
                              className="w-full p-3.5 rounded-xl bg-[#FAF8EE] border border-[#111111]/20 text-[#111111] text-xs focus:border-[#A85856] outline-none font-sans transition-colors"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label
                              htmlFor="funnel-phone"
                              className="text-[11px] uppercase tracking-wider text-[#111111]/60 font-mono"
                            >
                              Phone Number (WhatsApp) *
                            </label>
                            <input
                              id="funnel-phone"
                              type="tel"
                              required
                              value={details.phone}
                              onChange={(e) => {
                                setFormError("");
                                setDetails({
                                  ...details,
                                  phone: e.target.value,
                                });
                              }}
                              placeholder="083691 XXXXX"
                              className="w-full p-3.5 rounded-xl bg-[#FAF8EE] border border-[#111111]/20 text-[#111111] text-xs focus:border-[#A85856] outline-none font-sans transition-colors"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label
                              htmlFor="funnel-locality"
                              className="text-[11px] uppercase tracking-wider text-[#111111]/60 font-mono"
                            >
                              Preferred Locality in Andheri West *
                            </label>
                            <input
                              id="funnel-locality"
                              type="text"
                              required
                              value={details.locality}
                              onChange={(e) => {
                                setFormError("");
                                setDetails({
                                  ...details,
                                  locality: e.target.value,
                                });
                              }}
                              placeholder="e.g. Azad Nagar, Sahakar Nagar, Dhake Colony"
                              className="w-full p-3.5 rounded-xl bg-[#FAF8EE] border border-[#111111]/20 text-[#111111] text-xs focus:border-[#A85856] outline-none font-sans transition-colors"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label
                              htmlFor="funnel-email"
                              className="text-[11px] uppercase tracking-wider text-[#111111]/60 font-mono"
                            >
                              Email Address
                            </label>
                            <input
                              id="funnel-email"
                              type="email"
                              value={details.email}
                              onChange={(e) =>
                                setDetails({
                                  ...details,
                                  email: e.target.value,
                                })
                              }
                              placeholder="name@domain.com"
                              className="w-full p-3.5 rounded-xl bg-[#FAF8EE] border border-[#111111]/20 text-[#111111] text-xs focus:border-[#A85856] outline-none font-sans transition-colors"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label
                            htmlFor="funnel-notes"
                            className="text-[11px] uppercase tracking-wider text-[#111111]/60 font-mono"
                          >
                            Requirements / Budget Notes (Optional)
                          </label>
                          <textarea
                            id="funnel-notes"
                            rows={2}
                            value={details.notes}
                            onChange={(e) =>
                              setDetails({ ...details, notes: e.target.value })
                            }
                            placeholder="Looking for a studio apartment, budget-friendly flat, or 2-3 BHK for sale near Apna Bazar Rd."
                            className="w-full p-3.5 rounded-xl bg-[#FAF8EE] border border-[#111111]/20 text-[#111111] text-xs focus:border-[#A85856] outline-none resize-none font-sans transition-colors"
                          />
                        </div>

                        {formError && (
                          <p
                            role="alert"
                            className="text-xs text-[#A85856] font-mono font-semibold"
                          >
                            {formError}
                          </p>
                        )}

                        <div className="pt-4 flex items-center justify-between">
                          <ActionButton
                            variant="glassLight"
                            size="sm"
                            onClick={() => setStep(3)}
                            icon={<ArrowLeft className="w-3.5 h-3.5" />}
                            iconPosition="left"
                          >
                            Back
                          </ActionButton>
                          <ActionButton
                            variant="primary"
                            size="md"
                            type="submit"
                            className="shadow-md"
                          >
                            Request Advisory Call →
                          </ActionButton>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
