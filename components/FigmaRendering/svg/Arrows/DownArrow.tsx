import './ArrowIcons.css';

interface DownArrowProps {
  strokeColor?: string, 
  strokeWidthNumber?: number, 
}

const DownArrow: React.FC<DownArrowProps> = (props: DownArrowProps) => {
  const iconColor: string = props.strokeColor ? props.strokeColor : "#000000";
  const pathProps = {
    stroke: iconColor, 
    fill: iconColor,
    strokeWidth: props.strokeWidthNumber !== undefined ? props.strokeWidthNumber : 1,
  }

  return (
    <svg viewBox="0 0 24 24" className="SVGIcon ArrowIcon DownArrowIcon">
      <path {...pathProps} d="M16.59 8.59L12 13.17l-4.59 -4.58L6 10l6 6 6 -6 -1.41 -1.41z"></path>
    </svg>
  );
}

export default DownArrow;