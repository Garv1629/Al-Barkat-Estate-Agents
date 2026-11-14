import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { BUSINESS } from "../data/businessData";
import { buildWhatsAppUrl, PropertyItem } from "../utils/propertyLogic";
import { ActionButton } from "./ActionButton";
import { EASE_LUXURY } from "./MotionPrimitives";
import { ResilientImage } from "./ResilientImage";

interface PropertyModalProps {
  project: PropertyItem | null;
  onClose: () => void;
  onOpenConsultationWithProject: (projectTitle: string) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({
  project,
  onClose,
  onOpenConsultationWithProject,
}) => {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);

  useEffect(() => {
    setActiveRoomIndex(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow =
        prevOverflow === "hidden" ? "" : prevOverflow || "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  const activeRoom = project
    ? (project.rooms && project.rooms[activeRoomIndex]) ||
      (project.rooms && project.rooms[0]) || {
        name: project.title,
        imageUrl: project.heroImage,
        description: project.brief,
        details: project.keyFeatures,
      }
    : null;

  return (
    <AnimatePresence>
      {project && activeRoom && (
        <motion.div
          key="property-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} Overview`}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE_LUXURY }}
          className="fixed inset-0 z-50 overflow-y-auto bg-[#111111]/88 backdrop-blur-xl"
        >
          <div className="sticky top-0 z-20 bg-[#F2EED8]/95 backdrop-blur-md border-b border-[#111111]/15 px-6 lg:px-12 py-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-xs uppercase tracking-[0.22em] text-[#A85856] font-mono font-bold shrink-0">
                Property Overview
              </span>
              <span className="text-[#111111]/35 shrink-0">/</span>
              <span className="font-serif text-lg text-[#111111] font-medium truncate">
                {project.title}
              </span>
              <span className="hidden sm:inline-block text-xs text-[#111111]/60 font-sans truncate">
                ({project.typology} · {project.location})
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="group px-4 py-2 rounded-full glass-button-light text-[#111111] hover:text-[#A85856] transition-colors flex items-center gap-2 text-xs uppercase tracking-widest font-mono font-bold cursor-pointer shrink-0"
              aria-label="Close Property Modal"
            >
              <span className="hidden sm:inline font-sans">Close</span>
              <X className="w-4 h-4 transition-transform group-hover:rotate-90" />
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35, ease: EASE_LUXURY }}
            className="bg-[#FAF8EE] min-h-screen"
          >
            <div className="max-w-6xl mx-auto px-6 lg:px-12 py-10 lg:py-16 space-y-16">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.2em] uppercase text-[#111111]/60 font-mono">
                  <span className="text-[#A85856] font-bold">
                    {project.typology}
                  </span>
                  <span>·</span>
                  <span>{project.location}</span>
                  <span>·</span>
                  <span>{project.area}</span>
                  <span>·</span>
                  <span>{project.year}</span>
                </div>
                <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#111111] font-normal leading-tight">
                  {project.title}
                </h2>
                <p className="font-serif italic text-xl sm:text-2xl text-[#111111]/70">
                  {project.subTitle}
                </p>
              </div>

              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#111111] border border-[#111111]/12 shadow-xl">
                <ResilientImage
                  src={project.heroImage}
                  width={1200}
                  sizes="(max-width: 768px) 100vw, 1000px"
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/75 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 max-w-lg">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#E09290] mb-1 font-mono font-bold">
                    Listing Overview
                  </p>
                  <p className="text-sm sm:text-base text-[#F2EED8] font-light font-sans">
                    {project.location} · Curated by {BUSINESS.name}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-4 border-t border-[#111111]/15">
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-[0.22em] text-[#A85856] block font-mono font-bold">
                    01 · THE LOCALITY
                  </span>
                  <h4 className="font-serif text-2xl text-[#111111]">
                    Neighborhood &amp; Access
                  </h4>
                  <p className="text-sm text-[#111111]/80 leading-relaxed font-sans font-light">
                    {project.brief}
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-[0.22em] text-[#A85856] block font-mono font-bold">
                    02 · ADVISORY NOTES
                  </span>
                  <h4 className="font-serif text-2xl text-[#111111]">
                    For Sale &amp; Rental Fit
                  </h4>
                  <p className="text-sm text-[#111111]/80 leading-relaxed font-sans font-light">
                    {project.direction}
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-[0.22em] text-[#A85856] block font-mono font-bold">
                    03 · KEY HIGHLIGHTS
                  </span>
                  <h4 className="font-serif text-2xl text-[#111111]">
                    Summary &amp; Features
                  </h4>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.materials.map((mat) => (
                      <span
                        key={mat}
                        className="text-xs text-[#111111] bg-[#F2EED8] border border-[#111111]/15 px-3.5 py-1.5 rounded-full font-sans"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2">
                    <p className="text-xs text-[#111111]/60 font-mono uppercase tracking-wider">
                      Property Features:
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {project.keyFeatures.slice(0, 2).map((feat) => (
                        <li
                          key={feat}
                          className="text-xs text-[#111111]/85 flex items-start gap-2 font-sans"
                        >
                          <span className="text-[#A85856] mt-0.5">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-8 pt-8 border-t border-[#111111]/15">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-[0.22em] text-[#A85856] block mb-2 font-mono font-bold">
                      Configuration &amp; Space Walkthrough
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#111111]">
                      Explore Configurations
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 p-1.5 bg-[#F2EED8] rounded-full border border-[#111111]/10">
                    {project.rooms.map((room, idx) => (
                      <button
                        key={room.name}
                        type="button"
                        onClick={() => setActiveRoomIndex(idx)}
                        className={`text-xs uppercase tracking-wider px-4 py-2 rounded-full transition-colors font-sans cursor-pointer ${
                          activeRoomIndex === idx
                            ? "bg-[#111111] text-[#F2EED8] font-semibold shadow-sm"
                            : "text-[#111111]/70 hover:text-[#111111] hover:bg-[#FAF8EE]"
                        }`}
                      >
                        {room.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F2EED8] border border-[#111111]/12 p-6 lg:p-8 rounded-3xl luxury-card">
                  <div className="lg:col-span-8 overflow-hidden aspect-[16/10] bg-[#111111] rounded-2xl">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeRoom.imageUrl}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE_LUXURY }}
                        className="w-full h-full"
                      >
                        <ResilientImage
                          src={activeRoom.imageUrl}
                          width={1000}
                          sizes="(max-width: 768px) 100vw, 800px"
                          alt={activeRoom.name}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeRoom.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.3, ease: EASE_LUXURY }}
                      className="lg:col-span-4 space-y-6"
                    >
                      <div>
                        <span className="text-[11px] uppercase tracking-[0.22em] text-[#A85856] block font-mono font-bold tabular-nums">
                          Space 0{activeRoomIndex + 1} of 0
                          {project.rooms.length}
                        </span>
                        <h4 className="font-serif text-2xl sm:text-3xl text-[#111111] mt-1">
                          {activeRoom.name}
                        </h4>
                      </div>
                      <p className="text-sm text-[#111111]/80 leading-relaxed font-light font-sans">
                        {activeRoom.description}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-[#111111]/15">
                        <p className="text-xs uppercase tracking-wider text-[#111111]/60 font-mono">
                          Specification &amp; Highlights:
                        </p>
                        <div className="space-y-1.5">
                          {activeRoom.details?.map((detail) => (
                            <div
                              key={detail}
                              className="flex items-center gap-2 text-xs text-[#111111]/85 font-sans"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-[#A85856]" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 flex items-center justify-between text-xs text-[#111111]/70 font-mono">
                        <button
                          type="button"
                          disabled={activeRoomIndex === 0}
                          onClick={() =>
                            setActiveRoomIndex((prev) => Math.max(0, prev - 1))
                          }
                          className="hover:text-[#111111] disabled:opacity-30 disabled:pointer-events-none uppercase tracking-wider font-semibold glass-button-light px-3.5 py-1.5 rounded-full cursor-pointer"
                        >
                          ← Prev Space
                        </button>
                        <button
                          type="button"
                          disabled={
                            activeRoomIndex === project.rooms.length - 1
                          }
                          onClick={() =>
                            setActiveRoomIndex((prev) =>
                              Math.min(project.rooms.length - 1, prev + 1),
                            )
                          }
                          className="hover:text-[#111111] disabled:opacity-30 disabled:pointer-events-none uppercase tracking-wider font-semibold glass-button-light px-3.5 py-1.5 rounded-full cursor-pointer"
                        >
                          Next Space →
                        </button>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {project.testimonial && (
                <div className="p-8 bg-[#F2EED8] border border-[#111111]/12 rounded-3xl luxury-card space-y-4">
                  <span className="text-xs uppercase tracking-[0.22em] text-[#A85856] font-mono font-bold">
                    Client Reflection
                  </span>
                  <p className="font-serif text-xl sm:text-2xl italic text-[#111111] leading-relaxed">
                    "{project.testimonial.quote}"
                  </p>
                  <div className="text-xs text-[#111111]/65 font-sans">
                    <span className="text-[#111111] font-semibold">
                      {project.testimonial.client}
                    </span>
                    <span className="mx-2">·</span>
                    <span>{project.testimonial.society}</span>
                  </div>
                </div>
              )}

              <div className="p-8 sm:p-12 bg-[#E09290] border border-[#111111]/15 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg">
                <div className="space-y-2 max-w-xl">
                  <span className="text-xs uppercase tracking-[0.22em] text-[#111111] font-mono font-bold tabular-nums">
                    {BUSINESS.rating.score} ★ ({BUSINESS.rating.count} Reviews)
                    · {BUSINESS.shortHours}
                  </span>
                  <h4 className="font-serif text-3xl sm:text-4xl text-[#111111]">
                    Interested in {project.title}?
                  </h4>
                  <p className="text-xs sm:text-sm text-[#111111]/85 font-sans leading-relaxed">
                    Schedule a viewing with {BUSINESS.leadAgent} or visit{" "}
                    {BUSINESS.name} at {BUSINESS.address.fullAddress}.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
                  <ActionButton
                    variant="glassLight"
                    size="md"
                    href={buildWhatsAppUrl(
                      BUSINESS.whatsappNumber,
                      `Hi Al-Barkat Estate Agents, I am interested in ${project.title} (${project.location}) and would like to schedule a viewing.`,
                    )}
                    target="_blank"
                    className="font-semibold text-center"
                  >
                    Ask on WhatsApp
                  </ActionButton>
                  <ActionButton
                    variant="secondary"
                    size="md"
                    onClick={() => {
                      onClose();
                      onOpenConsultationWithProject(project.title);
                    }}
                    className="font-semibold text-center shadow-md"
                  >
                    Request Advisory Call
                  </ActionButton>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
