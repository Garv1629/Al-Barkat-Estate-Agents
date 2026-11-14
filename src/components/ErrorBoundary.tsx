import React, { Component, ErrorInfo, ReactNode } from "react";
import { RefreshCw, RotateCcw, ShieldAlert } from "lucide-react";
import { BUSINESS } from "../data/businessData";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackTitle?: string;
  onReset?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  retryCount: number;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  private onlineListener: (() => void) | null = null;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("[ErrorBoundary caught error]:", error, errorInfo);
    this.setState({ errorInfo });
    try {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }
    } catch {
      // ignore
    }

    if (
      (error.message?.includes("Failed to fetch dynamically imported module") ||
        error.message?.includes("Loading chunk") ||
        error.message?.includes("dynamically imported module") ||
        error.name === "ChunkLoadError") &&
      typeof window !== "undefined"
    ) {
      this.onlineListener = () => {
        this.handleReset();
      };
      window.addEventListener("online", this.onlineListener, { once: true });
    }
  }

  componentWillUnmount() {
    if (this.onlineListener && typeof window !== "undefined") {
      window.removeEventListener("online", this.onlineListener);
    }
  }

  handleReset = () => {
    try {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      }
    } catch {
      // ignore
    }
    this.props.onReset?.();
    this.setState((prev) => ({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: prev.retryCount + 1,
    }));
  };

  handleHardReload = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  render() {
    if (this.state.hasError) {
      const isChunkError =
        this.state.error?.message?.includes("Failed to fetch") ||
        this.state.error?.message?.includes("dynamically imported module") ||
        this.state.error?.name === "ChunkLoadError";

      return (
        <section
          role="alert"
          className="min-h-screen bg-[#F2EED8] text-[#111111] flex items-center justify-center p-6 selection:bg-[#E09290]"
        >
          <div className="max-w-xl w-full bg-[#FAF8EE] border border-[#111111]/15 p-8 sm:p-12 rounded-2xl shadow-xl space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E09290]/20 border border-[#E09290]/40 text-[#111111] text-xs font-mono uppercase tracking-widest">
              <ShieldAlert className="w-3.5 h-3.5 text-[#A85856]" />
              <span>Resilience Protection Active</span>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#111111] font-normal leading-tight">
                {isChunkError
                  ? "Network Connection Interrupted"
                  : this.props.fallbackTitle || "Experience Interrupted"}
              </h2>
              <p className="text-sm sm:text-base text-[#111111]/70 font-sans leading-relaxed">
                {isChunkError
                  ? "Your network changed during page loading. All data is protected. Tap below to resume seamlessly."
                  : "A transient device or browser interruption occurred. You can restore the page without losing your navigation context."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={this.handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#111111] text-[#FAF8EE] hover:bg-[#111111]/85 transition-all text-xs uppercase tracking-widest font-semibold font-mono flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Resume Experience</span>
              </button>
              <button
                type="button"
                onClick={this.handleHardReload}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#FAF8EE] border border-[#111111]/20 hover:border-[#111111]/40 text-[#111111] transition-all text-xs uppercase tracking-widest font-medium font-mono flex items-center justify-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4 text-[#E09290]" />
                <span>Reload Page</span>
              </button>
            </div>

            <div className="text-[11px] text-[#111111]/40 font-mono pt-4 border-t border-[#111111]/10">
              {BUSINESS.name} · Andheri West, Mumbai 400053
            </div>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
