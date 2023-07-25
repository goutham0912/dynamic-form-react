const ReadMore = ({ expandedIndex, onClicked, currentIndex }) => {
  const onReadMoreClick = () => {
    if (currentIndex === expandedIndex) {
      onClicked(-1);
    } else {
      onClicked(currentIndex);
    }
  };
  return (
    <button
      className="inter text-sm text-purple flex items-center gap-2"
      onClick={(e) => {
        onReadMoreClick();
      }}
    >
      {expandedIndex === currentIndex ? "Read Less" : "Read More"}
      <svg
        fill="rgb(92, 126, 246)"
        width="16"
        height="16"
        viewBox="-5 -8 24 24"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin"
        className="jam jam-chevron-down mt-0.5"
      >
        <path d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z" />
      </svg>
    </button>
  );
};

export default ReadMore;
