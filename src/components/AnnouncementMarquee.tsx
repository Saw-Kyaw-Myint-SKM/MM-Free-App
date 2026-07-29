const MESSAGE = "AI စွမ်းအားကို အသုံးပြု၍ အခမဲ့နှင့် စျေးနှုန်းချိုသာသော ဆော့ဖ်ဝဲလ်များကို ဖန်တီးရန်။";

export function AnnouncementMarquee() {
  return (
    <div
      className="fixed top-14 sm:top-16 left-0 right-0 z-[99] h-8 overflow-hidden bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 text-white/95 border-b border-white/10"
      role="status"
      aria-label={MESSAGE}
    >
      <div className="flex h-full items-center w-max animate-marquee-right motion-reduce:animate-none">
        {Array.from({ length: 6 }, (_, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-6 text-[11px] sm:text-xs font-medium tracking-wide whitespace-nowrap"
            aria-hidden={i > 0}
          >
            <span className="inline-block w-1 h-1 rounded-full bg-white/60" />
            {MESSAGE}
          </span>
        ))}
      </div>
    </div>
  );
}
