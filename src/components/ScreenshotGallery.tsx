import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ScreenshotGallery({ screenshots, appName }: { screenshots: string[]; appName: string }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const nextSlide = () => setCurrentIdx((prev) => (prev + 1) % screenshots.length);
  const prevSlide = () => setCurrentIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [screenshots.length]);

  return (
    <div className="relative">
      <div className="relative aspect-[16/10] lg:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
        {screenshots.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${appName} screenshot ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              idx === currentIdx ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
        </button>

        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {screenshots.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`h-1 sm:h-1.5 rounded-full transition-all ${
                idx === currentIdx ? 'w-6 sm:w-8 bg-blue-600' : 'w-1 sm:w-1.5 bg-white/70'
              }`}
            />
          ))}
        </div>

        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-md text-[10px] sm:text-xs text-white font-medium">
          {currentIdx + 1} / {screenshots.length}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {screenshots.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIdx(idx)}
            className={`w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all ${
              idx === currentIdx ? 'border-blue-600' : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img src={img} alt={`thumb ${idx + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
