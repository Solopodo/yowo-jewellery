export const site = {
  brand: "YOWO Jewellery",
  instagramHandle: "yowoglow",
  instagramUrl: "https://instagram.com/yowoglow",
  domain: "yowojewellery.com",
  tagline: "Designer fashion jewellery. Elevated.",
  description:
    "Earrings, statement chains & pendants, and hand jewellery — premium finish, made to photograph beautifully and wear effortlessly.",
  categories: ["Earrings", "Chains & Pendants", "Hand Jewellery"] as const
};

export type Category = (typeof site.categories)[number];