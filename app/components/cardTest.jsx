"use client";

import CardCarousel from "../../components/ui/card-carousel";

export default function CardTest() {
  const images = [
    { src: "/images/projects/Automobile.jpg", alt: "Automobile", slug: "automobile", title: "Automobile" },
    { src: "/images/projects/Education.jpg", alt: "Education", slug: "education", title: "Education" },
    { src: "/images/projects/Goverment_Projects.jpg", alt: "Government Projects", slug: "government-projects", title: "Government Projects" },
    { src: "/images/projects/Healthy_Care.jpg", alt: "Healthcare", slug: "healthcare", title: "Healthcare" },
    { src: "/images/projects/Kids.jpg", alt: "Kids", slug: "kids", title: "Kids" },
    { src: "/images/projects/Packers_Movers.jpg", alt: "Packers and Movers", slug: "packers-movers", title: "Packers & Movers" },
    { src: "/images/projects/Real_Estate.jpg", alt: "Real Estate", slug: "real-estate", title: "Real Estate" },
    { src: "/images/projects/Resturant.jpg", alt: "Restaurant", slug: "restaurant", title: "Restaurant" },
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
