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
    description:
      "High-performance belt and chain conveyor systems engineered for maximum reliability and seamless material transport.",
    icon: "conveyor_belt",
    image:
      "https://res.cloudinary.com/daafchadi/image/upload/v1777290712/Conveyor_Systems_dxoahz.jpg",
    href: "/products/conveyor-systems",
    products: [
      { id: "belt-conveyor", name: "Belt Conveyor" },
      {
        id: "steep-angle-belt-conveyor",
        name: "Steep Angle Belt Conveyor",
        image:
          "https://res.cloudinary.com/daafchadi/image/upload/v1777288897/Steep_Angle_Belt_Conveyor_qsfock.png",
      },
      {
        id: "high-angle-pocket-belt-conveyor",
        name: "High Angle Pocket Belt Conveyor",
        image:
          "https://res.cloudinary.com/daafchadi/image/upload/v1777288759/High_Angle_Pocket_Belt_Conveyor_l4nrtr.png",
      },
      { id: "screw-conveyor", name: "Screw Conveyor" },
      { id: "shuttle-conveyor", name: "Shuttle Conveyor" },
      { id: "rotary-conveyor", name: "Rotary Conveyor (Centre Pivot)" },
      {
        id: "circular-disc-conveyor",
        name: "Circular Disc Conveyor",
        image:
          "https://res.cloudinary.com/daafchadi/image/upload/v1777288900/Circular_Disc_Conveyor_tjpdtt.png",
      },
      { id: "slat-conveyor-ss", name: "Slat Conveyor (SS)" },
      {
        id: "truck-loading-conveyor",
        name: "Truck Loading Conveyor",
        image:
          "https://res.cloudinary.com/daafchadi/image/upload/v1777288895/Truck_Loading_Conveyor_h5fxzf.png",
      },
      {
        id: "chain-conveyor-vertical",
        name: "Chain Conveyor (Vertical Crate)",
      },
    ],
  },
  {
    id: "feeding-systems",
    name: "Feeding Systems",
    description:
      "Precision feeding solutions for controlled material flow and accurate weighing in industrial processes.",
    icon: "precision_manufacturing",
    image:
      "https://res.cloudinary.com/daafchadi/image/upload/v1777290710/Feeding_Systems_iflliu.jpg",
    href: "/products/feeding-systems",
    products: [
      {
        id: "vibro-feeder",
        name: "Mechanical Vibrating Feeder",
        image:
          "https://res.cloudinary.com/daafchadi/image/upload/v1777288769/Mechanical_Vibrating_Feeder_onnnda.png",
      },
      { id: "grizzly-feeder", name: "Grizzly Feeder" },
      { id: "weigh-feeder", name: "Weigh Feeder" },
      {
        id: "reciprocating-plate-feeder",
        name: "Reciprocating Plate Feeder",
        image:
          "https://res.cloudinary.com/daafchadi/image/upload/v1777288774/Reciprocating_Plate_Feeder_ksgfrn.png",
      },
    ],
  },
  {
    id: "elevation-lifting",
    name: "Elevation & Lifting",
    description:
      "High-performance vertical transport solutions including bucket elevators and heavy-duty skip hoists.",
    icon: "vertical_align_top",
    image:
      "https://res.cloudinary.com/daafchadi/image/upload/v1777290687/Elevation_and_Lifting_lmsssd.jpg",
    href: "/products/elevation-lifting",
    products: [
      { id: "bucket-elevator", name: "Bucket Elevator" },
      { id: "skip-hoist", name: "Skip Hoist" },
    ],
  },
  {
    id: "hydraulic-systems",
    name: "Hydraulic Systems",
    description:
      "Custom-engineered hydraulic cylinders and jacks built for heavy industrial applications and extreme loads.",
    icon: "water_drop",
    image:
      "https://res.cloudinary.com/daafchadi/image/upload/v1777290710/Hydraulic_Systems_nmweiu.jpg",
    href: "/products/hydraulic-systems",
    products: [
      { id: "hydraulic-cylinders", name: "Hydraulic Cylinders" },
      { id: "hydraulic-jacks", name: "Hydraulic Jacks" },
    ],
  },
  {
    id: "industrial-components",
    name: "Industrial Components",
    description:
      "Precision-manufactured components including idlers, drum pulleys, and specialized valves, built for long-term durability.",
    icon: "settings",
    image:
      "https://res.cloudinary.com/daafchadi/image/upload/v1777290707/Industrial_Components_gxrqeu.jpg",
    href: "/products/industrial-components",
    products: [
      { id: "idlers", name: "Idlers" },
      {
        id: "drum-pulleys",
        name: "Conveyor Drum Pulleys",
        image:
          "https://res.cloudinary.com/daafchadi/image/upload/v1777288779/Conveyor_Drum_Pulleys_lesco4.png",
      },
      { id: "plummer-blocks", name: "Plummer Blocks" },
      {
        id: "rotary-air-lock-valve",
        name: "Rotary Air Lock Valve",
        image:
          "https://res.cloudinary.com/daafchadi/image/upload/v1777288779/Rotary_Air_Lock_Valve_q0qi9j.png",
      },
      {
        id: "motorized-rack-pinion-gate-valve",
        name: "Motorized Rack & Pinion Slide Gate 2",
        image:
          "https://res.cloudinary.com/daafchadi/image/upload/v1777288777/Motorized_Rack_Pinion_Slide_Gate_2_uwzrzh.png",
      },
      { id: "ss-bellows", name: "SS Bellows" },
    ],
  },
  {
    id: "fabrication-structural",
    name: "Fabrication & Structural Work",
    description:
      "Comprehensive fabrication services for coal handling structures, transfer houses, and custom industrial bins.",
    icon: "architecture",
    image:
      "https://res.cloudinary.com/daafchadi/image/upload/v1777290690/Fabrication_Structural_Work_aripk4.jpg",
    href: "/products/fabrication-structural",
    products: [
      { id: "coal-handling-structures", name: "Coal Handling Structures" },
      { id: "transfer-house", name: "Transfer House" },
      { id: "screen-house", name: "Screen House" },
      { id: "bins-custom-fabrication", name: "Bins & Custom Fabrication" },
    ],
  },
  {
    id: "screening-separation",
    name: "Screening & Separation",
    description:
      "Advanced vibrating screens and separation equipment for efficient material classification and sizing.",
    icon: "filter_alt",
    image:
      "https://res.cloudinary.com/daafchadi/image/upload/v1777290691/Screening_and_Seperation_lypkps.jpg",
    href: "/products/screening-separation",
    products: [
      {
        id: "vibrating-screen",
        name: "Vibratory Screening Machine",
        image:
          "https://res.cloudinary.com/daafchadi/image/upload/v1777288808/Vibratory_Screening_Machine_uc7qeq.png",
      },
    ],
  },
  {
    id: "specialized-equipment",
    name: "Specialized Equipment",
    description:
      "Precision-engineered solutions including motorised tripper trolleys, designed for high-efficiency automated distribution.",
    icon: "rocket_launch",
    image:
      "https://res.cloudinary.com/daafchadi/image/upload/v1777290689/Specialized_Equipments_ds2xw6.jpg",
    href: "/products/specialized-equipment",
    products: [
      { id: "motorised-tripper-trolley", name: "Motorised Tripper Trolley" },
      {
        id: "horizontal-shaft-impactor",
        name: "Horizontal Shaft Impactor",
        image:
          "https://res.cloudinary.com/daafchadi/image/upload/v1777288833/Horizontal_Shaft_Impactor_zngwq2.png",
      },
    ],
  },
];
