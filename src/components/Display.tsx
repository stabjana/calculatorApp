import "../index.css";

interface DisplayProps {
  display: string;
}

export default function Display({ display }: DisplayProps) {
  let niceDisplay = display ? display.slice(0,14) : "0"; // limit to 14 numbers on the display
  niceDisplay = parseFloat(niceDisplay).toString();  // and cut unneccessary zeros

  return (
    <div className="display-container">
      {<h1>{niceDisplay}</h1>} 
    </div>
  );
}
