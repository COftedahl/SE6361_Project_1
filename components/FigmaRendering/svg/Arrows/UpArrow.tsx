import './ArrowIcons.css';

interface UpArrowProps {

}

const UpArrow: React.FC<UpArrowProps> = () => {

  return (
    <svg viewBox="0 0 24 24" className="SVGIcon ArrowIcon UpArrowIcon">
      <path d="M16.59 15.41L12 10.83l-4.59 4.58L6 14l6 -6 6 6 -1.41 1.41z"></path>
    </svg>
  );
}

export default UpArrow;