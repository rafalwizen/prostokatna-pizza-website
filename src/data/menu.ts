// Single source of truth for the menu content. Rendered by Menu.astro and
// converted to schema.org Menu JSON-LD by buildMenuSchema() in business.ts.
// Transcribed from the original printed-menu photos (kept in git history).
// NOTE TO THE OWNER: every name, ingredient and price below must be proofread
// against the printed card before going live.

export interface LocalizedText {
  pl: string;
  en: string;
}

export interface MenuItem {
  // Name exactly as printed on the card; identical in both locales (mostly
  // Italian proper names). Rendered uppercase via CSS.
  name: string;
  // Optional English gloss, only for descriptive Polish names that would be
  // opaque to EN visitors.
  nameEn?: string;
  // Ingredient list / printed subtext, translated per locale.
  description: LocalizedText;
  // Leaf marker on the printed card.
  vegetarian?: boolean;
  // Number of chili markers on the printed card.
  spicy?: 1 | 2 | 3;
  // Shrimp marker (Krewetka).
  seafood?: boolean;
  // Pizza prices: small 24x18 cm / large 40x22 cm.
  priceSmall?: number;
  priceLarge?: number;
  // Flat price (drinks).
  price?: number;
  // Renders "GRATIS" instead of a price.
  free?: boolean;
}

export interface MenuSectionData {
  id: "pizza" | "drinks";
  title: LocalizedText;
  items: MenuItem[];
}

export const pizzaSizes = { small: "24×18 cm", large: "40×22 cm" } as const;

// Printed-card footer notes (pizza card bottom-right).
export const menuFootnotes: LocalizedText[] = [
  {
    pl: "+sos 3 PLN / jeden gratis",
    en: "extra sauce 3 PLN / one free",
  },
  {
    pl: "*opakowanie na wynos 2 PLN",
    en: "*takeaway box 2 PLN",
  },
];

