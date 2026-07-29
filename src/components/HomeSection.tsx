import { useState, useEffect } from "react";
import { ArrowRight, Mail, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { slides } from "../data/applications";
import logo from "../assets/images/Logo.png";

export function HomeSection() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];

  return (
    <section id="home" className="relative w-full overflow-clip">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50" />
      <div className="absolute top-16 -left-16 w-48 h-48 sm:top-20 sm:-left-32 sm:w-96 sm:h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-16 w-48 h-48 sm:bottom-20 sm:-right-32 sm:w-96 sm:h-96 bg-cyan-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 sm:pt-32 pb-8 sm:pb-16 mt-4">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10 items-center">
          <div className="lg:col-span-3 mb-2">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/70 backdrop-blur-md border border-blue-200/60 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-5 animate-fadeInDown shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span>{slide.badge}</span>
            </div>

            <div key={currentSlide} className="animate-fadeIn">
              <h1 className="text-2xl sm:text-2xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-[1.2] md:mb-6 mb-6 tracking-tight">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-5 sm:mb-6 leading-relaxed max-w-xl">
                {slide.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                onClick={() =>
                  document
                    .getElementById("applications")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group px-3 py-1.5 sm:px-5 sm:py-3 bg-blue-600 text-white font-semibold rounded-md sm:rounded-xl hover:bg-blue-700 transition-all flex items-center gap-1 sm:gap-2 text-xs sm:text-sm shadow-lg shadow-blue-500/20"
              >
                အက်ပ်များ ကြည့်ရန်
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="sm:hidden group relative overflow-hidden px-3 py-1.5 font-semibold rounded-md text-xs flex items-center gap-1.5 text-white shadow-md shadow-teal-500/25 hover:shadow-lg hover:shadow-teal-500/35 transition-all active:scale-[0.98]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Mail className="relative w-3.5 h-3.5" />
                <span className="relative">ဆက်သွယ်ရန်</span>
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById("testimonials");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="hidden sm:flex px-4 sm:px-5 py-2.5 sm:py-3 bg-white/70 backdrop-blur-md border border-blue-200/60 text-slate-700 font-semibold rounded-lg sm:rounded-xl hover:bg-white transition-all text-sm items-center gap-1.5 sm:gap-2 shadow-sm"
              >
                <Play className="w-4 h-4" />
                အသေးစိတ်ကြည့်ရန်
              </button>
            </div>

            <div className="mt-5 sm:mt-6 flex gap-2 items-center">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all ${
                    idx === currentSlide
                      ? "w-8 sm:w-10 bg-blue-600"
                      : "w-1.5 sm:w-2 bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-2">
            <div className="relative max-w-sm lg:max-w-none mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-200/50 to-cyan-200/50 rounded-3xl blur-2xl" />
              <div className="relative bg-white/80 backdrop-blur-xl border border-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-2 sm:mb-3 pb-2 sm:pb-3 border-b border-slate-200/60">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 text-center text-xs text-slate-500">
                    aisourcemm.com
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={slide.image}
                    alt="preview"
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="h-8 shrink-0 overflow-hidden flex items-center">
                      <img
                        src={logo}
                        alt="AISource MM"
                        className="h-8 w-auto max-w-[80px] object-contain object-left"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-900">
                        AISource MM
                      </div>
                      <div className="text-[10px] text-slate-500">
                        Free for Myanmar
                      </div>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 bg-emerald-50 border border-emerald-200/60 rounded-full text-xs font-semibold text-emerald-700">
                    အခမဲ့
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
