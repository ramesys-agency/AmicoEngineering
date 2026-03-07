// src/data/categories.ts

export type Category = {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  href: string;
};

export const categories: Category[] = [
  {
    id: "conveyors",
    name: "Conveyor Systems",
    description:
      "Heavy-duty belt, roller, and chain conveyors designed for maximum throughput and reliability.",
    icon: "conveyor_belt",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGTRr1trT7FQKL2c4cy6YTzOqGaXT6yqUSDG8loxgO5FPTWneQRyD-satCwSejNjJaMqT_-tqp-0YY_zDNbpmnjNZKJbwZvFsaFigJC1GSrTgyOZY1DuBYjZaEU2KLnCt9dpMRpaKeH9BKJF711z9AqQsLxOdhCg6_5D3B9jSSOrURtvCSJo1vWDvFYvr-PcrL74Z9XoQ81hQ4O0kv5dwtubsK9T1OVJTwGd74_XMzJ2loeh2bzDLgR_ujrGoTacbp2dnfMLvIQxKC",
    href: "/products/conveyors",
  },
  {
    id: "robotics",
    name: "Robotic Automation",
    description:
      "State-of-the-art robotic arms and pick-and-place systems for precision assembly.",
    icon: "precision_manufacturing",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhSdKun-2MKWnXZ7Rj65PbgcYe6gFlbN1J5ciplOILteUQsIf722mjimst51MFVblkxg2uNyHbCauzBhtPWnoqfWQ4fqnbEixurQsEh13IZZw_6arQk4VLLQeQi2zjJu9k1VlAcdRE_QNNXPcRLAhbeTmttoaRA63-ALD3DIO8gzNtpPXe5kJmNEbXafUskrN9unbokQmrfOmhpJPKB7mKq-WIgUbo66sTfkh4uckw9e9EzCMxUpIY57qOiD1ySmytRSBG2iYk5Eo7",
    href: "/products/robotics",
  },
  {
    id: "controls",
    name: "Control Panels",
    description:
      "Custom-built electrical control panels with PLC integration and HMI interfaces.",
    icon: "settings_input_component",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAk8m2BL_yCdkMbObDAHcaWJBtoUNUpJqp0UWd7C_4ROaomqYXNnz08a842LepjDItE23EFF5KSXX3m830IwRl4aVGQtQFyiskj6GzmIGi96XmIqy-0zcRKYyi6pSc4yWU6DjQ2ye2IgzNogtCm9ezLyTRQqQ8e2McyyHUtrRR5n4SCuRYnWQSsslZR5vaR4QEn1u9VM6EEasxi_YcShLpYT9YvS88LYKNLk_SchgVhaeeArqhoeodC7Vjl7WOTwtezIWN2_0YQMOCG",
    href: "/products/controls",
  },
  {
    id: "feeding",
    name: "Feeding Systems",
    description:
      "Vibratory bowl feeders and centrifugal feeders for efficient part orientation.",
    icon: "move_down",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKHjahriCnprTLIMci31Ohb4rs_K7OG1v9BET5LkRefZW8RHXW3Es0JcLfJiq8hOsVAuLQYLyWdQDqyfZU_G7LY3XmTjvItXsMNwDp4AoHf9Hlc87kQXXeGcsIQT9jjanRn5b6X1EPemq2vKKE86d20ULTkxEmtHco7hev2NGnuyikfWCWat6xD5g5tzzNs5TjjCbhxLSr-V2Tl6-5CvcFolR8P3Xw6PzttjdxH05R8YRYfsCOep3gIXXEYWxZ_s6yy3AY7oVtwrMi",
    href: "/products/feeding",
  },
  {
    id: "transmission",
    name: "Transmission Parts",
    description:
      "High-torque gears, sprockets, and chains built for extreme industrial environments.",
    icon: "settings",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDK3D4yLoKkXGjPy4XnYQXhWwAhvVEo4_TMwdVz41i6MAWmEuocIYK49hnM9j34cquuPzTM4MuHHJ69VyVVcTfIdBjuctNMZGR693u9bNElLumen3Q75AaAEvtelUem4i9S899Iriiec--vZbDjM1ZkiDDFiWrT54f6E6-0HrcJa0zlzXzfr-7Eg4WGLxHK0QKaJlvhjuGIaps_Wd8gfv6LBqfPH4w0WoJn80-loMQCyK3gHBpjUomCrU_QMteTkBljPMEVewjSAozy",
    href: "/products/transmission",
  },
  {
    id: "packaging",
    name: "Packaging Solutions",
    description:
      "End-of-line packaging machines including wrappers, case packers, and palletizers.",
    icon: "inventory_2",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlpM0Zt5k_L-Es6Gt3X-1TJIjZuKKPTYSxWq1rsjB4lWHw5OnELGHhauK5Lkn7WG4_LbhNhJTZSJQ8FU7U6CCacecieG2JnbNV9fNvqmMedYKMiymwoLLK8Wy507MKDtmxsCufEfwRCzNmpkbZ1jzJsw9WGIaNQZpY2qLJD4ysZOnbj57XCGAaz0hYaIsMRAPIBqlapBnWrDmJZRaOYzFHAKxj_v_n3r6LckN3DL5l8WuD6bp1oBIgiumNsu4dTnJeZe7M7O0EJtNs",
    href: "/products/packaging",
  },
];
