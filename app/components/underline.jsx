const UnderlineHighlight = ({ children }) => {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <svg
        viewBox="0 0 130 30"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-2 z-0"
      >
        <path
          d="M5,20 Q65,40 125,20"
          stroke="#f43f5e"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};
export default UnderlineHighlight;