import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "At the heart of our mission is a commitment to excellence and customer satisfaction. We strive to make the process of creating custom furniture an enjoyable and fulfilling experience",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Our vision is to revolutionize the world of custom furniture by combining innovation and creativity to craft timeless pieces that elevate living spaces. We strive to be the leading name in bespoke furniture.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Founded with a passion for craftsmanship and a dedication to personalized design, our journey began as a small workshop focused on creating unique, custom-made furniture.",
  },
];

export const products_url = "https://www.course-api.com/react-store-products";

export const single_product_url = `https://www.course-api.com/react-store-single-product?id=`;
