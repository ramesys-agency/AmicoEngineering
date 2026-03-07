import GalleryItem from "./GalleryItem";

const GALLERY_DATA = [
  {
    title: "Automated Assembly Line",
    subtitle: "Sector 4 - 2023",
    category: "Assembly",
    imageAlt: "Automated robotic arm assembly line",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBon6wbeup3oWidzBarM6a423ar_TmglYxLrc4nWVmUXpGX30Sj65LTEgA9ZeRGH30NvdhbTbeBpdOk-xRBa7JbZW9bugwN-f5xMj8w64qtwzvxcsavhBGTRlTwmDecdOWGUIZ_awiguHmGvgF7h3chpaSiUic4x1hMxgsnFKTee4csjxcoj6BVmJNjBHpfG14E34prhhQaDr4zK8t8f8jKVlIp_5OW0q4QVtD1FpINpH9Z0eLuDSDnfj7RoB7StbgacUQ4WQGYTdO4",
  },
  {
    title: "CNC Machining Center",
    subtitle: "Unit 12",
    category: "Machinery",
    imageAlt: "Precision CNC machining center",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBt3E4Htnf44SkQovlKd23k_r_vYd9ld2NO_4rI3fi8R4wfRJ_08f-WwNGMWN6g61ZkH6yrsUuRxHK7cBHzjplnBCvn-I_3POZjRWdTwX1GU_SD0m-NCPBS62iPwqblsmB7nmEoPqRyFjbrxejpvLwrx46utHUIAq3fvjdpQIXUG58zMEf191lsvcp8QBDH1ppVXzzfeDKhjdoJKVtAkV-lpFEC-aDEzG87FtDCkpIhpCIyss3gWtNofiTT5hmxbshUS67871HGWuP1",
  },
  {
    title: "High-Precision Welding",
    subtitle: "Sector 7",
    category: "Assembly",
    imageAlt: "Sparks flying during welding process",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAlqpp4qgXJ_HBJZVLao41J0oyEqeGfw3jijiK0JrjZqeK_3QLdu_seHl1DKLLZZoNF_yCF8NGJIFJM4kpahDGDGXpaHhWDuRw6EalgsWbPF3YTOFxpa7Xium9eDh0XKZIsC1REFDrHIyW_zo5QmWZHPEdTtmfMTs7irpeZ9ytuvsbLoPMBMA-CraQvpV6wttEhMmTxyA1getydRfWN2Ld2vCMJzDdXXe_66kDgvT7qvVPpWD4_pLzPOINyyzh0L1i3wE8SG6UELVlW",
  },
  {
    title: "Logistics Hub",
    subtitle: "Distribution North",
    category: "Logistics",
    imageAlt: "Large logistics warehouse shelves",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAY_YmAEm_pLgHCaMBR8lkfvKFOrMxiPAjNLeFO5YnDlnfZ8A6WLhN_JywnjWoEZjGpisIr1nQCogkBET6mFqVEFTm3-HvY_t_uU4D4e2Huol7X5iHLW8-jvyr2v79QA1e24Rdru2HJeUGcuUOkWDfs_fqG4QdBoEiupFczyXHEbtlxBa3skacjlcZDRjJ9B5UEVKrp9gTjjmUmf2UG7x_qoVWKS4tfyNe_rqYA5kJisxpNFbqRCOzzNe7U7F7NnV7IfQxx7eYt2D2m",
  },
  {
    title: "Heavy Hydraulic Press",
    subtitle: "Model X-200",
    category: "Machinery",
    imageAlt: "Industrial hydraulic press machine",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAeKhwB0fdRFDAfPucnsP-qCyHzwD5VrbYTgCutC62kvOjbzhbQJJKMhFWiSmmd5T1riK5SZhh8Wv9sBMUJ5wdEoLhFSuTz6Rt4HEV2Eabo8clelGd6vrSWbfOtYU7NuzEiOEm4p1-xU3Rve3mQWWE1T0f1a8EQ2ky_KkQDDHpI9Wm2uT6kWswGVg0K5Vwucf90cuctDt7N5Vpe4Trv4VoirazGeAt64n9N8zezuH2DYhzE-i75pJ8spxM6sFdZ4NEm9ILY2uj1gPvW",
  },
  {
    title: "Quality Control Lab",
    subtitle: "ISO Testing",
    category: "Facilities",
    imageAlt: "Quality control laboratory equipment",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4Abs_CR0-nA02xOgBFgOd5eICMvj-PHB0Bb6g6y5iWoxvr7Z-pfcFVPgvfZYpkUL-uoAD0-inIjvdVfQQFfHNMVydorgrtjtiNJy-ek-lw_krJ9024qy8XGXFTvQiEgXRx9iz6dSMSIxsyYIphS0bQi8C1-vxu9GugUyjcKFcKZnVmZDMwkxkfZxpTl7uIb_o7yE1VRMMM9EITz44VQM1sWJRaeOxOxS4FBzfJRZ0dgXZdtfc8QUejxGbJiz3m8EEPAuIkoG3yC2T",
  },
  {
    title: "Steel Fabrication",
    subtitle: "Structural Beam",
    category: "Facilities",
    imageAlt: "Steel beams fabrication site",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA1l6QTJPvrmddmJeiiO-oq4H236tij4sfHbwPmU_crPkHaoBm5Yb2FqnSEoVyb6KPYJbHev5Ak9GEPeq3Nu_13-PanJxUfeEYhFdOzh5z4jzi5cGkqq05oFPpo_eMZRYE6Tj6t24s99X7Q5Q4tLLQ2wVjypIq1Il-Fezk0_xOBosvboPvV1-6Yuo_ELoba0S0MW9Q46ocFP-8qVh8xtzoAHaro7y1Kgo66ofzUA0oFERsh1stNlKB5SGMiEmIatdw4NYkQCXQDqmyd",
  },
  {
    title: "Global Logistics",
    subtitle: "Rotterdam Port",
    category: "Logistics",
    imageAlt: "Shipping containers at port",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDRS1UFk__Wj7QCr0IY6TR64TlbI56f_SJbke8TFLDgaRwfHdSptyxNp50J8w1SVq0sZhwn99mSPSrxH2Qy508LDD-02373mL8PA0ypByVZPQr0eoyb2zCEuTjDA5sp9QA-idaJj9sGmTtSpoRZJkMLgndFgDTW5UbET9W9Da4CsM8RHy4JlrkJ6BeJQaCmXzcQOCN6K62TeSnzBpF_f5VQUPaVYsdWpWxzgusjxjBreSNyCc78btFuevMJ5F3cgXKBH4rcd0uqs-R",
  },
  {
    title: "Turbine Assembly",
    subtitle: "Energy Sector",
    category: "Assembly",
    imageAlt: "Turbine engine manufacturing",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCz3P0vPKDAOW-phyYSLGL9aROpUiPAaEDXRrs50FpNFCleCv5fOO79W50Mc_i-H2G_27UZf-uq4vGcypGzouieq5cFjafibSM1k8TCTdzd7JK92oouc-680jescSCAU1AYCDt6-M9QR-QCvVGuLa3NrT_KIfVP1tIjS05GiL_QQmwfg7PErw86GZhAcAGTJ58Xmq45BYhwwZETriPCcz6MrUVaNnvu6uygZG-mpcPD0sFxmTi8rGcPCsNGuUcT28X_Tkm2WupXNacC",
  },
  {
    title: "Electronics Unit",
    subtitle: "Micro Components",
    category: "Assembly",
    imageAlt: "Close up of circuit board manufacturing",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6ss8dgKTpvGNBEwrB9aCRfU66AyhXQIGyO8ZI32kunyJXblpfT9FDIVZihV5FJodO4yb0lycNhyJfphQxslPub-mFyLh-oINBn7feTCuH-Ob9qIZDx9tfElrtjKt4WYhXYv9dU-JKjC_6iqFLmrJYWOOZZYG2uicw3lhbJD_yr0k2fIBZT_nsH4nXOCRAHRXWp-NIn5brAsThTOb_xJUOqPjJUEx8x-gSjs5AyQwyI0QKv9-Im3-C0fF1NV_hl3-5D5MYRVjIDHLu",
  },
  {
    title: "Material Handling",
    subtitle: "Forklift Fleet",
    category: "Logistics",
    imageAlt: "Warehouse worker with forklift",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdeEbI3Yj36SnMj4a5RjNU9LVZO3TxVIMK6gASuEBZlW83ce7pXn2LLu7LqOruMGbgJ0ozUkei246RRV6zGR0mgqlaiGRrFpxPeq4Zi767B9VoxF03uOZckzYH8zTIisLOARZ_vSxcWOBY_Qokj-_d32wlpdlgP_XbI9JSFnAjWB5WZhAImzJIpyCn5yrpoCQePer6WnJl5f1cogTi8UgxgV0r9vWZ65cZFpf4-GpPjDbCUHCAJgHE6HI0nf1-CmH2jxOWvEh_bA0r",
  },
  {
    title: "Petrochemical Plant",
    subtitle: "Refinery A",
    category: "Facilities",
    imageAlt: "Oil refinery pipes and towers",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ9vSdJu6Q1PA9m8vcUc0zpW95ttl1yXzQGugEnf-RxLPCqc5M8LZmNNtpNQgqSN_ilF8ki9quJPCVGmbjzWdqNCcd_-kxEd8PuPPBsIkYaBTp7U3XDumW22oYPMp77Pi9zRt2s9LmCjIloQwim44-nGWbmTbp6fozTLY0h5hrpKWNvZL6z4FL6OIYDlyhVLhchu12HiRxT-eUJAfas-beLCuoZ1_rTRZOu-fq_2HCucQDBwyWJE7UEHRoY2xCq_Gaqes-ZxnuDTkb",
  },
];

interface GalleryGridProps {
  activeFilter: string;
}

export default function GalleryGrid({ activeFilter }: GalleryGridProps) {
  const filteredData =
    activeFilter === "All Projects"
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === activeFilter);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {filteredData.map((item, index) => (
        <GalleryItem key={index} {...item} />
      ))}
    </div>
  );
}
