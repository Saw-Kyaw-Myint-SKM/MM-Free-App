import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Faq } from '../types';

export function FAQAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="space-y-1.5 sm:space-y-2">
      {faqs.map((faq, idx) => (
        <div key={idx} className="border border-slate-200 rounded-lg sm:rounded-xl overflow-hidden bg-white hover:border-slate-300 transition-colors">
          <button
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            className="w-full flex items-center justify-between p-3 sm:p-4 text-left hover:bg-slate-50 transition-colors"
          >
            <span className="font-semibold text-slate-900 text-[11px] sm:text-xs lg:text-sm pr-3 sm:pr-4">{faq.q}</span>
            <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${openIdx === idx ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-600'}`}>
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-40' : 'max-h-0'}`}>
            <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-[11px] sm:text-xs lg:text-sm text-slate-600 leading-relaxed">
              {faq.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
