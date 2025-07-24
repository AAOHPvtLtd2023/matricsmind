"use client";

import HighlightHeading from "./HighlightHeading";
import { TextScrollBox } from "./TextScrollBox";

export default function SectionHighlightScroll() {
  return (
    <>
      <HighlightHeading />
      <TextScrollBox
        text="Canva Designer Motion Designer Video Editor AI Experts Brand Designer Visual Designer"
        default_velocity={3}
        containerClassName="my-10"
        itemClassName="text-base"
      />
    </>
  );
}
