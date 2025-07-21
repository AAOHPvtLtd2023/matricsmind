"use client";

import { CardCarousel } from "../../components/ui/card-carousel";
export default function CardTest() {
  const images = [
  { src: "/images/image1.jpg", alt: "Image 1", href: "/projects/image1" },
  { src: "/images/image2.jpg", alt: "Image 2", href: "/projects/image2" },
  { src: "/images/image3.jpg", alt: "Image 3", href: "/projects/image3" },
];


  return (
    <div className="">
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  );
}
