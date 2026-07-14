// Single source of truth for business NAP (Name/Address/Phone) and SEO data.
// Ported from the source lib/business.ts. Imported by the Layout (head/JSON-LD),
// the Contact and Order sections, and the sitemap (via SITE_URL).
import { SITE_URL } from "@/i18n/config";
import type { Lang } from "@/i18n/config";

export const business = {
  name: "ProstoKątna",
  alternateName: "Slice Pizza TG",
  description:
    "Pizzeria ProstoKątna w Tarnowskich Górach — autentyczne włoskie smaki, pizza robiona z sercem. ul. Zamkowa 6. Zamów z dostawą lub na wynos: 722 720 000.",
  telephone: "+48722720000",
  telephoneDisplay: "722 720 000",
  image: `${SITE_URL}/logo-opengraph-v2.png`,
  logo: `${SITE_URL}/logo-round-320.webp`,
  priceRange: "$$",
  currenciesAccepted: "PLN",
  cuisines: ["Pizza", "Włoska"],
  address: {
    streetAddress: "ul. Zamkowa 6",
    addressLocality: "Tarnowskie Góry",
    postalCode: "42-600",
    addressCountry: "PL",
  },
  geo: { latitude: 50.4435404, longitude: 18.8549006 },
  // Short place URL — used for schema hasMap / sameAs (matches source lib/business.ts).
  mapsUrl:
    "https://www.google.com/maps/place/Slice+Pizza+TG/@50.4435404,18.8549006,17z",
} as const;

// Long "open in Maps" URL with full place data — used by the contact map overlay button.
export const mapsOpenUrl =
  "https://www.google.com/maps/place/Slice+Pizza+TG/@50.4435404,18.8549006,17z/data=!4m15!1m8!3m7!1s0x47112a2ec3746333:0x783b540fa714c3d4!2sZamkowa+6,+42-600+Tarnowskie+G%C3%B3ry!3b1!8m2!3d50.4435404!4d18.8549006!16s%2Fg%2F11c5ctkjl9!3m5!1s0x47112be1977340a9:0x84266294a4355457!8m2!3d50.4435404!4d18.8549006!16s%2Fg%2F11mdvwnw_c?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D";

// Keyless Google Maps embed (no API key) — used by the contact iframe.
export const mapsEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2555.123!2d18.8549006!3d50.4435404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47112be1977340a9%3A0x84266294a4355457!2sSlice%20Pizza%20TG!5e0!3m2!1spl!2spl!4v1640000000000!5m2!1spl!2spl";

export const delivery = [
  {
    name: "Pyszne.pl",
    icon: "/pyszne.png",
    url: "https://www.pyszne.pl/menu/slice-pizza-tarnowskie-gory?serviceType=delivery&utm_source=google&utm_medium=organic&utm_campaign=foodorder",
  },
  {
    name: "Glovo",
    icon: "/glovo.png",
    url: "https://glovoapp.com/pl/pl/tarnowskie-gory/slice-pizza-tgr/?utm_source=google&utm_medium=organic&utm_campaign=google_reserve_place_order_action",
  },
  {
    name: "Uber Eats",
    icon: "/ubereats.png",
    url: "https://www.ubereats.com/pl/store/slice-pizza-tg/Uhnhce9OXDSdn27GjX4_dQ?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas",
  },
];

export const sameAs = [business.mapsUrl, ...delivery.map((d) => d.url)];

// schema.org @graph: Restaurant (+FoodEstablishment), WebSite, WebPage.
// Only `inLanguage` flips per language. aggregateRating is intentionally
// omitted until the owner supplies a rating + review count.
export function buildJsonLd(lang: Lang) {
  const inLanguage = lang === "pl" ? "pl-PL" : "en-US";
  const pageSlug = lang === "pl" ? "" : "en";
  const pageUrl = lang === "pl" ? SITE_URL : `${SITE_URL}/en`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["FoodEstablishment", "Restaurant"],
        "@id": `${SITE_URL}/#restaurant`,
        name: business.name,
        alternateName: business.alternateName,
        description: business.description,
        url: SITE_URL,
        telephone: business.telephone,
        image: business.image,
        logo: business.logo,
        priceRange: business.priceRange,
        currenciesAccepted: business.currenciesAccepted,
        servesCuisine: business.cuisines,
        address: {
          "@type": "PostalAddress",
          streetAddress: business.address.streetAddress,
          addressLocality: business.address.addressLocality,
          postalCode: business.address.postalCode,
          addressCountry: business.address.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: business.geo.latitude,
          longitude: business.geo.longitude,
        },
        hasMap: business.mapsUrl,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Wednesday", "Thursday"],
            opens: "11:00",
            closes: "21:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Friday"],
            opens: "11:00",
            closes: "22:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "12:00",
            closes: "21:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Sunday"],
            opens: "13:00",
            closes: "21:00",
          },
        ],
        menu: `${SITE_URL}/#menu`,
        acceptsReservations: false,
        sameAs,
        potentialAction: delivery.map((d) => ({
          "@type": "OrderAction",
          target: d.url,
          name: `Order on ${d.name}`,
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: business.name,
        inLanguage,
        publisher: { "@id": `${SITE_URL}/#restaurant` },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/${pageSlug}#webpage`,
        url: pageUrl,
        inLanguage,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#restaurant` },
      },
    ],
  };
}
