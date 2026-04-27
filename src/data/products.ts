// src/data/products.ts
import { categories as inventoryCategories } from "./inventory";

export type ProductSpec = {
  icon: string;
  label: string;
};

export type Product = {
  id: string;
  categoryId: string;
  series: string;
  name: string;
  description: string;
  image: string;
  tag?: string;
  tagColor?: string;
  sku: string;
  specs: ProductSpec[];
};

// Flatten the inventory into a products list
export const products: Product[] = inventoryCategories.flatMap(cat => 
  cat.products.map(p => ({
    id: p.id,
    categoryId: cat.id,
    series: "Industrial Grade",
    name: p.name,
    description: `High-quality ${p.name.toLowerCase()} designed for heavy-duty industrial applications in bulk material handling.`,
    image: cat.image, // Using category image as fallback
    sku: `${cat.id.substring(0, 2).toUpperCase()}-${p.id.substring(0, 3).toUpperCase()}`,
    specs: [
      { icon: "settings", label: "Customizable" },
      { icon: "verified", label: "ISO Certified" }
    ]
  }))
);
