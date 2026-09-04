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
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="relative w-[160px] sm:w-[200px] md:w-[240px]">
          {/* Phone Frame */}
            <div className="relative bg-slate-900 rounded-[1.5rem] sm:rounded-[2rem] p-1.5 sm:p-2 shadow-2xl">
            {/* Notch */}
            <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-3.5 sm:h-4 bg-slate-900 rounded-b-xl z-20">
              <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 w-5 sm:w-6 h-1 bg-slate-700 rounded-full" />
            </div>
            {/* Screen */}
            <div className="relative aspect-[9/19] rounded-[1rem] sm:rounded-[1.5rem] overflow-hidden bg-white">
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
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-[-40px] sm:left-[-50px] top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-slate-50 transition-all border border-slate-200"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-[-40px] sm:right-[-50px] top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-slate-50 transition-all border border-slate-200"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
          </button>
        </div>

        {/* Counter */}
        <div className="text-center mt-4">
          <span className="px-3 py-1 bg-slate-100 rounded-full text-xs sm:text-sm font-medium text-slate-600">
            {currentIdx + 1} / {screenshots.length}
          </span>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-4 overflow-x-auto px-2 pb-2">
        {screenshots.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIdx(idx)}
            className={`flex-shrink-0 w-12 h-20 sm:w-14 sm:h-24 rounded-lg overflow-hidden border-2 transition-all ${
              idx === currentIdx ? 'border-blue-600 shadow-md' : 'border-slate-200 opacity-60 hover:opacity-100'
            }`}
          >
            <img src={img} alt={`thumb ${idx + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