export const menuSections: MenuSectionData[] = [
  {
    id: "pizza",
    title: { pl: "Pizza", en: "Pizza" },
    items: [
      {
        name: "Margherita",
        description: {
          pl: "sos pomidorowy, mozzarella",
          en: "tomato sauce, mozzarella",
        },
        vegetarian: true,
        priceSmall: 16,
        priceLarge: 31,
      },
      {
        name: "Capricciosa",
        description: {
          pl: "sos pomidorowy, mozzarella, szynka cotto, pieczarki",
          en: "tomato sauce, mozzarella, cooked ham, mushrooms",
        },
        priceSmall: 19,
        priceLarge: 37,
      },
      {
        name: "Salami Klasyczne",
        description: {
          pl: "sos pomidorowy, mozzarella, salami",
          en: "tomato sauce, mozzarella, salami",
        },
        priceSmall: 20,
        priceLarge: 39,
      },
      {
        name: "Salami Ostre",
        description: {
          pl: "sos pomidorowy, mozzarella, salami spinata",
          en: "tomato sauce, mozzarella, spicy salami (spinata)",
        },
        spicy: 1,
        priceSmall: 20,
        priceLarge: 39,
      },
      {
        name: "Ananas",
        nameEn: "Pineapple",
        description: {
          pl: "sos pomidorowy, mozzarella, szynka cotto, ananas",
          en: "tomato sauce, mozzarella, cooked ham, pineapple",
        },
        priceSmall: 20,
        priceLarge: 39,
      },
      {
        name: "Nduja",
        description: {
          pl: "sos pomidorowy, mozzarella, ricotta, włoska ostra kiełbaska nduja",
          en: "tomato sauce, mozzarella, ricotta, spicy Italian 'nduja sausage",
        },
        spicy: 2,
        priceSmall: 22,
        priceLarge: 43,
      },
      {
        name: "Parma",
        description: {
          pl: "sos pomidorowy, mozzarella, parmezan, szynka parmeńska, rukola, pomidorki koktajlowe",
          en: "tomato sauce, mozzarella, parmesan, Parma ham, rocket, cherry tomatoes",
        },
        priceSmall: 23,
        priceLarge: 45,
      },
      {
        name: "Góralska",
        nameEn: "Highlander",
        description: {
          pl: "sos pomidorowy, mozzarella, ser góralski, boczek, żurawina",
          en: "tomato sauce, mozzarella, oscypek-style highland cheese, bacon, cranberry",
        },
        priceSmall: 24,
        priceLarge: 46,
      },
      {
        name: "Diavola",
        description: {
          pl: "sos pomidorowy, mozzarella, salami spinata, włoska ostra kiełbaska nduja, papryczki jalapeño",
          en: "tomato sauce, mozzarella, spicy salami (spinata), spicy Italian 'nduja sausage, jalapeño peppers",
        },
        spicy: 3,
        priceSmall: 25,
        priceLarge: 48,
      },
      {
        name: "Wiejska",
        nameEn: "Countryside",
        description: {
          pl: "sos pomidorowy, mozzarella, boczek, kabanos, cebula, pieczarki",
          en: "tomato sauce, mozzarella, bacon, kabanos sausage, onion, mushrooms",
        },
        priceSmall: 25,
        priceLarge: 48,
      },
      {
        name: "Sery i Miód",
        nameEn: "Cheese & Honey",
        description: {
          pl: "sos biały, mozzarella, gorgonzola, ser pleśniowy, orzechy włoskie, gruszka, miód",
          en: "white sauce, mozzarella, gorgonzola, blue cheese, walnuts, pear, honey",
        },
        vegetarian: true,
        priceSmall: 27,
        priceLarge: 49,
      },
      {
        name: "Pistacjowa",
        nameEn: "Pistachio",
        description: {
          pl: "sos biały, mozzarella, sos pistacjowy, pistacje, mortadela, ricotta",
          en: "white sauce, mozzarella, pistachio sauce, pistachios, mortadella, ricotta",
        },
        priceSmall: 27,
        priceLarge: 49,
      },
      {
        name: "Krewetka",
        nameEn: "Shrimp",
        description: {
          pl: "sos biały, mozzarella, krewetki, sos cytrynowo-pietruszkowy",
          en: "white sauce, mozzarella, shrimp, lemon-parsley sauce",
        },
        seafood: true,
        priceSmall: 27,
        priceLarge: 49,
      },
    ],
  },
  {
    id: "drinks",
    title: { pl: "Napoje", en: "Drinks" },
    items: [
      {
        name: "Woda",
        nameEn: "Water",
        description: { pl: "", en: "" },
        free: true,
      },
      {
        name: "Napój Turtamek",
        description: {
          pl: "turecki nektar owocowy, różne smaki",
          en: "Turkish fruit nectar, various flavors",
        },
        price: 5,
      },
      {
        name: "Lemoniada Tomarchio",
        description: {
          pl: "włoskie napoje gazowane bezalkoholowe, różne smaki",
          en: "Italian soft drinks, various flavors",
        },
        price: 8,
      },
      {
        name: "On Lemon",
        description: {
          pl: "różne smaki",
          en: "various flavors",
        },
        price: 12,
      },
      {
        // One vision read gave "PIWRO" — verify against the printed card.
        name: "Piwo Zero %",
        nameEn: "Zero % Beer",
        description: {
          pl: "różne smaki",
          en: "various flavors",
        },
        price: 15,
      },
      {
        name: "Piwo Kraftowe",
        nameEn: "Craft Beer",
        description: {
          pl: "różne smaki",
          en: "various flavors",
        },
        price: 15,
      },
      {
        name: "Lemoniada szklanka (430 ml)",
        nameEn: "Lemonade glass (430 ml)",
        description: { pl: "", en: "" },
        price: 16,
      },
      {
        name: "Lemoniada dzbanek (1 l)",
        nameEn: "Lemonade jug (1 l)",
        description: {
          pl: "zapytaj obsługę o smaki",
          en: "ask our staff about flavors",
        },
        price: 29,
      },
    ],
  },
];
