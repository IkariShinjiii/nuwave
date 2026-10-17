// Menu content. Drink names come from the shop's public mentions; prices are still
// unconfirmed (price: null renders as "₱ —"). Replace with the owner's real menu.

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number | null; // PHP
  soldOut?: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

// Date the drink names were last checked (ISO). Shown on the menu so guests know how fresh it is.
export const menuUpdated = "2026-10-18";

export const menu: MenuCategory[] = [
  {
    id: "signature",
    name: "Signature drinks",
    items: [
      { id: "black-sesame-latte", name: "Black Sesame Latte", price: null },
      { id: "black-sesame-oat-latte", name: "Black Sesame Oat Latte", price: null },
      { id: "hot-spanish-oat-latte", name: "Hot Spanish Oat Latte", price: null },
      { id: "sweet-kanella", name: "Sweet Kanella", price: null },
      { id: "sunburn", name: "Sunburn", price: null },
      { id: "esprava", name: "Esprava", price: null },
      { id: "cinnamon-coffee", name: "Cinnamon Coffee", price: null },
    ],
  },
];

export const shop = {
  name: "Ñuwave Specialty Coffee",
  location: "Jaro, Iloilo City",
  address: "Fajardo cor. Libertad St., Jaro, Iloilo City",
  hours: "11am – 1am, daily",
  instagram: "nuwavecoffeeph",
};
