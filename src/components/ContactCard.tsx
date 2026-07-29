import { ExternalLink, Mail, Phone } from "lucide-react";
import type { ContactChannel } from "../data/contact";

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

function ChannelIcon({ id }: { id: ContactChannel["id"] }) {
  const className = "h-4 w-4 sm:h-6 sm:w-6";
  switch (id) {
    case "telegram":
      return <TelegramIcon className={className} />;
    case "tiktok":
      return <TikTokIcon className={className} />;
    case "email":
      return <Mail className={className} />;
    case "phone":
      return <Phone className={className} />;
  }
}

export function ContactCard({ channel }: { channel: ContactChannel }) {
  const isExternal = channel.id === "telegram" || channel.id === "tiktok";

  return (
    <a
      href={channel.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group block h-full rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white p-3 sm:p-5 transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-0.5"
    >
      <div
        className={`mb-2.5 sm:mb-4 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br ${channel.accent} text-white shadow-md`}
      >
        <ChannelIcon id={channel.id} />
      </div>

      <h3 className="mb-0.5 sm:mb-1 text-[11px] sm:text-sm font-bold text-slate-900 leading-tight">
        {channel.label}
      </h3>
      <p className="mb-2 sm:mb-3 text-[9px] sm:text-xs leading-relaxed text-slate-600 line-clamp-2">
        {channel.description}
      </p>

      <div className="flex items-center justify-between gap-1 sm:gap-2">
        <span className="truncate text-[10px] sm:text-xs font-semibold text-blue-600 group-hover:text-blue-700">
          {channel.value}
        </span>
        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 shrink-0 text-slate-400 transition-colors group-hover:text-blue-600" />
      </div>
    </a>
  );
}
