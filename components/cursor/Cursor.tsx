import CursorSVG from "@/public/assets/CursorSVG";

interface IProps {
  color: string;
  x: number;
  y: number;
  message: string;
}

const Cursor = ({ color, x, y, message }: IProps) => {
  return (
    <div
      className='pointer-events-none absolute left-0 top-0'
      style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
    >
      <CursorSVG color={color} />

      {/* MESSAGE */}
    </div>
  );
};

export default Cursor;
