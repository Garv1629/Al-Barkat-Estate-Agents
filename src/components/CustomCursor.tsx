import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export const CustomCursor: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState("");
  const [isCoarse, setIsCoarse] = useState(false);
  const isCoarseRef = useRef(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const finePointerMq = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );

    const syncPointerCapability = () => {
      const desktopFine =
        finePointerMq.matches && window.innerWidth >= 1024;
      isCoarseRef.current = !desktopFine;
      setIsCoarse(!desktopFine);
      if (!desktopFine) {
        setVisible(false);
      }
    };
    syncPointerCapability();
    finePointerMq.addEventListener?.("change", syncPointerCapability);
    window.addEventListener("resize", syncPointerCapability, { passive: true });

    const onTouch = () => {
      isCoarseRef.current = true;
      setIsCoarse(true);
      setVisible(false);
    };

    const onMove = (e: MouseEvent) => {
      if (!finePointerMq.matches || window.innerWidth < 1024) return;
      if (isCoarseRef.current) {
        isCoarseRef.current = false;
        setIsCoarse(false);
      }
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onMouseOver = (e: MouseEvent) => {
      if (isCoarseRef.current) return;
      try {
        const target = e.target as HTMLElement | null;
        const cursorEl = target?.closest("[data-cursor]");
        const interactive = target?.closest(
          'button, a, input, select, textarea, [role="button"]',
        );
        if (cursorEl) {
          setActive(true);
          setLabel(cursorEl.getAttribute("data-cursor") || "VIEW");
        } else if (interactive) {
          setActive(true);
          setLabel("");
        } else {
          setActive(false);
          setLabel("");
        }
      } catch {
        // Ignore non-element targets
      }
    };

    window.addEventListener("touchstart", onTouch, { passive: true });
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("blur", onLeave);
    window.addEventListener("mouseover", onMouseOver, { passive: true });

    return () => {
      finePointerMq.removeEventListener?.("change", syncPointerCapability);
      window.removeEventListener("resize", syncPointerCapability);
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("blur", onLeave);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!visible || isCoarse) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      style={{ x: smoothX, y: smoothY }}
    >
      <motion.div
        animate={{
          scale: active ? (label ? 3.2 : 1.8) : 1,
          backgroundColor: active
            ? label
              ? "rgba(224, 146, 144, 0.95)"
              : "rgba(242, 238, 216, 0.4)"
            : "rgba(224, 146, 144, 0.45)",
          borderColor: active ? "#111111" : "rgba(17, 17, 17, 0.3)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="w-7 h-7 rounded-full border flex items-center justify-center backdrop-blur-[1px]"
      >
        {label && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[4px] font-sans font-bold tracking-widest text-[#111111] uppercase"
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
};
