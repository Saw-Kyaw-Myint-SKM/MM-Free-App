import koneSoneImg from "../assets/images/kone_sone.png";
import taungthulatsweImg from "../assets/images/taung_thu_lat_swe.png";

import { ShoppingCart, Utensils } from "lucide-react";
import type { AppItem } from "../types";

export const slides = [
  {
    title: "အထည်ဆိုင် စီမံခန့်ခွဲမှုစနစ်",
    subtitle:
      "AI နည်းပညာဖြင့် ဖန်တီးထားသော အခမဲ့ဆော့ဖ်ဝဲလ်ဖြင့် အရောင်း၊ ကုန်လက်ကျန်နှင့် စာရင်းများကို လွယ်ကူစွာ စီမံခန့်ခွဲနိုင်ပါသည်။",
    image: "/ais_pos/poster_img.png",
    badge: "အခမဲ့",
  },
  {
    title: "Online shop POS",
    subtitle:
      "Online shop များအတွက် အရောင်း၊ ကုန်လက်ကျန်၊ စာရင်းကိုင်နှင့် ပြေစာထုတ်ခြင်းအထိ တစ်နေရာတည်းတွင် အသုံးပြုနိုင်သော အခမဲ့ POS စနစ်။",
    image: koneSoneImg,
    badge: "အင်တာနက်မလို",
  },
  {
    title: "တောင်သူ စိုက်ပျိုးရေးအက်ပ်",
    subtitle:
      "မြန်မာဘာသာဖြင့် အသုံးပြုနိုင်ပြီး စျေးနူန်းများနှင့် အထောက်အကူဖြင့် စိုက်ပျိုးရေးနည်းလမ်းများ ပိုမိုလွယ်ကူစွာ ကြည်ရူ့နိုင်ပါသည်။",
    image: taungthulatsweImg,
    badge: "မြန်မာဘာသာ",
  },
];

