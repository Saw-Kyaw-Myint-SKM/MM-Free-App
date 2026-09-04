import {
  ArrowLeft,
  Download,
  ExternalLink,
  Star,
  Sparkles,
  Check,
  BookOpen,
  HelpCircle,
  Clock,
  Lock,
  Store,
  MessageCircle,
} from "lucide-react";
import type { AppItem } from "../types";
import { getAppStatus } from "../types";
import { applications } from "../data";
import { ScreenshotGallery } from "./ScreenshotGallery";
import { FAQAccordion } from "./FAQAccordion";
import { ApplicationCard } from "./ApplicationCard";
import { ApkPureIcon } from "./ApkPureIcon";

export function AppDetail({
  app,
  onBack,
  onSelectApp,
  onDownload,
}: {
  app: AppItem;
  onBack: () => void;
  onSelectApp: (app: AppItem) => void;
  onDownload?: (app?: { name?: string; downloadUrl?: string }) => void;
}) {
  const relatedApps = applications.filter((a) => a.id !== app.id).slice(0, 3);
  const status = getAppStatus(app);
  const isPreview = status === "preview";
  const downloadLocked = isPreview;

  return (
    <div className="flex flex-1 flex-col pt-[5.5rem] sm:pt-24 animate-fadeIn overflow-x-clip">
      <section className="relative overflow-x-clip bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 py-8 sm:py-12">
        <div className="absolute top-20 -right-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-32 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-slate-600 hover:text-blue-600 mb-4 sm:mb-6 font-medium text-[11px] sm:text-sm transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform" />
            ပင်မသို့ ပြန်သွားရန်
          </button>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="flex items-start gap-3 sm:gap-4">
                <div
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${app.accent} flex items-center justify-center shadow-lg flex-shrink-0 overflow-hidden`}
                >
                  {app.logo ? (
                    <img src={app.logo} alt={app.name} className="w-full h-full object-cover" />
                  ) : app.icon ? (
                    <app.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  ) : null}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                    <div
                      className={`inline-block px-2 sm:px-2.5 py-0.5 rounded-md text-[9px] sm:text-[10px] font-semibold ${app.categoryColor}`}
                    >
                      {app.category}
                    </div>
                    {app.badge && (
                      <div className="inline-flex items-center px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-semibold bg-emerald-500 text-white">
                        {app.badge}
                      </div>
                    )}
                    {isPreview && (
                      <div className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-semibold bg-sky-600 text-white">
                        <Clock className="w-3 h-3" />
                        Preview · မကြာမီ ဒေါင်းလုဒ်ရရှိမည်
                      </div>
                    )}
                  </div>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-1.5 sm:mb-2 tracking-tight text-balance break-words">
                    {app.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-xs">
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${i < Math.floor(app.rating) ? "fill-amber-400 text-amber-400" : "text-slate-200"}`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-slate-900 ml-0.5 sm:ml-1">
                        {app.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-0.5 sm:gap-1 text-slate-600">
                      <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>{app.downloads}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[11px] sm:text-sm text-slate-600 mt-3 sm:mt-5 leading-relaxed">
                {app.description}
              </p>

              {isPreview && (
                <div className="mt-3 sm:mt-4 flex items-start gap-2 rounded-lg sm:rounded-xl border border-sky-200 bg-sky-50 px-3 py-2.5 text-[11px] sm:text-xs text-sky-800">
                  <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                  <p>
                    ဒေါင်းလုဒ် မရရှိနိုင်သေးပါ။ အင်္ဂါရပ်များနှင့်
                    အသုံးပြုပုံများကို ကြည့်ရှုနိုင်ပါသည်။
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-4 sm:mt-6">
                {downloadLocked ? (
                  <button
                    type="button"
                    disabled
                    className="px-4 sm:px-5 py-2 sm:py-2.5 bg-slate-200 text-slate-500 font-semibold rounded-lg sm:rounded-xl cursor-not-allowed flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm"
                  >
                    <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    မကြာမီ ဒေါင်းလုဒ်ရရှိမည်
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => onDownload?.(app)}
                      className="px-4 sm:px-5 py-2 sm:py-2.5 bg-blue-600 text-white font-semibold rounded-lg sm:rounded-xl hover:bg-blue-700 transition-all flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm shadow-lg shadow-blue-500/20"
                    >
                      <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      ယခု ဒေါင်းလုဒ်လုပ်ရန်
                    </button>
                    {app.apkPureUrl && (
                      <a
                        href={app.apkPureUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white text-emerald-700 font-semibold rounded-lg sm:rounded-xl border border-emerald-200 hover:bg-emerald-50 transition-all flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm"
                      >
                        <ApkPureIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        APKPure မှ ဒေါင်းရန်
                      </a>
                    )}
                  </>
                )}
                <a
                  href="https://www.tiktok.com/@aisourcemm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white text-slate-700 font-semibold rounded-lg sm:rounded-xl border border-slate-200 hover:border-slate-300 transition-all flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm"
                >
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  သရုပ်ပြကြည့်ရန်
                </a>
                <a
                  href="https://t.me/aisourcemm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white text-sky-700 font-semibold rounded-lg sm:rounded-xl border border-sky-200 hover:bg-sky-50 transition-all flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  မေးမြန်းရန်
                </a>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg border border-white">
              <h3 className="font-bold text-slate-900 mb-2 sm:mb-3 text-xs sm:text-sm">
                အက်ပ် အချက်အလက်
              </h3>
              <div className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs">
                <div className="flex justify-between py-1.5 sm:py-2 border-b border-slate-100">
                  <span className="text-slate-500">ဗားရှင်း</span>
                  <span className="font-semibold text-slate-900">
                    {isPreview ? "မကြာမီ" : app.version}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 sm:py-2 border-b border-slate-100">
                  <span className="text-slate-500">ဖိုင်အရွယ်အစား</span>
                  <span className="font-semibold text-slate-900">
                    {isPreview ? "—" : app.size}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 sm:py-2">
                  <span className="text-slate-500">အဆင့်သတ်မှတ်ချက်</span>
                  <span className="font-semibold text-slate-900 flex items-center gap-0.5 sm:gap-1">
                    {app.rating}{" "}
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400 text-amber-400" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl lg:max-w-4xl mx-auto">
            <h2 className="text-sm sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4">
              မျက်နှာပြင်ဓာတ်ပုံများ
            </h2>
            <ScreenshotGallery screenshots={app.screenshots} appName={app.name} />
          </div>
        </div>
      </section>

      {app.businessTypes && app.businessTypes.length > 0 && (
        <section className="py-6 sm:py-8 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl lg:max-w-4xl mx-auto">
              <h2 className="text-sm sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
                <Store className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
                ဘယ်ဆိုင်တွေမှာ သုံးလို့ ရလဲ?
              </h2>
              <div className="flex flex-wrap gap-2">
                {app.businessTypes.map((type, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white rounded-full text-[11px] sm:text-xs font-medium text-slate-700 border border-amber-200 shadow-sm"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-6 sm:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h2 className="text-sm sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                အင်္ဂါရပ်များ
              </h2>
              <div className="space-y-1.5 sm:space-y-2">
                {app.features.map((f: string, i: number) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 sm:gap-3 bg-slate-50 p-2.5 sm:p-3 rounded-lg sm:rounded-xl border border-slate-100"
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </div>
                    <span className="text-[11px] sm:text-sm text-slate-700">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                အသုံးပြုပုံ
              </h2>
              <div className="space-y-1.5 sm:space-y-2">
                {app.howToUse.map((step: string, i: number) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 sm:gap-3 bg-slate-50 p-2.5 sm:p-3 rounded-lg sm:rounded-xl border border-slate-100"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 text-[10px] sm:text-xs">
                      {i + 1}
                    </div>
                    <span className="text-[11px] sm:text-sm text-slate-700 pt-0.5">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-sm sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
            <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            မေးလေ့ရှိသော မေးခွန်းများ
          </h2>
          <FAQAccordion faqs={app.faq} />
        </div>
      </section>

      <section className="py-6 sm:py-8 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl lg:max-w-5xl mx-auto">
            <h2 className="text-sm sm:text-lg font-bold text-slate-900 mb-3 sm:mb-5">
              ဆက်စပ် အပလီကေးရှင်းများ
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 md:mb-6 mb-10">
              {relatedApps.map((rapp, idx) => (
                <ApplicationCard
                  key={rapp.id}
                  app={rapp}
                  onClick={onSelectApp}
                  onDownload={onDownload}
                  index={idx}
                  compact
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
