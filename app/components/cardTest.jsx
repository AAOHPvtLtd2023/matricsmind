"use client";

import { CardCarousel } from "../../components/ui/card-carousel";
export default function CardTest() {
const images = [
  { src: "/images/image1.jpg", alt: "Image 1", slug: "project-one", title: "Project One" },
  { src: "/images/image2.jpg", alt: "Image 2", slug: "project-two", title: "Project Two" },
  { src: "/images/image3.jpg", alt: "Image 3", slug: "project-three", title: "Project Three" },
];



  return (
    <section className="w-[90vw] flex justify-self-center">
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </section>
  );
}
