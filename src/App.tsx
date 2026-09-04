import { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import type { AppItem } from "./types";
import { getAppStatus } from "./types";
import { applications } from "./data";
import { useToast } from "./hooks/useToast";
import {
  Navbar,
  AnnouncementMarquee,
  HomeSection,
  ApplicationsSection,
  AppDetail,
  ContactSection,
  Footer,
  BackToTop,
  ScrollProgressBar,
  ToastContainer,
} from "./components";

function HomePage({
  onSelectApp,
  onDownload,
}: {
  onSelectApp: (app: AppItem) => void;
  onDownload: (app?: { name?: string; downloadUrl?: string }) => void;
}) {
  return (
    <main
      key="home"
      className="relative flex flex-1 flex-col min-h-0 pb-20 sm:pb-16"
    >
      <HomeSection />
      <ApplicationsSection onSelectApp={onSelectApp} onDownload={onDownload} />
    </main>
  );
}

function AppDetailPage({
  onSelectApp,
  onDownload,
  onBack,
}: {
  onSelectApp: (app: AppItem) => void;
  onDownload: (app?: { name?: string; downloadUrl?: string }) => void;
  onBack: () => void;
}) {
  const { appId } = useParams<{ appId: string }>();
  const app = applications.find((a) => a.id === appId);

  if (!app || getAppStatus(app) === "disabled") {
    return <Navigate to="/" replace />;
  }

  return (
    <main
      key="detail"
      className="flex flex-1 flex-col min-h-0 pb-20 sm:pb-16"
    >
      <AppDetail
        app={app}
        onBack={onBack}
        onSelectApp={onSelectApp}
        onDownload={onDownload}
      />
    </main>
  );
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast, show, hide } = useToast();
  const [activeNav, setActiveNav] = useState<
    "home" | "applications" | "contact"
  >("home");

  const isDetail = location.pathname.startsWith("/apps/");
  const isContact = location.pathname === "/contact";
  const currentPage = isDetail ? "detail" : isContact ? "contact" : "home";

  useEffect(() => {
    if (isDetail) {
      setActiveNav("applications");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (isContact) {
      setActiveNav("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (location.pathname === "/") {
      setActiveNav((prev) => (prev === "applications" ? prev : "home"));
    }
  }, [location.pathname, isDetail, isContact]);

  const handleDownload = (app?: { name?: string; downloadUrl?: string }) => {
    if (app?.downloadUrl) {
      window.open(app.downloadUrl, "_blank");
    } else {
      show(
        app?.name
          ? `${app.name} မကြာမီ ရရှိမည်။`
          : "ဆော့ဖ်ဝဲလ် ဒေါင်းလုဒ် လုပ်ဆောင်ချက် မကြာမီ ရရှိမည်။",
      );
    }
  };

  const handleNavigate = (navId: string) => {
    if (navId === "home") {
      navigate("/");
      setActiveNav("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (navId === "applications") {
      navigate("/");
      setActiveNav("applications");
      setTimeout(() => {
        document
          .getElementById("applications")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (navId === "contact") {
      navigate("/contact");
      setActiveNav("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSelectApp = (app: AppItem) => {
    if (getAppStatus(app) === "disabled") return;
    navigate(`/apps/${app.id}`);
  };

  const handleBack = () => {
    navigate("/");
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
        onCtaClick={() => handleDownload({ name: "စတင်ရန်" })}
      />
      <AnnouncementMarquee />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onSelectApp={handleSelectApp}
              onDownload={handleDownload}
            />
          }
        />
        <Route
          path="/apps/:appId"
          element={
            <AppDetailPage
              onSelectApp={handleSelectApp}
              onDownload={handleDownload}
              onBack={handleBack}
            />
          }
        />
        <Route
          path="/contact"
          element={<ContactSection onBack={handleBack} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
      <BackToTop />
      <ToastContainer toast={toast} onClose={hide} />
    </div>
  );
}
