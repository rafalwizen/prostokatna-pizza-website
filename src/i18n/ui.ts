import type { Lang } from "./config";

// UI strings. `satisfies Record<Lang, Record<string, string>>` makes TypeScript
// fail the build if PL and EN drift out of sync. Strings are ported verbatim
// from the source contexts/language-context.tsx (dead keys dropped, seoH1 added).
export const translations = {
  pl: {
    seoH1: "ProstoKątna — pizzeria w Tarnowskich Górach, pizza z dostawą i na wynos",
    navMenu: "Menu",
    navAbout: "O nas",
    navContact: "Kontakt",
    heroSubtitle: "Pizza z sercem i wspomnieniami",
    heroSubtitle2: "Nieokrągła. Nieprzypadkowa",
    aboutTitle: "Nasza Historia",
    aboutText:
      "Od ponad 20 lat serwujemy najlepszą pizzę w Tarnowskich Górach. Nasze ciasto przygotowujemy codziennie rano z najwyższej jakości mąki, a składniki pochodzą od lokalnych dostawców ze Śląska. Każda pizza — na miejscu, na wynos lub z dostawą — powstaje z pasją i miłością do włoskiej kuchni.",
    contactTitle: "Znajdziesz nas tutaj",
    addressTitle: "Adres",
    address: "ul. Zamkowa 6\n42-600 Tarnowskie Góry",
    phoneTitle: "Telefon",
    phone: "722 720 000",
    hoursTitle: "Godziny otwarcia",
    hours:
      "Pon-Wt: Zamknięte\nŚr-Czw: 11:00–21:00\nPt: 11:00–22:00\nSob: 12:00–21:00\nNie: 13:00–21:00",
    mapInstruction: "Kliknij mapę, aby przejść do Google Maps",
    openMapsLabel: "Otwórz w Google Maps",
    orderTitle: "Zamów online",
    menuImage1Alt: "Menu pizzerii ProstoKątna w Tarnowskich Górach — strona 1",
    menuImage2Alt: "Menu pizzerii ProstoKątna w Tarnowskich Górach — strona 2",
    openImage: "Powiększ zdjęcie menu",
    closeImage: "Zamknij",
  },
  en: {
    seoH1: "ProstoKątna — pizzeria in Tarnowskie Góry, pizza delivery and takeaway",
    navMenu: "Menu",
    navAbout: "About Us",
    navContact: "Contact",
    heroSubtitle: "Pizza with heart and memories",
    heroSubtitle2: "Not round. Not accidental",
    aboutTitle: "Our Story",
    aboutText:
      "For over 20 years we've been serving the best pizza in Tarnowskie Góry. We prepare our dough fresh every morning using top-quality flour, and our ingredients come from local Silesian suppliers. Every pizza — dine-in, takeaway or delivery — is made with passion and love for Italian cuisine.",
    contactTitle: "You'll find us here",
    addressTitle: "Address",
    address: "ul. Zamkowa 6\n42-600 Tarnowskie Góry",
    phoneTitle: "Phone",
    phone: "722 720 000",
    hoursTitle: "Opening Hours",
    hours:
      "Mon-Tue: Closed\nWed-Thu: 11:00–21:00\nFri: 11:00–22:00\nSat: 12:00–21:00\nSun: 13:00–21:00",
    mapInstruction: "Click the map to go to Google Maps",
    openMapsLabel: "Open in Google Maps",
    orderTitle: "Order online",
    menuImage1Alt: "Menu of ProstoKątna pizzeria in Tarnowskie Góry — page 1",
    menuImage2Alt: "Menu of ProstoKątna pizzeria in Tarnowskie Góry — page 2",
    openImage: "Open menu image",
    closeImage: "Close",
  },
} satisfies Record<Lang, Record<string, string>>;

export type TranslationKey = keyof (typeof translations)["pl"];

export function t(lang: Lang, key: TranslationKey): string {
  return translations[lang][key] ?? translations.pl[key] ?? "";
}
