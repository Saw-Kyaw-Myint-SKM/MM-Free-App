import { useState } from "react";
import type { AppItem } from "./types";
import { getAppStatus } from "./types";
import { useToast } from "./hooks/useToast";
import {
  Navbar,
  AnnouncementMarquee,
  HomeSection,
  ApplicationsSection,
  AppDetail,
  Footer,
  BackToTop,
  ScrollProgressBar,
  ToastContainer,
} from "./components";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedApp, setSelectedApp] = useState<AppItem | null>(null);
  const [activeNav, setActiveNav] = useState<"home" | "applications">("home");
  const { toast, show, hide } = useToast();

  const showComingSoon = (label?: string) => {
    show(
      label
        ? `${label} မကြာမီ ရရှိမည်။`
        : "ဆော့ဖ်ဝဲလ် ဒေါင်းလုဒ် လုပ်ဆောင်ချက် မကြာမီ ရရှိမည်။",
    );
  };

  const handleNavigate = (navId: string) => {
    if (navId === "home") {
      setCurrentPage("home");
      setSelectedApp(null);
      setActiveNav("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (navId === "applications") {
      setCurrentPage("home");
      setSelectedApp(null);
      setActiveNav("applications");
      setTimeout(() => {
        document
          .getElementById("applications")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    // 'footer' intentionally does nothing to page/nav state
  };

  const handleSelectApp = (app: AppItem) => {
    if (getAppStatus(app) === "disabled") return;
    setSelectedApp(app);
    setCurrentPage("detail");
    setActiveNav("applications");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setCurrentPage("home");
    setSelectedApp(null);
    setActiveNav("home");
    requestAnimationFrame(() => {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  return (
    <div className="flex min-h-svh flex-1 flex-col bg-white antialiased">
      <ScrollProgressBar isActive={currentPage === "home"} />
      <Navbar
        currentPage={currentPage}
        activeNav={activeNav}
        onNavigate={handleNavigate}
        onCtaClick={() => showComingSoon("စတင်ရန်")}
      />
      <AnnouncementMarquee />

      {currentPage === "home" ? (
        <main key="home" className="relative flex flex-1 flex-col min-h-0 pb-20 sm:pb-16">
          <HomeSection />
          <ApplicationsSection
            onSelectApp={handleSelectApp}
            onDownload={showComingSoon}
          />
        </main>
      ) : (
        <main key="detail" className="flex flex-1 flex-col min-h-0 pb-20 sm:pb-16">
          {selectedApp && (
            <AppDetail
              app={selectedApp}
              onBack={handleBack}
              onSelectApp={handleSelectApp}
              onDownload={showComingSoon}
            />
          )}
        </main>
      )}

      <Footer />
      <BackToTop />
      <ToastContainer toast={toast} onClose={hide} />
    </div>
  );
}
