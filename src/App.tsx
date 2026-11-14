/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { MotionConfig } from "motion/react";
import { ConsultationFunnel } from "./components/ConsultationFunnel";
import { CustomCursor } from "./components/CustomCursor";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { EstimatorSection } from "./components/EstimatorSection";
import { FloatingActionBar } from "./components/FloatingActionBar";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { MicroMarketsSection } from "./components/MicroMarketsSection";
import { NextStepsSection } from "./components/NextStepsSection";
import { OfficeSection } from "./components/OfficeSection";
import { PhilosophyIntroSection } from "./components/PhilosophyIntroSection";
import { PrinciplesSection } from "./components/PrinciplesSection";
import { ProcessSection } from "./components/ProcessSection";
import { PropertiesSection } from "./components/PropertiesSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { ScrollProgress } from "./components/ScrollProgress";
import { ServicesSection } from "./components/ServicesSection";
import { StatsBand } from "./components/StatsBand";

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [initialStep, setInitialStep] = useState(1);
  const [initialContext, setInitialContext] = useState("");

  const openConsultation = (step = 1, context = "") => {
    setInitialStep(step);
    setInitialContext(context);
    setConsultationOpen(true);
  };

  const scrollToProjects = () => {
    try {
      const el = document.getElementById("projects");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } catch {
      window.location.hash = "projects";
    }
  };

  const scrollToEstimator = () => {
    try {
      const el = document.getElementById("estimator");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } catch {
      window.location.hash = "estimator";
    }
  };

  return (
    <ErrorBoundary fallbackTitle="Al-Barkat Estate Agents Advisory">
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-[#F2EED8] text-[#111111] selection:bg-[#E09290] selection:text-[#111111]">
          <CustomCursor />
          <ScrollProgress />

          <Header
            onOpenConsultation={(step) => openConsultation(step || 1)}
            onOpenEstimator={scrollToEstimator}
          />

          <main>
            <HeroSection
              onOpenConsultation={() => openConsultation(1)}
              onExploreWork={scrollToProjects}
            />
            <PhilosophyIntroSection
              onOpenConsultation={() => openConsultation(1)}
            />
            <StatsBand />
            <PropertiesSection
              onOpenConsultationWithProject={(projectTitle) =>
                openConsultation(1, `Interested in property details of ${projectTitle}`)
              }
            />
            <ServicesSection
              onOpenConsultationWithService={(serviceTitle) =>
                openConsultation(2, `Interested in ${serviceTitle}`)
              }
            />
            <MicroMarketsSection />
            <ProcessSection />
            <PrinciplesSection onOpenConsultation={() => openConsultation(1)} />
            <EstimatorSection
              onOpenConsultationWithEstimate={(estimateContext) =>
                openConsultation(3, estimateContext)
              }
            />
            <ReviewsSection />
            <OfficeSection onOpenConsultation={() => openConsultation(1)} />
            <NextStepsSection onOpenConsultation={() => openConsultation(1)} />
          </main>

          <Footer onOpenConsultation={() => openConsultation(1)} />
          <FloatingActionBar onOpenConsultation={() => openConsultation(1)} />

          <ErrorBoundary fallbackTitle="Consultation Booking">
            <ConsultationFunnel
              isOpen={consultationOpen}
              onClose={() => setConsultationOpen(false)}
              initialStep={initialStep}
              initialContext={initialContext}
            />
          </ErrorBoundary>
        </div>
      </MotionConfig>
    </ErrorBoundary>
  );
}