export const applications: AppItem[] = [
  {
    id: "inventory-manager",
    name: "AIS POS",
    logo: "/logo.png",
    category: "ရောင်းဝယ်ရေး",
    categoryColor: "bg-emerald-50 text-emerald-700",
    accent: "from-emerald-600 to-emerald-500",
    version: "1.0.0",
    downloads: "10",
    rating: 2,
    size: "118 MB",
    description:
      "AIS POS သည် မြန်မာဘာသာဖြင့် အသုံးပြုနိုင်ပြီး အင်တာနက်မလိုဘဲ အရောင်းဆိုင်များအတွက် အလွယ်တကူ အသုံးပြုနိုင်သော POS စနစ်ဖြစ်သည်။",
    screenshots: [
      "/ais_pos/img2.jpg",
      "/ais_pos/img3.jpg",
      "/ais_pos/img4.jpg",
      "/ais_pos/img5.jpg",
      "/ais_pos/img6.jpg",
      "/ais_pos/img7.jpg",
      "/ais_pos/img8.jpg",
    ],
    status: "available",
    features: [
      "QR Code / Barcode ဖတ်ပြီး ကုန်ပစ္စည်း ရှာဖွေခြင်း",
      "ကုန်ပစ္စည်း အရေအတွက် ထည့်/လျှော့ခြင်း",
      "အခွန်နှင့် လျော့စျေး ထည့်သွင်းခြင်း",
      "ဖောက်သည်များ အကြွေးဖြင့် ဝယ်ယူခြင်း",
      "နေ့စဉ် အရောင်းပမာဏ တွက်ချက်ခြင်း",
      "Bluetooth ESC/POS ပရင့်တာ ချိတ်ဆက်ခြင်း",
      "Database Backup / Restore ပါဝင်ခြင်း",
      "အမြတ်စာရင်ကို အလွယ်တစ်ကူ စီမံနိုင်ခြင်း",
    ],
    downloadUrl: "https://expo.dev/artifacts/eas/PrwIGFSAOchoLLgHw44yjhkWdsxMfQX55hhTM3Rm91s.apk",
    apkPureUrl: "https://apkpure.com/p/com.anonymous.clothespos",
    posterImage: "/ais_pos/poster_img.png",
    howToUse: [
      "App ကို Install လုပ်ပြီး ဆိုင်ရှင် အမည်/ဖုန်း/လိပ်စာ ထည့်ပြီး Register လုပ်ပါ",
      "Home Screen မှ ကုန်ပစ္စည်း ထည့်သွင်းပါ",
      "Sell Screen တွင် QR Code ဖတ်၍ ရောင်းချပါ",
      "History မှ အရောင်းမှတ်တမ်း ကြည့်ရှုပါ",
    ],
    requirements: "Android ဖုန်းများတွင် အသုံးပြုနိုင်ပါသည်။",
    releaseNotes: "ဘားကုဒ်ဖတ်စက် ပံ့ပိုးမှုအသစ် ထည့်သွင်းထားသည်။",
    faq: [
      {
        q: "AIS POS ကို ဘယ်လို စတင် အသုံးပြုရမလဲ?",
        a: "App ကို Install လုပ်ပြီးနောက် ဆိုင်ရှင် အမည်/ဖုန်း/လိပ်စာ ထည့်ပြီး Register လုပ်ပါ။ ထို့နောက် Home Screen မှ စတင် အသုံးပြုနိုင်ပါပြီ။",
      },
      {
        q: "Internet မလိုဘဲ သုံးလို့ ရလား?",
        a: "ဟုတ်ပါတယ်။ AIS POS သည် အပြည့်အဝ Offline တွင် အလုပ်လုပ်ပါတယ်။ Internet မလိုဘဲ အရောင်း၊ ကုန်စည်၊ စာရင်းဇယား အားလုံးကို သုံးနိုင်ပါတယ်။",
      },
      {
        q: "ဘယ်ဖုန်းတွေမှာ သုံးလို့ ရလဲ?",
        a: "Android ဖုန်းများတွင် အသုံးပြုနိုင်ပါတယ်။ iOS အတွက် လောလောဆယ် မရရှိသေးပါ။",
      },
      {
        q: "ကုန်ပစ္စည်း ဘယ်လို ထည့်ရမလဲ?",
        a: "Home Screen → ကုန်ပစ္စည်း ထည့်ရန် (Products) ကို နှိပ်ပါ။ '+' ခလုတ်ကို နှိပ်ပြီး ကုန်ပစ္စည်း အမည်၊ ဈေးနှုန်း၊ အရွယ်အစား၊ ကျန်ငွေ ထည့်ပါ။",
      },
      {
        q: "ဖောက်သည် အကြွေးဖြင့် ဘယ်လို ဝယ်ရမလဲ?",
        a: "Sell Screen တွင် ကုန်ပစ္စည်းများ ထည့်ပြီး Credit Sale ကို ရွေးပါ။ ဖောက်သည် အမည် ရွေးပြီး Confirm လုပ်ပါ။",
      },
      {
        q: "Bluetooth ပရင့်တာ ဘယ်လို ချိတ်ရမလဲ?",
        a: "Home → ပရင့်တာ (Printer) ကို သွားပြီး Bluetooth ခွင့်ပြုချက် ပေးပါ။ ရှာဖွေပြီး သင့်ပရင့်တာကို ရွေးပါ။",
      },
      {
        q: "Data ဘယ်လို Backup ယူရမလဲ?",
        a: "Settings → ဖိုင် သိမ်းရန် (Export) ကို နှိပ်ပြီး .db ဖိုင်ကို သင့်ဖုန်းထဲ သိမ်းပါ။",
      },
    ],
    businessTypes: [
      "အဝတ်အထည်ဆိုင်",
      "ဖိနပ်ဆိုင်",
      "အိတ်ဆိုင်",
      "စာအုပ်ဆိုင်",
      "ဖုန်းဆိုင်",
      "ဆေးဝါးဆိုင်",
      "ကုန်စုံဆိုင်",
      "ဆန်ဆိုင်",
      "Mini Market",
      "Convenience Store",
      "လျှပ်စစ်ပစ္စည်းဆိုင်",
      "အိမ်သုံးပစ္စည်းဆိုင်",
      "အသေးစားစီးပွားရေးလုပ်ငန်းအမျိုးမျိုး"
    ],
  },
  {
    id: "myanmar-pos",
    name: "Online shop POS",
    icon: ShoppingCart,
    category: "ရောင်းဝယ်ရေး",
    categoryColor: "bg-blue-50 text-blue-700",
    accent: "from-blue-600 to-blue-500",
    version: "2.4.1",
    downloads: "၁၂.၅K",
    rating: 4.8,
    size: "၂၄ MB",
    description:
      "Online shop POS သည် online အရောင်းဆိုင်များအတွက် အခမဲ့ POS စနစ်ဖြစ်သည်။ အရောင်း၊ ကုန်လက်ကျန်၊ စာရင်းများကို လွယ်ကူစွာ စီမံခန့်ခွဲနိုင်သည်။",
    screenshots: [koneSoneImg],
    status: "disabled",
    features: [
      "မြန်မာဘာသာဖြင့် အသုံးပြုနိုင်ခြင်း",
      "ဘားကုဒ်ဖတ်စက် ပံ့ပိုးမှု",
      "နေ့စဉ်အရောင်း အစီရင်ခံစာ",
      "အသုံးပြုသူအများအပြား ပံ့ပိုးမှု",
      "ပြေစာထုတ်နိုင်ခြင်း",
    ],
    howToUse: [
      "ဆော့ဖ်ဝဲလ်ကို ထည့်သွင်းပါ",
      "ဆိုင်အချက်အလက် ထည့်သွင်းပါ",
      "ကုန်ပစ္စည်းများ ထည့်သွင်းပါ",
      "အရောင်းစတင်ပါ",
    ],
    requirements: "Windows 10+၊ RAM 4GB",
    releaseNotes:
      "ကျပ်ငွေဖော်ပြမှုပိုမိုကောင်းမွန်လာပြီး ပြေစာပုံနှိပ်မှု အရည်အသွေးကို မြှင့်တင်ထားသည်။",
    faq: [
      {
        q: "အခမဲ့ အသုံးပြုနိုင်ပါသလား?",
        a: "ဟုတ်ပါတယ်။ လုံးဝအခမဲ့ အသုံးပြုနိုင်ပါတယ်။",
      },
      {
        q: "အင်တာနက်မရှိဘဲ အသုံးပြုနိုင်ပါသလား?",
        a: "ဟုတ်ပါတယ်။ Offline ဖြင့် အသုံးပြုနိုင်ပါတယ်။",
      },
      {
        q: "ဒေတာများကို Export လုပ်နိုင်ပါသလား?",
        a: "Excel၊ PDF နှင့် CSV ဖိုင်များအဖြစ် ထုတ်ယူနိုင်ပါတယ်။",
      },
    ],
  },
  {
    id: "restaurant-pos",
    name: "တောင်သူလက်စွဲ",
    icon: Utensils,
    category: "စိုက်ပျိုးရေး",
    categoryColor: "bg-rose-50 text-rose-700",
    accent: "from-rose-600 to-rose-500",
    version: "3.1.0",
    downloads: "၁၅.၇K",
    rating: 4.9,
    size: "၃၂ MB",
    description:
      "စားသောက်ဆိုင်များအတွက် အော်ဒါ၊ စားပွဲနှင့် ငွေပေးချေမှုများကို စီမံနိုင်သော POS စနစ်။",
    screenshots: [taungthulatsweImg],
    status: "disabled",
    features: [
      "စားပွဲစီမံခန့်ခွဲမှု",
      "ဘီလ်ခွဲပေးချေနိုင်ခြင်း",
      "မီးဖိုချောင် အော်ဒါပြသစနစ်",
      "မီနူး စိတ်ကြိုက်ပြင်ဆင်နိုင်ခြင်း",
      "ကြိုတင်မှာယူမှု စီမံခန့်ခွဲခြင်း",
    ],
    howToUse: [
      "စားပွဲများ သတ်မှတ်ပါ",
      "မီနူးများ ထည့်သွင်းပါ",
      "အော်ဒါများ လက်ခံပါ",
      "ငွေပေးချေမှု ပြုလုပ်ပါ",
    ],
    requirements: "Windows 10+၊ RAM 4GB",
    releaseNotes:
      "မီးဖိုချောင် အော်ဒါပြသစနစ် (Kitchen Display System) အသစ် ထည့်သွင်းထားသည်။",
    faq: [
      {
        q: "စားပွဲ ဘယ်နှစ်လုံးအထိ အသုံးပြုနိုင်ပါသလဲ?",
        a: "ဆိုင်တစ်ခုလျှင် စားပွဲ ၁၀၀ အထိ ပံ့ပိုးထားပါတယ်။",
      },
      {
        q: "ဖုန်းနှင့် Tablet တွင် အသုံးပြုနိုင်ပါသလား?",
        a: "ဟုတ်ပါတယ်။ ဖုန်းနှင့် Tablet နှစ်မျိုးလုံးတွင် အသုံးပြုနိုင်ပါတယ်။",
      },
    ],
  },
];
