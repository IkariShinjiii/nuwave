// PLACEHOLDER CONTENT. Menu, prices and photos must be supplied by the owner
// (see project plan: do not copy from Grab or third-party listings).
// Only drinks seen in public Instagram posts are listed; price: null renders as "Price to be confirmed".

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number | null; // PHP
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "signature",
    name: "Signature drinks",
    items: [
      { id: "black-sesame-latte", name: "Black Sesame Latte", price: null },
      { id: "sweet-kanella", name: "Sweet Kanella", price: null },
    ],
  },
];

export const shop = {
  name: "Ñuwave Specialty Coffee",
  location: "Jaro, Iloilo City",
  instagram: "nuwavecoffeeph",
};
