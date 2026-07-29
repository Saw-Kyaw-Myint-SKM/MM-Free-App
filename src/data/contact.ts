export type ContactChannel = {
  id: "telegram" | "tiktok" | "email" | "phone";
  label: string;
  description: string;
  value: string;
  href: string;
  accent: string;
};

export const contactChannels: ContactChannel[] = [
  {
    id: "telegram",
    label: "Telegram Channel",
    description: "နောက်ဆုံးရ သတင်းများနှင့် အပ်ဒိတ်များ",
    value: "@aisourcemm",
    href: "https://t.me/aisourcemm",
    accent: "from-sky-500 to-blue-600",
  },
  {
    id: "tiktok",
    label: "TikTok Channel",
    description: "ဗီဒီယိုများနှင့် tutorial များ",
    value: "@aisourcemm",
    href: "https://www.tiktok.com/@aisourcemm",
    accent: "from-slate-800 to-slate-950",
  },
  {
    id: "email",
    label: "Email",
    description: "စီးပွားရေးနှင့် technical support",
    value: "support@aisourcemm.com",
    href: "mailto:support@aisourcemm.com",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    id: "phone",
    label: "Phone",
    description: "ဖုန်းဖြင့် တိုက်ရိုက် ဆက်သွယ်ရန်",
    value: "09451340513",
    href: "tel:+959451340513",
    accent: "from-violet-500 to-purple-600",
  },
];
