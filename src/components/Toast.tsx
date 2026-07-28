import type { ToastState } from '../hooks/useToast';

export function ToastContainer({ toast, onClose }: { toast: ToastState; onClose: () => void }) {
  if (!toast.visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200]">
      <div className="bg-slate-900 text-white px-4 py-2.5 rounded-lg shadow-lg text-xs sm:text-sm flex items-center gap-3 animate-fadeInDown">
        <span>{toast.message}</span>
        <button
          type="button"
          onClick={onClose}
          className="text-white/70 hover:text-white transition-colors"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  );
}
