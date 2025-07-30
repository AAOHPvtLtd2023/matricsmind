import { TextScroll } from "../../components/ui/text-scroll";

export const TextScrollBox = ({
  text,
  default_velocity = 10,
  itemClassName = "",
  className = "",
  containerClassName = "",
}) => {
  const wrappedText = text
    .split("\n") // split by line, not space
    .filter(line => line.trim() !== "") // remove empty lines
    .map((line, i) => (
      <span
        key={i}
        className={`inline-block px-4 py-1 mx-1 rounded-full border border-[#ff9100] text-[#fff] text-5xl font-medium whitespace-nowrap ${itemClassName}`}
      >
        {line.trim()}
      </span>
    ));

  return (
    <div className={containerClassName}>
      <TextScroll default_velocity={default_velocity} className={className}>
        {wrappedText}
      </TextScroll>
    </div>
  );
};
