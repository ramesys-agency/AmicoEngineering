// src/data/inventory.ts

export interface Product {
  id: string;
  name: string;
  description?: string;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  href: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: "conveyor-systems",
    name: "Conveyor Systems",
    description: "Robust belt and chain conveyor systems designed for efficient bulk material handling and transport.",
    icon: "conveyor_belt",
    image: "/cat_conveyors.png",
    href: "/products/conveyor-systems",
    products: [
      { id: "belt-conveyor", name: "Belt Conveyor" },
      { id: "steep-angle-belt-conveyor", name: "Steep Angle Belt Conveyor" },
      { id: "screw-conveyor", name: "Screw Conveyor" },
      { id: "shuttle-conveyor", name: "Shuttle Conveyor" },
      { id: "rotary-conveyor", name: "Rotary Conveyor (Centre Pivot)" },
      { id: "circular-disc-conveyor", name: "Circular Disc Conveyor" },
      { id: "slat-conveyor-ss", name: "Slat Conveyor (SS)" },
      { id: "truck-loading-conveyor", name: "Truck Loading Conveyor" },
      { id: "chain-conveyor-vertical", name: "Chain Conveyor (Vertical Crate)" },
    ],
  },
  {
    id: "feeding-systems",
    name: "Feeding Systems",
    description: "Precision feeding solutions for controlled material flow and accurate weighing in industrial processes.",
    icon: "precision_manufacturing",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=800",
    href: "/products/feeding-systems",
    products: [
      { id: "vibro-feeder", name: "Vibro Feeder" },
      { id: "grizzly-feeder", name: "Grizzly Feeder" },
      { id: "weigh-feeder", name: "Weigh Feeder" },
      { id: "reciprocating-plate-feeder", name: "Reciprocating Plate Feeder" },
    ],
  },
  {
    id: "elevation-lifting",
    name: "Elevation & Lifting",
    description: "High-performance vertical transport solutions including bucket elevators and heavy-duty skip hoists.",
    icon: "vertical_align_top",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    href: "/products/elevation-lifting",
    products: [
      { id: "bucket-elevator", name: "Bucket Elevator" },
      { id: "skip-hoist", name: "Skip Hoist" },
    ],
  },
  {
    id: "screening-separation",
    name: "Screening & Separation",
    description: "Advanced vibrating screens and separation equipment for efficient material classification and sizing.",
    icon: "filter_alt",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800",
    href: "/products/screening-separation",
    products: [
      { id: "vibrating-screen", name: "Vibrating Screen" },
    ],
  },
  {
    id: "hydraulic-systems",
    name: "Hydraulic Systems",
    description: "Custom-engineered hydraulic cylinders and jacks built for heavy industrial applications and extreme loads.",
    icon: "water_drop",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    href: "/products/hydraulic-systems",
    products: [
      { id: "hydraulic-cylinders", name: "Hydraulic Cylinders" },
      { id: "hydraulic-jacks", name: "Hydraulic Jacks" },
    ],
  },
  {
    id: "industrial-components",
    name: "Industrial Components",
    description: "Essential heavy-duty components including idlers, drum pulleys, and specialized valves for bulk handling.",
    icon: "settings",
    image: "https://images.unsplash.com/photo-1530124560677-bdaea02c9a59?auto=format&fit=crop&q=80&w=800",
    href: "/products/industrial-components",
    products: [
      { id: "idlers", name: "Idlers" },
      { id: "drum-pulleys", name: "Drum Pulleys" },
      { id: "plummer-blocks", name: "Plummer Blocks" },
      { id: "rotary-air-lock-valve", name: "Rotary Air Lock Valve" },
      { id: "ss-bellows", name: "SS Bellows" },
    ],
  },
  {
    id: "fabrication-structural",
    name: "Fabrication & Structural Work",
    description: "Comprehensive fabrication services for coal handling structures, transfer houses, and custom industrial bins.",
    icon: "architecture",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    href: "/products/fabrication-structural",
    products: [
      { id: "coal-handling-structures", name: "Coal Handling Structures" },
      { id: "transfer-house", name: "Transfer House" },
      { id: "screen-house", name: "Screen House" },
      { id: "bins-custom-fabrication", name: "Bins & Custom Fabrication" },
    ],
  },
  {
    id: "specialized-equipment",
    name: "Specialized Equipment",
    description: "Advanced engineering solutions including motorised tripper trolleys for automated material distribution.",
    icon: "rocket_launch",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    href: "/products/specialized-equipment",
    products: [
      { id: "motorised-tripper-trolley", name: "Motorised Tripper Trolley" },
    ],
  },
];
