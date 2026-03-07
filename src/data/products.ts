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

export const products: Product[] = [
  {
    id: "heavy-duty-belt",
    categoryId: "conveyors",
    series: "Series 7000",
    name: "Heavy Duty Belt Conveyor",
    description:
      "Optimized for high-volume bulk material handling in the most demanding mining and aggregate environments.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBwaJUSo2B25Xsv12jrgZyOG777SgtLGzHaWreScd3OXcn2lwn4dWt122_L8PAQxkiGQhSXCMIJ9gCy8FJVzp2UDmrvkRXZuSFJT25Hc-EYETzTciEQu8ieOqbgeDWXs5Iyveav0uQ_5cTLDqwNCixPjUXIXntY03msYT_t5jwwPzpJaYfKexLiPnSu5qkzJcL6QzAMXt_LKBWazY4LytHR3upASrEc5RkoDuTKz84If0g-nyhe8ITS_Pa4DHQj5pMJLLy0BLTlQwC2",
    tag: "Best Seller",
    tagColor: "bg-primary",
    sku: "BC-7000-HD",
    specs: [
      { icon: "weight", label: "2000 kg/m" },
      { icon: "straighten", label: "1800mm max" },
    ],
  },
  {
    id: "modular-chain",
    categoryId: "conveyors",
    series: "Series 3500",
    name: "Modular Chain Conveyor",
    description:
      "Flexible, modular design perfect for packaging lines and specialized food processing applications.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnQgbmdIr3IEN2NSHiZotz5MV18DfBp_J7k0TgvvNnRMgd2C96Wara_tuNlijSYhZ79qW7ZTQFPMPZph6Hz8W5hN7_DVc3BJBD0iAq6NWbDnJHF2TjejMQmSMdqU_wGvrYhsA8Tau8hQ-lW7PzPxth5OlImWdQFtQ1h49e64wZwRCXYeFRPhL9-lYDAsCElHOKUDTwReksOk4c1eRnvaOuNvMjhILcmeqeodbGoFOl-V-IUGrj20HFwiRPx7d-Ij-YnktqvIzK7qp6",
    sku: "MC-3500-S",
    specs: [
      { icon: "weight", label: "150 kg/m" },
      { icon: "category", label: "SS 304" },
    ],
  },
  {
    id: "gravity-roller",
    categoryId: "conveyors",
    series: "Series 2000",
    name: "Gravity Roller Conveyor",
    description:
      "Reliable, cost-effective solution for smooth manual transport of boxes and warehouse totes.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAy4nyA1Ufl9drYmlzv_pldqaCFdWi7tqGQd2Uy6zVtN_yJ_EqUi2bxWtjQFH4Q_7GdH6638qsD3Y8c1fM30Rgk8V4QJrRAq2N3EFkS2umLyj0ZvyfSRrIPFVnghYdugDYoV54hnrLB54u3z5RDsp9K3vUHsBL9zo-Kfg8hP9oMuK-hlcLgw_VdqaXVBhv3bwhlloDqeXNE0r2oRW0U6HQ9b1tDnSG-sON6LfDbEq2RRMUyloIma2rsF1OkwEgHxn-AZY3ce03JbnLm",
    tag: "In Stock",
    tagColor: "bg-slate-800",
    sku: "RC-2000-G",
    specs: [
      { icon: "weight", label: "120 kg/roll" },
      { icon: "grid_on", label: "Galvanized" },
    ],
  },
  {
    id: "zero-pressure",
    categoryId: "conveyors",
    series: "Series 5500",
    name: "Zero Pressure Accumulation",
    description:
      "Smart electronic sensing ensures fragile products never collide during high-speed transport.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ8lBfRkMnNzs0WprsKKGzlnSoy-z3CPja1khXZbKz4Jyh2_ZDASdHi4BZIYdArDS3gBS-4mIKcphZg9wetUsLxegJcvhlm4iIgaspphPDtemVSlj1kjnGPZJORGG3YMrjJAtfThVaYlosM2soLqmrgURryWiX-emFvtS8RbVR1l2b8npb_5y5hdVyr4Qv9rLHIUAnEo4MJ2ai793zVJTa4amD7N82eZjqlbpahzwd6BilhBSLa53-N78eh6gViQpNrHTR9ietfOUR",
    sku: "ZPA-5500-E",
    specs: [
      { icon: "conveyor_belt", label: "40 cpm" },
      { icon: "bolt", label: "24V DC" },
    ],
  },
  {
    id: "inclined-belt",
    categoryId: "conveyors",
    series: "Custom Line",
    name: "Inclined Belt Systems",
    description:
      "High-traction cleated belts designed for elevation changes and multi-level floor plans.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBwaJUSo2B25Xsv12jrgZyOG777SgtLGzHaWreScd3OXcn2lwn4dWt122_L8PAQxkiGQhSXCMIJ9gCy8FJVzp2UDmrvkRXZuSFJT25Hc-EYETzTciEQu8ieOqbgeDWXs5Iyveav0uQ_5cTLDqwNCixPjUXIXntY03msYT_t5jwwPzpJaYfKexLiPnSu5qkzJcL6QzAMXt_LKBWazY4LytHR3upASrEc5RkoDuTKz84If0g-nyhe8ITS_Pa4DHQj5pMJLLy0BLTlQwC2",
    sku: "SP-8800-X",
    specs: [
      { icon: "height", label: "Up to 45°" },
      { icon: "speed", label: "2.0 m/s" },
    ],
  },
  {
    id: "pallet-handling",
    categoryId: "conveyors",
    series: "Heavy Logistics",
    name: "Pallet Handling Series",
    description:
      "Robust chain-driven live roller conveyors designed specifically for standardized palletized loads.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAy4nyA1Ufl9drYmlzv_pldqaCFdWi7tqGQd2Uy6zVtN_yJ_EqUi2bxWtjQFH4Q_7GdH6638qsD3Y8c1fM30Rgk8V4QJrRAq2N3EFkS2umLyj0ZvyfSRrIPFVnghYdugDYoV54hnrLB54u3z5RDsp9K3vUHsBL9zo-Kfg8hP9oMuK-hlcLgw_VdqaXVBhv3bwhlloDqeXNE0r2oRW0U6HQ9b1tDnSG-sON6LfDbEq2RRMUyloIma2rsF1OkwEgHxn-AZY3ce03JbnLm",
    sku: "PH-9000-P",
    specs: [
      { icon: "weight", label: "1500 kg/pal" },
      { icon: "settings", label: "Motorized" },
    ],
  },
];
