import { useState, useEffect } from 'react';

export function ScrollProgressBar({ isActive = true }: { isActive?: boolean }) {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollPercent(Math.min((scrollTop / docHeight) * 100, 100));
      } else {
        setScrollPercent(0);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[110] h-[3px]">
      <div
        className="h-full bg-blue-600 transition-all duration-150 ease-out shadow-[0_0_6px_rgba(37,99,235,0.5)]"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
  );
}
