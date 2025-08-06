"use client";

import CardCarousel from "../../components/ui/card-carousel";

export default function CardTest() {
  const images = [
    { src: "/images/projects/automobile.jpg", alt: "Automobile", slug: "automobile", title: "Automobile" },
    { src: "/images/projects/education.jpg", alt: "Education", slug: "education", title: "Education" },
    { src: "/images/projects/govermentprojects.jpg", alt: "Government Projects", slug: "government-projects", title: "Government Projects" },
    { src: "/images/projects/healthcare.jpg", alt: "Healthcare", slug: "healthcare", title: "Healthcare" },
    { src: "/images/projects/kids.jpg", alt: "Kids", slug: "kids", title: "Kids" },
    { src: "/images/projects/packersmovers.jpg", alt: "Packers and Movers", slug: "packers-movers", title: "Packers & Movers" },
    { src: "/images/projects/realestate.jpg", alt: "Real Estate", slug: "real-estate", title: "Real Estate" },
    { src: "/images/projects/resturant.jpg", alt: "Restaurant", slug: "restaurant", title: "Restaurant" },
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
