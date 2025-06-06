import './ArrowIcons.css';

interface LeftArrowProps {

}

const LeftArrow: React.FC<LeftArrowProps> = () => {

  return (
    <svg viewBox="0 0 24 24" className="SVGIcon ArrowIcon LeftArrowIcon">
      <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
    </svg>
  );
}

export default LeftArrow;