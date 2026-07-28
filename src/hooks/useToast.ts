import { useState, useCallback } from 'react';

export type ToastState = { message: string; visible: boolean };

export function useToast() {
  const [toast, setToast] = useState<ToastState>({ message: '', visible: false });

  const show = useCallback((message: string) => {
    setToast({ message, visible: true });
    window.setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 2500);
  }, []);

  const hide = useCallback(() => {
    setToast((prev) => ({ ...prev, visible: false }));
  }, []);

  return { toast, show, hide };
}
