import './ArrowIcons.css';

interface RightArrowProps {

}

const RightArrow: React.FC<RightArrowProps> = () => {

  return (
    <svg viewBox="0 0 24 24" className="SVGIcon ArrowIcon RightArrowIcon">
      {/* <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path> */}
      <path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6 -6 6 -1.41-1.41z"></path>
    </svg>
  );
}

export default RightArrow;