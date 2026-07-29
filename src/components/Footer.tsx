import { Heart } from "lucide-react";
import { toMyanmarDigits } from "../utils/myanmarDigits";

export function Footer() {
  return (
    <footer
      id="footer"
      className="fixed bottom-0 left-0 right-0 z-[80] shrink-0 w-full border-t border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 py-3 sm:py-4"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-1.5 sm:gap-3 text-[10px] sm:text-xs text-slate-400">
          <p className="hidden md:block font-medium text-slate-300">
            © {toMyanmarDigits(new Date().getFullYear())} AISource MM။
          </p>
          <p className="flex items-center gap-1.5 text-center md:text-left leading-relaxed">
            AI Power အသုံးပြုပြီး အသေးစား စီးပွားရေးလုပ်ငန်းများအတွက် အခမဲ့
            ဆော့ဖ်ဝဲလ်များ။
            <Heart className="w-3 h-3 fill-rose-400 text-rose-400 shrink-0" />
          </p>
        </div>
      </div>
    </footer>
  );
}
