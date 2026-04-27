// src/data/categories.ts
import { categories as inventoryCategories } from "./inventory";

export type Category = {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  href: string;
};

export const categories: Category[] = inventoryCategories.map(cat => ({
  id: cat.id,
  name: cat.name,
  description: cat.description,
  icon: cat.icon,
  image: cat.image,
  href: cat.href
}));
