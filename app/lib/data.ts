import { HomeContent, CategorySectionsType } from "@/app/lib/definitions";

export const homeContent: HomeContent = [
  {
    name: "kitchenAppliance",
    images: [
      {
        src: "/kitchenAppliance/kitchenApplianceCover.webp",
        alt: "kitchen appliance",
      },
      {
        src: "/kitchenAppliance/airfrierCover.webp",
        alt: "kitchen appliance",
      },
      {
        src: "/kitchenAppliance/blenderCover.webp",
        alt: "kitchen appliance",
      },
      {
        src: "/kitchenAppliance/toasterCover.webp",
        alt: "kitchen appliance",
      },
      {
        src: "/kitchenAppliance/meatGrinderCover.jpg",
        alt: "kitchen appliance",
      },
      {
        src: "/kitchenAppliance/coffeMachineCover.jpg",
        alt: "kitchen appliance",
      },
      {
        src: "/kitchenAppliance/microWaveCover.webp",
        alt: "kitchen appliance",
      },
      {
        src: "/kitchenAppliance/electricGrillCover.webp",
        alt: "kitchen appliance",
      },
    ],
  },
  {
    name: "homeAppliance",
    images: [
      {
        src: "/homeAppliance/homeApplianceCover.png",
        alt: "home appliance",
      },
      {
        src: "/homeAppliance/builtIn.webp",
        alt: "home appliance",
      },
      {
        src: "/homeAppliance/cooker.webp",
        alt: "home appliance",
      },
      {
        src: "/homeAppliance/airConditioner.webp",
        alt: "home appliance",
      },
      {
        src: "/homeAppliance/fridge.webp",
        alt: "home appliance",
      },
      {
        src: "/homeAppliance/deepFreezer.webp",
        alt: "home appliance",
      },
      {
        src: "/homeAppliance/washingMachine.webp",
        alt: "home appliance",
      },
      {
        src: "/homeAppliance/dishWashingMachine.webp",
        alt: "home appliance",
      },
    ],
  },
];

export const categoryLinks = [
  { name: "أجهزة منزلية", href: "/categories/homeAppliance" },
  { name: "تلفيزيونات وشاشات", href: "/categories/tvAndScreens" },
  { name: "المطبخ والمنزل", href: "/categories/kitchenAppliance" },
];

export const categoryPages: {
  name: string;
  href: string;
  categorySections: CategorySectionsType;
}[] = [
  {
    name: "أجهزة منزلية",
    href: "/categories/homeAppliance",
    categorySections: [
      {
        title: "تكييفات",
        categories: [
          {
            image: "/categoryCarousel/airconditioners.png",
            name: "1تكييف",
          },
          {
            image: "/categoryCarousel/airconditioners.png",
            name: "2تكييف",
          },
          {
            image: "/categoryCarousel/airconditioners.png",
            name: "3تكييف",
          },
        ],
      },
      {
        title: "غسالات",
        categories: [
          {
            image: "/categoryCarousel/homeAppliances.png",
            name: "1غسالة",
          },
          {
            image: "/categoryCarousel/homeAppliances.png",
            name: "2غسالة",
          },
        ],
      },
    ],
  },
  {
    name: "تلفيزيونات وشاشات",
    href: "/categories/tvAndScreens",
    categorySections: [
      {
        title: "تلفيزيونات",
        categories: [
          {
            image: "/categoryCarousel/screens.png",
            name: "1تلفيزيون",
          },
          {
            image: "/categoryCarousel/screens.png",
            name: "2تلفيزيون",
          },
          {
            image: "/categoryCarousel/screens.png",
            name: "3تلفيزيون",
          },
        ],
      },
      {
        title: "شاشات",
        categories: [
          {
            image: "/categoryCarousel/screens.png",
            name: "1شاشة",
          },
          {
            image: "/categoryCarousel/screens.png",
            name: "2شاشة",
          },
        ],
      },
    ],
  },
];

export function getCategoryLinks() {
  const categoryLinks = categoryPages.map((categoryPage) => ({
    name: categoryPage.name,
    href: categoryPage.href,
  }));
  return categoryLinks;
}

export function getCategorySectionsByPathname(pathname: string) {
  const categoryPage = categoryPages.find(
    (categoryPage) => categoryPage.href === pathname
  );
  const categorySections = categoryPage?.categorySections;
  return categorySections;
}
