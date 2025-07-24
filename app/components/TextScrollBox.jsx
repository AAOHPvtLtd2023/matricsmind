import { TextScroll } from "../../components/ui/text-scroll";

export const TextScrollBox = ({
  text,
  default_velocity = 10,
  itemClassName = "",
  className = "",
  containerClassName = "",
}) => {
  // Split text and wrap each word in a pill
  const wrappedText = text.split(" ").map((word, i) => (
    <span
      key={i}
      className={`inline-block px-4 py-1 mx-1 rounded-full border border-yellow-400 text-yellow-300 text-5xl font-medium whitespace-nowrap ${itemClassName}`}
    >
      {word}
    </span>
  ));

  return (
    <div>
      <TextScroll default_velocity={default_velocity} className={className}>
        {wrappedText}
      </TextScroll>
    </div>
  );
};
