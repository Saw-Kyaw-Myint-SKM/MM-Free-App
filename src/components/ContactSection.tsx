import { ArrowLeft, Mail } from "lucide-react";
import { contactChannels } from "../data/contact";
import { ContactCard } from "./ContactCard";

export function ContactSection({ onBack }: { onBack: () => void }) {
  return (
    <main className="relative flex flex-1 flex-col min-h-0 pb-20 sm:pb-16 pt-[5.5rem] sm:pt-24 animate-fadeIn">
      <section className="relative w-full flex-1 overflow-x-clip">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50" />
        <div className="absolute top-20 -left-32 h-96 w-96 rounded-full bg-slate-200/50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 -right-32 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-slate-600 hover:text-blue-600 mb-6 sm:mb-8 font-medium text-[11px] sm:text-sm transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-x-1 transition-transform" />
            ပင်မသို့ ပြန်သွားရန်
          </button>

          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-full text-[10px] sm:text-xs font-medium mb-2 sm:mb-3 shadow-sm">
              <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>ဆက်သွယ်ရန်</span>
            </div>
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight">
              ကျွန်တော်တို့ကို ဆက်သွယ်ပါ
            </h1>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
                ဆော့ဖ်ဝဲနှင့်ပတ်သက်၍ အကြံပြုချက်များ၊ ထည့်သွင်းလိုသောအချက်များရှိပါက အချိန်မရွေး ဆက်သွယ်နိုင်ပါသည်။
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-5">
            {contactChannels.map((channel) => (
              <ContactCard key={channel.id} channel={channel} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
