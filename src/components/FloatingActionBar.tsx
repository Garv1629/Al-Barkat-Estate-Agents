import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { BUSINESS } from "../data/businessData";
import { buildWhatsAppUrl } from "../utils/propertyLogic";
import { ActionButton } from "./ActionButton";
import { EASE_LUXURY } from "./MotionPrimitives";

interface FloatingActionBarProps {
  onOpenConsultation: () => void;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({
  onOpenConsultation,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 360);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            key="floating-bar-desktop"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: EASE_LUXURY }}
            className="hidden md:flex fixed bottom-5 right-5 z-40 items-center gap-2 p-1.5 rounded-full glass-panel-dark"
          >
            <ActionButton
              variant="glass"
              size="sm"
              href={buildWhatsAppUrl(
                BUSINESS.whatsappNumber,
                "Hi Al-Barkat Estate Agents, I would like to consult regarding properties in Andheri West, Mumbai.",
              )}
              target="_blank"
              className="group text-xs tracking-wider"
              iconPosition="left"
              icon={
                <MessageCircle className="w-4 h-4 text-[#E09290] group-hover:text-[#11110F] transition-colors" />
              }
            >
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-75 group-hover:opacity-100 transition-opacity ml-0.5" />
            </ActionButton>

            <ActionButton
              variant="primary"
              size="sm"
              onClick={onOpenConsultation}
              className="font-semibold"
            >
              Book Advisory Call
            </ActionButton>
          </motion.div>

          <motion.div
            key="floating-bar-mobile"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: EASE_LUXURY }}
            className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FAF8EE]/95 backdrop-blur-md border-t border-[#111111]/12 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] flex items-center gap-2 shadow-[0_-8px_24px_rgba(17,17,15,0.08)]"
          >
            <ActionButton
              variant="glassLight"
              size="sm"
              fullWidth
              href={buildWhatsAppUrl(
                BUSINESS.whatsappNumber,
                "Hi Al-Barkat Estate Agents, I would like to consult regarding properties in Andheri West.",
              )}
              target="_blank"
              className="font-semibold !min-h-[34px] !py-1.5 !px-2.5 !text-[11px] whitespace-nowrap"
              iconPosition="left"
              icon={<MessageCircle className="w-3.5 h-3.5 text-[#A85856]" />}
            >
              WhatsApp
            </ActionButton>
            <ActionButton
              variant="primary"
              size="sm"
              fullWidth
              onClick={onOpenConsultation}
              className="font-semibold shadow-sm !min-h-[34px] !py-1.5 !px-2.5 !text-[11px] whitespace-nowrap"
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Book Advisory
            </ActionButton>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
