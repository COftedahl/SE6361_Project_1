import './ArrowIcons.css';

interface DownArrowProps {

}

const DownArrow: React.FC<DownArrowProps> = () => {

  return (
    <svg viewBox="0 0 24 24" className="SVGIcon ArrowIcon DownArrowIcon">
      <path d="M16.59 8.59L12 13.17l-4.59 -4.58L6 10l6 6 6 -6 -1.41 -1.41z"></path>
    </svg>
  );
}

export default DownArrow;