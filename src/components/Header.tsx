import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, MessageCircle, Phone, X } from "lucide-react";
import { BUSINESS } from "../data/businessData";
import { buildWhatsAppUrl } from "../utils/propertyLogic";
import { ActionButton } from "./ActionButton";
import { EASE_LUXURY } from "./MotionPrimitives";

interface HeaderProps {
  onOpenConsultation: (step?: number) => void;
  onOpenEstimator?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenConsultation,
  onOpenEstimator,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(64);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const measureHeight = useCallback(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 25;
      setScrolled((prev) => (prev !== next ? next : prev));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    measureHeight();
    const onResize = () => {
      measureHeight();
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [measureHeight]);

  useEffect(() => {
    if (mobileOpen) {
      const prevOverflow = document.body.style.overflow;
      const prevPadding = document.body.style.paddingRight;
      const scrollbarW =
        window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarW > 0) {
        document.body.style.paddingRight = `${scrollbarW}px`;
      }
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow =
          prevOverflow === "hidden" ? "" : prevOverflow || "";
        document.body.style.paddingRight = prevPadding;
      };
    }
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const navItems = [
    { label: "Properties", href: "#projects" },
    { label: "Localities", href: "#materials" },
    { label: "Process", href: "#process" },
    { label: "Estimator", href: "#estimator" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    setMobileOpen(false);
    if (href === "#estimator" && onOpenEstimator) {
      e.preventDefault();
      onOpenEstimator();
      return;
    }
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`site-header ${
          scrolled ? "site-header--scrolled" : "site-header--unscrolled"
        }`}
      >
        <div className="site-header__inner">
          <a
            href="#"
            onClick={handleLogoClick}
            className="site-header__logo group"
            data-cursor="HOME"
            aria-label="Al-Barkat Estate Agents — Home"
          >
            <span
              className={`site-header__logo-title ${
                scrolled
                  ? "text-[#111111] group-hover:text-[#E09290]"
                  : "text-[#FAF8ED] group-hover:text-[#E09290]"
              }`}
            >
              {BUSINESS.shortName}
            </span>
            <span
              className={`site-header__logo-sub ${
                scrolled ? "text-[#575249]" : "text-[#F2EED8]/85"
              }`}
            >
              Estate Agents · Andheri West
            </span>
          </a>

          <nav className="site-header__nav" aria-label="Primary Navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`site-header__nav-link hover:text-[#E09290] ${
                  scrolled ? "text-[#111111]/85" : "text-[#FAF8ED]/90"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <a
              href={`tel:${BUSINESS.phone}`}
              className={`site-header__contact-link ${
                scrolled
                  ? "bg-[#FAF8EE]/90 border-[#111111]/15 text-[#575249] hover:text-[#111111] hover:border-[#111111]/30 hover:bg-[#FAF8EE]"
                  : "bg-[#111111]/55 border-[#FAF8ED]/20 text-[#FAF8ED]/90 hover:text-[#FAF8ED] hover:border-[#FAF8ED]/40 backdrop-blur-sm"
              }`}
              title="Direct Office Phone Line"
            >
              <Phone className="w-3.5 h-3.5 text-[#E09290] shrink-0" />
              <span>{BUSINESS.displayPhone}</span>
            </a>

            <ActionButton
              variant="primary"
              size="sm"
              onClick={() => onOpenConsultation(1)}
              data-cursor="BOOK"
              className="font-semibold shadow-md whitespace-nowrap"
              icon={
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              }
            >
              Book Consultation
            </ActionButton>
          </div>

          <button
            ref={toggleRef}
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className={`site-header__menu-toggle ${
              scrolled
                ? "border-[#111111]/15 text-[#111111] hover:text-[#E09290] bg-[#FAF8EE]/90"
                : "border-[#FAF8ED]/20 text-[#FAF8ED] hover:text-[#E09290] bg-[#111111]/55 backdrop-blur-md"
            }`}
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-menu"
          >
            {mobileOpen ? (
              <X className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200" />
            ) : (
              <Menu className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mobile-menu-backdrop"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-navigation-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site Navigation"
              style={{ top: `${headerHeight}px` }}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: EASE_LUXURY }}
              className="mobile-menu-drawer p-5 sm:p-7"
            >
            <div className="space-y-6 pt-1">
              <div className="flex items-center justify-between border-b border-[#111111]/10 pb-3">
                <span className="text-[11px] tracking-[0.24em] uppercase text-[#E09290] font-mono font-bold">
                  Navigation
                </span>
                <span className="text-[11px] tracking-wider uppercase text-[#111111]/60 font-mono">
                  {BUSINESS.name}
                </span>
              </div>
              <nav
                className="flex flex-col space-y-2"
                aria-label="Mobile Navigation Links"
              >
                {navItems.map((item, idx) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="group font-serif text-2xl sm:text-3xl text-[#111111] hover:text-[#E09290] active:text-[#E09290] transition-colors flex items-center justify-between py-2 min-h-[48px]"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item.label}
                    </span>
                    <span className="text-xs font-mono text-[#E09290]/80 font-semibold tracking-wider">
                      0{idx + 1}
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="border-t border-[#111111]/10 pt-5 mt-6 space-y-4">
              <div className="text-xs text-[#575249] space-y-1 font-sans">
                <p className="text-[#111111] font-semibold text-sm">
                  {BUSINESS.name}
                </p>
                <p className="text-[12px] text-[#575249]">
                  {BUSINESS.address.fullAddress}
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${BUSINESS.phone}`}
                    className="inline-flex items-center gap-2 font-mono text-xs text-[#111111] bg-[#FAF8EE] border border-[#111111]/15 px-3.5 py-2 rounded-full font-semibold hover:border-[#E09290] hover:text-[#E09290] transition-colors min-h-[40px]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E09290] shrink-0" />
                    <span>{BUSINESS.displayPhone}</span>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-2">
                <ActionButton
                  variant="secondary"
                  size="sm"
                  href={buildWhatsAppUrl(
                    BUSINESS.whatsappNumber,
                    "Hi Al-Barkat Estate Agents, I am looking for a property in Andheri West, Mumbai.",
                  )}
                  target="_blank"
                  className="font-semibold w-full"
                  iconPosition="left"
                  icon={<MessageCircle className="w-3.5 h-3.5 text-[#E09290]" />}
                >
                  WhatsApp
                </ActionButton>
                <ActionButton
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenConsultation(1);
                  }}
                  className="font-semibold shadow-sm w-full"
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  Consultation
                </ActionButton>
              </div>
            </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
