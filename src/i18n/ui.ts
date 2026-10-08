import type { Lang } from "./config";

// UI strings. `satisfies Record<Lang, Record<string, string>>` makes TypeScript
// fail the build if PL and EN drift out of sync. Strings are ported verbatim
// from the source contexts/language-context.tsx (dead keys dropped, seoH1 added).
export const translations = {
  pl: {
    seoH1: "ProstoKątna — pizzeria w Tarnowskich Górach, pizza z dostawą i na wynos",
    navMenu: "Menu",
    navContact: "Kontakt",
    heroSubtitle: "Pizza z sercem i wspomnieniami",
    heroSubtitle2: "Nieokrągła. Nieprzypadkowa",
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
    mapAlt: "Mapa z lokalizacją restauracji przy ul. Zamkowej 6 w Tarnowskich Górach",
    orderTitle: "Zamów online",
    menuTitle: "Menu",
    menuBarNote: "Zamówienia składamy przy barze",
    menuLegend:
      "🌶️ ostre (×1–3) · 🌿 wegetariańska · 🦐 owoce morza · ceny: mała 24×18 cm / duża 40×22 cm",
    vegetarianLabel: "wegetariańska",
    spicyLabel: "ostre",
    seafoodLabel: "owoce morza",
    priceSmallLabel: "mała",
    priceLargeLabel: "duża",
    freeLabel: "GRATIS",
    introTitle: "Prostokątna pizza w Tarnowskich Górach",
    introText:
      "ProstoKątna to pizzeria przy ul. Zamkowej 6 w Tarnowskich Górach. Serwujemy prostokątną pizzę w dwóch rozmiarach — małą 24×18 cm i dużą 40×22 cm — na cienkim cieście, z włoskimi składnikami: nduią, szynką parmeńską, pistacjami i gorgonzolą. Zjesz u nas na miejscu (zamówienia składamy przy barze), zabierzesz na wynos albo zamówisz z dostawą w Tarnowskich Górach przez Pyszne.pl, Glovo i Uber Eats. Nieokrągła. Nieprzypadkowa.",
    faqTitle: "Częste pytania",
    faq1Q: "Czy dowozicie pizzę w Tarnowskich Górach?",
    faq1A:
      "Tak. Pizzę z ProstoKątnej dowozimy w Tarnowskich Górach przez Pyszne.pl, Glovo i Uber Eats — wybierz aplikację w sekcji „Zamów online”.",
    faq2Q: "Gdzie jesteście i czy można zjeść na miejscu?",
    faq2A:
      "Znajdziesz nas przy ul. Zamkowej 6 w Tarnowskich Górach. Zapraszamy na miejscu — zamówienia składamy przy barze, a pizzę wypiekamy po zamówieniu.",
    faq3Q: "W jakich godzinach działa pizzeria?",
    faq3A:
      "Śr–czw 11:00–21:00, pt 11:00–22:00, sob 12:00–21:00, nie 13:00–21:00. W poniedziałki i wtorki jesteśmy zamknięci.",
    faq4Q: "Jakie rozmiary pizzy serwujecie?",
    faq4A:
      "Nasza pizza jest prostokątna: mała ma 24×18 cm, duża 40×22 cm. Ceny dla obu rozmiarów podajemy przy każdej pizzy w menu.",
    faq5Q: "Czy macie pizze wegetariańskie?",
    faq5A:
      "Tak — na przykład Margherita oraz Sery i Miód (sos biały, gorgonzola, orzechy włoskie, gruszka, miód). W menu oznaczamy je symbolem liścia.",
    footerTagline:
      "Pizzeria przy ul. Zamkowej 6 w Tarnowskich Górach. Pizza na miejscu, na wynos i z dostawą.",
    footerCopyright: "ProstoKątna · pizzeria Tarnowskie Góry",
  },
  en: {
    seoH1: "ProstoKątna — pizzeria in Tarnowskie Góry, pizza delivery and takeaway",
    navMenu: "Menu",
    navContact: "Contact",
    heroSubtitle: "Pizza with heart and memories",
    heroSubtitle2: "Not round. Not accidental",
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
    mapAlt: "Map showing the restaurant location at 6 Zamkowa Street in Tarnowskie Góry",
    orderTitle: "Order online",
    menuTitle: "Menu",
    menuBarNote: "Orders are placed at the bar",
    menuLegend:
      "🌶️ spicy (×1–3) · 🌿 vegetarian · 🦐 seafood · prices: small 24×18 cm / large 40×22 cm",
    vegetarianLabel: "vegetarian",
    spicyLabel: "spicy",
    seafoodLabel: "seafood",
    priceSmallLabel: "small",
    priceLargeLabel: "large",
    freeLabel: "FREE",
    introTitle: "Rectangular pizza in Tarnowskie Góry",
    introText:
      "ProstoKątna is a pizzeria at 6 Zamkowa Street in Tarnowskie Góry, Poland. We bake rectangular pizza in two sizes — small 24×18 cm and large 40×22 cm — with Italian toppings: 'nduja, Parma ham, pistachios and gorgonzola. Eat in (orders are placed at the bar), take away, or order pizza delivery in Tarnowskie Góry via Pyszne.pl, Glovo and Uber Eats. Not round. Not accidental.",
    faqTitle: "Frequently asked questions",
    faq1Q: "Do you deliver pizza in Tarnowskie Góry?",
    faq1A:
      "Yes. We deliver in Tarnowskie Góry via Pyszne.pl, Glovo and Uber Eats — pick an app in the “Order online” section.",
    faq2Q: "Where are you located and can I dine in?",
    faq2A:
      "We are at 6 Zamkowa Street in Tarnowskie Góry. You are welcome to dine in — orders are placed at the bar and pizzas are baked to order.",
    faq3Q: "What are your opening hours?",
    faq3A:
      "Wed–Thu 11:00–21:00, Fri 11:00–22:00, Sat 12:00–21:00, Sun 13:00–21:00. Closed Monday and Tuesday.",
    faq4Q: "What pizza sizes do you serve?",
    faq4A:
      "Our pizza is rectangular: small is 24×18 cm, large is 40×22 cm. Prices for both sizes are listed next to every pizza in the menu.",
    faq5Q: "Do you have vegetarian pizzas?",
    faq5A:
      "Yes — for example Margherita and Cheese & Honey (white sauce, gorgonzola, walnuts, pear, honey). They are marked with a leaf symbol in the menu.",
    footerTagline:
      "Pizzeria at 6 Zamkowa Street in Tarnowskie Góry. Dine in, takeaway and delivery.",
    footerCopyright: "ProstoKątna · pizzeria in Tarnowskie Góry",
  },
} satisfies Record<Lang, Record<string, string>>;

export type TranslationKey = keyof (typeof translations)["pl"];

// FAQ key pairs — the single list shared by the Faq section component and the
// FAQPage JSON-LD node in business.ts, so visible content and schema cannot drift.
export const faqKeys = [
  ["faq1Q", "faq1A"],
  ["faq2Q", "faq2A"],
  ["faq3Q", "faq3A"],
  ["faq4Q", "faq4A"],
  ["faq5Q", "faq5A"],
] as const satisfies ReadonlyArray<readonly [TranslationKey, TranslationKey]>;

export function t(lang: Lang, key: TranslationKey): string {
  return translations[lang][key] ?? translations.pl[key] ?? "";
}
