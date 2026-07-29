import type { LucideIcon } from 'lucide-react';

export type Faq = { q: string; a: string };

/** available = downloadable; preview = detail viewable, download locked; disabled = locked card */
export type AppStatus = 'available' | 'preview' | 'disabled';

export type AppItem = {
  id: string;
  name: string;
  icon: LucideIcon;
  category: string;
  categoryColor: string;
  accent: string;
  version: string;
  downloads: string;
  rating: number;
  size: string;
  description: string;
  screenshots: string[];
  features: string[];
  howToUse: string[];
  requirements: string;
  releaseNotes: string;
  faq: Faq[];
  status?: AppStatus;
};

export function getAppStatus(app: AppItem): AppStatus {
  return app.status ?? 'available';
}

export type Testimonial = {
  name: string;
  role: string;
  content: string;
  rating: number;
  app: string;
};
