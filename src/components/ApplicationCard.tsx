import { Star, Download, Lock, Clock, Eye } from 'lucide-react';
import type { AppItem } from '../types';
import { getAppStatus } from '../types';
import { useInView } from '../hooks/useInView';

export function ApplicationCard({
  app,
  onClick,
  onDownload,
  index = 0,
  compact = false,
}: {
  app: AppItem;
  onClick: (app: AppItem) => void;
  onDownload?: (app?: { name?: string; downloadUrl?: string }) => void;
  index?: number;
  compact?: boolean;
}) {
  const [ref, isInView] = useInView();
  const status = getAppStatus(app);
  const isDisabled = status === 'disabled';
  const isPreview = status === 'preview';
  const canOpen = !isDisabled;

  const handleOpen = () => {
    if (!canOpen) return;
    onClick(app);
  };

  return (
    <div
      ref={ref}
      role={canOpen ? 'button' : undefined}
      tabIndex={canOpen ? 0 : undefined}
      onClick={handleOpen}
      onKeyDown={(e) => {
        if (!canOpen) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(app);
        }
      }}
      className={`group relative transition-all duration-500 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${canOpen ? 'cursor-pointer' : 'cursor-not-allowed'}`}
      style={{ transitionDelay: `${index * 0.06}s` }}
      aria-disabled={isDisabled}
    >
      <div
        className={`relative h-full overflow-hidden border bg-white transition-all duration-300 ${
          compact ? 'rounded-xl lg:rounded-xl' : 'rounded-2xl'
        } ${
          isDisabled
            ? 'border-slate-200/80 bg-slate-50'
            : 'border-slate-200/90 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-0.5'
        }`}
      >
        <div
          className={`relative overflow-hidden bg-slate-100 ${
            compact
              ? 'aspect-[16/11] sm:aspect-[16/9]'
              : 'aspect-[16/11] sm:aspect-[16/10]'
          }`}
        >
          <img
            src={app.posterImage || app.screenshots[0]}
            alt={app.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isDisabled
                ? 'grayscale contrast-90 opacity-70'
                : isPreview
                  ? 'grayscale-[0.2] group-hover:scale-105'
                  : 'group-hover:scale-105'
            }`}
          />

          <div
            className={`absolute inset-0 bg-gradient-to-t ${
              isDisabled
                ? 'from-slate-900/45 via-slate-900/10 to-transparent'
                : 'from-slate-900/35 via-transparent to-transparent'
            }`}
          />

          <div className="absolute top-2 left-2">
            <span
              className={`px-1.5 py-0.5 rounded-md text-[8px] sm:text-[9px] font-semibold backdrop-blur-sm ${
                isDisabled ? 'bg-white/80 text-slate-500' : app.categoryColor
              }`}
            >
              {app.category}
            </span>
          </div>

          <div className="absolute top-2 right-2">
            {isDisabled ? (
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md text-[8px] sm:text-[9px] font-semibold bg-amber-500 text-white shadow-sm">
                <Clock className="w-2.5 h-2.5" />
                မကြာမီ
              </span>
            ) : isPreview ? (
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md text-[8px] sm:text-[9px] font-semibold bg-sky-600 text-white shadow-sm">
                <Eye className="w-2.5 h-2.5" />
                Preview
              </span>
            ) : (
              <span className="sm:hidden inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-white/90 backdrop-blur-sm">
                <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                <span className="text-[9px] font-semibold text-slate-900">
                  {app.rating}
                </span>
              </span>
            )}
          </div>

          <div
            className={`absolute -bottom-3.5 left-2.5 sm:left-3 rounded-xl flex items-center justify-center shadow-md ring-2 ring-white z-10 ${
              compact ? 'w-7 h-7 sm:w-8 sm:h-8' : 'w-8 h-8 sm:w-9 sm:h-9'
            } ${
              isDisabled
                ? 'bg-slate-400'
                : `bg-gradient-to-br ${app.accent}`
            }`}
          >
            {app.logo ? (
              <img src={app.logo} alt={app.name} className={`${compact ? 'w-5 h-5 sm:w-5 sm:h-5' : 'w-5 h-5 sm:w-5 sm:h-5'} object-cover rounded`} />
            ) : app.icon ? (
              <app.icon
                className={`text-white ${
                  compact ? 'w-4 h-4 sm:w-4 sm:h-4' : 'w-4 h-4 sm:w-4 sm:h-4'
                }`}
              />
            ) : null}
          </div>

          {isDisabled && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Lock className="w-4 h-4 text-slate-500" />
              </div>
            </div>
          )}
        </div>

        <div
          className={
            compact
              ? 'pt-4 sm:pt-5 px-2 sm:px-2.5 pb-2 sm:pb-2.5'
              : 'pt-5 sm:pt-6 px-2.5 sm:px-3 pb-2.5 sm:pb-3'
          }
        >
          <div className="mb-1.5 min-w-0">
            <h3
              className={`font-bold truncate text-[13px] sm:text-xs leading-tight ${
                isDisabled ? 'text-slate-500' : 'text-slate-900'
              }`}
            >
              {app.name}
            </h3>
            <div
              className={`flex items-center gap-1 text-[9px] sm:text-[10px] mt-0.5 ${
                isDisabled ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              {status === 'available' && (
                <div className="hidden sm:flex items-center gap-0.5">
                  <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  <span className="font-semibold text-slate-700">
                    {app.rating}
                  </span>
                  <span className="text-slate-300">•</span>
                </div>
              )}
              <span>
                {isDisabled
                  ? 'မကြာမီ ရရှိမည်'
                  : isPreview
                    ? 'Preview · ဒေါင်းလုဒ် မရသေး'
                    : `v${app.version}`}
              </span>
            </div>
          </div>

          <p
            className={`hidden sm:block mb-2 leading-relaxed ${
              compact ? 'text-[10px] line-clamp-1' : 'text-[11px] line-clamp-2'
            } ${isDisabled ? 'text-slate-400' : 'text-slate-600'}`}
          >
            {app.description}
          </p>

          {isDisabled ? (
            <button
              type="button"
              disabled
              className="w-full px-2 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-semibold text-slate-400 bg-slate-100 border border-slate-200 rounded-lg cursor-not-allowed flex items-center justify-center gap-1"
            >
              <Lock className="w-3 h-3" />
              <span>မရရှိနိုင်သေး</span>
            </button>
          ) : isPreview ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClick(app);
              }}
              className="w-full px-2 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-semibold text-sky-700 bg-sky-50 border border-sky-200 rounded-lg hover:bg-sky-100 transition-all flex items-center justify-center gap-1"
            >
              <Eye className="w-3 h-3" />
              <span>အသေးစိတ်ကြည့်ရန်</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onDownload?.(app);
              }}
              className={`w-full px-2 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-semibold text-white bg-gradient-to-r ${app.accent} rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-1 shadow-sm`}
            >
              <Download className="w-3 h-3" />
              <span>ဒေါင်းလုဒ်</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
