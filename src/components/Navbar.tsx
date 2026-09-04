import { useState } from "react";
import { Menu, X, Home, Grid3X3, Mail, Download } from "lucide-react";
import logo from "../assets/images/Logo.png";
import { useInstallPrompt } from "../hooks/useInstallPrompt";

export function Navbar({
  currentPage: _currentPage,
  activeNav,
  onNavigate,
  onCtaClick: _onCtaClick,
}: {
  currentPage: string;
  activeNav: "home" | "applications" | "contact";
  onNavigate: (navId: string) => void;
  onCtaClick?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { isInstallable, install } = useInstallPrompt();

  const navItems = [
    { label: "ပင်မ", icon: Home, id: "home" },
    { label: "အက်ပ်များ", icon: Grid3X3, id: "applications" },
    { label: "ဆက်သွယ်ရန်", icon: Mail, id: "contact" },
  ];

  const scrollTo = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div
            className="flex items-center gap-2 cursor-pointer group"
            role="link"
            aria-label="AISource MM - Home"
            onClick={() => {
              onNavigate("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="h-8 w-8 sm:h-9 sm:w-9 shrink-0 overflow-hidden">
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                className="w-full h-auto scale-[2.4] origin-top object-contain group-hover:opacity-90 transition-opacity"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-sm sm:text-base tracking-tight text-slate-900 whitespace-nowrap">
                AISource MM
              </span>
              <span className="text-[8px] sm:text-[9px] font-medium tracking-wider uppercase text-slate-500">
                Myanmar
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-3 py-1.5 rounded-lg transition-all font-medium text-xs ${
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            {isInstallable && (
              <button
                onClick={install}
                className="ml-2 px-3 py-1.5 rounded-lg transition-all font-medium text-xs text-blue-600 bg-blue-50 hover:bg-blue-100 flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                Install
              </button>
            )}
          </div>

          {isInstallable && (
            <button
              onClick={install}
              className="lg:hidden p-1.5 rounded-lg text-blue-600 bg-blue-50 hover:bg-blue-100"
            >
              <Download className="w-4 h-4" />
            </button>
          )}
          <button
            className="lg:hidden p-1.5 rounded-lg text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="px-3 py-3 space-y-0.5">
            {navItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium text-xs">{item.label}</span>
                </button>
              );
            })}
            {isInstallable && (
              <button
                onClick={() => { install(); setIsOpen(false); }}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-blue-600 bg-blue-50 hover:bg-blue-100"
              >
                <Download className="w-4 h-4" />
                <span className="font-medium text-xs">Install App</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
