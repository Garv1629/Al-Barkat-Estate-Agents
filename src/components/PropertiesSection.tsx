import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Maximize2 } from "lucide-react";
import { PROPERTIES } from "../data/businessData";
import {
  buildImageSrcSet,
  filterProperties,
  optimizeImageUrl,
  PropertyFilterCategory,
  PropertyItem,
} from "../utils/propertyLogic";
import { ActionButton } from "./ActionButton";
import { EASE_LUXURY, EditorialReveal } from "./MotionPrimitives";
import { PropertyModal } from "./PropertyModal";

interface PropertiesSectionProps {
  onOpenConsultationWithProject: (projectTitle: string) => void;
}

export const PropertiesSection: React.FC<PropertiesSectionProps> = ({
  onOpenConsultationWithProject,
}) => {
  const [modalProject, setModalProject] = useState<PropertyItem | null>(null);
  const [selectedId, setSelectedId] = useState<string>(PROPERTIES[0].id);
  const [roomIndex, setRoomIndex] = useState<number>(0);
  const [filter, setFilter] = useState<PropertyFilterCategory>("all");

  const filtered = filterProperties(PROPERTIES, filter);
  const activeProject =
    PROPERTIES.find((item) => item.id === selectedId) || PROPERTIES[0];
  const activeRoom = (activeProject?.rooms &&
    activeProject.rooms[roomIndex]) ||
    (activeProject?.rooms && activeProject.rooms[0]) || {
      name: activeProject.title,
      imageUrl: activeProject.heroImage,
      description: activeProject.brief,
      details: activeProject.keyFeatures,
    };

  const handleFilterChange = (next: PropertyFilterCategory) => {
    setFilter(next);
    const nextFiltered = filterProperties(PROPERTIES, next);
    if (
      nextFiltered.length > 0 &&
      !nextFiltered.some((item) => item.id === selectedId)
    ) {
      setSelectedId(nextFiltered[0].id);
      setRoomIndex(0);
    }
  };

  const filterTabs: { id: PropertyFilterCategory; label: string }[] = [
    { id: "all", label: "All Properties" },
    { id: "apartments", label: "Studio & 2 BHK Flats" },
    { id: "houses", label: "3 & 4 BHK Houses" },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-20 py-28 lg:py-36 px-6 lg:px-12 bg-[#F2EED8] text-[#111111]"
    >
      <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">
        <EditorialReveal className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[#111111]/15">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A85856] font-mono font-semibold block">
              Curated Properties
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#111111] font-normal leading-[1.03]">
              Residences shaped <br />
              <span className="italic font-serif text-[#111111]/50">
                for your requirements.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-[#111111]/80 font-light font-sans">
              Budget-friendly studio apartments to family houses for sale across
              Azad Nagar, Sahakar Nagar &amp; Dhake Colony.
            </p>
          </div>

          <div className="flex flex-nowrap items-center gap-1 p-1.5 bg-[#FAF8EE] border border-[#111111]/12 self-start md:self-end shadow-sm rounded-full overflow-x-auto no-scrollbar max-w-full shrink-0">
            {filterTabs.map((tab) => {
              const isSelected = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleFilterChange(tab.id)}
                  className={`relative px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs uppercase tracking-wider transition-colors duration-200 font-sans rounded-full cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? "text-[#F2EED8] font-semibold"
                      : "text-[#111111]/70 hover:text-[#111111]"
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="propertiesFilterPill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute inset-0 bg-[#111111] rounded-full shadow-sm"
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </EditorialReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="space-y-2.5">
                {filtered.map((item, idx) => {
                  const isActive = item.id === selectedId;
                  return (
                    <motion.button
                      key={item.id}
                      layout
                      type="button"
                      onClick={() => {
                        setSelectedId(item.id);
                        setRoomIndex(0);
                      }}
                      data-cursor="CASE STUDY"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.25, ease: EASE_LUXURY }}
                      className={`relative w-full text-left p-5 cursor-pointer border rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-[#FAF8EE] border-[#A85856]/60 shadow-[0_12px_30px_-10px_rgba(17,17,15,0.1)]"
                          : "bg-[#FAF8EE]/65 border-[#111111]/10 hover:border-[#111111]/25 hover:bg-[#FAF8EE]/90 opacity-80 hover:opacity-100"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span
                          className={`font-mono font-bold tabular-nums ${
                            isActive ? "text-[#A85856]" : "text-[#111111]/50"
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <span className="text-[11px] text-[#111111]/60 uppercase tracking-wider font-sans">
                          {item.location}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl text-[#111111]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#111111]/65 tracking-normal mt-1 font-sans">
                        {item.typology} · {item.area}
                      </p>
                    </motion.button>
                  );
                })}
              </div>

            <div className="p-6 bg-[#FAF8EE] border border-[#111111]/10 rounded-2xl luxury-card space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#A85856] font-bold font-mono">
                  Listing & Advisory Status
                </span>
                <span className="text-xs font-mono text-[#111111]/60">
                  {activeProject.year}
                </span>
              </div>
              <p className="text-xs text-[#111111]/80 leading-relaxed font-light font-sans">
                {activeProject.direction}
              </p>
              <div className="pt-2 border-t border-[#111111]/10">
                <p className="text-[10px] uppercase tracking-wider text-[#111111]/60 mb-2 font-mono">
                  Property Highlights:
                </p>
                <p className="text-xs text-[#111111]/85 font-sans leading-relaxed">
                  {activeProject.materials.join(" · ")}
                </p>
              </div>
              <div className="pt-2">
                <ActionButton
                  variant="secondary"
                  size="md"
                  fullWidth
                  onClick={() => setModalProject(activeProject)}
                  data-cursor="EXPAND"
                  icon={<Maximize2 className="w-3.5 h-3.5" />}
                  iconPosition="left"
                >
                  Explore Property Details
                </ActionButton>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div
              role="button"
              tabIndex={0}
              onClick={() => setModalProject(activeProject)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setModalProject(activeProject);
                }
              }}
              data-cursor="CASE STUDY"
              aria-label={`Open details for ${activeProject.title}`}
              className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#111111] border border-[#111111]/12 cursor-pointer group shadow-xl"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${activeProject.id}-${roomIndex}`}
                  src={optimizeImageUrl(
                    activeRoom.imageUrl || activeProject.heroImage,
                    1000,
                  )}
                  srcSet={
                    buildImageSrcSet(
                      activeRoom.imageUrl || activeProject.heroImage,
                    ) || undefined
                  }
                  sizes="(max-width: 768px) 100vw, 800px"
                  alt={activeRoom.name || activeProject.title}
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.45, ease: EASE_LUXURY }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/85 via-transparent to-transparent pointer-events-none" />
              <div className="glass-badge absolute top-3 right-3 sm:top-6 sm:right-6 px-3.5 py-1.5 flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#111111] font-mono group-hover:bg-[#E09290] transition-colors rounded-full">
                <Maximize2 className="w-3 h-3 text-[#111111]" />
                <span>Property Details</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between gap-3">
                <div className="min-w-0">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#E09290] block font-mono truncate">
                    {activeProject.title}
                  </span>
                  <p className="font-serif text-xl sm:text-3xl text-[#F2EED8] truncate">
                    {activeRoom.name}
                  </p>
                </div>
                <div className="text-xs text-[#F2EED8]/75 font-mono tabular-nums shrink-0">
                  {roomIndex + 1} / {activeProject.rooms.length}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {activeProject.rooms.map((room, idx) => (
                <button
                  key={room.name}
                  type="button"
                  onClick={() => setRoomIndex(idx)}
                  className={`relative text-[11px] sm:text-xs uppercase tracking-wider px-3.5 py-1.5 sm:px-5 sm:py-2.5 transition-colors duration-200 border font-sans rounded-full cursor-pointer whitespace-nowrap shrink-0 ${
                    roomIndex === idx
                      ? "bg-[#E09290] text-[#111111] font-semibold border-[#E09290] shadow-sm"
                      : "bg-[#FAF8EE] text-[#111111]/75 hover:text-[#111111] border-[#111111]/12"
                  }`}
                >
                  <span>{room.name}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeProject.id}-${roomIndex}-meta`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: EASE_LUXURY }}
                className="p-6 bg-[#FAF8EE] border border-[#111111]/10 rounded-2xl luxury-card space-y-4"
              >
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-wider text-[#A85856] font-mono font-bold">
                    Configuration Details
                  </span>
                  <p className="text-sm text-[#111111]/85 font-light leading-relaxed font-sans">
                    {activeRoom.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-[#111111]/10">
                  {activeRoom.details?.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-center gap-2 text-xs text-[#111111]/80 font-sans"
                    >
                      <span className="text-[#A85856] font-bold" aria-hidden="true">·</span>
                      <span className="truncate">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {activeProject.testimonial && (
              <div className="p-6 bg-[#FAF8EE] border border-[#111111]/10 rounded-2xl luxury-card space-y-2">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#A85856] block font-mono font-bold">
                  Client Review & Feedback
                </span>
                <p className="font-serif text-lg italic text-[#111111] leading-relaxed">
                  "{activeProject.testimonial.quote}"
                </p>
                <p className="text-xs text-[#111111]/65 font-sans">
                  {activeProject.testimonial.client} ·{" "}
                  {activeProject.testimonial.society}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <PropertyModal
        project={modalProject}
        onClose={() => setModalProject(null)}
        onOpenConsultationWithProject={onOpenConsultationWithProject}
      />
    </section>
  );
};
