import { useState, useEffect, useCallback } from "react";
import { Star, Quote, MessageCircle } from "lucide-react";
import { testimonials } from "../data";

export function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const allTestimonials = testimonials;
  const totalTestimonials = allTestimonials.length;
  const featured = testimonials[0];

  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev + 1) % totalTestimonials);
  }, [totalTestimonials]);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <div
      id="testimonials"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-8 sm:pb-12"
    >
      <div className="flex items-center gap-4 mb-8 sm:mb-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 bg-white border border-rose-200/60 text-rose-700 rounded-full text-[10px] sm:text-xs font-medium shadow-sm">
          <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          <span>သုံးစွဲသူများ၏ သုံးသပ်ချက်</span>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>

      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight">
          ကျွန်ုပ်တို့နှင့်အတူ
          <span className="block bg-gradient-to-r from-rose-600 via-pink-500 to-amber-500 bg-clip-text text-transparent mt-1">
            အောင်မြင်ခဲ့သူများ
          </span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto mb-5 sm:mb-6">
        <div className="relative bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg">
          <div className="absolute -top-3 left-5 sm:left-8">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-lg">
              <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
          </div>

          <div className="pt-3 sm:pt-4">
            <div className="flex gap-0.5 mb-3 sm:mb-4">
              {[...Array(featured.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed mb-4 sm:mb-6 font-medium">
              "{featured.content}"
            </p>

            <div className="flex items-center justify-between flex-wrap gap-3 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white font-bold text-sm sm:text-lg">
                    {featured.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    {featured.name}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500">
                    {featured.role}
                  </div>
                </div>
              </div>
              <div className="px-2.5 py-1 bg-rose-50 border border-rose-200 rounded-full text-[10px] sm:text-xs font-semibold text-rose-700">
                {featured.app}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative px-8 sm:px-12">
        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeTestimonial * 100}%)`,
            }}
          >
            {allTestimonials.map((t, idx) => (
              <div key={idx} className="w-full flex-shrink-0 px-2">
                <div className="relative bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex gap-0.5 mb-3 sm:mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 sm:mb-5 min-h-[60px]">
                    "{t.content}"
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-3 pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-md">
                        <span className="text-white font-bold text-sm sm:text-lg">
                          {t.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm sm:text-base font-bold text-slate-900">
                          {t.name}
                        </div>
                        <div className="text-[10px] sm:text-xs text-slate-500">
                          {t.role}
                        </div>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-[10px] sm:text-xs font-semibold text-amber-700">
                      {t.app}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() =>
            setActiveTestimonial(
              (prev) => (prev - 1 + totalTestimonials) % totalTestimonials,
            )
          }
          className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors z-10"
          aria-label="Previous testimonial"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() =>
            setActiveTestimonial((prev) => (prev + 1) % totalTestimonials)
          }
          className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors z-10"
          aria-label="Next testimonial"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="flex justify-center gap-2 mt-4 sm:mt-6">
          {allTestimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTestimonial(idx)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                idx === activeTestimonial
                  ? "bg-rose-500 w-6 sm:w-8"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          {[
            { value: "၆၈K+", label: "ဒေါင်းလုဒ်" },
            { value: "၄.၈★", label: "အဆင့်သတ်မှတ်ချက်" },
            { value: "၉၉%", label: "ကျေနပ်မှု" },
            { value: "၂၄/၇", label: "ပံ့ပိုးကူညီမှု" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center bg-white rounded-xl p-2 sm:p-3 border border-slate-200 shadow-sm"
            >
              <div className="text-base sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-rose-600 to-amber-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-[9px] sm:text-[10px] text-slate-500 mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
