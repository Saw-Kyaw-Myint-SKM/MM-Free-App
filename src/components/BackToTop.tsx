import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`group fixed animate-bounce z-[90] bottom-20 right-3 sm:bottom-20 sm:right-6 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/20 transition-all duration-300 hover:from-sky-400 hover:to-blue-500 hover:shadow-lg hover:shadow-sky-500/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 h-9 w-9 p-0 sm:h-auto sm:w-auto sm:gap-1.5 sm:pl-2.5 sm:pr-3.5 sm:py-2.5 sm:shadow-lg sm:shadow-sky-500/25 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="အပေါ်သို့ ပြန်သွားရန်"
    >
      <span className="flex h-full w-full sm:h-7 sm:w-7 items-center justify-center rounded-full sm:bg-white/20 sm:backdrop-blur-sm transition-colors group-hover:sm:bg-white/25">
        <ArrowUp className="h-3.5 w-3.5 sm:h-3.5 sm:w-3.5" strokeWidth={2.5} />
      </span>
      <span className="hidden sm:inline text-[11px] font-semibold tracking-wide pr-0.5">
        အပေါ်သို့
      </span>
    </button>
  );
}
